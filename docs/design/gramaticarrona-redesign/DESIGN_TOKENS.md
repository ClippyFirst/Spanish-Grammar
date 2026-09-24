# Design Tokens — Gramaticarrona Redesign

## 1. Кольори

### Основна палітра (з Figma)

| Роль | Hex | Назва в дизайні | Застосування |
|------|-----|-----------------|--------------|
| Background / paper | `#F3F0E7` | папір | Основний фон сторінки |
| Index stripe | `#E3DDCB` | індекс-смуга | Ліва навігаційна смуга |
| Text primary | `#15140F` | текст | Заголовки, основний текст |
| Accent | `#C13A1E` | акцент | Активна категорія, помилки, акценти, популярне |
| Link | `#1F3A5F` | посилання | Навігаційні посилання, search, related |
| Correct / success | `#2F5233` | вірно | Правильні форми в блоці помилок |

### Допоміжні кольори (з HTML-експорту)

| Роль | Hex | Застосування |
|------|-----|--------------|
| Text secondary | `#55524A` | Описи, вторинний текст |
| Text muted / labels | `#8A8578` | Надзаголовки, captions, footer |
| Divider | `#C9C2B2` | Горизонтальні роздільники |
| On-accent | `#FBFAF6` | Текст на акцентному фоні (індекс-смуга active) |
| Accent dark (notes) | `#8F2814` | Заголовки нотаток «для носіїв» |

### Token chips (фон для граматичних ролей)

| Роль | Приблизний фон |
|------|-----------------|
| Підмет | `#DCE3E4` |
| Дієслово / форми | `#EFE1D6` |
| Характеристика / стан | `#E6DEEA` |
| Інші (допоміжне, заперечення) | світлі варіанти тієї ж палітри |

> Усі кольори мають бути винесені в CSS custom properties (`--color-paper`, `--color-accent` тощо) і не хардкодитися в компонентах.

## 2. Типографіка

| Сімейство | Вага | Роль |
|-----------|------|------|
| **Fraunces** | 900 (Black), 700, 600 | Display: логотип, H1, номери тем (09.01), великі 404 |
| **Inter** | 400, 500, 600, 700 | UI + body: навігація, параграфи, списки |
| **IBM Plex Mono** | 400, 500, 600 | Формули, токени, коди тем, бейджі рівнів, captions |

### Масштаб (Desktop)

| Елемент | Font | Size | Line-height | Weight |
|---------|------|------|-------------|--------|
| Logo | Fraunces | 21px | — | 900 |
| H1 (home) | Fraunces | 52px | 58px | 900 |
| H1 (topic) | Fraunces | ~40–46px | ~1.1 | 900 |
| Category number (large) | Fraunces | 28–52px | — | 700–900 |
| Body | Inter | 15–18px | 24–27px | 400 |
| Nav / UI | Inter | 14px | — | 500–600 |
| Labels / overline | IBM Plex Mono / Inter | 11–13px | — | 500–600, letter-spacing 1.5–2px |
| Token chip | IBM Plex Mono | 10–12px | — | 500 |
| Footer | IBM Plex Mono | 9–11px | — | 400 |

## 3. Spacing & Layout primitives

- **Index stripe width**: 88px (фіксована)
- **Content horizontal padding**: 56px (desktop)
- **Header height**: ~66–70px
- **Section gaps**: 24px / 40px / 48px / 72px (залежно від блоку)
- **List item padding**: 14–18px vertical
- **Divider thickness**: 1px (`#C9C2B2`) або 3px (чорний акцент під заголовком статті)

## 4. Border & Radius

- Більшість елементів — **без radius** або мінімальний (editorial feel).
- Token chips і бейджі рівнів: outline 1px solid `#15140F`, без заокруглення або дуже легке.
- Formula boxes: outline 1px solid `#15140F`.

## 5. Рекомендовані CSS-змінні (чернетка)

```css
:root {
  /* Color */
  --color-paper: #F3F0E7;
  --color-stripe: #E3DDCB;
  --color-text: #15140F;
  --color-text-secondary: #55524A;
  --color-text-muted: #8A8578;
  --color-accent: #C13A1E;
  --color-accent-dark: #8F2814;
  --color-link: #1F3A5F;
  --color-correct: #2F5233;
  --color-divider: #C9C2B2;
  --color-on-accent: #FBFAF6;

  /* Typography */
  --font-display: "Fraunces", serif;
  --font-body: "Inter", system-ui, sans-serif;
  --font-mono: "IBM Plex Mono", ui-monospace, monospace;

  /* Layout */
  --stripe-width: 88px;
  --content-pad-x: 56px;
  --header-height: 70px;
}
```
