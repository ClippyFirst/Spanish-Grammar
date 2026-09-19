# Internal content graph audit — 2026-09-19

## Intended architecture

Each grammar topic should have one primary explanatory page. Short review/overview pages are navigation aids, not duplicate textbooks. Deep pages extend the primary page with advanced or specialized material.

Preferred relationship: quick reference → primary explanation → deep dive → adjacent/specialized topics.

## Rules

- `related` must not contain the current page.
- Duplicate related targets are redundant.
- Prefer full nested page slugs when duplicate basenames exist.
- Markdown `/es/.../` links must resolve to a content page.
- Avoid linking every page to every neighboring topic.
- A page should be reachable from the grammar index/category tree or another topic; intentional specialist leaves are allowed when linked from their parent topic.
- Review/overview pages should point to the canonical primary page rather than reproduce it.
- Advanced/depth pages should link back to their primary page and only the most relevant adjacent topics.

## Automated checks

`scripts/validate-content.mjs` now builds both a `related` graph from frontmatter and a Markdown internal-link graph. It reports broken Markdown targets, self-links, duplicate `related` entries, and pages with zero inbound topic links.

## Current scope

The repository contains 195 Spanish MDX pages across 17 categories. The graph should be used as the source of truth for the next cleanup pass rather than editing prose opportunistically.

## Editorial principle

Do not delete grammar coverage merely to make the graph smaller. Consolidation means removing navigation/content repetition while preserving unique examples, exceptions, regional variation, and advanced analysis.
