# Dependency Audit — 2026-09-23

## Observed state

- CI runs on Node 22 after the runtime baseline was raised to Node >=22.19.0.
- The previous `EBADENGINE` warning for `undici@8.10.2` disappeared after the runtime change.
- `npm ci` reports 4 vulnerabilities: 2 low, 1 high and 1 critical.
- `npm ci` also reports `tsconfck@3.1.6` as deprecated/unmaintained.

## Decision

Do not run `npm audit fix --force` as an architecture cleanup step. Forced audit repair can introduce major dependency changes without establishing which package is responsible for the vulnerability or whether it is a production path.

## Next maintenance task

Run a networked advisory-level audit (`npm audit` / Dependabot data) against the exact lockfile, identify direct versus transitive findings and their dependency paths, then apply the smallest compatible upgrades and rerun the full QA gate.

## Status

Runtime compatibility is aligned. Dependency vulnerabilities remain an explicitly tracked maintenance item rather than an unverified mass-upgrade.