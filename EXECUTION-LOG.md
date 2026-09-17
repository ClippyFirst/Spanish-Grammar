# 📒 Лог виконання — Перебудова за audit + plan-standardization

> Джерела: `audit-results-profound.md`, `plan-standardization-prompts.md`,
> `prompt_themes.txt`, `prompt_content.txt`, `prompt_website.txt`.
> Оновлюється після кожної фази.

---

## 2026-09-11 — Фаза 0: Стабілізація збірки (DONE ✅)

### Прочитано
- [x] `audit-results-profound.md`, `plan-standardization-prompts.md` (повністю)
- [x] `prompt_themes.txt` (63 розділи), `prompt_content.txt` (шаблон A–L), `prompt_website.txt` (DoD)
- [x] `content-plan.md`, `audit 09092026.md`, `QA-08-09-2026.md`, `README.md`
- [x] `src/content.config.ts`, `src/utils/content.ts`, `src/data/categories.ts`, `data/categories.ts`
- [x] Всі `src/pages/**`, `src/layouts/**`, `src/components/**`

### Виправлено (збірка 🔴 → ✅)
1. YAML-двокрапки в `title_*`: `prepositions/place.mdx`, `prepositions/time.mdx` — закавичено. Правило: рядок з `:` мусить бути в лапках.
2. `src/data/categories.ts:83` — невалідний символ `'` (U+0458) в `Кон'југація` → `Конʼюгація` (U+02BC). Ламав esbuild.
3. `data/categories.ts:69,87` — одинарні лапки з апострофом (`об'єктних`) → `"..."`.
4. `time.mdx:85` — `uk: 'З понеділка до п'ятниці.'` (апостроф рве acorn) → подвійні лапки. Правило: MDX-пропси з українським текстом — завжди `"..."`.
5. `comparisons/*.mdx`: зайві `..`, незакриті `why="...«"`, `<em>` всередині JS-пропсів (`past-tenses`, `por-para`) — виправлено на plain text + закриті дужки.
6. `comparisons/index.astro`: `../layouts/` → `../../layouts/`.
7. Pagefind `import('/pagefind/pagefind-ui.js')` в `<script>` — Rollup failure. Всі скрипти (`search.astro`, `index.astro`, `Header.astro`) → `<script is:inline>` + `var` + try/catch fallback.
8. `comparisons/*.mdx` — додано явні імпорти компонентів (MDX-layout НЕ успадковує `mdxComponents`; той лише для content-колекції).
9. `parseId()` — додано strip `.mdx` (Astro v5 id `verbs/ser-estar.mdx` давав URL з `.mdx/`).
10. Видалено `verbs/scratch.mdx` + `pages/diag.astro`. Build: 50 → 48 сторінок.

### Перевірка
- `npm run build` → ✅ 48 pages. `npm run build:full` → ✅ Pagefind indexed (warn про `uk` stemming — очікувано).

### Правила на майбутнє
- YAML з `:` — завжди кавичити. MDX-пропси — завжди `"..."`. Ніякого HTML в JS-пропсах. Comparison-mdx — явні імпорти. Рантайм-імпорти — лише `is:inline`.


## 2026-09-11 — Фаза 1.1: Єдине джерело категорій (DONE ✅)

- `src/data/categories.ts` — єдине джерело (16 категорій).
- `data/categories.ts` (legacy, інша схема) → re-export shim + deprecated/TODO delete.
- Наступне: перевести імпорти на єдиний шлях + видалити `data/categories.ts`.

## 2026-09-11 — Фаза 0.5: Контент-хотфікси (DONE ✅)

- `relative-pronouns.mdx`: вигаданий Mistake → реальна пара `en que → en la que`; `предложное` → `antecedente`; мертві related → реальні + переписано блок Пов'язаних тем.
- `alphabet-pronunciation.mdx`: related `orthography/spelling` → `genero/definite-indefinite/presente-de-indicativo`; `/es/spelling/` (404) → 3 реальні URL.
- `objeto-directo-indirecto.mdx`: `imperative` → `personal-pronouns-omission`.
- `voseo.mdx`: `imperative` → `personal-pronouns-omission`.
- `presente-de-indicativo.mdx`: `periphrastics-ir-a` → `estar-gerundio`.
- `preterito-perfecto.mdx`: `participle` → `ser-estar`.

## 2026-09-11 — Фаза 1.2: QA-скрипти + гігієна (DONE ✅)

- `scripts/validate-content.mjs` (`npm run validate`): 24 files, 0 errors.
- `scripts/check-links.mjs` (`npm run links`): 37 URLs, 0 broken.
- `package.json`: +validate/links/qa. `.gitignore`: *.log, OUT.txt, diag.txt, *.cjs, checkbuild.ps1.

## НАСТУПНЕ (за plan-standardization-prompts.md)

### Фаза 1 (завершити)
- [x] Видалити `data/categories.ts` (DONE: коміт `41ab899`, фізично відсутній); `git rm` 17 артефактів (DONE: той самий коміт).
- [x] Порожні директорії — DONE: на диску їх нема (`dir src/content/es` → 13 категорій без вкладених порожніх); в git їх і не було.
- [x] `npm run build:full` → 48 pages + Pagefind без `no html lang` (DONE 2026-09-12: `Indexed 48 pages, 1 language uk`, лишився лише очікуваний `uk stemming`).
- [x] `ComparisonLayout` «Інші порівняння» 3 → 5 (DONE). `.gitignore`: прибрано `!pc/pt/pw_full.log` (DONE).

### Фаза 2 — Стандарт сторінки
- Золотий стандарт `ser-estar.mdx` (prompt_content p.13, A–L). Прогнати 24 сторінки. Critical Depth першими.
- [x] Batch 1–3 (DONE). ✅ Фаза 2 ЗАВЕРШЕНА.

### Фаза 3 — Нові сторінки
- [x] Batch P1-1 … P2-3 (див. попередні записи).
- [x] Batch P2-4 (2026-09-17, 7 файлів, 73 → 80).
- [x] **Batch P3-1 (2026-09-17, коміт `646a618`, 8 файлів, 80 → 88 сторінок)** — критичні прогалини для повноцінного довідника:
  - `regional/leismo-laismo-loismo` — leísmo de persona (RAE-прийнятний), laísmo/loísmo (ні), стратегія для UA
  - `pronouns/double-object-pronouns` — me lo / se lo, порядок OI+OD, le→se, позиція
  - `moods/when-not-subjunctive` — creo/sé + ind, cuando + минуле, відносні з відомим антецедентом, aunque факт
  - `nouns/irregular-plurals` — z→c, -ión, examen/exámenes, crisis незмінні
  - `articles/special-cases` — el agua / el águila, прикметник лишається жіночим, al/del
  - `tenses/sequence-of-tenses` — consecutio: quiero que venga → quería que viniera, reported speech
  - `adjectives/meaning-by-position` — gran/grande, pobre, viejo, nuevo, puro…
  - `moods/imperative-pronouns` — dámelo / no me lo des, наголос, enclíticos
- Усі сторінки ґрунтовні: логіка + винятки + MinPair + Mistake + Note(uk+region) + related на реальні URL.
- **Фокус партії:** теми, якими реально користуються щодня (займенники, subjuntivo-межі, артиклі-пастки, імператив).

### Метрики зараз
- **88 контент-сторінок** (~59% від орієнтира 150+). Критичні «щоденні» теми закриті значно краще.
- Наступне (P3-2): 
  - word-formation/augmentatives + derivation
  - regional/caribbean (або Antilles)
  - verbs/reflexive-verbs (якщо se-сторінка недостатньо глибока) / pronominal verbs
  - sentence-structure/compound-complex
  - tenses/overview або pretérito anterior (рідкісний, але для повноти)
  - prepositions/common-constructions
  - будь-які thin-сторінки — поглибити за аудитом
- QA: validate + links + build після стабілізації батчу.

---

## 2026-09-11 — Синхронізація з remote (ВИЯВЛЕНО ⚠️)

- Виявлено: поки йшла перебудова, колега/процес закомітив `5e51d93`… HEAD уже містив фази 0–1.2.

