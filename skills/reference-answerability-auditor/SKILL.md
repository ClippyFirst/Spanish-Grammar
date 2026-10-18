# Reference answerability auditor

## Purpose

Evaluate a page as a reference entry, not as a lesson in a mandatory course. A reader arriving from search should identify the relevant rule or distinction, understand its limits, and navigate to deeper explanation without completing a prescribed sequence.

This differs from SEO auditing (indexing and search visibility), proofreading (language quality), and learning-design review (explanation structure): it tests whether the page resolves a plausible information need without hiding the answer.

## Inputs

- Target page and canonical/related pages.
- Page title, short description, headings, tables, examples, and search-facing metadata.
- A small set of realistic reader questions grounded in the page topic.
- Repository audience and content standards.

Do not invent user research, query-volume data, or common learner errors. Treat proposed questions as test prompts unless backed by analytics or research.

## Procedure

1. Define the query task. Create 3–7 concrete questions the page claims or appears intended to answer. Label each as an editorial test prompt, actual search query, or observed user question according to evidence.
2. Answer-first test. For each question, locate the shortest accurate answer on the page. Record the exact heading/table/example and navigation effort only when actually measured.
3. Scope test. Check whether the answer states relevant conditions, exceptions, register, region, and ambiguity. A short answer is not successful if misleadingly absolute.
4. Example test. Check whether examples demonstrate the stated distinction and include enough context to disambiguate it. Separate constructed examples from sourced attestations.
5. Contrast test. Where readers may confuse neighboring forms, test whether the page explains the decision boundary, not merely lists definitions. Recommend a comparison link only when it resolves a real gap.
6. Findability test. Check whether headings, labels, tables, and metadata use understandable terms a Ukrainian-speaking reader might search for. Do not add keyword stuffing or unnatural translations.
7. Depth test. Keep advanced caveats discoverable without overwhelming the initial answer. Recommend headings, concise summaries, examples, and links—not mandatory levels or course paths.
8. False-confidence test. Flag when a page appears complete but omits a major condition, confuses normative and descriptive claims, or implies a universal rule from a restricted variety.
9. Recommend the smallest useful change: clearer first paragraph, boundary-condition note, minimal contrast, better heading, cross-link, or no change. Do not rewrite every page into a rigid template.

## Required output

For each test question, report the question and evidence status, answer found or explicit gap, location of answer, missing condition or ambiguity, severity, and smallest recommended change.

Finish with an overall verdict: answers well, answers with friction, partial answer, or not answerable, plus confidence and limitations.

## Rules

- The site is a reference, not a mandatory course/LMS.
- Do not require exercises, scores, spaced repetition, progress tracking, or a fixed learning sequence.
- Do not claim a question is common without analytics, user research, or a cited study.
- Do not optimize for keywords at the expense of grammatical accuracy or natural Ukrainian.
- Do not treat brevity as a virtue when it removes a necessary scope limitation.
- Do not fabricate usability timings; measure them in a real browser or mark them unmeasured.
- Do not infer that a missing heading means the answer is absent: inspect the page and connected canonical pages.

## Acceptance tests

- Positive: a page directly answers “Коли вживати ser, а коли estar?” and then exposes context-sensitive exceptions and a relevant comparison.
- Negative: a page has a keyword-rich introduction but never states the decision rule; mark it not answerable despite SEO signals.
- Ambiguous: a compact page answers the basic question accurately but defers a rare regional exception to a linked page; accept this if scope is signposted and the link resolves the need.
- Regression: after a rewrite, rerun the same fixed question set and compare answer locations, omissions, and false absolutes.

## Routing

Use for high-value pages, pages with known confusion or search-entry intent, and before/after major rewrites. Pair with spanish-grammar-fact-checker when the answer itself may be wrong; pair with seo-content-audit only when search-intent or discoverability is also in scope.
