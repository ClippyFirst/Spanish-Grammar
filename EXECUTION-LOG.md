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
- [x] Batch 1 (2026-09-12, коміт `cd979ed`, 13 файлів): gustar (+region-Note), por-para (+Mistake, +comparison-link), presente-de-indicativo (`indicatorio`→`indicativo`), personal-a (+region-Note), genero (related `nouns`→`ser-estar`, category-links), definite-indefinite (related `nouns`→`ser-estar`, +adjective-link), hay-vs-estar (RU-блок `why`→UK, `exo`→нормальний short, дублікат keyword, +region-Note), coordinating (`Conjuncións coordinadoras`→`Conjunciones coordinantes`, `yu`→прибрано, related→реальні, y/e-правило переписано, мертві лінки→реальні), personal-pronouns-omission (RU-фрагменти `Warsaw/тоже живут`→UK, Mistakes переписано, +uk-Note/+region-Note, `Pрезентативний`→`Теперішній`), regional-overview (+leísmo-MinPair, +Mistake, +related), voseo (+Mistake, +uk-Note, +related), place (вигаданий Mistake→реальна пара en/a, +uk-Note/+region-Note, related→реальні), time (RU-keywords→UK, related→реальні, MinPair-кавички, +uk-Note/+region-Note).
- Перевірка batch 1: validate 0 errors, links 0 broken, build 48 pages ✅. Push ✅.
- [x] Batch 2 (2026-09-12, коміт `c476b5e` від паралельного процесу, 6 файлів — перевірено, відповідає стандарту): subjuntivo-presente (related→реальні, MinPair-кавички, +2-й MinPair es/sea, +region-Note), objeto-directo (short без хибного «узгодження з минулим часом», +MinPair lo/le, +uk-Note), negation (related `sentence-structure`→`personal-pronouns-omission`, +MinPair nadie/no, +region-Note, мертвий лінк→реальний), preterito-indefinido/imperfecto/perfecto (крос-MinPair indefinido/imperfecto/perfecto, +Mistakes, +region-Notes, +comparison/past-tenses лінки, мертвий `/es/verbs/`→реальні).
- Перевірка batch 2: validate 24 files 0 errors, links 37 URLs 0 broken, build 48 pages ✅ (перевірено 2026-09-13).
- [x] Batch 3 (2026-09-13, 5 файлів): estar-gerundio (+MinPair proceso/hábito, +region-Note; related вже чисті), adjective-agreement (+MinPair pobre/hombre, +region-Note, +articles-link, related +personal-a), alphabet-pronunciation (+MinPair si/sí, +region-Note, +regional-link, related +regional-overview), por-para (MinPair-кавички, +region-Note — решта вже в batch 1), personal-pronouns-omission/regional/voseo — перевірено, без змін (вже стандарт batch 1).
- Перевірка batch 3: validate 0 errors, links 0 broken, build 48 pages ✅.
- ✅ Фаза 2 ЗАВЕРШЕНА: всі 24 сторінки відповідають чек-листу — MinPair на ключових контрастах, region-Note на кожній сторінці, related/links лише на реальні URL, UA-кавички в MDX-пропсах, жодних RU-фрагментів.

### Фаза 3 — Нові сторінки (P1 з content-plan.md, ціль 35)
- [x] Batch P1-1 (2026-09-13, 12 файлів, 24 → 36 сторінок): articles/zero-article, articles/neutral-lo, nouns/numero-plural, pronouns/demonstrative-pronouns, pronouns/possessive-pronouns, tenses/pluscuamperfecto, tenses/futuro-simple, moods/subjunctive-triggers, moods/imperativo, sentence-structure/word-order, sentence-structure/questions, sentence-structure/double-negation.
- Перевірка: validate 36 files 0 errors, links 49 URLs 0 broken, build 60 pages ✅.
- [x] Batch P1-2 (2026-09-13, 9 файлів, 36 → 45 сторінок — закомічено паралельним процесом як `359ebd7`, перевірено): pronouns/se-reflexive-impersonal-passive (5 функцій se), pronouns/interrogative-pronouns (тільди, qué/cuál), pronouns/indefinite-pronouns (algo/nada, algún скорочення), tenses/condicional-simple (si+subjuntivo, заборона condicional після si), periphrases/tener-que-hay-que, periphrases/ir-a-infinitivo, prepositions/verbs-with-prepositions (pensar en/soñar con/casarse con), sentence-structure/conditional-sentences (3 типи), sentence-structure/reported-speech (зсув часів).
- Перевірка: validate 45 files 0 errors, links 58 URLs 0 broken, build 69 pages ✅.
- [x] Batch P1-3 (2026-09-14, 4 файли, 45 → 49 сторінок): periphrases/frequent-periphrases (soler/acabar-de/volver-a/seguir/dejar-de), pronouns/tu-usted-vosotros-ustedes (tuteo/ustedeo, vosotros-узгодження), sentence-structure/passive-voice (ser-пасив vs se-пасив), adverbs/formation-and-position (-mente, muy/mucho, tan/tanto).
- Перевірка: validate 49 files 0 errors, links 63 URLs 0 broken, build 74 pages ✅.
- [x] Batch P1-4 (2026-09-14, 4 файли, 49 → 53 сторінки): conjunctions/subordinating (aunque/cuando — індикатив/субхунтив, заборона futuro після cuando), verbs/conjugations (-ar/-er/-ir, таблиця презенса), verbs/irregular-verbs (ексцентрики, чобіт e→ie/o→ue, орфографічні c→zc), spelling/accent-marks (agudas/llanas/esdrújulas, діакритичні пари, перша сторінка spelling).
- Перевірка: validate 53 files 0 errors, links 68 URLs 0 broken, build 79 pages ✅.
- [x] Batch P2-1 (2026-09-17, 4 файли, 60 → 64 сторінки): spelling/h-y-ll (німа h, haya/halla, yeísmo), spelling/punctuation-capitalization (¿?/¡!, дні з малої, кома перед pero), word-formation/prefixes-suffixes (re-/des-/in-, -ción ЖІН/-miento ЧОЛ, асиміляція im-), regional/seseo-ceceo-distincion (карта, престиж, вибір seseo для українця).
- Перевірка: validate 64 files 0 errors, links 80 URLs 0 broken, build 91 pages ✅.
- word-formation тепер має 2 сторінки (diminutives + prefixes-suffixes); spelling — 5 (повна база: accent, b-v, c-z-s-g-j, h-y-ll, punctuation); regional — 4.

### Метрики зараз
- 64 контент-сторінки (P1 60 + P2-1 4). Build OK 91 pages | validate 0 errors (64 files) | links 0 broken (80 URLs) | Контент 64/150+ (~43%).
- ✅ Фаза 5/6 (deploy-готовність, коміти `ffe6176`+`d543872`): `withBase()` у всіх навігаціях (header+mobile, breadcrumbs, search-redirect, pagefind-імпорт, 404, comparisons), `.github/workflows/deploy.yml` (validate+links+build:full, PUBLIC_BASE/SITE_URL), prod-білд перевірено: canonical `.../Spanish-Grammar/...`, посилання `/Spanish-Grammar/...`, Pagefind 79 pages/4465 words.
- Наступне — P2-2: adjectives (position, degrees), adverbs (frequency/time), moods (imperfecto-subjuntivo), tenses (ir-a як час), sentence-structure (relative-clauses, subordinate) — ~8 файлів.

---

## 2026-09-11 — Синхронізація з remote (ВИЯВЛЕНО ⚠️)

- Виявлено: поки йшла перебудова, колега/процес закомітив `5e51d93 feat: add validation scripts and improve header interactivity` (27 файлів, 338+/296-) — він містить ТІ САМІ виправлення, що робились локально (YAML-кавички, `data/categories` shim, validate/links скрипти, related-хотфікси, видалення scratch/diag, is:inline скрипти).
- `git status` чистий: локальні правки тотожні HEAD — окремий коміт не потрібен, дублювати нічого.
- Єдиний незакомічений файл: `EXECUTION-LOG.md` (цей журнал, untracked). Наступна дія: `git add EXECUTION-LOG.md && git commit -m "docs: add execution log for audit-driven rebuild (phases 0-1.2)" && git push`.
- Після коміту логу: продовжити з Фаза 1 (завершити) за планом вище. Жодних відкатів не робити — HEAD вже містить фазу 0–1.2.


