# Architecture Roadmap — 2026-09-23

## Wave A — Governance
- [x] Architecture constitution.
- [x] Development and AI rules.
- [x] Content model.
- [x] Design-system rules.
- [x] QA contract.

## Wave B — Verification
- [x] Verify complete route tree.
- [x] Verify complete component import graph.
- [x] Verify scripts/config/dependencies against consumers.
- [x] Verify assets and public URLs.
- [x] Verify CI branch/event behavior; PR QA is now enforced.

## Wave C — Low-risk alignment
- [ ] Remove only evidence-backed dead code/files.
- [x] Fix stale hardcoded homepage corpus metadata.
- [x] Consolidate real duplicated helpers.
- [ ] Align physical folders only when discoverability improves without churn.
- [ ] Strengthen deterministic QA for documented invariants.

## Wave D — UX/IA
- [x] Review home → grammar → category → topic journey at source level.
- [x] Review search and discoverability at source level.
- [x] Review breadcrumbs, related links and semantic navigation at source level.
- [ ] Browser-based accessibility review.

## Wave E — Editorial integration
- [ ] Apply content model consistently.
- [ ] Finish the existing untouched-content roadmap.
- [ ] Run cross-page consistency and source passes.

## Wave F — Release/freeze
- [ ] Full QA in CI on intended release path.
- [ ] Browser/manual smoke test.
- [ ] Compare routes/content counts before and after.
- [ ] Resolve or explicitly defer Important debt.
- [ ] Mark architecture stable only after evidence.