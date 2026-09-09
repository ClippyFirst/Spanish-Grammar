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


