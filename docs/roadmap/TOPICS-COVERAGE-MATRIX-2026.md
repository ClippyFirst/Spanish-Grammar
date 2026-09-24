# Spanish Grammar — Coverage Matrix 323 → 196

> Audit date: 2026-09-24  
> Source checklist: `docs/roadmap/TOPICS-COMPLETE-UA.md`  
> Content source: `src/content/es/**.mdx` on `main`  
> Purpose: distinguish real grammatical coverage from page count and identify requirements that are missing or only partially covered.

## Executive result

The audit reconciles **323 checklist requirements** with **196 canonical MDX grammar pages**.

The important result is:

- **196/196 MDX entries are structurally routed into the Astro site.**
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
- **31** → **partial**; no explicit loanword/proper-name orthography page.

## 3. Nouns — items 32–48

- **32** → **partial** across `nouns/genero` + `nouns/noun-special-cases`.
- **33–37** → `nouns/genero` + `gender-exceptions`.
- **38–40** → `nouns/numero-plural` + `irregular-plurals`.
- **41–43** → `nouns/noun-special-cases`.
- **44** → `nouns/possessive-constructions`.
- **45–48** → `nouns/noun-special-cases` + `noun-complements` where complement structure is involved.

## 4. Articles — items 49–59

- **49–52** → `articles/definite-indefinite`, `definite-vs-indefinite`, `zero-article`.
- **53–54** → `articles/special-cases`.
- **55** → `pronouns/body-parts-possession` + `articles/special-cases`.
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
