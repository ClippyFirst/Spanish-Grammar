# Deep Design Audit — Gramaticarrona

Source files: 252

## Result

Findings: 2 — HIGH 0, MEDIUM 1, LOW 1.

## Findings

### 1. [MEDIUM] responsive — Very narrow hero measure

**Evidence:** Hero heading uses a very narrow character measure.

**Recommendation:** Test 320/375/430px with long Ukrainian words.
### 2. [LOW] responsive — Large breakpoint vocabulary

**Evidence:** min: 640, 720, 900, 980, 1024, 1200; max: 360, 420, 620, 639, 767, 1000, 1023, 1199

**Recommendation:** Consolidate around actual content failures.

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
