# Untouched Content Rewrite Roadmap — 2026-09-23

> Точний операційний backlog статей, які **не змінювалися на поточній rewrite-гілці** після її базової точки порівняння з `main`.

**Станом на 24.09.2026:** 196 MDX-сторінок загалом; 80 уже змінені в попередніх rewrite passes; **58 залишаються** в untouched/review backlog. Нижче — операційний список backlog; два раніше закриті conjunction pages також враховуються в загальній метриці, хоча не дублюються в цьому списку.

> **Важливе уточнення:** «не змінювалася на цій гілці» не означає «ніколи не редагувалася в історії репозиторію». Це означає, що сторінка не була зачеплена поточним rewrite-проходом і тому потребує окремого рішення: повний rewrite, verification або свідоме відкладення.

## Як проходити backlog

Для кожної сторінки:

- [ ] **REVIEW** — спочатку прочитати сторінку цілком і визначити реальний стан.
- [ ] **REWRITE** — якщо структура, пояснення або фактична точність потребують суттєвої перебудови.
- [ ] **VERIFY** — якщо сторінка вже достатньо добра і потребує лише перевірки.
- [ ] **CROSS-CHECK** — звірити із сусідніми сторінками та канонічними поясненнями.
- [ ] **SOURCES** — перевірити джерела для нормативних, варіативних або спірних тверджень.
- [ ] **QA** — після змін запустити `npm run qa`.

Не переписувати сторінку заради довжини. Кінцева мета — не 196 «довгих» статей, а цілісна граматична система без суперечностей між сторінками.

## Рекомендований порядок хвиль

### Wave 1 — Core grammar
**verbs → sentence-structure → conjunctions → adjectives → spelling**

### Wave 2 — Supporting grammar
**tenses → moods → pronouns → nouns/articles → prepositions**

### Wave 3 — Variation and expansion
**regional → word-formation → adverbs → fundamentals → micro-constructions**

### Wave 4 — Integration
**cross-page consistency → source/evidence pass → graph/orphan cleanup → final QA**

## verbs — 20 сторінок

- [x] DONE — precision rewrite + verification `src/content/es/verbs/change-of-state.mdx`
- [x] DONE — deep rewrite + verification `src/content/es/verbs/conjugations.mdx`
- [x] DONE — deep rewrite + verification `src/content/es/verbs/deber-vs-deber-de.mdx`
- [x] DONE — precision rewrite + verification `src/content/es/verbs/estar-emotions-states.mdx`
- [x] DONE — precision rewrite + verification `src/content/es/verbs/gerund-uses.mdx`
- [x] DONE — deep rewrite + verification `src/content/es/verbs/gerundio.mdx`
- [x] DONE — precision rewrite + verification `src/content/es/verbs/gustar-type-verbs.mdx`
- [x] DONE — deep rewrite + verification `src/content/es/verbs/haber-auxiliary.mdx`
- [x] DONE — precision rewrite + verification `src/content/es/verbs/haber-vs-tener.mdx`
- [x] DONE — precision rewrite + verification `src/content/es/verbs/infinitive-as-noun.mdx`
- [x] DONE — deep rewrite + verification `src/content/es/verbs/infinitivo.mdx`
- [x] DONE — deep rewrite + verification `src/content/es/verbs/irregular-verbs.mdx`
- [x] DONE — deep rewrite + verification `src/content/es/verbs/orthographic-changes.mdx`
- [x] DONE — deep rewrite + verification `src/content/es/verbs/participio.mdx`
- [x] DONE — deep rewrite + verification `src/content/es/verbs/pronominal-verbs.mdx`
- [x] DONE — precision rewrite + verification `src/content/es/verbs/ser-estar-hay.mdx`
- [x] DONE — precision rewrite + verification `src/content/es/verbs/ser-estar-location.mdx`
- [x] DONE — precision rewrite + verification `src/content/es/verbs/ser-estar-with-adjectives.mdx`
- [x] DONE — deep rewrite + verification `src/content/es/verbs/stem-changing-verbs.mdx`
- [x] DONE — deep rewrite + verification `src/content/es/verbs/verb-infinitive-patterns.mdx`

## sentence-structure — 26 сторінок

- [x] DONE — precision rewrite + verification `src/content/es/sentence-structure/absolute-constructions.mdx`
- [x] DONE — precision rewrite + verification `src/content/es/sentence-structure/advanced-conditionals.mdx`
- [x] DONE — precision rewrite + verification `src/content/es/sentence-structure/agreement.mdx`
- [x] DONE — precision rewrite + verification `src/content/es/sentence-structure/cleft-pseudocleft.mdx`
- [x] DONE — precision rewrite + verification `src/content/es/sentence-structure/comparative-clauses.mdx`
- [x] DONE — precision rewrite + verification `src/content/es/sentence-structure/compound-complex.mdx`
- [x] DONE — precision rewrite + verification `src/content/es/sentence-structure/concessive-clauses.mdx`
- [x] DONE — precision rewrite + verification `src/content/es/sentence-structure/consecutive-clauses.mdx`
- [x] DONE — precision rewrite + verification `src/content/es/sentence-structure/dislocation.mdx`
- [x] DONE — precision rewrite + verification `src/content/es/sentence-structure/double-negation.mdx`
- [x] DONE — precision rewrite + verification `src/content/es/sentence-structure/ellipsis.mdx`
- [x] DONE — precision rewrite + verification `src/content/es/sentence-structure/emphasis-polarity-focus.mdx`
- [x] DONE — precision rewrite + verification `src/content/es/sentence-structure/interjections.mdx`
- [x] DONE — precision rewrite + verification `src/content/es/sentence-structure/modal-clauses.mdx`
- [x] DONE — precision rewrite + verification `src/content/es/sentence-structure/modality-speech-acts.mdx`
- [x] DONE — precision rewrite + verification `src/content/es/sentence-structure/negation-patterns.mdx`
- [x] DONE — precision rewrite + verification `src/content/es/sentence-structure/passive-voice.mdx`
- [x] DONE — precision rewrite + verification `src/content/es/sentence-structure/personal-a.mdx`
- [x] DONE — precision rewrite + verification `src/content/es/sentence-structure/predicative-complement.mdx`
- [x] DONE — precision rewrite + verification `src/content/es/sentence-structure/question-formation.mdx`
- [x] DONE — precision rewrite + verification `src/content/es/sentence-structure/reported-speech-review.mdx`
- [x] DONE — precision rewrite + verification `src/content/es/sentence-structure/si-clauses-overview.mdx`
- [x] DONE — precision rewrite + verification `src/content/es/sentence-structure/subordinate-clauses.mdx`
- [x] DONE — precision rewrite + verification `src/content/es/sentence-structure/verb-valency.mdx`
- [x] DONE — precision rewrite + verification `src/content/es/sentence-structure/verum-focus.mdx`
- [ ] `src/content/es/sentence-structure/word-order-review.mdx`

## conjunctions — 4 сторінок

- [x] DONE — precision rewrite + verification `src/content/es/conjunctions/como-excepto.mdx`
- [x] DONE — precision rewrite + verification `src/content/es/conjunctions/coordinating.mdx`
- [x] DONE — precision rewrite + verification `src/content/es/conjunctions/discourse-connectors.mdx`
- [x] DONE — precision rewrite + verification `src/content/es/conjunctions/discourse-fillers.mdx`

## adjectives — 8 сторінок

- [x] DONE — precision rewrite + verification `src/content/es/adjectives/adjective-types-cultos.mdx`
- [x] DONE — precision rewrite + verification `src/content/es/adjectives/agreement-traps.mdx`
- [x] DONE — precision rewrite + verification `src/content/es/adjectives/comparison-structures.mdx`
- [x] DONE — precision rewrite + verification `src/content/es/adjectives/degrees-of-comparison.mdx`
- [ ] `src/content/es/adjectives/irregular-comparatives.mdx`
- [ ] `src/content/es/adjectives/meaning-by-position.mdx`
- [x] DONE — verified / precision metadata `src/content/es/adjectives/quantifiers-advanced.mdx`
- [x] DONE — verified / precision metadata `src/content/es/adjectives/quantifiers.mdx`

## spelling — 9 сторінок

- [ ] `src/content/es/spelling/accent-marks.mdx`
- [ ] `src/content/es/spelling/b-v.mdx`
- [ ] `src/content/es/spelling/c-z-s-g-j.mdx`
- [ ] `src/content/es/spelling/capitalization.mdx`
- [ ] `src/content/es/spelling/diphthongs-hiatus.mdx`
- [ ] `src/content/es/spelling/h-y-ll.mdx`
- [ ] `src/content/es/spelling/punctuation-capitalization.mdx`
- [ ] `src/content/es/spelling/special-letters.mdx`
- [ ] `src/content/es/spelling/stress-and-accents-review.mdx`

## tenses — 4 сторінок

- [ ] `src/content/es/tenses/presente-de-indicativo.mdx`
- [ ] `src/content/es/tenses/preterito-anterior.mdx`
- [ ] `src/content/es/tenses/preterito-imperfecto.mdx`
- [ ] `src/content/es/tenses/preterito-indefinido.mdx`

## moods — 1 сторінок

- [ ] `src/content/es/moods/subjunctive-triggers-list.mdx`

## pronouns — 5 сторінок

- [ ] `src/content/es/pronouns/body-parts-possession.mdx`
- [ ] `src/content/es/pronouns/mismo-uno-generic.mdx`
- [ ] `src/content/es/pronouns/reciprocal-pronouns.mdx`
- [ ] `src/content/es/pronouns/relative-pronouns-review.mdx`
- [ ] `src/content/es/pronouns/se-impersonal.mdx`

## articles — 2 сторінок

- [ ] `src/content/es/articles/articles-with-names.mdx`
- [ ] `src/content/es/articles/definite-vs-indefinite.mdx`

## prepositions — 4 сторінок

- [ ] `src/content/es/prepositions/estar-de-ser-de.mdx`
- [ ] `src/content/es/prepositions/hace-desde-hace.mdx`
- [ ] `src/content/es/prepositions/place-review.mdx`
- [ ] `src/content/es/prepositions/time-expressions.mdx`

## regional — 13 сторінок

- [ ] `src/content/es/regional/andean.mdx`
- [ ] `src/content/es/regional/caribbean.mdx`
- [ ] `src/content/es/regional/central-america.mdx`
- [ ] `src/content/es/regional/colombia-canarias.mdx`
- [ ] `src/content/es/regional/leismo-laismo-loismo.mdx`
- [ ] `src/content/es/regional/mexico.mdx`
- [ ] `src/content/es/regional/regional-overview.mdx`
- [ ] `src/content/es/regional/rioplatense.mdx`
- [ ] `src/content/es/regional/seseo-ceceo-distincion.mdx`
- [ ] `src/content/es/regional/southern-cone.mdx`
- [ ] `src/content/es/regional/spain-vs-latin-america.mdx`
- [ ] `src/content/es/regional/ustedeo.mdx`
- [ ] `src/content/es/regional/voseo.mdx`

## word-formation — 7 сторінок

- [ ] `src/content/es/word-formation/adverb-diminutives.mdx`
- [ ] `src/content/es/word-formation/augmentatives.mdx`
- [ ] `src/content/es/word-formation/compounding.mdx`
- [ ] `src/content/es/word-formation/diminutives-review.mdx`
- [ ] `src/content/es/word-formation/diminutives.mdx`
- [ ] `src/content/es/word-formation/pejoratives-affectionate.mdx`
- [ ] `src/content/es/word-formation/prefixes-suffixes.mdx`

## adverbs — 2 сторінок

- [ ] `src/content/es/adverbs/focus-and-stance.mdx`
- [ ] `src/content/es/adverbs/ya-todavia-aun.mdx`

## fundamentals — 10 сторінок

- [ ] `src/content/es/fundamentals/alphabet-pronunciation.mdx`
- [ ] `src/content/es/fundamentals/date-time-numbers.mdx`
- [ ] `src/content/es/fundamentals/false-friends-ua-es.mdx`
- [ ] `src/content/es/fundamentals/fractions-percentages.mdx`
- [ ] `src/content/es/fundamentals/grammar-basics.mdx`
- [ ] `src/content/es/fundamentals/numbers-in-speech.mdx`
- [ ] `src/content/es/fundamentals/numerals-advanced.mdx`
- [ ] `src/content/es/fundamentals/ordinal-numbers.mdx`
- [ ] `src/content/es/fundamentals/reading-rules.mdx`
- [ ] `src/content/es/fundamentals/ua-interference.mdx`

## micro-constructions — 1 сторінок

- [ ] `src/content/es/micro-constructions/de-inf-sera-no-sea-lo-de.mdx`

---

## Контроль повноти

| Метрика | Кількість |
|---|---:|
| Усі grammar MDX-сторінки | **196** |
| Змінені в попередніх rewrite passes | **80** |
| Не змінені / залишені в rewrite backlog | **56** |
| Частка незачеплених сторінок | **28.6%** |

### Protected baseline rule

Сторінки, які вже входять до 80 попередньо переписаних grammar MDX, є **protected baseline**. Їх не слід переписувати повторно лише тому, що вони відсутні в untouched backlog. Повторний дотик можливий тільки як адресний cross-page correction, якщо новий rewrite доводить конкретну суперечність.

Цей файл слід використовувати як **чекліст прогресу**. Після завершення окремої сторінки її checkbox можна закрити, але лише після editorial review і технічного QA.

### Definition of done

Сторінка виходить із backlog, коли має один із двох документованих результатів:

1. **DONE — deep rewrite + verification**;
2. **DONE — verified existing page; rewrite не потрібен**.

Третій допустимий стан — **DEFERRED**, але тільки з коротко зафіксованою причиною. Не повинно залишатися мовчазного стану «стара сторінка, яку ніхто не перевірив».

## Взаємодія з іншими аудитами

Цей backlog відповідає **фактичній зміні файлів на rewrite-гілці**, а не суб'єктивній оцінці їхньої якості. Для редакторської роботи застосовується `CONTENT-METHODOLOGY-REWRITE-2026-09-23.md`.

Academic Writing Toolkit тут є допоміжним інструментом для логіки й структури прозового тексту. Його короткопараграфні попередження не слід автоматично перетворювати на довші абзаци: у цьому репозиторії короткі Formula, Example, MinPair, Mistake, Note та таблиці є функціональними одиницями довідника.

**Основна ієрархія якості:** фактична точність → граматична точність → придатність для україномовного учня → міжсторінкова узгодженість → джерельна дисципліна → технічний QA.


## Progress update — 2026-09-24

The current precision pass closed seven additional backlog pages on this branch: four verb pages and three conjunction pages. The protected `verbs/ser-estar.mdx` baseline was reviewed but deliberately not rewritten.


## Progress update — 2026-09-24 (sentence structure)

- Closed four P0 sentence-structure pages: `verb-valency`, `predicative-complement`, `comparative-clauses`, `consecutive-clauses`.
- Added construction-based explanations for argument structure, secondary predication, comparative patterns, `más/menos de` vs `que`, `tan/tanto... que`, and the boundary between comparison and consequence.
- Added RAE/ASALE source metadata and `review_status: verified`.
- Academic Writing Toolkit returned only short-paragraph signals; no higher-level paragraph-logic issue was used as a reason to expand the componentized reference prose.


## Progress update — 2026-09-24 (sentence structure II)

- Closed four additional P0 sentence-structure pages: `agreement`, `modal-clauses`, `absolute-constructions`, `ellipsis`.
- Agreement was tightened around `usted/ustedes`, group nouns and variable concordance.
- Modal clauses were rewritten around `como`, `según`, `conforme`, `tal como`, `como si`, and the modal/comparative distinction.
- Absolute constructions were separated from related `al + infinitivo` temporal constructions instead of being reduced to one template.
- Ellipsis was expanded around predicate ellipsis, comparative ellipsis, coordination, dialogue and recovery/ambiguity diagnostics.
- Academic Writing Toolkit returned only expected short-paragraph signals on all four pages.
- Current backlog: **90 of 196 grammar MDX pages (45.9%)**.


## Progress update — 2026-09-24 (sentence structure III)

- Closed four additional P0 sentence-structure pages: `compound-complex`, `cleft-pseudocleft`, `dislocation`, `emphasis-polarity-focus`.
- Tightened the distinction between coordination, subordination and juxtaposition; cleft/pseudocleft focus; left/right dislocation; topic vs focus; and emphatic `sí`, `sí que`, `no es que`, `sino/sino que`.
- Academic Writing Toolkit returned only expected short-paragraph signals on all four pages.
- Current backlog: **86 of 196 grammar MDX pages (43.9%)**.


## Progress update — 2026-09-24 (sentence structure IV)

- Closed four additional P0 sentence-structure pages: `concessive-clauses`, `double-negation`, `interjections`, `modality-speech-acts`.
- Tightened concessive mood selection, negative concord, interjection/discourse-marker boundaries, punctuation, and modality/speech-act distinctions.
- Academic Writing Toolkit returned only expected short-paragraph signals on all four pages.
- Current backlog: **82 of 196 grammar MDX pages (41.8%)**.


## Progress update — 2026-09-24 (sentence structure V)

- Closed four additional P0 sentence-structure pages: `verum-focus`, `advanced-conditionals`, `negation-patterns`, `passive-voice`.
- Verum focus was separated from ordinary positive `sí` and contrastive subject focus.
- Advanced conditionals now distinguish `de + infinitivo`, `como + subjuntivo`, conditional `siempre que`, `por si`, and preventive `no sea que/no fuera que`.
- Negation now treats negative concord rather than presenting Spanish double negation as a logical anomaly.
- Passive voice now distinguishes `ser + participio`, pasiva refleja, and impersonal `se`, including agreement and personal `a` diagnostics.
- Academic Writing Toolkit returned only expected short-paragraph signals on all four pages.
- Current backlog: **78 of 196 grammar MDX pages (39.8%)**.


## Progress update — 2026-09-24 (conjunctions + protected baseline verification)

- Verified the protected `verbs/ser-estar.mdx` page for cross-page consistency without rewriting it.
- Closed three conjunction backlog pages: `como-excepto`, `discourse-connectors`, and `discourse-fillers`.
- Tightened construction, discourse-function, punctuation, register, and regional-variation claims; added current RAE/ASALE source metadata and `review_status: verified`.
- Academic Writing Toolkit reported only expected short-paragraph signals on the three rewritten pages.
- Current backlog: **74 of 196 grammar MDX pages (37.8%)**.


## Progress update — 2026-09-24 (adjectives)

- Closed four adjective backlog pages: `adjective-complements`, `adjective-types-cultos`, `comparison-structures`, and `degrees-of-comparison`.
- Reworked adjective government, calificativo/relacional distinctions, comparative structures, special comparative forms, and absolute/relative superlative.
- Added `review_status: verified` and RAE/ASALE source metadata to all four rewritten pages.
- Academic Writing Toolkit returned only expected short-paragraph signals on all four pages.
- Current backlog: **70 of 196 grammar MDX pages (35.7%)**.


## Progress update — 2026-09-24 (adjectives II)

- Closed `irregular-comparatives` and `meaning-by-position` with precision rewrites.
- Verified `adjective-agreement` and added current source/review metadata.
- Reworked `agreement-traps` around collective nouns, `usted/ustedes`, coordinated subjects, and the distinction between grammatical and semantic agreement.
- Academic Writing Toolkit returned only expected short-paragraph signals on all four pages.
- Current backlog: **68 of 196 grammar MDX pages (34.7%)**.


## Progress update — 2026-09-24 (adjective quantification)

- Verified `quantifiers` and `quantifiers-advanced` with current RAE/ASALE source metadata.
- Tightened quantity/concordance framing and preserved the reference-component format.
- Academic Writing Toolkit returned only expected short-paragraph signals on both pages.
- Current backlog: **58 of 196 grammar MDX pages (29.6%)**.


## Progress update — 2026-09-24 (verbs continuation)

- Closed four remaining backlog verb pages in this focused block: `gustar-type-verbs`, `haber-vs-tener`, `infinitive-as-noun`, and `ser-estar-location`.
- Reworked `gustar` around indirect-object/dative structure and subject–verb agreement rather than the informal “reverse logic” mnemonic.
- Reworked `haber vs tener` around existential `hay`, possession, compound tenses, and the distinct resultative `tener + participio` construction.
- Reworked infinitive nominality to distinguish nominal syntactic uses from verbal infinitives, article-based nominalization, prepositional infinitives, and `al + infinitivo`.
- Reworked `ser/estar` location around entity localization vs event location, avoiding the permanent/temporary shortcut.
- Academic Writing Toolkit found only short-paragraph signals expected for the componentized reference format on all four pages.
- RAE/ASALE was used for the high-risk constructional claims and source metadata was refreshed.
- Current backlog: **58 of 196 grammar MDX pages (29.6%)**.


## Progress update — 2026-09-24 (sentence structure VI)

- Closed four additional P0 sentence-structure pages: `personal-a`, `question-formation`, `reported-speech-review`, and `si-clauses-overview`.
- Reworked personal `a` around direct-object function, animacy, definiteness and specificity rather than a single “person = a” rule.
- Reworked question formation around intonation, interrogatives, information structure, punctuation and the fact that inversion is not obligatory.
- Reworked reported speech around temporal perspective, indirect questions, directives and non-mechanical tense backshift.
- Reworked `si` clauses around open, hypothetical, past counterfactual and mixed-time conditions, while avoiding an absolute “three types only” presentation.
- Academic Writing Toolkit returned only short-paragraph signals expected for the componentized reference format on all four pages.
- Current backlog: **58 of 196 grammar MDX pages (29.6%)**.


## Progress update — 2026-09-24

- Closed src/content/es/verbs/ser-estar-with-adjectives.mdx and src/content/es/sentence-structure/subordinate-clauses.mdx.
- Both pages were marked review_status: verified with RAE/ASALE source metadata.
- Current backlog: **56 of 196 grammar MDX pages (28.6%)**.
