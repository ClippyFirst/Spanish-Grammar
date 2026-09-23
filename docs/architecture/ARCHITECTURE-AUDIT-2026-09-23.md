# Architecture Audit — 2026-09-23

## Scope

This audit verifies the architecture standard against the actual repository tree on branch `architecture-standardization-2026-09-23`. It is implementation evidence, not a design proposal.

## Current inventory

| Area | Count / state |
|---|---:|
| Grammar MDX under `src/content/es` | 196 |
| Comparison MDX under `src/pages/comparisons` | 5 |
| Total MDX files | 201 |
| Astro route files | 8 |
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

### 2. Comparison pages are a separate legacy content surface

Five comparison documents remain page-scoped MDX files in `src/pages/comparisons`. Their metadata is interpreted by `ComparisonLayout`, while the comparison index and related links contain a small manually maintained registry.

This is not treated as dead code. It is a deliberate architectural exception for now because migrating it into a second Content Collection would change routing, metadata, QA and content ownership at once.

**Decision:** keep the subsystem stable during architecture cleanup; document it explicitly; consider a dedicated comparison collection only as a later, separately reviewed migration.

### 3. Homepage corpus metadata had drifted

The homepage previously displayed a hardcoded `195 тем · 17 розділів`. The repository currently contains 196 grammar topics plus 5 comparison documents, so hardcoded corpus counts were already becoming stale.

The homepage now derives the topic and category counts from `getCollection('es')` and the canonical category registry.

### 4. QA was strong but branch coverage was incomplete

The deployment workflow already runs `npm run qa` before publishing on `main`. A current GitHub Actions run confirmed that the **build/QA job succeeds**.

There was no pull-request QA workflow, so architecture changes could be reviewed without the same automated gate before merge.

A dedicated `.github/workflows/qa.yml` has now been added for pull requests and manual dispatch. It runs the same `npm run qa` command with the production base/site variables.

### 5. GitHub Pages deployment is externally blocked

The latest deployment run reached the deployment job after a successful QA/build job, but `actions/deploy-pages@v4` returned HTTP 404 and explicitly reported that GitHub Pages must be enabled in repository settings.

This is an infrastructure/repository-settings blocker, not a failed application build.

**Action required outside source files:** enable GitHub Pages for the repository using the GitHub Actions/pages deployment path, then rerun the workflow.

### 6. No broad structural deletion is justified by this audit

The current component/layout/script files are connected to the application architecture. The audit does not provide evidence for deleting production source merely to make folders smaller.

## Alignment changes made on this branch

- Canonical category registry now exports `categoryKeys` and remains the source of truth.
- Content Collection schema validates category membership against that registry.
- Homepage corpus counts are derived rather than hardcoded.
- Homepage search placeholder uses the correct Spanish term `subjuntivo`.
- Pull-request QA workflow added.
- Architecture audit recorded with the current inventory and external deployment blocker.

## Remaining work

1. Run the new PR QA workflow against this branch/PR.
2. Complete browser/manual accessibility and responsive smoke testing.
3. Review the comparison subsystem as a separate migration decision.
4. Apply the content model and source discipline progressively during the editorial rewrite.
5. Enable GitHub Pages outside the codebase and confirm a successful production deployment.
