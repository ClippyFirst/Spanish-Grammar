# GrammarWay ES — content plan

Цей файл — коротка робоча нотатка для себе: що створити, які категорії наповнити, який порядок і принципи.

## Принципи контенту

- Мова статті — українська, іспанські приклади, переклад українською в кожному важливому прикладі.
- Відповідає CONTENT MASTER PROMPT: логіка, а не абсолютні правила; без CEFR у тексті; без вправ; без лексичних списків без граматичного сенсу; з примітками для україномовних; з регіональними нотатками, де важливо.
- Кожна сторінка має: вступ, швидка формула/довідка, утворення, вживання, приклади, маркери (де потрібно), винятки, типові помилки україномовних, пов'язані теми.
- frontmatter згідно src/content.config.ts; category — ключ з data/categories.ts; без slug у frontmatter (резервовано Astro); slug = ім'я файлу.
- Пов'язані теми — реальні внутрішні шляхи /es/<category>/<slug>/.

## Загальна карта категорій (ключі з data/categories.ts)

- fundamentals
- nouns
- articles
- adjectives
- adverbs
- pronouns
- prepositions
- conjunctions
- verbs
- tenses
- moods
- periphrases
- sentence-structure
- word-formation
- spelling
- regional

## Порядок роботи

1. Спочатку заповнити прогалини в базах: articles (нульовий, нейтральний lo, особливі випадки), nouns (число, нерегулярні множини), adjectives (позиція, порівняльні ступені, нерегулярні порівняння), adverbs (утворення, позиція).
2. Потім pronouns: особові займенники/опускання підмета, tuting vosotros/ustedes, demonstrative, possessive, indefinite, interrogative, relative, lo як безособовий, se (зворотний/безособовий/пасивний/се-passive), possessive constructions (noun genitive).
3. Потім conjunctions: coordinating, subordinating, que/de que, conjunction+subjunctive.
4. Потім prepositions: загальний огляд, місце, час, дієслова+прийменники, поширені конструкції.
5. Потім verbs: дієвідміну основи (-ar/-er/-ir), зміна основи, орфографічні зміни, нерегулярні, інфінітив, герундіо, particípio, допоміжні, ser/estar (є), gustar (є), personal a (є), зворотні, pronominal, серії perifrasis.
6. Потім tenses: indikativ overview, pluscuamperfecto, pretérito anterior, futuro simple, futuro perfecto, condicional simple/compuesto, ir a+infinitivo, estar+gerundio, sequence of tenses.
7. Потім moods: indikativ vs subjonktiv, present subjonktiv (є), imperfect subjonktiv, perfect subjonktiv, pluscuamperfect subjonktiv, triggers, when not subjunctive, imperative affirmative/negative/imperative+pronouns.
8. Потім sentence-structure: word order, subject omission, questions, negation (є), double negation, hay vs estar (є), conditional sentences, reported speech, passive, se-passive, se impersonal, compound/complex, relative clauses, subordinate clauses, agreement/concordancia.
9. Потім word-formation, spelling, regional.

## Внутрішні стилі

- Компоненти: Formula (type=affirm|neg|q), Conjugation (headers, rows: label+cells[]), MinPair (a/b z es/uk/why), Mistake (bad/good/why), Note (kind=uk|region, title), Example (es/uk/gram/note/n).
- Не використовувати Conjugation для дієслів, якщо це не розділ утворення дієслова; для формул — Formula.
- Внутрішні slug-посилання: відповідати реальним файлам (наприклад /es/articles/, /es/tenses/presente-de-indicativo/, і т.д.).

## Примітка

Якщо файл вже існує — не замінювати без причини; доповнювати блок «відсутні» згідно плану нижче. План оновлювати по мірі створення файлів.

# CONTENT MASTER PROMPT — Spanish Grammar Reference for Ukrainian Speakers

==================================================
1. PRIMARY OBJECTIVE
==================================================

Create the most useful Spanish grammar reference for Ukrainian-speaking learners.

The learner should be able to:

- find a specific grammatical topic;
- understand what it means;
- see how it is formed;
- understand when it is used and when it is not;
- see realistic Spanish examples with Ukrainian translation;
- understand Ukrainian-specific difficulties;
- recognize common mistakes and exceptions;
- understand important regional variation;
- navigate to related grammar topics.

==================================================
2. LANGUAGE
==================================================

All explanations must be NATURAL UKRAINIAN.

Spanish examples must be authentic and natural.
Every important example must have a Ukrainian translation.

English may appear only as:
- international grammatical terminology,
- secondary terminology useful for search,
- clarification when genuinely helpful.

Never write as if the learner's native language were English.
The primary comparison language is Ukrainian.

==================================================
3. NO CEFR
==================================================

Do not mention A1/A2/B1/B2/C1/C2 unless explicitly requested.
Do not organize content by proficiency level.
Do not write "Це тема рівня B1."
The website is a grammar reference, not a CEFR course.

==================================================
4. PEDAGOGICAL PRINCIPLE
==================================================

Always explain the LOGIC of Spanish grammar.
Avoid oversimplifications such as "ser = permanent" and "estar = temporary"
unless immediately qualified and explained correctly.

Bad:
"Ser використовується для постійних характеристик."

Better:
Explain why the distinction exists, what semantic contrast is actually being expressed,
where the simplified rule breaks down, and give minimal pairs.

Never teach misleading absolute rules.

# CONTENT MASTER PROMPT — Spanish Grammar Reference for Ukrainian Speakers

==================================================
1. PRIMARY OBJECTIVE
==================================================

Create the most useful possible Spanish grammar reference for Ukrainian-speaking learners.

The learner should be able to:
- find a specific grammatical topic;
- immediately understand what it means;
- see how it is formed;
- understand when it is used;
- understand when it is NOT used;
- see realistic Spanish examples;
- understand Ukrainian-specific difficulties;
- learn exceptions;
- recognize common mistakes;
- understand important regional variation;
- navigate to related grammar topics.

==================================================
2. LANGUAGE
==================================================

All explanations must be written in NATURAL UKRAINIAN.

Spanish examples must be authentic and natural.
Every important example must have a Ukrainian translation.
English may appear only as:
- international grammatical terminology;
- secondary terminology useful for search;
- clarification when genuinely helpful.

Never write the explanation as if the learner's native language were English.
The primary comparison language is Ukrainian.

==================================================
3. NO CEFR
==================================================

Do not mention A1/A2/B1/B2/C1/C2 unless the user explicitly asks for such information.
Do not organize content by proficiency level.
Do not write "Це тема рівня B1."

The website is a grammar reference, not a CEFR course.

==================================================
4. PEDAGOGICAL PRINCIPLE
==================================================

Always explain the LOGIC of Spanish grammar.

Bad:
"Ser використовується для постійних характеристик."

Better:
Explain why the distinction exists, what semantic contrast is actually being expressed,
where the simplified rule breaks down, and give minimal pairs.

Never teach misleading absolute rules.
Avoid oversimplifications such as "ser = permanent", "estar = temporary" unless immediately qualified.

==================================================
5. UKRAINIAN-SPEAKER FOCUS
==================================================

For every important topic ask: "What would a Ukrainian speaker likely find strange here?"
Explicitly address relevant differences between Ukrainian and Spanish:
- articles;
- grammatical gender;
- subject omission;
===============================================
6. DEPTH
===============================================

Content must be DEEP but not bloated.

Every major topic should cover:
A. Definition
B. Core idea
C. Formation
D. Usage
E. Non-usage / contrasts
F. Examples
G. Exceptions
H. Special cases
I. Common mistakes
J. Ukrainian-specific explanation
K. Regional variation (when relevant)
L. Related topics

Not every section is mandatory for tiny topics.
Major topics require substantially more depth.

===============================================
7. EXAMPLES
===============================================

Examples are extremely important.
Use natural contemporary Spanish.
Prefer examples that teach grammar.
Avoid unnatural textbook sentences.
Examples should vary: persons, numbers, contexts, affirmative/negative, questions,
formal/informal where relevant, Spain/Latin America where relevant.

For difficult distinctions, use minimal pairs.

Format:
===============================================
8. COMMON MISTAKES
===============================================

For important topics:
❌ Incorrect
Explanation of why it is wrong.

✅ Correct
Explanation of why it is correct.

Prioritize errors caused by:
- Ukrainian structure;
- direct translation;
- English interference only where common;
- confusion with a related Spanish construction.

Never fabricate mistakes.

===============================================
9. REGIONAL SPANISH
===============================================

Spanish is a pluricentric language.
Never imply that Spain is automatically the only standard.

Where relevant distinguish:
- Spain
- Latin America
- Rioplatense
- Mexico/Central America
- Caribbean

Important areas:
- tú / vos / usted;
- vosotros / ustedes;
- voseo;
- imperative forms;
- pronoun usage;
- leísmo/laísmo/loísmo;
- pronunciation-related differences where relevant.

Keep regional notes concise unless the topic itself is regional.

===============================================
10. GRAMMATICAL TERMINOLOGY
===============================================

Use standard modern Spanish grammatical terminology.
Provide Ukrainian terminology.
Where useful include Spanish and English terminology in parentheses.

Example:
Минулий доконаний час — Pretérito Perfecto Compuesto
(Spanish: pretérito perfecto compuesto; English: present perfect)

Do not overload every sentence with terminology.

===============================================

Spanish:
Me gusta el café.

Ukrainian:
Мені подобається кава.

Explanation:
...

===============================================

- verb conjugation;
- object pronouns;
- personal a;
- gustar;
- ser/estar;
- subjunctive;
- prepositions;
- double negation;
- word order.

===============================================


# Content plan — GrammarWay ES

Список контенту для створення/оновлення. Приорітет: найважливіші теми і найбільші прогалини.

## Принципи

- Контент пишеться українською.
- Обязательно: ідея, утворення, вживання, винятки, типові помилки україномовних, регіональні відмінності, пов'язані теми.
- Пріоритетні теми (див. майстер-промт, секція 21): ser/estar, por/para, займенники, se, gustar, особисте a, претерит/імперфект, субінкватив, артиклі, стать, відносні займенники, імператив, заперечення, hay/estar.
- Не створювати лексичні списки. Приклади — лише для граматики.
- Без CEFR-навантаження в інтерфейсі; тег використовується внутрішньо, optional.
- Зберігати внутрішні id тем (див. нижче).

## Checklist якості сторінки

Перед комітом перевірити:
- [ ] українська природна і без кальок;
- [ ] іспанські приклади природні і з українським перекладом;
- [ ] формули коректні і з поясненням символів;
- [ ] не було «ser=постійне / estar=тимчасове» без нюансів;
- [ ] винятки вказані і реальні;
- [ ] типові помилки україномовних реалістичні;
- [ ] пов'язані теми існують і посилаються в обидва боки;
- [ ] не залишено `TODO`, `placeholder`, `lorem ipsum`;
- [ ] не вигадано регіональні правила без підстави.

# Content plan — GrammarWay ES

Список контенту для створення/оновлення. Приорітет: найважливіші теми і найбільші прогалини.

## Принципи

- Контент пишеться українською.
- Обязательно: ідея, утворення, вживання, винятки, типові помилки україномовних, регіональні відмінності, пов'язані теми.
- Пріоритетні теми (див. майстер-промт, секція 21): ser/estar, por/para, займенники, se, gustar, особисте a, претерит/імперфект, субінкватив, артиклі, стать, відносні займенники, імператив, заперечення, hay/estar.
- Не створювати лексичні списки. Приклади — лише для граматики.
- Без CEFR-навантаження в інтерфейсі; тег використовується внутрішньо, optional.
- Зберігати внутренні ID тем: наприклад `ser-estar`, `por-para`, `object-pronouns`, `gustar`, `personal-a`, `presente-de-indicativo`, `preterito-indefinido`, `preterito-imperfecto`, `preterito-perfecto`, `subjuntivo-presente`, `indicativo-vs-subjuntivo`, `articles`, `adjective-agreement`, `negation`, `hay-estar`, `relative-pronouns`, `imperative`, `condicional`, `reported-speech`, `se-impersonal`, `word-order`, `conjunctions`, `adverbs`, `nouns`, `irregular-plurals`, `position-adjectives`, `comparison-degrees`, `adverbs-mente`, `personal-a`, `infinitive`, `gerund`, `participio`, `reflexive-pronouns`, `usted-vosotros-voseo`, `leismo`, `seseo`, `tener-que`, `hay-que`, `deber`, `poder`, `soler`, `acabar-de`, `volver-a`, `seguir-gerundio`, `estar-a-punto-de`, `ir-a-infinitivo`, `tenses-overview`; или `perífrasis` как группа.

## Формат файлу

- Шлях: `src/content/es/<category>/<slug>.mdx`
- Категорія визначається `data/categories.ts`: `fundamentals`, `nouns`, `articles`, `adjectives`, `adverbs`, `pronouns`, `prepositions`, `conjunctions`, `verbs`, `tenses`, `moods`, `periphrases`, `sentence-structure`, `word-formation`, `spelling`, `regional`.
- Frontmatter згідно `src/content.config.ts`. Не використовувати slug у frontmatter (резервовано).
- slug = ім'я файлу без розширення; для схожих імен старатися узгодженість (наприклад `ser-estar.mdx`, `por-para.mdx`, `gustar.mdx`, `presente-de-indicativo.mdx`, `preterito-indefinido.mdx`, `subjuntivo-presente.mdx`).
- Для тем, що не мають свого каталогу, створювати підкаталог тоді, коли це має сенс (наприклад conjuctions/subordinating).

## Checklist якості сторінки

Перед комітом перевірити:
- [ ] українська природна і без кальок;
- [ ] іспанські приклади природні і з українським перекладом;
- [ ] формули коректні і з поясненням символів;
- [ ] не було «ser=постійне / estar=тимчасове» без нюансів;
- [ ] винятки вказані і реальні;
- [ ] типові помилки україномовних реалістичні;
- [ ] пов'язані теми існують і посилаються в обидва боки;
- [ ] не залишено `TODO`, `placeholder`, `lorem ipsum`;
- [ ] не вигадано регіональні правила без підстави.

# Content plan — GrammarWay ES

Список контенту для створення. План акумулюється тут, а не в коментарях чи голові.

## Принципи і стиль

- Всі статті українською, приклади іспанські, важливі приклади мають український переклад.
- Жодних CEFR-написів на сторінках («цей розділ для B1»).
- Жодних вправ, поки це не запитують окремо.
- Ніяких «універсальних правил» без нюансів: ser/estar не світло/темно, indefinido/imperfecto не просто «в минулому».
- У кожній важливій темі: що це, як утворюється, коли вживається, коли НЕ вживається, маркери, винятки, типові помилки україномовних, регіональні нотатки, пов'язані теми.
- Пов'язані теми мають мати реальні шляхи у вигляді `[Тема](/es/категорія/slug/)`.
- Термінологія українська, з іспанською та англійською в дужках там, де це допомагає пошуку/орієнтації.

## Внутрішній стандарт структури

Базова схема, яку треба дотримуватися, де це доречно:

- короткий вступ (1 абзац)
- одне речення / одна думка (концентрований початок)
- утворення, формули, таблиці
- вживання (нумеровано або зручно)
- приклади (іспанська + українська)
- маркери / типові слова (де потрібно)
- особливі випадки і винятки
- типові помилки україномовних (❌ / ✅)
- примітка для україномовних (якщо є сенс)
## Мапа відсутніх і часткових розділів

Далі — список тем з майстер-промту, що в плані, з приближеними шляхами і пріоритетами.

Пріоритет 1 — теми, без яких інтерфейс «не висить»:

- articles / zero-article
- articles / neutral-lo
- articles / special-cases
- nouns / número (іменникове число)
- nouns / irregular-plurals
- pronouns / personal-pronouns-omission
- pronouns / tú-usted-vosotros-ustedes
- pronouns / demonstrative-pronouns
- pronouns / possessive-pronouns
- pronouns / indefinite-pronouns
- pronouns / interrogative-pronouns
- pronouns / relative-pronouns
- pronouns / lo-neutral-pronoun
- pronouns / se
- sentence-structure / word-order
- sentence-structure / questions
- sentence-structure / double-negation
- sentence-structure / hay-vs-estar
- tenses / pluscuamperfecto
- tenses / condicional-simple
- moods / imperativo-afirmativo
- moods / imperativo-negativo
- moods / subjunctive-triggers
- moods / when-not-subjunctive
- prepositions / place
- prepositions / time
- prepositions / verbs-with-prepositions
- periphrases / tener-que
- periphrases / hay-que
- periphrases / poder
- periphrases / soler
- periphrases / acabar-de
- periphrases / volver-a
- periphrases / seguir-gerundio
- periphrases / estar-a-punto-de

Пріоритет 2 — важливі, але можна заповнити трохи пізніше:

- fundamentals / reading-rules
- fundamentals / stress-and-accents
- fundamentals / date-time-numbers
- adjectives / adjective-position
- adjectives / changes-of-meaning-by-position
- adjectives / degrees-of-comparison
- adverbs / formation
- adverbs / position
- conjunctions / coordinating
- conjunctions / subordinating
- conjunctions / que-de-que
- conjunctions / conjunction-with-subjunctive
- verbs / infinitivo
- verbs / gerundio
- verbs / participio
- verbs / auxiliary-verbs
- verbs / irregular-verbs
- tenses / futuro-simple
- tenses / condicional-compuesto
- tenses / ir-a-infinitivo
- tenses / estar-gerundio
- tenses / indicative-overview
- tenses / sequence-of-tenses
- moods / presente-de-subjuntivo-extended
- moods / imperfecto-de-subjuntivo
- moods / perfecto-de-subjuntivo
- moods / pluscuamperfecto-de-subjuntivo
- moods / imperative-with-pronouns
- sentence-structure / conditional-sentences
- sentence-structure / reported-speech
- sentence-structure / passive-voice
- sentence-structure / se-passive
- sentence-structure / se-impersonal
- sentence-structure / compound-complex-sentences
- sentence-structure / subordinate-clauses
- sentence-structure / agreement-concordancia
- spelling / accent-marks
- spelling / stress-rules
- spelling / b-v
- spelling / c-z-s
- spelling / g-j
- spelling / h
- spelling / y-ll
- spelling / spelling-changes-in-conjugation
- spelling / capitalization
- spelling / punctuation
- word-formation / prefixes
- word-formation / suffixes
- word-formation / diminutives
- word-formation / augmentatives
- word-formation / derivation
- regional / spain-vs-latin-america
- regional / tú-vos-usted-extended
- regional / vosotros-ustedes-extended
- regional / seseo-ceceo
- regional / regional-imperative-forms
- regional / regional-grammar-overall
- reference / verb-tenses
- reference / pronoun-system
- reference / demonstratives
- reference / possessives
- reference / articles
- reference / irregular-verb-patterns
- reference / subjunctive-overview
- reference / imperative-overview

Пріоритет 3 — короткі, доповнювальні чи «за розкладом»:

- міжмовні заперечення-нюанси, якщо виникають
- теми, що виникають після перевірки пошуку/навігації
- дрібні доповнення до існуючих сторінок (не нові файли)


- регіональні відмінності (якщо потрібно)
- пов'язані теми

Пропускати секції можна для дуже маленьких розділів, але не для основних.


