# Spanish claim-ledger auditor

## Purpose

Maintain an auditable link between a concrete grammatical claim and the evidence that supports it across the Gramaticarrona reference. This complements citation-integrity-auditor: citation integrity asks whether a source supports a claim; this skill ensures claims can be identified, compared, tracked, and re-checked consistently across pages and releases.

## Inputs

- Relevant MDX pages and frontmatter.
- Existing claim/source register, if present.
- Repository review-status policy and audit findings.
- Accessible source text or precise bibliographic/location metadata.

If the repository has no canonical claim-register schema, propose a minimal schema first; do not create a second source of truth.

## Procedure

1. Extract atomic claims. Split compound statements into independently testable propositions. Separate descriptive usage, prescriptive recommendation, regional distribution, frequency, grammaticality, and pedagogical simplification.
2. Assign stable identity. Use a stable claim key based on canonical topic and claim intent, not line number alone. Record page/heading and a short verbatim or tightly paraphrased claim.
3. Record evidence precisely. Capture author/institution, work/version, section/page/entry, URL or bibliographic identifier, and access date when relevant. A homepage or broad citation is not sufficient evidence for a narrow assertion.
4. Classify support using controlled statuses defined by the project, such as supported, partially supported, contradicted, not checked, and source unavailable. Distinguish source existence from claim support.
5. Track scope and limits. Record register, time period, region, construction, and population whenever they materially limit the claim. Never generalize from one variety or corpus slice to all Spanish.
6. Detect duplication and contradiction across canonical pages and comparison pages. Report differences in wording, scope, and evidence; do not silently harmonize a real linguistic disagreement.
7. Protect review status. A page cannot become verified merely because sources are listed. Apply the project's verification threshold. If no threshold exists, recommend one rather than inventing an existing policy.
8. Produce an actionable delta: new, changed, stale, unsupported, contradicted, or duplicate claims; recommend the smallest safe edit and a regression fixture.
9. Keep the register maintainable. Avoid copying full article prose or entire source texts. Link to canonical pages and retain only metadata needed to reproduce the check.

## Required output

- Scope and files reviewed.
- Claim ledger: key, page/heading, claim type, claim summary, source locator, support status, scope limits, last checked.
- Findings with severity and precise evidence.
- Cross-page conflicts and stale-review candidates.
- Proposed edits and regression tests.
- Explicitly unreviewed claims and access limitations.

## Rules

- Never fabricate sources, page numbers, corpus results, or access dates.
- Do not treat search snippets as full evidence for a disputed grammar claim.
- Do not infer a source's support from its title alone.
- Do not use citation count as a quality score.
- Do not flatten regional/descriptive differences into one universal rule.
- Do not upgrade reviewed to verified automatically.
- If a claim cannot be verified, preserve it as unresolved and state what evidence is missing.

## Acceptance tests

- Positive: a narrowly scoped claim has a specific source section that directly supports it; record the locator and relevant limitation.
- Negative: a page cites the RAE homepage for a highly specific regional claim; flag the evidence as insufficient.
- Ambiguous: two authoritative sources describe different registers or varieties; preserve both scopes and request an editorial decision instead of declaring one source wrong.
- Regression: a claim changes on one page; identify other pages that repeat or depend on it and mark the affected entries for review.

## Routing

Use after a fact-check identifies claims requiring durable traceability, during high-risk cross-page audits, and before granting or renewing verified status. Use citation-integrity-auditor for a bounded one-page citation check; use this skill when continuity and traceability across pages matter.
