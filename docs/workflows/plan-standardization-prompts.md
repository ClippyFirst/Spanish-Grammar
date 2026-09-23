# 📋 План приведення проєкту GrammarWay ES до стандартів трьох засадничих промтів

> **Мета:** докладний, етапний та виконуваний план, який перетворює поточний
> каркас сайту (25 сторінок, збірка ламається) на повноцінний довідник, що
> відповідає трим промтам: `prompt_themes.txt` (повнота тем), `prompt_content.txt`
> (якість сторінки), `prompt_website.txt` (архітектура та UX).
>
> **Готовність:** Цей план розгорнуто на 6 фаз + робочий процес виробництва контенту.
> Кожна фаза має конкретні, вимірювані результати та критерії прийнятної якості.

---

## 1. Принципи та незмінні стандарти

Цей план керується трьома незмінними принципами, які витягнуті безпосередньо з трьох промтів. **Жоден випадковий відхилення від них не допускається.**

| Принцип | Джерело | Тлумачення для проєкту |
|---|---|---|
| **P1. Повна тематична карта** | `prompt_themes.txt` §63 | Кожен пункт картки, що описує реальну граматичну/синтаксичну реальність, повинен мати сторінку або бути охопленим у межах іншої сторінки. |
| **P2. Глибока, логічна, україномовна сторінка** | `prompt_content.txt` §13, §16, §18 | Кожна сторінка — це не «стаття», а довідкова одиниція з обов'язковими розділами (визначення → утворення → використання → винятки → помилки → українські нюанси → регіональні → пов'язані). |
| **P3. Статичний, швидкий, зручний для пошуку довідник** | `prompt_website.txt` §26 (Definition of Done) | Чистий `astro build`, Pagefind працює, пошук знаходить теми українською/іспанською/англійською, мобільна/доступна/SEO-дружня. |

### 1.1 Незмінні обмеження (Non-Negotiables)

1. **Ніколи не писати CEFR у видимому тексті.** `cefr` допускається лише як внутрішній frontmatter-тег.
2. **Ніколи не вигадувати винятки або регіональні правила.** Якщо не впевнені — позначається як «спорний/змінний варіант» (§21 prompt_website).
3. **Ніколи не створювати вправ.** Це довідник, а не курс.
4. **Ніколи не створювати словникові списки.** Вокабула допускається лише для демонстрації граматики.
5. **Кожен важливий іспанський приклад має український переклад.**
6. **Всі `related`-посилання повинні вести на існуючі сторінки** (або бути видалені).
7. **Фронтматеріал валідується схемою** — будь-яка сторінка з невалідним frontmatter ламає збірку.

---

## 2. Матриця відповідності (Compliance Matrix)

Якщо будь-який пункт має статус ❌, весь план будується навколо його виправлення.

| # | Стандарт `prompt_website` | Поточний стан | План дії (розділ плану) | Статус |
|---|---|---|---|---|
| 1 | §6: не організовувати за CEFR | ✅ Відповідність | — | Готово |
| 2 | §22: статичний HTML, мінімум JS | ⚠️ Архітектура ✅, build ❌ | Фаза 0 | 🔴 Виправити |
| 3 | §26: Definition of Done | ❌ 5/9 пунктів | Фаза 4, 5 | 🔴 В процесі |
| 4 | §9: пошук (Pagefind) | ⚠️ Pagefind підключений, не індексує (build ❌) | Фаза 0.3 | 🔴 Виправити |
| 5 | §23: проєктна структура | ✅ | — | Готово |
| 6 | §10: дизайн сторінки | ✅ (GrammarLayout) | Фаза 2 | 🟡 Доналаштувати |
| 7 | §27: структура проєкту | ⚠️ дублікат categories.ts | Фаза 1.2 | 🟧 Виправити |

| # | Стандарт `prompt_content` | Поточний стан | План дії | Статус |
|---|---|---|---|---|
| 1 | §13: шаблон сторінки (11 розділів) | 🟡 4/25 повні, 18 часткові | Фаза 2 | 🟡 В процесі |
| 2 | §6: Deep (A–L) | 🟡 4/25 — глибокі | Фаза 2 | 🟡 В процесі |
| 3 | §17/18: точність, стиль | ⚠️ 2 помилки | Фаза 0.5 | 🟧 Виправити |
| 4 | §3: нема CEFR у тексті | ✅ 0 випадків | — | Готово |
| 5 | §2: українська мова | ✅ | — | Готово |

| # | Стандарт `prompt_themes` | Поточний стан | План дії | Статус |
|---|---|---|---|---|
| 1 | Повна карта (63 розділи, ~636 пунктів) | ❌ ~11 % | Фаза 3 | 🔴 В процесі |
| 2 | §63: фінальна перевірка повноти | ❌ 18/20 «ні» | Фаза 5 | 🔴 В процесі
| **Разом** | | | | ❌ 11 / 100 | 🔴 В процесі |

---

## 3. Фаза 0: Стабілізація (Build Fix + Clean Repo)

**Ціль:** `npm run build` має проходити успішно, Pagefind індексує, `dist/` створюється. Репозиторій має бути чистим.

**Критерій успіхи:** `npm run build && npm run serve` → локальний сайт працює, пошук працює.

### 3.1 Завдання (всього 7)

| № | Завдання | Кроки | Час | Приорітет |
|---|---|---|---|---|
| 0.1 | Виправити YAML-помилку у `place.mdx` | Додати лапки навколо `title_es` та `title_uk` | 1 год | 🔴 P0 |
| 0.2 | Виправити YAML-помилку у `time.mdx` | Додати лапки навколо `title_es` та `title_uk` | 1 год | 🔴 P0 |
| 0.3 | Перевірити всі `.mdx`/`.md` на YAML-синтаксис | Запустити `node scripts/validate-frontmatter.mjs` | 2 год | 🔴 P0 |
| 0.4 | Видалити `scratch.mdx` | `git rm src/content/es/verbs/scratch.mdx` | 5 хв | 🔴 P0 |
| 0.5 | Прибрати дублікат `categories.ts` | Залишити `src/data/categories.ts`, оновити імпорти в `src/content.config.ts` | 1 год | 🟧 P1 |
| 0.6 | Очищення тимпових файлів | Додати до `.gitignore`, видалити з репо: `OUT.txt`, `diag.txt`, `*.log`, `runbuild.cjs`, `system-info.cjs`, `convert.cjs`, `diag.cjs`, `fixnl.cjs`, `fixquotes.cjs` | 1 день | 🟧 P1 |
| 0.7 | Видалити порожні директорії | `conjunctions/subordinating/`, `pronouns/indefinidos/`, `pronouns/leismo-laismo-loismo/`, `sentence-structure/relative-clauses/` | 1 год | 🟧 P1 |

### 3.2 Скрипт валідації фронтматеріалу

Створити `scripts/validate-frontmatter.mjs`:

```js
// Перевіряє всі .mdx файли: frontmatter парситься без помилок, потрібні поля присутні
// та `category` відповідає дозволеному списку з categories.ts
```

**Потрібні поля обов'язкові для кожної сторінки:**

```yaml
title_es: string          # обов'язково, в лапках
title_uk: string          # обов'язково, в лапках
category: string          # обов'язково, зі списку дозволених
tags: string[]            # обов'язково (min 1)
cefr: "A1"|"A2"|"B1"|"B2"|"C1"|"C2"   # обов'язково
draft: boolean            # обов'язково (false для публічних сторінок)
description: string       # обов'язково (для SEO)
last_updated: date        # обов'язково
related: string[]         # необов'язково, але всі посилання мають бути валідними
```

### 3.3 CI Check (після Фази 0)

```yaml
# .github/workflows/ci.yml
name: CI
on: [push, pull_request]
jobs:
  validate:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
      - run: npm ci
      - run: node scripts/validate-frontmatter.mjs
      - run: npm run build
      - run: npm run validate:links
```

---

## 4. Фаза 1: Вирівнювання контентної архітектури

**Ціль:** забезпечити, щоб каталог `src/content/es/` мав ідеальну відповідність з `prompt_themes.txt`.

### 4.1 Структура каталогів (16 категорій)

```
src/content/es/
├── adjectives/              теми §3
├── articles/                теми §4
├── conjunctions/            теми §5
├── fundamentals/            теми §1
├── moods/                   теми §6
├── nouns/                   теми §7
├── periphrases/            теми §8
├── prepositions/            теми §9
├── pronouns/                теми §10
├── sentence-structure/      теми §11
├── tenses/                  теми §12
├── verbs/                   теми §13
├── regional/                теми §14
└── comparisons/             cross-cutting, prompt_content §8
```

### 4.2 Мапа тем (Theme Coverage Map)

Фіксовано: `src/theme-map.ts` — JSON-файл, що мапує кожен пункт `prompt_themes` на конкретний slug сторінки. Приклад:

```ts
export const themeMap: Record<string, string> = {
  "definite-articles": "articles/definite-indefinite",
  "ser-vs-estar": "verbs/ser-estar",
  "preterite-imperfect": "tenses/preterito-imperfecto",
};
```

**Валідація:** скрипт `validate:links` перевіряє, що кожен `related` slug існує у `themeMap` або у `content/es/`.

---

## 5. Фаза 2: Вирівнювання структури сторінок (Standardization)

**Ціль:** кожна з 25 існуючих сторінок (після видалення `scratch.mdx` → 24) повністю відповідає шаблону `prompt_content.txt` §13.

### 5.1 Шаблон сторінки (12 обов'язкових розділів)

Кожна сторінка `.mdx` повинна містити ці розділи у цьому порядку:

| № | Розділ | `prompt_content` | Компонент | Обов'язково? |
|---|---|---|---|---|
| 1 | Problem Statement | §1 | `<Mistake>` або вбудований текст | ✅ Так (1 випадок) |
| 2 | Core Definition | §2 | `<Formula>`, `<Token>` | ✅ |
| 3 | Morphology / Formation | §3 | `<Conjugation>`, `<Token>` | ⚠️ Якщо застосовно |
| 4 | Usage Contexts | §4 | `<Example>` | ✅ |
| 5 | Common Mistakes | §5 | `<Mistake bad good why>` | ✅ |
| 6 | Ukrainian Notes | §6 | `<Note kind="uk">` | ✅ |
| 7 | Regional Variations | §7 | `<Note kind="region">` | ✅ (якщо є) |
| 8 | Related Topics | §8 | frontmatter `related` | ✅ |
| 9 | Sources & References | §9 | `prompt_content` §5 (accuracy) | ✅ |
| 10 | Exercises | — | — | ❌ Ні (довідник, не курс) |
| 11 | CEFR Tags | — | — | ❌ Ні (лише frontmatter) |
| 12 | Word List | §10 | — | ❌ Тільки для демонстрації граматики |

### 5.2 Аудит існуючих сторінок (24 сторінки після видалення scratch.mdx)

| Сторінка | Шаблон §13 | Глибина (A–L) | Українська | CEFR в тексті | related-перевірка | Оцінка | Дія |
|---|---|---|---|---|---|---|---|
| fundamentals/alphabet-pronunciation | ✅ 8/12 | A,B,D,E,F | ✅ | ✅ | ✅ | 7/10 | Потрібен `related` до ser-estar (фонетика) |
| articles/definite-indefinite | ✅ 11/12 | A,B,C,D,E,F,G,H,I,J,K,L | ✅ | ✅ | ✅ | 9/10 | ✅ Золотий стандарт |
| nouns/genero | ✅ 11/12 | A,B,D,E,F,G,H,J,K,L | ✅ | ✅ | ✅ | 9/10 | ✅ Золотий стандарт |
| prepositions/por-para | ✅ 10/12 | A,B,C,D,E,F,G,H,J,K,L | ✅ | ✅ | ⚠️ 1 dead-link | 8/10 | Виправити `related` |
| prepositions/place | ✅ 10/12 | A,B,D,E,F,G,H,J,L | ✅ | ✅ | ✅ | 8/10 | Потрібен `Sources` розділ |
| prepositions/time | ✅ 10/12 | A,B,D,E,F,G,H,J,L | ✅ | ✅ | ✅ | 8/10 | Потрібен `Sources` розділ |
| verbs/ser-estar | ✅ 12/12 | A,B,C,D,E,F,G,H,I,J,K,L | ✅ | ✅ | ✅ | 10/10 | ✅ Золотий стандарт |
| verbs/gustar | ⚠️ 8/12 | A,B,D,E,F,H,J,L | ✅ | ✅ | ✅ | 7/10 | Додати `Mistake`, `Sources`, `Regional` |
| moods/subjuntivo-presente | ⚠️ 9/12 | A,B,D,E,F,G,L | ✅ | ✅ | ⚠️ 1 dead-link | 7/10 | Виправити `related` |
| tenses/presente-de-indicativo | ⚠️ 9/12 | A,B,D,E,F,G,J,L | ✅ | ✅ | ✅ | 8/10 | Додати `Mistake`, `Sources` |
| tenses/preterito-imperfecto | ⚠️ 8/12 | A,B,D,E,F,G,J,L | ✅ | ✅ | ✅ | 7/10 | Додати `Mistake`, `Sources`, `Regional` |
| tenses/preterito-indefinido | ⚠️ 9/12 | A,B,D,E,F,G,J,L | ✅ | ✅ | ✅ | 8/10 | Додати `Mistake`, `Sources` |
| tenses/preterito-perfecto | ⚠️ 8/12 | A,B,D,E,F,G,J,L | ✅ | ✅ | ✅ | 7/10 | Додати `Mistake`, `Sources`, `Regional` |
| pronouns/objeto-directo-indirecto | ⚠️ 7/12 | A,B,D,F,G,J,L | ✅ | ✅ | ⚠️ 2 dead-links | 6/10 | Виправити `related`, додати `Sources` |
| pronouns/personal-a | ✅ 9/12 | A,B,D,E,F,G,J,L | ✅ | ✅ | ✅ | 8/10 | Додати `Sources` |
| pronouns/personal-pronouns-omission | ⚠️ 7/12 | A,B,D,F,G,L | ✅ | ✅ | ⚠️ 1 dead-link | 6/10 | Виправити `related`, додати `Mistake`, `Sources` |
| pronouns/relative-pronouns | ⚠️ 6/12 | A,B,D,F,J,L | ✅ | ✅ | ✅ | 5/10 | Виправити вигаданий виняток, додати `Sources`, `Mistake` |
| sentence-structure/negation | ✅ 10/12 | A,B,C,D,E,F,G,H,J,L | ✅ | ✅ | ✅ | 8/10 | Додати `Sources` |
| sentence-structure/hay-vs-estar | ⚠️ 8/12 | A,B,D,E,F,G,J,L | ✅ | ✅ | ✅ | 7/10 | Додати `Mistake`, `Sources` |
| conjugation/coordinating | ⚠️ 7/12 | A,B,D,F,G,J,L | ✅ | ✅ | ✅ | 6/10 | Додати `Mistake`, `Sources`, `Related` |
| adjectives/adjective-agreement | ⚠️ 8/12 | A,B,D,E,F,G,J,L | ✅ | ✅ | ✅ | 8/10 | Додати `Sources` |
| regional/regional-overview | ⚠️ 7/12 | A,B,D,F,G,L | ✅ | ✅ | ✅ | 6/10 | Додати `Mistake`, `Sources` |
| regional/voseo | ⚠️ 8/12 | A,B,D,E,F,G,J,L | ✅ | ✅ | ✅ | 7/10 | Додати `Sources`, `Mistake` |

### 5.3 Чек-лист стандартизації (для кожної сторінки)

Кожна нова/виправлена сторінка проходить цей чек-лист перед злиттям:

- [ ] frontmatter валідний (YAML-лапки на `title_es`/`title_uk`)
- [ ] `title_es` і `title_uk` в лапках, `category` в списку
- [ ] `cefr` присутній (лише у frontmatter, не в тексті)
- [ ] `draft: false`
- [ ] `description` для SEO (120–160 символів)
- [ ] `last_updated` актуальна дата
- [ ] `tags` містять ≥1 тему
- [ ] Всі `related` slug існують (validate:links)
- [ ] Core Definition: `<Formula>` + `<Token>` присутні
- [ ] Usage Contexts: ≥2 `<Example>` (es + uk)
- [ ] Common Mistakes: ≥1 `<Mistake bad good why>`
- [ ] Ukrainian Notes: ≥1 `<Note kind="uk">`
- [ ] Regional: `<Note kind="region">` (якщо застосовно)
- [ ] Sources: вказані джерела (якщо є)
- [ ] 0 CEFR згадок у тексті (проверка Ctrl+F "[ABC][12]")
- [ ] 0 словникових списків більше 3 слів
- [ ] 0 вправ (жодних "try it", "practice", "exercise")
- [ ] `scratch.mdx` відсутній з індексу (якщо є — видалити)

---

## 6. Фаза 3: Розширення покриття тем (Coverage Expansion)

**Ціль:** створити мінімум 150 сторінок, що охоплюють ≥80% пунктів з `prompt_themes.txt`.

### 6.1 Пріоритетний backlog (Priority 1 — 35 сторінок)

Ці сторінки мають бути створені першими. Кожна — це окрема тема з `prompt_themes`.

| № | Тема | Розділ `prompt_themes` | Категорія | Складність | Час на створення |
|---|---|---|---|---|---|
| 1 | Складні дієслова (phrasal verbs) | §15 | verbs | Medium | 4 год |
| 2 | Дієслово «хотіти» (querer) + накл. вживання | §16 | verbs | Medium | 3 год |
| 3 | Бажати, прохнути (gustar-like verbs) | §17 | verbs | Hard | 5 год |
| 4 | Інфінітивний вживання (infinitivo) | §18 | verbs | Medium | 3 год |
| 5 | Герундій / -ando/-iendo | §19 | verbs | Medium | 4 год |
| 6 | Дієприкметник (gerundio) | §20 | verbs | Medium | 3 год |
| 7 | Прикметник-дієслово (participio) | §21 | verbs | Hard | 5 год |
| 8 | Суб’єктні дієслова (subjuntivo) | §22 | moods | Hard | 6 год |
| 9 | Умовні речення (if-clauses) | §23 | sentence-structure | Hard | 6 год |
| 10 | Порівняльна ступеня (comparatives) | §24 | adjectives | Medium | 3 год |
| 11 | Найменший ступінь (superlatives) | §25 | adjectives | Medium | 3 год |
| 12 | Власте іменник (proper nouns) | §26 | nouns | Easy | 2 год |
| 13 | Абстрактні іменники | §27 | nouns | Medium | 3 год |
| 14 | Множина іменника (plural) | §28 | nouns | Medium | 3 год |
| 15 | Перенесення родового (feminine nouns) | §29 | nouns | Hard | 4 год |
| 16 | Показові займенники (demonstratives) | §30 | pronouns | Medium | 3 год |
| 17 | Власні займенники (possessives) | §31 | pronouns | Medium | 3 год |
| 18 | Перехідні vs неперерівні дієслова | §32 | verbs | Medium | 4 год |
| 19 | Дієслово «бути» (ser/estar) — глибокий | §33 | verbs | Hard | 5 год |
| 20 | Пасивне створення (pasiva) | §34 | verbs | Medium | 4 год |
| 21 | Present Progressive (presente progresivo) | §35 | tenses | Medium | 3 год |
| 22 | Past Continuous (imperfecto progresivo) | §36 | tenses | Medium | 3 год |
| 23 | Future Tense (futuro) | §37 | tenses | Hard | 4 год |
| 24 | Conditional (condicional) | §38 | moods | Hard | 4 год |
| 25 | Subjunctive in subordinate clauses | §39 | moods | Hard | 5 год |
| 26 | Questions in Spanish (interrogatives) | §40 | sentence-structure | Medium | 3 год |
| 27 | Word Order (порядок слів) | §41 | sentence-structure | Hard | 4 год |
| 28 | Emphasis (énfasis — lo + que) | §42 | sentence-structure | Hard | 5 год |
| 29 | Passive se | §43 | verbs | Hard | 4 год |
| 30 | Indirect speech (estilo indirecto) | §44 | sentence-structure | Hard | 6 год |
| 31 | Prepositional pronouns | §45 | pronouns | Medium | 3 год |
| 32 | Clitic placement rules | §46 | pronouns | Hard | 6 год |
| 33 | Direct vs Indirect object | §47 | pronouns | Medium | 3 год |
| 34 | Preposition contraction (a + el = al) | §48 | prepositions | Easy | 2 год |
| 35 | Multi-word prepositions | §49 | prepositions | Medium | 3 год |

### 6.2 Система тематичних карт

**Theme Map File (`src/theme-map.ts`):**
```ts
// Кожен ключ = slug з prompt_themes
// Кожне значення = шлях до .mdx файлу або null (якщо не створено)
export const themeMap: Record<string, string | null> = {
  "phrasal-verbs": null,              // створити в Phase 3, item 1
  "querer": null,                     // створити в Phase 3, item 2
  // ...
};
```

**Валідація покриття:** скрипт `scripts/validate-theming.mjs` читає `prompt_themes.txt`, парсить 63 розділи, і для кожного пункту перевіряє, чи є відповідні slug у `themeMap`.

### 6.3 Алгоритм створення нової сторінки

1. **Крок 1:** Вибрати тему з Priority 1 списку
2. **Крок 2:** Створити файл `src/content/es/<category>/<slug>.mdx` з frontmatter:
   ```yaml
   ---
   title_es: "Participio pasado"
   title_uk: "Дієприкметник"
   category: verbs
   cefr: "A2"
   draft: false
   description: "..."
   tags: ["verbs", "participles"]
   related: ["ser-estar", "preterito-perfecto"]
   last_updated: 2026-09-11
   ---
   ```
3. **Крок 3:** Заповнити шаблон (розділи з 5.2 чек-листа)
4. **Крок 4:** Провалідувати через `npm run validate:links`
5. **Крок 5:** Протестувати збірку `npm run build`
6. **Крок 6:** Додати slug у `theme-map.ts`

---

## 7. Фаза 4: Вирівнювання UX та архітектури (UX/Architecture Refinement)

**Ціль:** сайт повністю відповідає `prompt_website.txt` §10–§21 та має працюючий пошук/Pagefind.

### 7.1 UI-компоненти та їх використання

| Компонент | Файл | Стан | Дія |
|---|---|---|---|
| `<Formula>` | src/components/Formula.astro | Готово | Додати `type="affirm|neg|q"` валідацію |
| `<Token>` | src/components/Token.astro | Готово | Перевірити кольори на доступність (WCAG) |
| `<Conjugation>` | src/components/Conjugation.astro | Готово | Потрібен `type="stem|irregular|reflexive"` |
| `<Example>` | src/components/Example.astro | Готово | Перевірити, чи виводить `n` прикладів |
| `<MinPair>` | src/components/MinPair.astro | Готово | Потрібен `type="sound|meaning|grammar"` |
| `<Mistake>` | src/components/Mistake.astro | Готово | Додати `kind="false_friend|over_generalization|literal_translation"` |
| `<Note>` | src/components/Note.astro | Готово | Додати `kind="tip"`, `kind="warning"` |
| `<CompareTable>` | src/components/CompareTable.astro | 5 сторінок | Потрібно 15–25 сторінок comparisons/

### 7.2 Verb conjugation system ( дієвідміння)

**Шаблон компонента:**

```ts
interface Props {
  verb: string;
  stem: string;
  type: "stem" | "irregular" | "reflexive";
  notes?: string;
}
```

**Дієвідміння мають бути показані для:**
- present (presente)
- past (pretérito indefinido)
- future (futuro)
- conditional (condicional)
- subjunctive (subjuntivo presente)

### 7.3 Мобільна адаптація

| Секція | Стан | Дія |
|---|---|---|
| Таблиці порівняння | Не адаптовані | Додати `overflow-x: auto` на `.compare-table` |
| Дієвідміння | 3 колонки вузькі | Media query: 2 колонки на <768px |
| Мобільне меню | Гамбургер-меню | Перевірити, чи не перекриває контент |
| Ширина колонки | 70rem фіксовано | Дозволити розтягування до 100% на мобільних |

### 7.4 Доступність (A11y)

- `lang="uk"` у `BaseLayout` — готово
- `<h1>` на кожній сторінці (title_uk) — готово
- Кольори токенів — потрібна перевірка контрасту (WCAG 2.1 AA)
- `aria-label` у формі пошуку — відсутній
- Pagefind JS — потрібен `preload="metadata"`

---

## 8. Фаза 5: QA та автоматизація (Quality Assurance & Automation)

**Ціль:** автоматизована перевірка всіх стандартів запобігає регресіям.

### 8.1 Скрипти валідації

| Скрипт | Призначення | Команда | Перевіряє |
|---|---|---|---|
| `scripts/validate-frontmatter.mjs` | YAML + обов'язкові поля | `npm run validate:fm` | frontmatter syntax, required fields, category whitelist |
| `scripts/validate-links.mjs` | related → існуючі сторінки | `npm run validate:links` | dead internal links, theme-map coverage |
| `scripts/validate-content.mjs` | вміст сторінки | `npm run validate:content` | CEFR у тексті, вправи, словники, <5 випадків вглинику |
| `scripts/audit-themes.mjs` | покриття тем | `npm run audit:themes` | theme-map.ts vs prompt_themes.txt |
| `scripts/check-build.mjs` | збірка | `npm run build && npm run serve` | локальний тест повної збірки + SSR |

### 8.2 GitHub Actions CI

```yaml
name: CI
on: [push, pull_request]
jobs:
  validate:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
      - run: npm ci
      - run: npm run validate:fm
      - run: npm run validate:links
      - run: npm run validate:content
      - run: npm run build
      - run: npm run audit:themes
```

### 8.3 Критерії Definition of Done (DoD) на рівні PR

Кожен PR повинен проходити:
1. `npm run validate:fm` — 0 помилок
2. `npm run validate:links` — 0 dead links
3. `npm run validate:content` — 0 CEFR, 0 вправ, 0 словників
4. `npm run build` — успішний
5. `npm run audit:themes` — не зменшує покриття

### 8.4 Тестові сторінки та E2E

Створити `e2e/` директорію з тестами:
- `homepage.spec.ts` — hero, пошук, категорії
- `grammar-page.spec.ts` — `<Formula>`, `<Token>`, `<Example>` present
- `search.spec.ts` — Pagefind індексовано, пошук працює

---

## 9. Фаза 6: Деплой та підтримка (Deployment & Maintenance)

**Ціль:** сайт задеплоєний на production, з CI/CD pipeline.

### 9.1 Визначення Deployment Readiness

Згідно з `prompt_website` §26, сайт вважається «ready» якщо:

| Критерій §26 | Статус | Примітка |
|---|---|---|
| fast | ⚠️ Планується | Астро-оптимізований, треба Lighthouse |
| clean | ⚠️ В процесі | Треба видалити junk-файли (Фаза 0) |
| deep | ❌ | ~11% покриття |
| searchable | ❌ | Pagefind не індексує (build ❌) |
| structured | ✅ | schema.org JSON-LD у BaseLayout |
| mobile | ⚠️ | Треба протестувати на реальних пристроях |
| accessible | ⚠️ частково | WCAG перевірка потрібна |
| SEO | ⚠️ | sitemap.xml, robots.txt, og:meta |
| static-first | ✅ | Astro output: static |
| easy to maintain | ⚠️ | Треба CI + скрипти валідації |

### 9.2 CI/CD Pipeline

```yaml
# .github/workflows/deploy.yml
name: Deploy
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
      - run: npm ci
      - run: npm run validate:fm
      - run: npm run validate:links
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: dist
```

---

## 10. Робочий процес виробництва контенту (Content Production Workflow)

### 10.1 Цикл створення сторінки

```
┌─────────────┐
│ 1. Тема    │  ← theme-map.ts, content-plan.md (Priority 1)
└──────┬──────┘
       │
┌──────▼──────┐
│ 2. Шаблон  │  ← створити .mdx з frontmatter
└──────┬──────┘
       │
┌──────▼──────┐
│ 3. Контент  │  ← заповнити 12 розділів
└──────┬──────┘
       │
┌──────▼──────┐
│ 4. Валідація│  ← npm run validate:fm + links + content
└──────┬──────┘
       │
┌──────▼──────┐
│ 5. Будівництв│  ← npm run build
└──────┬──────┘
       │
┌──────▼──────┐
│ 6. Commit  │  ← відповідний commit message
└─────────────┘
```

### 10.2 Commit message conventions

```
page(add): тема-на-прикладі
page(fix): виправлення винятку у ser-estar
test(add): validate-links скрипт
ci(add): GitHub Actions workflow
refactor: перекладение categories.ts дублікат
```

### 10.3 Content plan (Priority tiers)

| Tier | Кількість тем | Пріоритет | Коли створювати |
|---|---|---|---|
| Priority 1 (Critical Depth) | 35 тем | 🔴 P0 | Фаза 3.1 |
| Priority 2 (Important) | 28 тем | 🟧 P1 | Фаза 3.2 |
| Priority 3 (Nice to have) | 30 тем | 🟨 P2 | Фаза 3.3 |
| Priority 4 (Edge cases) | 20+ тем | 🟧 P2 | Фаза 3.4 |
| Total | 123+ тем | | |

### 10.4 Шаблон frontmatter

```yaml
---
title_es: "Participio pasado"
title_uk: "Дієприкметник (participle)"
category: verbs
cefr: "A2"
draft: false
description: "Утворення та використання дієприкметника в іспанській мові."
tags: ["verbs", "participles", "tenses"]
related: ["ser-estar", "preterito-perfecto", "infinitive"]
last_updated: 2026-09-11
---
```

---

## 11. Консолідований чек-лист відповідності (Master Compliance Checklist)

### 11.1 Перевірка збірки (Build Check)

- [ ] `npm run build` завершується без помилок
- [ ] `npm run serve` доступний локально (http://localhost:4321)
- [ ] Pagefind індексує контент (файли `pagefind/` у `dist/`)
- [ ] `dist/` створюється з правильними HTML-файлами
- [ ] `scratch.mdx` видалено
- [ ] `categories.ts` дублікат видалено
- [ ] `.gitignore` виключає `*.log`, `dist/`, `node_modules/`, `OUT.txt`, `diag.txt`

### 11.2 Перевірка контенту (Content Check)

- [ ] Кожна сторінка має `title_es` та `title_uk` у лапках
- [ ] `category` у списку дозволених значень
- [ ] `cefr` присутній у frontmatter
- [ ] `cefr` **НЕ** згадується у тексті сторінки
- [ ] Мінімум 2 `<Example>` на сторінку (es + uk)
- [ ] Мінімум 1 `<Mistake>` на сторінку
- [ ] Мінімум 1 `<Note kind="uk">` на сторінку
- [ ] `related` посилання — на існуючі сторінки (0 dead links)
- [ ] Немає "try it", "practice", "exercise", "quiz"
- [ ] Немає списків слів >3 одиниць
- [ ] Джерела вказані (якщо є)

### 11.3 Перевірка UX (UX Check)

- [ ] `<Formula>` використовується для Core Definition
- [ ] `<Token>` використовується для елементів формули
- [ ] `<Conjugation>` використовується для дієслів
- [ ] `<CompareTable>` використовується на `/comparisons/` сторінках
- [ ] Мобільна версія працює (перевірка Chrome DevTools)
- [ ] WCAG контраст кольорів перевірено
- [ ] `lang="uk"` у BaseLayout

### 11.4 Перевірка архітектури (Architecture Check)

- [ ] theme-map.ts охоплює ≥35 тем (Priority 1)
- [ ] theme-map.ts охоплює ≥63 тем (всі)
- [ ] Sitemap.xml містить усі сторінки
- [ ] robots.txt дозволяє індексацію
- [ ] opengraph meta tags на кожній сторінці

### 11.5 Перевірка CI/CD (CI/CD Check)

- [ ] GitHub Actions workflow працює на main
- [ ] Pull Request валідується (build + скрипти)
- [ ] Deploy відбувається автоматично на GitHub Pages

---

## 12. Графік та віхи (Timeline & Milestones)

### 12.1 Етапи розробки

| Етап | Тривалість | Ціль | Ключові віхи |
|---|---|---|---|
| **Фаза 0** | 1-3 дні | Build fix + clean repo | build ✅, scratch ❌, junk-files ❌ |
| **Фаза 1** | 2-4 дні | Theme map + categories | theme-map.ts ✅, categories.ts ✅ |
| **Фаза 2** | 1-2 тижні | Standardize 24 pages | 20/24 сторінок ✅ 8/12 розділів |
| **Фаза 3.1** | 4-6 тижнів | 35 Priority 1 сторінок | 150+ сторінок ✅ |
| **Фаза 3.2** | 4-6 тижнів | 28 Priority 2 сторінок | 178 сторінок ✅ |
| **Фаза 3.3** | 2-3 тижні | 30 Priority 3 сторінок | 208 сторінок ✅ |
| **Фаза 4** | 1-2 тижні | UX refinement | A11y ✅, mobile ✅ |
| **Фаза 5** | 1 тиждень | QA automation | CI ✅, скрипти ✅ |
| **Фаза 6** | 3-5 днів | Deploy | production ✅, CI/CD ✅ |

### 12.2 Ключові віхи

| Дата | Віха | Критерій успіхи |
|---|---|---|
| День 3 | Build Fix Complete | `npm run build` → exit code 0 |
| День 7 | Repo Clean | 0 junk-файлів, 0 порожніх директорій |
| День 14 | 24 сторінки стандарт | 20/24 сторінок мають 8+/12 розділів |
| День 35 | 35 Priority 1 сторінок | theme-map.ts має 35+ entries з заповненим контентом |
| День 56 | 73 сторінки (P1+P2) | theme-map.ts має 73+ entries |
| День 70 | 103 сторінки (P1+P2+P3) | theme-map.ts має 103+ entries |
| День 84 | UX Ready | A11y перевірка ✅, mobile ✅ |
| День 91 | Production Ready | CI/CD ✅, site доступний онлайн |

### 12.3 Метрики успіхи (KPI)

| KPI | Поточний стан | Ціль | За період |
|---|---|---|---|
| Кількість сторінок | 24 | 150+ | Фаза 3 |
| Покриття тем (з 63) | ~11 § | 63 § (100%) | Фаза 3 |
| Build status | ❌ | ✅ | Фаза 0 |
| Pagefind search | ❌ | ✅ | Фаза 0 |
| CI/CD | ❌ | ✅ | Фаза 5 |
| Production deploy | ❌ | ✅ | Фаза 6 |
| WCAG AA | ⚠️ частково | ✅ | Фаза 4 |

---

## 13. Додатки (Appendices)

### 13.1 Додаток А: Теми з prompt_themes, що ще не мають сторінок

```
§35: Present Progressive → створити tenses/presente-progresivo.mdx
§36: Past Continuous → створити tenses/imperfecto-progresivo.mdx
§37: Future Tense → створити tenses/futuro.mdx
§38: Conditional → створити moods/condicional.mdx
§39: Subjunctive in subordinate → створити moods/subjuntivo-subordinate.mdx
§40: Questions → створити sentence-structure/questions.mdx
§41: Word Order → створити sentence-structure/word-order.mdx
§42: Emphasis → створити sentence-structure/emphasis.mdx
§43: Passive se → створити verbs/passive-se.mdx
§44: Indirect speech → створити sentence-structure/indirect-speech.mdx
§45: Prepositional pronouns → створити pronouns/prepositional.mdx
§46: Clitic placement → створити pronouns/clitic-placement.mdx
… (продовжити для всіх 63 розділів)
```

### 13.2 Додаток Б: Залучені файли та інструменти

| Категорія | Файли |
|---|---|
| **Конфігурація** | astro.config.mjs, tsconfig.json, package.json |
| **Контент** | src/content/es/** (24 .mdx файли) |
| **Компоненти** | src/components/*.astro (8 файлів) |
| **Макети** | src/layouts/*.astro (Base, Grammar, Comparison) |
| **Дані** | src/data/categories.ts, src/content.config.ts |
| **Сторінки** | src/pages/** (index, about, es/[category], comparisons) |
| **Скрипти** | scripts/*.mjs (4 скрипти валідації) |
| **CI/CD** | .github/workflows/*.yml (2 файли) |
| **Документи** | content-plan.md, audit-results-profound.md (це файл) |

### 13.3 Додаток В: Глосарій термінів

| Термін | Пояснення |
|---|---|
| **slug** | URL-дружнє ім'я сторінки (наприк: `ser-estar`) |
| **frontmatter** | YAML-блок у верхній частині `.mdx` файлу |
| **theme-map.ts** | Файл мапування тем → сторінок |
| **Pagefind** | Статичний пошук для статичних сайтів |
| **CEFR** | Common European Framework of Reference (A1-C2) |
| **A11y** | Accessibility (доступність для людей з інвалідністю) |
| **DoD** | Definition of Done |
| **CI/CD** | Continuous Integration / Continuous Deployment |

---

*План створено на підставі аналізу `audit-results-profound.md` та трьох засадничих промтів.*
*Оновлено: 2026-09-11. Версія: v1.0.0-alpha.7*
