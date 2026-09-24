import type { CollectionEntry } from 'astro:content';
import { getCategory } from '../data/categories';

export type GrammarEntry = CollectionEntry<'es'>;
export const CONTENT_LANG = 'es';

const SITE_BASE = (import.meta.env.BASE_URL ?? '/').replace(/\/$/, '');

export function withBase(path: string): string {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${SITE_BASE}${normalized === '/' ? '/' : normalized}`;
}

export interface EntryPath {
  lang: string;
  category: string;
  slug: string;
}

export function parseId(id: string): EntryPath {
  const clean = id.replace(/\.(mdx|md)$/i, '');
  const parts = clean.split('/').filter(Boolean);
  if (parts.length >= 2) {
    return { lang: CONTENT_LANG, category: parts[0], slug: parts.slice(1).join('/') };
  }
  return { lang: CONTENT_LANG, category: '', slug: parts[0] ?? '' };
}

export function entryUrl(entry: GrammarEntry): string {
  const { lang, category, slug } = parseId(entry.id);
  return withBase(`/${lang}/${category}/${slug}/`);
}

/**
 * Stable editorial order used everywhere a topic receives a visible number.
 * Frontmatter order remains source metadata; the visible number is the
 * position within the category after applying the same deterministic sort.
 */
export function sortGrammarEntries(entries: GrammarEntry[]): GrammarEntry[] {
  return [...entries].sort((a, b) => {
    const aPath = parseId(a.id);
    const bPath = parseId(b.id);
    const categoryDelta =
      (getCategory(aPath.category)?.order ?? 999) - (getCategory(bPath.category)?.order ?? 999);
    if (categoryDelta !== 0) return categoryDelta;

    const orderDelta = (a.data.order ?? 100) - (b.data.order ?? 100);
    if (orderDelta !== 0) return orderDelta;

    return aPath.slug.localeCompare(bPath.slug);
  });
}

export function buildTopicNumberMap(entries: GrammarEntry[]): Map<string, number> {
  const numbers = new Map<string, number>();
  const counters = new Map<string, number>();

  for (const entry of sortGrammarEntries(entries)) {
    const { category } = parseId(entry.id);
    const next = (counters.get(category) ?? 0) + 1;
    counters.set(category, next);
    numbers.set(entry.id, next);
  }

  return numbers;
}

export function buildSlugMap(entries: GrammarEntry[]): Map<string, GrammarEntry[]> {
  const map = new Map<string, GrammarEntry[]>();
  for (const entry of entries) {
    const { slug } = parseId(entry.id);
    const bucket = map.get(slug) ?? [];
    bucket.push(entry);
    map.set(slug, bucket);
  }
  return map;
}

function resolveReference(reference: string, all: GrammarEntry[]): GrammarEntry | undefined {
  const slugMap = buildSlugMap(all);
  const exact = slugMap.get(reference);
  if (exact?.length === 1) return exact[0];

  if (getCategory(reference)) {
    return all
      .filter((candidate) => parseId(candidate.id).category === reference)
      .sort((a, b) => (a.data.order ?? 100) - (b.data.order ?? 100))[0];
  }

  return undefined;
}

export function resolveReferences(
  references: string[] | undefined,
  entry: GrammarEntry,
  all: GrammarEntry[],
): GrammarEntry[] {
  const result: GrammarEntry[] = [];
  const seen = new Set<string>();

  for (const reference of references ?? []) {
    const target = resolveReference(reference, all);
    if (target && target.id !== entry.id && !seen.has(target.id)) {
      result.push(target);
      seen.add(target.id);
    }
  }

  return result;
}

export function resolveRelated(entry: GrammarEntry, all: GrammarEntry[]): GrammarEntry[] {
  return resolveReferences(entry.data.related, entry, all);
}

export function categoryUrl(category: string): string {
  return withBase(`/es/${category}/`);
}

export function categoryLabel(category: string): string {
  return getCategory(category)?.titleUk ?? category;
}
