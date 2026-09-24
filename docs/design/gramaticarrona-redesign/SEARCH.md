# Search Architecture — Gramaticarrona

## Principle
Search is a **topic finder**, not a generic full-text page index. The primary unit is a grammar topic and its editorial metadata.

The implementation follows the stronger semantic approach used by the Portuguese reference: normalize multilingual text, rank exact and partial matches, then fall back to token matching.

## Indexed fields
Each topic contributes:

- Ukrainian title
- Spanish title
- English title
- topic id and slug
- short description
- editorial keywords
- category
- topic code
- CEFR level
- popular flag

## Ranking
Higher scores are assigned in this order:

1. exact title / id
2. title prefix
3. exact or prefix keyword
4. title substring
5. keyword substring
6. id / slug substring
7. description substring
8. multi-token field matches

Popular topics receive a small tie-breaking boost.

## Normalization
Queries and indexed fields are:

- lower-cased with Ukrainian locale handling
- Unicode-normalized with combining marks removed
- apostrophes and hyphens normalized to spaces
- repeated whitespace collapsed

This makes searches such as accented/unaccented Spanish terms more forgiving while preserving the original displayed text.

## Runtime model
The catalog is generated at Astro build time from the `es` content collection and serialized to the search page. The browser performs ranking locally, so searching does not require a network request or an external search service.

The first render is also generated at build time when `?q=` is present, so direct links to search queries remain useful without client-side initialization.

## Editing rule
When adding a new grammar topic, put useful alternate search terms into its `keywords` frontmatter. Do not create a second ad-hoc search dictionary.

The canonical implementation is:

- `src/utils/search.ts` — ranking and normalization
- `src/pages/search.astro` — search UI and build-time catalog
- topic frontmatter `keywords` — editorial aliases

Pagefind is intentionally not part of the search architecture.


## Visual contract

The search control is a shared editorial instrument used on both the homepage and the dedicated search page.

- It is **not** a rounded card, modal, or SaaS-style input shell.
- The primary geometry is a horizontal ruled field: thin top rule + 3px bottom rule.
- The action is a compact square arrow control at the far right.
- A small monospace label identifies the search scope; the dedicated page uses the same control rather than inventing a second form style.
- Supporting text sits below the rule, outside the field, so the input remains visually quiet.
- Focus changes the rules and action to the accent color and retains a visible keyboard focus ring.
- The `/` key focuses the search field when the user is not already typing in another editable control.
- Mobile keeps the same instrument; only spacing and proportions contract. There is no stacked full-width button treatment.

The canonical reusable component is `src/components/SearchControl.astro`. Homepage and `/search/` must use this component rather than maintaining separate search-form markup.
