# Architecture Standardization Specification — Gramaticarrona

Date: 2026-09-23
Status: working specification for implementation.

## Goal
Establish one durable architecture for the Astro + MDX Spanish grammar reference so future human and AI contributors extend known patterns instead of inventing new structure for each task.

## Constitution
1. MDX is the source of truth for reader-facing grammar content.
2. Astro is the rendering/orchestration layer.
3. Content schema is explicit and backward-compatible.
4. Category registry is canonical in src/data/categories.ts.
5. URL construction is centralized.
6. Semantic relationships are typed.
7. Reuse precedes abstraction.
8. Cosmetic refactors require a user/content reason.
9. QA is layered.
10. Content edits and technical refactors remain separable.
11. Deletion requires reference evidence.
12. Architecture deviations are documented.

## Runtime flow
MDX → Content Collection → schema/validation → content helpers/graph → Astro routes/layouts/components → static HTML/CSS/assets → Pagefind → GitHub Pages.

## Target repository
src/content/es for corpus; src/components for reusable UI and MDX primitives; src/layouts for composition; src/pages for routes; src/data for canonical registries; src/utils for shared pure helpers; src/styles for tokens and style layers; scripts for QA/audits; docs for governance; public for static assets; .github/workflows for CI/deployment.

## Information architecture
Home → Spanish grammar → Category → Topic. Category pages are hubs. Search is retrieval, not a replacement for hierarchy. Topic URLs use /es/<category>/<slug>/ with trailing slash.

## Component policy
Layout shell, navigation, MDX primitives and page composition have separate responsibilities. MDX primitives stay small, deterministic and presentation-focused.

## Styling policy
Use existing token-first styling. New tokens or abstractions require repeated semantic need. Accessibility, contrast, focus, responsive behavior and readable line length are architectural requirements.

## QA
Canonical aggregate gate is npm run qa. Future checks must be deterministic, documented and composable.

## Debt
Critical: broken production/build/routes, invalid schema, data loss, security/accessibility blockers or deployment corruption.
Important: duplicated source of truth, fragile URL logic, material repeated implementation, or missing automation for an established invariant.
Minor: naming, comments, low-impact cleanup or documentation gaps.

## Development lifecycle
REQUEST → REQUIREMENTS → architecture preflight → existing implementation → design/data/content decision → implementation → QA → documentation → release.

## Non-goals
No framework migration for fashion; no backend/database; no wholesale content rewrite during technical cleanup; no automatic expansion of pages merely for length; no abstractions for folder symmetry.

## Freeze criteria
Architecture docs match implementation; routes/content references remain valid; CI QA passes on the intended release path; no known Critical debt; Important debt is fixed or explicitly tracked; intentional deviations are documented.