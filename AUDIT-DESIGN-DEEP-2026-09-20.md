# Deep Design Audit — Gramaticarrona

Source files: 231

## Result

Findings: 13 — HIGH 1, MEDIUM 8, LOW 4.

## Findings

### 1. [MEDIUM] tokens — Many hard-coded colors

**Evidence:** 86 distinct hex colors are present.

**Recommendation:** Keep semantic colors in tokens and document exceptions.
### 2. [LOW] visual-language — Many corner-radius values

**Evidence:** var(--radius-sm), 0 0 var(--radius) 0, var(--radius), 2px, 999px, 0

**Recommendation:** Use a small intentional radius vocabulary.
### 3. [LOW] visual-language — Many shadow treatments

**Evidence:** var(--shadow-sm), var(--shadow-md), none, 6px 6px 0 var(--gr-maize)

**Recommendation:** Avoid generic SaaS elevation unless it has a clear semantic role.
### 4. [MEDIUM] typography — Platform-dependent editorial typography

**Evidence:** Avenir Next/Baskerville/Iowan Old Style may be unavailable on Windows/Linux.

**Recommendation:** Render on Windows, macOS and Linux and verify fallback hierarchy.
### 5. [LOW] typography — Competing UI font definitions

**Evidence:** System UI and a project UI stack both occur.

**Recommendation:** Keep one documented UI stack with robust fallbacks.
### 6. [MEDIUM] responsive — Very narrow hero measure

**Evidence:** Hero heading uses max-width:11ch.

**Recommendation:** Test 320/375/430px with long Ukrainian words.
### 7. [MEDIUM] accessibility — Links may lose non-color affordance

**Evidence:** Some link rules remove underlines.

**Recommendation:** Keep body links distinguishable without hover; card/nav exceptions should have another clear affordance.
### 8. [MEDIUM] responsive — Responsive hiding detected

**Evidence:** display:none occurs in responsive CSS.

**Recommendation:** Verify hidden content has an equivalent mobile path.
### 9. [LOW] responsive — Horizontal scrolling containers

**Evidence:** Overflow scrolling is used.

**Recommendation:** Restrict to genuinely wide data and verify scroll affordance.
### 10. [MEDIUM] responsive — Sticky elements need viewport testing

**Evidence:** Sticky header/TOC detected.

**Recommendation:** Test short viewports, zoom and keyboard focus.
### 11. [MEDIUM] components — 10 inline style attribute(s)

**Evidence:** Presentation rules are embedded in templates.

**Recommendation:** Move recurring decisions into named classes/tokens.
### 12. [MEDIUM] theme — Dual theme mechanisms

**Evidence:** color-scheme and custom dark variables are both present.

**Recommendation:** Render both themes and verify forms, tables, chips, footer and Pagefind.
### 13. [HIGH] color — Potential AA contrast issue: #7b786f on #f3eee4

**Evidence:** Estimated ratio 3.82:1.

**Recommendation:** Verify in a rendered contrast checker and adjust semantic tokens if needed.

## Mandatory browser audit

- 320×800, 375×812, 430×932, 768×1024, 1024×768, 1440×900, 1920×1080.
- Light/dark mode and 100/125/150/200% zoom.
- Keyboard-only traversal including skip link, nav, search, TOC, related links and footer.
- Long Ukrainian headings, long Spanish examples, formulas, mistakes, notes, tables and minimal pairs.
- Search: empty, normal, no-result and long query.
- Mobile menu and TOC open/close/focus order.
- Horizontal overflow: only intentionally scrollable data may overflow.
- Sticky header/TOC at short viewport heights.
- Home, index, category, article, comparison, search and 404 as one coherent system.

## Visual direction

Treat the site as an editorial linguistic handbook: typography, indexing, rules and information hierarchy should carry the identity. Avoid generic SaaS cards, gradients, glass effects, gratuitous shadows and motion without informational purpose.
