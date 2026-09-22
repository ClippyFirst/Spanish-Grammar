# Audit documentation

Аудити проєкту поділяються на два рівні:
- `docs/audits/current/` — поточний machine-generated / active audit state;
- root-level `AUDIT-*.md` — історичні матеріали попередніх етапів і не повинні вважатися актуальним source of truth.

Автоматично генеровані звіти не редагуються вручну. Щоб оновити їх, запускайте відповідний npm script.

## Current
- `current/content-graph.md` — граф внутрішніх зв'язків, орфани, биті та неоднозначні посилання.
- QA-команди з `package.json` — структурна, MDX, content, link, design та production-build перевірки.

## Source of truth
Для архітектури й контентної моделі джерелом істини є:
- `src/content.config.ts`
- `src/data/categories.ts`
- `src/utils/content.ts`
- `README.md`
- `package.json`
- `.github/workflows/deploy.yml`

Історичний audit-файл не повинен змінювати поведінку сайту лише тому, що він містить стару рекомендацію.
