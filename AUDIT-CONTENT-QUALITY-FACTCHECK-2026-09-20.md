# Аудит змісту Spanish-Grammar: fact-check + educational quality
## 2026-09-20

> Статус: корпусний quality audit виконано; критичні знайдені помилки з високою впевненістю виправлено в main.
>
> Об'єкт: ClippyFirst/Spanish-Grammar.
> Фактичний корпус за останнім повним аудитом: 181 MDX-сторінка в src/content/es/ + 5 порівняльних MDX-сторінок.
>
> Важливе обмеження: це не означає, що кожне речення всіх сторінок було окремо звірено з веб-джерелом. Для такого рівня перевірки потрібно окремо витягнути й перевірити сотні/тисячі атомарних тверджень. Нижче розділено корпусний quality audit і source-grounded fact-check критичних ділянок.

# 1. Стандарти аудиту

## Fact-check / verification

З jwynia/agent-skills застосовано: окремий verification pass після генерації; атомаризацію тверджень; зовнішню перевірку; розрізнення confirmed / partially supported / not found / contradicted / outdated; заборону трактувати unsourced як wrong.

## LLM-output-audit

З Kinneyzhang/llm-output-audit застосовано: claim extraction, source routing, пріоритет первинних джерел, consistency risk gate, ratings ✅ / 🟡 / ⚠️ / ❌ / 🔍 та конкретні suggested edits.

## Educational-content quality

З Articulate та PlanIt Teachers застосовано: factual accuracy, vocabulary/terminology, readability, accessibility, learner fit, internal consistency, correctness of examples, human editorial review та перевірку answer/example logic.

З Systems 13(3), 174 (Huang et al., 2025) застосовано принцип: AI-контент треба оцінювати не лише за плавністю тексту, а за дисциплінарною точністю, evidence, transparency та людським evaluative judgement.

## RAE / ASALE

Основний нормативний орієнтир: Nueva gramática básica de la lengua española та Nueva gramática de la lengua española, edición revisada y ampliada. Для окремих тем використано конкретні сторінки RAE щодо синтаксичних груп, артиклів, відносних конструкцій, subjuntivo, queísmo/dequeísmo та voseo.

# 2. Загальний висновок

Spanish-Grammar уже має широку тематичну базу, але якість сторінок нерівномірна.

Головні ризики:
- надмірно категоричні правила;
- спрощення, які стають фактично хибними;
- приклади, що не точно відповідають правилу;
- українські переклади, які змінюють значення іспанського прикладу;
- регіональні твердження без достатньої кваліфікації;
- термінологічні неточності;
- нерівномірна глибина між сторінками;
- відсутність системного evidence trail для нормативних тверджень.

Це типовий профіль AI-generated educational corpus: текст може бути гладким і переконливим, але локальні правила можуть бути занадто сильними.

# 3. Що вже сильне

- Широке тематичне покриття: морфологія, артиклі, займенники, прийменники, дієслова, часи, subjuntivo, перифрази, синтаксис, регіональна граматика та інформаційна структура.
- Системна архітектура: categories, related links, comparison pages, reusable grammar components, українські пояснення, приклади, мінімальні пари, типові помилки.
- Окремі critical-depth сторінки для ser/estar, por/para, object pronouns, gustar, articles, relative pronouns, negation тощо.

# 4. Виявлені типи проблем

## P0 — фактична помилка

Твердження суперечить нормативному джерелу або приклад не відповідає правилу. Дія: виправляти негайно.

## P1 — небезпечне спрощення

Корисна мнемоніка для початківця сформульована як абсолютний закон. Типові маркери: «завжди», «тільки», «в усій Латинській Америці», «після X потрібен тільки Y». Дія: звузити область правила й додати межі.

## P2 — неповний контекст

Правило саме по собі правильне, але користувач легко зробить неправильний висновок. Дія: додати контраст, приклад, виняток або посилання.

## P3 — дидактична проблема

Фактично правильно, але переклад неприродний, термін не пояснений, приклад не демонструє правило або сторінка перевантажена метамовою.

# 5. Конкретні помилки, знайдені та виправлені

## 5.1. Заперечення

Було: «іспанська любить подвійне заперечення, яке в українській звучить як помилка». Це хибно характеризувало українську: українська теж має заперечне узгодження, наприклад «нікого не бачу», «нічого не маю».

Виправлено: прямо порівняно No veo a nadie та «Я нікого не бачу»; вилучено надмірну характеристику.

Статус: ✅ corrected.

## 5.2. Відносні конструкції

Виявлено ризик хибного правила навколо la casa en que vivo. Сторінку перероблено так, щоб розрізняти en que, en el que, en el cual та quien.

Також виправлено термінологічну помилку: cuyo не «замінює» іменник, а функціонує як присвійний відносний детермінатив і узгоджується з іменником, який визначає. Виправлено переклад «чиє книга» → «чия книга».

Статус: ✅ corrected.

## 5.3. Часові прийменники

Виявлено небезпечне твердження, що por може передавати «через три дні / через рік». Для базового майбутнього відліку правильна модель: En tres días.

Виправлено розподіл en / durante / desde / hasta / por та друкарську помилку в поясненні Hasta la vista.

Статус: ✅ corrected.

## 5.4. Por / para

Виявлено надмірне зведення системи до «para = ціль, por = причина» та нечіткі мінімальні пари.

Виправлено: правила тепер прямо позначено як мнемоніку; додано адресата, призначення, строк, причину, шлях і обмін; прибрано твердження, що українське «для» завжди відповідає para.

Статус: ✅ corrected.

## 5.5. Subjuntivo

RAE наголошує, що вибір indicativo/subjuntivo залежить від численних факторів і в деяких контекстах можливі обидва способи з різницею інтерпретації.

Виправлено Me alegro que estés aquí → Me alegro de que estés aquí та пом'якшено категоричне пояснення no creo que.

Статус: ✅ corrected.

## 5.6. Voseo

Виявлено надмірні твердження на кшталт «у цих регіонах ти = vos» і «в Аргентині tú eres звучить чужо». RAE підтверджує нормативність vos у різних американських різновидах, але поширення, співіснування з tú та соціальна функція залежать від регіону.

Виправлено: таблицю явно позначено як ріоплатську; розділено pronominal і verbal voseo; додано регіональну кваліфікацію; вилучено універсалізацію аргентинської моделі.

Статус: ✅ corrected.

# 6. Правила аудиту прикладів

Для кожної сторінки приклад повинен пройти п'ять перевірок:

1. Іспанське речення нормативне.
2. Український переклад передає саме потрібне значення.
3. Контекст пояснює вибір форми.
4. Для складної опозиції бажано мати мінімальну пару.
5. Якщо приклад регіонально маркований, регіон має бути позначений.

RAE окремо підкреслює роль простих прикладів у поясненні граматичних конструкцій.

# 7. Правила аудиту таблиць

Кожна колонка повинна мати однозначну семантичну назву. Перша колонка повинна пояснювати, що саме порівнюється.

Особливо перевіряти таблиці часів, артиклів, займенників, por/para, ser/estar та indicative/subjunctive.

Попереднім раундом уже виправлено заголовки порівняльних таблиць: Рід і число, Критерій, Контекст.

# 8. RAE-based structural benchmark

RAE NGB окремо структурує групи/синтагми, артиклі, займенники, дієслово, прийменники, функції речення, atributo, активні/пасивні/безособові конструкції, negación, sustantivas, relativas, comparativas/superlativas/consecutivas, causales/finales/ilativas та condicionales/concesivas.

Це важливий benchmark для наступного шару Spanish-Grammar.

# 9. Системні прогалини

## 🔴 Subordinación
Потрібна чітка карта: sustantivas, relativas, temporales, locativas, modales, causales, finales, condicionales, consecutivas, comparativas, concesivas.

## 🔴 Complemento predicativo
Потрібно окремо розрізнити atributo, predicativo, circunstancial de modo та secondary predication. Мінімальна пара: Llegó cansado. / Encontré a Juan cansado.

## 🟠 Валентність і régimen
Потрібна центральна сторінка про OD, OI, complemento de régimen, atributo, predicativo, adjuncts та argument structure.

## 🟠 Comparativas / consecutivas
Потрібні системні сторінки для más X que, tan X como, tanto X como, cuanto más..., más..., tan... que, tanto... que, tal... que, de tal manera que, hasta tal punto que.

## 🟠 Інформаційна структура
Матеріал про focus, topic, clefts, topicalization, polarity та emphasis уже сильний, але його варто звести в одну карту системи.

# 10. Правила для всього корпусу

1. No absolute rule without scope.
2. Every difficult rule needs a boundary or counterexample.
3. Translation must preserve grammatical meaning.
4. Example must prove the rule.
5. Regional claims require geography + qualification.
6. Register must be distinguished from grammar.
7. Learner mnemonics must not be presented as linguistic laws.
8. Ukrainian comparison must be precise.
9. Every table needs a semantic header.
10. Important normative claims should have a source path.

# 11. Fact-check status model

| Позначка | Значення | Дія |
|---|---|---|
| ✅ | джерело прямо підтверджує | залишити |
| 🟡 | надійне, але не повне підтвердження | кваліфікувати |
| ⚠️ | неоднозначно або контекстно | перевірити глибше |
| ❌ | джерело суперечить | виправити |
| 🔍 | джерело не знайдено | не називати помилкою без додаткової перевірки |

# 12. Пріоритет наступного раунду

## P0
- Critical Depth сторінки;
- категоричні формули;
- мінімальні пари;
- українські переклади;
- регіональні твердження;
- усі таблиці;
- залишкові AI-looking універсальні правила.

## P1
- subordinate clauses;
- relatives;
- articles;
- ser/estar/haber;
- subjuntivo;
- por/para;
- object pronouns;
- se;
- passive;
- conditionals;
- reported speech;
- negation.

## P2
- comparatives;
- consecutives;
- predicatives;
- argument structure;
- information structure;
- ellipsis;
- free/semi-free relatives;
- reduced clauses;
- pragmatic modality;
- regional morphosyntax.

# 13. Виправлені файли цього раунду

- src/content/es/sentence-structure/negation.mdx
- src/content/es/articles/definite-indefinite.mdx
- src/content/es/pronouns/relative-pronouns.mdx
- src/content/es/prepositions/time.mdx
- src/content/es/prepositions/por-para.mdx
- src/content/es/moods/subjuntivo-presente.mdx
- src/content/es/regional/voseo.mdx

# 14. Джерела

1. https://github.com/jwynia/agent-skills/blob/main/skills/general/research/verification/fact-check/SKILL.md
2. https://github.com/Kinneyzhang/llm-output-audit/blob/main/SKILL.md
3. https://www.articulate.com/blog/a-practical-checklist-for-evaluating-ai-generated-content/
4. https://planitteachers.ai/learn/reusable-lesson-review-checklist-for-ai-generated-resources
5. https://doi.org/10.3390/systems13030174
6. https://www.rae.es/obras-academicas/gramatica/nueva-gramatica-basica
7. https://temporalweb.asale.org/obras-academicas/gramatica/nueva-gramatica-de-la-lengua-espanola
8. https://www.rae.es/gramática-básica/la-gramática/la-sintaxis/los-grupos-sintácticos-sus-clases
9. https://www.rae.es/gramática-básica/el-artículo/caracterización/clases-y-paradigma
10. https://www.rae.es/gramática-básica/oraciones-subordinadas-de-relativo/oraciones-introducidas-por-relativos-complejos
11. https://www.rae.es/libro-estilo-lengua-española/el-modo-indicativo-o-subjuntivo
12. https://www.rae.es/dpd/dequeísmo
13. https://www.rae.es/dpd/vos

# 15. Final verdict

| Вимір | Стан |
|---|---|
| Ширина | 🟢 high |
| Структурованість | 🟢 high |
| Дидактична придатність | 🟡 good, але нерівномірна |
| Нормативна точність | 🟡 good після виправлень, але не повністю verified |
| Приклади | 🟡 сильна інфраструктура, потрібен corpus-wide QA |
| Regional accuracy | 🟡 потребує кваліфікації |
| C1–C2 syntactic depth | 🟡/🟠 потребує ще одного раунду |
| Evidence / source traceability | 🟠 потребує системного розширення |

> Головний висновок: наступна фаза не повинна просто генерувати ще десятки статей. Спочатку потрібен corpus-wide verification pass: твердження → джерело → приклад → переклад → межі правила → регіон → related links.