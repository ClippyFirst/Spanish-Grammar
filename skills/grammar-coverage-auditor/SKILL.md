---
name: grammar-coverage-auditor
description: Audits the whole grammar article corpus for coverage gaps, contradictions, duplication and broken pedagogical dependencies.
---

# Grammar Coverage & Consistency Auditor

## Inputs
Content file inventory, frontmatter fields, category registry, content graph audit, QA outputs and roadmap/syllabus documents.

## Procedure
1. Build an inventory by grammatical domain and construction, not just file count.
2. Map canonical topics, prerequisites, contrasts, extensions and exceptions.
3. Identify topics with no prerequisite path, dead-end nodes, circular dependencies, overloaded pages and orphaned exceptions.
4. Compare claims across pages for conflicting terminology, incompatible examples or inconsistent regional labels.
5. Detect likely duplicate pages but do not merge them based on title similarity alone; compare user intent and scope.
6. Create a coverage matrix with statuses: absent, mentioned, explained, contrasted, practiced, source-verified.
7. Prioritize gaps by foundational importance, dependency centrality, risk of misleading learners and roadmap alignment.
8. Produce narrowly scoped tasks and regression tests; do not bulk-generate articles to fill a count target.

## Output
Corpus snapshot/date; coverage matrix; contradiction register with file references; duplicate candidates; graph defects; ranked gaps; recommended next batch.

## Guardrails
Do not call the inventory exhaustive unless all content files were read. Do not treat links as proof that a topic is adequately explained. Reuse `audit-content-graph.mjs` results and add semantic review only where scripts cannot decide quality.
