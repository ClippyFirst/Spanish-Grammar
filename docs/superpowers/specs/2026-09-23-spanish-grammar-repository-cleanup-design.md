# Spanish Grammar Repository Cleanup — Design Specification

## Goal
Reduce technical and documentation debt in ClippyFirst/Spanish-Grammar without deleting useful editorial knowledge or changing production behavior.

## Scope
1. Preserve the production layer unless static evidence proves an item unused.
2. Classify root documentation by current operational value, historical value, duplication, and obsolescence.
3. Move useful historical/operational documentation into docs/ with clear ownership.
4. Remove only documents that are demonstrably obsolete or redundant.
5. Audit npm scripts, dependencies, CI, scripts/, components, layouts, pages, and styles for dead code or stale references.
6. Keep the active rewrite roadmap, methodology, and execution log because they are current workflow artifacts.
7. Preserve historical audit evidence when it remains useful; archive rather than destroy.
8. Finish with the same QA contract documented by README and CI.

## Target structure
- Root: product entrypoint and essential project/configuration files only.
- docs/audits/current: current generated/active audit state.
- docs/audits/archive: historical audits retained for provenance.
- docs/methodology: active editorial methodology.
- docs/roadmap: active rewrite roadmaps.
- docs/workflows: active prompts/plans that remain part of the workflow.
- docs/superpowers: cleanup design and implementation plan.

## Classification rules
- Active source-of-truth/workflow: keep and relocate if needed.
- Historical but informative: archive.
- Exact/functional duplicate: consolidate or remove after reference check.
- One-off obsolete planning artifact: remove after reference check.
- Production source/config: remove only with direct usage evidence.

## Safety
No content MDX deletion merely for tidiness. No removal of dependencies, scripts, components, styles, routes, or CI steps without reference evidence. All moved/deleted paths must be checked for references. Final validation must run the repository QA pipeline; if local execution is unavailable, GitHub Actions must be used or the limitation explicitly reported.
