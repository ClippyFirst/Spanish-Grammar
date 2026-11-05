---
name: seo-audit
description: Audits public discoverability of the Astro grammar reference while avoiding duplication of the existing npm QA suite.
---

# SEO Audit

## Scope
This is a complementary release audit. First inspect `astro.config.mjs`, sitemap configuration, page templates, metadata helpers and existing scripts. Run `npm run qa` where possible before reporting additional findings.

## Review
- Can important public pages be crawled and indexed?
- Are title, description, canonical URL and language metadata accurate and unique where appropriate?
- Does sitemap coverage match intended public routes?
- Are production base paths and internal links correct on GitHub Pages?
- Are duplicate or near-duplicate pages differentiated by user intent?
- Do headings describe the actual grammar question?
- Do internal links connect prerequisite, contrast, exception and extension pages meaningfully?
- Is structured data valid and truthful if present? Never add schema merely for a presumed ranking boost.
- Are pages accessible and useful without client-side JavaScript where intended?
- Are search-result snippets understandable to Ukrainian-speaking users?

## Output
Only report issues not already adequately caught by repository QA, unless showing a failed gate. Include URL/template, evidence, impact, recommended fix and verification step.

## Guardrails
No promises of ranking improvement. No keyword stuffing, fabricated author credentials, misleading structured data, doorway pages or mass-generated thin content. Do not add paid-tool requirements. Separate crawlability issues from content quality.

## Upstream lead
[seo-audit-skill](https://github.com/seo-skills/seo-audit-skill) is an optional reference. Verify its current files, licence and dependencies before using its code.
