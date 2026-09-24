# Remaining Rewrite Roadmap — Spanish Grammar
## 2026-09-23

> Робочий backlog для наступних редакторських проходів.
>
> **Важливе розрізнення:** цей список є дорожньою картою, а не твердженням, що перелічені сторінки ніколи не змінювалися. Частина з них уже отримувала точкові виправлення у попередніх фазах. Тут вони залишаються тому, що для них у поточній документації не зафіксовано окремого повного deep-rewrite pass на рівні нової методології.

## Як користуватися

**Protected rewrite baseline:** сторінки, які вже були переписані в попередніх deep-rewrite passes, не переписуються повторно без окремої причини. Поточна карта містить **80 уже змінених grammar MDX-сторінок** і **58 сторінок, що залишаються в untouched/review backlog**. Перед кожним новим проходом спочатку звіряємо цей backlog і журнал methodology, щоб не перезаписувати вже опрацьований матеріал.

Статус:
- [ ] **REWRITE** — повний редакторський прохід за CONTENT-METHODOLOGY-REWRITE-2026-09-23.
- [ ] **VERIFY** — після rewrite перевірити приклади, термінологію, cross-page consistency та джерела.
- [ ] **DONE** — сторінка має бути закрита лише після проходження QA.

Принцип:
**не переписувати сторінку заради довжини.** Спочатку визначити граматичну проблему, потім перевірити правило, межі правила, приклади, українську інтерпретацію, регіональні варіанти та зв'язки з іншими сторінками.

---

# 1. P0 — найважливіший залишковий контент

## 1.1 Verbs — базова морфологія та лексико-граматичні конструкції

- [x] DONE — deep rewrite + verification `verbs/conjugations.mdx`
- [x] DONE — deep rewrite + verification `verbs/irregular-verbs.mdx`
- [x] DONE — deep rewrite + verification `verbs/stem-changing-verbs.mdx`
- [x] DONE — deep rewrite + verification `verbs/orthographic-changes.mdx`
- [x] DONE — deep rewrite + verification `verbs/pronominal-verbs.mdx`
- [x] DONE — deep rewrite + verification `verbs/verb-infinitive-patterns.mdx`
- [x] DONE — deep rewrite + verification `verbs/deber-vs-deber-de.mdx`
- [x] DONE — deep rewrite + verification `verbs/haber-auxiliary.mdx`
- [x] DONE — deep rewrite + verification `verbs/gerundio.mdx`
- [x] DONE — deep rewrite + verification `verbs/participio.mdx`
- [x] DONE — deep rewrite + verification `verbs/infinitivo.mdx`
- [x] DONE — verified / precision rewrite `verbs/gerund-uses.mdx`
- [x] DONE — verified / precision rewrite `verbs/estar-emotions-states.mdx`
- [x] DONE — verified / precision rewrite `verbs/change-of-state.mdx`
- [x] DONE — verified existing protected baseline; no rewrite needed `verbs/ser-estar.mdx`
- [x] DONE — verified / precision rewrite `verbs/ser-estar-hay.mdx`

**Чому P0:** морфологічні сторінки є фундаментом для всього tense/mood/periphrasis system. Тут особливо важливо не змішувати форму, функцію та лексичну валентність.

---

# 2. P0 — Conjunctions та subordinate-clause system

- [x] DONE — precision rewrite + verification `conjunctions/coordinating.mdx`
- [x] DONE — precision rewrite + verification `conjunctions/subordinating.mdx`
- [x] DONE — precision rewrite + verification `conjunctions/que-de-que.mdx`
- [x] DONE — precision rewrite + verification `conjunctions/como-excepto.mdx`
- [x] DONE — precision rewrite + verification `conjunctions/discourse-connectors.mdx`
- [x] DONE — precision rewrite + verification `conjunctions/discourse-fillers.mdx`

### Cross-page dependency

Після цього пройти разом:
- `sentence-structure/subordinate-clauses.mdx`
- `sentence-structure/concessive-clauses.mdx`
- `sentence-structure/causal/final/consecutive/comparative`-related pages where applicable.

**Головний ризик:** не приписувати самій сполучній конструкції механічний вибір indicativo/subjuntivo без урахування значення та типу підрядного речення.

---

# 3. P0 — Valency, complements and sentence structure

- [x] DONE — precision rewrite + verification `sentence-structure/verb-valency.mdx`
- [x] DONE — precision rewrite + verification `sentence-structure/predicative-complement.mdx`
- [x] DONE — precision rewrite + verification `sentence-structure/agreement.mdx`
- [x] DONE — precision rewrite + verification `sentence-structure/comparative-clauses.mdx`
- [x] DONE — precision rewrite + verification `sentence-structure/consecutive-clauses.mdx`
- [x] DONE — precision rewrite + verification `sentence-structure/modal-clauses.mdx`
- [x] DONE — precision rewrite + verification `sentence-structure/absolute-constructions.mdx`
- [x] DONE — precision rewrite + verification `sentence-structure/ellipsis.mdx`
- [x] DONE — precision rewrite + verification `sentence-structure/compound-complex.mdx`
- [x] DONE — precision rewrite + verification `sentence-structure/cleft-pseudocleft.mdx`
- [x] DONE — precision rewrite + verification `sentence-structure/dislocation.mdx`
- [x] DONE — precision rewrite + verification `sentence-structure/emphasis-polarity-focus.mdx`
- [x] DONE — precision rewrite + verification `sentence-structure/modality-speech-acts.mdx`
- [x] DONE — precision rewrite + verification `sentence-structure/verum-focus.mdx`
- [x] DONE — precision rewrite + verification `sentence-structure/interjections.mdx`

**Головний ризик:** не плутати аргумент, adjunct, attribute, predicative complement і discourse function.

---

# 4. P1 — Adjectives: завершальний системний прохід

- [x] DONE — precision rewrite + verification `adjectives/adjective-complements.mdx`
- [x] DONE — precision rewrite + verification `adjectives/adjective-types-cultos.mdx`
- [x] DONE — precision rewrite + verification `adjectives/comparison-structures.mdx`
- [x] DONE — precision rewrite + verification `adjectives/degrees-of-comparison.mdx`
- [ ] REWRITE `adjectives/irregular-comparatives.mdx`
- [ ] REWRITE `adjectives/meaning-by-position.mdx`
- [x] DONE — verified / precision metadata `adjectives/adjective-agreement.mdx`
- [x] DONE — precision rewrite + verification `adjectives/agreement-traps.mdx`
- [x] DONE — verified / precision metadata `adjectives/quantifiers.mdx`
- [x] DONE — verified / precision metadata `adjectives/quantifiers-advanced.mdx`

**Cross-page test:**
`un gran hombre / un hombre grande`,
`español / española`,
`más X que / tan X como / tanto X como`,
`mejor / más bueno`.

---

# 5. P1 — Fundamentals: maintenance rather than another wholesale rewrite

The fundamentals section already received a documented reference-quality pass. Do **not** blindly rewrite it again.

- [ ] VERIFY `fundamentals/grammar-basics.mdx`
- [ ] VERIFY `fundamentals/alphabet-pronunciation.mdx`
- [ ] VERIFY `fundamentals/reading-rules.mdx`
- [ ] VERIFY `fundamentals/date-time-numbers.mdx`
- [ ] VERIFY `fundamentals/numbers-in-speech.mdx`
- [ ] VERIFY `fundamentals/numerals-advanced.mdx`
- [ ] VERIFY `fundamentals/ordinal-numbers.mdx`
- [ ] VERIFY `fundamentals/fractions-percentages.mdx`
- [ ] VERIFY `fundamentals/false-friends-ua-es.mdx`
- [ ] VERIFY `fundamentals/ua-interference.mdx`

Priority here is **consistency with the modern terminology and examples**, not adding bulk.

---

# 6. P1 — Spelling, accentuation and pronunciation

This is a major remaining editorial block.

- [ ] REWRITE `spelling/accent-marks.mdx`
- [ ] REWRITE `spelling/b-v.mdx`
- [ ] REWRITE `spelling/c-z-s-g-j.mdx`
- [ ] REWRITE `spelling/diphthongs-hiatus.mdx`
- [ ] REWRITE `spelling/h-y-ll.mdx`
- [ ] REWRITE `spelling/punctuation-capitalization.mdx`
- [ ] REWRITE `spelling/stress-and-accents-review.mdx`
- [ ] VERIFY `spelling/capitalization.mdx`
- [ ] VERIFY `spelling/special-letters.mdx`

### Special QA

Separate:
1. pronunciation;
2. phonological contrast;
3. orthographic convention;
4. accent-mark rule;
5. regional pronunciation.

Do not turn seseo/ceceo, yeísmo or regional pronunciation into spelling "errors".

---

# 7. P1 — Word formation

- [ ] REWRITE `word-formation/prefixes-suffixes.mdx`
- [ ] REWRITE `word-formation/compounding.mdx`
- [ ] REWRITE `word-formation/augmentatives.mdx`
- [ ] REWRITE `word-formation/pejoratives-affectionate.mdx`
- [ ] REWRITE `word-formation/diminutives.mdx`
- [ ] VERIFY `word-formation/diminutives-review.mdx`
- [ ] VERIFY `word-formation/adverb-diminutives.mdx`

**Головний ризик:** не подавати словотвірний суфікс як механічний генератор значення; враховувати лексикалізацію, регістр і продуктивність.

---

# 8. P1 — Regional Spanish

Це не один rewrite, а окремий consistency pass після завершення core grammar.

- [ ] REWRITE `regional/regional-overview.mdx`
- [ ] REWRITE `regional/spain-vs-latin-america.mdx`
- [ ] REWRITE `regional/caribbean.mdx`
- [ ] REWRITE `regional/central-america.mdx`
- [ ] REWRITE `regional/colombia-canarias.mdx`
- [ ] REWRITE `regional/mexico.mdx`
- [ ] REWRITE `regional/rioplatense.mdx`
- [ ] REWRITE `regional/leismo-laismo-loismo.mdx`
- [ ] REWRITE `regional/seseo-ceceo-distincion.mdx`
- [ ] REWRITE `regional/ustedeo.mdx`
- [ ] VERIFY `regional/andean.mdx`
- [ ] VERIFY `regional/southern-cone.mdx`
- [ ] VERIFY `regional/voseo.mdx`

### Mandatory regional rule

Кожне сильне твердження має відповідати схемі:

**географія → конструкція → поширеність/варіативність → регістр/соціальний контекст → статус.**

Уникати формул:
- «у всій Латинській Америці»;
- «в Аргентині завжди...»;
- «у Мексиці всі...»;
- «в Іспанії правильно, а в Латинській Америці неправильно».

---

# 9. P2 — Small / supplementary pages

- [ ] VERIFY `micro-constructions/de-inf-sera-no-sea-lo-de.mdx`
- [ ] VERIFY `articles/articles-with-names.mdx`
- [ ] VERIFY `articles/neutral-lo.mdx`
- [ ] VERIFY `articles/special-cases.mdx`
- [ ] VERIFY `articles/definite-vs-indefinite.mdx`
- [ ] VERIFY `nouns/noun-complements.mdx`
- [ ] VERIFY `nouns/noun-special-cases.mdx`
- [ ] VERIFY `nouns/irregular-plurals.mdx`
- [ ] VERIFY `nouns/possessive-constructions.mdx`

Ці сторінки вже значною мірою включені в попередні системні проходи, тому тут потрібен не blind rewrite, а перевірка узгодженості.

---

# 10. P2 — Reference-layer consistency

Після закриття тематичних rewrite-pass:

- [ ] Створити єдину карту verb tenses.
- [ ] Створити єдину карту pronoun system.
- [ ] Створити єдину карту article system.
- [ ] Створити єдину карту subjunctive.
- [ ] Створити єдину карту imperative.
- [ ] Створити єдину карту prepositions.
- [ ] Створити єдину карту subordinate clauses.
- [ ] Створити єдину карту information structure.
- [ ] Перевірити, що overview-сторінки не суперечать deep pages.
- [ ] Перевірити дублікати / canonical topics.
- [ ] Перевірити 15 semantic orphans з content-graph audit.

---

# 11. P2 — Corpus-wide verification

Це фінальна фаза після content rewrite, а не заміна редактури.

Для кожної сторінки:

- [ ] центральне правило не є false universal;
- [ ] formation коректна;
- [ ] non-usage / contrast присутній там, де потрібен;
- [ ] приклади справді демонструють правило;
- [ ] український переклад не змінює граматичний сенс;
- [ ] типова помилка україномовного реалістична;
- [ ] regional claim має географію та кваліфікацію;
- [ ] register відокремлено від grammaticality;
- [ ] related links існують;
- [ ] canonical/variant relationship логічний;
- [ ] таблиці мають однозначні заголовки;
- [ ] термінологія узгоджена між сторінками;
- [ ] джерело є для важливих нормативних тверджень, де це можливо.

---

# 12. Recommended execution order

### Wave A — core grammar
1. verbs / conjugation / irregularity
2. valency and complements
3. conjunctions + subordinate clauses
4. adjectives
5. spelling

### Wave B — variation and peripheral grammar
6. regional Spanish
7. word formation
8. small nouns/articles/fundamentals verification
9. micro-constructions

### Wave C — system integration
10. cross-page consistency
11. canonical/duplicate audit
12. graph/orphan cleanup
13. example + translation audit
14. source/evidence pass

### Wave D — final release QA
15. MDX preflight
16. content validation
17. links
18. graph
19. design audits
20. production build
21. browser/manual audit

---

# 13. What is already substantially covered

The following systems have documented deep-rewrite work in the current methodology log and therefore should **not** be treated as untouched backlog:

- articles and zero-article;
- core pronoun system;
- object pronouns and clitic placement;
- personal a;
- se constructions;
- relative clauses/pronouns;
- questions and word order;
- negation;
- hay / estar;
- conditional clauses;
- reported speech;
- sequence of tenses;
- major indicative tense system;
- subjunctive and its triggers;
- imperative and imperative + pronouns;
- major preposition contrasts;
- verbal periphrases;
- adverbs;
- noun gender and demonstratives;
- possessives / indefinites / interrogatives;
- selected regional pages.

These pages can still receive verification and consistency edits. "Covered" does not mean "never touch again"; it means they should no longer be the first destination when choosing the next untouched editorial block.

---

# 14. Definition of completion

The backlog is complete only when every content page is in one of three states:

- **DONE — deep rewrite + verification**
- **DONE — verified existing page; no rewrite needed**
- **EXPLICITLY DEFERRED — with a documented reason**

There should be no silent fourth state of "old page that nobody has checked".

The final objective is not maximum number of rewritten files. It is a coherent Spanish grammar reference for Ukrainian-speaking learners in which neighbouring pages explain the same grammatical system consistently.

---

## Audit note

The Academic Writing Toolkit review remains a secondary structural signal. Short paragraphs are intentional in this project because Formula, MinPair, Mistake, Note, Example and table blocks are reference units. A short-paragraph warning must not automatically trigger prose expansion.

Primary quality gates remain:
**factual correctness → grammatical precision → Ukrainian learner fit → cross-page consistency → source discipline → technical QA.**


## Поточний progress log — 2026-09-24

- Завершено precision rewrite п'яти P0-сторінок блоку **verbs**: `conjugations`, `irregular-verbs`, `stem-changing-verbs`, `orthographic-changes`, `pronominal-verbs`.
- Перевірено міжсторінкову узгодженість цих п'яти сторінок з регулярною дієвідміною, нерегулярністю, voseo та системою `se`.
- Прибрано або звужено статистичні та категоричні твердження, для яких у репозиторії не було достатньої підстави.
- Academic Writing Toolkit повторно застосовано до репрезентативної прозової частини; його short-paragraph сигнали залишено як очікувані для компонентного довідника.
- GitHub PR QA: **PASS** на PR #5 після змін п'яти сторінок; повний `npm run qa` завершився успішно.
- Наступний P0-блок після цього проходу: `verb-infinitive-patterns`, `deber-vs-deber-de`, `haber-auxiliary`, `gerundio`, `participio`, `infinitivo`.


### P0 verbs precision pass — 2026-09-24

**Completed:** all 11 verb pages listed in the P0 morphology block now have a documented deep rewrite + verification status. The pass covered:

- regular conjugation groups and the limits of simplified frequency claims;
- irregularity typology, stem alternation, voseo and orthographic adaptation;
- pronominal constructions and the distinction between grammaticality and departure/emphasis nuances;
- verb + infinitive government;
- deber / deber de modality and real-usage variation;
- haber as auxiliary versus hay;
- gerundio and participio with construction-sensitive analysis;
- infinitive versus *que + subjuntivo* without a false one-subject/two-subject universal.

All 11 revised pages were marked `review_status: verified` after the PR QA gate. Previously rewritten grammar pages outside this P0 block remain protected and were not re-rewritten.


### Follow-up precision pass — 2026-09-24

- Verified/reworked four remaining verb pages: `gerund-uses`, `estar-emotions-states`, `change-of-state`, `ser-estar-hay`.
- Kept `verbs/ser-estar.mdx` as protected baseline; it was reviewed for consistency but not rewritten because it already belongs to the previous deep-rewrite corpus.
- Completed the first three P0 conjunction pages: `coordinating`, `subordinating`, `que-de-que`.
- Tightened false universals around gerundio, ser/estar, change-of-state verbs, and indicativo/subjuntivo selection.
- Added/updated RAE/ASALE source metadata and marked the seven touched content pages as `review_status: verified`.
- Academic Writing Toolkit review of the seven pages returned only the expected short-paragraph signals from the componentized reference format; no higher-level paragraph-logic issue was reported.


### Sentence-structure precision pass — 2026-09-24

- Closed four P0 sentence-structure pages: `verb-valency`, `predicative-complement`, `comparative-clauses`, `consecutive-clauses`.
- Tightened false universals around argument counts, complement classification, secondary predication, comparative conjunctions and consecutive mood selection.
- Added RAE/ASALE source metadata and `review_status: verified` to the four touched pages.
- Academic Writing Toolkit review again reported only expected short-paragraph signals from the componentized reference format.
- Closed four additional P0 sentence-structure pages: `compound-complex`, `cleft-pseudocleft`, `dislocation`, `emphasis-polarity-focus`.
- Tightened the distinction between coordination, subordination and juxtaposition; cleft/pseudocleft focus; left/right dislocation; topic vs focus; and emphatic `sí`, `sí que`, `no es que`, `sino/sino que`.
- Academic Writing Toolkit again returned only expected short-paragraph signals from the componentized reference format; no higher-level paragraph-logic issue was reported.
- Closed four additional P0 sentence-structure pages: `concessive-clauses`, `double-negation`, `interjections`, `modality-speech-acts`.
- Tightened concessive mood selection, negative concord, interjection/discourse-marker boundaries, punctuation, and modality/speech-act distinctions.
- Academic Writing Toolkit again returned only expected short-paragraph signals from the componentized reference format.
- Current untouched/review backlog: **74 of 196 grammar MDX pages (37.8%)**; previously rewritten baseline remains protected.


### P0 sentence-structure precision pass V — 2026-09-24

- Closed four additional P0 sentence-structure pages: `verum-focus`, `advanced-conditionals`, `negation-patterns`, and `passive-voice`.
- Tightened verum focus vs contrastive focus, advanced conditional constructions, negative concord and pre/postverbal negative elements, and the distinction between pasiva perifrástica, pasiva refleja, and impersonal `se`.
- Added/updated RAE/ASALE source metadata and `review_status: verified`.
- Academic Writing Toolkit again returned only expected short-paragraph signals; no higher-level paragraph-logic defect was reported.
- Current untouched/review backlog: **78 of 196 grammar MDX pages (39.8%)**.


### P0 conjunction + baseline verification pass — 2026-09-24

- Verified the protected baseline `verbs/ser-estar.mdx` for cross-page consistency; no rewrite was needed, so the page remains untouched and protected.
- Closed `conjunctions/como-excepto.mdx`, `conjunctions/discourse-connectors.mdx`, and `conjunctions/discourse-fillers.mdx` with precision rewrites and verification.
- Tightened the distinctions among the main uses of `como`, exception constructions, discourse connectors, punctuation, register, and conversational discourse markers.
- Academic Writing Toolkit returned only short-paragraph signals expected from the componentized reference format on all three rewritten pages.
- Current untouched/review backlog: **58 of 196 grammar MDX pages (29.6%)**.


### P1 adjectives precision pass — 2026-09-24

- Closed four adjective pages: `adjective-complements`, `adjective-types-cultos`, `comparison-structures`, and `degrees-of-comparison`.
- Reframed adjective government around constructional régimen rather than translation-based preposition guessing.
- Distinguished calificativos from relacionales without turning tendencies into absolute prohibitions on degree modification.
- Reworked comparative structures around `más/menos... que`, `tan... como`, `tanto... como`, `igual de... que`, `más/menos de + quantity`, superlative constructions, and correlative comparisons.
- Tightened the treatment of `mejor, peor, mayor, menor`, `superior/inferior`, and absolute vs relative superlative.
- Academic Writing Toolkit returned only expected short-paragraph signals on all four pages; no higher-level paragraph-logic defect was reported.
- Current untouched/review backlog: **70 of 196 grammar MDX pages (35.7%)**.


### P1 adjectives precision pass II — 2026-09-24

- Closed `adjectives/irregular-comparatives.mdx` and `adjectives/meaning-by-position.mdx` with precision rewrites.
- Verified `adjectives/adjective-agreement.mdx` and upgraded its source/review metadata without changing the established instructional structure.
- Reworked `adjectives/agreement-traps.mdx` to distinguish grammatical number, semantic agreement, collective nouns, `usted/ustedes`, and coordinated mixed-gender subjects without false universals.
- Academic Writing Toolkit returned only expected short-paragraph signals on all four pages.
- Current untouched/review backlog: **68 of 196 grammar MDX pages (34.7%)**.


### P1 adjectives quantification verification — 2026-09-24

- Verified `adjectives/quantifiers.mdx` and `adjectives/quantifiers-advanced.mdx`.
- Added current RAE/ASALE source metadata and `review_status: verified`.
- Preserved the componentized reference structure while tightening the treatment of `el resto de` and quantity/concordance variability.
- Academic Writing Toolkit returned only expected short-paragraph signals on both pages.
- Current untouched/review backlog: **58 of 196 grammar MDX pages (29.6%)**.


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
