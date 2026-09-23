# Repository cleanup audit — 2026-09-23

## Scope

This audit covers repository structure, documentation placement, npm scripts/dependencies, Astro production surface, styles, audit scripts, and CI configuration for the cleanup branch.

## Findings

### Documentation debt

- Root-level working documents and historical audits had accumulated beside production configuration.
- Active rewrite material is operational and must remain available.
- Historical audit snapshots remain useful as provenance but should not be treated as current source of truth.
- One duplicate historical audit existed both as a root file and as an archived copy.

### Executable surface

- Every npm script in `package.json` maps to an existing command or repository file.
- All seven `scripts/*.mjs` files are referenced by npm scripts.
- `@astrojs/mdx` and `@astrojs/sitemap` are used by `astro.config.mjs`.
- Astro, Pagefind and TypeScript are used by the npm scripts/build.
- All production components are reachable: MDX registers the content primitives, while layouts/pages use the shared layout and utility modules.
- All production stylesheets are imported by `BaseLayout.astro`.
- No production source file was removed for tidiness.

### Audit-tool debt

Two concrete audit-tool issues were repaired:

1. The deep design audit wrote its generated report to the repository root with a date-dependent filename. It now writes to the stable current-state location `docs/audits/current/design-deep.md`.
2. The design-token audit's expression for stripping the `:root` block was incorrectly escaped. It now matches the CSS root block as intended.

The current stylesheet was inspected against the corrected token-audit checks: no hard-coded color declarations, hard pixel radii, shadows, or `system-ui` declarations were found outside the root token block.

### README drift

The README previously described `astro check`, while the actual QA script uses `tsc --noEmit`. The README now describes the command that actually runs.

## Structural result

The repository root now contains only essential project/configuration files:

- `.gitignore`
- `README.md`
- `astro.config.mjs`
- `package.json`
- `package-lock.json`
- `tsconfig.json`

Active documentation is under:

- `docs/methodology/`
- `docs/roadmap/`
- `docs/workflows/`
- `docs/audits/current/`
- `docs/audits/archive/`
- `docs/superpowers/`

No grammar MDX pages were deleted.

## Verification status

Static repository verification was performed through GitHub tree/file inspection and the final branch diff.

The full local Node verification contract (`npm ci`, `npm run qa`, and `git diff --check`) could not be executed in this session because there is no runnable checkout with network/package access. The repository's deployment workflow currently runs `npm run qa` on pushes to `main`, not on pull requests, so this cleanup branch cannot be validated by that workflow without changing CI behavior or merging it.

This is intentionally recorded as a verification limitation rather than inferred as a pass.
