---
name: pcic-curriculum-mapper
description: Maps grammar-reference coverage to consulted Instituto Cervantes PCIC sections and identifies gaps without imposing a course sequence.
---

# PCIC Grammar Coverage Mapper

## Purpose

Audit how the site's grammar coverage corresponds to the *Plan curricular del Instituto Cervantes* (PCIC), without treating PCIC as a universal or exhaustive grammar syllabus and without turning the reference into a course. Use the PCIC as one coverage lens for grammar and relevant pragmatic/discourse functions.

Primary starting point: https://cvc.cervantes.es/ensenanza/biblioteca_ele/plan_curricular/indice.htm

## Inputs

- Complete inventory of relevant MD/MDX content and frontmatter.
- Existing categories, internal links, prerequisite notes and level labels.
- PCIC pages actually consulted, with section identifiers and access date.
- Any project-specific curriculum or scope decisions.

## Workflow

1. Establish the inventory scope and date. State which files, locales and content types were included or excluded.
2. Consult the relevant PCIC sections directly. Record exact section titles/identifiers and the categories or level bands they describe; do not infer mappings from search snippets alone.
3. Map each canonical construction or communicative function to one or more site articles. Use statuses: absent, mentioned, explained, contrasted, practiced, source-verified.
4. Distinguish a direct PCIC correspondence from an editorial approximation, a cross-linguistic teaching choice or a topic outside the consulted PCIC scope.
5. Evaluate topic dependencies and optional navigation paths; do not prescribe a mandatory reading sequence. A construction can recur at different levels of depth, and any CEFR label must be separately evidenced.
6. Identify gaps, overpacked pages, duplicated scopes, prerequisites missing from navigation, and topics whose level labels are unsupported.
7. Prioritize by communicative importance, dependency centrality, risk of misunderstanding and existing project goals.
8. Recommend small, traceable changes. Do not create pages merely to make the matrix look complete.

## Required output

- Inventory scope and date.
- Coverage matrix: PCIC section, topic/function, site page, status, level/depth, evidence, confidence.
- Ranked coverage-gap report and optional pathway suggestions with rationale.
- Distinction between verified correspondence and proposed editorial mapping.
- File-scoped tasks and regression checks.

## Guardrails\n\n- This is a reference, not a course: no mandatory syllabus, lesson sequence, practice schedule or progress tracking.

- PCIC is a reference framework, not a substitute for RAE/ASALE grammatical descriptions or corpus evidence.
- Never claim a page is aligned to an entire level based on one matching item.
- Do not fabricate PCIC section references or treat a topic's absence from a section as proof that it is unimportant.
- Keep regional Spanish variation visible where it changes teaching order or examples.
- Use the existing content-graph audit for structural facts; reserve human/semantic review for curriculum judgments.
