# GrammarWay ES — Іспанська граматика для україномовних

Статичний довідник з іспанської граматики для україномовних. Головний принцип:
**Знайти → зрозуміти → порівняти → запам'ятати.**

- Статичний HTML (Astro + TypeScript + MDX).
- Клієнт-сайд пошук через [Pagefind](https://pagefind.app)).
- Жодного бекенда, мінімум JavaScript.

## Швидкий старт

```bash
npm install
npm run build:full   # astro build + pagefind index
npm run preview        # local preview
```

Для розробки: `npm run dev`.

> Увага: Pagefind index (`npm run search:index`) генерується **після** `npm run build`, бо індексує статичний `dist/`. `build:full` робить обидва кроки автоматично.

## Розгортання

### GitHub Pages
Для проєктного сайту (`https://<user>.github.io/<repo>/`) задайте базовий шлях:

```powershell
$env:PUBLIC_BASE = "/<repo-name>"
$env:SITE_URL     = "https://<user>.github.io"
npm run build:full
```
Публікуйте вміст `dist/` (гілка `gh-pages` або GitHub Actions з upload-pages-artifact).

### Cloudflare Pages / Vercel
- Build command: `npm run build:full`
- Output directory: `dist`
- (Опційно) Environment variable `SITE_URL` — фінальний домен.



## Структура

```
content/es/...          # граматичний контент (MDX), окремий від UI (у src/content/)
src/components/         # Astro + MDX-компоненти
src/layouts/            # BaseLayout, GrammarLayout, ComparisonLayout
src/pages/             # маршрути (/, /es/, /es/[cat]/, /es/[cat]/[slug]/, /search/, /comparisons/, ...)
src/styles/             # дизайн-система (tokens, base, components, grammar, prose)
src/data/categories.ts   # єдине джерело категорій і їхніх назв
src/utils/content.ts     # побудова URL, пов'язані теми
public/                # статичні файли (favicon, robots.txt)
```

## Додавання нової теми

1. Створіть MDX-файл у `src/content/es/<category>/<slug>.mdx`.
2. Заповніть frontmatter (див. [схему](src/content.config.ts)): `slug`, `category`, `title_uk`, `title_es`, `title_en`, `short_description`, `keywords`, `related`...
3. Пишіть тіло з MDX-компонентами: `Formula`, `Conjugation`, `Example`, `Mistake`, `MinPair`, `Note`, `Token`, `CompareTable`.
4. Переконайтеся, що `related`-посилання вказують на реальні існуючі sluggи (неіснуючі автоматично фільтруються).


URL має вигляд `/es/<category>/<slug>/`. Сайт спроєктований так, щоб пізніше додавати інші мови
(`/fr/...`, `/it/...`) без реструктурування. Файли контенту повністю окремі від презентації —
фронтенд не містить жодної зашитої граматики.

## Категорії

16 розділів: fundamentals, nouns, articles, adjectives, adverbs, pronouns, prepositions, conjunctions, verbs, tenses, moods, periphrases, sentence-structure, word-formation, spelling, regional. Див. `src/data/categories.ts` — там змінюються назви, описи і порядок.



## Правила якості контенту

- Українська — основна мова пояснень; англійська — лише як міжнародна термінологія.
- Не вигадуйте граматичні правила — дотримуйтеся стандартної норми і позначайте регіональні/розмовні варіанти.
- Типові помилки завжди мають пояснення причини «Чому?».