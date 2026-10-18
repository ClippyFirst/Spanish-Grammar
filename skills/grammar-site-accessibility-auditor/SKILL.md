---
name: grammar-site-accessibility-auditor
description: Audits accessibility of grammar tables, interactive exercises, navigation, typography and page interactions with WCAG-informed checks and explicit evidence.
---

# Grammar Site Accessibility Auditor

## Scope

Prioritize grammar-specific barriers: conjugation tables, dense comparison tables, phonetic/orthographic notation, accordions, quizzes, keyboard navigation, focus states, contrast, reduced motion and screen-reader labels.

## Workflow

1. Establish what was inspected: source code, rendered page, browser/assistive technology, viewport and test tooling. Clearly separate static inspection from executed tests.
2. Inspect semantic headings, landmarks, link purpose, language metadata, table captions and header associations.
3. Check interactive components for keyboard reachability, visible focus, logical focus order, keyboard operation, state announcements and error recovery.
4. Review color contrast, text resizing, reflow, touch target usability, reduced-motion preferences and non-color cues.
5. For grammar tables, verify that row/column headers communicate person, tense, mood, gender/number and relevant regional variety without requiring visual position alone.
6. For examples with IPA, diacritics, arrows or symbols, check whether the meaning is available in accessible text and not solely through color or visual arrangement.
7. Inspect exercise feedback and validation messages for programmatic association and understandable correction.
8. Use automated tools as aids, not as proof of conformance. Confirm important findings manually where possible.
9. Assign severity, cite file/selector/page and provide a reproducible test or expected behavior.

## Output

Scope and method; tested pages/viewports; issue list with WCAG criterion where confidently applicable; evidence; severity; proposed fix; manual/automated verification status.

## Guardrails

- Do not claim WCAG conformance from an automated scan alone.
- Do not report a browser test as passed unless it was run.
- Avoid broad rewrites for findings not confirmed in source or rendered behavior.
- Preserve visual design while fixing barriers; ensure focus states remain clearly visible.
