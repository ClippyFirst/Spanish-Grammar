# Components — Gramaticarrona Redesign

## 1. Index Stripe Item

- Номер категорії (01–17)
- Стани: default / active
- Active = акцентний фон + світлий текст

## 2. Header / Nav

- Logo (text)
- Nav links (Inter 14px)
- Search link з іконкою ⌕ (акцентний колір)

## 3. Overline / Section label

Приклади: `ДОВІДНИК`, `КАТЕГОРІЇ — 17`, `ПОПУЛЯРНЕ`, `ШВИДКА ФОРМУЛА`, `ТИПОВІ ПОМИЛКИ…`
- Muted color, letter-spacing, uppercase або small-caps відчуття
- Часто IBM Plex Mono або Inter 600

## 4. Category list row (Home / Category)

```
[01]  Основи          Fundamentos          Абетка, вимова…
```

- Номер (Fraunces)
- Українська назва (Inter 600)
- Іспанська назва (Inter italic, muted)
- Короткий опис (secondary)
- Роздільник 1px між рядками

## 5. Topic list row (Category page)

```
09.01  • Ser та Estar — «бути»     Ser y estar          [A1]
```

- Код теми
- Червона крапка «популярне» (опційно)
- Title UK + title ES
- Level badge (outline)

## 6. Level Badge

- Текст: A1 / A2 / B1 / B2
- Outline 1px `#15140F`
- IBM Plex Mono 10–11px
- Фон білий

## 7. Token Chip (граматична роль)

Приклади: `ПІДМЕТ`, `soy / eres / es…`, `ХАРАКТЕРИСТИКА`, `СТАН / МІСЦЕ`

- Фон залежить від ролі (див. токени)
- Outline 1px `#15140F`
- IBM Plex Mono, uppercase
- Використовуються всередині Formula box

## 8. Formula Box

- Обведена рамка 1px
- Всередині: підпис + рядок з chip + «+» + chip + «+» + chip
- Два варіанти поруч (Ser / Estar) на desktop

## 9. Note (для носіїв / регіональна)

- Лівий border 2px accent
- Заголовок uppercase (accent-dark)
- Текст secondary

## 10. Minimal Pair

Два стовпчики (або один під одним на mobile):
- Іспанська фраза (mono, accent color)
- Українське пояснення (secondary)

## 11. Mistake Correction

```
Estoy médico.  →  Soy médico.
```

- Неправильна форма: `#C13A1E` + line-through
- Правильна: `#2F5233` + weight 600
- Пояснення під ними

## 12. Related Topics

- Список посилань з стрілкою `→`
- Колір link (`#1F3A5F`)

## 13. Search Result Item

- Код теми + title + short description + level badge
- Популярне — червона крапка

## 14. 404 Block

- Великий «404» (Fraunces 160px, accent)
- Заголовок + опис
- Primary button (dark blue bg) + secondary outline button
- Список категорій нижче для продовження

## 15. Footer

- Одна лінія: `GRAMATICARRONA · ДОВІДНИК … · GITHUB.COM/CLIPPYFIRST`
- IBM Plex Mono, muted, letter-spacing
