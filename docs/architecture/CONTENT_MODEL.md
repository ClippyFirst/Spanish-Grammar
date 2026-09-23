# Content Model

## File identity
Each topic is stored as src/content/es/<category>/<slug>.mdx. The path is the stable content identity used by routing and graph tools.

## Required frontmatter
language, category, title_uk, title_es, title_en, short_description.

## Optional metadata
description, order, popular, recently_added, keywords, related, canonical_topic, prerequisites, contrasts, extensions, exceptions, region, review_status, updated, sources, cefr.

## Relationship vocabulary
- related: useful neighbour without a stronger semantic relation.
- canonical_topic: canonical page for an overview or variant.
- prerequisites: knowledge normally needed first.
- contrasts: competing or easily confused concept.
- extensions: natural continuation or advanced application.
- exceptions: dedicated exception or edge-case treatment.
Do not duplicate the same target across fields unless the relationships genuinely differ.

## References
Prefer category/slug identifiers. Basename-only identifiers are acceptable only while unambiguous. Ambiguous references must migrate to full paths. Self-links are invalid.

## Editorial state
review_status is editorial state, not learner proficiency. updated is a review date. sources support factual discipline for normative or variant claims.

## Page structure
Typical major-page progression: problem → quick model → formation → use → non-use → contrast → exceptions → Ukrainian-specific difficulty → regional variation → related topics. Not every topic needs every section.

## URL policy
Public topic URLs follow /es/<category>/<slug>/. Preserve existing URLs whenever possible. Slug changes require migration analysis covering inbound links, sitemap, canonical URLs, search indexing and redirects.

## Quality hierarchy
1. factual accuracy; 2. grammatical precision; 3. Ukrainian learner fit; 4. cross-page consistency; 5. source discipline; 6. technical QA.