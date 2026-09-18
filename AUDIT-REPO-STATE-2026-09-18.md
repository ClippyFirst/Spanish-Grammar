# 🏛️ АУДИТ СТАНУ РЕПОЗИТОРІЮ — 2026-09-18 (роботи, не тем)

> **Статус:** фінальний знімок стану робіт на `HEAD main 354492b` (2026-09-18).
> **Правило незмінності:** цей файл ЗАБОРОНЕНО перезаписувати.
> Дозволено лише ДОПИСУВАТИ: нові аудити = нові файли з новою датою
> (`AUDIT-REPO-STATE-YYYY-MM-DD.md`), а поточна робота — новими комітами
> + дописами в `EXECUTION-LOG.md`. Старий текст не стирається.

---

## 1. Метод аудиту

1. `git log --oneline` (94 коміти), `git status` (clean), branch/remote.
2. Інвентаризація кореня + `src/content/es/**/*.mdx` + `src/pages/comparisons/*.mdx`.
3. Запуск валідаторів: `validate-content.mjs`, `check-links.mjs`.
4. Звірка `TOPICS-COMPLETE-UA.md` vs `TOPICS-COVERAGE-AUDIT-1/2.md` vs `EXECUTION-LOG.md`.
5. Перевірка `dist/`, `content.config.ts`, `categories.ts`, `deploy.yml`, `astro.config.mjs`.

---

## 2. Знімок репозиторію (факт на 2026-09-18 ~10:27 +0300)

- Гілка / HEAD: `main` = `354492b docs: append log — §1 fundamentals reference pass`.
- Remote: `origin https://github.com/ClippyFirst/Spanish-Grammar.git`, синхронізовано.
- Дерево: `clean`. Історія: 94 коміти; ритм 18.09 — пари `content:*` + `docs: log`.
- Контент `src/content/es`: 169 MDX у 16 категоріях; + 5 MDX comparisons = 174 MDX у `src`.
- Валідація: `169 files, 168 slugs, 16 categories — OK, no blocking errors`.
- Попередження (2, неблокувальні): `moods/imperative-overview → related imperative`,
  `regional/southern-cone → related argentina` (фільтруються в рантаймі).
- Лінки: `169 files, 185 known URLs, 0 broken /es/ links`.
- Збірка: `dist/` присутній (`index.html` є), `content.config.ts` на місці.
- Стек: Astro 5 + MDX + sitemap + TS + Pagefind; `output: static`, `build:full`.
- CI: `deploy.yml` = `npm ci → validate → links → build:full` → pages; деплой з `main` авто.
---

## 3. Контент: 169 MDX за категоріями

- adjectives 9, adverbs 5, articles 6, conjunctions 6, fundamentals 9 (еталон 08a876b),
  moods 12, nouns 6, periphrases 6, prepositions 11, pronouns 18, regional 11,
  sentence-structure 21, spelling 9, tenses 14, verbs 22,
  word-formation 4 — НАЙТОНША, кандидат N1 на посилення.

Силабус `TOPICS-COMPLETE-UA.md` (449 рядків / 32.5 KB) — суперінсет усіх версій,
PCIC-вирівняний + полярність/фокус §17. ЕТАЛОН ТЕМ: формулювання не чіпати.

Покриття: `TOPICS-COVERAGE-AUDIT-1.md` (§1–9) — 0 ❌ (все ✅/🟡 після AUDIT-1,
фікс 47bb42b, еталон §1 08a876b). `TOPICS-COVERAGE-AUDIT-2.md` (§10–21) —
РОБОЧА ЗОНА, там лишаються ❌ (дефективні дієслова, подвійні participios,
deber/deber de, haber de, зміна стану, погода, сприйняття, каузатив, дейксис;
повний перелік — тільки в самому файлі).

---

## 4. Техніка: добре / борги

Добре: чистий main, валідатори зелені, 0 битих /es/ лінків, CI з гейтами,
стабільна модель (content.config.ts без slug — правильно; categories.ts —
єдине джерело 16 категорій), компоненти MDX + лейаути + Pagefind на місці.

Борги (некритичні, зафіксовані):
1. word-formation — лише 4 стор.
2. 2 WARN у related (див. §2) — закрити окремим fix, не мовчки.
3. node_modules/dist/.astro роздувають лічильник файлів (12096 з залежностями) —
   в git не йдуть (gitignore), це норма.
4. Старі документи (audit 09092026, audit-results-profound,
   plan-standardization-prompts, content-plan на 412 рядків) містять застарілі
   цифри (24 стор., ~11%, build ❌) — НЕ ПЕРЕПИСУВАТИ, вони історичні.
   Актуальний стан — тільки цей файл + EXECUTION-LOG.md.
5. AUDIT-2 (§10–21) як посекційний reference-pass ще не стартовано (зроблено лише §1).

---

## 5. ЗАЛІЗНЕ ПРАВИЛО: тільки дописувати, НЕ переписувати

1. Жоден аудит не редагується заднім числом. Помилка в старому — новий розділ/файл
   з датою і посиланням на старий; старий лишається як є.
2. Силабус TOPICS-COMPLETE-UA.md — незмінний за формулюваннями. Лише розширення
   новими темами окремим комітом; видалення/переформулювання — заборонено.
3. TOPICS-COVERAGE-AUDIT-1/2.md — лише зміна позначок ✅/🟡/❌ + slug. Теми не чіпати.
4. EXECUTION-LOG.md — append-only (шапка файлу це вже вимагає). Кожен content-коміт
   має парний docs: log. Без запису робота вважається незавершеною.
5. Цей файл — заморожений знімок. Наступний стан = новий файл AUDIT-REPO-STATE-YYYY-MM-DD.md.

---

## 6. Скелет плану подальших дій (очікується, по порядку)

Деталі тем — тільки з TOPICS-COVERAGE-AUDIT-2.md. Тут лише скелет.

- [ ] Крок 0 — Гігієна: npm run validate + links; чистий git status.
- [ ] Крок 1 — AUDIT-2 хвиля (§10 verbs → §11 tenses → §12 moods → §13 periphrases →
      §14 sentence-structure → §15 word-formation → §16 spelling → §17 micro/polarity →
      §19–21 regional/register): на кожен § один content-коміт + один docs: log +
      оновлення лише позначок у AUDIT-2.
- [ ] Крок 2 — Reference-pass за зразком §1 (08a876b): §2 spelling → §3 nouns → …
      до структури «довідка → вживання → помилки UA → регіон → related», без CEFR у тексті.
- [ ] Крок 3 — Борги: word-formation першим; 2 WARN related; тонкі 🟡
      (exclamatives, estar-de-ser-de, como-excepto, mismo-uno-generic) до глибини C2.
- [ ] Крок 4 — Гейти: npm run qa (validate+links+build) → build:full → Pagefind → push main.
- [ ] Крок 5 — Знімок: після кожного § або хвилі — новий AUDIT-REPO-STATE-YYYY-MM-DD.md.

---

## 7. Обов'язкове: ВСЕ КОМІТИТЬСЯ І ЛОГУЄТЬСЯ

- Кожна дія = коміт (content:/docs:/fix:/chore:). Дрібних правок без коміту немає.
- Кожен змістовний коміт = запис у EXECUTION-LOG.md (дата → хеш → що → що далі).
- Жодних force-push / amend запушених комітів. Виправлення — лише новим комітом.
- Перед push: git status чистий, validate + links зелені.

*Згенеровано з HEAD 354492b. Наступний аудит — новим файлом, цей — не чіпати.*

