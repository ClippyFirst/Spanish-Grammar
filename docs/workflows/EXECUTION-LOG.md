# 📒 Лог виконання

> Записи **дописуються**. Старі не стираються.

---

## 2026-09-18 — перевірка AUDIT-1 vs репо (честний аудит)

### Метод
1. Усі slug з `[x] ✅` у `TOPICS-COVERAGE-AUDIT-1.md` звірено з `src/content/es/**/*.mdx`.
2. Виміряно глибину нових сторінок (довжина, Mistake/Note).
3. Spot-check 🟡 «частково» — чи тема реально згадана в цільовому MDX.

### Результат

| Перевірка | Висновок |
|-----------|----------|
| Чи існують усі заявлені slug | **Так** (0 missing серед 70 refs; 169 MDX у репо) |
| Чи нові сторінки не порожні | **Так** (1.6–5.4 KB, є приклади/помилки) |
| Чи всі 🟡 чесні | **Ні — були слабкі** |

### Слабкі 🟡 (виправлено в `47bb42b`)

| Заявлено «частково в…» | Було | Стало |
|------------------------|------|-------|
| epicenos / el agua → gender-exceptions | майже не було | додано секції |
| sólo/solo, aún/aun → accent-marks | не згадувалось | додано норму RAE |
| кома / vocativo → punctuation | слабко | розширено |
| a pesar de / en lugar de → common-constructions | не було | додано таблицю |

### Що лишається чесним 🟡
Огляди без окремої глибокої сторінки: порядок кількох прикметників, metábasis, деякі locuciones adverbiales, повний розбір усіх типів підрядних в одній сторінці тощо — **не** видаються за ✅.

### Тонші нові сторінки (є контент, можна поглибити пізніше)
`exclamatives` (~1.6 KB), `estar-de-ser-de`, `como-excepto`, `mismo-uno-generic` — робочі, не stubs; глибина C2-рівня — на етапі підрихтовки.

### Коміти
- `dc6276c` — позначки AUDIT-1
- `47bb42b` — fix слабких partial

---

## 2026-09-18 — §1 Основи (fundamentals): еталонний прохід

**Коміт:** `08a876b` — `content(§1 fundamentals): reference-quality pass — all 9 pages deepened`

### Мета
Довести **всі** сторінки категорії `fundamentals` до еталонної структури довідника (швидка довідка → вживання → помилки UA → регіон → related), без CEFR у тексті, з природною українською.

### Оновлені MDX (9)

| Файл | Що посилено |
|------|-------------|
| `alphabet-pronunciation` | таблиці звуків, seseo/yeísmo, pero/perro, німе h |
| `reading-rules` | ca/que/ga/gue/güe, зв'язок з орфографією дієслів |
| `date-time-numbers` | година (es la una / son las), дата, cardinales, помилки |
| `ordinal-numbers` | primer/tercer апокопа, узгодження, скорочення 1.º |
| `numbers-in-speech` | cien/ciento, millón de, veintiún |
| `fractions-percentages` | mitad/tercio, %, unos/cerca de |
| `grammar-basics` | морфема, змінні/незмінні, рід vs стать, скелет речення |
| `ua-interference` | повна карта-хаб зон ризику + посилання |
| `false-friends-ua-es` | розширена таблиця + приклади в реченні |

### AUDIT-1 §1
Пункти основ покриті цими сторінками; 🟡 (структура речення / регістр) лишаються частково в `word-order` та `tu-usted` — логічно для сусідніх розділів.

### Далі за планом
§2 Орфографія → §3 Іменники → … (окремий коміт на розділ + допис у цей лог).

---
## 2026-09-18 — Аудит стану репозиторію (роботи, не тем)

**Файл:** `AUDIT-REPO-STATE-2026-09-18.md` — заморожений знімок на HEAD `354492b`.

### Факт
- 94 коміти, main clean, origin синхронізовано.
- Контент: 169 MDX (16 категорій) + 5 comparisons = 174 MDX у src.
- Валідатори: validate OK (2 неблокувальні WARN related), links 0 broken.
- AUDIT-1 (§1–9): 0 ❌; AUDIT-2 (§10–21): робоча зона з ❌.
- Борг N1: word-formation (4 стор.).

### Правила, зафіксовані в аудиті
- Аудити/силабус/лог — ТІЛЬКИ ДОПИСУВАТИ: нові стани = нові файли `AUDIT-REPO-STATE-YYYY-MM-DD.md`,
  жодних перезаписів заднім числом; теми силабусу не переформульовуються.
- Скелет дій: гігієна → AUDIT-2 хвиля по § → reference-pass за зразком §1 → борги → qa/build → новий знімок.
- ВСЕ комітиться (content:/docs:/fix:/chore:) і логується тут; без запису робота незавершена; без force-push/amend.

### Далі
AUDIT-2: §10 verbs першим.

---



## 2026-09-20 — accessibility/link affordance + radius vocabulary cleanup

**Зміни:**
- body links отримали явне underline за замовчуванням; навігаційні та структурні винятки зберігають власну affordance.
- `--radius-sm` став semantic alias до `--radius`; hard-coded pill-radius у chip/keyword стилях замінено на `--radius-pill`.
- з `fundamentals/grammar-basics` прибрано неоднозначний related slug `personal-a`; сторінки з цим slug у різних категоріях не повинні розв'язуватися через basename.
- accessibility audit script тепер реально завантажує CSS перед перевірками `:focus-visible` та reduced-motion.

**Коміти:** `215f191`, `8e1cfbc`, `0aeb3e8`, `bb4bf99`, `ca9ad6a`, `d626015`.


## 2026-09-20 — search indexing + graph/audit cleanup

**Зміни:**
- стандартний `npm run build` тепер генерує Pagefind-індекс; `build:full` залишено сумісним alias.
- `qa` використовує той самий повний build pipeline.
- design audit точніше відрізняє body links від structural-link exceptions.
- додано inbound-зв’язки для раніше orphan pages.
- search status оновлюється через `aria-live` після завантаження Pagefind.
## 2026-09-20 — final design-token cleanup

**Зміни:**
- прибрано останній hardcoded колір у footer на користь `--gr-footer-link`.
- прибрано `box-shadow` з формули; редакційний акцент збережено через праву й нижню межі `--gr-maize`.
- після цього audit:design:tokens має завершуватися без inline-colors, hard-radius, shadows і system-ui findings.
