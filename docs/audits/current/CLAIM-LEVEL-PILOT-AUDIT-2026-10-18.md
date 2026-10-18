# Пілотний claim-level аудит граматичних пояснень — 2026-10-18

**Гілка:** `docs/grammar-reference-architecture-2026-10-18`  
**Сфера:** пілотні claim-level перевірки `ser/estar/hay`, `pretérito indefinido/imperfecto` та вибору indicativo/subjuntivo; не повний аудит усього репозиторію.  
**Підхід:** зіставлення конкретних граматичних узагальнень із доступними академічними джерелами RAE/ASALE і FundéuRAE; корекція надмірно категоричних формулювань; фіксація того, що ще не перевірено.

> **Обмеження:** це пілотний аудит тверджень, а не повний лінгвістичний рецензентський висновок для всіх прикладів і всіх регіонів. Метадані `review_status: reviewed` означають, що статтю пройдено редакторсько-джерельним оглядом; це не рівнозначно `verified`.

## Підсумок

| Стаття | Результат | Статус |
|---|---|---|
| `src/content/es/verbs/ser-estar.mdx` | Основна модель не зводиться до «постійне / тимчасове»; розділено характеристики, місце предмета/особи та місце події. Прибрано невдалий блок `Mistake`, де помилковий і правильний приклади були однаковими. Загальну регіональну заяву замінено вимогою перевіряти конкретні конструкції. | Reviewed; окремі прикметникові та регіональні приклади ще потребують адресної перевірки. |
| `src/content/comparisons/ser-estar.mdx` | Зіставлено з канонічною статтею: обидві відкидають універсальне правило «постійне / тимчасове», містять мінімальні пари й розрізняють місце події та місце предмета. | Source-level consistency check; не окремий повний аудит кожного прикладу. |
| `src/content/es/tenses/preterito-vs-imperfecto.mdx` | Уточнено аспектуальне пояснення; джерельно перевірено `saber/conocer`, додано словникові та NGLE-посилання для контекстно залежного `querer`, і відокремлено ввічливе imperfecto (`Quería pedirte un favor`) від звичайної пари `Quería ir / Quise ir`. Регіональну примітку звужено. | Claim-level spot-check; повний аудит перекладів, частотності та регіональності лишається відкритим. |
| `src/content/es/pronouns/object-pronoun-placement.mdx` | Додано джерела про proclisis/enclisis і позицію займенників у складних конструкціях. Додано винятки/обмеження для `ponerse a + infinitivo` та `haber que + infinitivo`. Регіональний варіант `Lo hay que terminar` більше не описано як просто неможливий: зазначено рекомендацію FundéuRAE уникати його в загальному стандартному вжитку та його документування в деяких різновидах Іспанії. | Reviewed; потрібна окрема перевірка акцентуації та повного переліку конструкцій. |

## Твердження й докази

### 1. Ser / estar

- **Підтримується академічною рамкою:** вибір ser/estar не можна надійно описати лише як «постійне / тимчасове». В офіційному покажчику NGLE є окремі розділи про семантичну, локативну, синтаксичну та лексичну сторони розрізнення — §§ 37.7–37.9.
- **Практичне розрізнення, збережене в статті:** *El libro está en Madrid* локалізує предмет, тоді як *La conferencia es en Madrid* локалізує подію. Це пояснення має бути прочитане як типова конструкція, а не як єдина можлива форма для будь-якого контексту.
- **Прикметникові пари:** *es listo / está listo*, *es aburrido / está aburrido*, *es malo / está malo* — корисні контрастні приклади, але значення залежать від лексеми, референта й контексту. Не слід подавати їх як вичерпні двочленні словникові визначення.
- **Виправлення:** попередній блок, у якому `bad` і `good` обидва містили *Madrid está en España*, був дидактично хибним за формою компонента, хоча сама теза була правильною. Його замінено на явну примітку «Не помилка».
- **Відкрито:** у метаданих джерел наведено офіційний покажчик RAE для §§ 37.7–37.9, а не окреме посилання на кожну підсекцію. Перед статусом `verified` слід прив'язати ключові твердження до конкретних пунктів тексту NGLE та перевірити окремі прикметники.

Джерело: [RAE/ASALE — офіційний покажчик NGLE](https://www.rae.es/sites/default/files/Indice_contenidos_gramatica.pdf), § 37.5–37.9.

### 2. Pretérito indefinido / imperfecto

- **Підтверджено:** NGLE описує `canté` як перфективну форму, що подає подію з урахуванням її меж; це не означає, що подія мусить бути миттєвою. Наприклад, конструкції з тривалістю можуть описувати кількарічні періоди.
- **Підтверджено:** `cantaba` має імперфективні вживання, зокрема habitual, progressive та background readings. Частотні слова на кшталт `siempre` часто сприяють habitual reading, але не працюють як механічний вибір часу поза контекстом.
- **Важлива межа:** «indefinido = завершено, imperfecto = незавершено» — надто спрощено. Краще говорити про аспектуальну перспективу й те, як подію структурує контекст.
- **Регіональна варіантність:** NGLE окремо описує географічний розподіл perfecto compuesto і perfecto simple. У статті тепер не робиться сильніший висновок, ніби опозиція indefinido/imperfecto взагалі не має регіональних нюансів.
- **Відкрито:** приклади `Siempre fui amable con ella`, `Quise ir` і переклади українською слід ще переглянути з ширшим контекстом; вони не є автоматично хибними, але ізольований приклад не доводить усіх запропонованих прочитань.

Джерела:
- [RAE/ASALE — El pretérito perfecto simple (canté), § 23.9](https://www.rae.es/gram%C3%A1tica/sintaxis/el-pret%C3%A9rito-perfecto-simple-cant%C3%A9)
- [RAE/ASALE — El pretérito imperfecto (cantaba), § 23.10](https://www.rae.es/gram%C3%A1tica/sintaxis/el-pret%C3%A9rito-imperfecto-cantaba-i-informaci%C3%B3n-de%C3%ADctica-e-informaci%C3%B3n-aspectual)
- [RAE/ASALE — La oposición canté/cantaba, § 23.12](https://www.rae.es/gram%C3%A1tica/sintaxis/el-pret%C3%A9rito-imperfecto-cantaba-iii-relevancia-del-modo-de-acci%C3%B3n-la-oposici%C3%B3n-cant%C3%A9--cantaba)

### 3. Позиція займенників-клітик

- **Підтверджено:** у багатьох перифразах клітик може приєднуватися до інфінітива/герундія або стояти перед відмінюваним допоміжним дієсловом: *Quiero verlo / Lo quiero ver*, *Estoy leyéndolo / Lo estoy leyendo*.
- **Підтверджено обмеження:** ці варіанти не універсальні. Академічний опис окремо розглядає конструкції з прономінальними дієсловами та безособовим `haber`; наприклад, `Se puso a escribirlo`, а не `*Se lo puso a escribir`.
- **Регіональна точність:** `Lo hay que terminar pronto` не слід подавати як неіснуючу форму в усіх різновидах: FundéuRAE зазначає, що її документують у деяких різновидах півночі й центру Іспанії, але рекомендує уникати в загальному стандартному вжитку. Формулювання статті оновлено відповідно.
- **Відкрито:** правила наголосу в енклітичних формах мають бути звірені безпосередньо з відповідним розділом Ortografía; наявність загального посилання на Ortografía не означає, що кожну форму `dímelo/leyéndolo` вже пройдено окремим орфографічним тестом.

Джерела:
- [RAE/ASALE — офіційний покажчик Manual de la NGLE, § 16.4.2–16.4.3](https://www.rae.es/sites/default/files/Indice_de_contenidos_Manual_Nueva_gramatica_de_la_lengua_espanola.pdf)
- [RAE/ASALE — Cohesión e independencia de los componentes de las perífrasis, § 28.5](https://www.rae.es/gram%C3%A1tica/sintaxis/cohesi%C3%B3n-e-independencia-de-los-componentes-de-las-per%C3%ADfrasis-per%C3%ADfrasis-verbales-y-tiempos-compuestos)
- [FundéuRAE — Se lo hay que enseñar](https://www.fundeu.es/consulta/hiperbaton/)
- [RAE — Ortografía de la lengua española (2010), PDF](https://www.rae.es/sites/default/files/1ortografia_espanola_2010.pdf)

## Наступні кроки

1. Перевірити кожен приклад із секцій про `saber/conocer/querer` і кожну мінімальну пару `ser/estar` за конкретним академічним пунктом або надійним словниковим джерелом.
2. Перевірити українські відповідники й позначити ті, що потребують ширшого контексту.
3. Для клітик додати регресійний перелік конструкцій: proclisis/enclisis, стверджувальний і заперечний імператив, перифрази, прономінальні дієслова, `haber que`, подвійні клітики, акцентуація.
4. Окремо перевірити регіональні твердження на рівні конкретних країн/спільнот. Не виводити частотність із нормативного опису й не виводити нормативність лише з корпусного прикладу.
5. Після цього можна розглянути підвищення статусу з `reviewed` до `verified` за узгодженим критерієм.

## 4. Follow-up: `ser / estar / hay` and locative/adjectival subpages — 2026-10-18

**Scope:** `src/content/es/verbs/ser-estar.mdx`, `src/content/comparisons/ser-estar.mdx`, `src/content/es/verbs/ser-estar-hay.mdx`, `src/content/es/sentence-structure/hay-vs-estar.mdx`, `src/content/es/verbs/ser-estar-location.mdx`, and `src/content/es/verbs/ser-estar-with-adjectives.mdx`.

### Claim/evidence register

| Claim or example | Evidence checked | Disposition |
|---|---|---|
| The ser/estar contrast cannot be reduced to “permanent vs temporary.” | Direct online NGLE §§ 37.7–37.9 were opened and the relevant subsections read: § 37.7 (semantic aspects), § 37.8 (locative attributes), and § 37.9 (syntactic and lexical aspects). | Core pages explain the contrast as construction- and meaning-sensitive. Kept the explanation and linked the online sections directly. This is still not an exhaustive check of every example in the full chapters. |
| Entity location normally uses estar, while ser + location can locate an event. | NGLE § 37.8a–k direct text, which treats locative attributes and distinguishes entity location from event location. | Retained as a typical baseline, not an exceptionless rule. The location page contained broken Markdown emphasis and an overly strong `verified` status supported only by a generic syntax landing page. Fixed the markup, linked direct NGLE text, and downgraded `review_status` to `draft`. Every example and regional frequency have not been checked individually. |
| Adjectives can receive different readings with ser/estar. | Direct NGLE §§ 37.7 and 37.9 text supports the semantic and lexical dimensions of the contrast. | Kept the useful minimal pairs, but downgraded `ser-estar-with-adjectives.mdx` from `verified` to `draft`: its old source note named NGLE without any section locator. DLE entries for `listo, aburrido, verde, rico, seguro, abierto, cerrado, bueno, malo` have now been spot-checked; the remaining task is construction-to-sense and Ukrainian translation verification in context. |
| Existential `haber` is impersonal and remains singular in existential use. | RAE/ASALE, *El buen uso del español*, conjugation table identifies `ha (impersonal: hay)`: https://www.rae.es/buen-uso-español/conjugación-española. FundéuRAE explains singular `había`, `hubo`, `ha habido`, and modal-periphrasis examples: https://www.fundeu.es/recomendacion/habia-habian-muchas-personas-haber-uso-impersonal/ | Supported. Added these direct sources to both canonical `ser-estar-hay.mdx` and `hay-vs-estar.mdx`. |
| `hay` introduces existence/presence; `estar` locates an identified entity. | NGLE §§ 15.6d–e and 37.8a; RAE/ASALE DPD `haber` § 4. | Retained as a basic discourse/semantic contrast, explicitly not a mechanical “unknown vs known” rule. |
| A bare proper name after existential `hay` in a neutral presentative construction. | NGLE § 15.6i explicitly says the listed exceptions are not documented with proper names, marks `Hay Eva y Javier` as rejected, and contrasts it with `En la lista hay un tal Luis Pérez`. | Reintroduced a qualified `Mistake` example for neutral-standard `Hay Juan en la sala`, with a cited explanation and a scope caveat. This is now directly supported for the neutral standard pattern; no claim is made that every imaginable discourse context or regional usage is impossible. |
| A definite NP is not the ordinary neutral presentational complement of `hay`. | NGLE § 15.6c explicitly gives `Hubo un apagón` vs. rejected neutral `Hubo el apagón`, and § 15.6i describes exceptions, including non-referential quantitative NPs in § 15.6j. | Updated the page with the direct NGLE link and retained a qualified generalization; exceptions remain construction-specific, not a blanket ban. |
| Regional distributions of ser/estar/hay and adjectival pairs. | No regional corpus query or country-specific reference was consulted in this batch. | Removed a broad comparative assertion from the canonical triad page and replaced it with an explicit scope limitation. No country-level frequency or distribution claim is certified. |

### Files changed in this follow-up

- `src/content/es/verbs/ser-estar.mdx`: updated NGLE locator to §§ 37.7–37.9; replaced the unsupported empirical-sounding “common mistakes among Ukrainian speakers” heading with “contrastive examples for Ukrainian-speaking readers”.
- `src/content/es/verbs/ser-estar-hay.mdx`: added direct RAE/Fundéu sources; bounded the regional note; renamed “typical mistakes” to “contrastive examples”.
- `src/content/es/sentence-structure/hay-vs-estar.mdx`: added direct RAE/Fundéu sources and replaced the categorical proper-name “mistake” example with a qualified contrast.
- `src/content/es/verbs/ser-estar-location.mdx`: repaired malformed emphasis, linked direct NGLE §§ 37.7–37.8, and downgraded `verified` to `draft`.
- `src/content/es/verbs/ser-estar-with-adjectives.mdx`: linked direct NGLE §§ 37.7/37.9 and DLE entries, added nine contextual example pairs, and downgraded `verified` to `draft` pending complete context/translation checks.
- `src/content/comparisons/ser-estar.mdx`: read and compared against the canonical page; no substantive edit was justified in this batch.

### Direct NGLE check: existential definiteness and copular choice

The official online NGLE pages were opened and relevant subsections read directly:

- [§ 37.7, semantic aspects of ser/estar](https://www.rae.es/gram%C3%A1tica/sintaxis/el-atributo-en-las-oraciones-copulativas-con-ser-y-estar-i-aspectos-sem%C3%A1nticos-de-la-distinci%C3%B3n), including §§ 37.7a–k. The text explicitly rejects a simple permanent/transitory explanation and discusses individual/characterizing vs stage/episodic predication.
- [§ 37.8, locative attributes](https://www.rae.es/gram%C3%A1tica/sintaxis/el-atributo-en-las-oraciones-copulativas-con-ser-y-estar-ii-pol%C3%A9micas-relativas-a-los-atributos-locativos), including §§ 37.8a–k. It states that location of an entity normally uses `estar`, while event nouns permit `ser + location`; it also notes conversational locative uses of `ser` and regional variation in date expressions.
- [§ 37.9, syntactic and lexical aspects](https://www.rae.es/gram%C3%A1tica/sintaxis/el-atributo-en-las-oraciones-copulativas-con-ser-y-estar-iii-aspectos-sint%C3%A1cticos-y-l%C3%A9xicos), with relevant portions of §§ 37.9a–i inspected. It documents lexical alternations and shows that construction choice can be context-sensitive.
- [§ 15.6, defined/indefinite NPs in presentative or existential contexts](https://www.rae.es/gram%C3%A1tica/sintaxis/grupos-nominales-definidos-e-indefinidos-en-contextos-presentativos-o-existenciales), including §§ 15.6a–s. § 15.6c describes the definiteness effect; § 15.6i explicitly rejects bare proper names such as `Hay Eva y Javier` in the neutral existential pattern, while allowing a proper name inside an indefinite NP (`En la lista hay un tal Luis Pérez`). §§ 15.6j–s describe quantitative and endophoric exceptions. Representative examples have been added to both canonical pages; register and regional distribution of every exception have not been audited.
- [§ 41.6, impersonal haber](https://www.rae.es/gram%C3%A1tica/sintaxis/impersonales-no-reflejas-ii-impersonales-con-los-verbos-haber-hacer-ser-estar-e-ir), including §§ 41.6a–e. It supports the impersonal analysis and singular recommendation while explicitly describing plural agreement as documented in European and American varieties and variable in social evaluation.

**Effect on the site:** the earlier open question about bare proper names after existential `hay` is now resolved for the neutral-standard baseline by NGLE § 15.6i. The page’s contrastive example was restored with an explicit scope note. The section's relevant exception subsections (§§ 15.6j–s) were read and representative examples added; this does not justify a universal claim about every context or region.

### Direct DPD check: existential `haber` and regional variation

The second edition of the RAE/ASALE *Diccionario panhispánico de dudas*, entry `haber`, § 4, was opened and read directly: https://www.rae.es/dpd/haber. It states that existential/presentational `haber` is impersonal, takes a postverbal nominal complement, and remains singular in the formal educated standard; it gives `hay`, `había`, `hubo`, and `habrá` patterns, plus singular agreement in periphrases such as `va a haber`. It also explicitly acknowledges that plural agreement is widespread in informal speech in many American countries and occurs in Spain, especially among Catalan speakers, while recommending the impersonal singular in formal use.

This direct DPD source strengthens the evidence for impersonal singular agreement and its register/region caveat. DPD alone does not detail every definiteness restriction; the direct NGLE § 15.6c–i check below resolves the neutral-standard baseline for definite NPs and bare proper names, while NGLE §§ 15.6j–s describe specific quantitative and endophoric exceptions; representative examples are now included in the site.

### Regional/register evidence for adjectival locutions

NGLE § 37.9h–i was checked directly for regionally variable adjectival locutions. The text contrasts `de malas pulgas` with `de pocas pulgas` according to country and records `de mírame y no me toques` alongside `de mírame y no me toqués` in voseo areas; it also warns that locutions with `estar` are not equally familiar in all Spanish-speaking countries. The focused adjective page now cites this section and limits the claim to fixed locutions, rather than implying that the nine adjective pairs have equal regional frequency. No corpus frequency claim was made.

### Regional note audit: date/day expressions

NGLE § 37.8d was read directly for the narrow regional example involving date/day expressions. It states that `Ya es viernes` is the general pattern, also documents `Ya estamos a viernes / en verano / en junio`, records `Ya estamos en viernes` and `Ya estamos viernes` in the Andean area, and cites informal Chilean `Hoy somos viernes` in response to `¿Qué día es hoy?`. The canonical page and comparison page now include the same bounded example with the direct NGLE link and explicitly say it is not a general regional rule for all `ser/estar` uses. No broader Spain-versus-Latin-America generalization or frequency claim was added. A follow-up scan of the full canonical and comparison pages found no other explicit country-specific claim requiring revision: the remaining text states a scope caveat rather than assigning a usage to a country. NGLE § 37.9h–i does document regional variation in particular adjectival locutions, but those locutions are not generalized into the current adjective table. No corpus-based frequency claim was added.

### Cross-page consistency check

The canonical `ser-estar.mdx`, the focused `ser-estar-with-adjectives.mdx`, and `comparisons/ser-estar.mdx` were compared after the nine-pair table revision. Their shared examples for `listo`, `aburrido`, and `malo` align in the intended baseline readings; the canonical page's `verde` contrast is compatible with the focused page's colour/unripe-fruit examples. The comparison article presents a smaller set of minimal pairs and links back to the canonical explanation; no material contradiction was found in this sample. This is a scoped consistency check, not a claim that all cross-page ser/estar content has been reconciled.

### Editorial follow-up: contextual examples in adjective pairs

The nine rows in `ser-estar-with-adjectives.mdx` now include full Spanish examples and Ukrainian glosses for both `ser` and `estar` readings (`Es muy listo` / `¿Estás listo?`, `La película es aburrida` / `Estoy aburrido`, etc.). This replaces isolated one-word translations with contexts that make the contrast inspectable. It is an editorial clarity improvement, not proof that every reading is universal or regionally neutral; the page remains `draft`.

### Follow-up dictionary spot-check: adjective contrasts

The official DLE entries for all nine adjectives listed on `ser-estar-with-adjectives.mdx` were opened and checked as lexical evidence leads:

- `listo`: the entry distinguishes a prepared/disposed sense from a sagacious/astute sense, supporting the broad contrast *estar listo* vs *ser listo* without making the construction the dictionary's only organizing principle. https://dle.rae.es/listo
- `aburrido`: the entry gives “que causa aburrimiento”; it does not by itself establish every predicate/state contrast for *ser/estar*. https://dle.rae.es/aburrido
- `verde`: the entry includes the colour sense, fruit not yet ripe, and figurative inexperience/unpreparedness. https://dle.rae.es/verde
- `rico`: the entry distinguishes wealth from taste/pleasantness. https://dle.rae.es/rico
- `seguro`: the entry distinguishes safe/reliable from a person who feels no doubt (example: *Está segura de ello*). https://dle.rae.es/seguro
- `abierto` and `cerrado`: the entries include contrasting personality/attitude senses (frank/receptive vs strict/rigid or reserved), alongside other senses. https://dle.rae.es/abierto and https://dle.rae.es/cerrado

This is a lexical spot-check, not full verification of each *ser/estar* pairing. DLE entries establish possible senses; the NGLE sections on the copular contrast still need full-text claim checks to support construction choice and the Ukrainian translation in context. The page remains `draft`.

### Pair-level register for the nine adjective examples

| Pair in the canonical page | Direct lexical / grammatical support reviewed | Assessment for the current example | Remaining limitation |
|---|---|---|---|
| `listo` | DLE distinguishes “sagaz, avisado” from “preparado, dispuesto”: https://dle.rae.es/listo | `Es muy listo` / `¿Estás listo?` illustrates a clear lexical contrast. | The DLE senses support the glosses; this is not a full regional-frequency audit. |
| `aburrido` | DLE gives the adjective sense “que causa aburrimiento”: https://dle.rae.es/aburrido. NGLE § 37.7 discusses the broad contrast and the use of participles with `estar`. | `La película es aburrida` / `Estoy aburrido` is a useful property-versus-state teaching pair. | The exact state interpretation is not established by the DLE definition alone; keep the page draft pending complete context/translation review. |
| `verde` | DLE includes colour and unripe-fruit senses: https://dle.rae.es/verde. NGLE § 37.9f explicitly discusses colour adjectives alternating with `ser` and `estar` according to the assumed change. | `La botella es verde` / `El plátano está verde` is supported as a colour vs. unripe-fruit contrast. | Do not generalize the `estar` reading to every noun or context; the additional “inexperienced” sense is not shown in the table now. |
| `rico` | DLE distinguishes wealthy from tasty/pleasant: https://dle.rae.es/rico | `Es un hombre rico` / `La sopa está rica` makes the wealth vs. taste contrast explicit. | Lexical senses were checked; the page does not yet document region-specific preferences or all uses of `rico`. |
| `seguro` | DLE distinguishes safe/reliable from a person who feels no doubt and gives `Está segura de ello`: https://dle.rae.es/seguro | `Es un método seguro` / `Estoy seguro de que sí` illustrates reliability vs. certainty. | Full translation and register audit remains open. |
| `abierto` / `cerrado` | DLE entries include physical/open-closed and personality/attitude senses: https://dle.rae.es/abierto; https://dle.rae.es/cerrado. NGLE § 37.9d discusses character traits with `ser` and situational behaviour with `estar`. | `Es una persona abierta/cerrada` / `La tienda está abierta/cerrada` contrasts a person’s characteristic with a store’s state. | The entries support the broad senses, but the complete range of figurative, social, and regional uses is not audited. |
| `bueno` | DLE includes positive evaluation, health/fitness, and taste/pleasantness senses, including *gustoso, apetecible, agradable*: https://dle.rae.es/bueno | `El profesor es bueno` / `La sopa está buena` distinguishes evaluation of a person’s work from taste. | The broad lexical distinction is supported; the adjective has many other senses and the pair is not a universal ser/estar rule. |
| `malo` | DLE includes negative evaluation, illness, and deterioration, with the explicit example `El pescado está malo`: https://dle.rae.es/malo | `El profesor es malo` / `El pescado está malo` distinguishes a characteristic/evaluation from food being spoiled. | Context determines the intended reading; regional and figurative uses are not exhaustively audited. |

**Disposition:** all nine pairs now have full Spanish examples instead of isolated Ukrainian glosses. The spot-check supports the intended contrasts at a basic teaching level, but it does not justify upgrading `ser-estar-with-adjectives.mdx` from `draft` to `verified`.

A Ukrainian editorial spot-check then refined the glosses for gender where needed (*готовий / готова*, *впевнений / упевнена*), replaced the context-light *Es rico* with *Es un hombre rico*, separated *bueno/malo*’s food examples from their other dictionary senses, and removed unrelated apocope (*buen/mal*) from the professor examples. This is an internal editorial pass, not independent native-speaker review or regional validation.

### Evidence boundaries / remaining work

- The direct online NGLE texts for §§ 37.7 and 37.8 were read through the relevant subsections; the relevant portions of § 37.9 were also inspected. This is not an exhaustive audit of every example or every subsection in the full chapters.
- The RAE conjugation page, FundéuRAE, DPD § 4 and NGLE §§ 15.6/41.6 support the impersonal-singular baseline and the definiteness effect; they do not exhaustively verify every example's register, frequency, regional distribution, or discourse context.
- The nine adjective entries have now been spot-checked in the DLE, but this does not exhaustively verify each construction-to-sense pairing or all Ukrainian translations in context.
- No corpus query, country-by-country frequency audit, browser test, accessibility/SEO smoke test, or release-readiness assessment was performed.
- Do not raise any affected page to `verified` on the basis of this pass alone.

## 5. Follow-up: `saber / conocer / querer` in `pretérito indefinido / imperfecto` — 2026-10-18

**Scope:** `src/content/es/tenses/preterito-vs-imperfecto.mdx`, with comparison against `src/content/comparisons/past-tenses.mdx` and the related `preterito-imperfecto.mdx` page.

### Claim/evidence register

| Claim/example | Direct evidence checked | Disposition |
|---|---|---|
| `Sabía la respuesta` vs. `Supe la respuesta` | NGLE § 23.9j explicitly describes perfective `saber` as “enterarse de algo, adquirir conocimiento de ello”; DLE `saber` includes “tener noticia o conocimiento de algo” and `Supimos que se había casado`. https://www.rae.es/gram%C3%A1tica/sintaxis/el-pret%C3%A9rito-perfecto-simple-cant%C3%A9#23.9j; https://dle.rae.es/saber | Retained. The Ukrainian contrast “знав” / “дізнався” matches the source's state/acquisition distinction. |
| `Conocía a Ana` vs. `Conocí a Ana` | NGLE § 23.9j explicitly says perfective `conocer` can mean “entrar en contacto con alguien,” while imperfective forms denote having knowledge of someone/something. DLE `conocer` separately lists “entender, advertir, saber” and “tener trato y comunicación con alguien.” https://www.rae.es/gram%C3%A1tica/sintaxis/el-pret%C3%A9rito-perfecto-simple-cant%C3%A9#23.9j; https://dle.rae.es/conocer | Retained. “Був знайомий” / “познайомився” is a direct contextual rendering of the documented contrast. |
| `Quería ir` vs. `Quise ir` | DLE `querer` has separate senses for desire, will/determination, resolve, and attempt/procure. NGLE § 23.9k explains pragmatic reinterpretation of stative predicates in perfective contexts; it does not provide a one-to-one rule for this exact sentence. https://dle.rae.es/querer; https://www.rae.es/gram%C3%A1tica/sintaxis/el-pret%C3%A9rito-perfecto-simple-cant%C3%A9#23.9k | Kept with a caveat. The text no longer presents “decided/tried” as an automatic translation of `quise`; context and lexical sense must decide. |
| `Quería pedirte un favor` | NGLE § 23.11e–f discusses the courtesy use of imperfecto with `querer/desear` in requests. https://www.rae.es/gram%C3%A1tica/sintaxis/el-pret%C3%A9rito-imperfecto-cantaba-ii-desarrollos-de-la-noci%C3%B3n-de-copret%C3%A9rito-valores-modales-del-imperfecto#23.11e | Added as a separate note so a courtesy imperfect is not confused with a literal past desire or treated as the same contrast as `Quería ir / Quise ir`. |

### Evidence boundary

The relevant NGLE sections were opened directly. This is a bounded check of these examples, not a full audit of every use of stative verbs in the two tenses. No corpus-frequency claim or country-level distribution claim was added. The main page remains `review_status: reviewed`; this spot-check does not justify upgrading it to `verified` without a broader example/translation audit.

## 6. Regional claim-level follow-up: `pretérito perfecto compuesto / indefinido` — 2026-10-18

**Files:** `src/content/comparisons/past-tenses.mdx` and `src/content/es/tenses/preterito-vs-imperfecto.mdx`.

### Direct evidence checked

- NGLE § 23.7b–c states that the compound perfect shows the greatest geographic variation among current Spanish tense uses and distinguishes several systems: present-relevance uses in central/southern European Spanish; a more aspectual opposition in Mexico, much of Central America and parts of the Caribbean; neutralization toward the simple past in Chile and much of Argentina; and opposite patterns in coastal Peru and parts of the Andean area. https://www.rae.es/gram%C3%A1tica/sintaxis/el-pret%C3%A9rito-perfecto-compuesto-he-cantado-i-relevancia-actual-de-los-hechos-pret%C3%A9ritos
- NGLE § 23.8a says `La he visto hace un momento` is natural in Lima, Madrid and La Paz, but not in Montevideo, Santiago de Chile or Mexico City, where `La vi hace un momento` is used. https://www.rae.es/gram%C3%A1tica/sintaxis/el-pret%C3%A9rito-perfecto-compuesto-he-cantado-ii-el-perfecto-de-hechos-recientes-otros-usos
- NGLE § 23.8d notes that perfect forms with closed past-time adjuncts are restricted in European Spanish but occur in Bolivia and other areas, which makes an exceptionless “yesterday + compound perfect is wrong everywhere” claim too strong.

### Changes made

- Replaced the comparison page's broad claim that Latin America, “especially Mexico and the Andean region,” simply uses the compound perfect less often. The new note describes the different patterns by subregion and gives one directly sourced example.
- Removed `Esta semana comí mucho` as a categorical “mistake”; it is now a regional note explaining that the choice depends on the variety and context.
- Removed `Ayer he comido a las dos` from the categorical `Mistake` list and replaced it with a regional note: neutral Peninsular standard favors `Ayer comí`, while NGLE § 23.8d documents compound-perfect use with closed past adjuncts in Bolivia and other areas.
- Rewrote the comparison's introductory definitions and table to avoid equating `perfecto` with an always-current result, `indefinido` with being “cut off from the present,” or `imperfecto` with simple incompletion.
- The canonical tense page now links NGLE §§ 23.7–23.8 and summarizes the regional patterns without making a frequency claim beyond the academic description.

**Evidence boundary:** this is a source-backed revision of the regional claims, not a corpus-based frequency study. It does not imply that each cited form is equally common or acceptable for every speaker within a named region.

## 7. Subjunctive trigger pages: source-traceability and bounded claim check — 2026-10-18

**Files:** `src/content/es/moods/subjunctive-triggers.mdx`, `subjunctive-triggers-list.mdx`, `when-not-subjunctive.mdx`, and `src/content/comparisons/indicative-subjunctive.mdx`.

### Changes and direct evidence

- `subjunctive-triggers.mdx`: repaired malformed emphasis in the explanation of `cuando`; added `review_status: draft`, update date, and direct NGLE links for §§ 25.2, 25.3, 25.7, 25.12, and 25.13; neutralized the “typical mistakes” heading.
- `subjunctive-triggers-list.mdx`: downgraded `review_status: verified` to `draft` because the prior sources were generic book titles without claim-level locators; replaced them with direct NGLE section links and repaired malformed Markdown in the source list.
- `when-not-subjunctive.mdx`: added `review_status: draft`, date, and direct NGLE locators for basic mood selection, negation, relative clauses, and subordinating conjunctions. The `Creo que sea verdad` contrast now explicitly scopes the correction to neutral affirmative assertion rather than every possible context with `creer`.
- `comparisons/indicative-subjunctive.mdx`: added direct NGLE links and a scope note; corrected title casing.

### Claim-level spot-check

| Claim/example | NGLE evidence reviewed | Disposition |
|---|---|---|
| `Quiero que vengas` / `Quiero que viene` | NGLE § 25.2 (inductors of mood) and § 25.3 (basic selection contexts) describe volition/ influence constructions selecting subjunctive. | Kept as a neutral-standard contrast; this is a construction rule, not a claim that every occurrence of `que` selects subjunctive. |
| `Creo que está bien` / `No creo que esté bien` | NGLE §§ 25.3 and 25.7 describe the basic indicative selection in affirmative belief and the role of negation in mood choice. | Kept with scope language: the generalization is about neutral assertion, not all questions, quotation, or pragmatic contexts. |
| `Busco el libro que explica esto` / `Busco un libro que explique esto` | NGLE § 25.12 discusses reference and interpretation of nominal groups containing relative clauses. | Kept as a reference/identifiability contrast, not as “real vs. unreal.” |
| `Cuando llegas a casa, siempre llamas` / `Cuando llegues, llámame` | NGLE § 25.13 covers mood choice with subordinating conjunctions; its treatment of temporal clauses supports the habitual/factual vs. prospective contrast. | Kept as a bounded example. It does not establish a mechanical rule for every use of `cuando`. |
| `Aunque llueve, salgo` / `Aunque llueva, saldré` | NGLE § 25.13 treats mood choice with subordinating conjunctions and concessive readings. | Kept with a context note: factual assertion vs. hypothetical/non-asserted presentation is a useful contrast, not an exhaustive semantic rule. |

**Evidence boundary:** direct NGLE sections were opened for the listed claims. The batch did not audit every subjunctive trigger, every alternation, every regional pattern, or every example on the four pages. The pages remain `draft` where appropriate; no full verification or publication-readiness claim is made.

## 14. Subjunctive alternations: temporal `cuando` and concessive `aunque` — 2026-10-18

This follow-up implements the next action from the prior checkpoint. It is a bounded claim-level check, not a complete audit of temporal or concessive conjunctions.

### Direct evidence read

- RAE/ASALE, NGLE § 25.13h: hypothetical concessive clauses such as `Aunque insistas, no te hará caso` take subjunctive; factual concessive clauses may allow both moods, exemplified by `Aunque lo intento ~ intente todos los días, nunca consigo hablar con él`.
- NGLE § 25.13i–j: mood choice in concessive clauses is related to information structure. Indicative can present the concessive content as an assertion/new information; subjunctive can present it as background/shared information. Subjunctive does not itself deny the truth of the proposition.
- NGLE § 24.5c and § 24.5j–k: imperfective indicative with `cuando` supports iterative/habitual readings; `Cuando llegues, nos iremos` receives the interpretation ‘once/after you arrive’. This section supports the temporal interpretation and the contrast in time perspective; § 25.13 is the broader source for mood selection with subordinating conjunctions.

### Changes made

- `subjunctive-triggers.mdx`: replaced the broad “not yet occurred / not presented as accomplished fact” description with a more bounded distinction between prospective temporal clauses and habitual scenarios. Added the explicit factual alternation with `aunque` from NGLE § 25.13h and clarified information structure.
- `when-not-subjunctive.mdx`: added a compact factual-`aunque` alternation section and a more precise reference to NGLE § 24.5j–k for the prospective `cuando` example.
- `comparisons/indicative-subjunctive.mdx`: added the factual alternation alongside the hypothetical and assertive examples so the canonical pages and comparison do not imply a one-to-one mapping of factuality to mood.

### Evidence register

| Claim/example | Direct source | Disposition |
|---|---|---|
| `Cuando llegas a casa, siempre llamas` | NGLE § 24.5c: imperfective indicative in temporal `cuando` clauses can receive habitual/iterative readings. | Retained as a habitual example; not a rule for all `cuando` clauses. |
| `Cuando llegues, nos iremos` / `Cuando llegues, llámame` | NGLE § 24.5j–k explicitly discusses prospective `cuando llegues` and the paraphrase ‘una vez que llegues’. | Retained with prospective/time-perspective wording; avoid claiming § 24.5 alone exhausts mood selection. |
| `Aunque insistas, no te hará caso` | NGLE § 25.13h identifies hypothetical concessive clauses and gives this example. | Added as the bounded hypothetical baseline. |
| `Aunque lo intento ~ intente todos los días, nunca consigo hablar con él` | NGLE § 25.13h gives the two-form alternation in a factual concessive context. | Added to show that factual concession does not mechanically require indicative. |
| Indicative vs. subjunctive in factual concession | NGLE § 25.13i–j discusses assertion, information structure, and background/shared information. | Clarified; subjunctive is not equated with doubt or falsity. |

**Evidence boundary:** the cited NGLE sections were opened and the relevant paragraphs read directly. No corpus frequency analysis, dialect survey, or full audit of every `cuando`/`aunque` example was performed. The pages remain `draft`; this bounded check does not justify `verified` or publication-ready status.

