import type { CollectionEntry } from 'astro:content';
import { withBase } from './content';

export type ComparisonEntry = CollectionEntry<'comparisons'>;

export function comparisonUrl(slug: string): string {
  const cleanSlug = slug.replace(/\\.(mdx?|md)$/i, '').replace(/^\\/+|\\/+$/g, '');
  return withBase(`/comparisons/${cleanSlug}/`);
}

export function sortComparisons(entries: ComparisonEntry[]): ComparisonEntry[] {
  return [...entries].sort((a, b) => a.data.order - b.data.order);
}
