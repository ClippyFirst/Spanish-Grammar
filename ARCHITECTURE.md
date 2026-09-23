# Gramaticarrona Architecture

This is the repository's architectural constitution. Read it before changing structure, routing, content schema, shared components, styles, QA or dependencies.

## Product model
Gramaticarrona is a static Spanish grammar reference for Ukrainian-speaking learners. MDX is the reader-facing source of truth; Astro renders static HTML; Pagefind provides client-side search; GitHub Pages hosts the result.

## Canonical layers
Content: src/content/es → Astro Content Collection → schema and validation.
Domain registries/helpers: src/data and src/utils → categories, URLs and semantic relationships.
Presentation: src/pages → src/layouts → reusable components → MDX primitives.
Style: design tokens → base styles → component/grammar/prose styles.
Automation: scripts → validation/audits → npm run qa.
Delivery: Astro static build → Pagefind → GitHub Pages.

## Source of truth
- Grammar content: MDX.
- Categories/order: src/data/categories.ts.
- Content schema: src/content.config.ts.
- URL/base-path logic: src/utils/content.ts and Astro config.
- MDX component registry: src/components/mdx.ts.
- Design tokens: src/styles/tokens.css.
- QA orchestration: package.json.
- Deployment: .github/workflows/deploy.yml.
Never create a second source of truth for one responsibility.

## Change protocol
REQUEST → architecture preflight → inspect existing implementation → reuse/extend → implement → QA → document architectural decisions.

## Target
The architecture is intentionally simple and explicit. Folder symmetry is not a goal. Physical moves are allowed only when they reduce real ambiguity or maintenance cost and their references are verified.

## Stability
If implementation must deviate from this model, update the governing architecture documentation in the same change.