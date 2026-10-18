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
- The latest run at the time of this report was still pending; check the run attached to the current PR head before calling QA successful. Earlier runs failed at `audit:tables` because of the component's expected column shape. Do not treat a pending run as passing.

## Remaining work

1. Verify the final CI result for the corrected head.
2. Continue cross-page audit for `ser/estar/hay`, article exceptions, personal `a`, `gustar`, and object-clitic placement.
3. Build a canonical-topic registry for overlapping page pairs: `canonical_slug`, `page_role`, `distinct_purpose`, and reciprocal links.
4. Audit each regional claim at the exact level it states (country/region/register), rather than treating “Latin America” as one uniform variety.
5. Do not mass-upgrade `review_status`; structural QA and a comparison-page rewrite do not establish `verified` status for all claims.
