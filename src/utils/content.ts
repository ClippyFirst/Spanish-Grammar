// Helpers for building URLs and resolving related topics.
import type { CollectionEntry } from 'astro:content';

export type GrammarEntry = CollectionEntry<'es'>;

// Astro `type: 'content'` collections generate IDs like "category/slug"
// (e.g. "verbs/ser-estar"), WITHOUT the language prefix.
// We hardcode the language here because this project currently has only one
// content collection ("es") and future langs get their own collections.
export const CONTENT_LANG = 'es';

// A parsed entry id with the language made explicit.
export interface EntryPath {
  lang: string;
  category: string;
  slug: string;
}

export function parseId(id: string): EntryPath {
  // Astro v5 content ids may include the file extension ("verbs/ser-estar.mdx").
  // Strip it so slugs and URLs never contain ".mdx".
  const clean = id.replace(/\.(mdx|md)$/i, '');
  const parts = clean.split('/');
  // Astro `type: 'content'` collections generate IDs like "verbs/ser-estar"
  // (category/slug), WITHOUT the language prefix. We hardcode the language
  // because this project currently has only one content collection ("es").
  if (parts.length === 2) {
    return { lang: CONTENT_LANG, category: parts[0], slug: parts[1] };
  }
  // Fallback: lang/category/slug...slug (handles nested slugs like
  // "pronouns/leismo-laismo-loismo/algo") or older 3-part ids.
  return {
    lang: parts[0] === CONTENT_LANG ? CONTENT_LANG : CONTENT_LANG,
    category: parts[1] ?? '',
    slug: parts.slice(2).join('/'),
  };
}

// Stable, readable URL: /es/<category>/<slug>/
export function entryUrl(entry: GrammarEntry): string {
  const { lang, category, slug } = parseId(entry.id);
  return `/${lang}/${category}/${slug}/`;
}

// Build a lookup so `related` frontmatter slugs resolve to real pages.
// Keys are entry slugs (e.g. "ser-estar", "presente-de-indicativo").
export function buildSlugMap(entries: GrammarEntry[]): Map<string, GrammarEntry> {
  const map = new Map<string, GrammarEntry>();
  for (const e of entries) {
    const { slug } = parseId(e.id);
    map.set(slug, e);
  }
  return map;
}

// Resolve related slugs for an entry, skipping missing ones (no dead links).
//
// Related entries in frontmatter can be:
//  - exact entry slugs (e.g. "ser-estar", "presente-de-indicativo")
//  - category names (e.g. "adjectives", "nouns", "verbs")
//
// Category-name references are resolved to the first entry in that category
// (so a link always points to an existing page, not a 404).
export function resolveRelated(entry: GrammarEntry, all: GrammarEntry[]): GrammarEntry[] {
  const slugMap = buildSlugMap(all);

  // Build a map of category → first entry in that category (for resolving category names)
  const entriesByCategory = new Map<string, GrammarEntry[]>();
  for (const e of all) {
    const { category } = parseId(e.id);
    if (!entriesByCategory.has(category)) {
      entriesByCategory.set(category, []);
    }
    entriesByCategory.get(category)!.push(e);
  }

  // Sort entries within each category by order so category-name references
  // consistently resolve to the "first" (lowest order) entry.
  for (const [, entries] of entriesByCategory) {
    entries.sort((a, b) => (a.data.order ?? 100) - (b.data.order ?? 100));
  }

  const related = entry.data.related ?? [];

  return related.map((s) => {
    // 1. Try exact slug match first
    const exact = slugMap.get(s);
    if (exact) return exact;

    // 2. Try resolving as category name → first entry in that category
    const entriesInCat = entriesByCategory.get(s);
    if (entriesInCat && entriesInCat.length > 0) {
      return entriesInCat[0];
    }

    // 3. If nothing found, skip (no dead links)
    return undefined;
  }).filter((e): e is GrammarEntry => Boolean(e));
}

export function categoryUrl(category: string): string {
  return `/es/${category}/`;
}

export function categoryLabel(category: string): string {
  const map: Record<string, string> = {
    fundamentals: 'Основи',
    nouns: 'Іменники',
    articles: 'Артиклі',
    adjectives: 'Прикметники',
    adverbs: 'Прислівники',
    pronouns: 'Займенники',
    prepositions: 'Прийменники',
    conjunctions: 'Сполучники',
    verbs: 'Дієслова',
    tenses: 'Часи',
    moods: 'Способи',
    periphrases: 'Дієслівні конструкції',
    'sentence-structure': 'Структура речення',
    'word-formation': 'Словотвір',
    spelling: 'Орфографія',
    regional: 'Регіональні варіанти',
  };
  return map[category] ?? category;
}