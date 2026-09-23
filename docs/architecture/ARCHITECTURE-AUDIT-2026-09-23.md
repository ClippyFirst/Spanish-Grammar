# Architecture Audit — 2026-09-23

## Scope

This audit verifies the architecture standard against the actual repository tree on branch `architecture-standardization-2026-09-23`. It is implementation evidence, not a design proposal.

## Current inventory

| Area | Count / state |
|---|---:|
| Grammar MDX under `src/content/es` | 196 |
| Comparison MDX under `src/content/comparisons` | 5 |
| Total MDX files | 201 |
| Astro route files | 9 |
| Reusable components + MDX registry | 11 files |
| Layouts | 3 |
| Stylesheets | 6 |
| QA/audit scripts | 8 |
| Documentation files | 37 |
| Public assets | 2 |

The 17 category directories are present under `src/content/es`. The grammar route is generated from the collection and uses `GrammarLayout`; category indexes are generated from the same collection.

## Findings

### 1. Grammar content model is aligned

The main corpus lives in `src/content/es/<category>/<slug>.mdx`, uses an Astro Content Collection, and resolves through a single grammar route. Category labels/order are centralized in `src/data/categories.ts`.

The schema now also validates that every content `category` exists in the canonical category registry. This prevents the TypeScript registry and the content corpus from silently drifting apart.

### 2. Comparison content is now a first-class collection

Five comparison documents are now entries in the dedicated `comparisons` Content Collection. The public `/comparisons/<slug>/` URLs are preserved through `src/pages/comparisons/[slug].astro` and the centralized `comparisonUrl()` helper.

The comparison index, homepage featured set and topic-level related navigation now all consume the collection instead of maintaining duplicate title/URL registries.

**Decision:** comparisons are now a first-class content subsystem with a deliberately smaller schema because their semantics differ from grammar topics.

### 3. Homepage corpus metadata had drifted

The homepage previously displayed a hardcoded `195 тем · 17 розділів`. The repository currently contains 196 grammar topics plus 5 comparison documents, so hardcoded corpus counts were already becoming stale.

The homepage now derives the topic and category counts from `getCollection('es')` and the canonical category registry. The search control is also now a native GET form rather than runtime-generated JavaScript UI.

### 4. QA is now covered before merge

The deployment workflow runs `npm run qa` before publishing on `main`. A dedicated PR workflow now runs the same aggregate gate before merge.

The final PR QA run on the current head completed successfully, including typecheck, MDX preflight, content validation, link validation, graph/design audits, production build and Pagefind.

### 5. GitHub Pages deployment is externally blocked

The latest deployment run reached the deployment job after a successful QA/build job, but `actions/deploy-pages@v4` returned HTTP 404 and explicitly reported that GitHub Pages must be enabled in repository settings.

This is an infrastructure/repository-settings blocker, not a failed application build.

**Action required outside source files:** enable GitHub Pages for the repository using the GitHub Actions/pages deployment path, then rerun the workflow.

### 6. No broad structural deletion is justified by this audit

The current component/layout/script files are connected to the application architecture. The audit does not provide evidence for deleting production source merely to make folders smaller.

## Alignment changes made on this branch

- Canonical category registry remains the source of truth for category keys, labels, order and descriptions.
- Content Collection schema validates category membership against that registry.
- Homepage corpus counts are derived rather than hardcoded.
- Homepage search uses a native GET form and the correct Spanish term `subjuntivo`.
- Pull-request QA workflow added and verified on the final head.
- Comparisons migrated into a first-class collection with preserved URLs.
- Node runtime baseline aligned to the dependency engine requirement.
- Dependency vulnerability/deprecation output explicitly recorded for follow-up.
- Architecture audit recorded with the current inventory and external deployment blocker.

## Post-migration checks

1. Final PR QA completed successfully on the current head.
2. Browser/manual accessibility and responsive smoke testing remains release-stage work.
3. Content model and source discipline continue into the editorial rewrite.
4. Dependency vulnerabilities remain explicitly tracked for advisory-level maintenance.
5. GitHub Pages must be enabled outside the codebase before production deployment can succeed.
