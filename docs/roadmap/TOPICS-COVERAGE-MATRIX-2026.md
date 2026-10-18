# Spanish Grammar — Coverage Matrix 323 → 208

> Audit date: 2026-09-24  
> Source checklist: `docs/roadmap/TOPICS-COMPLETE-UA.md`  
> Content source: `src/content/es/**.mdx` on `main`  
> Purpose: distinguish real grammatical coverage from page count and identify requirements that are missing or only partially covered.

> **Status note (2026-10-18):** this is a historical structural-coverage snapshot from 2026-09-24, not a fresh linguistic/source audit of the current branch. `full/embedded` means that a canonical treatment was mapped; it does **not** mean every claim is source-verified or that all country-level varieties have been checked. The source checklist still has unchecked boxes, so reconcile its state with this matrix rather than treating unchecked boxes as missing coverage. See `docs/audits/current/SPANISH-VARIETY-COVERAGE-MATRIX-2026-10-18.md` for the separate regional-scope audit, whose country-level statuses remain unverified. A source-level path check on the 2026-10-18 audit branch found that all 75 unique canonical slugs explicitly referenced in this matrix resolve to existing MDX files. This checks route/file existence only; it does not validate whether each checklist requirement is explained adequately or source-verified.

## Executive result

The audit reconciles **323 checklist requirements** with **208 canonical MDX grammar pages**.

The important result is:

- **208/208 MDX entries are structurally routed into the Astro site.**
- **17/17 grammar categories are represented.**
- The checklist is intentionally a **coverage map, not a one-page-per-bullet specification**. Many bullets are covered inside deeper canonical articles.
- The targeted gap-closure pass completed the previously identified **13 requirements** (8 missing + 5 partial).
- The remaining requirements have a canonical home either as a dedicated page or as an embedded subsection/block in another page.

### Status vocabulary

| Status | Meaning |
|---|---|
| **full** | The requirement has an identifiable canonical treatment. |
| **embedded** | Covered inside another canonical topic; no separate page is needed. |
| **partial** | The concept is present, but one or more checklist details are not explicit enough to count as complete. |
| **missing** | No canonical treatment was found in the current content inventory. |

This matrix deliberately does **not** treat “one bullet = one page” as the quality criterion. The roadmap itself says that one deep page may cover several subtopics.

---

# 1. Coverage by checklist section

The checklist contains exactly 323 checkbox requirements.

| Section | Requirements | Main canonical pages | Result |
|---|---:|---|---|
| 1. Fundamentals | 18 | `grammar-basics`, `alphabet-pronunciation`, `reading-rules`, numerals, `ua-interference` | **full / embedded** |
| 2. Spelling & punctuation | 13 | `accent-marks`, `c-z-s-g-j`, `b-v`, `h-y-ll`, `special-letters`, `capitalization`, `punctuation-capitalization`, `loanwords-proper-names`, `por-que-porque-porque-por-que` | **full** |
| 3. Nouns | 17 | `genero`, `gender-exceptions`, `numero-plural`, `irregular-plurals`, `noun-special-cases`, `noun-complements`, `possessive-constructions`, `noun-classes` | **full** |
| 4. Articles | 11 | `definite-indefinite`, `definite-vs-indefinite`, `zero-article`, `special-cases`, `articles-with-names`, `neutral-lo` | **full** |
| 5. Adjectives | 18 | agreement, position, comparison, quantifiers, adjective complements/types | **full / embedded** |
| 6. Adverbs | 15 | formation/position, types, `muy-mucho-tan-tanto`, `ya-todavia-aun`, focus/stance | **full / embedded** |
| 7. Pronouns & determiners | 25 | object, placement, double-object, `se`, demonstratives, possessives, relatives, interrogatives, `mismo-uno-generic` | **full / embedded** |
| 8. Prepositions | 15 | place/time, `hace-desde-hace`, `por-para`, `personal-a`, regime/pairs, common constructions | **full / embedded** |
| 9. Conjunctions | 17 | coordinating, subordinating, `como-excepto`, connectors, fillers, `que-de-que` | **full / embedded** |
| 10. Verb system | 37 | conjugation, irregular/stem-changing, defective verbs, aspect, perception verbs, causative, deictic motion, infinitive/gerund/participio, ser/estar/haber, valency, pronominal verbs | **full** |
| 11. Indicative tenses | 16 | overview + every major tense + contrasts + conditionals | **full / embedded** |
| 12. Moods | 17 | subjunctive forms/triggers, negative triggers, ojalá/como si, imperative | **full / embedded** |
| 13. Periphrases | 14 | overview, `ir-a-infinitivo`, `estar-gerundio`, `frequent-periphrases`, modal periphrases | **full** |
| 14. Sentence structure | 24 | word order, questions, tag questions, clauses, conditionals, reported speech, passive, negation, focus, dislocation | **full** |
| 15. Word formation | 7 | prefixes/suffixes, diminutives, augmentatives, pejoratives, compounding | **full** |
| 16. Regional variants | 15 | regional overview + Spain/LatAm + Mexico/Central America/Caribbean/Andean/Southern Cone/Rioplatense/Colombia-Canarias + voseo/ustedeo/leísmo/seseo | **full / embedded** |
| 17. Micro-constructions | 44 | emphasis, polarity, focus, `se`, free subjunctive, aspect/time, `no es porque`, `de + INF`, `será que`, `no sea que`, `lo de`, `por qué / porque / porqué / por que`, emphatic reduplication, discourse constructions | **full** |

**Total: 323 requirements.**

---

# 2. The actual gaps

These are the items that should not be marked “complete” merely because a nearby topic exists.

## 2.1 Previously identified gaps — resolved

The 13 requirements identified in the initial audit are now covered by canonical content. The goal remains **coverage**, not one-page-per-checkbox duplication.

| ID | Requirement | Previous status | Canonical treatment |
|---|---|---|---|
| **2.13** | Написання запозичень і власних імен | partial | `spelling/loanwords-proper-names` |
| **3.1** | Загальні / власні; конкретні / абстрактні | partial | `nouns/noun-classes` |
| **10.6** | Дефективні / недостатні дієслова | missing | `verbs/defective-verbs` |
| **10.7** | Вид / аспект | partial | `verbs/aspect` |
| **10.34** | Дієслова сприйняття + INF / gerundio / que | partial | `verbs/perception-verbs` |
| **10.34** | Псевдовідносні після сприйняття | missing | `verbs/perception-verbs` |
| **10.35** | Каузатив: hacer + INF | missing | `verbs/causative-hacer-infinitivo` |
| **10.37** | Ir / venir, llevar / traer — дейксис | missing | `verbs/deictic-motion` |
| **14.8** | Tag-питання: ¿no?, ¿verdad?, ¿eh?, ¿cierto? | missing | `sentence-structure/tag-questions` + `questions` |
| **17.2.3** | `no es porque…` + subjuntivo / indicativo | missing | `micro-constructions/no-es-porque` + `emphasis-polarity-focus` |
| **17.7.5** | `Cuanto más… más…`; `lo antes posible` | partial | `adjectives/comparison-structures` |
| **17.7.8** | Por qué / porque / porqué / por que | missing | `spelling/por-que-porque-porque-por-que` |
| **17.7.13** | Емфатична редуплікація | missing | `micro-constructions/emphatic-reduplication` |

### Current gap count

- **0 missing**
- **0 partial**
- **323 full or embedded**

The matrix should now be treated as the post-closure baseline. Future audits should only reopen a requirement when new source material, a deeper lexical/syntactic distinction, or a content-quality review shows that the canonical treatment is insufficient.

# 3. 323 → canonical pages: how the compression works

The following is the actual reconciliation logic. Item numbers refer to the numbered requirements in `TOPICS-COMPLETE-UA.md`.

## 1. Fundamentals — items 1–18

- **1–7** → `fundamentals/grammar-basics`, with `sentence-structure/predicative-complement`, `compound-complex`, `questions`, `negation`, `imperative-overview` where the checklist becomes more specific.
- **8** → `sentence-structure/word-order` / `word-order-review`.
- **9** → `fundamentals/alphabet-pronunciation`.
- **10** → `fundamentals/reading-rules`.
- **11** → `fundamentals/date-time-numbers`.
- **12** → `fundamentals/date-time-numbers`.
- **13** → `fundamentals/ordinal-numbers`.
- **14** → `fundamentals/numbers-in-speech`.
- **15** → `fundamentals/fractions-percentages` + `adjectives/quantifiers`.
- **16** → `fundamentals/ua-interference`.
- **17** → `fundamentals/false-friends-ua-es`.
- **18** → `pronouns/tu-usted-vosotros-ustedes` + `regional/regional-overview` + discourse-marker material.

## 2. Spelling & punctuation — items 19–31

- **19–22** → `spelling/accent-marks`.
- **23** → `spelling/diphthongs-hiatus`.
- **24** → `spelling/c-z-s-g-j` + `verbs/orthographic-changes`.
- **25** → `spelling/special-letters` + `spelling/h-y-ll` + regional phonology pages.
- **26** → `spelling/b-v`, `h-y-ll`, `c-z-s-g-j`.
- **27** → `spelling/capitalization`.
- **28–29** → `spelling/punctuation-capitalization`.
- **30** → `spelling/punctuation-capitalization`.
- **31** → `spelling/loanwords-proper-names` (canonical page exists; this mapping is structural and does not certify the page's examples or sources).

## 3. Nouns — items 32–48

- **32** → `nouns/noun-classes` (canonical page exists; this mapping is structural and does not certify the page's examples or sources).
- **33–37** → `nouns/genero` + `gender-exceptions`.
- **38–40** → `nouns/numero-plural` + `irregular-plurals`.
- **41–43** → `nouns/noun-special-cases`.
- **44** → `nouns/possessive-constructions`.
- **45–48** → `nouns/noun-special-cases` + `noun-complements` where complement structure is involved.

## 4. Articles — items 49–59

- **49–52** → `articles/definite-indefinite`, `definite-vs-indefinite`, `zero-article`.
- **53–54** → `articles/special-cases`.
- **55** → `pronouns/body-parts-possession` + `articles/special-cases` (structural mapping retained; this batch repaired malformed Markdown in the canonical body-parts page and downgraded its evidence status to `draft`; claim-level verification remains open).
- **56** → `articles/articles-with-names`.
- **57** → `articles/special-cases`.
- **58** → `articles/neutral-lo`.
- **59** → `articles/definite-indefinite` + `zero-article` + fixed expressions.

## 5. Adjectives — items 60–77

- **60–62** → `adjectives/adjective-agreement` + `agreement-traps`.
- **63–64** → `adjectives/adjective-types-cultos` + `adjective-position`.
- **65–66** → `adjectives/adjective-position` + `meaning-by-position`.
- **67** → `adjectives/adjective-position`.
- **68–72** → `degrees-of-comparison`, `irregular-comparatives`, `comparison-structures`.
- **73–74** → `degrees-of-comparison`.
- **75** → `quantifiers` + `quantifiers-advanced`.
- **76–77** → `meaning-by-position` / `adjective-types-cultos`.

## 6. Adverbs — items 78–92

- **78–80** → `adverbs/formation-and-position` + `types-frequency-time-manner`.
- **81** → `adverbs/muy-mucho-tan-tanto`.
- **82** → `adverbs/ya-todavia-aun`.
- **83–86** → `adverbs/focus-and-stance` + `types-frequency-time-manner`.
- **87–89** → `adverbs/focus-and-stance`.
- **90–92** → `adverbs/types-frequency-time-manner` + `moods/quizas-tal-vez-acaso` + related constructions.

## 7. Pronouns & determiners — items 93–117

- **93–95** → `personal-pronouns-omission` + `tu-usted-vosotros-ustedes`.
- **96** → `tu-usted-vosotros-ustedes` + `regional/voseo`.
- **97** → `personal-pronouns-omission`.
- **98–100** → `objeto-directo-indirecto`, `double-object-pronouns`, `object-pronoun-placement`.
- **101–102** → `object-pronoun-placement`.
- **103–105** → `se-reflexive-impersonal-passive`, `se-impersonal`, `mismo-uno-generic`.
- **106** → `demonstrative-pronouns`.
- **107** → `possessive-pronouns`.
- **108** → `body-parts-possession`.
- **109–111** → `indefinite-pronouns`, `mismo-uno-generic`.
- **112** → `mismo-uno-generic`.
- **113** → `interrogative-pronouns`.
- **114** → `exclamatives`.
- **115–117** → `relative-pronouns` + `relative-pronouns-review`.

## 8. Prepositions — items 118–132

- **118–120** → `prepositions/common-constructions`, `place`, `time`.
- **121** → `hace-desde-hace`.
- **122–123** → `por-para` + `por-para-markers`.
- **124** → `pronouns/personal-a` + `sentence-structure/personal-a`.
- **125–126** → `common-constructions` + `estar-de-ser-de`.
- **127** → `verb-preposition-pairs` + `verbs-with-prepositions`.
- **128** → `adjective-complements` + `noun-complements`.
- **129–131** → `common-constructions`.
- **132** → `common-constructions` + `verbs-with-prepositions`.

## 9. Conjunctions — items 133–149

- **133–135** → `conjunctions/coordinating`.
- **136–141** → `conjunctions/subordinating`.
- **142** → `conjunctions/como-excepto`.
- **143–144** → `conjunctions/subordinating` + `moods/subjunctive-triggers`.
- **145** → `conjunctions/subordinating` + `sentence-structure/consecutive-clauses`.
- **146** → `moods/subjunctive-triggers` + `subordinating`.
- **147** → `conjunctions/que-de-que`.
- **148** → `conjunctions/como-excepto`.
- **149** → `conjunctions/discourse-connectors` + `discourse-fillers`.

## 10. Verb system — items 150–186

- **150–154** → `verbs/conjugations`, `stem-changing-verbs`, `orthographic-changes`, `irregular-verbs`.
- **155** → `verbs/defective-verbs`.
- **156** → `verbs/aspect` + `tenses/tenses-overview` + periphrase pages.
- **157–159** → `sentence-structure/verb-valency`, `ser-estar`, and auxiliary-verb material.
- **160** → `verbs/infinitivo` + `infinitive-as-noun`.
- **161** → `verbs/verb-infinitive-patterns`.
- **162** → `verbs/gerundio` + `gerund-uses`.
- **163** → `verbs/participio`.
- **164** → `verbs/participio` for double participles.
- **165–167** → `haber-auxiliary`, `haber-vs-tener` and the impersonal `haber` forms.
- **168–174** → `ser-estar`, `ser-estar-hay`, `ser-estar-location`, `ser-estar-with-adjectives`.
- **175** → `gustar` + `gustar-type-verbs`.
- **176** → `pronominal-verbs`.
- **177** → `deber-poder-soler` / modal material.
- **178** → `deber-vs-deber-de`.
- **179** → `deber-poder-soler` / `periphrases` material for `haber de`.
- **180** → `change-of-state`.
- **181** → **full**: impersonal weather verbs are covered by the general verb-system treatment.
- **182** → `verbs/perception-verbs`.
- **183** → `verbs/perception-verbs`.
- **184** → `verbs/causative-hacer-infinitivo`.
- **185** → `gerund-uses` for motion + gerundio.
- **186** → `verbs/deictic-motion`.

## 11. Indicative tenses — items 187–202

- **187–195** → `tenses/tenses-overview` + each canonical tense page.
- **196** → `sequence-of-tenses`.
- **197–199** → `conditionals-review` + `conditional-sentences` + `advanced-conditionals`.
- **200** → `conditionals-review`.
- **201** → `conditionals-review` / `advanced-conditionals`.
- **202** → `periphrases/frequent-periphrases` + `hace-desde-hace`.

## 12. Moods — items 203–219

- **203–209** → subjunctive form pages.
- **210–211** → `subjunctive-triggers` + `when-not-subjunctive`.
- **212–214** → `ojala-como-si`, `quizas-tal-vez-acaso`.
- **215** → `subjunctive-triggers` + subordinate/relative/conditional/concessive pages.
- **216–219** → `imperative-overview`, `imperative-pronouns`, `imperativo`.

## 13. Periphrases — items 220–233

- **220** → `periphrases/overview`.
- **221** → `ir-a-infinitivo`.
- **222** → `tener-que-hay-que` + `deber-poder-soler`.
- **223** → `estar-gerundio`.
- **224–228** → `frequent-periphrases`.
- **229** → `frequent-periphrases` + `hace-desde-hace`.
- **230** → `frequent-periphrases`.
- **231** → `estar-a-punto-de`.
- **232** → `periphrases/overview`.
- **233** → `frequent-periphrases`.

## 14. Sentence structure — items 234–257

- **234–236** → `agreement`, `predicative-complement`, `verb-valency`.
- **237–239** → `word-order`, `word-order-review`.
- **240** → `personal-pronouns-omission`.
- **241–242** → `questions` + `tag-questions`.
- **243** → `exclamatives`.
- **244** → `negation`, `negation-patterns`, `double-negation`.
- **245** → `hay-vs-estar`.
- **246** → `personal-a`.
- **247** → `agreement`.
- **248–249** → subordinate and relative-clause pages.
- **250** → `conditional-sentences` + `advanced-conditionals`.
- **251–252** → `reported-speech`, `reported-speech-review`.
- **253** → `passive-voice` + `passive-se-vs-ser`.
- **254** → `se-impersonal`, `se-reflexive-impersonal-passive`.
- **255** → `compound-complex`, `subordinate-clauses`.
- **256–257** → `emphasis-polarity-focus`, `cleft-pseudocleft`, `dislocation`.

## 15. Word formation — items 258–264

- **258** → `prefixes-suffixes`.
- **259–261** → `diminutives`, `diminutives-review`, `augmentatives`, `pejoratives-affectionate`.
- **262** → `adverb-diminutives`.
- **263** → embedded in adjective/noun material.
- **264** → `compounding`.

## 16. Regional variants — items 265–279

- **265** → `regional-overview` + `spain-vs-latin-america`.
- **266** → `voseo`.
- **267–268** → `tu-usted-vosotros-ustedes` + regional pages.
- **269** → `ustedeo`.
- **270** → `leismo-laismo-loismo`.
- **271** → `spain-vs-latin-america` + tense pages.
- **272–278** → geographic regional pages.
- **279** → `seseo-ceceo-distincion`, `alphabet-pronunciation`, `rioplatense`.

## 17. Micro-constructions — items 280–323

### 17.1 Emphatic polarity — 280–286
→ `sentence-structure/emphasis-polarity-focus`, `verum-focus`.

### 17.2 Negation and correction — 287–291
- **287–288** → `emphasis-polarity-focus`.
- **289** → `micro-constructions/no-es-porque`.
- **290–291** → `double-negation`, `coordinating`, `negation`.

### 17.3 Focus/topic/dislocation — 292–296
→ `dislocation`, `cleft-pseudocleft`, `verum-focus`, `emphasis-polarity-focus`, `word-order-review`.

### 17.4 Se and small arguments — 297–299
→ `se-reflexive-impersonal-passive`, `body-parts-possession`.

### 17.5 Free subjunctive — 300–302
→ `free-subjuntivo`, `ojala-como-si`.

### 17.6 Time/aspect — 303–305
→ `hace-desde-hace`, `ya-todavia-aun`, `frequent-periphrases`.

### 17.7 Other advanced constructions — 306–318
- **306–309** → `advanced-conditionals`, `micro-constructions/de-inf-sera-no-sea-lo-de`.
- **310** → `comparison-structures` (includes *cuanto más… más…* and *lo antes posible*).
- **311** → `absolute-constructions`.
- **312** → `spelling/por-que-porque-porque-por-que`.
- **313** → `place` / preposition material.
- **314** → `noun-complements` + `adjective-complements`.
- **315** → `como-excepto` (the page explicitly distinguishes standard and colloquial *como que*).
- **316** → `discourse-fillers`.
- **317** → `micro-constructions/emphatic-reduplication`.

### 17.8 Anti-calque zone — 319–323
→ `emphasis-polarity-focus`, `body-parts-possession`, `change-of-state`, `cleft-pseudocleft`.

---

# 4. Site exposure audit

The coverage audit also checked whether the existing MDX entries are actually connected to Astro routing.

## Category index

`src/pages/es/index.astro`:

- loads `getCollection('es')`;
- counts entries by `parseId(e.id).category`;
- renders every category from `sortedCategories`;
- displays the current number of topics.

Therefore the category index is data-driven rather than a manually maintained list of individual pages.

## Category pages

`src/pages/es/[category]/index.astro`:

- builds static paths from the categories actually present in the collection;
- filters the same `getCollection('es')` by parsed category;
- renders every matching entry;
- links each entry through `entryUrl(e)`.

Therefore every current MDX entry belonging to a valid category is exposed from its category index.

## Individual topic pages

`src/pages/es/[category]/[slug].astro`:

- calls `getCollection('es')`;
- returns one static path for **every collection entry**;
- parses each entry into `category` + `slug`;
- renders the MDX content through `GrammarLayout`.

Therefore the current architecture does not have a second, manually curated route registry that could silently omit a content entry.

## Result

**All 196 current MDX grammar entries have a route generated by the same collection-driven mechanism.**

The remaining publication risk is not route generation. It is deployment state: the repository's recent GitHub Pages deployment had previously failed at the deployment step because Pages was not enabled/configured. A repository build succeeding is therefore not equivalent to the public Pages instance being current.

---

# 5. Recommended next content work

The previously identified gap-closure phase is complete. Do not expand the repository merely to increase page count.

The next quality pass should instead focus on **cross-linking, examples, source verification, search discoverability, and content-level QA** for the new canonical pages. If a future audit finds a genuinely new requirement, add it to the matrix first and then choose the smallest canonical home.

# 6. Architectural conclusion

The current content architecture is **not suffering from a “page count vs requirement count” failure**. The targeted missing/partial set has been closed without turning every checklist item into a separate page.

It is doing what the roadmap explicitly intended:

> one deep canonical page can close several related requirements.

The real issue is now **content quality and maintenance**, not missing canonical homes for the audited requirements.

That means the next content phase should be a targeted gap-closure pass, not a mass expansion of the repository.

After those gaps are closed, the roadmap should be maintained as a real coverage matrix rather than leaving every historical checkbox unchecked. The checkbox file can remain the canonical requirement inventory; this document becomes the reconciliation layer between requirements, canonical pages, and routes.

## Verification basis

The audit used:

- the current `main` version of `docs/roadmap/TOPICS-COMPLETE-UA.md`;
- the complete current `src/content/es` category inventory;
- the current Astro category index;
- the current Astro category-topic route;
- targeted inspection of canonical pages for the requirements that could otherwise be falsely counted as covered.

No claim here depends on the public GitHub Pages instance being current.


## 7. Targeted reconciliation follow-up — 2026-10-18

A source-level spot check of checklist requirements **2.13** and **3.1** found that the detailed mapping section still contained pre-gap-closure notes claiming that no loanword/proper-name page existed and that noun classes were only partially mapped. Both claims were stale:

- **2.13** now maps to `src/content/es/spelling/loanwords-proper-names.mdx`.
- **3.1** now maps to `src/content/es/nouns/noun-classes.mdx`.

The two canonical files exist and address the named concepts. This confirms a canonical home, not the sufficiency of every explanation, example, translation, or source. The existing `review_status: verified` labels on these two pages were therefore conservatively downgraded to `draft` pending claim-level review: their source notes did not provide enough precise, claim-linked locators to justify a verified status.

Evidence boundaries for this pass:

- For loanwords, the official RAE/ASALE material distinguishes adapted from unadapted loanwords and describes their orthographic treatment; the RAE's `Ortografía` page on places documents capitalization of country/city names. These support the broad topic scope, but do not verify every example on the page.
- For noun classes, the official Manual NGLE contents index now identifies § 12.1.2 «Clases principales de sustantivos» (p. 209) and § 12.5.1 «Clases de nombres propios» (p. 218). This is a locator to the relevant sections, not evidence that their full text or the page's individual claims have been checked; the page remains draft.
- This is a **targeted spot check**, not a fresh 323-row reconciliation. The 323 → 208 figures and 0 structural-gap count remain a dated structural baseline, not a current count of linguistically verified requirements.

Official source leads checked for this pass:
- RAE/ASALE, *Principales novedades de la Ortografía de la lengua española*, section 8 on the treatment of loanwords: https://www.rae.es/sites/default/files/Principales_novedades_de_la_Ortografia_de_la_lengua_espanola.pdf
- RAE/ASALE, *Ortografía de la lengua española*, “Lugares”, § 4.2.4.6.1 on countries, cities and localities: https://www.rae.es/ortografía/lugares

**Next:** continue the matrix crosswalk section by section; where a page's status or evidence is materially stronger than the available record, inspect the canonical content and its comparison (if one exists) before changing claims or status. Do not infer linguistic verification from the mapped slug.


## 8. Targeted article/body-part editorial pass — 2026-10-18

Scope: checklist requirements 4.1–4.11, with particular attention to 4.4 (absence of article/nombres escuetos), 4.5 (special cases), and 4.6 (body parts/clothing). Read the canonical articles `articles/definite-indefinite.mdx`, `articles/definite-vs-indefinite.mdx`, `articles/zero-article.mdx`, `articles/special-cases.mdx`, `pronouns/body-parts-possession.mdx`, and the comparison `comparisons/articles.mdx`.

Findings and actions:

- The canonical comparison and the definite/indefinite articles consistently warn against treating first mention, profession labels, or absence of an article as absolute rules. No substantive contradiction was found in the sampled contrastive explanations.
- `zero-article.mdx` had malformed Markdown emphasis in its opening paragraph. It now distinguishes the convenient label “нульовий артикль” from the observable absence of an article and records the relevant RAE/ASALE locators: NGB § 9.1.1, NGLE §§ 15.11–15.13, and NGLE § 14.6. The page is explicitly `draft`; these locators do not establish claim-by-claim verification.
- `special-cases.mdx` had a malformed emphasis sequence in the explanation of `a + el → al` and `de + el → del`. It is repaired and has a limited RAE/ASALE source trail for article forms and inalienable possession. The page remains `draft`.
- `body-parts-possession.mdx` had widespread malformed Markdown around Spanish examples, including broken emphasis in the introduction, table, and example lists. Those artifacts were repaired. The questionable example `Me duele mi cabeza` was removed from the “mistake” component: the neutral baseline `Me duele la cabeza` is clearer, but possessives must not be declared universally ungrammatical without context. The contrast example is now `Me duele la espalda, no la tuya`. Its prior `verified` status was downgraded to `draft` because broad glossary/source notes did not establish claim-level verification. The source note now points to NGLE §§ 35.4j/o, 35.6i, 35.7f–ñ, 35.8k and § 14.7f onward.
- The comparison `comparisons/articles.mdx` was read and did not require an edit in this pass. It provides the expected navigation to the three canonical article pages and treats its examples as typical, not exceptionless.

Evidence limits: the official NGLE section references identify relevant material, but the full cited sections were not all read in this pass. No corpus queries were run; no regional frequency claim was validated; no browser test was performed. This is an editorial/source-traceability pass, not full verification of all article claims.

## 9. Targeted article requirements 4.7–4.11 — 2026-10-18

This is a limited source-traceability and editorial pass, not a full linguistic verification. The canonical mappings remain:

| Checklist requirement | Canonical home | Batch finding / disposition |
|---|---|---|
| 4.7 Article with proper names | `src/content/es/articles/articles-with-names.mdx` | Structural coverage retained. Source notes now point to RAE/ASALE *Ortografía* § 4.2.4.6.1 and NGLE locators, but country-specific alternations and colloquial article use are not verified. Status downgraded from `verified` to `draft`. |
| 4.8 Article after `ser`, `tener`, and prepositions | `src/content/es/articles/special-cases.mdx`; `src/content/es/articles/zero-article.mdx` | Existing coverage includes predicative professions, `tener` contrasts, fixed expressions, and `al/del`. Added a bounded explanation that a preposition alone does not determine article presence, with `en casa`, `en el trabajo`, `a la universidad`, and `de noche`. Source locators identify NGLE §§ 14.3, 14.7, 15.11–15.13; examples have not all been independently source-checked. |
| 4.9 Neutral `lo` | `src/content/es/articles/neutral-lo.mdx` | Repaired malformed Markdown in the opening, adjective examples, and `lo` contrast. Added NGLE §§ 14.9–14.10 and relevant relative-construction locators. Status explicitly set to `draft`; no claim-by-claim verification is implied. |
| 4.10 Genericity vs specificity | `src/content/es/articles/definite-indefinite.mdx`; `src/content/es/articles/definite-vs-indefinite.mdx`; `src/content/es/articles/zero-article.mdx` | Read the canonical articles and `src/content/comparisons/articles.mdx`. The sampled contrast is consistent: article choice depends on reference, context, generic readings, number, and construction rather than a single first-mention rule. No substantive change was justified in this sub-area; the sample is not a complete claim audit. |
| 4.11 Article in fixed expressions | `src/content/es/articles/zero-article.mdx`; `src/content/es/articles/special-cases.mdx`; `src/content/es/micro-constructions/de-inf-sera-no-sea-lo-de.mdx` | Existing examples include `estar en casa`, `estar en clase`, `tener hambre`, `tener miedo`, and `dar clase`; `lo de` is covered in the neutral-`lo` and micro-construction pages. Canonical homes exist, but no corpus search or full lexical inventory audit was performed. |

**Evidence boundary:** official RAE/ASALE locators establish where relevant material can be checked; the NGLE contents index is a locator, not the full section text. No corpus query, regional frequency audit, full example-by-example verification, browser test, or release-readiness assessment was performed in this batch. Structural coverage and source-traceability are not equivalent to `reviewed` or `verified` linguistic status.

## 10. Targeted `ser / estar / hay` claim-level follow-up — 2026-10-18

This follow-up is a limited claim/evidence pass, not complete verification of every example.

| Requirement cluster | Canonical home(s) | Finding / status |
|---|---|---|
| Checklist items 168–174: ser/estar, location, adjective contrasts | `src/content/es/verbs/ser-estar.mdx`; `src/content/es/verbs/ser-estar-location.mdx`; `src/content/es/verbs/ser-estar-with-adjectives.mdx`; comparison `src/content/comparisons/ser-estar.mdx` | Core construction-based explanation remains consistent across canonical and comparison pages. The location and adjective pages were downgraded from `verified` to `draft` because their previous source notes were generic and did not establish claim-level verification. Malformed Markdown in the location page was repaired. NGLE locator §§ 37.7–37.9 added. DLE entries for all seven listed adjectives were spot-checked; construction-specific pairing, Ukrainian translations, and regional distributions remain open. Direct NGLE sections §§ 37.7–37.9 were opened and relevant portions read. |
| Checklist item 245: hay vs estar | `src/content/es/sentence-structure/hay-vs-estar.mdx`; canonical triad page `src/content/es/verbs/ser-estar-hay.mdx` | Added direct RAE/ASALE DPD § 4, conjugation-table and FundéuRAE sources for existential `haber` as impersonal singular in formal standard use; DPD also records informal plural agreement in some regions. NGLE § 15.6i was read directly: it rejects bare proper names in the neutral existential pattern (e.g. `Hay Eva y Javier`) while allowing a proper name inside an indefinite NP (`En la lista hay un tal Luis Pérez`). The `Hay Juan en la sala` contrast is now labelled as a neutral-standard baseline with an explicit scope caveat; NGLE §§ 15.6j–s describe quantitative and endophoric exceptions; representative examples were added to both canonical pages. Register/frequency and regional distributions remain open. |
| Related requirements on event location and predicate choice | `ser-estar-location.mdx`, `ser-estar.mdx`, `comparisons/ser-estar.mdx` | Retain “entity/object → estar” and “event → ser” as a typical baseline, not an exceptionless algorithm. NGLE § 37.8 was read directly for the entity-location/event-location contrast, including the conversational locative uses of `ser` and the date-expression regional notes. |

**Sources checked:** RAE/ASALE, NGLE §§ 15.6 and 41.6 on existential NPs and impersonal haber: https://www.rae.es/gram%C3%A1tica/sintaxis/grupos-nominales-definidos-e-indefinidos-en-contextos-presentativos-o-existenciales; https://www.rae.es/gram%C3%A1tica/sintaxis/impersonales-no-reflejas-ii-impersonales-con-los-verbos-haber-hacer-ser-estar-e-ir; NGLE §§ 37.7–37.9 on ser/estar: https://www.rae.es/gram%C3%A1tica/sintaxis/el-atributo-en-las-oraciones-copulativas-con-ser-y-estar-i-aspectos-sem%C3%A1nticos-de-la-distinci%C3%B3n; https://www.rae.es/gram%C3%A1tica/sintaxis/el-atributo-en-las-oraciones-copulativas-con-ser-y-estar-ii-pol%C3%A9micas-relativas-a-los-atributos-locativos; https://www.rae.es/gram%C3%A1tica/sintaxis/el-atributo-en-las-oraciones-copulativas-con-ser-y-estar-iii-aspectos-sint%C3%A1cticos-y-l%C3%A9xicos; RAE/ASALE, *Diccionario panhispánico de dudas*, entry `haber` § 4: https://www.rae.es/dpd/haber; RAE/ASALE, *El buen uso del español*, conjugation of `haber`: https://www.rae.es/buen-uso-español/conjugación-española; FundéuRAE on impersonal existential `haber`: https://www.fundeu.es/recomendacion/habia-habian-muchas-personas-haber-uso-impersonal/.

**Evidence boundary:** direct NGLE text was read for §§ 15.6a–s, 37.7a–k, 37.8a–k, relevant portions of 37.9a–i, and 41.6a–e. Representative quantitative/endophoric exceptions in NGLE §§ 15.6j–s were added to the canonical pages; not every example's register, frequency, or regional distribution was audited. DPD, RAE conjugation and FundéuRAE support the impersonal-singular standard and document register/region variation. No corpus query, country-specific frequency audit, full dictionary audit of adjective pairs, or browser/release test was performed. Structural coverage remains distinct from linguistic verification.

