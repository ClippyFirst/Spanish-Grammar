---
name: grammar-visualization-auditor
description: Determines whether a grammar-reference explanation would benefit from a visualization and specifies the simplest accurate, accessible form without requiring graphics by default.
---

# Grammar Visualization Suitability Auditor

## Purpose

Decide whether a visual explanation materially improves a Spanish grammar reference. This skill recommends; it does not automatically generate or require a diagram. A clear paragraph, contrast table or pair of examples may be better.

## When to run

Use when reviewing a complex temporal/aspectual contrast, a construction with several interacting conditions, morphology or agreement patterns, clitic placement, sentence structure, or when an editor proposes an SVG. Do not run on every article.

## Procedure

1. State the reader's concrete question and the misunderstanding the visual is meant to resolve.
2. Inspect the existing explanation, examples, contrasts and linked canonical topics first.
3. Decide whether prose, a compact table, an optional curated topic path, or a visual best represents the relationship. Default to no visual unless a specific benefit is defensible.
4. If a visual is justified, select the simplest type:
   - timeline for temporal reference, duration, overlap, repetition or viewpoint;
   - decision diagram for a small number of genuinely diagnostic conditions;
   - sentence diagram for syntax, agreement or clitic position;
   - contrast diagram for meaning/focus differences;
   - morphology diagram for form segmentation or paradigm alternations.
5. Explain the relation represented and its limits. Do not imply that a schematic timeline predicts all real-world tense choices or that a decision tree captures context-free universal rules.
6. Specify an implementation brief: labels, exact examples, direction/sequence, caption, text alternative, and whether inline SVG or semantic HTML is sufficient. Prefer lightweight inline SVG/HTML/CSS over new dependencies.
7. Check that meaning is available without colour, animation, hover, or spatial layout alone; require a concise text equivalent, accessible naming/caption, responsive behavior and readable contrast.
8. Verify every linguistic label and example with the relevant grammar fact-checking and variation skills before publication.
9. If a diagram is not justified, state that explicitly and recommend the better textual treatment.

## Output

- Reader question and current failure mode
- Decision: no visual / prose / table / optional topic path / visual recommended
- Evidence for the decision
- Proposed form and content (if any)
- Exact example(s) and scope/variation caveats
- Accessibility and responsive requirements
- Linguistic verification required
- Risks of oversimplification
- Confidence and unresolved questions

## Acceptance criteria

A recommendation passes only if it identifies a specific relationship that is hard to understand from the current text, explains why the proposed form improves comprehension, uses a grammatically verified example, preserves meaningful variation, and includes a non-visual equivalent. “It would look nice” is not a valid rationale.

## Test cases

### Positive candidate: past-tense viewpoint
For *pretérito indefinido* vs *imperfecto*, assess whether a timeline with event boundaries and background/ongoing viewpoint clarifies a specific contrast. The result must state that a timeline is schematic and cannot replace lexical, discourse and regional/contextual analysis.

### Positive candidate: clitic placement
For clitics around infinitives, gerunds and affirmative imperatives, consider a compact position diagram only if it shows a real syntactic contrast more clearly than examples and a table.

### Negative candidate: simple spelling rule
For a short, deterministic accentuation rule with two examples, prefer concise prose and examples unless the existing explanation reveals a specific visualizable difficulty.

### Ambiguous candidate: *ser* vs *estar*
Do not produce a simplistic universal decision tree. First identify the particular semantic contrast (e.g. *es listo / está listo*) and decide whether a local contrast card or minimal-pair table is enough.

## Guardrails

- Do not make visualizations mandatory for all pages.
- Do not generate image assets or code without an explicit implementation task.
- Do not claim usability or comprehension gains without user testing.
- Do not invent grammar claims, corpus evidence, sources or regional labels.
- Do not add charting/diagram dependencies for a single static explanation.
- Keep the grammar reference's stable URL and existing design system.
