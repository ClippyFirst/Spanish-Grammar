---
name: astro-post-audit
description: Reviews production-built HTML and generated assets from Astro for route, metadata, link and accessibility regressions.
---

# Astro Post-build Audit

## Purpose
Inspect the actual build output, not just source templates. Use this only after reading the existing QA scripts and identifying uncovered checks.

## Checks
- Expected routes exist and no unintended routes were generated.
- Titles, descriptions, canonical links, hreflang/language metadata and heading hierarchy are sensible.
- Internal links resolve under the configured base path.
- Images have suitable alternative text where meaningful; decorative imagery is handled appropriately.
- Tables and code blocks have usable semantics and do not depend on styling alone.
- Generated pages contain core explanatory content in HTML when static rendering is intended.
- Sitemap and robots directives agree with the deployment target.
- Asset references are local/valid and no development-only URLs leak into production.

## Output
List command/build context, checked route sample or full route set, checks passed, findings and exact artifacts inspected. Include a deduplication note mapping each check to existing `npm run qa` scripts.

## Guardrails
Do not mutate generated files as a fix; repair the source. Do not add a second overlapping audit script without documenting its unique value. Do not claim a full-site scan from a small sample.

## Upstream lead
[astro-post-audit](https://github.com/casoon/astro-post-audit) is a tool lead. Evaluate current compatibility and licence before installation.
