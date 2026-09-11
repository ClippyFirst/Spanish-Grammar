// Content Collections configuration.
// Defines the structured content model for grammar entries.
// Collection `es` matches the folder `src/content/es/`; future langs (/fr/, /it/) get their own collections.
// NOTE: do NOT add a `slug` field — Astro reserves `slug` for `type: 'content'` collections
// and strips it from frontmatter before validating. URLs are derived from the file path.
import { defineCollection, z } from 'astro:content';

const es = defineCollection({
  type: 'content',
  schema: z.object({
    // Language code of the grammar language (currently only Spanish).
    language: z.enum(['es']).default('es'),

    // Category key — must exist in src/data/categories.ts.
    category: z.string(),

    // Titles in the three reference languages.
    title_uk: z.string(),
    title_es: z.string(),
    title_en: z.string(),

    // One-sentence explanation shown at the top of the page + in listings.
    short_description: z.string(),

    // Optional longer description (used on category pages / meta description).
    description: z.string().optional(),

    // Sort order within a category.
    order: z.number().default(100),

    // Featured on the homepage "Popular / Essential" section.
    popular: z.boolean().default(false),

    // Recently added marker (used on homepage).
    recently_added: z.boolean().default(false),

    // Search keywords / synonyms in Ukrainian, Spanish and English.
    // Powers Pagefind so "теперішній час", "subjunctive", "подобається"
    // all resolve to the right topic.
    keywords: z.array(z.string()).default([]),

    // Related topic slugs (internal links). Must resolve to real pages.
    related: z.array(z.string()).default([]),

    // Optional regional focus. If set, this page is a deep regional page.
    region: z
      .enum(['general', 'spain', 'latin-america', 'rioplatense', 'mexico', 'caribbean'])
      .default('general'),

    // Optional CEFR hint used only internally — never shown in the UI.
    cefr: z.enum(['a1', 'a2', 'b1', 'b2', 'c1', 'c2']).optional(),

    // ISO date of last content review, e.g. "2026-09-08". Keep quoted in frontmatter.
    updated: z.string().optional(),
  }),
});

export const collections = { es };