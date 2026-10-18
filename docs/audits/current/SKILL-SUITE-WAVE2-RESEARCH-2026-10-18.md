# Skill-suite wave 2: gap analysis and external research — 2026-10-18

## Scope

Continue the project-specific skill search after the 29-skill suite in PR #26. The target is a Ukrainian-language Spanish grammar reference, not a course/LMS. This is a focused gap analysis, not a claim that every public skill repository has been exhaustively enumerated.

## What the existing suite already covers

The current suite already includes grammar fact-checking, claim/source integrity, Spanish–Ukrainian contrast, variation, pragmatics/register, orthography, forms/paradigms, example naturalness and corpus evidence, terminology, learner-error hypotheses, coverage, graph semantics, answer design, accessibility, browser QA, SEO, and visualization decisions. Generic proofreading, language-learning, curriculum, or SEO skills would mostly duplicate existing responsibilities or push the product toward a course.

## Newly identified gaps

### 1. Durable claim-level traceability

The existing citation-integrity skill reviews whether a source supports a claim, while the architecture audit identifies the need for consistent reviewed/verified criteria and cross-page consistency. A bounded skill is useful for maintaining stable claim IDs, exact source locators, scope limitations, stale review flags, and dependencies across pages. This is a governance layer, not a second fact-checker.

Added: `skills/spanish-claim-ledger-auditor/SKILL.md`

### 2. Reference answerability

SEO content auditing covers search intent and discoverability; explanation design covers clarity. Neither necessarily tests a fixed set of concrete questions against the page to establish whether the answer is directly findable, complete within its scope, and not hidden behind broad introductory prose. The new skill uses explicitly labelled test prompts and forbids claims about real user behavior unless analytics/research support them.

Added: `skills/reference-answerability-auditor/SKILL.md`

## External evidence and research leads

- RAE/ASALE describe the Nueva gramática as balancing description and norm, theory and examples, and analysis of abstract structures with particular uses. This supports keeping descriptive usage, prescriptive advice, examples, and scope limitations distinguishable. Source: https://www.asale.org/obras-academicas/gramatica
- The revised and expanded NGLE was presented in November 2024; the second edition was published in 2025 and adds bibliography at chapter level. For disputed claims, the skill workflow should seek exact chapter/section-level support rather than rely on a generic homepage citation. Source: https://temporalweb.asale.org/obras-academicas/gramatica/nueva-gramatica-de-la-lengua-espanola
- ASALE's Corpus ASALE version 0.4, announced in October 2026, exceeds 25 million orthographic forms. This is a possible resource for specific usage questions, but the existence/size of a corpus does not establish any particular grammaticality, frequency, or regional claim. Access, annotation, sample composition, and query reproducibility still need to be checked. Source: https://www.asale.org/corpus-asale/
- Public GitHub searches for generic Spanish grammar, corpus analysis, and proofreading skills returned mostly unrelated repositories or broad workflows rather than a clearly reusable skill that fills a gap in this project. The existing suite is already more project-specific than generic language-learning/course skills. No third-party skill was copied verbatim.

## Adoption decision

Add the two focused skills as a stacked proposal. Do not add more skills merely to increase the count. Revisit only if a pilot reveals a distinct recurring failure that is not covered by the current suite.

## Validation plan

1. Run each skill against at least one existing high-risk page and one comparison page.
2. Record false positives, missed findings, unsupported assumptions, and duplicated outputs.
3. Check whether the claim-ledger skill can use one canonical register rather than creating a competing data source.
4. Run answerability prompts before and after an editorial change; do not claim real-world usability improvement without a browser test or reader evidence.
5. Run repository QA on the final stacked branch. This proposal has not yet passed runtime or full repository QA merely by being committed.

## Explicit limitations

- This is not a full search of every skill marketplace or repository.
- No corpus query was run as part of this skills research.
- No user analytics or usability study was available to validate real reader questions.
- The two skills are proposed and require empirical pilot validation.
