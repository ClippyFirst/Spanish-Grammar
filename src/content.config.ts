// Structured content model for the Spanish grammar reference.
// The schema stays deliberately backward-compatible: editorial metadata can be
// introduced incrementally without forcing a rewrite of the existing corpus.
import { defineCollection, z } from 'astro:content';
import { getCategory } from './data/categories';

const es = defineCollection({
  type: 'content',
  schema: z.object({
    language: z.enum(['es']).default('es'),
    category: z.string().refine((value) => Boolean(getCategory(value)), {
      message: 'category must exist in src/data/categories.ts',
    }),

    title_uk: z.string(),
    title_es: z.string(),
    title_en: z.string(),
    short_description: z.string(),
    description: z.string().optional(),

    order: z.number().default(100),
    popular: z.boolean().default(false),
    recently_added: z.boolean().default(false),

    keywords: z.array(z.string()).default([]),
    related: z.array(z.string()).default([]),

    // Typed semantic navigation. These are optional so existing pages remain valid.
    canonical_topic: z.string().optional(),
    prerequisites: z.array(z.string()).default([]),
    contrasts: z.array(z.string()).default([]),
    extensions: z.array(z.string()).default([]),
    exceptions: z.array(z.string()).default([]),

    region: z
      .enum(['general', 'spain', 'latin-america', 'rioplatense', 'mexico', 'caribbean'])
      .default('general'),

    // Internal editorial metadata; not necessarily displayed to readers.
    review_status: z.enum(['draft', 'reviewed', 'verified']).default('draft'),
    updated: z.string().optional(),
    sources: z.array(z.string()).default([]),

    cefr: z.enum(['a1', 'a2', 'b1', 'b2', 'c1', 'c2']).optional(),
  }),
});

export const collections = { es };
