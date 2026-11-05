---
name: grammar-exercise-validator
description: Validates Spanish grammar exercises, answer keys, distractors, feedback and learning objectives for correctness, ambiguity and pedagogical validity.
---

# Grammar Exercise Validator

## Purpose

Review exercises in MDX, components, data files or proposed lesson content. Validate both Spanish language correctness and whether each task tests the skill it claims to test.

## Workflow

1. Inventory each exercise, its learning objective, instructions, item set, expected answer, accepted alternatives and feedback.
2. Solve every item independently before reading the supplied answer key where practical.
3. Verify morphology, syntax, orthography, semantics, register and regional variation against suitable authoritative sources.
4. Check whether the prompt provides enough context to select one answer. If multiple answers are valid, either accept them explicitly or revise the context; do not mark a valid variant wrong.
5. Inspect distractors: each should represent a plausible misconception, be clearly incorrect under the stated context, and not rely on trick wording or typographic clues.
6. Check answer-key alignment, numbering, feedback, scoring and all references to the exercise elsewhere.
7. Assess objective alignment: recognition, controlled production, contrastive choice, transformation and free production are different skills.
8. For generated or interactive exercises, define deterministic test cases for every item and every accepted alternative. Test empty input, accents, punctuation, capitalization and whitespace only where the interaction claims to normalize them.
9. Record findings by severity and exact item/file location. Suggest the smallest safe correction and a regression test.

## Output

Exercise inventory; item-level verdict; accepted-answer set; ambiguity notes; evidence/source links; accessibility and interaction risks; severity-ranked repairs; regression cases.

## Severity

- **Critical:** answer key teaches a false rule or marks a clearly valid answer wrong.
- **High:** ambiguous prompt, invalid distractor, missing valid alternatives or broken scoring.
- **Medium:** feedback does not explain the tested distinction or objective mismatch.
- **Low:** wording, formatting or consistency issue without impact on correctness.

## Guardrails

- Never assume there must be exactly one correct answer.
- Do not invent an answer key from pattern matching alone.
- Distinguish grammaticality from preferred usage, register, dialect and target construction.
- Do not claim browser behavior was tested unless a real test was executed.
- Preserve the project's current exercise/component architecture.
