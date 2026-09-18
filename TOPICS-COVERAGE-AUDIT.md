# Аудит покриття: TOPICS-COMPLETE-UA ↔ репозиторій

> **Копія силабусу зі статусами.**  
> Джерело тем: `TOPICS-COMPLETE-UA.md` (суперінсет).  
> Інвентар MDX: `src/content/es/**` — **152** файли (станом на 2026-09-18).
>
> **Легенда**
> - ✅ є окрема (або явно закриває тему) сторінка — slug у дужках
> - 🟡 частково (згадано в іншій темі / поверхнево / кілька підтем в одній)
> - ❌ немає — **треба доповнити**
> - ⭐ пріоритет для UA
>
> Оцінка на рівні **підтем силабусу**, не кожного мікро-пункта.  
> Одна глибока MDX може закривати кілька ✅.

---

## Підсумок

| Блок | Оцінка |
|------|--------|
| §1 Основи | 🟡 добре ядро, немає теорії «частини мови» / регістру як сторінки |
| §2 Орфографія | 🟡 є, без повної пунктуації окремо |
| §3 Іменники | 🟡 ядро є; acotadores, апозиція, професії — ❌/🟡 |
| §4 Артиклі | ✅ сильне покриття |
| §5 Прикметники | ✅ сильне |
| §6 Прислівники | 🟡 3 сторінки; ya/todavía, modus — ❌/🟡 |
| §7 Займенники | ✅ сильне |
| §8 Прийменники | ✅ сильне (por/para, місце, час, régimen) |
| §9 Сполучники | 🟡 5 сторінок; pero/sino окремо, tipos підрядних глибше — 🟡 |
| §10 Дієслово | ✅ сильне; зміна стану, deber de, подвійні participios — ❌ |
| §11 Часи | ✅ сильне |
| §12 Способи | ✅ сильне; ojalá/como si окремо — 🟡 |
| §13 Перифрази | ✅ ядро |
| §14 Структура речення | ✅ сильне; cleft/дислокація/tag — ❌/🟡 |
| §15 Словотвір | 🟡 |
| §16 Регіональні | ✅ добре |
| §17 Мікро / фокус / полярність | ❌ майже все — **головний борг** |
| §18 Пріоритет UA | більшість ✅/🟡; пункти 15–19 — ❌ |

**Головні дірки для доповнення:** §17 (sí / sí que / no es que / дислокація), частини тіла+dativo, зміна стану, hace/desde hace/ya–todavía глибше, deber de, ojalá/como si, cleft/топік.

---

## Інвентар MDX (152 файли)

Категорії: `adjectives` (8), `adverbs` (3), `articles` (6), `conjunctions` (5), `fundamentals` (7), `moods` (11), `nouns` (5), `periphrases` (6), `prepositions` (9), `pronouns` (15), `regional` (11), `sentence-structure` (20), `spelling` (8), `tenses` (14), `verbs` (20), `word-formation` (4).

Повний список slug — у дереві `src/content/es/`.

---

# 1. Основи ⭐

- [x] ✅ Абетка і вимова — `fundamentals/alphabet-pronunciation`
- [x] ✅ Правила читання — `fundamentals/reading-rules`
- [x] ✅ Дата, години, числа — `fundamentals/date-time-numbers`
- [x] ✅ Порядкові — `fundamentals/ordinal-numbers`
- [x] ✅ Числа в мовленні — `fundamentals/numbers-in-speech`
- [x] ✅ Інтерференції UA — `fundamentals/ua-interference` ⭐
- [x] ✅ False friends UA–ES — `fundamentals/false-friends-ua-es` ⭐
- [ ] 🟡 Поняття: морфема, частини мови, узгодження (загальне) — немає окремої
- [ ] 🟡 SVO / структура речення (база) — частково в `sentence-structure/word-order`
- [ ] 🟡 Регістр tú/usted — у `pronouns/tu-usted-vosotros-ustedes`
- [ ] ❌ Дроби / відсотки окремо

---

# 2. Орфографія

- [x] ✅ Наголос / тільда — `spelling/accent-marks`, `spelling/stress-and-accents-review`
- [x] ✅ Спец. літери — `spelling/special-letters`
- [x] ✅ b/v — `spelling/b-v`
- [x] ✅ c/z/s, g/j — `spelling/c-z-s-g-j`
- [x] ✅ h, y, ll — `spelling/h-y-ll`
- [x] ✅ Велика літера / пунктуація (огляд) — `spelling/capitalization`, `spelling/punctuation-capitalization`
- [ ] 🟡 sólo/solo, aún/aun — у accent або ❌
- [ ] 🟡 Повна пунктуація ¿¡, vocativo — частково
- [ ] ❌ Дифтонги / хіатус / склади окремо
- [ ] ❌ Абревіатури / siglas

---

# 3. Іменники ⭐

- [x] ✅ Рід — `nouns/genero`
- [x] ✅ Винятки роду — `nouns/gender-exceptions` ⭐
- [x] ✅ Множина — `nouns/numero-plural`
- [x] ✅ Неправильна множина — `nouns/irregular-plurals`
- [x] ✅ Присвійні конструкції de + N — `nouns/possessive-constructions` ⭐
- [ ] 🟡 el agua / узгодження — у gender-exceptions / articles
- [ ] ❌ Epicenos / зміна значення від роду (глибше)
- [ ] ❌ Sustantivos acotadores
- [ ] ❌ Апозиція
- [ ] ❌ Злічуваність / колективні (окремо)
- [ ] ❌ Професії чол./жін. окремо
- [ ] ❌ Складні іменники

---

# 4. Артиклі ⭐

- [x] ✅ el/un — `articles/definite-indefinite`
- [x] ✅ Опозиція для UA — `articles/definite-vs-indefinite` ⭐
- [x] ✅ Нульовий / nombres escuetos — `articles/zero-article` ⭐
- [x] ✅ Особливі випадки — `articles/special-cases`
- [x] ✅ З іменами — `articles/articles-with-names`
- [x] ✅ Нейтральний lo — `articles/neutral-lo` ⭐
- [ ] 🟡 Частини тіла + артикль — ❌ окремо / 🟡 у special-cases + dativo
- [ ] 🟡 Anafórico / asociativo — частково

---

# 5. Прикметники

- [x] ✅ Узгодження — `adjectives/adjective-agreement`
- [x] ✅ Пастки — `adjectives/agreement-traps` ⭐
- [x] ✅ Позиція — `adjectives/adjective-position`
- [x] ✅ Зміна значення — `adjectives/meaning-by-position` ⭐
- [x] ✅ Ступені — `adjectives/degrees-of-comparison`
- [x] ✅ Неправильні ступені — `adjectives/irregular-comparatives` ⭐
- [x] ✅ Структури порівняння — `adjectives/comparison-structures`
- [x] ✅ Квантори — `adjectives/quantifiers`
- [ ] ❌ Calificativos vs relacionales
- [ ] ❌ Comparativos cultos (superior…)
- [ ] ❌ Metábasis / -ísimo окремо (може бути в degrees)
- [ ] 🟡 Apócope — частково в position

---

# 6. Прислівники

- [x] ✅ Утворення / позиція — `adverbs/formation-and-position`
- [x] ✅ Типи — `adverbs/types-frequency-time-manner`
- [x] ✅ muy/mucho/tan/tanto — `adverbs/muy-mucho-tan-tanto` ⭐
- [ ] ❌ ya / todavía / aún / ya no ⭐
- [ ] ❌ Focalizadores / intensificadores окремо
- [ ] ❌ Modus / externos al dictum
- [ ] ❌ Locuciones adverbiales окремо

---

# 7. Займенники ⭐

- [x] ✅ Підмет / опускання — `pronouns/personal-pronouns-omission` ⭐
- [x] ✅ tú/usted/vosotros/ustedes — `pronouns/tu-usted-vosotros-ustedes` ⭐
- [x] ✅ OD/OI — `pronouns/objeto-directo-indirecto`
- [x] ✅ Позиція клітиків — `pronouns/object-pronoun-placement` ⭐
- [x] ✅ Подвійні / se lo — `pronouns/double-object-pronouns` ⭐
- [x] ✅ Se (спектр) — `pronouns/se-reflexive-impersonal-passive` ⭐
- [x] ✅ Se impersonal — `pronouns/se-impersonal`
- [x] ✅ Зворотні/взаємні — `pronouns/reciprocal-pronouns`
- [x] ✅ Демонстративні — `pronouns/demonstrative-pronouns`
- [x] ✅ Присвійні — `pronouns/possessive-pronouns`
- [x] ✅ Неозначені — `pronouns/indefinite-pronouns`
- [x] ✅ Питальні — `pronouns/interrogative-pronouns`
- [x] ✅ Відносні — `pronouns/relative-pronouns`, `relative-pronouns-review` ⭐
- [x] ✅ Особове a — `pronouns/personal-a` (+ sentence-structure) ⭐
- [ ] 🟡 Dativo posesivo — ❌ окремо / 🟡 у se / object
- [ ] ❌ Clitic climbing окремо
- [ ] ❌ Exclamativos окремо
- [ ] ❌ Mismo / cualquiera / uno genérico / generic tú

---

# 8. Прийменники ⭐

- [x] ✅ Por vs para — `prepositions/por-para` ⭐
- [x] ✅ Маркери por/para — `prepositions/por-para-markers` ⭐
- [x] ✅ Місце — `prepositions/place`, `place-review`
- [x] ✅ Час — `prepositions/time`, `time-expressions`
- [x] ✅ Verb + prep / régimen — `prepositions/verbs-with-prepositions`, `verb-preposition-pairs` ⭐
- [x] ✅ Конструкції — `prepositions/common-constructions`
- [ ] 🟡 Hace / desde hace — частково в time ⭐
- [ ] ❌ Estar de vs ser de
- [ ] ❌ A напрямку/часу схеми окремо

---

# 9. Сполучники

- [x] ✅ Сурядні — `conjunctions/coordinating`
- [x] ✅ Підрядні — `conjunctions/subordinating`
- [x] ✅ que / de que — `conjunctions/que-de-que`
- [x] ✅ Конектори — `conjunctions/discourse-connectors` ⭐
- [x] ✅ Філери — `conjunctions/discourse-fillers`
- [ ] 🟡 Pero vs sino — частково в coordinating ⭐
- [ ] 🟡 Типи підрядних (час/мета/умова…) — у subordinating + moods
- [ ] ❌ Distributivas окремо
- [ ] ❌ Excepto / salvo
- [ ] ❌ Mientras vs mientras que; como (3 значення)

---

# 10. Дієслово ⭐

- [x] ✅ Дієвідміна — `verbs/conjugations`
- [x] ✅ Зміна основи — `verbs/stem-changing-verbs` ⭐
- [x] ✅ Орфографічні зміни — `verbs/orthographic-changes`
- [x] ✅ Неправильні — `verbs/irregular-verbs` ⭐
- [x] ✅ Infinitivo — `verbs/infinitivo`, `infinitive-as-noun`
- [x] ✅ Verb + INF — `verbs/verb-infinitive-patterns` ⭐
- [x] ✅ Gerundio — `verbs/gerundio`, `gerund-uses`
- [x] ✅ Participio — `verbs/participio`
- [x] ✅ Haber — `verbs/haber-auxiliary` ⭐
- [x] ✅ Haber vs tener — `verbs/haber-vs-tener` ⭐
- [x] ✅ Ser/estar — `verbs/ser-estar` ⭐
- [x] ✅ Ser/estar/hay — `verbs/ser-estar-hay` ⭐
- [x] ✅ Ser/estar + adj — `verbs/ser-estar-with-adjectives` ⭐
- [x] ✅ Місце/події — `verbs/ser-estar-location` ⭐
- [x] ✅ Емоції — `verbs/estar-emotions-states`
- [x] ✅ Gustar — `verbs/gustar`, `gustar-type-verbs` ⭐
- [x] ✅ Прономінальні — `verbs/pronominal-verbs`
- [ ] ❌ Подвійні participios
- [ ] ❌ Ser/estar + participio (стан vs пасив) — 🟡 у passive
- [ ] ❌ Зміна стану (ponerse, volverse, hacerse…) ⭐
- [ ] ❌ Deber vs deber de
- [ ] ❌ Haber de
- [ ] ❌ Погода окремо
- [ ] ❌ Сприйняття + INF / псевдовідносні
- [ ] ❌ Каузатив hacer + INF
- [ ] ❌ Ir/venir, llevar/traer (дейксис)
- [ ] ❌ Дефективні

---

# 11. Часи ⭐

- [x] ✅ Огляд — `tenses/tenses-overview`
- [x] ✅ Presente — `tenses/presente-de-indicativo`
- [x] ✅ Perfecto — `tenses/preterito-perfecto` ⭐
- [x] ✅ Indefinido — `tenses/preterito-indefinido`
- [x] ✅ Imperfecto — `tenses/preterito-imperfecto`
- [x] ✅ Indefinido vs imperfecto — `tenses/preterito-vs-imperfecto` ⭐
- [x] ✅ Pluscuamperfecto — `tenses/pluscuamperfecto`
- [x] ✅ Anterior — `tenses/preterito-anterior`
- [x] ✅ Futuro — `tenses/futuro-simple`
- [x] ✅ Futuro perfecto — `tenses/futuro-perfecto`
- [x] ✅ Condicional — `tenses/condicional-simple`
- [x] ✅ Condicional compuesto — `tenses/condicional-compuesto`
- [x] ✅ Sequence of tenses — `tenses/sequence-of-tenses` ⭐
- [x] ✅ Умовні огляд — `tenses/conditionals-review` ⭐
- [ ] 🟡 Futuro/condicional de conjetura — частково
- [ ] 🟡 Змішані умовні — частково
- [ ] 🟡 Continuous perfect equivalents — ❌ окремо

---

# 12. Способи ⭐

- [x] ✅ Presente subjuntivo — `moods/subjuntivo-presente`
- [x] ✅ Imperfecto subjuntivo — `moods/imperfecto-subjuntivo`
- [x] ✅ Perfecto subjuntivo — `moods/perfecto-subjuntivo`
- [x] ✅ Pluscuamperfecto subjuntivo — `moods/pluscuamperfecto-subjuntivo`
- [x] ✅ Futuro de subjuntivo — `moods/futuro-de-subjuntivo`
- [x] ✅ Тригери — `moods/subjunctive-triggers`, `subjunctive-triggers-list` ⭐
- [x] ✅ Коли не subjuntivo — `moods/when-not-subjunctive` ⭐
- [x] ✅ Імператив — `moods/imperativo`, `imperative-overview`
- [x] ✅ Імператив + займенники — `moods/imperative-pronouns` ⭐
- [ ] 🟡 Indicativo vs subjuntivo (хаб) — у triggers
- [ ] ❌ Ojalá окремо
- [ ] ❌ Como si окремо
- [ ] ❌ Quizá + mood окремо
- [ ] ❌ Незалежний subjuntivo (*¡Que te vaya bien!*)

---

# 13. Перифрази

- [x] ✅ Огляд — `periphrases/overview`
- [x] ✅ ir a — `periphrases/ir-a-infinitivo`
- [x] ✅ tener que / hay que — `periphrases/tener-que-hay-que`
- [x] ✅ estar + gerundio — `periphrases/estar-gerundio`
- [x] ✅ Frequent (acabar de, volver a…) — `periphrases/frequent-periphrases`
- [x] ✅ deber/poder/soler — `periphrases/deber-poder-soler`
- [ ] 🟡 llevar + gerundio, ir + gerundio, tener + participio — у frequent?
- [ ] ❌ estar a punto de окремо

---

# 14. Структура речення ⭐

- [x] ✅ Порядок слів — `sentence-structure/word-order`, `word-order-review` ⭐
- [x] ✅ Питання — `sentence-structure/questions`, `question-formation` ⭐
- [x] ✅ Заперечення — `sentence-structure/negation`, `negation-patterns`, `double-negation` ⭐
- [x] ✅ Hay vs estar — `sentence-structure/hay-vs-estar` ⭐
- [x] ✅ Особове a — `sentence-structure/personal-a` ⭐
- [x] ✅ Узгодження — `sentence-structure/agreement`
- [x] ✅ Підрядні — `sentence-structure/subordinate-clauses`
- [x] ✅ Відносні — `sentence-structure/relative-clauses`, `relative-clauses-depth` ⭐
- [x] ✅ Умовні / si — `sentence-structure/conditional-sentences`, `si-clauses-overview`
- [x] ✅ Непряма мова — `sentence-structure/reported-speech`, `reported-speech-review` ⭐
- [x] ✅ Пасив — `sentence-structure/passive-voice`
- [x] ✅ Пасив se vs ser — `sentence-structure/passive-se-vs-ser` ⭐
- [x] ✅ Складносурядні/підрядні — `sentence-structure/compound-complex`
- [ ] ❌ Cleft / pseudocleft
- [ ] ❌ Дислокація / топікалізація (глибше)
- [ ] ❌ Tag-питання
- [ ] 🟡 Predicativo / régimen — у verbs/prepositions

---

# 15. Словотвір

- [x] ✅ Префікси/суфікси — `word-formation/prefixes-suffixes`
- [x] ✅ Зменшувальні — `word-formation/diminutives`, `diminutives-review` ⭐
- [x] ✅ Збільшувальні — `word-formation/augmentatives`
- [ ] ❌ Пейоративи окремо
- [ ] ❌ -ito від прислівників
- [ ] ❌ Словоскладання

---

# 16. Регіональні ⭐

- [x] ✅ Огляд — `regional/regional-overview`, `spain-vs-latin-america`
- [x] ✅ Voseo — `regional/voseo` ⭐
- [x] ✅ Leísmo — `regional/leismo-laismo-loismo` ⭐
- [x] ✅ México — `regional/mexico`
- [x] ✅ Centroamérica — `regional/central-america`
- [x] ✅ Caribe — `regional/caribbean`
- [x] ✅ Andino — `regional/andean`
- [x] ✅ Cono Sur / Rioplatense — `regional/southern-cone`, `rioplatense`
- [x] ✅ Seseo/ceceo — `regional/seseo-ceceo-distincion`
- [ ] 🟡 Ustedeo; perfecto vs indefinido регіонально — частково
- [ ] ❌ Колумбія / Канари (опційно)

---

# 17. Мікроконструкції, фокус і полярність ⭐ — **борг**

## 17.1 sí ≈ do
- [ ] ❌ Yo sí quiero / Él sí lo sabe ⭐
- [ ] ❌ Sí que…
- [ ] ❌ sí vs si (у контексті емфази)

## 17.2 No… sino / no es que
- [ ] ❌ No… sino / sino que ⭐
- [ ] ❌ No es que… (sino que)… ⭐

## 17.3 Фокус / дислокація
- [ ] ❌ Ліва/права дислокація з клітиком
- [ ] ❌ Cleft / verum focus / емфатичний підмет

## 17.4 Se етичне + тіло
- [ ] 🟡 Se етичне — частково в se-reflexive…
- [ ] ❌ Частини тіла + артикль + dativo (*me duele la cabeza*) ⭐

## 17.5 Незалежний subjuntivo
- [ ] ❌ ¡Que te vaya bien! / незалежний subjuntivo

## 17.6 Hace / ya
- [ ] 🟡 Hace / desde hace — у time ⭐
- [ ] ❌ Ya / todavía / aún система окремо ⭐

## 17.7–17.8 Інше + анти-кальки
- [ ] ❌ De + INF умовно; será que; no sea que; lo de…
- [ ] ❌ Абсолютний participio/gerundio (розпізнавання)
- [ ] ❌ Como que / en plan (регістр)
- [ ] ❌ Анти-кальки: do→sí; mi cabeza→la cabeza; «стати»→ponerse/hacerse…

### Рекомендовані нові MDX (пріоритет)

1. `sentence-structure/emphasis-polarity-focus` (sí, sí que, no es que, cleft, dislocation) ⭐
2. `verbs/change-of-state` (ponerse, volverse, hacerse…) ⭐
3. `pronouns/dativo-posesivo-body` або `articles/body-parts-possession` ⭐
4. `adverbs/ya-todavia-aun`
5. `moods/ojala-como-si`
6. `verbs/deber-vs-deber-de`
7. `prepositions/hace-desde-hace` (якщо `time` недостатньо)

---

# 18. Пріоритет UA — статус

| # | Тема | Статус |
|---|------|--------|
| 1 | Артиклі + escuetos + lo | ✅ |
| 2 | Ser / estar / hay | ✅ |
| 3 | Indefinido vs imperfecto | ✅ |
| 4 | Por vs para | ✅ |
| 5 | Subjuntivo тригери / коли ні | ✅ |
| 6 | Клітики + se lo + dativo | ✅ клітики; 🟡 dativo |
| 7 | Особове a | ✅ |
| 8 | Gustar-тип | ✅ |
| 9 | Заперечення | ✅ |
| 10 | Умовні | ✅ |
| 11 | Voseo / ustedes vs vosotros | ✅ |
| 12 | Інтерференції UA | ✅ |
| 13 | Haber / hay / tener | ✅ |
| 14 | Відносні + subj. | ✅ / 🟡 |
| 15 | Емфатичне sí / sí que | ❌ |
| 16 | No… sino / no es que | ❌ |
| 17 | Частини тіла + артикль + dativo | ❌ |
| 18 | Hace / desde hace / ya–todavía | 🟡 |
| 19 | Зміна стану | ❌ |

---

*Файл-копія для аудиту покриття. Оновлювати після нових MDX.*  
*ClippyFirst/Spanish-Grammar — 2026-09-18*
