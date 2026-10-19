# High-risk cross-page audit — 2026-10-18

## Scope

Follow-up audit on the current branch `docs/grammar-reference-architecture-2026-10-18`. This pass inspects three comparison pages against their canonical article families, then records observed overlap between pages with different URLs. It is a targeted editorial/source-alignment audit, not a claim that all 213 MDX pages have been verified.

## Findings and changes made

### 1. Articles comparison — corrected

**File:** `src/content/comparisons/articles.mdx`

The prior page contained several misleading absolutes:
- defined article reduced to “a specific object” and indefinite article to “any object”;
- first mention treated as requiring `un`, with a known object requiring `el`;
- `Soy un médico` presented as simply incorrect;
- the choice of articles was reduced to “concrete vs any” without zero article and reference structure.

The page has been rewritten to describe typical interpretations rather than categorical rules, distinguish definite, indefinite and zero article, retain important examples (`el agua`, professions, body parts, `al/del`) and link to canonical pages:
- `/es/articles/definite-indefinite/`
- `/es/articles/zero-article/`
- `/es/articles/special-cases/`

Primary source used to validate the core framing: RAE/ASALE, *Nueva gramática básica*, “Clases y paradigma”, which describes indefinite articles as introducing new discourse entities and definite articles as referring to entities assumed identifiable to the listener:
https://www.rae.es/gram%C3%A1tica-b%C3%A1sica/el-art%C3%ADculo/caracterizaci%C3%B3n/clases-y-paradigma

### 2. Por / para comparison — corrected

**File:** `src/content/comparisons/por-para.mdx`

The prior page used a mixed-error example (`Lo hago para tu` → `Lo hago por ti`), so it combined the preposition contrast with the pronoun-form correction. It also said that “для” in purpose/designation “always” maps to `para`, which is too categorical without construction-level qualification.

The page now separates cause/motive, purpose, recipient, exchange/price, route/direction, deadline/duration and means/channel; uses minimal pairs with contextual translations; avoids treating a mnemonic as a universal rule; and links to both canonical preposition pages:
- `/es/prepositions/por-para/`
- `/es/prepositions/por-para-markers/`

Open follow-up: this pass aligned the comparison to the existing canonical explanation but did not perform a full claim-by-claim RAE corpus/lexicographic review of every `por` and `para` use.

### 3. Indicativo / subjuntivo comparison — corrected

**File:** `src/content/comparisons/indicative-subjunctive.mdx`

The previous page described the contrast as “facts versus opinions, wishes and unreality”, used the oversimplified prompt “fact or attitude?”, and claimed `querer que` and `no creer que` take subjunctive in absolute terms. It did not adequately distinguish clause construction, reference, temporal perspective and contextual interpretation.

The page now explains:
- `creo que está` vs `no creo que esté`;
- `sé que viene` vs `quiero que venga`;
- identifiable vs non-identifiable relative-clause referents;
- habitual/factual vs expected future temporal clauses;
- typical but non-absolute contrasts with `aunque`.

It links to the detailed trigger, non-trigger and quick-reference pages:
- `/es/moods/subjunctive-triggers/`
- `/es/moods/when-not-subjunctive/`
- `/es/moods/subjunctive-triggers-list/`

Primary source: RAE/ASALE, *Libro de estilo de la lengua española*, “El modo: ¿indicativo o subjuntivo?”. It explicitly states that mood selection depends on numerous factors and that both moods can be possible in some contexts with interpretive differences:
https://www.rae.es/libro-estilo-lengua-espa%C3%B1ola/el-modo-indicativo-o-subjuntivo

### 4. Structural duplication observed — do not silently delete URLs

A sample of the content tree shows closely related page pairs:
- `src/content/es/pronouns/personal-a.mdx` and `src/content/es/sentence-structure/personal-a.mdx`;
- `src/content/es/verbs/gustar.mdx` and `src/content/es/verbs/gustar-type-verbs.mdx`;
- `src/content/es/articles/definite-indefinite.mdx` and `src/content/es/articles/definite-vs-indefinite.mdx`.

These are not automatically errors: a broad overview and a specialized reference may both be useful. However, the inspected personal-`a` pair substantially overlaps, and the gustar pair also repeats core explanations. The next architecture pass should assign each pair an explicit role (canonical full article vs quick guide / contrast / reference), make cross-links bidirectional, and check whether the shorter page adds a distinct use case. Do not remove or redirect URLs until route, inbound-link and search-intent impact is checked.

## QA and debugging log

- The first QA run after the initial article comparison rewrite failed at `audit:tables`: the shared `CompareTable` component expects a label column plus one data cell when `headers` has two entries, while the first rewrite supplied an incompatible number of data cells. The first attempted correction still misunderstood the component schema, so QA failed a second time. Both failures were schema mismatches, not grammar or MDX syntax errors.
- The table was then corrected to use two header entries and one data cell per row, with the explanation and example combined in that cell.
- The full QA run passed on commit `a23bc61e8ce551eddfbaec772518a469d07b04d0`: https://github.com/ClippyFirst/Spanish-Grammar/actions/runs/39133237216. Results included 0 table column errors, 0 broken internal links across 208 grammar files and 5 comparison files, 0 broken/semantic-orphan graph findings, and successful static build. The build output now generates extensionless comparison routes such as `/comparisons/ser-estar/index.html`, `/comparisons/por-para/index.html`, `/comparisons/indicative-subjunctive/index.html`, and `/comparisons/articles/index.html`. Earlier failed runs were fixed before this successful run.

## Remaining work

1. Verify the final CI result for the corrected head.
2. Continue cross-page audit for `ser/estar/hay`, article exceptions, personal `a`, `gustar`, and object-clitic placement.
3. Build a canonical-topic registry for overlapping page pairs: `canonical_slug`, `page_role`, `distinct_purpose`, and reciprocal links.
4. Audit each regional claim at the exact level it states (country/region/register), rather than treating “Latin America” as one uniform variety.
5. Do not mass-upgrade `review_status`; structural QA and a comparison-page rewrite do not establish `verified` status for all claims.


### 5. Canonical article page and comparison route generation — corrected

**Files:** `src/content/es/articles/definite-vs-indefinite.mdx`, `src/content/es/articles/definite-indefinite.mdx`, `src/utils/comparisons.ts`, `src/pages/comparisons/[slug].astro`, `scripts/check-links.mjs`.

The focused review found additional editorial defects in the article contrast page: malformed emphasis around examples, and a `Mistake` component that visually labeled `No tengo un coche` as incorrect while its explanation admitted the form can be grammatical. The example is now presented as a context-sensitive contrast, the malformed emphasis is corrected, and the edited page was downgraded from `verified` to `reviewed` rather than claiming that the full article had been freshly verified. The basic article page now has direct RAE/ASALE source links and a reciprocal link to the contrast page; the terminology was corrected to `українськомовний`.

The production build log exposed a more consequential routing mismatch: comparison pages were generated as paths such as `/comparisons/ser-estar.mdx/`, while links and canonical URLs were authored as `/comparisons/ser-estar/`. The route generator and shared URL helper now strip the source extension before generating paths, and `scripts/check-links.mjs` has been extended to validate both `/es/...` and `/comparisons/...` internal links and flag source extensions in comparison URLs. This explains why the earlier link checker could report zero issues while not checking comparison routes at all.

The first build after the comparison rewrites also caught a missing `Mistake` component import in the rewritten `por-para.mdx`; the import has been added.


### 6. Runtime semantic navigation and terminology gate — corrected

The architecture passes `related`, `prerequisites`, `contrasts`, `extensions`, `exceptions` and `canonical_topic` into the grammar layout, but the layout originally rendered only `related`. The runtime reference resolver also failed to resolve explicit `category/slug` values. The resolver now prioritizes explicit category/slug paths and falls back to unique basenames; the layout renders typed groups with distinct headings and suppresses duplicates from the generic related list. The focused `personal-a` page now points to the detailed canonical page, and `hay-vs-estar` points to the `ser-estar-hay` overview. A new post-build regression audit verifies actual rendered links, not just metadata.

The terminology audit was extended from MDX content to UI source files. That caught two remaining user-visible occurrences in `src/components/Footer.astro` and `src/components/Note.astro`, plus two strings in the comparison index; all have been changed to the requested `українськомовний/українськомовні` terminology.

The improved source-level markup scan currently reports **78 pages with legacy mixed-emphasis candidates**. They are non-blocking because some are repaired by the existing remark normalization plugin and each needs contextual review before bulk changes. This is a real cleanup backlog, not proof that all 78 render incorrectly. The two directly audited high-risk pages (`ser-estar-hay` and `personal-a`) had their malformed emphasis corrected.

## Final QA after the runtime-navigation fixes

Full QA passed on commit `4b852311a1be3cbaea1f2028a3feb0df22e51949`: https://github.com/ClippyFirst/Spanish-Grammar/actions/runs/39134238053. Confirmed: 208 grammar files + 5 comparison pages (213 content pages); internal link audit 0 problems; graph audit 0 broken targets and 0 semantic orphans; UI terminology scan 0 forbidden occurrences; rendered navigation regression checks passed for category/slug related links, canonical topics and extensionless comparison routes.


### 7. Personal *a*: stressed-pronoun example corrected; page roles retained

**Files:** `src/content/es/pronouns/personal-a.mdx` (canonical) and `src/content/es/sentence-structure/personal-a.mdx` (short reference).

The shorter page used `Ayudó a ella` as an example for a tonic pronoun, with only a vague note that a clitic is often more natural. The RAE/ASALE *Glosario de términos gramaticales*, entry *complemento indirecto*, explicitly states that in contemporary Spanish tonic accusative and dative personal pronouns require doubling by the corresponding unstressed clitic: `No la vi a ella`, not `No vi a ella`; `No se lo di a él`, not `No lo di a él`.

The short-page example is now `La ayudó a ella`, with the clitic explained. The canonical article now states the rule explicitly and contrasts both direct and indirect object examples. The source is linked on both pages. The short page already has a distinct shorter-reference role, `canonical_topic: pronouns/personal-a`, and links to the canonical article; both URLs and roles are preserved. This is a bounded claim fix, not a full audit of all clitic doubling or regional patterns. Both pages remain `draft`.


### 8. Article contrast pages — exact source locators added (2026-10-19)

Files: src/content/es/articles/definite-indefinite.mdx and src/content/es/articles/definite-vs-indefinite.mdx.

The two pages already had distinct editorial roles (full explanation vs contrastive guide), reciprocal links and preserved URLs. The concrete remaining gap was source precision: one page cited NGLE chapters 14–15 through a locator that opened only the § 15.2 page, while the contrast page used chapter-level references without direct URLs. Updated both source lists to link directly to NGLE § 15.4 (anaphora/first mention), § 15.8 (generic article use), § 15.11 (bare nouns/no article), and DPD *el* § 2 for the stressed-/a/ rule. These sections directly support the specific claims/examples; DPD explicitly confirms *el agua fría*, feminine agreement, and the adjacency restriction.

The article content and page roles were not rewritten because inspection did not reveal a new unsupported rule in the reviewed examples. Existing statuses were not upgraded. This is a source-locator precision pass, not complete verification of every article construction or translation.
