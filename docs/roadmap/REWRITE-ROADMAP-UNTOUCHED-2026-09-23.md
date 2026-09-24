# Untouched Content Rewrite Roadmap — 2026-09-23

> Точний операційний backlog статей, які **не змінювалися на поточній rewrite-гілці** після її базової точки порівняння з `main`.

**Станом на 24.09.2026:** 196 MDX-сторінок загалом; 80 уже змінені в попередніх rewrite passes; **14 залишаються** в untouched/review backlog. Нижче — операційний список backlog; два раніше закриті conjunction pages також враховуються в загальній метриці, хоча не дублюються в цьому списку.

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
- [x] DONE — precision rewrite + verification `src/content/es/sentence-structure/word-order-review.mdx`

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
- [x] DONE — precision rewrite + verification `src/content/es/adjectives/irregular-comparatives.mdx`
- [x] DONE — precision rewrite + verification `src/content/es/adjectives/meaning-by-position.mdx`
- [x] DONE — verified / precision metadata `src/content/es/adjectives/quantifiers-advanced.mdx`
- [x] DONE — verified / precision metadata `src/content/es/adjectives/quantifiers.mdx`

## spelling — 9 сторінок

- [x] DONE — precision rewrite + verification `src/content/es/spelling/accent-marks.mdx`
- [x] DONE — precision rewrite + verification `src/content/es/spelling/b-v.mdx`
- [x] DONE — precision rewrite + verification `src/content/es/spelling/c-z-s-g-j.mdx`
- [x] DONE — precision rewrite + verification `src/content/es/spelling/capitalization.mdx`
- [x] DONE — precision rewrite + verification `src/content/es/spelling/diphthongs-hiatus.mdx`
- [x] DONE — precision rewrite + verification `src/content/es/spelling/h-y-ll.mdx`
- [x] DONE — precision rewrite + verification `src/content/es/spelling/punctuation-capitalization.mdx`
- [x] DONE — precision rewrite + verification `src/content/es/spelling/special-letters.mdx`
- [x] DONE — precision rewrite + verification `src/content/es/spelling/stress-and-accents-review.mdx`

## tenses — 4 сторінок

- [x] DONE — deep rewrite + verification `src/content/es/tenses/presente-de-indicativo.mdx`
- [x] DONE — deep rewrite + verification `src/content/es/tenses/preterito-anterior.mdx`
- [x] DONE — deep rewrite + verification `src/content/es/tenses/preterito-imperfecto.mdx`
- [x] DONE — deep rewrite + verification `src/content/es/tenses/preterito-indefinido.mdx`

## moods — 1 сторінок

- [x] DONE — precision rewrite + verification `src/content/es/moods/subjunctive-triggers-list.mdx`

## pronouns — 5 сторінок

- [x] DONE — precision rewrite + verification `src/content/es/pronouns/body-parts-possession.mdx`
- [x] DONE — precision rewrite + verification `src/content/es/pronouns/mismo-uno-generic.mdx`
- [x] DONE — precision rewrite + verification `src/content/es/pronouns/reciprocal-pronouns.mdx`
- [x] DONE — precision rewrite + verification `src/content/es/pronouns/relative-pronouns-review.mdx`
- [x] DONE — precision rewrite + verification `src/content/es/pronouns/se-impersonal.mdx`

## articles — 2 сторінок

- [x] DONE — precision rewrite + verification `src/content/es/articles/articles-with-names.mdx`
- [x] DONE — precision rewrite + verification `src/content/es/articles/definite-vs-indefinite.mdx`

## prepositions — 4 сторінок

- [x] DONE — precision rewrite + verification `src/content/es/prepositions/estar-de-ser-de.mdx`
- [x] DONE — precision rewrite + verification `src/content/es/prepositions/hace-desde-hace.mdx`
- [x] DONE — precision rewrite + verification `src/content/es/prepositions/place-review.mdx`
- [x] DONE — precision rewrite + verification `src/content/es/prepositions/time-expressions.mdx`

## regional — 13 сторінок

- [x] DONE — precision rewrite + verification `src/content/es/regional/andean.mdx`
- [x] DONE — precision rewrite + verification `src/content/es/regional/caribbean.mdx`
- [x] DONE — precision rewrite + verification `src/content/es/regional/central-america.mdx`
- [x] DONE — precision rewrite + verification `src/content/es/regional/colombia-canarias.mdx`
- [x] DONE — precision rewrite + verification `src/content/es/regional/leismo-laismo-loismo.mdx`
- [x] DONE — precision rewrite + verification `src/content/es/regional/mexico.mdx`
- [x] DONE — precision rewrite + verification `src/content/es/regional/regional-overview.mdx`
- [x] DONE — precision rewrite + verification `src/content/es/regional/rioplatense.mdx`
- [x] DONE — precision rewrite + verification `src/content/es/regional/seseo-ceceo-distincion.mdx`
- [x] DONE — precision rewrite + verification `src/content/es/regional/southern-cone.mdx`
- [x] DONE — precision rewrite + verification `src/content/es/regional/spain-vs-latin-america.mdx`
- [x] DONE — precision rewrite + verification `src/content/es/regional/ustedeo.mdx`
- [x] DONE — precision rewrite + verification `src/content/es/regional/voseo.mdx`

## word-formation — 7 сторінок

- [x] DONE — precision rewrite + verification `src/content/es/word-formation/adverb-diminutives.mdx`
- [x] DONE — precision rewrite + verification `src/content/es/word-formation/augmentatives.mdx`
- [x] DONE — precision rewrite + verification `src/content/es/word-formation/compounding.mdx`
- [x] DONE — precision rewrite + verification `src/content/es/word-formation/diminutives-review.mdx`
- [x] DONE — precision rewrite + verification `src/content/es/word-formation/diminutives.mdx`
- [x] DONE — precision rewrite + verification `src/content/es/word-formation/pejoratives-affectionate.mdx`
- [x] DONE — precision rewrite + verification `src/content/es/word-formation/prefixes-suffixes.mdx`

## adverbs — 2 сторінок

- [x] DONE — precision rewrite + verification `src/content/es/adverbs/focus-and-stance.mdx`
- [x] DONE — precision rewrite + verification `src/content/es/adverbs/ya-todavia-aun.mdx`

## fundamentals — 10 сторінок

- [x] DONE — precision rewrite + verification `src/content/es/fundamentals/alphabet-pronunciation.mdx`
- [x] DONE — precision rewrite + verification `src/content/es/fundamentals/date-time-numbers.mdx`
- [x] DONE — precision rewrite + verification `src/content/es/fundamentals/false-friends-ua-es.mdx`
- [x] DONE — precision rewrite + verification `src/content/es/fundamentals/fractions-percentages.mdx`
- [x] DONE — precision rewrite + verification `src/content/es/fundamentals/grammar-basics.mdx`
- [x] DONE — precision rewrite + verification `src/content/es/fundamentals/numbers-in-speech.mdx`
- [x] DONE — precision rewrite + verification `src/content/es/fundamentals/numerals-advanced.mdx`
- [x] DONE — precision rewrite + verification `src/content/es/fundamentals/ordinal-numbers.mdx`
- [x] DONE — precision rewrite + verification `src/content/es/fundamentals/reading-rules.mdx`
- [x] DONE — precision rewrite + verification `src/content/es/fundamentals/ua-interference.mdx`

## micro-constructions — 1 сторінок

- [x] DONE — precision rewrite + verification `src/content/es/micro-constructions/de-inf-sera-no-sea-lo-de.mdx`

---

## Контроль повноти

| Метрика | Кількість |
|---|---:|
| Усі grammar MDX-сторінки | **196** |
| Змінені в попередніх rewrite passes | **80** |
| Не змінені / залишені в rewrite backlog | **0** |
| Частка незачеплених сторінок | **0%** |

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


## Progress update — 2026-09-24 (spelling I)

- Closed three spelling backlog pages: `accent-marks`, `capitalization`, and `diphthongs-hiatus`.
- Tightened stress/tilde rules, diacritical tilde, `solo/sólo`, `aun/aún`, capitalization of days/months/languages/titles, and the interaction of syllabification, diphthongs, triphthongs, and hiatus.
- Marked all three pages `review_status: verified` and refreshed RAE/ASALE source metadata.
- Academic Writing Toolkit returned only short-paragraph signals expected for the componentized reference format on all three pages.
- Current backlog: **52 of 196 grammar MDX pages (26.5%)**.


## Progress update — 2026-09-24 (spelling II)

- Closed three consonant-orthography backlog pages: `b-v`, `c-z-s-g-j`, and `h-y-ll`.
- Replaced absolute or overly mnemonic claims with construction-/morphology-first spelling rules, and separated orthography from regional pronunciation (seseo/distinción, yeísmo, regional realizations).
- Corrected B/V guidance against RAE/ASALE: `-bir/-buir`, imperfect `-aba`, `bu-/bur-/bus-`, `ad-/sub-/ob-`, `-ave/-eve/-evo/-ivo`, and relevant verbal forms.
- Corrected C/Z/S and G/J guidance, including `gue/gui`, `güe/güi`, and verb alternations such as `empezar → empiezo/empecé` and `proteger → protejo`.
- Corrected H and Y/LL coverage to avoid the absolute claim that H is never pronounced and to describe yeísmo as widespread rather than universal.
- All three pages are marked `review_status: verified` with RAE/ASALE source metadata.
- Academic Writing Toolkit found only short-paragraph signals (5 / 19 / 10 respectively); no higher-level paragraph-logic issue was reported.
- Current backlog: **49 of 196 grammar MDX pages (25.0%)**.


## Progress update — 2026-09-24 (spelling III)

- Closed the final three spelling backlog pages: `punctuation-capitalization`, `special-letters`, and `stress-and-accents-review`.
- Rebuilt punctuation guidance around syntactic structure rather than pause-based rules: opening `¿/¡`, vocatives, fronted subordinate clauses, `pero/aunque`, discourse connectors, quotation marks, colons/semicolons, abbreviations and siglas.
- Rebuilt `special-letters` around the distinction between the letter `ñ`, the digraphs `ll/ch`, and the diaeresis `ü`; removed the outdated implication that `ll/ch` are separate alphabet letters.
- Rebuilt the stress review as a compact cross-linked algorithm, aligned with the full `accent-marks` page, including demonstratives, `solo`, diacritical tilde, and hiatus.
- All three pages are marked `review_status: verified` with RAE/ASALE source metadata.
- Academic Writing Toolkit was run on all three full pages; no higher-level paragraph-logic defect was returned (only the repository's expected short-component signals).
- Current backlog: **46 of 196 grammar MDX pages (23.5%)**.


## Progress update — 2026-09-24 (subjunctive quick guide)

- Closed `subjunctive-triggers-list` as a precision rewrite rather than a mechanical trigger list.
- Reframed the page around construction, discourse meaning, referent status, temporal horizon, and cases where indicativo/subjuntivo alternate.
- Added RAE/ASALE source metadata and `review_status: verified`.
- Academic Writing Toolkit returned only the repository's expected short-component signals; no higher-level paragraph-logic defect was found.
- Current backlog: **41 of 196 grammar MDX pages (20.9%)**.


## Progress update — 2026-09-24 (core tenses)

- Closed the four remaining core indicative tense pages in the current P0 backlog: `presente-de-indicativo`, `preterito-imperfecto`, `preterito-indefinido`, and `preterito-anterior`.
- Reframed the present around current, habitual, gnomic, historical, and contextual future uses instead of treating it as only an action happening now.
- Reworked the imperfecto/indefinido contrast around viewpoint, discourse structure, background vs event sequencing, and bounded situations rather than the absolute "unfinished vs finished" mnemonic.
- Reworked `pretérito anterior` around anteriority and its restricted modern stylistic distribution; removed the stronger unsupported claim that it is simply a literary-only form.
- RAE/ASALE sources were checked for the tense-system and aspectual claims; all four pages are marked `review_status: verified`.
- Academic Writing Toolkit was run on all four pages. It reported only the expected short-paragraph signals from the componentized reference format and no higher-level paragraph-logic defect.
- Current backlog: **42 of 196 grammar MDX pages (21.4%)**.


## Progress update — 2026-09-24 (body-part possession)

- Closed `pronouns/body-parts-possession` with a construction-first precision rewrite.
- Distinguished possessive dative, reflexive pronouns, indirect/affected-person datives, ordinary possessives, and the special behavior of `doler` agreement.
- Removed the stronger false-universal framing that every body-part or clothing construction mechanically requires `dativo + definite article`.
- Added RAE/ASALE source metadata and `review_status: verified`.
- Academic Writing Toolkit returned only expected short-component signals; no higher-level paragraph-logic defect was found.
- Current backlog: **40 of 196 grammar MDX pages (20.4%)**.


## Progress update — 2026-09-24 (subjunctive tense precision)

- Closed two mood pages: `imperfecto-subjuntivo` and `futuro-de-subjuntivo`.
- Reworked imperfecto de subjuntivo around modal/hypothetical meaning plus temporal perspective, including both normative `-ra` and `-se` series and the distinction between simple and compound past subjunctive.
- Corrected the future-subjunctive quick reference: fixed the conjugation example, added the compound form, clarified its restricted modern productivity, and distinguished recognition from active production.
- Added RAE/ASALE source metadata and `review_status: verified` to both pages.
- Academic Writing Toolkit returned only short-paragraph signals expected for componentized reference prose; no higher-level logic defect was reported.
- Current backlog: **38 of 196 grammar MDX pages (19.4%)**.


## Progress update — 2026-09-24 (pronouns precision)

- Closed four pronoun backlog pages: `mismo-uno-generic`, `reciprocal-pronouns`, `relative-pronouns-review`, and `se-impersonal`.
- Reworked `mismo/uno/cualquiera/generic tú` around function and interpretation rather than treating all forms as interchangeable generic pronouns.
- Reworked reciprocal pronouns around the overlap between reciprocal and reflexive `nos/os/se`, with explicit diagnostics such as `el uno al otro`, `entre sí`, and `mutuamente`.
- Reworked the relative-pronoun quick guide around `que`, `quien`, article + relative forms, `cuyo`, `donde`, and `lo que`, including the distinction between antecedent-based and neuter `lo que`.
- Reworked impersonal `se` around the structural contrast with pasiva refleja, including personal `a`, singular agreement in impersonal clauses, and plural agreement in passive-reflexive clauses.
- All four pages are marked `review_status: verified` with RAE/ASALE source metadata.
- Academic Writing Toolkit returned only expected short-paragraph signals for the componentized reference format; no higher-level paragraph-logic defect was reported.
- Current backlog: **34 of 196 grammar MDX pages (17.3%)**.


## Progress update — 2026-09-24 (articles precision)

- Closed two article backlog pages: `articles-with-names` and `definite-vs-indefinite`.
- Reworked proper-name article use around official-name articles, geographic classes, titles, regional variation, and the distinction between an article that belongs to a name and one introduced by a syntactic construction.
- Reworked definite/indefinite contrast around referent identification, anaphora, genericity, zero article, professions, and contextual readings of `un` under negation.
- Added RAE/ASALE source metadata and `review_status: verified` to both pages.
- Academic Writing Toolkit returned only expected short-paragraph signals for the componentized reference format; no higher-level paragraph-logic defect was reported.
- Current backlog: **32 of 196 grammar MDX pages (16.3%)**.


## Progress update — 2026-09-24 (prepositions)

- Closed all four current preposition backlog pages: `estar-de-ser-de`, `hace-desde-hace`, `place-review`, and `time-expressions`.
- Reframed `ser de` vs `estar de` around constructional meaning; removed any implication that temporary/permanent is a universal ser/estar rule.
- Reworked `hace / desde hace / desde` around reference time, duration, starting point, and the fact that `hace... que` is not restricted to present-tense contexts.
- Reworked spatial prepositions around location, destination, source, direction and reference point; separated `a` vs `hacia` and `de` vs `desde`.
- Reworked temporal prepositions around fixed constructions, distinguishing `en una hora` (future point) from `durante una hora` (duration), and `dentro de` from `hace`.
- All four pages are marked `review_status: verified` with RAE/ASALE source metadata.
- Academic Writing Toolkit was run on all four full pages; only short-paragraph signals were returned, consistent with the repository's componentized reference format.
- Current backlog: **23 of 196 grammar MDX pages (11.7%)**.


## Progress update — 2026-09-24 (regional precision)

- Closed five regional backlog pages: `regional-overview`, `spain-vs-latin-america`, `voseo`, `seseo-ceceo-distincion`, and `leismo-laismo-loismo`.
- Reframed regional descriptions to avoid country-wide absolutes and separated pronunciation, treatment forms, pronoun variation, and tense-frequency differences.
- Reworked voseo around pronominal vs verbal voseo and regional models; kept Rioplatense forms as a named model rather than a universal voseo template.
- Reworked seseo/ceceo/distinción around the phonological contrast and removed prestige-as-norm and "what Ukrainians should choose" framing.
- Reworked leísmo/laísmo/loísmo around syntactic function plus normative and regional variation; preserved the RAE-accepted singular masculine person leísmo distinction.
- Academic Writing Toolkit returned only short-paragraph signals on all five pages; no higher-level paragraph-logic defect was reported.
- RAE/ASALE sources were refreshed for voseo, seseo/ceceo, and pronominal variation.
- Current backlog: **23 of 196 grammar MDX pages (11.7%)**.


## Progress update — 2026-09-24 (word formation I)

- Closed four word-formation backlog pages: `prefixes-suffixes`, `diminutives`, `augmentatives`, and `compounding`.
- Reworked derivational explanations so prefixes and suffixes are treated as formants with context-sensitive meanings rather than one-to-one translation rules.
- Reworked diminutives around size, affect, mitigation, irony and lexicalization; removed rigid rules for `-cito` and the claim that `-illo` is inherently pejorative.
- Reworked augmentatives around `-ón/-ona`, `-azo/-aza`, `-ote/-ota` and the distinct adjectival behavior of `-udo/-uda`.
- Expanded compounding around productive V+N patterns, lexicalization, plural behavior, and the boundary between compounds and multiword expressions.
- All four pages are marked `review_status: verified` with RAE/ASALE source metadata.
- Academic Writing Toolkit returned only short-paragraph signals on all four pages; no higher-level paragraph-logic defect was reported.
- Current backlog: **19 of 196 grammar MDX pages (9.7%)**.


## Progress update — 2026-09-24 (word formation II)

- Closed `pejoratives-affectionate` and `adverb-diminutives`.
- Reworked evaluative suffixes around context-sensitive affective, pejorative, augmentative and intensifying meanings rather than one-to-one suffix translations.
- Reworked adverbial diminutives around `ahorita`, `cerquita`, `lejitos` and `prontito`, with explicit regional/contextual variation.
- Both pages are marked `review_status: verified` with RAE/ASALE source metadata.
- Academic Writing Toolkit returned only short-paragraph signals on both pages; no higher-level paragraph-logic defect was reported.
- Current backlog: **17 of 196 grammar MDX pages (8.7%)**.


## Progress update — 2026-09-24 (word formation III)

- Closed `diminutives-review` as a cross-page precision review.
- Aligned the summary with the dedicated diminutives page and removed rigid suffix-to-meaning and region-wide frequency claims.
- Added current RAE/ASALE source metadata and `review_status: verified`.
- Academic Writing Toolkit returned only short-paragraph signals; no higher-level paragraph-logic defect was reported.
- Current backlog: **16 of 196 grammar MDX pages (8.2%)**.


## Progress update — 2026-09-24 (adverbs)

- Closed `focus-and-stance` and `ya-todavia-aun`.
- Reworked focus particles around scope/focus, `incluso/hasta`, `solo`, `casi`, `apenas`, `también/tampoco`, and sentence-level stance adverbs.
- Reworked `ya/todavía/aún/ya no/todavía no` around state change, continuation, cessation, expectation, and the orthographic contrast `aún/aun`.
- Both pages are marked `review_status: verified` with RAE/ASALE source metadata.
- Academic Writing Toolkit returned only short-paragraph signals on both pages; no higher-level paragraph-logic defect was reported.
- Current backlog: **14 of 196 grammar MDX pages (7.1%)**.


## Progress update — 2026-09-24 (regional precision pass)

- Closed eight regional pages: `andean`, `caribbean`, `central-america`, `colombia-canarias`, `mexico`, `rioplatense`, `southern-cone`, and `ustedeo`.
- Replaced country-wide absolutes with region- and context-sensitive descriptions of `tú/usted/vos/ustedes`, voseo and ustedeo.
- Removed unsupported universal claims about `ser + adjective`, past-tense selection, leísmo and individual lexical markers.
- Added/updated RAE/ASALE source metadata and `review_status: verified` on all eight pages.
- Academic Writing Toolkit returned only short-paragraph signals on the eight pages; no higher-level paragraph-logic defect was reported.
- Current operational page backlog after reconciliation: **11 of 196 grammar MDX pages (5.6%)**.


## Progress update — 2026-09-24 (fundamentals precision pass I)

- Closed four fundamentals pages: `alphabet-pronunciation`, `date-time-numbers`, `false-friends-ua-es`, and `fractions-percentages`.
- Corrected over-broad pronunciation claims, separated general pronunciation from regional realization, and preserved the 27-letter alphabet distinction from *ch/ll* digraph status.
- Corrected date/time guidance and repaired the related link to the canonical preposition-time page.
- Reframed false friends as lexical traps rather than absolute translation rules and removed misleading cross-language generalizations.
- Tightened fraction/percentage agreement language and approximate-quantity constructions.
- Added/updated RAE/ASALE source metadata and `review_status: verified` on all four pages.
- Academic Writing Toolkit returned only short-paragraph signals on the four pages; no higher-level paragraph-logic defect was reported.
- Current operational page backlog: **7 of 196 grammar MDX pages (3.6%)**.


## Progress update — 2026-09-24 (final content backlog closure)

- Closed the final seven content pages in the operational untouched/review inventory: `grammar-basics`, `numbers-in-speech`, `numerals-advanced`, `ordinal-numbers`, `reading-rules`, `ua-interference`, and `micro-constructions/de-inf-sera-no-sea-lo-de`.
- Tightened core terminology, numeral agreement/apocope, reading rules, Ukrainian-interference guidance, and high-frequency micro-constructions.
- Added/updated RAE/ASALE source metadata and `review_status: verified` on all seven pages.
- Academic Writing Toolkit returned only short-paragraph signals on the seven pages; no higher-level paragraph-logic defect was reported.
- **Content backlog is now 0 of 196 grammar MDX pages (0%).** The remaining release gate is technical QA, not another content rewrite.
