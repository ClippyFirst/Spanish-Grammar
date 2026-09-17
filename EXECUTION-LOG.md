# 📒 Лог виконання — Перебудова за audit + plan-standardization

> Джерела: `audit-results-profound.md`, `plan-standardization-prompts.md`,
> `prompt_themes.txt`, `prompt_content.txt`, `prompt_website.txt`.
> Оновлюється після кожної фази.

---

## Фази 0–2 (DONE ✅)

Стабілізація збірки, категорії, хотфікси, QA-скрипти, стандарт сторінки.

## Фаза 3 — Наповнення

- [x] P1–P2 батчі (до 80 сторінок).
- [x] P3-1 (80 → 88): leísmo, double object, when-not-subjunctive, irregular plurals, special articles, sequence of tenses, meaning-by-position, imperative+pronouns.
- [x] P3-2 (88 → 96): augmentatives, caribbean, compound-complex, pretérito anterior, common constructions, pronominal verbs, tenses overview, deber-poder-soler.
- [x] **P3-3 (2026-09-17, коміт `68b88d1`, 8 файлів, 96 → 104 сторінок)**:
  - `verbs/haber-auxiliary` — he/has/ha…, hay ≠ ha, participio незмінний
  - `nouns/possessive-constructions` — el libro de Juan, vs mi/mío
  - `pronouns/reciprocal-pronouns` — nos/se + el uno al otro
  - `verbs/stem-changing-verbs` — e→ie, o→ue, e→i, «чобіт»
  - `verbs/orthographic-changes` — toqué, llegué, empecé, creyó
  - `regional/central-america` — ustedes, voseo/ustedeo, ¿mande?, ahorita
  - `adjectives/irregular-comparatives` — mejor/peor/mayor/menor
  - `pronouns/se-impersonal` — se dice, se vive; vs pasiva/reflexivo

### Метрики
- **104 контент-сторінки** (~69% від орієнтира 150+).
- Системні блоки (дієвідміна, займенники, часи, регіональні, словотвір, прийменники) виглядають вже як повноцінний довідник для щоденного користування.

### Наступне
- QA: validate + links + build.
- Точкове поглиблення найтонших сторінок.
- Взаємні related-лінки, popular/featured flags.
- Можливі ще: Andean/Southern Cone глибше, discourse markers, orthography spelling-changes-in-conjugation (частково покрито), numerals already done.
- Після ~110–120 — акцент на якість і полірування, не на сирий обсяг.

---
