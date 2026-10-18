# Master execution plan and chat handoff — Gramaticarrona

**Призначення:** головний операційний план, живий реєстр прогресу й протокол передачі контексту новому чату.  
**Дата консолідації:** 2026-10-18  
**Репозиторій:** https://github.com/ClippyFirst/Spanish-Grammar  
**Статус:** робота триває; готовність до публікації не сертифікована.

> Новий чат спершу читає цей документ, перевіряє поточний стан GitHub і продовжує з поля «Наступна конкретна дія» у §8.2. Статус тут — датований знімок, а не гарантія актуального стану.

## 0. Обов’язкові правила

1. Перед роботою перевірити live гілки, HEAD SHA, PR, base/head, змінені файли, рев’ю та CI.
2. Не зливати, не закривати, не перебазовувати й не перенаправляти PR без прямого дозволу власника.
3. Не заявляти verified, browser-tested, corpus-attested або publication-ready без доказів. Зелений CI не доводить граматичну правильність.
4. Не ототожнювати кількість сторінок, вимог, skills або зелених перевірок із якістю.
5. Працювати обмеженими партіями: scope → джерела → знахідки → обґрунтовані зміни → релевантний QA → оновлення реєстру.
6. Не перетворювати довідник на обов’язковий курс/LMS. Необов’язкові добірки й шляхи доречні; обов’язкові вправи, оцінювання й трекер — поза поточним обсягом.
7. Не додавати графіку за замовчуванням. Текст і таблиця — повноцінні рішення.
8. Не зводити іспанську до «Іспанія / Латинська Америка»: перевіряти конкретні країни, субрегіони, спільноти й регістри там, де це релевантно.
9. Не вигадувати типові помилки українськомовних лише з мовного контрасту. Відрізняти засвідчені помилки, ризики перенесення й гіпотези.
10. Захищати канонічні статті та стабільні URL. Перед новою статтею визначити, чи прогалина справді в темі, а не в глибині, прикладах, метаданих або навігації.
11. Для суттєвого виправлення записувати файл, твердження/приклад, точне джерело, рішення, невизначеність і статус перевірки.
12. Якщо перевірку не вдалося виконати, так і записати. Не видавати аналіз коду за браузерний тест.
13. Українська термінологія: **«українськомовний/українськомовні»**, не «україномовний».
14. Оновлювати цей документ після кожної великої партії та перед завершенням чату.

## 1. Продуктові рішення

- Gramaticarrona — граматичний довідник іспанської для українськомовних, не курс/LMS.
- Пояснення мають бути доступні початківцям, але не спрощувати явища до неправди; просунуті читачі знаходять нюанси, винятки, джерела й регіональні обмеження.
- Охоплювати іспанську Іспанії, Латинської Америки на належному рівні деталізації, окремих країн/субрегіонів і нейтральне/редакційне вживання лише там, де ярлик обґрунтований.
- Зв’язки між передумовами, контрастами, винятками й суміжними темами — необов’язкова навігація.
- Зберігати Astro + MDX + TypeScript, статичний деплой, Pagefind, дизайн-систему та стабільні URL, якщо конкретні докази не обґрунтують зміну.
- MDX — джерело істини для статей. Аудити документують докази й процес, але не замінюють виправлення канонічного контенту.
- Розрізняти граматичність, нормативну рекомендацію, частотність, регістр, регіональну перевагу, прагматику й гіпотезу. «ser = постійне, estar = тимчасове» не є універсальним правилом.

## 2. Відомий стан на 2026-10-18 — перевірити заново

### PR #27 — архітектура й аудит
[PR #27](https://github.com/ClippyFirst/Spanish-Grammar/pull/27)  
Відома гілка: docs/grammar-reference-architecture-2026-10-18  
Останній відомий commit: 900c34d5f2663d6aaad84adfd3881588a7d9ac26  
Для нього повідомлялося про успішний GitHub Actions QA: [run 39131940822](https://github.com/ClippyFirst/Spanish-Grammar/actions/runs/39131940822). Перед опорою на результат перевірити актуальний статус. На момент останньої перевірки PR був відкритий і не злитий.

У гілці є цільова архітектура, стандарт якості пояснень, регіональна матриця, claim-level пілот, матриця 24 компетенцій і точкове джерельне рев’ю трьох канонічних статей та порівняння ser/estar. Три канонічні статті мають статус reviewed, не verified. Весь корпус не верифікований.

### PR #26 — skill suite
[PR #26](https://github.com/ClippyFirst/Spanish-Grammar/pull/26)  
Відома гілка: feat/grammar-research-skills-2026-10-18  
Опис PR повідомляє про 29 skills та матрицю/пілот. Пілот фіксує успішний npm run qa і Astro build на commit 523134360d6ac0c1a8631abbbe6dcb214b78a739. Це історичний результат для конкретного SHA, не гарантія актуального стану. Наявність skill-файлів не доводить їхню надійність чи недубльованість.

### PR #28 — додаткові skills
[PR #28](https://github.com/ClippyFirst/Spanish-Grammar/pull/28)  
Опис називає його follow-up до #26; додає spanish-claim-ledger-auditor і reference-answerability-auditor. Перевірити live base/head, залежності, файли, рев’ю й CI. Не зливати автоматично з #26 або #27.

### Документи для читання
- [Комплексний аудит компетенцій](./COMPREHENSIVE-COMPETENCY-AUDIT-2026-10-18.md)
- [Пілотний claim-level аудит](./CLAIM-LEVEL-PILOT-AUDIT-2026-10-18.md)
- [Аудит трансформації довідника](./GRAMMAR-REFERENCE-TRANSFORMATION-AUDIT-2026-10-18.md)
- [Матриця регіонального охоплення](./SPANISH-VARIETY-COVERAGE-MATRIX-2026-10-18.md)
- [Пілот skill suite](./SKILL-SUITE-PILOT-2026-10-18.md)
- [Цільова архітектура](../../architecture/GRAMMATICARRONA-TARGET-ARCHITECTURE.md)
- [Стандарт якості пояснень](../../architecture/EXPLANATION-QUALITY-STANDARD-UA.md)
- [README / QA](../../../README.md)

**Стратегічний висновок:** тематична карта й технічний фундамент достатні. Не доведено якість усіх правил, прикладів, перекладів, регіональних позначок, семантичних зв’язків, браузерної поведінки, доступності та SEO. Пріоритет — докази й глибина наявного корпусу. Нові теми/skills додаються лише за конкретної доведеної прогалини.

## 3. Критерії завершення — release gates

Позначати gate завершеним лише з доказом.

### G0 — Контекст
- [ ] Продуктовий контракт актуальний або зміну зафіксовано.
- [ ] Перевірено активну гілку, HEAD SHA, робоче дерево (якщо локально), PR-залежності й останній CI.
- [ ] Відомо, що змерджено, а що лишається в PR.
- [ ] Не виконано merge/close/rebase/retarget без дозволу.

### G1 — Покриття
- [ ] Історичні вимоги звірено з актуальними MDX.
- [ ] Кожна вимога має disposition: достатньо / частково / відсутня / дубль / поза обсягом / потрібне дослідження.
- [ ] Кожна вимога має актуальний канонічний шлях.
- [ ] Числа 323 → 208 датовані й не подані як кількість верифікованих тверджень.
- [ ] Відсутні теми відділені від слабких пояснень, поганих прикладів і проблем навігації.

### G2 — Твердження й джерела
- [ ] Важливі твердження мають стабільні ID або відтворювані записи.
- [ ] Джерела ведуть до точного розділу, де це можливо.
- [ ] Зафіксовано, чи джерело підтверджує, спростовує, звужує твердження або не вирішує його.
- [ ] Не змішуються норма, прийнятність, частотність, регістр, регіон і прагматика.
- [ ] Невизначеність і конфлікти джерел залишаються видимими.

### G3 — Контент
- [ ] Теми P0/P1 перевірено на рівні тверджень, прикладів і перекладів.
- [ ] Канонічні статті й порівняння не суперечать одна одній.
- [ ] Важливі правила мають доречні приклади, контрасти й межі.
- [ ] Походження прикладів записано, де важливо; корпусну засвідченість не заявлено без пошуку.
- [ ] Таблиці/парадигми перевірено за джерелами й на внутрішню узгодженість.
- [ ] Українські пояснення, терміни, правопис і переклади відредаговано.

### G4 — Регіональна точність
- [ ] Кожне суттєве регіональне твердження має запис у матриці з доказом і статусом.
- [ ] Форми не узагальнюються на континент без підстав.
- [ ] «Нейтральна іспанська» не представлена як одна діалектна система.
- [ ] Де релевантно, перевірено звертання, voseo, імперативи, часо-аспектуальні відмінності, клітики, leísmo/laísmo/loísmo, subjuntivo, регістр і прагматику.
- [ ] Відсутність доказів означає «не перевірено»/«недостатньо доказів».

### G5 — Навігація й метадані
- [ ] Канонічні URL збережено або міграцію обґрунтовано.
- [ ] Зв’язки related/prerequisites/contrasts/extensions/exceptions змістовно корисні.
- [ ] Немає критичних битих посилань, дубльованих пояснень або хибних маршрутів.
- [ ] Статуси/метадані відповідають реальному обсягу перевірки.
- [ ] Сторінки прямо відповідають на запитання; пошук і навігація корисні.

### G6 — Автоматичний QA
- [ ] Перевірено актуальні README/package.json і команду QA.
- [ ] npm run qa пройшов на кандидатному commit.
- [ ] Тести не послаблено лише заради зеленого статусу.
- [ ] GitHub Actions перевірено для точного фінального SHA.
- [ ] Записано виконані й невиконані перевірки.

### G7 — Браузер, доступність, SEO
- [ ] Перевірено головну, пошук, основні категорії, порівняння, складну таблицю/MDX і навігацію.
- [ ] Перевірено mobile/desktop, zoom 200%, клавіатуру, фокус, skip link, заголовки, таблиці, назви посилань, контраст і reduced motion, де застосовно.
- [ ] Перевірено console/runtime errors, ресурси й overflow.
- [ ] Перевірено title/description, canonical, sitemap, robots/indexing і Pagefind.
- [ ] Записано дату, браузер/версію, viewport, URL, результат і дефекти. Якщо браузер недоступний — gate відкритий.

### G8 — Реліз
- [ ] Блокери закрито; відкладені питання описано й прийнято власником.
- [ ] Перевірено PR-залежності, рев’ю, CI й base/head.
- [ ] Merge зроблено лише після дозволу.
- [ ] Після merge перевірено default-branch SHA і реальний deployment.
- [ ] План оновлено фактичним станом і залишковими ризиками.

## 4. Покроковий порядок робіт

### Етап 0 — Відновити контекст
1. Прочитати цей файл і документи з §2.
2. Перевірити live PR #26/#27/#28: гілки, base/head, commits, файли, рев’ю, залежності та CI.
3. Обрати один активний workstream; не змішувати гілки.
4. Оновити §8.2 до великих змін.
**Вихід:** актуальні branch/SHA/PR/CI й одна наступна дія записані.

### Етап 1 — Звірити матрицю покриття
1. Знайти повний інвентар тем і історичну матрицю 323 → 208.
2. Звірити її з актуальними src/content/es, src/content/comparisons, схемою, категоріями й зв’язками.
3. Для кожної вимоги записати canonical path і disposition.
4. Відокремити відсутність теми від недостатньої глибини, прикладів, метаданих чи навігації.
5. Скласти worklist лише з реальних прогалин і вказати метод/обмеження.
**Вихід:** кожна вимога має шлях і disposition.

### Етап 2 — Реєстр тверджень
1. На основі claim-level пілоту вибрати мінімальний формат; не мігрувати схему до тестування.
2. Розкладати складні пояснення на атомарні твердження, де практично.
3. Записувати джерело, точний розділ, тип, регіон/сферу, дату й межі доказу.
4. Присвоювати результат: підтверджує / суперечить / звужує / не вирішує / доказів недостатньо.
5. Статуси: draft — не перевірено; reviewed — огляд виконано в заявлених межах і відкриті питання видимі; verified — твердження, форми, приклади, переклади та релевантні регіональні позначки мають задокументовану перевірку, блокерів у заявленій сфері немає.
6. Не підвищувати статус масово через джерела у frontmatter або зелений build.
**Вихід:** формат і правила статусів перевірені на пілоті.

### Етап 3 — Пріоритетні канонічні теми
Для кожної теми окремою партією:
1. Прочитати канонічну статтю та порівняння.
2. Виписати важливі твердження й складні приклади до редагування.
3. Перевірити за RAE/ASALE, DPD, NGLE, Ortografía, FundéuRAE, академічними граматиками/словниками чи іншим придатним джерелом.
4. Використовувати корпус для засвідченості/розподілу/контекстної природності, не для автоматичного виведення норми.
5. Перевірити форми, узгодження, наголоси, пунктуацію, клітики, контекст і український переклад.
6. Звузити категоричне формулювання, якщо доказ вужчий.
7. Узгодити канонічну статтю з порівняннями.
8. Внести обґрунтовані зміни, записати невизначеність, запустити QA й оновити реєстр.

**Початковий порядок:** артиклі/детермінативи й lo; ser/estar/hay; indefinido/imperfecto, включно з saber/conocer/querer; perfecto compuesto/indefinido й регіональність; subjuntivo; por/para; personal a та керування; gustar; клітики; si/умовні конструкції; артиклі з частинами тіла; tú/vos/usted/vosotros/ustedes та імперативи. Інші теми ранжувати за матрицею.

**Вихід партії:** твердження перевірені в заявлених межах, сторінки узгоджені, приклади/переклади перевірені, QA виконано, відкриті питання записано.

### Етап 4 — Регіональний аудит
1. Знайти твердження «в Іспанії», «у Латинській Америці», «завжди/ніколи», «частіше», «нейтральний», «формальний», «неправильно».
2. Записати матеріальні твердження в матрицю з точним місцем.
3. Перевірити, що джерело охоплює потрібну конструкцію та спільноту.
4. Розрізняти географію, частотність, формальність, престиж, прийнятність, норму й прагматику.
5. Оновити статті, порівняння й link/graph/content checks.
**Вихід:** кожне регіональне твердження підтверджене, звужене або явно невирішене.

### Етап 5 — Українська редактура
1. Перевірити пряму відповідь, логіку, терміни, пунктуацію й приклади.
2. Звіряти переклад зі змістом і контекстом, не лише словами.
3. Виявляти хибні відповідники та місця, де українська приховує іспанський контраст.
4. Розрізняти засвідчені помилки, ризики перенесення й гіпотези.
5. Прибирати тавтології, зайві вступи, незрозумілі терміни та мнемоніки, подані як правила.
6. Не спрощувати коректне пояснення до неправди.
7. Записати обсяг і дату проходу.
**Вихід:** кожна сторінка має статус проходу або причину відкладення.

### Етап 6 — Приклади й парадигми
1. Перевірити P0/P1 приклади проти тверджень, які вони ілюструють.
2. Перевірити граматичність і контекстну природність іспанського речення.
3. Перевірити, чи український переклад передає потрібну різницю.
4. Перевірити таблиці, нерегулярні форми, наголоси, узгодження й особу/число.
5. Не заявляти корпусну засвідченість без реального пошуку.
6. Додати регресійні приклади для раніше виправлених помилок.
**Вихід:** високоризикові приклади й таблиці мають доказ перевірки.

### Етап 7 — Навігація
1. Перевірити canonical URL і дублікати.
2. Перевірити змістовність семантичних зв’язків.
3. Виявити випадкові orphan-сторінки й надмірне перелінкування.
4. Переконатися, що порівняння додає реальний контраст.
5. Перевірити title/description, категорію, джерела й статуси.
6. Поєднати автоматичні link/graph checks із семантичним переглядом.
**Вихід:** немає критичних битих посилань, дубльованих пояснень чи хибних зв’язків.

### Етап 8 — Skills
1. Перевірити PR #26 і #28 окремо та їхні base/head.
2. Для кожного skill визначити задачу, вхід, вихід, умову запуску й доказовий стандарт.
3. Знайти дублювання з іншими skills та npm run qa.
4. Протестувати на реальних позитивних, негативних, неоднозначних і недостатньо доказових кейсах.
5. Записати false positives/negatives, дубльовані знахідки й необґрунтовану впевненість.
6. Дозволяти результати «змін не потрібно», «не застосовується», «доказів недостатньо».
7. Маршрутизувати skills за файлами й ризиком; не запускати всі на кожну дрібну зміну.
8. Додавати skills лише за доведеної прогалини.
**Вихід:** кожен skill має недубльовану роль і мінімальний запис тестування.

### Етап 9 — Автоматичний QA
1. Перечитати README/package.json і підтвердити актуальну команду.
2. Запустити npm run qa на точному кандидатному commit.
3. Виправляти причини помилок, не маскуючи перевірки.
4. Перевірити GitHub Actions на тому самому SHA.
5. Переглянути build output, маршрути й індекс пошуку за потреби.
6. Записати невиконані/недоступні перевірки.
**Вихід:** QA пройшов на точному SHA або невдачі задокументовано; блокери блокують реліз.

### Етап 10 — Браузер, доступність, SEO
1. Перевірити головну, пошук, категорії, порівняння, складну таблицю/MDX і навігацію.
2. Перевірити mobile/desktop, zoom 200%, клавіатуру, фокус, skip link, заголовки, таблиці, назви посилань, контраст і reduced motion.
3. Перевірити console/runtime errors, ресурси й overflow.
4. Перевірити metadata, canonical, sitemap, robots/indexing і Pagefind.
5. Записати дату, браузер/версію, viewport, URL, результат і дефекти.
6. Якщо браузер недоступний — gate відкритий.
**Вихід:** датований протокол smoke test і чесний перелік невипробуваного.

### Етап 11 — Реліз
1. Для кожного gate виставити PASS / PARTIAL / BLOCKED / NOT RUN із доказом.
2. Перелічити залишкові ризики за тяжкістю, впливом, імовірністю та файлами.
3. Перевірити PR-залежності, рев’ю, CI, base/head і release workflow.
4. Отримати дозвіл власника до merge.
5. Після merge перевірити default-branch SHA й deployment.
6. Оновити план фактичним результатом.
**Вихід:** доказове рішення про реліз і прозорі залишкові ризики.

## 5. Протокол партії та пріоритети

Кожна партія має містити: ID/scope; канонічні файли й порівняння; твердження/питання; джерела з точними розділами; знахідки; зміни й обґрунтування; реально виконані перевірки; відкриті питання; commit SHA/PR; одну наступну дію.

- **P0 / blocker:** суттєво хибне правило, критичний маршрут, оманлива нормативна/регіональна заява або серйозний дефект доступності/релізу.
- **P1 / high:** важлива помилка прикладу/перекладу, суперечність сторінок, пропущена важлива межа правила.
- **P2 / medium:** ясність, повнота, метадані, навігація або UX із помірним впливом.
- **P3 / low:** полірування без впливу на коректність чи базову зручність.

Мінімальні поля реєстру: Claim ID; файл/місце; твердження/приклад; тип; джерело й точний розділ; результат доказу; регіон/регістр; дія; статус; рецензент/дата; залишкова невизначеність. Це формат для пілоту, не наказ негайно мігрувати всю схему сайту.

## 6. Маршрутизація перевірок

| Тип зміни | Перевірки |
|---|---|
| Правило/приклад | Граматика й джерела, приклади, українська редактура, узгодженість |
| Регіональне твердження | Варіантність, сфера джерела, контекст |
| Парадигма/таблиця | Морфологія, форми, наголоси, регресійні приклади |
| Нова канонічна тема | Покриття, canonical ownership, пояснення, джерела, метадані, граф |
| Порівняння | Узгодженість із канонічною статтею, контраст, посилання, пряма відповідь |
| Frontmatter/schema | Валідація, сумісність, QA |
| Компонент/CSS/layout | Дизайн/accessibility/responsive і браузерний тест |
| SEO/routes/search | Link/build/metadata та перевірка згенерованого результату |
| Skill | Перетини, маршрутизація й репрезентативні кейси |
| Документація | Markdown/посилання; повний QA, якщо змінено workflow/політики |

## 7. Умови заборони оголошувати готовність

Не оголошувати publication-ready, якщо лишається P0; важливі правила мають verified без доказів; джерела не перевірено на релевантність; широкі регіональні твердження непідтверджені; критичні приклади/переклади не перевірені; канонічні й порівняльні сторінки суперечать одна одній; QA не пройшов на кандидатному SHA; browser/accessibility тест заявлено без протоколу; base/head PR незрозумілі; точний SHA або стан релізу невідомий. P2/P3 можуть лишитися лише з явним переліком і прийняттям ризику власником.

## 8. Живий реєстр прогресу

### 8.1 Відомий статус на 2026-10-18

| Етап | Статус | Примітка |
|---|---|---|
| Продуктові рішення | Задокументовано | Архітектура й §1 |
| Архітектура/стандарт пояснень | Задокументовано | Документи в §2 |
| Матриця покриття | Часткова/історична | 323 → 208 треба звірити з файлами |
| Матриця 24 компетенцій | Звіт готовий; виконання вимог триває | Комплексний аудит |
| Регіональна матриця | Рамка створена, клітинки не верифіковані | «Не перевірено» |
| Claim-level review | Пілот | Три канонічні статті й ser/estar comparison |
| Увесь корпус перевірений | Ні | Повний реєстр тверджень не підтверджено |
| Українська редактура | Часткова | Стандарт і точкові виправлення |
| Skills | PR-based | #26 описує 29; #28 пропонує ще два |
| Автоматичний QA | Пройшов на відомому SHA; перевірити актуальний HEAD | Run 39131940822 |
| Browser/accessibility smoke test | Не підтверджено | Потрібен реальний протокол |
| SEO/rendered audit | Не сертифіковано | Потрібна перевірка результату |
| Publication-ready | Не сертифіковано | Залежить від решти gates |

### 8.2 Остання контрольна точка — замінювати при handoff

**Знімок оновлюється 2026-10-18.** Перевіряти live HEAD і CI заново після кожного checkpoint-коміту; нижче наведено відомі результати для конкретних SHA.

- Завершено три обмежені claim-level проходи: subjuntivo/indicativo, temporal conjunctions, і por/para:
  1. NGLE § 25.13h–j та § 24.5c, j–k: factual/hypothetical `aunque` alternation and prospective/habitual `cuando`. Added the NGLE-backed pair `Aunque lo intento ~ intente todos los días, nunca consigo hablar con él`, refined the temporal explanation, aligned canonical pages and comparison.
  2. NGLE § 25.14e/h and §§ 22.6p, 31.14i: `hasta que` alternation, `antes de que` + subjunctive, temporal `después de que` (future indicative excluded; regional present/past alternation), and `en cuanto` meaning ‘inmediatamente que’. The trigger quick-reference row was split to avoid implying that `hasta que` always takes subjunctive. Mood distribution specifically with `en cuanto` remains unverified and is explicitly caveated.
- Canonical pages updated: `src/content/es/moods/subjunctive-triggers.mdx`, `subjunctive-triggers-list.mdx`, `when-not-subjunctive.mdx`, plus `src/content/comparisons/indicative-subjunctive.mdx`. Claim-level audit and topic matrix updated with evidence registers and limitations.
- Branch: `docs/grammar-reference-architecture-2026-10-18`.
- Previous checkpoint HEAD `adfa3783cf440f77d0c4d6814b09a295c91a5c89` passed full GitHub Actions QA: [run 39164655829](https://github.com/ClippyFirst/Spanish-Grammar/actions/runs/39164655829). This pass predates the por/para batch and does not validate its commits. The por/para batch and its QA-driven markup correction advanced the branch to `5c3f09ed9fbf9a72800bcd01b60e1201f221be3e` before this checkpoint update. Full GitHub Actions QA passed on that exact SHA: [run 39165480113](https://github.com/ClippyFirst/Spanish-Grammar/actions/runs/39165480113). Earlier runs 39165368567 and 39165393412 failed because the emphasis audit flagged a valid `**метою**` span as a malformed substring; the sentence was rewritten without bold emphasis, the audit was not weakened, and run 39165480113 passed.
- PR #27 is open, ready (not draft), not merged, and currently reported mergeable. Base `main` SHA `10d49cba91d33c192d1fc0bfa12def1c845cad09`; previous recorded head `adfa3783cf440f77d0c4d6814b09a295c91a5c89`; current pre-checkpoint head `5c3f09ed9fbf9a72800bcd01b60e1201f221be3e`. Live PR snapshot: 52 changed files / 280 commits; full QA pass on that exact head is run 39165480113. No submitted reviews or inline threads were found in the previous live query; no reviewers requested.
- Local working tree was not checked; changes were made through GitHub API.

#### Live PR state

| PR | State | Base → head | Files / commits | Review | CI |
|---|---|---|---:|---|---|
| [#26](https://github.com/ClippyFirst/Spanish-Grammar/pull/26) | Open, ready, not merged; mergeable | `main` (`10d49cba91d33c192d1fc0bfa12def1c845cad09`) → `feat/grammar-research-skills-2026-10-18` (`25e736b5c5dea52031f32cb82964da0fd7d3cf9f`) | 31 / 26 | 0 submitted reviews; 0 inline threads; no requested reviewers | Pass, [run 39129981192](https://github.com/ClippyFirst/Spanish-Grammar/actions/runs/39129981192) |
| [#27](https://github.com/ClippyFirst/Spanish-Grammar/pull/27) | Open, ready, not merged; mergeable | `main` (`10d49cba91d33c192d1fc0bfa12def1c845cad09`) → `docs/grammar-reference-architecture-2026-10-18` (`8af14fc7b0d274f719e892839242a75876a2e81a`) | 50 / 269 | 0 submitted reviews; 0 inline threads; no requested reviewers | Pending, [run 39164629780](https://github.com/ClippyFirst/Spanish-Grammar/actions/runs/39164629780) |
| [#28](https://github.com/ClippyFirst/Spanish-Grammar/pull/28) | Open, draft, not merged; mergeable | `feat/grammar-research-skills-2026-10-18` (`25e736b5c5dea52031f32cb82964da0fd7d3cf9f`) → `feat/grammar-research-skills-wave2-2026-10-18` (`c228e69e69f397e0b16a1b9174a49b7ff24912e2`) | 11 / 23 | 0 submitted reviews; 0 inline threads; no requested reviewers | Fail, [run 39155530069](https://github.com/ClippyFirst/Spanish-Grammar/actions/runs/39155530069), synthetic merge ref `072199b632d0fc8bcd1ae9d1663ea6f62e74d404`; YAML parse failure at `src/content/comparisons/ser-estar.mdx:4:72`; not fixed in #27 |

#28 remains stacked on #26; #26 and #27 target `main`. No merge, close, rebase or retarget was performed.

#### Batch: temporal conjunctions

- Direct RAE/ASALE text reviewed: NGLE § 25.14e on `hasta que`; § 25.14h on `antes de que` and temporal `después de que`; § 22.6p on the immediate meaning of temporal `en cuanto`; § 31.14i on `en cuanto` as a relative adverbial expression of immediacy.
- `subjunctive-triggers-list.mdx`: split the former combined `cuando/hasta que + subjunctive` row and added separate bounded rows for `hasta que`, `antes de que`, and `después de que`.
- `subjunctive-triggers.mdx` and `when-not-subjunctive.mdx`: added context-sensitive contrasts and source-linked regional notes.
- `comparisons/indicative-subjunctive.mdx`: aligned temporal examples and caveats with the canonical pages; added the § 25.14 and § 22.6p source links.
- `CLAIM-LEVEL-PILOT-AUDIT-2026-10-18.md` and `TOPICS-COVERAGE-MATRIX-2026.md`: recorded the evidence register and open item.
- The source pages were opened and relevant paragraphs read. No corpus query, frequency analysis, regional survey, browser/accessibility/SEO test, or local worktree check was performed. Pages remain `draft`; no claim of complete verification is made.


#### Batch: por / para

- Direct RAE/ASALE NGLE paragraphs read: § 29.8k (destination, prospective deadline, purpose, service/utility, recipient); § 29.8n (historical/current overlap); § 29.8ñ (precise future time vs approximate time); § 29.8o–p (route, approximate location/time, duration); § 29.8q–r (passive agent, cause, means/channel, exchange/price, substitution).
- Canonical `src/content/es/prepositions/por-para.mdx`: repaired malformed Markdown, added source locators, bounded the regional statement for `por + quantitative duration`, and retained `draft` status.
- `src/content/es/prepositions/por-para-markers.mdx`: added source metadata, neutralized unsupported claims about “typical errors of Ukrainian speakers”, and qualified the temporal-duration marker.
- `src/content/comparisons/por-para.mdx`: added source traceability and clarified that the common functions are orientation rather than mutually exclusive categories; added the documented regional frequency qualification.
- Audit and matrix sections 16 appended. No corpus query, quantitative frequency calculation, country-by-country survey, independent Ukrainian editorial review, or browser/accessibility/SEO test was performed. No claim is fully verified solely by this batch.


#### Batch: verb–preposition government and personal `a` distinction

- Directly read NGLE § 34.8a–i for the personal preposition `a`, NGLE § 36.6j for `a + infinitive` with verbs such as `ayudar`, NGLE §§ 36.7–36.10 for selected government patterns, and DPD `queísmo` for `acordarse de que`.
- `src/content/es/prepositions/verbs-with-prepositions.mdx`: repaired malformed Markdown in the introduction, the `que` clause explanation and final memory tip; added source locators and retained `draft` status; replaced the unsupported “typical mistakes of Ukrainian speakers” heading with neutral contrast examples.
- Corrected a substantive conflation: `ayudar a alguien` can use personal `a` before a human direct object; `ayudar a limpiar` uses `a + infinitive`. Clarified that the preposition in `Depende de que llegues a tiempo` is selected by `depender de`, not by the subjunctive itself.
- Claim-level audit and coverage matrix section 17 appended. No corpus query, full verb-dictionary audit, regional survey, independent Ukrainian review, or browser/accessibility/SEO test was performed. Personal-`a` canonical page path remains unconfirmed and is the next content discovery task after CI.

#### Gates and next action

- G0: partial — live PR/base/head checked; local worktree unavailable.
- G1: partial — scoped matrix updated; 323 → 208 remains a historical structural baseline.
- G2–G5: partial/open — temporal conjunctions have bounded direct evidence; mood distribution specifically with `en cuanto` remains open. Por/para has bounded NGLE evidence for core functions and regional frequency of `por + quantitative duration`, but individual examples, translations, corpus frequency and broader regional claims remain open. The verb-government page has a bounded source/editorial pass; personal `a` path and full verb-pair verification remain open.
- G6: passed on current pre-checkpoint SHA `5c3f09ed9fbf9a72800bcd01b60e1201f221be3e` (run 39165480113). The new checkpoint commit itself must be checked after writing this document.
- G7: not run. G8: blocked; no publication-ready determination.

- **Наступна конкретна дія:** перевірити GitHub Actions на точному HEAD після цього checkpoint-коміту. Якщо QA успішний, спершу знайти точний канонічний шлях статті про personal `a` (поточні припущені шляхи не знайдені, тому не вигадувати нову сторінку), прочитати її разом із порівнянням/пов'язаними темами, тоді зробити вузьку claim-level партію на основі NGLE § 34.8 та за потреби §§ 34.9–34.10. Вже виконано обмежений source/editorial pass для `verbs-with-prepositions.mdx` за NGLE §§ 36.6j–36.10 та DPD `queísmo`; не повторювати його без нових доказів. Питання mood selection саме з часовим `en cuanto` лишається відкритим: NGLE §§ 22.6p, 31.14i підтверджують значення/тип виразу, але не дають достатнього прямого розподілу способів; не формулювати універсального правила.
- Обмеження: не зливати/закривати/rebase/retarget PR без дозволу; не вважати структурне покриття, список URL або зелений QA доказом мовної якості.

## 9. Передача в новий чат

Коли чат наближається до ліміту:
1. Не починати нове широке дослідження.
2. Завершити або безпечно призупинити поточну партію й описати незавершені зміни.
3. Оновити §8.2 точним станом.
4. Додати нові звіти, commit і PR.
5. Відокремити закомічене від запропонованого.
6. Записати невиконані перевірки й відкриті питання.
7. Передати prompt нижче.

### Prompt для копіювання в новий чат

> Продовж роботу над **ClippyFirst/Spanish-Grammar (Gramaticarrona)**. Спершу повністю прочитай документ docs/audits/current/MASTER-EXECUTION-PLAN-AND-CHAT-HANDOFF.md, потім пов’язані аудити й архітектурні документи. Статус у master plan — датований знімок: перевір live гілки, HEAD SHA, PR #26/#27/#28, base/head залежності, файли, рев’ю та CI.
>
> Це граматичний довідник для **українськомовних**, не курс/LMS. Охоплюй різновиди іспанської на належному рівні деталізації. Зберігай Astro + MDX, дизайн-систему й стабільні URL без доказової потреби в зміні. Не зливай/закривай/rebase/retarget PR без дозволу. Не заявляй verified, browser-tested, corpus-attested або publication-ready без доказів.
>
> Продовж із поля «Наступна конкретна дія» у §8.2. Працюй обмеженою партією: прочитай канонічну статтю й порівняння, зафіксуй твердження й точні докази, внеси обґрунтовані зміни, запусти QA на точному commit, онови матриці та §8. Звітуй про завершене, часткове й невиконане окремо. Якщо checkpoint застарів — онови його. Стратегічний висновок: тематична карта й технічний фундамент достатні; основна робота — докази, глибина, українська редактура, регіональна точність, узгодженість сторінок і браузерна/релізна перевірка. Нові теми й skills додавай лише за доведеної прогалини.

### Формат handoff-звіту
- **Що змінилося:** файли/твердження й commit.
- **Що підтверджено:** докази й точний CI run/SHA.
- **Що лишилося:** пріоритет і вплив.
- **Де продовжувати:** одна конкретна дія.
- **Чого не робити:** обмеження.
- **Актуальність:** що перевірити заново.

## 10. Журнал змін

- **2026-10-18:** checkpoint refresh after article batch: exact pre-checkpoint HEAD `e8a86ab5636679c306929252ab392666a1fed1f6` passed full GitHub Actions QA (run 39158161791); the checkpoint-only commit must receive its own CI check.

- **2026-10-18:** обмежена партія статей про артиклі й частини тіла: виправлено Markdown, уточнено межі поняття «нульовий артикль», замінено непідтверджене формулювання про типові помилки на нейтральні контрастні приклади, додано локатори RAE/ASALE і знижено непідтверджений `verified` до `draft`. QA успішний на `013685b4b9bea9d45e3bcfbe6830166a8e3bccb8` (run 39158096274); поточний checkpoint-коміт потребує власної перевірки.

- **2026-10-18:** створено master plan після матриці компетенцій і claim-level пілоту. Зафіксовано продуктові рішення, відомий стан PR/CI, етапи виконання, release gates, маршрутизацію перевірок і prompt для нового чату.
- **2026-10-18:** заповнено й уточнено checkpoint: активна гілка, відомий SHA, PR, статус попереднього CI та наступна конкретна дія. Кожне оновлення цього документа створює новий SHA, тому перед продовженням перевіряти актуальний head і CI.

- **2026-10-18:** requirements 4.7–4.11 pass: proper-name article status downgraded to `draft`, preposition explanation clarified, neutral `lo` Markdown repaired, source locators added, and the coverage matrix updated. Full linguistic verification remains open.

- **2026-10-18:** por/para bounded source-backed batch. Direct NGLE §§ 29.8k–r read; three canonical/comparison pages and the claim-level audit/topic matrix updated; malformed Markdown and unsupported learner-error framing repaired. Pre-checkpoint content SHA: `5c3f09ed9fbf9a72800bcd01b60e1201f221be3e`; QA pass run 39165480113. This document update creates a new HEAD, so check CI for that exact new SHA before proceeding.

- **2026-10-18:** bounded verb-government/personal-a distinction pass. Direct NGLE § 34.8a–i and § 36.6j plus §§ 36.7–36.10 locators and DPD `queísmo` reviewed; corrected `ayudar a alguien` vs `ayudar a limpiar`, repaired malformed MDX, and updated audit/matrix. Content/doc batch commit before this checkpoint: `063be073faed3ca3eb75d7d88c5f83e8b5821d7e`; this checkpoint commit requires its own CI check.
