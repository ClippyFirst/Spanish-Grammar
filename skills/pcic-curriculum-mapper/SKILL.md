---
name: pcic-curriculum-mapper
description: Maps the Spanish Grammar article corpus to the Instituto Cervantes PCIC and CEFR-informed learning progression, distinguishing official curriculum evidence from local editorial decisions.
---

# PCIC Curriculum Mapper

## Purpose

Audit whether the site's coverage and sequencing align with the *Plan curricular del Instituto Cervantes* (PCIC), without treating PCIC as a universal or exhaustive grammar syllabus. Use it to map grammar, pragmatic functions, discourse, lexical and sociocultural dimensions where relevant.

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
5. Evaluate progression by prerequisites and cognitive load, not only by a page's A1–C2 label. A construction can recur at multiple levels with different depth.
6. Identify gaps, overpacked pages, duplicated scopes, prerequisites missing from navigation, and topics whose level labels are unsupported.
7. Prioritize by communicative importance, dependency centrality, risk of misunderstanding and existing project goals.
8. Recommend small, traceable changes. Do not create pages merely to make the matrix look complete.

## Required output

- Inventory scope and date.
- Coverage matrix: PCIC section, topic/function, site page, status, level/depth, evidence, confidence.
- Ranked gap and sequencing report.
- Distinction between verified correspondence and proposed editorial mapping.
- File-scoped tasks and regression checks.

## Guardrails

- PCIC is a reference framework, not a substitute for RAE/ASALE grammatical descriptions or corpus evidence.
- Never claim a page is aligned to an entire level based on one matching item.
- Do not fabricate PCIC section references or treat a topic's absence from a section as proof that it is unimportant.
- Keep regional Spanish variation visible where it changes teaching order or examples.
- Use the existing content-graph audit for structural facts; reserve human/semantic review for curriculum judgments.
