# Spanish Grammar Repository Cleanup Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Remove demonstrably obsolete repository clutter, organize retained documentation, and eliminate verified code/configuration debt without changing the site's behavior.

**Architecture:** Keep the production Astro/MDX layer stable. Separate active documentation from historical evidence under `docs/`, then audit executable code and dependencies by reference. Apply changes on an isolated branch and verify the resulting tree with the project's existing `npm run qa` contract.

**Tech Stack:** Astro 5, MDX, TypeScript, Pagefind, npm, GitHub Actions.

**Spec:** `docs/superpowers/specs/2026-09-23-spanish-grammar-repository-cleanup-design.md`

## Global Constraints

- Do not delete MDX content merely to reduce repository size.
- Do not remove a script, dependency, component, style, route, or CI step without evidence that it is unused or obsolete.
- Preserve active rewrite workflow documents.
- Preserve historically useful audit evidence in `docs/audits/archive/`.
- Keep `npm run qa` as the primary quality gate.
- Avoid changing generated audit output manually.

## Review Focus

- Documentation links/references after moves or deletions — verify repository-wide references.
- Active rewrite roadmap availability — verify both current roadmap files remain reachable and readable.
- Audit provenance — verify archived audits remain intact and clearly marked historical.
- Dependency/script drift — verify every package script still resolves to an existing executable and every retained dependency has a consumer.
- Production build/CI parity — verify `npm run qa` remains the CI command.

---

### Task 1: Create the documentation structure and cleanup design records

**Files:**
- Create: `docs/superpowers/specs/2026-09-23-spanish-grammar-repository-cleanup-design.md`
- Create: `docs/superpowers/plans/2026-09-23-spanish-grammar-repository-cleanup.md`

- [ ] Step 1: Add the approved design specification.
- [ ] Step 2: Add this implementation plan.
- [ ] Step 3: Verify both files are readable from the repository tree.

### Task 2: Classify root documentation and identify moves/deletions

**Files:**
- Inspect: all root-level `*.md` and `*.txt` documentation.
- Inspect: `docs/audits/README.md`, `docs/audits/current/README.md`.
- Modify: only files whose paths change or whose references must be updated.

- [ ] Step 1: Keep active workflow artifacts: `CONTENT-METHODOLOGY-REWRITE-2026-09-23.md`, `REWRITE-ROADMAP-REMAINING-2026-09-23.md`, `REWRITE-ROADMAP-UNTOUCHED-2026-09-23.md`, and `EXECUTION-LOG.md`.
- [ ] Step 2: Treat root `AUDIT-*.md` as historical unless a file is explicitly the current source of truth.
- [ ] Step 3: Check `TOPICS-COMPLETE-UA.md` and coverage audits for duplication; retain the canonical syllabus and archive historical status snapshots where appropriate.
- [ ] Step 4: Check `content-plan.md`, `plan-standardization-prompts.md`, and the three `prompt_*.txt` files for active references; retain only material still serving the current workflow.
- [ ] Step 5: Archive useful historical snapshots such as `QA-08-09-2026.md`, `audit 09092026.md`, and `audit-results-profound.md` when provenance is useful.
- [ ] Step 6: Update documentation indexes after moves; do not alter substantive conclusions merely to reformat them.

### Task 3: Audit executable repository surface

**Files:**
- Inspect: `package.json`, `scripts/*.mjs`, `src/components/**`, `src/layouts/**`, `src/pages/**`, `src/styles/**`, `src/data/**`, `src/utils/**`, `src/content.config.ts`

- [ ] Step 1: Map every npm script to an existing target.
- [ ] Step 2: Map every script file to an npm script or explicit consumer.
- [ ] Step 3: Map dependencies to imports and build-time usage.
- [ ] Step 4: Map components/layouts/pages/styles to imports/routes/content usage.
- [ ] Step 5: Remove only items proven dead; preserve intentional indirect integration points.
- [ ] Step 6: Re-read package.json and README after cleanup.

### Task 4: Verify CI and documentation consistency

**Files:**
- Inspect/Modify: `.github/workflows/deploy.yml`
- Modify if needed: `README.md`, `docs/audits/README.md`

- [ ] Step 1: Confirm CI installs with `npm ci` and invokes `npm run qa`.
- [ ] Step 2: Confirm README describes the same QA/build behavior.
- [ ] Step 3: Remove obsolete references to old aliases/project names if found.
- [ ] Step 4: Keep CI changes minimal and behavior-preserving.

### Task 5: Apply repository cleanup

**Files:**
- Create/move/delete only paths identified by Tasks 2–4.

- [ ] Step 1: Create target documentation directories.
- [ ] Step 2: Move active methodology/roadmap/workflow material and update links.
- [ ] Step 3: Move useful historical audits into `docs/audits/archive/`, preserving filenames and contents.
- [ ] Step 4: Delete only demonstrably redundant/obsolete artifacts.
- [ ] Step 5: Keep documentation cleanup separable from executable-code cleanup.

### Task 6: Verification and review

**Files:** repository-wide.

- [ ] Step 1: Run `npm ci`.
- [ ] Step 2: Run `npm run qa`.
- [ ] Step 3: Run `git diff --check`.
- [ ] Step 4: Verify no documentation path references deleted/moved files.
- [ ] Step 5: Verify current audit state and rewrite roadmaps remain present.
- [ ] Step 6: Verify production build and Pagefind generation.
- [ ] Step 7: Review final diff for accidental content changes.
- [ ] Step 8: Create a pull request for the cleanup branch unless direct main changes were explicitly required.

### Task 7: Final handoff

- [ ] Step 1: Summarize deleted, archived, retained, and executable-surface changes.
- [ ] Step 2: Report exact QA/build results.
- [ ] Step 3: Identify residual debt intentionally deferred because it requires editorial decisions.
