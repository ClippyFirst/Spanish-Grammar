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

**Знімок оновлено 2026-10-19 після bounded pass для керування дієслів, queísmo/dequeísmo, швидкої карти subjuntivo та меж заперечених предикатів переконання.** Старіші записи нижче є історичними; для інтеграції використовувати найновіший live refresh і повторно перевіряти SHA, PR-залежності та CI.

### Завершена партія: neutral *lo*

- Прочитано прямий текст NGLE §§ 14.9–14.10 та §§ 44.1, 44.7. У `neutral-lo.mdx` розмежовано референційне `lo + adjective` і емфатичну конструкцію ступеня `lo + adjective/adverb + que`, включно з різницею в узгодженні; уточнено контекстно залежне `lo de` та додано регіональне локативне вживання `lo de + name` у частині американських різновидів.
- У `relative-pronouns.mdx` уточнено `lo que/lo cual`, додано прямі джерела й посилання на нейтральне `lo`; виправлено пропущений абзацний перенос, недоказове формулювання про «типові помилки українців» і дефектний блок з однаковими `bad/good` прикладами.
- Claim audit §51 і topic coverage matrix §51 оновлено; обидві сторінки залишаються `draft`. Це не повний аудит усіх прикладів, перекладів, відносних конструкцій, регіональної частотності чи браузерних gate.
- **Exact full QA passed:** [run 39223141451](https://github.com/ClippyFirst/Spanish-Grammar/actions/runs/39223141451) succeeded on exact content SHA `72ccde00b3afd133c8f76925515592674a188088`. The full QA job completed successfully after `npm ci`. This run validates the neutral-`lo` and relative-pronouns content edits, claim audit, coverage matrix, and the handoff state present at that SHA. No browser, accessibility, SEO, corpus, or publication certification is implied.

### Live PR state

| PR | State / dependency | Base SHA → head SHA | Files / commits | Review | Latest known CI |
|---|---|---|---:|---|---|
| [#26](https://github.com/ClippyFirst/Spanish-Grammar/pull/26) | Open, ready, unmerged; targets `main` | `main` (`10d49cba91d33c192d1fc0bfa12def1c845cad09`) → `feat/grammar-research-skills-2026-10-18` (`25e736b5c5dea52031f32cb82964da0fd7d3cf9f`) | 31 / 26 | 0 submitted reviews; 0 inline threads | Pass, [run 39129981192](https://github.com/ClippyFirst/Spanish-Grammar/actions/runs/39129981192) |
| [#27](https://github.com/ClippyFirst/Spanish-Grammar/pull/27) | Open, ready, unmerged; targets `main`; independent of #26; mergeable at latest query | `main` (`10d49cba91d33c192d1fc0bfa12def1c845cad09`) → `docs/grammar-reference-architecture-2026-10-18` (`5e058888e94c558e9f0b9623a964d11eecc0e612`) | 76 / 473 | 0 submitted reviews; 0 inline threads in last reviewed snapshot | Exact full QA passed on `5e058888e94c558e9f0b9623a964d11eecc0e612`, [run 39237714843](https://github.com/ClippyFirst/Spanish-Grammar/actions/runs/39237714843)
| [#28](https://github.com/ClippyFirst/Spanish-Grammar/pull/28) | Open, **draft**, unmerged; stacked on #26 | `feat/grammar-research-skills-2026-10-18` (`25e736b5c5dea52031f32cb82964da0fd7d3cf9f`) → `feat/grammar-research-skills-wave2-2026-10-18` (`c228e69e69f397e0b16a1b9174a49b7ff24912e2`) | 11 / 23 | 0 submitted reviews; 0 inline threads | Last known failure, [run 39155530069](https://github.com/ClippyFirst/Spanish-Grammar/actions/runs/39155530069), synthetic merge ref `072199b632d0fc8bcd1ae9d1663ea6f62e74d404`; YAML parse error at `src/content/comparisons/ser-estar.mdx:4:72`; recheck before integration |

No merges, closes, rebases, retargets, or changes to `main` were made. PR #28 remains draft and dependent on #26; do not merge automatically. At the most recent live query, #26, #27 and #28 were reported mergeable. A docs-only checkpoint update follows the recorded pre-refresh SHA, so recheck the branch head before any integration decision. Mergeability is not approval or release readiness.

### Next concrete action

Завершено обмежені партії з відносних займенників, subjuntivo/indicativo у відносних підрядних, негативних неозначених антецедентів, *por/para*, особового *a*, керування дієслів прийменниками, *queísmo/dequeísmo*, швидкої карти subjuntivo та меж правила *no creer → subjuntivo*. Усі зміни залишилися в PR #27; статуси сторінок не підвищувалися до `verified` на підставі лише CI.

Наступна дія — повернутися до coverage matrix і вибрати **один наступний конкретний claim cluster** із невирішеною доказовою прогалиною. Перед змінами перевірити актуальний worklist і live PR/HEAD/CI, прочитати канонічну сторінку та пов’язані аудити, визначити точний обсяг і прямі джерела. Якщо прогалина стосується прикладів/перекладів — перевіряти їх по одному; якщо джерело не підтверджує сильне твердження, звузити його або зафіксувати невизначеність. Оновити claim audit, coverage matrix і цей handoff; QA запускати на точному фінальному SHA. Не додавати нові теми/skills без доведеної прогалини.

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

**Next concrete action (superseded by the live refresh below):** run full QA on the current branch HEAD after the body-part dative source pass. If it passes, continue with the possessive forms page; if it fails, inspect and repair only the demonstrated blocker. Keep both pages `draft` until the claim-level work is complete.


### Live refresh — exact CI confirmation and body-part dative source pass (2026-10-19)

- **Exact CI confirmation before this batch:** GitHub Actions run [39209168385](https://github.com/ClippyFirst/Spanish-Grammar/actions/runs/39209168385) completed with `success` on exact SHA `589bda3ee7bf05e3b7ff186fe7058831f730114e` for PR #27. This closes the previous checkpoint’s QA blocker only; it does not certify linguistic correctness or validate later commits.
- **Current branch:** `docs/grammar-reference-architecture-2026-10-18`; work remains on PR #27, which is open, ready, unmerged, and currently reported mergeable. Base remains `main` at `10d49cba91d33c192d1fc0bfa12def1c845cad09`. Do not merge, close, rebase, or retarget any PR.
- **New bounded source pass:** directly read RAE/ASALE *Glosario de términos gramaticales* entries «dativo» and «complemento indirecto». The official text distinguishes dative arguments (including experiencer in *Me duele la garganta*) from adjuncts and explicitly classifies *Le lavó el pelo al niño* as a non-argumental sympathetic dative. Updated `src/content/es/pronouns/body-parts-possession.mdx` to distinguish these patterns and added direct GTG links. Audit §28 and coverage matrix §28 record the evidence and limitations.
- **Important precision:** do not label every dative in a body-part construction as non-argumental. *Me duele la cabeza* profiles an experiencer; *Le lavó el pelo al niño* is explicitly an adjunct in the GTG. The classification of *El médico me revisó la garganta* is phrased cautiously pending a fuller context-sensitive analysis. The construction *Me lavo las manos* is no longer described simply as a direct reflexive object meaning “I wash myself”; *las manos* is the direct object, and *me* is coreferential with the subject and has a possessor interpretation.
- **Evidence limits:** no corpus/frequency study, country-by-country survey, independent Ukrainian editorial review, or browser/accessibility/SEO test. `body-parts-possession.mdx` and `possessive-pronouns.mdx` remain `draft`. The possessive paradigm, individual examples/translations, clothing constructions, and specific distribution of `vuestro/vuestra`, `su/sus`, and `de ustedes` remain to be checked claim by claim.
- **QA status after this batch:** pending for the new content/audit/matrix/checkpoint commits. The pass on SHA `589bda3ee7bf05e3b7ff186fe7058831f730114e` must not be reused as evidence for later commits.
- **Next concrete action (superseded by the live refresh below):** run full GitHub Actions QA on the newest exact HEAD after the direct NGLE possessive pass. If it passes, move to example-by-example review of the clothing/body-part examples and their Ukrainian translations; if it fails, inspect and repair only the demonstrated blocker. Keep both pages `draft`.


### Live refresh — possessive forms direct NGLE pass (2026-10-19)

- **Last confirmed successful CI before this batch:** run [39210103241](https://github.com/ClippyFirst/Spanish-Grammar/actions/runs/39210103241) completed successfully for exact PR #27 HEAD `a593e4d7d2c7c436ae85decfeea74c6533998e8e`. This validates the preceding dative/source-documentation batch, not later possessive-page/audit/matrix/checkpoint commits.
- **New direct source review:** opened and read the relevant RAE/ASALE NGLE online sections: § 18.2 «Propiedades fundamentales de los posesivos»; § 18.3 «Posesivos prenominales y posnominales»; § 18.5a «Interpretación semántica de las relaciones de posesión»; and § 18.7a–i «Alternancias de presencia y ausencia de posesivos». These are direct text pages, not only a table-of-contents locator.
- **Content changes:** `src/content/es/pronouns/possessive-pronouns.mdx` now links to the exact NGLE pages, distinguishes `mi casa`, `un amigo mío` / `la casa es mía`, and `el mío / la mía`, and clarifies that article + possessive patterns are not universally impossible: NGLE § 18.2l–ñ documents regionally restricted forms such as `un su amigo` and `una mi hijita` in specific areas. The neutral general-Spanish baseline remains `mi casa`, without presenting that baseline as a universal prohibition across all varieties. `body-parts-possession.mdx` also now links directly to NGLE § 18.7a–i and has its `updated` metadata corrected to `2026-10-19`.
- **Audit trail:** `CLAIM-LEVEL-PILOT-AUDIT-2026-10-18.md` §29 and `TOPICS-COVERAGE-MATRIX-2026.md` §29 record exact sources, supported claims, changes, and limits. The body-part dative pass is recorded in §28 of both documents.
- **Status and limits:** `body-parts-possession.mdx` and `possessive-pronouns.mdx` remain `draft`. The source pass does not certify every paradigm row, example, translation, clothing construction, country-level distribution of `vuestro/vuestra` or `su/sus`, or ambiguity analysis for `su`. No corpus/frequency study, full country-by-country audit, independent complete Ukrainian review, or browser/accessibility/SEO test was performed.
- **PR safety:** PR #27 remains open and unmerged on `docs/grammar-reference-architecture-2026-10-18`, based on `main`; no PR merge/close/rebase/retarget was performed. No changes were made to `main`.
- **QA after this batch:** pending for the new possessive content/audit/matrix/checkpoint commits. The prior success on `a593e4d7d2c7c436ae85decfeea74c6533998e8e` must not be reused for later HEADs.
- **Next concrete action:** check full GitHub Actions QA for the exact newest HEAD after this checkpoint commit. If it passes, review the body-part/clothing examples and Ukrainian translations one by one, keeping the source-backed dative distinctions and regional limits explicit. If it fails, inspect the exact failing step and repair only the demonstrated blocker. Do not claim corpus-attested, browser-tested, `verified`, or publication-ready.


### Checkpoint update — direct NGLE link and content-date correction (2026-10-19)

- After the direct source pass, the body-parts page metadata was aligned with the actual edit date (`updated: "2026-10-19"`), and its earlier indirect § 14.7/§ 38.11 locator was replaced with the directly relevant NGLE § 18.7a–i page. Commit: `7cec2e486e4d98dea3c88550034c61695e3f7b93`.
- This is a metadata/source-traceability repair; it does not expand the linguistic verification claim. The exact latest full QA must run after this and the checkpoint commit.


### Live refresh — source-frontmatter QA failure and narrow repair (2026-10-19)

- **Failure:** run [39210353945](https://github.com/ClippyFirst/Spanish-Grammar/actions/runs/39210353945), job `117922128723`, failed at `astro sync` while parsing `src/content/es/pronouns/body-parts-possession.mdx:33:5`: `bad indentation of a mapping entry`.
- **Cause:** the newly added direct NGLE § 18.7 source locator in the YAML `sources` list lacked its closing double quote. The remaining QA stages did not run, so this is a frontmatter parse failure, not a content audit result.
- **Repair:** missing quote added in commit `82cd7e57f9135ff44f1d1e628c925591e16b40f7`. Audit §30 and coverage matrix §30 record the failure and repair.
- **QA status:** the repair itself and subsequent audit/matrix/handoff commits still require a full QA pass on exact latest HEAD. Do not reuse run 39210103241, which validated the earlier SHA only.
- **Next concrete action:** check full GitHub Actions QA for the exact newest HEAD after this checkpoint. If green, continue example-by-example review of body-part/clothing examples and Ukrainian translations; if not, inspect the exact failing step and repair only that demonstrated blocker. Keep both content pages `draft`; no merge/close/rebase/retarget.


### Live refresh — QA recovery and example-level body-part review (2026-10-19)

- **QA recovery:** run [39210462855](https://github.com/ClippyFirst/Spanish-Grammar/actions/runs/39210462855) completed successfully on exact SHA `b22a9e53f952b5d9f39804575b25a5d635cd1a6a`. It confirms the missing YAML quote and the previous audit/matrix/handoff updates parse and pass full QA. The immediately preceding run [39210353945](https://github.com/ClippyFirst/Spanish-Grammar/actions/runs/39210353945) failed at `astro sync` due to the missing quote; that was repaired narrowly in `82cd7e57f9135ff44f1d1e628c925591e16b40f7` and recorded in audit/matrix §30.
- **New source-supported content batch after that pass:** `src/content/es/pronouns/body-parts-possession.mdx` now has updated metadata and direct NGLE § 18.7a–i locator. Examples and translations were checked against the exact NGLE text: clarified *Me duele la cabeza*, the body-part article/dative pattern, and examples *Se me cierran los ojos* / *Se me taponaron los oídos*; corrected *Le quitaron la chaqueta* to «З нього/неї зняли куртку»; removed the invented gender in the translation of *Le lavó el pelo al niño*; removed the misleading «рука зламалася» alternative for *Se rompió el brazo*; and replaced the `Mistake` label on *Lavo mis manos* with a neutral note that *Me lavo las manos* is the typical neutral choice but the alternative should not be declared ungrammatical without context.
- **Claim classification:** *Me duele la cabeza* profiles the experiencer; *Le lavó el pelo al niño* is explicitly a non-argumental sympathetic dative in GTG; *Me lavo las manos* has direct object *las manos* and a coreferential possessor dative reading. *El médico me revisó la garganta* is marked as an analysis by analogy, not as a direct example quoted from GTG.
- **Audit trail:** claim-level audit §31 and coverage matrix §31 record the example-level findings and evidence limits.
- **Limits:** no corpus/frequency analysis, exhaustive clothing/body-part example audit, country/register survey, independent full Ukrainian edit, or browser/accessibility/SEO test. Both pages remain `draft`.
- **QA after this content batch:** pending. The success on `b22a9e53f952b5d9f39804575b25a5d635cd1a6a` predates these new content/audit/matrix/checkpoint commits and cannot be reused as their validation.
- **Next concrete action:** check full GitHub Actions QA for the exact newest HEAD after this checkpoint. If it passes, continue by reviewing the remaining clothing/body-part examples and then compare the final claims with the canonical article and article comparison. If it fails, inspect the exact failing step and repair only the demonstrated blocker. Keep `draft`; no merge/close/rebase/retarget.


### Live refresh — QA pass and cross-page article consistency (2026-10-19)

- **Exact QA pass:** run [39210604433](https://github.com/ClippyFirst/Spanish-Grammar/actions/runs/39210604433) completed successfully on SHA `1fc2e52506f22ba837f6a1482ed617c1c60398cc`. This confirms full QA for the previous body-part example/audit/matrix/handoff batch, including the frontmatter quote repair.
- **New changes after that pass:** in `body-parts-possession.mdx`, refined the reading of *Se rompió el brazo* versus *Se le rompió el brazo*. In `articles/special-cases.mdx`, added direct NGLE § 18.7a–i source, updated its date, and linked its body-part section to the detailed guide. The articles comparison already links both the body-part guide and possessive forms page.
- **Audit trail:** claim-level audit §32 and topic coverage matrix §32 record the cross-page pass and limitations.
- **QA after these newest edits:** pending; the success on `1fc2e52506f22ba837f6a1482ed617c1c60398cc` predates the latest content/audit/matrix/checkpoint commits.
- **Next concrete action:** check full GitHub Actions QA for the exact newest HEAD. If green, continue a bounded claim-level review of the remaining clothing constructions and any remaining examples in `special-cases.mdx`; if not, repair only the demonstrated blocker. Keep `body-parts-possession.mdx`, `possessive-pronouns.mdx`, and `special-cases.mdx` in `draft` until their relevant claim-level work is complete. No merge/close/rebase/retarget.


### Live refresh — clothing example analysis (2026-10-19)

- **Exact QA pass before this batch:** run [39210802248](https://github.com/ClippyFirst/Spanish-Grammar/actions/runs/39210802248) completed successfully on exact SHA `445a362707f370528fd0e5f64187e49a22ee9765`, including the body-part/`Se rompió el brazo` distinction and the special-cases cross-link.
- **New bounded content pass:** `body-parts-possession.mdx` now identifies the clothing examples as distinct constructions rather than treating all clitics as the same dative: *Ponte el abrigo*, *Quítate los zapatos*, *Me he manchado la camisa*, *Le quitaron la chaqueta*. It links the general pattern to NGLE § 18.7d/g, notes that the source supports the broader pattern but does not individually analyze every one of these examples, and corrects the quick-reference analysis of *Me lavo las manos*.
- **Audit trail:** claim-level audit §33 and coverage matrix §33 record the source scope and limitations.
- **QA after these newest edits:** pending; the previous success does not validate the new body page/audit/matrix/checkpoint commits.
- **Next concrete action:** run/check full GitHub Actions QA on exact newest HEAD. If green, continue the remaining bounded example check in `special-cases.mdx` and compare all body-part claims across the canonical page, comparison page, and special-cases page. If it fails, diagnose only the exact failing step. Keep relevant pages `draft`; no merge/close/rebase/retarget.


### Live refresh — special-case article claims (2026-10-19)

- Previous exact QA pass: [run 39210981413](https://github.com/ClippyFirst/Spanish-Grammar/actions/runs/39210981413) succeeded on SHA `241461a6f981a00ed4a11addd66da72d7830612c`. It predates the current special-cases edits.
- Directly read RAE/ASALE DPD «el» §§ 2.1–2.2 and 4–6, NGB § 9.1.1, and NGLE § 18.7a–i. The DPD source supports the stressed-initial-/a/ rule, feminine agreement, immediate adjacency, and scoped treatment of personal/geographical names.
- `special-cases.mdx` now links direct DPD text instead of relying only on a contents index for stressed /a/ and proper-name use; *Argentina/la Argentina* and *la María* have more precise variation notes; frontmatter links to both canonical possession guides; the exception for **El** as part of a proper name was added to the *al/del* explanation.
- **Open evidence gaps:** NGLE §§ 14.3 and 15.11–15.13 are still contents-index locators, not directly reviewed text. Profession predicates after *ser*, weekday article use, language names, and contractions *al/del* need direct source verification. `special-cases.mdx` remains `draft`.
- Claim-level audit §34 and topic matrix §34 record the bounded results. No browser/accessibility/SEO or corpus/frequency test was performed.
- **Next action:** locate direct RAE/ASALE text for professions after *ser*, weekdays, language names, and *al/del* (including proper-name exceptions). Then cross-check the canonical definite/indefinite, zero-article, special-cases and comparison pages, and run full QA on the exact newest HEAD. If a direct source cannot be located, retain the explicit evidence gap and narrow the claim. No merge/close/rebase/retarget.


### Live refresh — article consistency repair (2026-10-19)

- Replaced the misleading “mistake” component for a valid qualified profession phrase with a neutral contrast on both canonical article pages; updated their edit dates and retained `draft` status.
- Added the proper-name exception to the contraction summary on the special-cases page and the comparison page.
- Audit §35 and matrix §35 record the changes. Direct sources for profession predicates, weekday article use, language names, and contractions are still open; do not claim these items verified.
- QA: all changes after run 39210981413 remain unvalidated. Run full QA on exact latest HEAD. Keep pages `draft`; no merge/close/rebase/retarget.


### Live refresh — direct NGLE evidence for article omission (2026-10-19)

- Read NGLE § 15.11 directly. § 15.11g gives bare nominal predicates (*Son médicos*); § 15.11m gives a language name without determiner (*Habla ruso*) in a habitual/generic context. These support the general profession and language-name patterns on `special-cases.mdx`, without making them universal rules. Read NGLE § 15.13 directly for construction-specific/phraseological bare nouns; it does not settle weekday article use.
- RAE «Ortografía» directly confirms that a/de do not contract when the article is part of an official place name (e.g. *a El Cairo*, *de El Dorado*). The general *al/del* contraction rule still needs direct NGLE § 14.3 text.
- `special-cases.mdx` source register/evidence note updated. Audit §36 and matrix §36 record evidence and remaining gaps. Weekday names remain the only open item among the requested subtopics aside from full direct verification of the general contraction rule.
- **QA:** changes after the last successful run are pending validation. Run full QA on exact latest HEAD; repair only any demonstrated blocker. Keep relevant pages `draft`; no merge/close/rebase/retarget.


### Live refresh — QA failure and emphasis repair (2026-10-19)

- Run [39211512517](https://github.com/ClippyFirst/Spanish-Grammar/actions/runs/39211512517) failed only at the final emphasis audit: one `emphasis_artifacts` match at `src/content/es/articles/special-cases.mdx:112`, where bold spans around *el* and *él* were adjacent. Other blocking totals were zero.
- Changed both labels to italics in `2c75c52ede13e9c231fd010894360e27924588df`; grammar claims and audit rules are unchanged. Audit §37 and matrix §37 record the incident.
- Full QA is required on exact latest HEAD after the repair and documentation updates. Keep pages `draft`; no merge/close/rebase/retarget.


### Live refresh — QA passed after special-case repair (2026-10-19)

- Full GitHub Actions QA [run 39211693361](https://github.com/ClippyFirst/Spanish-Grammar/actions/runs/39211693361) completed successfully on exact SHA `5fe09ffc671d151df158a0812bbf67f4e2de6eb0`. It includes the emphasis-only repair in `special-cases.mdx` and the audit/matrix/checkpoint updates.
- Current source state: direct DPD «el» §§ 2.1–2.2, 4–6; NGLE § 18.7a–i; NGLE § 15.11 and § 15.13; RAE «Ortografía» place-name contraction exception. The profession and language-name examples now have general direct support. The specific weekday rule and full general *al/del* contraction passage remain open.
- **Next action:** continue only those two unresolved source claims; then cross-check the resulting wording across `definite-indefinite.mdx`, `zero-article.mdx`, `special-cases.mdx`, and `comparisons/articles.mdx`. After any new edits, run full QA on exact latest HEAD. Keep pages `draft`; no merge/close/rebase/retarget.


### Live refresh — article source gaps and cross-page consistency (2026-10-19)

- **Exact QA confirmation at start of this batch:** GitHub Actions run [39211778009](https://github.com/ClippyFirst/Spanish-Grammar/actions/runs/39211778009) completed successfully on exact HEAD `c415272c498fb523a866d27ffca602ffccbc3060`. It validates that SHA only; the current source-traceability/content/audit/matrix/checkpoint edits require another full QA run on the resulting exact HEAD.
- **Cross-page check:** reviewed `definite-indefinite.mdx`, `zero-article.mdx`, `special-cases.mdx`, and `comparisons/articles.mdx`. The profession contrast is consistent and no longer marks `Soy un médico...` categorically wrong. The `al/del` proper-name exception is aligned across the two pages that explain it.
- **Traceability improvement:** `zero-article.mdx` now links directly to NGLE §§ 15.11 and 15.13 instead of only the official contents index; fixed a Ukrainian heading typo.
- **Open source gates:** a bounded RAE/ASALE search did not locate a direct specialized source for weekday article use; examples such as `El lunes...` and `Los lunes...` remain illustrative, not rule-level verified. The general NGLE § 14.3 `al/del` passage also remains uninspected; only the proper-name exception has direct support from RAE *Ortografía*. Keep these gaps explicit, and do not overstate source coverage.
- **Audit trail:** claim-level audit §38 and topic coverage matrix §38 record the exact scope, dispositions, and evidence limits.
- **Next concrete action:** run full GitHub Actions QA on the exact newest HEAD after these edits. If green, continue a bounded source pass for weekday article use and NGLE § 14.3; if no direct source is located, retain the gap and narrow the prose rather than inventing a citation. Then perform a targeted final cross-page pass for contradictory claims and update this handoff again. Keep pages `draft`; no merge/close/rebase/retarget; no changes to `main`.


### Live refresh — source-registry YAML repair (2026-10-19)

- **QA failure:** run [39212495117](https://github.com/ClippyFirst/Spanish-Grammar/actions/runs/39212495117) failed during `astro sync` at `src/content/es/articles/zero-article.mdx:25:322`. The direct-source update had inserted literal `\\n` characters into YAML rather than a real line break between list items.
- **Narrow repair:** replaced the literal sequence with a real newline in commit `2d24c3c6db5031c0f3f233e62541fa9d9c3425c0`. No grammar claim or QA rule was changed.
- **Audit trail:** claim-level audit §39 and topic coverage matrix §39 record the exact failure and repair.
- **Next concrete action:** check the full QA workflow on the newest exact HEAD after this checkpoint commit. If it fails, inspect the exact step and repair only the demonstrated blocker. If it passes, continue the remaining direct-source search for weekdays and NGLE § 14.3; if no precise source is found, keep the explicit evidence gaps and avoid stronger claims. Keep relevant pages `draft`; no merge/close/rebase/retarget and no changes to `main`.


### Live refresh — direct NGLE verification for weekdays and al/del (2026-10-19)

- **Exact QA baseline:** run [39212609998](https://github.com/ClippyFirst/Spanish-Grammar/actions/runs/39212609998) succeeded on exact SHA `b6f0f24bc30d1bb2559135796aca3905a4808468`. It predates the new source/content/audit/matrix/checkpoint commits and cannot validate them.
- **Weekdays closed at rule level:** read NGLE § 14.8c–h directly: https://www.rae.es/gram%C3%A1tica/sintaxis/usos-de%C3%ADcticos-del-art%C3%ADculo-determinado-el-art%C3%ADculo--en-las-expresiones-temporales. The text supports `el lunes` for a calendar day, generic/recurrent `los lunes`, and exceptions such as `Hoy es jueves`, date headings and `en viernes` in non-deictic contexts. Updated `special-cases.mdx` to reflect this distinction.
- **General contraction closed at rule level:** read NGLE § 14.3a–g directly: https://www.rae.es/gram%C3%A1tica/sintaxis/formas-del-art%C3%ADculo-determinado-ii-el-art%C3%ADculo--en-las-construcciones-contractas. The text states that `al/del` contraction is general/systematic when the relevant preposition and masculine singular article coincide; it specifies strict adjacency and distinguishes articles integral to proper names. For names such as `El Salvador`, the source recommends avoiding contraction in writing while noting recorded variants, so wording was narrowed rather than made categorical.
- **Audit trail:** claim-level audit §40 and coverage matrix §40 record the direct sources, exact rule scope, and limits.
- **Next concrete action:** inspect full QA for the exact newest HEAD after the content and checkpoint updates. If green, do a final four-page consistency check (`definite-indefinite.mdx`, `zero-article.mdx`, `special-cases.mdx`, `comparisons/articles.mdx`) and update the handoff with the final SHA and CI result. If red, repair only the demonstrated issue. Keep pages `draft`; no merge/close/rebase/retarget, no changes to `main`, no browser/SEO/accessibility claims.


### Live refresh — final cross-page nuance check (2026-10-19)

- **Targeted cross-page check:** compared the current versions of `definite-indefinite.mdx`, `zero-article.mdx`, `special-cases.mdx`, and `comparisons/articles.mdx`. Profession/article contrasts remain aligned; `zero-article.mdx` now has separate direct-source entries for NGLE §§ 15.11 and 15.13; the special-cases page links directly to NGLE §§ 14.8c–h and 14.3a–g.
- **Nuance repair:** the comparison page previously compressed the proper-name contraction exception into an absolute-sounding clause. It now follows NGLE § 14.3c–d: for a name whose article is integral (e.g. `El Salvador`), contraction is avoided in writing by recommendation, while the source also records variants. It distinguishes this from names whose article is not integral.
- **Audit trail:** claim-level audit §41 and topic coverage matrix §41 record this consistency repair.
- **Next concrete action:** check the full QA run on the exact newest HEAD after these commits. If green, record the precise SHA/run and keep remaining release gates explicit; if red, fix only the demonstrated issue. PR #27 remains open/unmerged; no merge/close/rebase/retarget; `main` unchanged. Pages remain `draft`; do not claim browser, accessibility, SEO, corpus, or publication-ready status.


### Live refresh — exact QA confirmation for article-source batch (2026-10-19)

- **Full QA passed on exact HEAD:** [run 39213013308](https://github.com/ClippyFirst/Spanish-Grammar/actions/runs/39213013308), SHA `ef9f39d629c766bc5ef424777e2a0a2dfd7ab9bf`, workflow `QA`, conclusion `success`. This validates the weekday/contraction source and content edits, cross-page nuance refinement, and the associated audit/matrix/checkpoint commits on that exact SHA.
- **Live PR state at checkpoint:** PR #27 is open, unmerged, base `main` at `10d49cba91d33c192d1fc0bfa12def1c845cad09`, head `docs/grammar-reference-architecture-2026-10-18` at `ef9f39d629c766bc5ef424777e2a0a2dfd7ab9bf`; GitHub reports mergeable/clean. No merge, close, rebase, or retarget was performed; `main` is unchanged.
- **Interpretation:** automated QA is green for this exact commit. This does not certify linguistic verification of the whole corpus or close browser, accessibility, SEO, regional-coverage, or publication gates. The four article pages touched in this batch remain `draft` where applicable.
- **Next concrete action:** begin a separate bounded claim-level batch from the current priority list, starting with `ser/estar/hay` only after reading its canonical article and comparison pages and identifying exact claims, then inspect direct RAE/ASALE sources. Do not change status to `verified` from this QA result. Keep PR #27 open pending the separate PR-dependency/review decision; do not merge without explicit authorization.


### Live refresh — ser/estar/hay source pass and exact QA (2026-10-19)

- **Exact full QA pass:** [run 39213556220](https://github.com/ClippyFirst/Spanish-Grammar/actions/runs/39213556220) completed successfully on exact SHA \`c782cd35afe62e14ea6492be255239854e765adf\`. The \`npm ci\` and full QA steps both succeeded.
- **Direct NGLE texts read:** §§ 37.7a–k on the semantic distinction between *ser* and *estar*; §§ 37.8a–f on locative attributes, event locations, and date/day expressions; §§ 37.9a–e on nominal/adjectival attributes and lexical alternations; §§ 41.6a–d on impersonal *haber* and attested agreement variation; §§ 15.6a–n on presentative/existential *haber*, definiteness effects, and exceptions.
- **Content corrections:** in \`src/content/es/verbs/ser-estar.mdx\` and \`ser-estar-hay.mdx\`, replaced the context-free negative example \`Es en Madrid\` with the specific object-location error \`El libro es en Madrid\`; the notes now acknowledge that \`Es en Madrid\` may be a natural elliptical answer when the event is recoverable from context. In \`ser-estar-hay.mdx\`, replaced the less apt \`han dos libros\` illustration with NGLE-attested plural-agreement examples \`habían dos libros / hubieron problemas\`, contrasted with recommended \`había dos libros / hubo problemas\`.
- **Audit trail:** claim-level audit §42 and coverage matrix §42 record the exact source scope, dispositions, and limits. Both canonical pages retain \`reviewed\`, not \`verified\`; this was not a complete example/translation, corpus, regional-frequency, browser, accessibility, or SEO audit.
- **PR state:** PR #27 remains open and unmerged; \`main\` unchanged. No merge/close/rebase/retarget performed.
- **Next concrete action:** begin the next bounded priority batch for \`indefinido/imperfecto\`, including \`saber/conocer/querer\`: read the canonical tense pages and \`comparisons/past-tenses.mdx\`, identify claims/examples before editing, inspect direct RAE/ASALE source sections, and record only source-supported changes. Do not raise content statuses on the basis of CI alone.


### Live refresh — indefinido/imperfecto claim pass and exact QA (2026-10-19)

- **Full QA passed on exact SHA:** [run 39213803619](https://github.com/ClippyFirst/Spanish-Grammar/actions/runs/39213803619), commit \`0a5ac8f83aa6282f1f487adea4327d657dc97960\`; \`npm ci\` and full QA both succeeded.
- **Direct sources read:** NGLE §§ 23.9a–s, 23.10a–g, 23.11e–g, 23.12a–g, and 23.13a–h; DLE entries for \`saber\`, \`conocer\`, and \`querer\`. The NGLE supports the perfective readings of \`supe\` (‘found out/acquired knowledge’) and \`conocí\` (‘came into contact/met’), the polite imperfect \`quería pedirte un favor\`, and the possibility of perfective presentation of a repeated series when the temporal interval is bounded.
- **Content and metadata repairs:** the imperfecto article no longer marks \`Cuando era niño, comí en casa cada día\` as categorically wrong; it presents \`comía\` as the neutral habitual choice and records the bounded-series qualification. The canonical indefinido and imperfecto pages had been labeled \`verified\` despite incomplete example/translation audits; both are now \`reviewed\` with direct section locators. The comparison page now records NGLE § 23.13d for bounded repetition.
- **Audit trail:** claim-level audit §43 and coverage matrix §43 record scope and limitations. No exhaustive review of every example or Ukrainian translation, corpus-frequency analysis, comprehensive country-by-country audit, browser/accessibility/SEO test, or release certification was performed.
- **PR state:** PR #27 remains open and unmerged; \`main\` unchanged; no merge/close/rebase/retarget.
- **Next concrete action:** review the regional distribution of \`pretérito perfecto compuesto\` versus \`indefinido\` in the canonical \`preterito-perfecto.mdx\`, \`preterito-indefinido.mdx\`, and \`comparisons/past-tenses.mdx\`. Read NGLE §§ 23.7–23.8 directly, distinguish sourced regional patterns from pedagogical generalizations, and avoid treating \`hoy/esta semana/ayer\` as automatic tense triggers. Preserve uncertainty where a specific country-level claim lacks direct evidence.


### Live refresh — regional past-tense batch and context-sensitive examples (2026-10-19)

- **Exact QA pass for the source-grounded regional batch:** [run 39214049711](https://github.com/ClippyFirst/Spanish-Grammar/actions/runs/39214049711) succeeded on SHA 53a7efb2215f4c1fa7bde643d751d3ae7d3e716d. This covered the narrowed regional overview in preterito-perfecto.mdx, direct NGLE source locators, and corresponding audit/matrix updates.
- **Follow-up corrections in this checkpoint:** removed categorical Mistake framing from Ayer he comido (a las dos) in the canonical perfecto/indefinido pages and from Cuando era niño, comí en casa in the comparison page. These are now source-scoped regional/context notes. Claim audit §45 and coverage matrix §45 record the basis and limits.
- **Next action after QA on this exact checkpoint:** move to a bounded subjunctive pass. Read the canonical present subjunctive page and its comparison/overview first, then inspect direct NGLE/RAE sources for mood selection, uncertainty/desire, and subordinate clauses. Preserve the difference between indicative/subjunctive as a syntactic-semantic choice and simplistic “certainty vs uncertainty” rules. Do not raise content statuses without full claim/example review.
- **PR state:** PR #27 remains open and unmerged; main unchanged. No merge/close/rebase/retarget performed.


### Live refresh — present subjunctive source pass (2026-10-19)

- **Previous exact QA pass:** [run 39214201501](https://github.com/ClippyFirst/Spanish-Grammar/actions/runs/39214201501) succeeded on SHA a91c1711f750383b7956da95fb39f280756c2721, covering the regional past-tense corrections and handoff checkpoint.
- **Current source pass:** directly reviewed NGLE §§ 25.2, 25.3, 25.7, 25.10, and 25.13. The canonical present subjunctive page now has a direct source registry and status reviewed; the categorical Mistake label for *Creo que sea verdad* was replaced with a contextual note presenting *Creo que es verdad* as the neutral default.
- **Audit trail:** claim-level audit §46 and coverage matrix §46 record evidence and limits. This does not verify every example/translation or the full trigger list. The trigger pages remain draft.
- **Next action after exact-head QA:** continue with the trigger-list/temporal subordinate clauses only if a claim-level source gap or an overbroad claim is identified; otherwise choose the next high-priority topic from the master plan. Keep PR #27 open/unmerged, main unchanged, and do not merge without explicit authorization.


### Live refresh — present subjunctive core pass and exact QA (2026-10-19)

- **Exact full QA pass:** [run 39214381058](https://github.com/ClippyFirst/Spanish-Grammar/actions/runs/39214381058) succeeded on SHA 8ac34e92fcd2c27d28980ef23d16a7d6935ae94a. This validates the source-registry and wording changes in the canonical presente de subjuntivo page plus claim audit/matrix/handoff updates.
- **Direct source sections read:** NGLE §§ 25.2, 25.3, 25.7, 25.10, and 25.13. The canonical page now has explicit source locators and status reviewed. The isolated example *Creo que sea verdad* was removed from categorical Mistake framing; *Creo que es verdad* is presented as the neutral default while preserving the possibility of context-sensitive modal readings.
- **Scope boundary:** this is a central-claims pass, not full verification of every trigger, tense, translation, or regional variant. The trigger pages remain draft. No browser, accessibility, SEO, or publication certification has been performed.
- **Next concrete action:** audit the trigger-list/temporal subordinate claims in \`subjunctive-triggers.mdx\` and \`subjunctive-triggers-list.mdx\`, especially the broad statements about \`después de que\`, \`cuando\`, and \`hasta que\`. Read direct NGLE §§ 24.5 and 25.14 before editing, then record any necessary claim-level narrowing. Do not infer correctness merely from source links in frontmatter.
- **PR state:** PR #27 remains open and unmerged, base \`main\` unchanged at \`10d49cba91d33c192d1fc0bfa12def1c845cad09\`; head branch remains \`docs/grammar-reference-architecture-2026-10-18\`. No merge, close, rebase, or retarget was performed.


### Live refresh — temporal subjunctive trigger claims (2026-10-19)

- **Direct NGLE text reviewed:** § 24.5c, j–k (temporal *cuando*); § 25.14e (*hasta que*); § 25.14h (*después de que* and *antes de que*). The key distinctions are source-grounded: *hasta que* permits mood alternation in generic contexts but prospective predicates favor subjunctive; future indicative is rejected in temporal *después de que* clauses, while present/past contexts show regional variation.
- **Edits on this checkpoint:** replaced the context-poor categorical Mistake for *Cuando llegas mañana* with a usage note; added the future-indicative restriction to the quick-reference page; corrected the relative-clause source locator from § 25.12 to § 25.10 in both trigger pages. Claim audit §47 and coverage matrix §47 record evidence and limits.
- **Remaining limits:** both trigger pages remain draft; no full audit of all triggers, tense combinations, regional frequencies, translations, browser rendering, accessibility, or SEO has been performed.
- **Next:** run full QA on this exact HEAD, inspect any failing step, then proceed to the next claim-level gap in the master plan. Do not merge PR #27 without explicit approval.
- **PR state:** open and unmerged; branch docs/grammar-reference-architecture-2026-10-18; main unchanged.


### QA result — temporal subjunctive trigger checkpoint (2026-10-19)

- **Exact full QA passed:** [run 39214912286](https://github.com/ClippyFirst/Spanish-Grammar/actions/runs/39214912286) succeeded on SHA 1f36e27d0378c166ef91d3cd75964f47c1f7463e.
- Verified edits: removed context-poor categorical Mistake framing for *Cuando llegas mañana* in favor of a usage note; added the future-indicative restriction for temporal *después de que* to the quick guide; corrected the relative-clause source locator from NGLE § 25.12 to § 25.10 in both trigger pages.
- Direct sources read in this pass: NGLE § 24.5 (especially 24.5c, j–k), § 25.14e, § 25.14h, and § 31.14i. The latter confirms that temporal *en cuanto* denotes immediacy; it does not by itself establish every mood/tense pattern, so the existing claim remains narrowly phrased.
- Both trigger pages remain draft. This pass is not a full trigger-list, tense, translation, browser, accessibility, SEO, or publication audit.
- **Next bounded action:** inspect the comparison page for indicative/subjunctive and temporal clauses against the updated canonical pages, correcting only direct cross-page contradictions. Keep PR #27 open/unmerged and do not alter main.


### Live refresh — cross-page mood comparison and source-locator consistency (2026-10-19)

- **Exact QA pass for the prior temporal-trigger checkpoint:** [run 39214998284](https://github.com/ClippyFirst/Spanish-Grammar/actions/runs/39214998284) succeeded on SHA 1734dbe936194eba975003b9149a8b06c6ed9669.
- **Cross-page check:** the temporal explanations in comparisons/indicative-subjunctive.mdx, when-not-subjunctive.mdx, and subordinate-clauses.mdx align with the reviewed NGLE distinctions for prospective versus habitual temporal clauses. No new grammar-claim contradiction was found in this bounded comparison.
- **Small source-locator repair:** the relative-clause URL in comparisons/indicative-subjunctive.mdx and when-not-subjunctive.mdx points to NGLE § 25.10, not § 25.12; both labels corrected. Claim audit §48 and matrix §48 record the change.
- **Next:** run full QA on the resulting HEAD; then choose the next highest-priority claim-level issue from the plan. Keep both trigger pages draft, PR #27 open/unmerged, and main unchanged.

### Live refresh — source-grounded progressive-periphrasis pass (2026-10-19)

- **Verified prior checkpoint:** full QA run [39215141278](https://github.com/ClippyFirst/Spanish-Grammar/actions/runs/39215141278) succeeded on exact SHA `0acf2b978964b2da6df8a7a78a6637576bcd6492` before this batch.
- **Direct source read:** RAE/ASALE NGLE § 28.12a–s on *estar + gerundio*, especially §§ 28.12c–h (progressive viewpoint and durative contexts), 28.12l–m (recent-interval/repeated readings and state predicates), and 28.12s (English-influenced progressive forms for completed events); also § 23.5f on the alternation with present indicative.
- **Canonical change:** `src/content/es/periphrases/estar-gerundio.mdx` now links to the exact source sections and is marked `reviewed`, not `verified`. Removed unsupported learner-error framing; clarified that *Estoy cantando todos los días* is not inherently wrong; narrowed the note about the simple present; added a qualified warning about progressive forms used for completed events.
- **Evidence log:** claim-level audit §49 and topic coverage matrix §49 record the source, findings, and boundaries. No corpus analysis, full gerund-cluster audit, browser/accessibility/SEO pass, or release certification was performed.
- **PR #27:** remain on `docs/grammar-reference-architecture-2026-10-18`; do not merge/close/rebase/retarget; `main` remains unchanged.
- **Next concrete action:** run full QA on the exact HEAD after this content/audit/matrix/checkpoint batch. If it passes, inspect `verbs/gerund-uses.mdx` and `verbs/gerundio.mdx` for source-locator precision, duplicate explanations, and whether their existing `verified` statuses overstate the scope of documented checks. If QA fails, repair only the demonstrated blocker. Do not raise content statuses based on CI.

### Live refresh — gerund cluster source and page-role pass (2026-10-19)

- **Previous exact QA pass:** [39220951097](https://github.com/ClippyFirst/Spanish-Grammar/actions/runs/39220951097) succeeded on `996ddbb90ff008f3d045ad4f851542b234d9f475` before the gerund-cluster edits.
- **Direct sources read:** NGLE §§ 28.12–28.13 and *Libro de estilo de la Justicia* §§ 6.5–6.5.2. The sources support general gerund functions, the `estar + gerundio` progressive viewpoint, the incremental value of `ir + gerundio`, and selected register-specific warnings; they do not constitute an exhaustive audit of every gerund construction.
- **Changes:** added precise source links; clarified `gerundio.mdx` as the compact form/overview page and `gerund-uses.mdx` as the functional/restrictions page; replaced unsupported “typical mistakes of Ukrainian speakers” headings; changed both broad gerund pages from `verified` to `reviewed` because their prior metadata overstated the documented scope. Claim audit §50 and matrix §50 record the evidence and boundaries.
- **Next concrete action:** run full QA on the exact resulting HEAD. If green, continue to the next highest-priority uncovered claim cluster; do not promote any gerund page without an exhaustive claim/example/translation pass. If red, repair only the demonstrated blocker. PR #27 stays open/unmerged; no merge/close/rebase/retarget; `main` unchanged. Browser, accessibility, SEO, corpus, and publication gates remain open.

### Live refresh — article cluster QA and next priority (2026-10-19)

- **Exact full QA passed:** GitHub Actions [run 39213013308](https://github.com/ClippyFirst/Spanish-Grammar/actions/runs/39213013308) completed successfully on exact SHA `ef9f39d629c766bc5ef424777e2a0a2dfd7ab9bf`. The QA run validates the weekday article and `al/del` source edits, four-page consistency changes, and audit/matrix updates at that SHA.
- **Bounded batch closed at the documented rule level:** NGLE § 14.8c–h directly supports weekday article patterns and construction-specific no-article contexts; NGLE § 14.3a–g supports general `al/del` contraction, strict adjacency, and qualified treatment of proper-name articles. The comparison wording reflects the recommendation and documented variation for names such as `El Salvador`.
- **Four-page consistency check:** `definite-indefinite.mdx`, `zero-article.mdx`, `special-cases.mdx`, and `comparisons/articles.mdx` align on profession predicates, zero article, and the proper-name contraction caveat. This is a targeted cross-page check, not full verification of all examples, translations, country-level variants, or all article constructions.
- **Status boundary:** affected pages remain `draft`; QA does not promote content to `reviewed` or `verified`. No corpus study, independent Ukrainian copy-edit, browser/accessibility/SEO test, or publication certification was performed.
- **Next bounded action:** continue with the next adjacent high-priority topic, neutral `lo`. Read `src/content/es/articles/neutral-lo.mdx` and related pages first; extract exact claims/examples; then consult direct RAE/ASALE NGLE §§ 14.9–14.10 and the relevant relative-clause sections (§§ 44.1–44.2, 44.7) before editing. Separate referential `lo` from emphatic/degree `lo`; record the evidence and limits in the claim audit and topic matrix, run full QA on the exact resulting HEAD, and update this handoff. If a claim remains unsettled, narrow it or leave it open. Do not merge/close/rebase/retarget PRs or modify `main`.
- **PR constraint:** PR #27 remains open and unmerged; PR #26 targets `main`; PR #28 remains a draft stacked on PR #26. Recheck live PR refs and CI before any later integration decision.

### Live refresh — neutral *lo* claim-level pass (2026-10-19)

- **Direct NGLE sections read:** § 14.9, *El artículo neutro lo (I). Su interpretación semántica*; § 14.10, *El artículo neutro lo (II). Contextos anafóricos. Otros usos de lo*; § 44.1, *Introducción. Clases de oraciones de relativo*; and § 44.7, *Particularidades de las relativas sin antecedente expreso*.
- **Evidence-based refinements:** distinguished referential *lo + adjective* (masculine-singular adjective) from emphatic/degree *lo + adjective/adverb + que* (adjective agreement can follow the noun); refined the description of *lo que/lo cual*; added the documented colloquial, regional locative use of *lo de + name* without treating it as universal or neutral across all varieties.
- **Files changed:** `src/content/es/articles/neutral-lo.mdx`; `src/content/es/pronouns/relative-pronouns.mdx`; claim audit §51; topic coverage matrix §51. Direct NGLE URLs replace the former contents-index-only locators for the reviewed claims.
- **Status/limits:** both pages remain `draft`. This is a bounded source pass, not a complete review of all examples/translations, all `lo` constructions, regional frequencies, browser/accessibility/SEO, or publication readiness.
- **Next concrete action:** run full `npm run qa` via GitHub Actions on the exact newest branch HEAD after these edits. If green, record that precise SHA and run URL here; if red, repair only the demonstrated blocker and rerun on the new exact SHA. Then choose the next claim-level priority from the plan. Do not merge, close, rebase, or retarget PRs; do not modify `main`.

### Live refresh — neutral *lo* editorial regression fixes (2026-10-19)

- Clarified the context-dependent reading of `lo difícil del problema` (partitive vs high-degree interpretation) and removed a duplicated `lo de Juan` example.
- On `relative-pronouns.mdx`, repaired the missing paragraph break after the new cross-link, replaced the unsupported “typical mistakes of Ukrainian speakers” heading, and removed an invalid identical bad/good example pair. The replacement explains how `en la que vivo` and `que es grande` can perform distinct relative-clause functions.
- Updated claim audit §51 and topic coverage matrix §51 to record these editorial repairs and limits. No content status was promoted.
- **Follow-up completed:** live PR #27 head was checked; full QA passed on content SHA `72ccde00b3afd133c8f76925515592674a188088` in run [39223141451](https://github.com/ClippyFirst/Spanish-Grammar/actions/runs/39223141451). A subsequent docs-only checkpoint commit is `7ed0f44bf771a8707fb071689ef2d68226aad3cf`; no workflow run surfaced for that documentation-only SHA. The QA claim remains scoped to the exact content SHA, not to a claim that every later documentation commit was rerun.

### QA result — neutral *lo* and relative-pronouns checkpoint (2026-10-19)

- Full GitHub Actions QA [run 39223141451](https://github.com/ClippyFirst/Spanish-Grammar/actions/runs/39223141451) passed on exact content SHA `72ccde00b3afd133c8f76925515592674a188088`.
- The live §8.2 snapshot now records the article/neutral-`lo` evidence, exact CI, PR #26/#27/#28 base/head dependencies, review state, and the next bounded relative-pronouns claim pass.
- This checkpoint update changes documentation only; the QA result above is explicitly tied to the exact content SHA and does not certify browser, accessibility, SEO, corpus, or publication gates.


### Live refresh — relative-pronouns source pass and exact QA (2026-10-19)

- **Final content commit:** `78da140abd4ee05f9ac48514adc5dfdea4579d28` on `docs/grammar-reference-architecture-2026-10-18`, PR #27. The preceding source/audit/matrix commit was `ba26a00597e16e88e01fe54b6386d03f1c1a6aeb`; a follow-up cross-page wording commit fixed the final editorial inconsistencies before QA.
- **Exact full QA passed:** [run 39234234887](https://github.com/ClippyFirst/Spanish-Grammar/actions/runs/39234234887) completed successfully on exact final content SHA `78da140abd4ee05f9ac48514adc5dfdea4579d28`; `npm ci` and full QA succeeded.
- **Direct NGLE text reviewed:** § 22.4, «Los relativos quien, que y cual»; § 22.5, «El relativo posesivo cuyo»; § 44.2, «Las relativas preposicionales»; § 44.4, prosodic characteristics of restrictive/explanatory relatives; and § 44.5, their syntactic/semantic differences. Direct sources: https://www.rae.es/gram%C3%A1tica/sintaxis/los-relativos-quien-que-y-cual ; https://www.rae.es/gram%C3%A1tica/sintaxis/el-relativo-posesivo-cuyo ; https://www.rae.es/gram%C3%A1tica/sintaxis/estructura-de-las-oraciones-de-relativo-i-las-relativas-preposicionales ; https://www.rae.es/gram%C3%A1tica/sintaxis/relativas-especificativas-y-explicativas-i-caracter%C3%ADsticas-pros%C3%B3dicas ; https://www.rae.es/gram%C3%A1tica/sintaxis/relativas-especificativas-y-explicativas-ii-caracter%C3%ADsticas-sint%C3%A1cticas-y-sem%C3%A1nticas .
- **Content changes:** added the source-supported restriction on subject `quien` in restrictive relatives with expressed antecedents (contrasting `el escritor que…` with `el escritor, quien…`); replaced the vague generalization that `el cual` is simply “more formal” with a construction/function-based explanation; bounded the register note for `cuyo`; clarified that article omission in prepositional relative groups depends on the preposition and construction; and made the Ukrainian translations distinguish restrictive from explanatory relatives.
- **Files changed:** `pronouns/relative-pronouns.mdx`, `pronouns/relative-pronouns-review.mdx`, `sentence-structure/relative-clauses.mdx`, `sentence-structure/relative-clauses-depth.mdx`, claim-level audit §52, and topic coverage matrix §52. The quick guide `relative-pronouns-review.mdx` was downgraded from `verified` to `draft` because the earlier generic source entry did not document claim-by-claim verification. The related pages remain `draft`.
- **Limits:** no corpus-frequency study, country-by-country distribution, exhaustive example/translation review, independent Ukrainian copy-edit, browser/accessibility/SEO audit, or publication certification. CI confirms technical QA only, not complete linguistic verification.
- **Next concrete action:** source-audit the subjunctive-selection claims inside relative clauses against NGLE §§ 25.10–25.11, as specified above. Keep PR #27 open/unmerged; do not merge, close, rebase, or retarget any PR, and do not modify `main`.


### Live refresh — relative-clause mood selection and exact QA (2026-10-19)

- **Content commit:** `eefdfd640e80f2e72b6e44a9f78adc74b38970d8` on `docs/grammar-reference-architecture-2026-10-18`, PR #27.
- **Exact full QA passed:** [run 39234635902](https://github.com/ClippyFirst/Spanish-Grammar/actions/runs/39234635902) succeeded on exact content SHA `eefdfd640e80f2e72b6e44a9f78adc74b38970d8`; `npm ci` and full QA succeeded.
- **Direct sources read:** RAE/ASALE NGLE § 25.10, *El modo en las subordinadas relativas (II). Interpretación de los grupos nominales que las contienen* (https://www.rae.es/gram%C3%A1tica/sintaxis/el-modo-en-las-subordinadas-relativas-ii-interpretaci%C3%B3n-de-los-grupos-nominales-que-las-contienen) and § 25.11, *El modo en las subordinadas relativas (III). Inductores modales* (https://www.rae.es/gram%C3%A1tica/sintaxis/el-modo-en-las-subordinadas-relativas-iii-inductores-modales).
- **Evidence-based changes:** clarified that indicative often favors a specific reading and subjunctive often favors a non-specific reading, but this is not the same as “real vs unreal” or “exists vs does not exist”; real entities may occur with subjunctive, and generic contexts can permit indicative. Removed categorical Mistake framing for `Busco un piso que tiene terraza` and replaced it with a context-qualified usage note, reflecting NGLE § 25.11e.
- **Files changed:** `sentence-structure/relative-clauses-depth.mdx`, `sentence-structure/relative-clauses.mdx`, `comparisons/indicative-subjunctive.mdx`, `moods/subjunctive-triggers.mdx`, `moods/subjunctive-triggers-list.mdx`, claim audit §53, and topic coverage matrix §53. All relevant content pages remain `draft`.
- **Limits:** no exhaustive audit of every subjunctive trigger, every example/translation, regional frequencies, or country-by-country distribution; no browser/accessibility/SEO audit or publication certification. CI validates technical QA only.
- **Next concrete action:** review the regional/exception note for indicative with negative indefinite antecedents in `subjunctive-triggers-list.mdx` and `when-not-subjunctive.mdx`, against NGLE § 25.10q–s and § 25.11n, as specified above. PR #27 remains open/unmerged; do not merge, close, rebase, or retarget any PR, and do not modify `main`.


### Live refresh — negative-indefinite relative clauses and exact QA (2026-10-19)

- **Content commit:** `f3020bdcb7c9c87536a4b2c78e4651963e240d11` on `docs/grammar-reference-architecture-2026-10-18`, PR #27.
- **Exact full QA passed:** [run 39234874840](https://github.com/ClippyFirst/Spanish-Grammar/actions/runs/39234874840) succeeded on exact content SHA `f3020bdcb7c9c87536a4b2c78e4651963e240d11`; `npm ci` and full QA succeeded.
- **Direct sources:** NGLE § 25.10q–s, especially § 25.10r, and § 25.11n: https://www.rae.es/gram%C3%A1tica/sintaxis/el-modo-en-las-subordinadas-relativas-ii-interpretaci%C3%B3n-de-los-grupos-nominales-que-las-contienen ; https://www.rae.es/gram%C3%A1tica/sintaxis/el-modo-en-las-subordinadas-relativas-iii-inductores-modales .
- **Changes:** documented subjunctive as the usual choice after negative indefinite antecedents in finite relative clauses; recorded the NGLE-attested indicative variant (*No conozco ningún libro que trata de ese asunto*) as a generic, regionally limited pattern found in some varieties, including Peruvian Spanish and occasional Mexican/Central American data, and rejected in others. The text explicitly avoids presenting it as a universal alternative or making claims about every speaker in those regions.
- **Files changed:** `moods/subjunctive-triggers-list.mdx`, `moods/when-not-subjunctive.mdx`, claim audit §54, and topic coverage matrix §54. Both content pages remain `draft`.
- **Limits:** no country-by-country frequency map, corpus analysis, full trigger-list audit, exhaustive example/translation review, browser/accessibility/SEO audit, or publication certification.
- **Next concrete action:** bounded source audit of `prepositions/por-para.mdx` and `comparisons/por-para.mdx`, using direct RAE/ASALE sources after extracting the exact claims from both pages. Keep PR #27 open/unmerged; no merge/close/rebase/retarget, and `main` unchanged.


### Live refresh — *por/para* source pass and exact QA (2026-10-19)

- **Final content commit:** `6eb7026864541415f417d311489959c011db5288` on `docs/grammar-reference-architecture-2026-10-18`, PR #27.
- **Exact full QA passed:** [run 39235511092](https://github.com/ClippyFirst/Spanish-Grammar/actions/runs/39235511092) succeeded on exact content SHA `6eb7026864541415f417d311489959c011db5288`; `npm ci` and full `npm run qa` succeeded.
- **Intermediate failures and repair:** runs [39235261391](https://github.com/ClippyFirst/Spanish-Grammar/actions/runs/39235261391) and [39235383923](https://github.com/ClippyFirst/Spanish-Grammar/actions/runs/39235383923) failed at MDX preflight because literal backslash-n characters had been inserted into the comparison-table source. The final commit replaces those with real line breaks; exact-head run 39235511092 confirms the repaired state.
- **Direct sources reviewed:** NGLE § 29.8k–r (https://www.rae.es/gram%C3%A1tica/sintaxis/usos-particulares-de-las-preposiciones-ii-en-entre-hacia-hasta-para-por-sin-sobre-tras), § 46.1 (https://www.rae.es/gram%C3%A1tica/sintaxis/introducci%C3%B3n-caracter%C3%ADsticas-generales-de-estas-construcciones), and § 46.7 (https://www.rae.es/gram%C3%A1tica/sintaxis/caracter%C3%ADsticas-particulares-de-las-oraciones-finales).
- **Changes:** added the approximate temporal use of `por` (*Llegaré por Navidad*) and separated it from the prospective deadline `para el martes`; clarified the employer reading of `trabajar para una empresa`; replaced the unnatural `Estudio por el examen` contrast with a clearer cause/purpose pair; added a source-backed `por/para no despertar a los niños` pair to show their nuanced overlap; removed a bad/good component that compared unrelated sentences; and widened the explanation of `por ti` to include beneficiary/substitution readings where context supports them.
- **Files changed:** `prepositions/por-para.mdx`, `comparisons/por-para.mdx`, claim audit §55, and topic coverage matrix §55. Both content pages remain `draft`.
- **Limits:** no exhaustive audit of all examples, regional frequency beyond the cited duration pattern, every `para + infinitivo` construction, verb-preposition government, independent Ukrainian copy-edit, browser/accessibility/SEO, or publication certification.
- **Next concrete action:** bounded source audit of `pronouns/personal-a.mdx` and `sentence-structure/personal-a.mdx`, using exact direct RAE/ASALE sources after inventorying their claims. PR #27 remains open/unmerged; no merge/close/rebase/retarget, and `main` unchanged.


### Live refresh — personal *a* source pass and exact QA (2026-10-19)

- **Content commit:** `6cb910501ce16c7c8dfe113b9c58ef5dab4c3d1f` on `docs/grammar-reference-architecture-2026-10-18`, PR #27.
- **Exact full QA passed:** [run 39235826245](https://github.com/ClippyFirst/Spanish-Grammar/actions/runs/39235826245) succeeded on exact content SHA `6cb910501ce16c7c8dfe113b9c58ef5dab4c3d1f`; `npm ci` and full `npm run qa` succeeded.
- **Direct NGLE evidence:** § 34.8a, d–i, k–n, o–t: https://www.rae.es/gram%C3%A1tica/sintaxis/el-complemento-directo-preposicional-i-nombres-y-pronombres-complementos-de-persona-y-de-cosa-personificada . The section says *a* is required in some contexts, excluded in others, and optional in still others; relevant factors include animacy, personification, definiteness, specificity, verb class and context. §§ 34.8k–n also document restricted type/archetype readings in which *a* can be absent even with a definite human NP (e.g. *encontrar el político perfecto*).
- **Changes:** aligned the Ukrainian term to **особове a** in the detailed page title/body; added the source-supported, tightly bounded type/archetype caveat to both canonical pages; kept the warning against a universal “person = a” rule; both pages remain `draft`.
- **Files changed:** `pronouns/personal-a.mdx`, `sentence-structure/personal-a.mdx`, claim audit §56, and topic coverage matrix §56.
- **Limits:** no full inventory of every verb class or animate/inanimate object, no exhaustive translation/editing pass, no complete leísmo survey, and no browser/accessibility/SEO or publication certification. CI is technical QA only.
**Current result:** The verb–preposition government pass is complete. Full QA passed on exact content SHA `a398c54d2d57c8014a4242f5d3751cd62e62dc53` in [run 39236582606](https://github.com/ClippyFirst/Spanish-Grammar/actions/runs/39236582606).

**Next concrete action:** Do a bounded **conjunctions que/de que and queísmo/dequeísmo consistency audit** across `src/content/es/conjunctions/que-de-que.mdx`, `src/content/es/prepositions/verb-preposition-pairs.mdx`, `src/content/es/prepositions/verbs-with-prepositions.mdx`, and the relevant comparison page if one exists. Start by inventorying the actual claims and examples; use direct RAE/ASALE DPD entries for *queísmo*, *dequeísmo*, *pensar*, *ayudar*, and the exact verb entries in scope. Distinguish required government from optional alternations and from cases where the subordinate clause is a subject/direct object and no preposition belongs. Do not rewrite the entire subjunctive system. Record source, disposition, and limits in the audit/matrix; QA the exact content HEAD. Keep all pages `draft` unless the full in-scope claim/example/translation set has been checked.


### Live refresh — verb–preposition government source pass (2026-10-19)

- **Starting HEAD:** `8e4161c987decc5b660fa574a3ec056232a875c2`; **content HEAD:** `a398c54d2d57c8014a4242f5d3751cd62e62dc53`; branch `docs/grammar-reference-architecture-2026-10-18`, PR #27.
- **Exact full QA passed:** [run 39236582606](https://github.com/ClippyFirst/Spanish-Grammar/actions/runs/39236582606), on content SHA `a398c54d2d57c8014a4242f5d3751cd62e62dc53`; `npm ci` and full `npm run qa` succeeded.
- **Sources directly reviewed:** NGLE §§ 36.8–36.10; DPD entries *queísmo*, *depender*, *pensar*, *soñar*, *ayudar(se)*. Exact links are listed in the two canonical pages and claim audit §57.
- **Changes in this batch:** added source metadata to `verb-preposition-pairs.mdx`; expanded and corrected source metadata in `verbs-with-prepositions.mdx`; fixed malformed emphasis and the corrupted `Depende de que vengas` explanation; corrected the classification of `ayudar a alguien` (personal *a*, not lexical prepositional government); documented the attested infinitival alternation `soñar con/en + infinitivo`; qualified `interesarse en/por` and `preocuparse de/por`; clarified the semantic contrast around `pensar en` and `¿Qué piensas de...?`.
- **Audit/matrix:** appended §57 to `CLAIM-LEVEL-PILOT-AUDIT-2026-10-18.md` and `TOPICS-COVERAGE-MATRIX-2026.md`.
- **Limits:** no exhaustive verb inventory, corpus frequency study, complete regional distribution, full example/translation audit, or browser/accessibility/SEO/release certification. Both pages remain `draft`.
- **Next action:** bounded `queísmo/dequeísmo` consistency audit, starting from the exact canonical page and the two government pages. Do not generalize one verb’s pattern to every `que` clause.


### Live refresh — queísmo/dequeísmo source pass (2026-10-19)

- **Starting HEAD:** `9c288a2a6d6d021c50fde19a5c72f705d7b53b57`; branch `docs/grammar-reference-architecture-2026-10-18`, PR #27.
- **Direct sources reviewed:** DPD *dequeísmo* §§ 1–2, 5; DPD *queísmo* §§ 1a–b; DPD entries *dudar*, *advertir*, *informar*; related NGLE §§ 36.8–36.10 already recorded in audit §57.
- **Changes:** corrected the malformed opening emphasis; changed `review_status` from `verified` to `draft`; added direct source locators for both DPD articles and relevant verb entries; separated dequeísmo before direct-object clauses, subject clauses, and wrong-preposition substitution; documented accepted variation in `dudar`, semantic difference in `advertir`, and regional framing for `informar`; clarified queísmo involving *en* as well as *de*; updated cross-links and audit/matrix §58.
- **Limits:** no exhaustive predicate list, no complete audit of every example/translation on the three pages, no corpus frequency study, no full regional survey, and no browser/accessibility/SEO or publication certification.
- **Next action:** bounded example-and-translation audit of the three canonical pages listed in §8.2. Do not expand into the whole subjunctive system.


### Live refresh — targeted example/translation audit (2026-10-19)

- **Starting HEAD:** `73334d848975c9e6d3c35257a305634d6ee30b37`; branch `docs/grammar-reference-architecture-2026-10-18`, PR #27.
- **Direct evidence reused:** NGLE §§ 36.9i, 36.9j, 36.10ñ; DPD *pensar*, *soñar*, and *queísmo*.
- **Changes:** removed the potentially misleading categorical example `Pienso de ti` and replaced it with a context contrast; clarified the sourced `soñar con/en + infinitivo` note; qualified the `acordarse de que` warning according to DPD's careful-register recommendation; replaced vague wording about `interesarse en/por` with the sourced alternation; appended claim audit §59 and coverage matrix §59.
- **Limits:** targeted example/translation review only; no exhaustive review of all examples, corpus attestation, frequency, full regional distribution, browser/accessibility/SEO or publication certification.
- **Next action:** select one next high-priority source gap from the live coverage matrix; do not broaden scope without evidence.


### Live refresh — exact status after queísmo/dequeísmo and example pass (2026-10-19)

| PR | State | Base → head | Files / commits | Mergeability | QA evidence |
|---|---|---|---:|---|---|
| [#26](https://github.com/ClippyFirst/Spanish-Grammar/pull/26) | Open, ready, not merged | `main` (`10d49cba91d33c192d1fc0bfa12def1c845cad09`) → `feat/grammar-research-skills-2026-10-18` (`25e736b5c5dea52031f32cb82964da0fd7d3cf9f`) | 31 / 26 | GitHub reported `mergeable: true` | Last known run `39129981192`; recheck before integration |
| [#27](https://github.com/ClippyFirst/Spanish-Grammar/pull/27) | Open, ready, not merged | `main` (`10d49cba91d33c192d1fc0bfa12def1c845cad09`) → `docs/grammar-reference-architecture-2026-10-18` (`eea5fa340e9904ac774c2e0445f201e4fc828321`) | 76 / 469 | GitHub reported `mergeable: true` | Exact full QA passed: [run 39237154497](https://github.com/ClippyFirst/Spanish-Grammar/actions/runs/39237154497) |
| [#28](https://github.com/ClippyFirst/Spanish-Grammar/pull/28) | Open, **draft**, not merged; stacked on #26 | `feat/grammar-research-skills-2026-10-18` (`25e736b5c5dea52031f32cb82964da0fd7d3cf9f`) → `feat/grammar-research-skills-wave2-2026-10-18` (`c228e69e69f397e0b16a1b9174a49b7ff24912e2`) | 11 / 23 | GitHub reported `mergeable: true` | Historical failure [run 39155530069](https://github.com/ClippyFirst/Spanish-Grammar/actions/runs/39155530069) remains; recheck exact head before integration |

The branch `docs/grammar-reference-architecture-2026-10-18` was live at `eea5fa340e9904ac774c2e0445f201e4fc828321` when this refresh was written. No PR was merged, closed, rebased or retargeted; `main` was unchanged. Mergeability is not approval or release readiness.


### Live refresh — quick subjunctive-trigger table pass (2026-10-19)

- **Starting HEAD:** `32a8816b388813467eaa69c1e4ab026e872f4885`; branch `docs/grammar-reference-architecture-2026-10-18`, PR #27.
- **Direct sources reviewed:** NGLE § 25.2h, k (inductors, `ojalá`, `dudar`); NGLE § 25.3b, k, q (basic selection, will/intention, affective predicates); NGLE § 25.7i (negated `creer/pensar` and possible indicative alternation); DPD, `dudar`.
- **Changes:** qualified `esperar que` as a subjunctive model in its hope/wish reading; corrected the quick-guide mismatch between `alegrarse de` and `Me alegra`; added both `dudar que` and `dudar de que` as documented frames; made explicit that `ojalá` does not alternate with indicative; added DPD source and audit/matrix §60.
- **Limits:** selected quick-table rows only; no complete audit of every subjunctive trigger, every example/translation, all regional varieties, browser/accessibility/SEO, or publication certification.
- **Next action:** bounded direct-source pass on `when-not-subjunctive.mdx`, limited to knowledge/perception/assertion predicates and negated `creer/pensar`; do not expand into all mood-selection contexts.


### Live refresh — subjunctive-trigger quick-guide pass (2026-10-19)

- **Content HEAD:** `c9061ad412997385e5a0299a5017bb876d8aee64`, branch `docs/grammar-reference-architecture-2026-10-18`, PR #27.
- **Exact full QA passed:** [run 39237498507](https://github.com/ClippyFirst/Spanish-Grammar/actions/runs/39237498507) on exact content SHA `c9061ad412997385e5a0299a5017bb876d8aee64`; `npm ci` and full `npm run qa` succeeded.
- **Changes:** in `subjunctive-triggers-list.mdx`, qualified `esperar que + subjuntivo` as the hope/wish reading, corrected the mismatch between `alegrarse de` and `Me alegra`, added the documented `dudar que / dudar de que` alternation, and noted that `ojalá` does not alternate with indicativo. The detailed page now records the `dudar de que` form and its DPD/NGLE evidence. Added claim audit §60 and matrix §60.
- **Sources:** NGLE §§ 25.2h, k and 25.3b, k, q; DPD, `dudar`. Source text was read directly, not inferred from the contents index.
- **Limits:** selected quick-guide rows only; no complete verification of every trigger, example/translation, regional pattern, browser/accessibility/SEO or publication readiness.
- **Next action:** bounded direct-source audit of `when-not-subjunctive.mdx` and the corresponding comparison section, limited to knowledge/perception/assertion predicates and negated `creer/pensar`.


### Live refresh — negated belief predicates and indicative variation (2026-10-19)

- **Starting HEAD:** `bdff64f0fd4bb1922ccf0d0b740611382605aee0`; branch `docs/grammar-reference-architecture-2026-10-18`, PR #27.
- **Direct source:** NGLE § 25.7i, read directly: https://www.rae.es/gram%C3%A1tica/sintaxis/el-modo-en-las-subordinadas-sustantivas-v-negaci%C3%B3n--y-subjuntivo-en-la-subordinaci%C3%B3n-sustantiva-otros-inductores-asimilables-a-la-negaci%C3%B3n .
- **Change:** preserved `No creo que venga` as the typical neutral subjunctive model, but added the source-attested indicative example `No creen que es necesario aumentar la cantidad de funcionarios` as a marked discourse-dependent alternative in `when-not-subjunctive.mdx` and `comparisons/indicative-subjunctive.mdx`. Recorded the boundary in claim audit §61 and matrix §61.
- **Limits:** no full semantic, regional-frequency, or corpus survey; the indicative example is not presented as a default learner model. Both pages remain `draft`.
- **Next action:** select one next claim cluster with a specific unresolved evidence gap from the coverage matrix; do not expand scope without evidence.


### Live refresh — negated belief predicate pass (2026-10-19)

- **Content HEAD:** `5e058888e94c558e9f0b9623a964d11eecc0e612`, branch `docs/grammar-reference-architecture-2026-10-18`, PR #27.
- **Exact full QA passed:** [run 39237714843](https://github.com/ClippyFirst/Spanish-Grammar/actions/runs/39237714843), on exact content SHA `5e058888e94c558e9f0b9623a964d11eecc0e612`; `npm ci` and full `npm run qa` succeeded.
- **Direct source:** NGLE § 25.7i, read directly. It documents indicative in certain contexts with negated `creer/pensar`, e.g. `No creen que es necesario aumentar la cantidad de funcionarios`, and distinguishes this discourse-dependent pattern from the neutral subjunctive baseline.
- **Changes:** added a qualified note to `when-not-subjunctive.mdx` and `comparisons/indicative-subjunctive.mdx`; appended claim audit §61 and coverage matrix §61. Both pages remain `draft`.
- **Limits:** no full semantic, regional-frequency or corpus survey; the indicative variant is not presented as a default learner model. No browser/accessibility/SEO or publication certification.
- **Next action:** choose one next high-priority claim cluster with a concrete unresolved evidence gap from the live coverage matrix.


### Live refresh — gustar canonical-page / quick-reference split (2026-10-19)

- **Starting HEAD:** `59f7bf5e1a4cf0cf397fc61971bb8f91a0c5609e`, branch `docs/grammar-reference-architecture-2026-10-18`, PR #27. PRs #26, #27 and #28 were rechecked live: all remain open and unmerged; #28 remains draft and stacked on #26. No PR or base branch was changed.
- **Evidence reviewed:** canonical `verbs/gustar.mdx`, overlapping `verbs/gustar-type-verbs.mdx`, existing high-risk cross-page audit, and RAE/ASALE DPD *gustar*, NGLE § 35.5b, k–m, and GTG *complemento indirecto*.
- **Changes:** renamed `gustar-type-verbs.mdx` as a quick reference in Ukrainian, Spanish and English metadata; trimmed duplicated explanation while retaining the construction formula, agreement and pronoun tables, representative verbs, two error checks and scoped regional note; added reciprocal links between the quick reference and full canonical article. Both original URLs remain intact. Appended claim audit §62 and coverage matrix §62. Both pages remain `draft`.
- **Limits:** this is a bounded page-role/duplication fix, not full verification of every example/translation, a corpus or regional-frequency study, browser/accessibility/SEO testing, or release certification. No analytics-based search-intent claim was made.
- **QA:** pending for the final resulting HEAD; do not infer success from individual commits or content inspection. Record the exact workflow result after the final documentation commit.
- **Next action:** continue the high-risk cross-page backlog with the object-clitic placement cluster. First inspect canonical clitic pages and all related comparisons; then read the applicable RAE/ASALE NGLE/DPD evidence on clitic placement with infinitives, gerunds, imperatives and finite verbs. Select one bounded unresolved claim, avoid treating every alternative as universally interchangeable, update the claim audit/matrix/handoff, and run full QA on the exact final HEAD.


### Live refresh — clitic placement restrictions and QA correction (2026-10-19)

- **Starting context:** continued the object-clitic placement cluster named above after completing the bounded *gustar* page-role pass. PR #27 remains the active branch; no merge, close, rebase or retarget was performed.
- **Direct sources read:** RAE/ASALE NGLE § 16.7c on proclisis/enclisis; § 16.12a–m on clitic-placement alternations and restrictions; § 16.13 on complex structures; FundéuRAE's *se lo hay que enseñar* note. The NGLE sections were opened directly and relevant paragraphs inspected, not inferred from an index.
- **Content change:** in `src/content/es/pronouns/object-pronoun-placement.mdx`, replaced the old manual-index-only locator with direct current NGLE links and added source-supported examples where anteposition is limited: non-prospective/simultaneous infinitives, infinitive subject clauses, negation between verbs, and verbs with prepositional complements. Qualified speaker-sensitive judgments instead of presenting every alternative as equally available. Page remains `draft`.
- **Audit updates:** claim audit §63 and topic coverage matrix §63 record direct evidence, changes and limits.
- **QA correction log:** full QA first failed at `typecheck` on `695c56b6e75281d960c2eee64ebb08667e7a6853`, then again on `4ecce5bb3a7601188822b2ff1939f92f50a1bd10`, because the new Ukrainian, Spanish and English `title_*` YAML values in `gustar-type-verbs.mdx` contained colons and all required quoting. The first correction quoted only the Spanish/English values, leaving the Ukrainian title invalid; commit `4eb9bee8f582564d44fa19ce5f0b0b9c761225dc` now quotes all three. These were frontmatter syntax failures, not grammar-content findings. A full QA run must still pass on the final HEAD after this correction.
- **Current content HEAD before this handoff update:** `a38f7724715f819cb177c2a41a8bd3219f52c832`. The handoff commit itself will create a new HEAD, so full QA must be checked on the exact resulting commit before reporting success.
- **Remaining scope:** no exhaustive clitic-page/example/translation audit, no full regional or corpus-frequency study, no browser/accessibility/SEO validation, and no publication certification.
- **Next action after QA:** continue with the next highest-risk item from `HIGH-RISK-CROSS-PAGE-AUDIT-2026-10-18.md` (article exceptions or `ser/estar/hay` cross-page alignment), but first inspect the exact live matrix and source gap. Do not expand into a broad clitic rewrite unless QA or direct evidence reveals a concrete defect.


### QA result — gustar/clitic continuation (2026-10-19)

- Full GitHub Actions QA passed on exact HEAD `9df1fb7bda2f7fb131ac8c9673d92e896ba9dcc6`: [run 39238975321](https://github.com/ClippyFirst/Spanish-Grammar/actions/runs/39238975321). `npm ci` and the complete `npm run qa` pipeline succeeded.
- This pass includes the gustar quick-reference split, the clitic-placement caveat update, claim audit §63, matrix §63, and this handoff's corrected YAML QA log.
- Note: the handoff update recording this result creates a new documentation-only HEAD. Check CI once more against that exact resulting SHA; do not treat the prior SHA's green result as evidence for a later commit.


### Live refresh — event-location *ser/estar* claim correction (2026-10-19)

- **Starting HEAD:** `e8b8732cb8143e2914539c1aba08d7a88a442235`, PR #27 branch `docs/grammar-reference-architecture-2026-10-18`. PR #26/#27/#28 were rechecked before the batch; all remained open and unmerged, with #28 still draft. No merge, close, rebase, retarget, or base-branch change.
- **Specific gap:** the high-risk cross-page backlog identified `ser/estar/hay`. In `src/content/es/verbs/ser-estar-location.mdx`, the `Mistake` example treated `La reunión está en la sala 2` as a categorical error, although that exact sentence was not the strongest unambiguous counterexample for a context-free mistake component.
- **Direct evidence:** RAE/ASALE NGLE § 37.8e directly contrasts rejected `El conferenciante es en el auditorio` with accepted `La conferencia es en el auditorio`; § 37.8f explains that event-denoting nouns may also denote physical objects, allowing a different `estar` reading (`La conferencia está en la maleta`). Source: https://www.rae.es/gram%C3%A1tica/sintaxis/el-atributo-en-las-oraciones-copulativas-con-ser-y-estar-ii-pol%C3%A9micas-relativas-a-los-atributos-locativos . These paragraphs were read directly.
- **Change:** replaced the ambiguous bad example with the source-explicit person/event contrast and added a caveat that the choice follows the intended reading, not merely the noun. Page remains `draft`.
- **Audit updates:** claim audit §64 and topic coverage matrix §64 now record the claim, source, decision and remaining limits.
- **Limits:** this is a one-claim correction, not an exhaustive review of the `ser/estar/hay` family, all translations, regional frequency, browser rendering, accessibility, SEO, or release readiness.
- **QA:** pending on the final resulting HEAD; check the exact resulting SHA and record the actual workflow result before reporting completion.
- **Next action:** after QA, inspect the canonical-topic registry/overlap backlog for `personal-a.mdx` in `pronouns` vs `sentence-structure`. Determine the distinct purpose of each page and correct only a demonstrated overlap/contradiction, preserving both URLs and keeping statuses conservative. Avoid another broad ser/estar rewrite unless a concrete source-backed defect appears.


### QA result — event-location *ser/estar* correction (2026-10-19)

- Full QA passed on exact content-and-audit HEAD `9c8da933428cd2ab756c59932621b9534ccc16a5`: [GitHub Actions run 39240966145](https://github.com/ClippyFirst/Spanish-Grammar/actions/runs/39240966145). Both `npm ci` and the complete `npm run qa` step succeeded.
- The pass covers the event-location example correction in `ser-estar-location.mdx`, claim audit §64, coverage matrix §64, and the handoff state at that SHA.
- This entry itself is a documentation-only commit and creates a new HEAD; check CI once more for the resulting SHA before stating the branch is green at its current tip.


### Live refresh — personal *a* and tonic-pronoun clitic doubling (2026-10-19)

- **Starting HEAD:** `1d6fb77e985c08828601f5bf96d240e62f6997c4`; exact-HEAD full QA passed in [run 39241069812](https://github.com/ClippyFirst/Spanish-Grammar/actions/runs/39241069812). PR #27 remains open/unmerged; no merge, close, rebase, retarget or base change.
- **Specific gap:** inspected both `src/content/es/pronouns/personal-a.mdx` and `src/content/es/sentence-structure/personal-a.mdx`. The short page's `Ayudó a ella` example implied that a stressed tonic pronoun could stand alone as the object, with only a vague comment that a clitic was often more natural.
- **Direct evidence:** RAE/ASALE *Glosario de términos gramaticales*, entry *complemento indirecto*, says tonic accusative/dative personal pronouns in contemporary Spanish occur only when doubled by the corresponding unstressed clitic: `No la vi a ella`, not `No vi a ella`; `No se lo di a él`, not `No lo di a él`. Source: https://www.rae.es/gtg/complemento-indirecto .
- **Changes:** changed the short-page example to `La ayudó a ella`; added the explicit doubling rule and direct source to the canonical `pronouns/personal-a.mdx`; linked the source in both pages. Preserved both URLs, the shorter page's `canonical_topic` and cross-reference, and both `draft` statuses.
- **Audit updates:** claim audit §65, topic coverage matrix §65 and section 7 of `HIGH-RISK-CROSS-PAGE-AUDIT-2026-10-18.md` record the finding and boundary.
- **Limits:** this does not imply that every noun phrase with *a* requires clitic doubling; it concerns tonic personal pronouns. No full audit of the clitic-doubling system, all examples/translations, or regional variation has been performed.
- **QA:** pending on the final resulting HEAD; run/check full QA on the exact tip after the handoff commit.
- **Next action:** after QA, continue to the next high-risk claim cluster from the live coverage matrix. Prioritize a concrete source gap, not another architecture-only pass; preserve the existing page-role/URL decisions and do not mass-upgrade review statuses.
