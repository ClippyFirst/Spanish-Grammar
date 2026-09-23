# Current audit state

Цей каталог містить лише актуальні результати перевірок.

## Reports

- `REPOSITORY-CLEANUP-2026-09-23.md` — поточний аудит структури репозиторію та технічного боргу.
- `content-graph.md` — генерується `npm run audit:graph`.
- `design-deep.md` — генерується `npm run audit:design:components`.

Generated reports are evidence of the repository state at the time of generation; they are not hand-edited source-of-truth files.

## Regenerate

```bash
npm run audit:graph
npm run audit:design
npm run audit:mdx
npm run validate
npm run links
npm run build
```

`content-graph.md` and `design-deep.md` are generated automatically and should not be edited manually.
