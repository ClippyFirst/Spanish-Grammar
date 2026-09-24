# Untouched Content Rewrite Roadmap — 2026-09-23

> Точний операційний backlog статей, які **не змінювалися на поточній rewrite-гілці** після її базової точки порівняння з `main`.

**Станом на 24.09.2026:** 196 MDX-сторінок загалом; 80 уже змінені в попередніх rewrite passes; **94 залишаються** в untouched/review backlog. Нижче — саме ці 98 сторінок.

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
- [ ] `src/content/es/verbs/gustar-type-verbs.mdx`
- [x] DONE — deep rewrite + verification `src/content/es/verbs/haber-auxiliary.mdx`
- [ ] `src/content/es/verbs/haber-vs-tener.mdx`
- [ ] `src/content/es/verbs/infinitive-as-noun.mdx`
- [x] DONE — deep rewrite + verification `src/content/es/verbs/infinitivo.mdx`
- [x] DONE — deep rewrite + verification `src/content/es/verbs/irregular-verbs.mdx`
- [x] DONE — deep rewrite + verification `src/content/es/verbs/orthographic-changes.mdx`
- [x] DONE — deep rewrite + verification `src/content/es/verbs/participio.mdx`
- [x] DONE — deep rewrite + verification `src/content/es/verbs/pronominal-verbs.mdx`
- [x] DONE — precision rewrite + verification `src/content/es/verbs/ser-estar-hay.mdx`
- [ ] `src/content/es/verbs/ser-estar-location.mdx`
- [ ] `src/content/es/verbs/ser-estar-with-adjectives.mdx`
- [x] DONE — deep rewrite + verification `src/content/es/verbs/stem-changing-verbs.mdx`
- [x] DONE — deep rewrite + verification `src/content/es/verbs/verb-infinitive-patterns.mdx`

## sentence-structure — 26 сторінок

- [ ] `src/content/es/sentence-structure/absolute-constructions.mdx`
- [ ] `src/content/es/sentence-structure/advanced-conditionals.mdx`
- [ ] `src/content/es/sentence-structure/agreement.mdx`
- [ ] `src/content/es/sentence-structure/cleft-pseudocleft.mdx`
- [x] DONE — precision rewrite + verification `src/content/es/sentence-structure/comparative-clauses.mdx`
- [ ] `src/content/es/sentence-structure/compound-complex.mdx`
- [ ] `src/content/es/sentence-structure/concessive-clauses.mdx`
- [x] DONE — precision rewrite + verification `src/content/es/sentence-structure/consecutive-clauses.mdx`
- [ ] `src/content/es/sentence-structure/dislocation.mdx`
- [ ] `src/content/es/sentence-structure/double-negation.mdx`
- [ ] `src/content/es/sentence-structure/ellipsis.mdx`
- [ ] `src/content/es/sentence-structure/emphasis-polarity-focus.mdx`
- [ ] `src/content/es/sentence-structure/interjections.mdx`
- [ ] `src/content/es/sentence-structure/modal-clauses.mdx`
- [ ] `src/content/es/sentence-structure/modality-speech-acts.mdx`
- [ ] `src/content/es/sentence-structure/negation-patterns.mdx`
- [ ] `src/content/es/sentence-structure/passive-voice.mdx`
- [ ] `src/content/es/sentence-structure/personal-a.mdx`
- [x] DONE — precision rewrite + verification `src/content/es/sentence-structure/predicative-complement.mdx`
- [ ] `src/content/es/sentence-structure/question-formation.mdx`
- [ ] `src/content/es/sentence-structure/reported-speech-review.mdx`
- [ ] `src/content/es/sentence-structure/si-clauses-overview.mdx`
- [ ] `src/content/es/sentence-structure/subordinate-clauses.mdx`
- [x] DONE — precision rewrite + verification `src/content/es/sentence-structure/verb-valency.mdx`
- [ ] `src/content/es/sentence-structure/verum-focus.mdx`
- [ ] `src/content/es/sentence-structure/word-order-review.mdx`

## conjunctions — 4 сторінок

- [ ] `src/content/es/conjunctions/como-excepto.mdx`
- [x] DONE — precision rewrite + verification `src/content/es/conjunctions/coordinating.mdx`
- [ ] `src/content/es/conjunctions/discourse-connectors.mdx`
- [ ] `src/content/es/conjunctions/discourse-fillers.mdx`

## adjectives — 8 сторінок

- [ ] `src/content/es/adjectives/adjective-types-cultos.mdx`
- [ ] `src/content/es/adjectives/agreement-traps.mdx`
- [ ] `src/content/es/adjectives/comparison-structures.mdx`
- [ ] `src/content/es/adjectives/degrees-of-comparison.mdx`
- [ ] `src/content/es/adjectives/irregular-comparatives.mdx`
- [ ] `src/content/es/adjectives/meaning-by-position.mdx`
- [ ] `src/content/es/adjectives/quantifiers-advanced.mdx`
- [ ] `src/content/es/adjectives/quantifiers.mdx`

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
| Не змінені / залишені в rewrite backlog | **94** |
| Частка незачеплених сторінок | **48.0%** |

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
