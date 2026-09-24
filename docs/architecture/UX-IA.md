# UX / IA Review — 2026-09-23

## Evidence level

This is a code-level information-architecture review based on the current route tree, content model and shared navigation. It is **not** a browser screenshot audit. Visual/runtime accessibility claims remain pending until the site can be captured in a browser.

## Learner journey

**Find**
- Home provides a native search form and a direct category grid.
- Global navigation exposes Grammar, Comparisons, Search and About.
- Search is also a first-class route.

**Understand**
- Category pages act as hubs rather than dumping every topic into one flat index.
- Topic pages use a consistent GrammarLayout with title, synopsis, metadata and optional table of contents.
- Comparison pages use a consistent ComparisonLayout.

**Compare**
- Grammar topics can expose typed prerequisites, contrasts, extensions and exceptions.
- The comparison subsystem has its own collection and remains discoverable from global navigation and the homepage's featured comparisons.

**Remember**
- Related topics provide nearby retrieval paths without making every page a generic card cluster.
- The design system emphasizes typographic and spacing hierarchy rather than decoration.

## Improvements completed

1. Homepage search was converted from inline-JS button injection to a native GET form. Enter-key submission and non-JavaScript use now rely on platform HTML behavior.
2. Comparison entries were moved from page-scoped MDX into a dedicated Content Collection.
3. Comparison index, homepage featured comparisons and topic-level comparison navigation now derive from the same collection.
4. Comparison URLs are centralized in `src/utils/comparisons.ts`.
5. Short cross-category references that became ambiguous after the migration were made explicit (`verbs/...` and `prepositions/...`).

## Accessibility evidence

The codebase already contains semantic navigation, skip navigation, heading structure, `aria-label`/`aria-current`, reduced-motion handling and visible focus styles. The remaining browser-only checks include actual focus order, mobile menu behavior, responsive layout, contrast as rendered, touch target usability and Pagefind interaction.

## IA policy

- Search is retrieval, not a replacement for hierarchy.
- Category pages are navigation hubs.
- Comparisons are a first-class content subsystem, not ad hoc page exceptions.
- Relationship metadata must be semantically meaningful.
- Public URLs remain stable during structural refactors.
- Do not add navigation merely to increase link count.

## Current status

The structural IA review is complete at source level. Browser-based visual/accessibility audit remains a release-stage task.
