# Власний аудит повноти іспанської граматики — 2026-09-19

> **Призначення:** внутрішній контрольний аудит повноти проєкту `ClippyFirst/Spanish-Grammar`.
>
> Це **не оновлення старих TOPICS-COVERAGE-AUDIT-*** і не повторення їхніх статусів. Аудит побудований заново за фактичним поточним деревом контенту, контрольним списком тем і зовнішніми граматичними орієнтирами RAE / Instituto Cervantes.
>
> **Дата:** 2026-09-19  
> **Гілка:** `main`  
> **Фактичний контент:** 181 MDX-сторінка в `src/content/es/`  
> **Контрольний список:** `TOPICS-COMPLETE-UA.md` — 323 checklist-пункти  
> **Ціль:** визначити, чи можна вже назвати довідник практично повним, і окремо виявити теми, які формально можуть бути «десь згадані», але ще не мають достатньої глибини.

---

## 1. Методологія

Аудит оцінює не тільки наявність файла.

Для кожної граматичної області використовується чотирирівнева логіка:

- **🟢 FULL** — тема має окрему або добре визначену сторінку/сторінки й достатню для довідника глибину.
- **🟡 PARTIAL** — тема присутня, але окремі важливі підтипи, обмеження, винятки, значеннєві опозиції або C1–C2-аспекти недорозкриті.
- **🟠 STRUCTURAL GAP** — тема, імовірно, частково покривається кількома сторінками, але в проєкті немає чіткої точки входу; користувачеві важко отримати повну картину.
- **🔴 GAP** — істотна граматична область не має достатнього покриття.

Ключовий принцип:

> **Наявність слова в одному прикладі не дорівнює покриттю граматичної теми.**

Так само окрема сторінка не автоматично означає FULL: сторінка може бути лише короткою нотаткою.

---

# 2. Загальний результат

## Вердикт

**Проєкт уже має дуже широке покриття іспанської граматики, але ще не є доказово повним граматичним довідником рівня “від A0 до C2 + академічна довідкова глибина”.**

Це важлива зміна порівняно з ранніми аудитами: **181 MDX-сторінка — це вже не “скелет” із кількома десятками сторінок.** Основні граматичні області представлені системно.

Водночас при порівнянні з повнішою структурою RAE видно кілька областей, де проєкту бракує **не базових правил, а другого шару глибини**.

### Попередня оцінка покриття

| Область | Стан | Коментар |
|---|---|---|
| Основи / частини мови | 🟢 | Добре представлено |
| Орфографія | 🟢 | Дуже широке покриття |
| Іменники | 🟢/🟡 | База сильна; окремі синтаксичні властивості іменника потребують глибини |
| Артиклі | 🟢 | Один із сильних блоків |
| Прикметники | 🟢/🟡 | Морфологія й позиція сильні; бракує частини C1–C2 |
| Прислівники | 🟢/🟡 | База + focus добре; бракує частини системної класифікації |
| Займенники / детермінативи | 🟢/🟡 | Дуже широке покриття, але є якісні та структурні прогалини |
| Прийменники | 🟢/🟡 | Дуже добре для практичного користувача; режим керування можна поглибити |
| Сполучники | 🟢/🟡 | Основні типи є; окремі підрядні конструкції надто стисло описані |
| Дієслово | 🟢 | Дуже сильний блок |
| Часи | 🟢 | Практично повна система часів |
| Способи / subjuntivo | 🟢/🟡 | Сильне покриття; C1–C2 значення ще можна розширити |
| Перифрази | 🟢/🟡 | Основний набір є; потрібен глибший системний каталог |
| Синтаксис | 🟡 | Найбільша зона для подальшого поглиблення |
| Словотвір | 🟢/🟡 | Для граматичного довідника достатньо широко |
| Регіональна граматика | 🟢/🟡 | Дуже хороша ширина; окремі регіони більше оглядові |
| Фокус / полярність / мікроконструкції | 🟢 | Сильна й нетипово добре опрацьована частина |

**Робочий висновок:** приблизно **85–90% практично необхідної граматичної системи вже має явне покриття**, але до стану “нічого істотного не бракує” потрібен ще один цільовий раунд.

Цей відсоток є **експертною оцінкою аудиту, а не математичною метрикою**: граматичні теми мають різну вагу, а одна сторінка може покривати кілька підтем.

---

# 3. Що вже можна вважати сильним покриттям

## 3.1. Морфологічний фундамент — 🟢

Фактично присутні:

- базова граматична термінологія;
- частини мови;
- рід і число;
- узгодження;
- іменники;
- артиклі;
- прикметники;
- прислівники;
- особові, об'єктні, демонстративні, присвійні, неозначені, відносні, питальні та окличні займенники;
- числівники;
- базові форми дієслова.

Це вже відповідає логіці базового граматичного довідника, а не набору окремих уроків.

---

## 3.2. Артиклі — 🟢

Особливо добре представлено:

- definite / indefinite;
- zero article;
- generic/reference readings;
- особливі випадки;
- власні назви;
- нейтральне `lo`;
- частини тіла;
- професії;
- типові українські помилки.

Цей блок можна залишати як один із еталонів структури.

---

## 3.3. Сер / естар / hay — 🟢

Є окремі сторінки та взаємопов'язані пояснення:

- `ser`;
- `estar`;
- `hay`;
- місце;
- події;
- прикметники;
- participio;
- стани;
- пасив;
- типові інтерференції.

Це відповідає реальній потребі носія української.

---

## 3.4. Часи — 🟢

Фактичне дерево містить окремі сторінки для:

- presente;
- perfecto;
- indefinido;
- imperfecto;
- pluscuamperfecto;
- pretérito anterior;
- futuro simple;
- futuro perfecto;
- condicional simple;
- condicional compuesto;
- sequence of tenses;
- conditionals;
- порівняння indefinido/imperfecto.

Тобто **система часів уже не є прогалиною**.

---

## 3.5. Subjuntivo — 🟢/🟡

Є:

- presente;
- imperfecto;
- perfecto;
- pluscuamperfecto;
- futuro;
- triggers;
- when-not-subjunctive;
- independent/free subjunctive;
- ojalá;
- como si;
- quizá/tal vez/acaso;
- imperative connection;
- relative/temporal/conditional/concessive use.

Це вже сильне покриття.

Але C1–C2-аспекти потребують окремого поглиблення: **семантичні відтінки, конкуренція indicative/subjunctive, прагматичне значення та регістрова варіативність**.

---

# 4. Головні прогалини, які я вважаю реальними

## 4.1. 🔴/🟡 Повна система порівняльних конструкцій

Є:

- ступені порівняння прикметників;
- `más/menos/tan/tanto`;
- comparative structures;
- частково конструкції `cuanto más… más…`.

Але порівняльний синтаксис як окрема система має бути глибшим.

Потрібно явно охопити:

- `tan X como Y`;
- `tanto X como Y`;
- `más X que Y`;
- `menos X que Y`;
- порівняння кількості;
- порівняння дій;
- порівняльні підрядні;
- еліпсис другого члена;
- `de lo que`;
- `que lo que`;
- `como si` у порівняльному значенні;
- порівняльні конструкції з кількістю;
- C1–C2 книжні конструкції з `cuanto`;
- порівняльно-наслідкові конструкції `tan… como para`.

**Рекомендація:** створити окрему глибоку сторінку на рівні синтаксису, а не покладатися лише на adjective comparison.

---

## 4.2. 🔴/🟡 Наслідкові конструкції (consecutivas)

Це одна з найпомітніших прогалин.

Наявні сполучники:

- `de modo que`;
- `así que`;
- `conque`;
- деякі інші.

Але цього недостатньо для повного опису consecutivas.

Потрібно системно розглянути:

- `tan… que`;
- `tanto/a/os/as… que`;
- `tal… que`;
- `de tal manera que`;
- `de modo que`;
- `hasta tal punto que`;
- `de un… que`;
- `si… que` у ponderative/consecutive конструкціях;
- exclamative consecutives;
- consecutive-comparative constructions;
- різницю між **comparative `como`** та **consecutive `que`**.

PCIC C1–C2 прямо виділяє **15.3.7 Consecutivas** як окрему систему. Це не варто залишати лише всередині загальної сторінки subordinate clauses.

---

## 4.3. 🔴/🟡 Модальні підрядні (oraciones de modo)

Є `como`, `como si`, але повна система не виділена.

Потрібно охопити:

- `como`;
- `como si`;
- `según`;
- `conforme`;
- `tal como`;
- `de la manera que`;
- `sin que`;
- gerundio як спосіб;
- modal subordinate clauses;
- відмінність способу від порівняння.

PCIC окремо виділяє **15.3.3 De modo**.

---

## 4.4. 🟡 C1–C2-кількісні конструкції

Сторінка `quantifiers.mdx` є, але нинішній матеріал радше базовий.

Потрібне поглиблення:

- `ni siquiera`;
- `al menos`;
- `hasta` як focal quantifier;
- `apenas`;
- partitive constructions;
- `el resto de`;
- `un grupo de + plural` та concordancia ad sensum;
- `algún que otro`;
- `todo lo más`;
- `cuanto` як quantifier/relative;
- `sendos/as`;
- emphatic `muy + noun`;
- emphatic `demasiado + noun`;
- `todo un`;
- quantity ellipsis.

Це прямо відповідає C1–C2 інвентарю PCIC.

---

## 4.5. 🟡 Комплементація прикметників

У проєкті дуже добре описані:

- agreement;
- position;
- comparison;
- metábasis;
- apócope.

Але **adjective + preposition / adjective complement** не має такої ж системності, як verb + preposition.

Потрібно:

- `contento de`;
- `capaz de`;
- `interesado en`;
- `favorable a`;
- `contrario a`;
- `seguro de`;
- `responsable de`;
- конструкції з infinitive;
- конструкції з `que`;
- зміна прийменника залежно від значення;
- регістр і варіативність.

RAE окремо виділяє **complemento del adjetivo**.

---

## 4.6. 🟡 Предикативні конструкції

У `grammar-basics` згадується `complemento predicativo`, але ця функція не має достатньо виразної окремої системи.

Потрібно розрізнити:

- atributo;
- complemento predicativo;
- complemento circunstancial de modo;
- `ser/estar` + attribute;
- predicative complement with transitive verbs;
- predicative complement with object;
- secondary predication.

Наприклад:

> `Llegó cansado.`  
> `Encontré a Juan cansado.`

Це важливий синтаксичний блок і особливо корисний на C1–C2.

---

## 4.7. 🟡 Валентність дієслова / структура аргументів

Проєкт має:

- transitivity;
- verb-preposition pairs;
- object pronouns;
- régimen;
- infinitive patterns.

Але немає одного хаба, який пояснює:

> **які аргументи вимагає конкретний тип предиката і як вони реалізуються синтаксично.**

Потрібно систематизувати:

- monovalent verbs;
- bivalent verbs;
- trivalent verbs;
- OD/OI;
- régimen;
- predicative complement;
- subject complement;
- alternations;
- impersonal predicates.

Це не обов'язково має бути величезна сторінка, але концепція повинна бути доступною користувачеві.

---

## 4.8. 🟡 Повна система функцій інформаційної структури

Проєкт уже має **дуже сильний** блок:

- focus;
- polarity;
- `sí`;
- `sí que`;
- cleft;
- pseudocleft;
- topicalization;
- dislocation;
- verum focus;
- emphatic subject.

Але варто довести систему до чіткої карти:

**topic → focus → contrastive focus → verum focus → left dislocation → right dislocation → cleft → pseudocleft → neutral word order → prosodic focus.**

RAE окремо виділяє **funciones informativas**; це вже сильна сторона проєкту, яку можна зробити ще більш системною.

---

# 5. 🟡 Відносні речення: тема є, але потрібен quality pass

Тут виявлено не просто питання повноти, а **потенційну неточність у чинному контенті**.

У `relative-pronouns.mdx` є твердження, що:

> після прийменника потрібні `el que / el cual / quien`, а голе `en que` нібито не використовується з конкретним місцем.

Це **надто категоричне твердження**.

Форма:

> `La casa en que vivo.`

є граматично можливою. Конструкції типу:

> `el día en que nací`

є абсолютно нормативними.

Отже, цей блок потрібно не скорочувати, а **виправити й поглибити**, пояснивши:

- `en que`;
- `en el que`;
- `en el cual`;
- `donde`;
- стилістичні й семантичні відмінності;
- коли кожна форма природніша.

Це важливо, бо довідник претендує на нормативність.

---

# 6. 🟡 Субординативна система зараз занадто агрегована

`subordinate-clauses.mdx` є хорошим хабом, але фактично дає лише коротку карту:

- sustantivas;
- relativas;
- adverbiales;
- tiempo;
- condición;
- finalidad;
- causa;
- concesión;
- modo.

Для повного довідника цього недостатньо.

Потрібна система окремих або дуже чітко розділених підтем:

1. sustantivas;
2. relativas;
3. temporales;
4. locativas;
5. modales;
6. causales;
7. finales;
8. condicionales;
9. consecutivas;
10. comparativas;
11. concesivas.

Саме така класифікація відповідає структурі PCIC/RAE.

---

# 7. 🟡 Прагматика граматичних форм

Мікроконструкції вже дуже сильні, але для C1–C2 можна додати системність навколо:

- modality;
- evidentiality;
- epistemic probability;
- speaker commitment;
- mitigation;
- politeness;
- speech acts;
- assertion;
- rejection/correction;
- concession;
- reformulation;
- discourse stance.

Це не означає перетворювати сайт на підручник з прагматики. Достатньо пояснювати ті явища, де **форма без прагматичного значення неповна**.

---

# 8. 🟡 Рідкісні, але нормативні конструкції

Для заявленої глибини C1–C2 варто перевірити:

- `futuro de subjuntivo` — уже є;
- absolute participial constructions;
- absolute gerund constructions;
- nominal/adjectival sentences;
- infinitival clauses;
- reduced subordinate clauses;
- coordination with ellipsis;
- comparative ellipsis;
- relative clauses without overt antecedent;
- free/semi-free relatives;
- correlatives;
- concessive reduplication:
  `diga lo que diga`, `sea quien sea`;
- conditional constructions without `si`;
- `de + infinitive` conditional;
- `como + subjuntivo` conditional;
- `por si`;
- `no sea que`.

Частина вже є в різних сторінках, але потрібна **центральна карта взаємозв'язків**.

---

# 9. 🟡 Інтер'єкції

RAE окремо включає:

> `La interjección. Grupos sintácticos exclamativos.`

У поточному дереві немає очевидної окремої сторінки для interjecciones.

Для суто граматичного довідника це не критичний дефект, але якщо заявляти **максимально повну граматику**, варто мати хоча б коротку сторінку:

- `¡ay!`;
- `¡eh!`;
- `¡oye!`;
- `¡vaya!`;
- `¡hala!`;
- `¡uf!`;
- межа між interjección та discourse marker;
- punctuation;
- регістр.

---

# 10. 🟡 Числівники

Числівники вже представлені у fundamentals:

- cardinal;
- ordinal;
- fractions;
- percentages;
- large numbers.

Але для C1–C2 варто перевірити:

- distributive `sendos/as`;
- collective/approximate numeral expressions;
- `medio/a`;
- `ambos`;
- `doble/triple`;
- dates;
- decimal notation;
- agreement;
- apócope;
- ordinal vs cardinal substitution;
- numeral + article;
- `uno de los`;
- `cada uno`.

---

# 11. 🟡 Орфографія: граматичний довідник уже дуже сильний, але не треба плутати її з фонетикою

Наявні:

- stress;
- diacritics;
- diphthongs/hiatus;
- b/v;
- c/z/s/g/j;
- h/y/ll;
- special letters;
- capitalization;
- punctuation.

Окремо варто перевірити, чи достатньо пояснено:

- pronunciation vs orthography;
- syllabification;
- phonological consequences of `h`;
- `y` as vowel/consonant;
- `w`;
- foreign words;
- proper-name capitalization;
- quotation marks and dash conventions;
- abbreviations vs acronyms;
- punctuation in subordinate clauses.

Це не критична прогалина, а фінальний quality pass.

---

# 12. 🟠 Структурна проблема: багато дубльованих сторінок

У дереві є пари/групи на кшталт:

- `questions.mdx` + `question-formation.mdx`;
- `relative-pronouns.mdx` + `relative-pronouns-review.mdx`;
- `word-order.mdx` + `word-order-review.mdx`;
- `negation.mdx` + `negation-patterns.mdx`;
- `personal-a.mdx` у pronouns + sentence-structure;
- `place.mdx` + `place-review.mdx`;
- `time.mdx` + `time-expressions.mdx`;
- кілька сторінок навколо ser/estar/hay;
- кілька сторінок навколо gerundio;
- кілька сторінок навколо gustar;
- кілька сторінок навколо relative clauses.

Це **не проблема саме по собі**.

Для довідника це навіть може бути правильно, якщо:

> одна сторінка = глибока тема,  
> друга = швидкий review / decision guide.

Але потрібно перевірити, щоб:

1. не було суперечностей;
2. коротка сторінка не містила помилкових спрощень;
3. користувач розумів, де повна версія;
4. Pagefind не повертав 5 майже однакових сторінок без зрозумілого пріоритету.

---

# 13. Особливо важливий quality pass

Після аудиту повноти я б **не переходив одразу до створення ще десятків сторінок**.

Спочатку потрібно перевірити вже написані сторінки на:

### 13.1. Категоричні формулювання

Небезпечні формулювання:

- «завжди»;
- «ніколи»;
- «після X тільки Y»;
- «форма X неправильна».

У граматиці такі твердження часто мають:

- стилістичні винятки;
- регіональні варіанти;
- архаїчні/книжні варіанти;
- контекстуальні обмеження.

### 13.2. Нормативність

Особливо перевірити:

- relative clauses;
- leísmo/laísmo/loísmo;
- concordancia;
- haber impersonal;
- ser/estar + participio;
- subjunctive;
- prepositions;
- regional variants.

### 13.3. Регіональність

Не можна подавати:

> «у Латинській Америці X»

як одну монолітну норму.

Проєкт уже має регіональні сторінки — це добре; наступний крок полягає в тому, щоб **зв'язати regional notes з основними сторінками**.

---

# 14. Що я НЕ вважаю необхідним додавати

Щоб довідник не перетворився на енциклопедію заради енциклопедії, не потрібно створювати окремі сторінки для:

- кожного окремого неправильного дієслова;
- кожного прийменника;
- кожного сполучника;
- кожної частки;
- кожного суфікса;
- кожного лексичного винятку;
- історичної граматики;
- діалектології поза практично значущими відмінностями;
- суто лексичних тем.

Одна глибока сторінка може покривати десятки мікротем.

---

# 15. Мінімальний список, який я вважаю потрібним для «фінального зеленого» стану

### 🔴 Обов'язково створити/поглибити

1. **Comparative clauses / estructuras comparativas**
2. **Consecutive clauses / consecutivas**
3. **Modal clauses / oraciones modales**
4. **Predicative complements / atributo / predicativo**
5. **Adjective complements / adjetivos + preposición**
6. **Quantification C1–C2**
7. **Numerals C1–C2**
8. **Full subordinate-clause map**

### 🟡 Обов'язково перевірити

9. Relative clauses — виправити категоричне твердження про `en que`.
10. Sequence of tenses + advanced subjunctive.
11. Conditional constructions beyond basic `si`.
12. Concession beyond `aunque`.
13. Absolute constructions.
14. Ellipsis.
15. Information structure as a coherent system.
16. Predicate valency / argument structure.
17. Speech-act/modal constructions.
18. Interjections — хоча б коротка сторінка.
19. Regional grammar cross-links.
20. Duplicate/review pages.

---

# 16. Порівняння з RAE / PCIC

RAE у структурі своєї Nueva gramática окремо виділяє:

- sustantivo;
- adjetivo;
- artículo;
- pronombres;
- demostrativos;
- posesivos;
- cuantificadores;
- numerales;
- verbo: tiempo/aspecto;
- modo;
- infinitivo;
- gerundio/participio;
- perífrasis;
- adverbio;
- preposición;
- conjunción;
- interjección;
- sujeto;
- complemento directo;
- complemento indirecto;
- régimen;
- atributo;
- predicativo;
- circunstancial;
- funciones informativas;
- activas/pasivas/medias/impersonales;
- modalidad;
- interrogativas/exclamativas;
- comparativas/superlativas/consecutivas;
- subordinación sustantiva;
- relativa;
- adverbial temporal/locativa/modal;
- causal/final/ilativa;
- condicional/concesiva;
- negación.

Ця структура показує, що поточний проєкт **дуже добре накриває верхній рівень граматичної карти**, але найбільший залишковий розрив знаходиться саме у **синтаксичній деталізації**, а не в базовій морфології.

PCIC для C1–C2, зі свого боку, прямо містить окремі блоки для consecutivas, comparativas, concessivas, quantification, relative structures та інших складних конструкцій. Саме ці області мають бути фінальним тестом на C2-глибину.

Джерела:

- RAE, *Nueva gramática de la lengua española*: https://www.rae.es/sites/default/files/sala_prensa_dosier_gramatica_2009.pdf
- RAE, *Índice de contenidos*: https://www.rae.es/sites/default/files/Indice_de_contenidos_Manual_Nueva_gramatica_de_la_lengua_espanola.pdf
- Instituto Cervantes, *Plan Curricular — Índice*: https://cvc.cervantes.es/ensenanza/biblioteca_ele/plan_curricular/indice.htm
- Instituto Cervantes, *Gramática C1–C2*: https://cvc.cervantes.es/ensenanza/biblioteca_ele/plan_curricular/niveles/02_gramatica_inventario_c1-c2.htm

---

# 17. Фінальний висновок

### Поточний стан

**Не “все готово”.**

Але також **не “бракує половини граматики”**.

Поточний репозиторій уже має **181 MDX-сторінку** і охоплює практично всі великі граматичні домени:

> morphology → determiners → pronouns → verbs → tenses → moods → periphrases → prepositions → conjunctions → sentence structure → information structure → regional grammar → word formation → orthography.

Тепер основне завдання — не масово створювати базові сторінки.

### Наступна фаза повинна бути:

**DEPTH COMPLETION → QUALITY CONTROL → CROSS-LINKING → FINAL AUDIT**

а не:

**CREATE MORE BASIC TOPICS.**

Якщо закрити 20 пунктів із розділу 15, особливо **comparatives + consecutives + modals + predicatives + adjective complements + advanced quantification + subordinate-clause system**, проєкт буде дуже близьким до стану, коли його вже можна називати **повним практичним граматичним довідником іспанської для носія української**.

> **Важливе обмеження:** навіть після цього його не слід називати буквально «повною граматикою іспанської мови» в академічному сенсі. RAE охоплює значно більше тонких морфосинтаксичних, семантичних, прагматичних і варіативних явищ. Для користувацького довідника наша ціль має бути іншою: **максимально повне практично релевантне покриття + глибина C1–C2 + українська педагогічна адаптація.**


---

# 18. Depth Completion + Quality Control — виконано

**Оновлено:** 2026-09-19.

На підставі цього аудиту внесено зміни без скорочення наявного матеріалу.

### Нові глибокі сторінки

- `sentence-structure/comparative-clauses.mdx`
- `sentence-structure/consecutive-clauses.mdx`
- `sentence-structure/modal-clauses.mdx`
- `sentence-structure/predicative-complement.mdx`
- `adjectives/adjective-complements.mdx`
- `adjectives/quantifiers-advanced.mdx`
- `fundamentals/numerals-advanced.mdx`
- `sentence-structure/interjections.mdx`
- `sentence-structure/advanced-conditionals.mdx`
- `sentence-structure/concessive-clauses.mdx`
- `sentence-structure/ellipsis.mdx`
- `sentence-structure/verb-valency.mdx`
- `sentence-structure/modality-speech-acts.mdx`
- `sentence-structure/absolute-constructions.mdx`

### Поглиблено / виправлено

- `pronouns/relative-pronouns.mdx` — виправлено надто категоричну заборону **en que**; додано карту варіантів `que / el que / el cual / quien`.
- `sentence-structure/relative-clauses.mdx` — виправлено те саме спрощення та додано класифікацію relative constructions.
- `sentence-structure/subordinate-clauses.mdx` — додано повну карту основних типів підрядності та посилання на окремі comparative/consecutive/modal сторінки.
- `tenses/sequence-of-tenses.mdx` — виправлено механічне трактування sequence of tenses; додано часову перспективу та актуальність.
- `adjectives/quantifiers.mdx` — додано перехід до поглибленої системи квантифікації.
- `sentence-structure/emphasis-polarity-focus.mdx` — додано системну карту інформаційної структури.
- `sentence-structure/concessive-clauses.mdx` — уточнено українську термінологію як **допустові речення**.

### Що змінилося концептуально

Після цього раунду проєкт більше не покладається лише на базові сторінки типу «що таке subjuntivo / що таке comparative». Додано окремий другий шар для:

**comparative → consecutive → modal → concessive → advanced conditional → predicative → adjective complement → valency → ellipsis → absolute constructions → quantification → modality/speech acts.**

Це саме той шар, який був головним залишковим розривом між «дуже широким довідником» та довідником із реальною C1–C2 синтаксичною глибиною.

### Quality-control правило, яке треба зберігати надалі

Не використовувати абсолютні формулювання на кшталт «X завжди заборонено», якщо нормативна система допускає контекстуальні, стилістичні або регіональні варіанти. Для кожного спірного явища треба розділяти:

**нормативність → частотність → стиль/регістр → регіон → семантичне значення.**

Особливо це стосується relative clauses, subjuntivo, sequence of tenses, prepositions, concordancia та regional grammar.


---

# 19. Quality Control — другий прохід після Depth Completion

**Оновлено:** 2026-09-19.

Після завершення основного Depth Completion виконано окремий контроль уже наявного матеріалу. Мета — не додавати сторінки заради кількості, а прибрати спрощення, які могли стати джерелом помилкових правил для користувача.

## Виправлені системні моменти

### 19.1. Питання та інверсія

Перевірено:

- `sentence-structure/questions.mdx`;
- `sentence-structure/question-formation.mdx`.

Прибрано надто категоричне правило «в питанні потрібна інверсія». Тепер довідник розрізняє:

- типовий порядок;
- порядок із вираженим підметом;
- ехо-/перепит;
- контрастивний порядок;
- роль інтонації та інформаційної структури.

Ключова норма тепер сформульована як **типова модель, а не механічна заборона**.

### 19.2. Subjuntivo

Перевірено:

- `moods/subjunctive-triggers.mdx`;
- `moods/subjuntivo-presente.mdx`;
- `sentence-structure/subordinate-clauses.mdx`.

Прибрано спрощення:

- «subjuntivo = чотири значення»;
- «кожен тригер механічно визначає спосіб»;
- «cuando завжди + subjuntivo»;
- «будь-яке заперечення автоматично = subjuntivo».

Натомість використовується модель:

**тип конструкції → семантика → часовий статус → референційність → позиція мовця → спосіб.**

### 19.3. Регіональна граматика

Поглиблено та перехресно пов'язано:

- `regional/regional-overview.mdx`;
- `pronouns/tu-usted-vosotros-ustedes.mdx`;
- `pronouns/objeto-directo-indirecto.mdx`;
- `tenses/preterito-perfecto.mdx`;
- `verbs/ser-estar.mdx`.

Прибрано або послаблено надто широкі твердження про:

- «tú = молоді, usted = старші»;
- «у Латинській Америці завжди ustedes»;
- «leísmo = вся Іспанія»;
- «Америка = lo»;
- «perfecto в Америці майже не використовується»;
- «ser = постійне, estar = тимчасове».

Тепер регіональність розглядається окремо від загальноіспанської граматики та розділяється на:

**норму → частотність → регіон → соціальне значення → регістр.**

### 19.4. Система підрядності

`sentence-structure/subordinate-clauses.mdx` перетворено на справжній навігаційний хаб:

**sustantivas → relativas → temporales → locativas → modales → causales → finales → condicionales → consecutivas → comparativas → concesivas.**

Хаб тепер посилається на поглиблені сторінки comparative, consecutive, modal, conditional та concessive constructions.

### 19.5. Перехресні посилання

Додано/поглиблено зв'язки між регіональними нотами та основними граматичними сторінками:

- звертання ↔ voseo/ustedeo/regional overview;
- object pronouns ↔ leísmo/regional overview;
- perfecto ↔ regional overview;
- ser/estar ↔ regional overview;
- subjuntivo ↔ advanced conditionals/concessives.

Це зменшує ризик, що користувач сприйме регіональну модель як універсальну.

## Що свідомо НЕ робилося

Не створювалися десятки нових базових сторінок. Після 14 глибоких сторінок попереднього етапу основним ризиком уже була не відсутність файлів, а **надмірне спрощення правил**.

Наступна контрольна фаза:

**BUILD VALIDATION → LINK VALIDATION → FINAL GRAMMAR AUDIT.**

Ціль — перевірити не кількість сторінок, а:

1. чи весь MDX коректно проходить schema validation;
2. чи внутрішні посилання ведуть на реальні маршрути;
3. чи немає суперечливих правил між review- і deep-сторінками;
4. чи не залишилися категоричні формулювання без потрібного контексту;
5. чи можна завершити аудит без створення зайвого дублювання.


---

# 20. Final Technical + Grammar QA Pass

**Оновлено:** 2026-09-19.

## Build validation

У репозиторії вже існують окремі npm-перевірки:

- `npm run validate` — frontmatter/content validation;
- `npm run links` — внутрішні `/es/...` links;
- `npm run check` — Astro type/content checks;
- `npm run build` — Astro production build;
- `npm run build:full` — production build + Pagefind;
- `npm run qa` — послідовна автоматична перевірка validate → links → Astro build.

Локальний build користувача вже підтвердив, що після виправлення `region: argentina` на допустиме schema-значення попередня blocking schema error усунена. Саме виконання нового `npm run qa` у цьому середовищі не симулюється; остаточний runtime verdict залишається за локальним build/CI.

## Link validation

Перевірено логіку `scripts/check-links.mjs`.

Додатково виправлено `scripts/validate-content.mjs`: `related` тепер перевіряє не лише basename slug, а й повний вкладений шлях контенту. Це важливо для однакових назв файлів у різних категоріях.

## Review / deep consistency

Повторно перевірено показові вузли:

- questions / question-formation;
- subjuntivo;
- subordinate clauses;
- regional overview;
- tú/usted/vosotros/ustedes;
- object pronouns / leísmo;
- pretérito perfecto;
- ser/estar.

Виявлені раніше спрощення вже скориговані. Особливо перевірено, щоб review-сторінка не формулювала глибоке правило більш категорично, ніж deep-сторінка.

## Categorical-language pass

Пошуковий контроль виконано для українських маркерів категоричності: `завжди`, `ніколи`, `тільки`, `лише`, `виключно`, `обов’язково`.

Важливий принцип: саме слово не є автоматично помилковим. Воно має залишатися там, де правило справді категоричне. Перевіряти потрібно **контекст і нормативний статус**, а не механічно видаляти слова.

## Final grammar audit

Поточна структура охоплює не лише морфологічні парадигми, а й:

- категорії та їхні синтаксичні функції;
- керування та валентність;
- підрядність;
- інформаційну структуру;
- модальність;
- еліпсис;
- абсолютні конструкції;
- регіональну варіативність;
- word order;
- punctuation/spelling;
- discourse-level distinctions.

Після цього проходу головний залишковий ризик — вже не «відсутня базова тема», а локальні суперечності, broken links, CSS/MDX rendering issues та поодинокі формулювання, які потребують контексту.

**Статус:** Grammar/content audit → завершено на рівні структури; technical runtime QA → потребує локального `npm run qa` / production build.
