# Master execution plan and chat handoff — Gramaticarrona

**Призначення:** головний операційний план, живий реєстр прогресу й протокол передачі контексту новому чату.  
**Дата консолідації:** 2026-10-19  
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

## 2. Відомий стан на 2026-10-19 — перевірити заново

### PR #27 — архітектура й аудит
[PR #27](https://github.com/ClippyFirst/Spanish-Grammar/pull/27)  
Відома гілка: docs/grammar-reference-architecture-2026-10-18  
Live snapshot at 2026-10-19: open, ready, not merged; base `main` at `10d49cba91d33c192d1fc0bfa12def1c845cad09`; pre-checkpoint head `23d7c8aebcced401f263f6222203ceba8444c508`; 62 changed files / 334 commits. GitHub temporarily reported mergeability as false while recalculating; no workflow run had surfaced for this exact SHA at the last query. Re-check both after the checkpoint commit. Earlier QA does not validate these later commits.

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

**Знімок оновлюється 2026-10-19.** Перевіряти live HEAD і CI заново після кожного checkpoint-коміту; нижче наведено відомі результати для конкретних SHA.

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
| [#27](https://github.com/ClippyFirst/Spanish-Grammar/pull/27) | Open, ready, not merged; mergeability recalculating | `main` (`10d49cba91d33c192d1fc0bfa12def1c845cad09`) → `docs/grammar-reference-architecture-2026-10-18` (`23d7c8aebcced401f263f6222203ceba8444c508`, pre-checkpoint) | 62 / 334 | 0 submitted reviews; 0 inline threads; no requested reviewers | No run surfaced for this exact SHA at snapshot time; re-check after checkpoint commit |
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


#### Batch: personal `a` — source-backed review of detailed and short pages

- Directly read NGLE § 34.8a–i and relevant § 34.8k–t paragraphs on referentiality/type readings, animals, personification and alternations; read NGLE § 34.10b–e and j for verb classes, `haber`, `tener`, and intensional verbs; read DPD `leísmo`.
- Detailed `src/content/es/pronouns/personal-a.mdx` and short `src/content/es/sentence-structure/personal-a.mdx` now have claim-relevant source locators and were downgraded from `reviewed` to `draft` because prior generic source metadata did not establish claim-by-claim verification.
- Repaired malformed Markdown in the detailed page, clarified the inanimate-object baseline, bounded the `Busco un médico / Busco a un médico que conozco` contrast, and refined the animal note based on NGLE § 34.8o.
- Changed unsupported learner-error headings to neutral contrast examples. Clarified that `Veo a María → la veo` is the general-standard baseline for a feminine direct object; masculine-person leísmo is a separate phenomenon with narrower normative scope.
- Claim-level audit and topic matrix section 18 appended. No corpus query, full regional audit, full inventory of § 34.8–34.10 alternations, independent Ukrainian editorial review, or browser/accessibility/SEO test was performed.


#### Batch: `gustar` and verbs of affect

- Directly read RAE/ASALE DPD `gustar` and NGLE § 35.5b, k–m: experiencer as indirect object; the cause/thing experienced as subject in the core construction; plural agreement examples; verbs of affect including `gustar, encantar, doler, interesar`.
- `src/content/es/verbs/gustar.mdx`: added direct source locators and explicit `draft` status; removed an under-sourced coordinated-infinitive example; changed learner-error heading to neutral contrast examples.
- `src/content/es/verbs/gustar-type-verbs.mdx`: downgraded `verified` to `draft`, added direct DPD/NGLE source locators, and neutralized the learner-error heading.
- Claim-level audit and matrix section 19 appended. No full paradigm audit of all related verbs, detailed regional clitic-doubling survey, corpus/frequency analysis, independent Ukrainian editorial review, or browser/accessibility/SEO test was performed.


#### Batch: object clitics and double-clitic sequences

- Directly read NGLE §§ 16.7, 16.11a/j/l, 16.14, 34.8, 35.2e–h and DPD `leísmo`. Evidence confirms the strict order of clitic clusters, `le/les → se` before accusative clitics, common proclisis/enclisis patterns, clitic doubling, and the bounded scope of masculine-person leísmo.
- `src/content/es/pronouns/objeto-directo-indirecto.mdx`: added direct NGLE/DPD locators and `draft` status; repaired malformed Markdown in object-function contrasts, `se lo`, pronouns after prepositions and `ayudar a alguien`; clarified that personal `a` does not itself mean indirect object; narrowed the leísmo note.
- `src/content/es/pronouns/double-object-pronouns.mdx`: added NGLE source locators and `draft` status; repaired malformed Markdown around OI/OD, `le/les → se`, and contrasting uses of `se`; changed the learner-error heading to neutral contrast examples.
- Claim-level audit and coverage matrix section 20 appended. No complete dialect survey, corpus/frequency study, full clitic placement audit, independent Ukrainian editorial review, or browser/accessibility/SEO test was performed.


#### Batch: `si` conditional clauses

- Directly read NGLE § 47.8a–k, including § 47.8d (forms rejected in ordinary present-day `si` protases), § 47.8e (real/open conditions), § 47.8g/i (potential conditions), and § 47.8j/k (irrealis/counterfactual periods).
- `src/content/es/sentence-structure/conditional-sentences.mdx`: repaired malformed Markdown around `si` and the future/conditional prohibition; added NGLE locators and `draft` status; replaced learner-error framing with neutral contrasts; preserved the distinction between ordinary conditional protases and other occurrences of `si`.
- `src/content/es/sentence-structure/si-clauses-overview.mdx`: downgraded `verified` to `draft`, added NGLE source locators alongside the existing style-guide source, and neutralized the learner-error heading.
- Claim-level audit and matrix section 21 appended. No full inventory of conditional correlations, corpus query, country-by-country variation study, independent Ukrainian editorial review, or browser/accessibility/SEO test was performed.

#### Gates and next action

- G0: partial — live PR/base/head checked; local worktree unavailable.
- G1: partial — scoped matrix updated; 323 → 208 remains a historical structural baseline.
- G2–G5: partial/open — temporal conjunctions have bounded direct evidence; mood distribution specifically with `en cuanto` remains open. Por/para has bounded NGLE evidence for core functions and regional frequency of `por + quantitative duration`, but individual examples, translations, corpus frequency and broader regional claims remain open. The verb-government page has a bounded source/editorial pass. Personal `a` now has a bounded source review across the detailed and short canonical pages; both were downgraded to `draft`. Full verb-pair verification, regional distributions and complete clitic placement remain open. The gustar cluster has a bounded DPD/NGLE pass; both related pages remain `draft`. The core object-clitic and double-clitic pages now have a bounded NGLE/DPD pass and remain `draft`. The `si` conditional overview pair has a bounded NGLE § 47.8 pass; both pages remain `draft`.
- G6: full GitHub Actions QA passed on exact SHA `ab98cbd4616c535252cfc6ec8d466b0c170d0aa5` (run 39208114447) for the previous voseo audit. The subsequent `en cuanto` source batch advanced the branch to pre-checkpoint SHA `23d7c8aebcced401f263f6222203ceba8444c508`; no workflow run had surfaced for that exact SHA at the last query. This master-plan update itself creates a new commit, so check CI on the exact resulting HEAD before proceeding.
- G7: not run. G8: blocked; no publication-ready determination.

- **Наступна конкретна дія:** перевірити GitHub Actions на точному HEAD після цього checkpoint-коміту. Якщо QA успішний, перейти до claim-level аудиту артиклів із частинами тіла та присвійними формами: прочитати відповідні розділи NGLE/DPD, зіставити пояснення й приклади в канонічних сторінках, відділити граматичну норму від типових контекстів та регіональних/прагматичних варіантів. Відкритий пункт `en cuanto` тепер має джерело для проспективного subjuntivo (*en cuanto salgan*), але повний розподіл способів у минулих/звичних/узагальнених контекстах лишається невирішеним; не формулювати універсального правила.
- Обмеження: не зливати/закривати/rebase/retarget PR без дозволу; не вважати структурне покриття, список URL або зелений QA доказом мовної якості.


- **2026-10-19:** follow-up on voseo imperative spelling and plural address. Directly read DPD «voseo» §§ 2.1.2.5, 2.3–2.4, «tilde» §§ 1.2.1–1.2.3, and «vosotros». Added the `decí → decime → decímelo` accentuation contrast; bounded Rioplatense/Chilean voseo claims; documented informal `ustedes` in the Canary Islands and western Andalusia; included Paraguay and Montevideo's formal-register variation in the voseo overview. Audit and coverage matrix section 23 appended. Previous exact checkpoint SHA `6dee0f0c89ff4b2859bee59a99d66171f24f6536` passed run 39207699595; this follow-up has pre-checkpoint SHA `a1a706e6004daac7377a9cedfc306cda3ec00821`, pending a fresh exact-HEAD QA check.

- **2026-10-19:** bounded claim-level audit of the voseo overview completed against DPD «voseo» §§ 2.1.1–2.1.2.5 and 2.3–2.4. Corrected the pronominal-voseo example, distinguished valid pronominal-only voseo from Rioplatense verbal voseo, added Paraguay to the Rioplatense summary, and replaced misleading `Mistake` components with variety-labelled contrasts. Audit/matrix section 24 appended. Previous exact SHA `1b3aad523e887712c91bee02a1bbbd043407070e` passed run 39207926192; pre-checkpoint SHA `b25a7ae33feea900001528045edc1f8e8981e487` requires a fresh exact-HEAD check.

- **2026-10-19:** bounded source pass on temporal `en cuanto`. NGLE §§ 22.6p and 31.14i establish meaning/classification; a directly surfaced excerpt from the RAE-hosted BRAE article «Las conjunciones temporales del español», p. 301, gives prospective `en cuanto salgan` alongside `cuando venga` as subjunctive examples. Updated the two canonical mood pages and the comparison page, and appended audit/matrix section 25. The evidence supports the prospective pattern only; full distribution remains open. Previous exact SHA `ab98cbd4616c535252cfc6ec8d466b0c170d0aa5` passed run 39208114447; pre-checkpoint SHA `23d7c8aebcced401f263f6222203ceba8444c508` requires a fresh exact-HEAD check.

### Live refresh — 2026-10-19 09:16 UTC (після партії про артиклі й присвійні форми)

Цей додаток замінює старі live-цифри вище там, де вони суперечать актуальному GitHub API. Стани PR перевірено повторно; зміни залишаються лише у PR #27.

| PR | State | Base → head | Changed files / commits | Review | CI evidence |
|---|---|---|---:|---|---|
| [#26](https://github.com/ClippyFirst/Spanish-Grammar/pull/26) | Open, ready, not merged; mergeable | `main` (`10d49cba91d33c192d1fc0bfa12def1c845cad09`) → `feat/grammar-research-skills-2026-10-18` (`25e736b5c5dea52031f32cb82964da0fd7d3cf9f`) | 31 / 26 | PR #27 review snapshot does not imply #26 review; no merge performed | Earlier QA pass run 39129981192 for its recorded SHA; recheck before any integration |
| [#27](https://github.com/ClippyFirst/Spanish-Grammar/pull/27) | Open, ready, not merged; mergeable | `main` (`10d49cba91d33c192d1fc0bfa12def1c845cad09`) → `docs/grammar-reference-architecture-2026-10-18` (`06bc25f37e7d8e14bb119fbddc0510c25f8a8d4b`) | 63 / 340 | 0 submitted reviews and 0 inline comments in the latest direct API queries; no merge/retarget/rebase/close | Run 39208303177 passed on prior exact SHA `9cffdec7bda4b77465930f5dd645a75bc2e1d89b`. Run 39208813121 was in progress on content commit `5fe60c7e047f44c27b8b0ad5c3b2dd42fb126751`; it is not evidence for latest HEAD `06bc25f37e7d8e14bb119fbddc0510c25f8a8d4b`. |
| [#28](https://github.com/ClippyFirst/Spanish-Grammar/pull/28) | Open, draft, not merged; mergeable | `feat/grammar-research-skills-2026-10-18` (`25e736b5c5dea52031f32cb82964da0fd7d3cf9f`) → `feat/grammar-research-skills-wave2-2026-10-18` (`c228e69e69f397e0b16a1b9174a49b7ff24912e2`) | 11 / 23 | No integration or status change performed | Earlier failure run 39155530069 remains a known historical failure; latest exact-head CI must be checked before considering integration |

**Completed in this batch**
- Confirmed the prior checkpoint's exact SHA `9cffdec7bda4b77465930f5dd645a75bc2e1d89b` passed GitHub Actions QA run 39208303177.
- Updated `src/content/comparisons/articles.mdx` with links to the canonical body-parts and possessives pages.
- Updated `src/content/es/pronouns/body-parts-possession.mdx` to state explicitly that the cited locators do not establish claim-by-claim verification of all examples, translations, clothing constructions, or regional statements.
- Updated `src/content/es/pronouns/possessive-pronouns.mdx`: added NGLE §§ 18.1–18.7 source locator, set `review_status: draft`, corrected malformed emphasis markup, and bounded the regional note about `vuestro` / `ustedes`.
- Appended bounded findings to `docs/audits/current/CLAIM-LEVEL-PILOT-AUDIT-2026-10-18.md` §26 and disposition to `docs/roadmap/TOPICS-COVERAGE-MATRIX-2026.md` §26.
- No new topic or skill added. No changes to `main`; no PR was merged, closed, rebased or retargeted.

**Evidence and limits**
- RAE/ASALE, *Nueva gramática de la lengua española*: the official contents index identifies possessives §§ 18.1–18.7, inalienable possession §§ 18.7a–i, and possession expressed by indirect complement §§ 35.7i, ñ, p: https://www.rae.es/sites/default/files/Indice_contenidos_gramatica.pdf
- RAE/ASALE § 38.11w discusses the definite article in inalienable-possession relations in literary absolute constructions: https://www.rae.es/gram%C3%A1tica/sintaxis/las-construcciones-absolutas-i-sus-elementos-constitutivos. Its scope is narrower than a universal rule for all spoken body-part constructions.
- This was a bounded source-scope and cross-page consistency pass, not a full audit of every example, translation, clothing construction, dative classification, or country-level variety. Both content pages remain `draft` where relevant; no `verified`, corpus-attested, browser-tested or publication-ready claim is made.
- Local working tree and local `npm run qa` were not available/checked in this GitHub-only pass.

**Next concrete action:** check GitHub Actions for the exact latest branch HEAD after this checkpoint commit. If it passes, continue the claim-level review of body-part possession and possessive forms by opening the exact relevant NGLE text (not only the contents index), checking the examples and Ukrainian translations one by one, and recording any regional claim only when a source supports that specific variety. Keep the batch bounded and retain `draft` status until that review is complete.

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

- **2026-10-18:** personal-a bounded source review completed for detailed and short pages. NGLE §§ 34.8a–t and 34.10b–e/j plus DPD `leísmo` reviewed; both page statuses downgraded to `draft`, markup and scope clarified, audit/matrix updated. Pre-checkpoint content/doc commit: `27a0e5dea2481eeb7e58f4dfaacf145892bd54ce`; this checkpoint commit requires its own CI check.

- **2026-10-18:** bounded gustar pass completed. DPD `gustar` and NGLE § 35.5b/k–m read; both `gustar.mdx` and `gustar-type-verbs.mdx` sourced and set to `draft`; the questionable coordinated-infinitive claim removed; audit/matrix updated. Pre-checkpoint content/doc commit: `d98db61f11e3417bc9707c3a592d3f73171677e`; this checkpoint commit requires its own CI check.

- **2026-10-18:** bounded clitic pass completed. NGLE §§ 16.7, 16.11, 16.14, 34.8, 35.2 and DPD `leísmo` reviewed; repaired and sourced the two core object-clitic pages, kept both `draft`, and updated audit/matrix. Pre-checkpoint content/doc commit: `b600977997f4246999a3d78cd4ad91b6640156f0`; this checkpoint commit requires its own CI check.

- **2026-10-18:** bounded `si` conditional pass completed. NGLE § 47.8a–k read directly; repaired/sourced the two overview pages, downgraded the previously `verified` overview to `draft`, and updated audit/matrix. Pre-checkpoint content/doc commit: `98213bb6aa00b9c0b4bcf4fc7250a98d047475bb`; this checkpoint commit requires its own CI check.

- **2026-10-19:** bounded imperative/address-form pass completed. Directly read NGLE § 42.3c–u and DPD «vos»/«vosotros». Updated the imperative page, forms-of-address page, object-pronoun placement page and voseo page; repaired malformed emphasis/contrast markup, added source locators, neutralized learner-error headings, and downgraded unsupported `reviewed`/`verified` statuses to `draft`. Audit and coverage matrix section 22 appended. Follow-up commit `125d323eaca0f4ba7185200b65c9efca32c3f37e` repaired two remaining malformed emphasis spans in `imperativo.mdx`. Run 39207552978 was cancelled by the later push; no run was surfaced for the exact pre-checkpoint SHA at snapshot time. Mood selection with temporal `en cuanto` remains open because the inspected NGLE sections confirm meaning/classification but not a complete direct mood distribution.



### Live refresh — QA failure and markup repair (2026-10-19)

This addendum supersedes the prior note that run 39208866244 was pending. The user supplied the failed QA result; the workflow log was inspected.

- **Failed exact run:** [39208866244, job 117917615173](https://github.com/ClippyFirst/Spanish-Grammar/actions/runs/39208866244/job/117917615173#step:5:1266). Checkout and `npm ci` succeeded. `typecheck`, MDX preflight (213 files; 0 syntax errors), table audit (204 Markdown tables and 3 CompareTable components; 0 column errors), content validation (208 grammar pages; no blocking errors), link audit (0 problems), content graph (0 broken edges/orphans), and design audits completed. Failure occurred in `npm run audit:final`.
- **Single blocking finding:** `emphasis_artifacts: 1` in `src/content/es/pronouns/possessive-pronouns.mdx`, regional-variation paragraph. The bold markup around `vuestro/vuestra`, `vosotros`, `su/sus`, and `de ustedes` was changed to italics to avoid the detector's false-positive pattern. Repair commit: `063a11c08530627bf25937dd6a1c883d5e91050f`.
- **Audit trail updated:** `docs/audits/current/CLAIM-LEVEL-PILOT-AUDIT-2026-10-18.md` §27 and `docs/roadmap/TOPICS-COVERAGE-MATRIX-2026.md` §27 record the failed gate and narrow repair.
- **No QA pass is yet confirmed for the repair or the subsequent audit/matrix/checkpoint commits.** The earlier run's passed stages are useful diagnosis, not a pass for current HEAD. Do not label the current branch CI-green until a run for its exact HEAD succeeds.
- **No PR was merged/closed/rebased/retargeted.** No changes to `main`.

**Next concrete action:** check the newest workflow run for the current branch HEAD after this checkpoint commit. If the run fails, inspect its exact failing step/log and repair only the demonstrated blocker; rerun against the resulting exact SHA. If it passes, resume the bounded claim-level review of body-part possession and possessive forms by opening the relevant NGLE text itself (not just its index), checking examples and Ukrainian translations individually, and recording variety-specific claims only with variety-specific evidence. Preserve `draft` status until that work is complete.
