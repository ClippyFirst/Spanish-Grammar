// Helpers for building URLs and resolving related topics.
import type { CollectionEntry } from 'astro:content';

export type GrammarEntry = CollectionEntry<'es'>;

// A content entry id looks like "es/verbs/ser-estar".
export interface EntryPath {
  lang: string;
  category: string;
  slug: string;
}

export function parseId(id: string): EntryPath {
  const parts = id.split('/');
  return {
    lang: parts[0] ?? 'es',
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
export function buildSlugMap(entries: GrammarEntry[]): Map<string, GrammarEntry> {
  const map = new Map<string, GrammarEntry>();
  for (const e of entries) {
    const { slug } = parseId(e.id);
    map.set(slug, e);
  }
  return map;
}

// Resolve related slugs for an entry, skipping missing ones (no dead links).
export function resolveRelated(entry: GrammarEntry, all: GrammarEntry[]): GrammarEntry[] {
  const map = buildSlugMap(all);
  const related = entry.data.related ?? [];
  return related.map((s) => map.get(s)).filter((e): e is GrammarEntry => Boolean(e));
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