# 📒 Лог виконання — Перебудова за audit + plan-standardization

> Джерела: `audit-results-profound.md`, `plan-standardization-prompts.md`,
> `prompt_themes.txt`, `prompt_content.txt`, `prompt_website.txt`.
> Оновлюється після кожної фази.

---

## 2026-09-11 — Фаза 0–2 (DONE ✅)

Стабілізація збірки, єдине джерело категорій, контент-хотфікси, QA-скрипти, стандарт сторінки (24 → golden). Деталі — у попередніх комітах логу.

## Фаза 3 — Нові сторінки (наповнення)

- [x] P1-1 … P2-3 (ранні батчі).
- [x] P2-4 (2026-09-17, 7 файлів, 73 → 80).
- [x] P3-1 (2026-09-17, коміт `646a618`, 8 файлів, 80 → 88):
  leísmo/laísmo/loísmo, double-object-pronouns, when-not-subjunctive, irregular-plurals, special-cases (artículos), sequence-of-tenses, meaning-by-position, imperative-pronouns.

- [x] **P3-2 (2026-09-17, коміт `ee68558`, 8 файлів, 88 → 96 сторінок)**:
  - `word-formation/augmentatives` — -ón/-azo/-ote/-udo, відтінки, vs зменшувальні
  - `regional/caribbean` — ustedes only, ¿qué tú…?, ослаблення -s, seseo
  - `sentence-structure/compound-complex` — coordinación vs subordinación, коми, схеми
  - `tenses/preterito-anterior` — hube + participio (рідкісний, літ.; чим замінювати)
  - `prepositions/common-constructions` — ganas de, dejar de, soñar con, casarse con, consistir en…
  - `verbs/pronominal-verbs` — levantarse / irse / olvidarse / comerse, групи, позиція
  - `tenses/tenses-overview` — карта індикативу, ключові опозиції, регіональні нотатки
  - `periphrases/deber-poder-soler` — обов’язок / можливість / звичка; deber vs tener que vs hay que

Усі сторінки: логіка, таблиці, MinPair, Mistake, Note(uk+region), related на існуючі slug.

### Метрики зараз
- **96 контент-сторінок** (~64% від орієнтира 150+).
- Закриті: збільшувальні, карибський варіант, складені речення, карта часів, pronominal, ключові модальні, стійкі прийменникові конструкції, pretérito anterior (для повноти).

### Наступне (P3-3 / фінішна пряма)
- Поглибити thin-сторінки за потреби (аудит якості).
- word-formation: якщо треба окремо derivation / складні слова.
- regional: leísmo уже є; можна central-america або Andean за бажанням.
- verbs: auxiliaries (haber/ser/estar як допоміжні) — якщо ще немає окремо.
- sentence-structure: se impersonal окремо, якщо se-сторінка не покриває.
- spelling: уже є b-v, c-z-s-g-j, h-y-ll, punctuation — перевірити повноту.
- QA: `npm run validate` + `links` + `build:full` на поточному обсязі.
- Потім — полірування, внутрішні лінки в обидва боки, featured/popular, meta.

---
