# Architecture Standardization Implementation Plan

## Phase 0 — Baseline
1. Confirm branch, working-tree state and latest cleanup baseline.
2. Keep work isolated on architecture-standardization-2026-09-23.
3. Record CI/local verification limitations rather than treating them as passes.

## Phase 1 — Documentation contract
1. Add ARCHITECTURE.md.
2. Add DEVELOPMENT_RULES.md.
3. Add docs/architecture/CONTENT_MODEL.md.
4. Add docs/architecture/DESIGN_SYSTEM.md.
5. Add docs/architecture/QA.md.
6. Add architecture roadmap.

## Phase 2 — Structural verification
1. Inventory route files and dynamic route generation.
2. Inventory component imports and MDX registry usage.
3. Verify scripts, config and dependencies against actual consumers.
4. Verify assets and public paths.
5. Verify CI assumptions and environment variables.
6. Do not move files until this inventory is clean.

## Phase 3 — Alignment
1. Make only low-risk structural changes that improve the documented target.
2. Prefer documentation/naming alignment over physical moves when current paths are coherent.
3. Update imports atomically if components are regrouped.
4. Preserve public URLs; document any migration.
5. Change schema, validators and docs together.

## Phase 4 — UX and editorial governance
1. Define learner journey: find → understand → compare → remember.
2. Define navigation and relationship semantics.
3. Use Academic Writing Toolkit as a structural signal, not a paragraph-length score.
4. Keep content methodology separate from technical refactoring.
5. Review Product Design concerns: navigation, discoverability, hierarchy, cognitive load and accessibility.

## Phase 5 — QA
1. Keep npm run qa as the aggregate gate.
2. Add deterministic checks only for stable invariants.
3. Ensure intended CI path runs the same aggregate QA.
4. Separate static QA from browser/manual release verification.

## Phase 6 — Diagrams and knowledge
1. Maintain Lucid system architecture diagram.
2. Maintain Lucid content/data-flow diagram.
3. Maintain content model/component relationship diagram when useful.
4. Keep GitHub docs as repository source of truth; Notion is optional working knowledge.

## Phase 7 — Freeze
1. Run all technical and editorial integration checks.
2. Review changed files and generated artifacts.
3. Compare routes/content counts before and after.
4. Confirm no unintended grammar content changes.
5. Update architecture status only after evidence.
6. Open a PR; never force-push or rewrite history.

## Definition of done
Architecture docs match repository; contributor workflow is unambiguous; patterns are reusable; public URLs remain stable unless migration is documented; QA is reproducible; no Critical debt remains; Important debt is fixed or explicitly tracked.