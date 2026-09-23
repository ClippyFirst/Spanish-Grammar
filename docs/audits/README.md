# Audit documentation

Аудити проєкту поділяються на два рівні:

- `docs/audits/current/` — актуальний machine-generated / active audit state;
- `docs/audits/archive/` — історичні матеріали попередніх етапів, збережені для provenance.

Root-level audit-файли більше не використовуються: нові аудити слід зберігати у відповідному каталозі `docs/audits/`.

Автоматично генеровані звіти не редагуються вручну. Щоб оновити їх, запускайте відповідний npm script.

## Current

- `current/README.md` — інструкція з регенерації актуальних перевірок.
- `current/content-graph.md` — якщо присутній, актуальний граф внутрішніх зв'язків.
- QA-команди з `package.json` — структурна, MDX, content, link, design та production-build перевірки.

## Archive

В `archive/` збережено історичні аудити, snapshot-и та coverage-перевірки. Їхні висновки є історичним контекстом, а не автоматично актуальними вимогами.

Історичний audit-файл не повинен змінювати поведінку сайту лише тому, що він містить стару рекомендацію.

## Source of truth

Для поточної архітектури й контентної моделі джерелом істини є:

- `src/content.config.ts`
- `src/data/categories.ts`
- `src/utils/content.ts`
- `README.md`
- `package.json`
- `.github/workflows/deploy.yml`

Поточна методологія та roadmap живуть окремо:

- `docs/methodology/`
- `docs/roadmap/`
- `docs/workflows/`
