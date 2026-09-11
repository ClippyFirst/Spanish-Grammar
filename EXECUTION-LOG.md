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
- [ ] Видалити `data/categories.ts`; `git rm` артефактів (OUT.txt, diag.txt, build*.log, *.cjs, checkbuild.ps1, pc/pt/pw_full.log).
- [ ] Порожні директорії (adverbs/, conjunctions/subordinating/ …) — видалити або .gitkeep + TODO.
- [ ] `npm run build:full` → 48 pages + Pagefind без `no html lang`.

### Фаза 2 — Стандарт сторінки
- Золотий стандарт `ser-estar.mdx` (prompt_content p.13, A–L). Прогнати 24 сторінки. Critical Depth першими.

### Фаза 3 — Нові сторінки (P1 з content-plan.md, ціль 35)
- Порядок: articles/nouns/adjectives/adverbs → pronouns → conjunctions → prepositions → verbs → tenses → moods → sentence-structure. Кожна: `npm run validate` перед комітом.

### Метрики зараз
- Build OK 48 pages | Pagefind OK | validate 0 errors | links 0 broken | Контент 24/150+ (~16%).

---

## 2026-09-11 — Синхронізація з remote (ВИЯВЛЕНО ⚠️)

- Виявлено: поки йшла перебудова, колега/процес закомітив `5e51d93 feat: add validation scripts and improve header interactivity` (27 файлів, 338+/296-) — він містить ТІ САМІ виправлення, що робились локально (YAML-кавички, `data/categories` shim, validate/links скрипти, related-хотфікси, видалення scratch/diag, is:inline скрипти).
- `git status` чистий: локальні правки тотожні HEAD — окремий коміт не потрібен, дублювати нічого.
- Єдиний незакомічений файл: `EXECUTION-LOG.md` (цей журнал, untracked). Наступна дія: `git add EXECUTION-LOG.md && git commit -m "docs: add execution log for audit-driven rebuild (phases 0-1.2)" && git push`.
- Після коміту логу: продовжити з Фаза 1 (завершити) за планом вище. Жодних відкатів не робити — HEAD вже містить фазу 0–1.2.


