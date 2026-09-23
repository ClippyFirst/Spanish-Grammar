# QA Architecture

## Aggregate gate
npm run qa is the canonical release-oriented command. It currently runs typecheck, MDX preflight, content validation, link validation, content graph audit, design audits, production build and Pagefind.

## Gate responsibilities
- Typecheck: Astro/TypeScript contracts.
- MDX preflight: syntax/compilation of content.
- Content validation: frontmatter, categories, relationships and invariants.
- Links: internal route references.
- Graph: semantic orphans, ambiguity, self-links, duplicates and over-linking.
- Design audits: token, accessibility, responsive and component checks.
- Build: actual static output and search index.

## CI coverage

- `.github/workflows/qa.yml` runs the same `npm run qa` gate on pull requests and manual dispatch.
- `.github/workflows/deploy.yml` runs the same gate before production deployment on `main`.
- Deployment availability itself is an infrastructure concern; a successful QA job does not prove that GitHub Pages is enabled.

## Evidence rule
A green static check proves only what it checks. Browser/manual verification is required for visual interaction, focus behavior, real responsive layout and other runtime properties.

## Future checks
Add a check only when the invariant is stable and documented, failure is deterministic, local/CI execution is possible, false positives are understood, and manual work is materially reduced.

## Release checklist
Typecheck; MDX; content; links; graph; design audits; production build and Pagefind; changed routes/content counts reviewed; no accidental generated artifacts; architecture docs match implementation.