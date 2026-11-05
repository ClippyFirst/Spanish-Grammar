---
name: grammar-knowledge-graph-auditor
description: Audits prerequisite relations, internal links and conceptual dependencies across a large Spanish grammar reference, separating explicit links from inferred pedagogical dependencies.
---

# Grammar Knowledge Graph Auditor

## Purpose

Check whether readers can navigate from a question to a useful explanation and whether the site's topic structure reflects meaningful prerequisites rather than just categories and backlinks.

## Workflow

1. Use the complete article inventory and the repository's existing graph-audit script as the structural baseline.
2. Represent pages or canonical constructions as nodes. Classify edges as prerequisite, contrast, extension, exception, application, related topic or navigation-only.
3. Separate explicit edges found in content from inferred pedagogical dependencies; label inference and confidence.
4. Detect orphan pages, dead ends, circular prerequisite paths, broken links, duplicate nodes and topics with no path from foundational material.
5. Inspect whether links are semantically helpful and appear where the learner needs them, not merely whether a link exists.
6. Check progressive coverage: introduction, explanation, contrast, optional topic paths and reference depth may be distributed across multiple pages.
7. Avoid merging pages solely because they share keywords. Compare their learner intent and scope.
8. Prioritize by navigation cost, foundational centrality, risk of misconception and repair effort.
9. Propose file-scoped edits and graph regression tests; do not mass-rewrite the taxonomy.

## Output

Graph scope/date; node and edge counts; edge-type definitions; structural findings; inferred prerequisite assumptions; high-centrality gaps; orphan/dead-end list; ranked repair plan.

## Guardrails

- Never call the graph exhaustive unless the inventory was exhaustive.
- A hyperlink is not proof of pedagogical adequacy.
- Do not label an inferred dependency as an official curriculum requirement.
- Reuse existing scripts and preserve current categories unless evidence supports a change.
