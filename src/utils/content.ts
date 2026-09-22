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

export function resolveRelated(entry: GrammarEntry, all: GrammarEntry[]): GrammarEntry[] {
  const slugMap = buildSlugMap(all);
  const result: GrammarEntry[] = [];
  const seen = new Set<string>();

  for (const reference of entry.data.related ?? []) {
    const exact = slugMap.get(reference);
    let target: GrammarEntry | undefined;

    if (exact?.length === 1) {
      target = exact[0];
    } else if (getCategory(reference)) {
      const inCategory = all
        .filter((candidate) => parseId(candidate.id).category === reference)
        .sort((a, b) => (a.data.order ?? 100) - (b.data.order ?? 100));
      target = inCategory[0];
    }

    if (target && target.id !== entry.id && !seen.has(target.id)) {
      result.push(target);
      seen.add(target.id);
    }
  }

  return result;
}

export function categoryUrl(category: string): string {
  return withBase(`/es/${category}/`);
}

export function categoryLabel(category: string): string {
  return getCategory(category)?.titleUk ?? category;
}
