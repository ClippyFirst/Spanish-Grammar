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

## 15. Temporal conjunctions: `hasta que`, `antes de que`, `después de que`, and `en cuanto` — 2026-10-18

This is a bounded claim-level pass following the subjunctive/indicative alternation check. It covers existing temporal claims and quick-reference rows, not the entire inventory of subordinate conjunctions.

### Direct evidence reviewed

- NGLE § 25.14e: `hasta que` can alternate in generic clauses (`hasta que les dan ~ den la cédula)); subjunctive is selected in prospective contexts (`hasta que te canses`).
- NGLE § 25.14h: temporal `después de que` rejects future indicative (`*después de que llegarás`). Indicative and subjunctive alternate for present/past events in American Spanish; indicative is habitual in these temporal constructions in American Spanish, while subjunctive is the majority choice in European Spanish.
- NGLE § 25.14h: temporal clauses complementing `antes` are described as requiring subjunctive (`antes de que amanezca`).
- NGLE § 22.6p defines temporal `en cuanto` as ‘inmediatamente que’ (immediately/as soon as). NGLE § 31.14i also treats it as a relative adverbial expression of immediacy. The cited sections do not by themselves provide a complete, claim-by-claim mood-distribution account for `en cuanto`; this remains an explicit verification limit.

### Changes made

- `subjunctive-triggers-list.mdx`: split the former `cuando/hasta que + subjunctive` row, which risked overgeneralizing `hasta que`, into separate rows for prospective `cuando`, contextual alternation with `hasta que`, `antes de que`, and `después de que`.
- `subjunctive-triggers.mdx`: added a bounded temporal-conjunction subsection with source-linked examples and regional limits; removed the unqualified “not future indicative” notation in favor of an explicit explanation.
- `when-not-subjunctive.mdx`: added contrastive examples showing indicative in generic `hasta que` clauses and subjunctive in prospective clauses, plus the regional variation in temporal `después de que`.
- `comparisons/indicative-subjunctive.mdx`: aligned the temporal section with both canonical pages and added a concise note on `antes de que`, `hasta que`, `después de que`, and the limited evidence for `en cuanto`.
- Added direct source locators for NGLE §§ 25.14 and 22.6p to canonical mood pages and the comparison source note.

### Evidence register

| Claim/example | Direct source | Disposition |
|---|---|---|
| `Esperan días y días hasta que les dan la cédula` / `Trabaja hasta que te canses` | NGLE § 25.14e | Kept as the documented contrast between generic alternation and prospective subjunctive. |
| `Avísame antes de que salgas` | NGLE § 25.14h | Kept as a standard subjunctive pattern after `antes de que`. |
| Future `después de que` | NGLE § 25.14h | Future indicative is excluded; subjunctive is used for prospective reference. |
| Present/past temporal `después de que` | NGLE § 25.14h | Regional note added: indicative is habitual in American Spanish, subjunctive is the majority choice in European Spanish. This describes the cited NGLE account, not every speaker. |
| Temporal `en cuanto` | NGLE §§ 22.6p and 31.14i | Meaning ‘immediately/as soon as’ is source-backed; complete mood distribution is not yet independently verified and is not presented as a universal rule. |

**Evidence boundary:** the cited NGLE paragraphs were opened and read. No corpus frequency search or separate regional survey was performed; all mood pages remain `draft` where broader claims are not fully checked. The `en cuanto` mood pattern remains an open item.


## 16. Por / para — bounded semantic and regional check — 2026-10-18

### Direct evidence reviewed

- RAE/ASALE, *Nueva gramática de la lengua española*, § 29.8k: *para* expresses physical/figurative destination, prospective temporal limit/deadline, purpose, utility/service, recipient, and orientation/intention.
- NGLE § 29.8n: *por* and *para* have historical overlap and remain practically interchangeable in a number of contexts, particularly some negative infinitival purpose clauses; a strict one-to-one semantic partition is not supported.
- NGLE § 29.8ñ: temporal *para la primavera* points to a more precise future time, while *por la primavera* is approximate.
- NGLE § 29.8o–p: *por* can express route and approximate location in space/time; *por + quantitative duration* is documented in both European and American Spanish and is currently more frequent in American Spanish.
- NGLE § 29.8q–r: *por* introduces passive agents and causal complements, and also marks means/channel, exchange/price, substitution and acting in favor of something.
- Direct source: https://www.rae.es/gram%C3%A1tica/sintaxis/usos-particulares-de-las-preposiciones-ii-en-entre-hacia-hasta-para-por-sin-sobre-tras

### Changes made

- `src/content/es/prepositions/por-para.mdx`: repaired malformed Markdown around the opening contrast, `para + infinitivo`, purpose/cause contrast, and reader note; added precise NGLE source locators; narrowed the regional note to the directly supported temporal-duration pattern; preserved the status as `draft`.
- `src/content/es/prepositions/por-para-markers.mdx`: added a source locator, changed the unsupported framing “typical mistakes of Ukrainian speakers” to neutral contrast examples, updated the reader-facing terminology, and bounded the regional statement for `por + temporal quantity`.
- `src/content/comparisons/por-para.mdx`: added source traceability, clarified that the semantic rows are orientations rather than mutually exclusive classes, and documented the regional qualification for `Trabajé por tres horas`.

### Evidence register

| Claim/example | Direct source | Disposition |
|---|---|---|
| `para` purpose, destination, recipient, deadline | NGLE § 29.8k | Retained as typical functions, not an exhaustive algorithm. |
| `por` and `para` overlap | NGLE § 29.8n | Added an explicit warning against treating the categories as strictly disjoint. |
| `por + quantitative duration` | NGLE § 29.8p | Retained but qualified: more frequent in American Spanish, documented in both American and European Spanish. |
| `por` route, approximate temporal location, agent, cause, means, exchange | NGLE §§ 29.8o–r | Source locators added; not every individual example or translation has been independently audited. |
| `para + infinitive` vs. `para que + finite clause` | NGLE §§ 46.1, 46.7 (locators) | Existing explanation retained with a caveat against reducing the distinction to an absolute same-subject/different-subject rule; full example-by-example check remains open. |

**Evidence boundary:** relevant NGLE paragraphs were opened and read directly. No corpus query, frequency calculation, country-by-country survey, independent Ukrainian editorial review, full lexical construction audit, or browser/accessibility/SEO test was performed. This is a bounded source-backed review; the three pages remain `draft` and publication readiness is not implied.

## 17. Verb–preposition government and personal `a` — bounded editorial/source check — 2026-10-18

### Direct evidence reviewed

- RAE/ASALE NGLE § 34.8a–i: personal `a` is used with direct objects in person-related contexts; its presence is construction-sensitive, not a universal marker before every noun. Official source: https://www.rae.es/gram%C3%A1tica/sintaxis/el-complemento-directo-preposicional-i-nombres-y-pronombres-complementos-de-persona-y-de-cosa-personificada
- NGLE § 36.6j: `a + infinitive` appears with prospective/goal-related verbs, including `ayudar` and `enseñar`. Official source: https://www.rae.es/gram%C3%A1tica/sintaxis/complementos-de-r%C3%A9gimen-con-las-preposiciones-a-ante-y-bajo
- NGLE §§ 36.7–36.10 cover selected verb-preposition patterns with `con`, `de/des­de`, `en`, and `por/para`. Sources: https://www.rae.es/gram%C3%A1tica/sintaxis/complementos-de-r%C3%A9gimen-con-las-preposiciones-con-y-contra ; https://www.rae.es/gram%C3%A1tica/sintaxis/complementos-de-r%C3%A9gimen-con-las-preposiciones-de-y-desde ; https://www.rae.es/gram%C3%A1tica/sintaxis/complementos-de-r%C3%A9gimen-con-las-preposiciones-en-entre-hacia-y-hasta ; https://www.rae.es/gram%C3%A1tica/sintaxis/complementos-de-r%C3%A9gimen-con-las-preposiciones-para-por-sobre-y-tras
- RAE/ASALE DPD entry `queísmo` directly documents `acordarse de que` and warns against dropping a required preposition; entry `depender` is recorded as a dictionary locator. Sources: https://www.rae.es/dpd/que%C3%ADsmo ; https://www.rae.es/dpd/depender

### Changes made

- `src/content/es/prepositions/verbs-with-prepositions.mdx`: repaired malformed Markdown in the opening, `que` clause explanation, and closing memory tip; added source locators; changed the heading about “typical errors of Ukrainian speakers” to neutral contrast examples; retained `draft` status.
- Corrected a substantive category conflation: `ayudar a alguien` can involve personal `a` before a human direct object, whereas `ayudar a limpiar` uses `a + infinitive` as part of the verb's construction. The previous sentence treated these as the same distinction in both examples; it now distinguishes the two constructions.
- Clarified that in `Depende de que llegues a tiempo`, `de` belongs to the government pattern `depender de`; the preposition itself does not determine the subjunctive.

### Evidence register

| Claim/example | Direct source | Disposition |
|---|---|---|
| `Veo a María` | NGLE § 34.8a–i | Retained as a baseline example for personal `a`; the section explicitly treats presence/absence as sensitive to animacy, definiteness, reference and construction. |
| `ayudar a alguien` vs `ayudar a limpiar` | NGLE § 34.8; § 36.6j | Clarified the difference between personal `a` before a human direct object and `a + infinitive` selected by the verb. The page does not attempt a full regional audit of the argument structure of `ayudar`. |
| `acordarse de que` | DPD, entry `queísmo` | Kept as a documented case where omitting the selected preposition is discouraged in the careful standard. |
| `Depende de que llegues a tiempo` | DPD `depender`; NGLE government framework | Clarified that preposition selection and subjunctive selection are separate analytical questions. The exact mood choice in every context was not exhaustively audited. |
| `pensar en`, `soñar con`, `interesarse por`, etc. | NGLE §§ 36.7–36.10 as relevant locators | Examples remain a pedagogical sample, not a claim that each verb has only one construction or that every listed example was individually frequency-checked. |

**Evidence boundary:** relevant NGLE sections were opened and read; the DPD `queísmo` entry was read directly. This is not a full audit of all verb-preposition pairs, dictionary senses, regional variants, or translations. No corpus query, quantitative frequency analysis, independent Ukrainian editorial review, or browser/accessibility/SEO test was performed. Page status remains `draft`.

## 18. Personal `a` — canonical/summary consistency and source-bound review — 2026-10-18

### Direct evidence reviewed

- NGLE § 34.8a–i: personal `a` before direct objects of people is influenced by definiteness, reference, animacy and construction; the source explicitly states that its presence can be obligatory, excluded or optional in different contexts.
- NGLE § 34.8k–n: some human NPs can receive a type/class reading without `a`; intensional verbs and prospectivity influence interpretation. This supports treating `Busco un médico` vs. `Busco a un médico que conozco` as a contextual contrast, not an absolute “indefinite vs. definite article” rule.
- NGLE § 34.8o: `a` is obligatory with proper names of animals and is commonly extended to common nouns for animals, especially domestic animals; this is not a blanket rule for every animal NP.
- NGLE § 34.10b–e and j: `ayudar` can select personal `a` before human direct objects; existential `haber` and typical possession `tener` do not take personal `a` in the cited baseline patterns; intensional verbs such as `buscar` favor referential/type readings differently depending on the construction.
- RAE/ASALE DPD entry `leísmo`: accepted masculine-person leísmo has a specific scope; it must not be generalized to feminine or inanimate direct objects. https://www.rae.es/dpd/le%C3%ADsmo
- Official NGLE sources: https://www.rae.es/gram%C3%A1tica/sintaxis/el-complemento-directo-preposicional-i-nombres-y-pronombres-complementos-de-persona-y-de-cosa-personificada ; https://www.rae.es/gram%C3%A1tica/sintaxis/el-complemento-directo-preposicional-iii-clases-de-verbos-que-favorecen-la-alternancia-en-el-uso-de-la-preposici%C3%B3n-otros-factores-que-intervienen-en-ella

### Changes made

- `src/content/es/pronouns/personal-a.mdx`: downgraded `reviewed` to `draft`; added claim-relevant NGLE and DPD source locators; repaired malformed Markdown in the inanimate-object example; changed the unsupported learner-error heading to neutral contrast examples; clarified that `a` with an inanimate NP requires a different context/interpretation; narrowed the animal and pronoun notes.
- `src/content/es/sentence-structure/personal-a.mdx`: downgraded `reviewed` to `draft`; replaced generic source locators with NGLE §§ 34.8 and 34.10; made the `Busco a un médico` contrast explicitly context/reference-sensitive; qualified `Busco a un taxi` as a neutral-baseline contrast rather than an exceptionless prohibition; updated the animal note and neutralized the unsupported learner-error heading.
- The short page's canonical link to `pronouns/personal-a` was retained. The two pages remain distinct in purpose: short orientation vs. detailed reference.
- DPD `leísmo` was read directly. The contrast `Veo a María → le veo` now explains that `la` is the general-standard baseline for a feminine direct object, while masculine-person leísmo is a separate accepted pattern with narrower scope.

### Evidence register

| Claim/example | Source | Disposition |
|---|---|---|
| `Veo a María` vs. `Veo el coche` | NGLE § 34.8a–i | Retained as a baseline contrast; not generalized into “every person always requires `a`.” |
| `Busco un médico` vs. `Busco a un médico que conozco` | NGLE § 34.8k–n; § 34.10j | Retained with explicit contextual/reference qualification. |
| `Quiero a mi perro` / proper names of animals | NGLE § 34.8o | Retained; animal use is bounded rather than described as uniform for all nouns and contexts. |
| `Tengo dos hermanos`, `Hay una mujer` | NGLE § 34.10e | Retained as baseline existential/possession patterns without personal `a`; not treated as an exhaustive account of every `tener` or `haber` construction. |
| `Veo a María → la veo` vs. leísmo | DPD `leísmo` | Clarified the standard baseline and the restricted scope of accepted masculine-person leísmo. |

**Evidence boundary:** the cited NGLE paragraphs and DPD `leísmo` entry were opened and relevant text read. The entire inventory of alternations in §§ 34.8–34.10, all dialectal distributions, every example/translation, and related clitic phenomena were not fully audited. No corpus query, quantitative frequency analysis, independent Ukrainian editorial review, or browser/accessibility/SEO test was performed. Both pages remain `draft`.

## 19. `gustar` and gustar-type verbs — bounded construction audit — 2026-10-18

### Direct evidence reviewed

- RAE/ASALE DPD, entry `gustar`: the subject denotes the cause of pleasure/attraction; the person experiencing it is expressed by an indirect object. It directly gives singular/plural examples including `Le gustaban la buena música y los buenos libros` and a voseo example `Vos me gustás mucho`. https://www.rae.es/dpd/gustar
- NGLE § 35.5b: indirect objects can denote an experiencer, as in the `gustar` construction.
- NGLE § 35.5k–m: verbs of affect include `gustar, encantar, doler, interesar` and others; the indirect object denotes the experiencer, while the cause of the sensation often appears as subject. Some verbs have other frames in other senses, so the whole class must not be treated as perfectly uniform. https://www.rae.es/gram%C3%A1tica/sintaxis/complementos-indirectos-seleccionados-o-argumentales-i-destinatarios-y-experimentadores

### Changes made

- `src/content/es/verbs/gustar.mdx`: added direct DPD/NGLE source locators and explicit `draft` status; removed an under-sourced and potentially distracting claim/example about plural agreement with coordinated infinitives, retaining the well-supported baseline `Me gusta viajar`; changed the learner-error heading to neutral contrast examples.
- `src/content/es/verbs/gustar-type-verbs.mdx`: downgraded `verified` to `draft`, replaced generic source metadata with direct DPD/NGLE locators, and changed the learner-error heading to neutral contrast examples. Its main construction account remains consistent with the direct source.

### Evidence register

| Claim/example | Direct source | Disposition |
|---|---|---|
| `Me gusta el café`: experiencer is indirect object, cause is subject | DPD `gustar`; NGLE § 35.5b, k–m | Retained with direct source locators. |
| `Me gusta el libro` vs. `Me gustan los libros` | DPD `gustar` directly documents plural subjects with plural `gustar` | Retained as baseline agreement examples. |
| `Me gusta viajar` | DPD/NGLE construction description | Retained; removed the unsourced coordination example `Me gustan viajar y cocinar` rather than claiming a full agreement rule for coordinated infinitives. |
| Similar verbs (`encantar, interesar, doler, faltar`, etc.) | NGLE § 35.5k–m | Kept as a pedagogical group with explicit warning that individual verbs may have other meanings and argument structures. |
| `a Juan le gustan los libros` / clitic doubling | NGLE indirect-object framework and DPD entry | Retained as a basic pattern; complete cross-dialect clitic-doubling distribution remains open. |

**Evidence boundary:** DPD `gustar` and NGLE § 35.5 excerpts were opened and read. No full paradigm audit of every verb in the group, corpus frequency analysis, detailed regional clitic-doubling survey, independent Ukrainian editorial review, or browser/accessibility/SEO test was performed. Both pages remain `draft`.

## 20. Object clitics and double-clitic sequences — bounded source/markup pass — 2026-10-18

### Direct evidence reviewed

- NGLE § 16.11a: clitic clusters such as `se lo` are tightly ordered; proclitic groups are written as separate words (`se lo daré`), while enclitic groups are written together (`dárselo`).
- NGLE § 16.11j and § 35.2e–g: third-person dative `le/les` takes the form `se` before an accusative clitic (`Se lo dijo`, not `*Le lo dijo`); `se` precedes the other clitics in the cluster.
- NGLE § 16.11l and § 35.2h: plural marking may surface on the accusative clitic in some American varieties (`Se los dije` for singular `lo` with plural recipient); this is regional variation and must not be generalized to all speakers.
- NGLE § 16.7: proclisis/enclisis and the positions available with finite verbs, infinitives, gerunds and affirmative imperatives.
- NGLE § 16.14: clitic doubling and co-reference; NGLE § 34.8: personal `a` before a direct object does not itself make the object indirect.
- DPD `leísmo`: masculine-person singular leísmo has a specific accepted scope; it must not be treated as a universal direct-object pattern. https://www.rae.es/dpd/le%C3%ADsmo
- Official sources: https://www.rae.es/gram%C3%A1tica/sintaxis/secuencias-de-pronombres-%C3%A1tonos ; https://www.rae.es/gram%C3%A1tica/sintaxis/sintaxis-de-los-pronombres-%C3%A1tonos-pronombres-procl%C3%ADticos-y-encl%C3%ADticos ; https://www.rae.es/gram%C3%A1tica/sintaxis/los-pronombres-dativos ; https://www.rae.es/gram%C3%A1tica/sintaxis/duplicaci%C3%B3n-de-los-pronombres-%C3%A1tonos

### Changes made

- `src/content/es/pronouns/objeto-directo-indirecto.mdx`: added direct NGLE/DPD source locators and `draft` status; repaired malformed Markdown in the direct/indirect object contrast, `se lo` explanation, post-preposition pronouns and `ayudar a alguien` example; clarified the personal-`a` distinction; bounded the leísmo note using DPD; changed learner-error heading to neutral contrast examples.
- `src/content/es/pronouns/double-object-pronouns.mdx`: added direct NGLE source locators and `draft` status; repaired malformed Markdown around OI/OD, `le/les → se`, and the different values of `se`; changed learner-error heading to neutral contrast examples.

### Evidence register

| Claim/example | Direct source | Disposition |
|---|---|---|
| `Veo a María → la veo` vs. `Escribo a María → le escribo` | NGLE § 34.8; indirect-object framework | Retained as a functional contrast; `a` alone does not identify the object as indirect. |
| `Le doy el libro → Se lo doy` | NGLE §§ 16.11j, 35.2e–g | Retained; `le/les` becomes `se` before `lo/la/los/las`. |
| `Te la envié`, `Dáselo`, `No se lo des` | NGLE §§ 16.11a, 16.7 | Retained as illustrative examples of order and clitic position; not every complex placement case was audited. |
| `Veo a María → le veo` | DPD `leísmo` | Wording narrowed: standard feminine direct-object baseline is `la`; masculine-person leísmo is a separate accepted pattern with limited scope. |
| `Se los dije` with singular `lo` | NGLE § 16.11l / § 35.2h | Regional pattern recorded as an open teaching nuance, not promoted to a general rule in these pages. |

**Evidence boundary:** the cited NGLE passages and DPD `leísmo` entry were read directly. No full dialect survey, corpus frequency analysis, complete audit of all pronoun placement environments, independent Ukrainian editorial review, or browser/accessibility/SEO test was performed. Both pages remain `draft`.

## 21. `si` conditionals — bounded time/mood audit and markup repair — 2026-10-18

### Direct evidence reviewed

- NGLE § 47.8a–d: conditional protasis and apodosis form interdependent temporal/modal correlations; in present-day standard Spanish, ordinary `si` protases reject future (`*si tendrás`), conditional (`*si tendrías`), present subjunctive (`*si tengas`) and present perfect subjunctive (`*si hayas tenido`). The source explicitly distinguishes current Spanish from historical forms.
- NGLE § 47.8e: the real/open pattern uses present indicative and can express current, habitual or prospective situations; it does not mean that the condition has already occurred.
- NGLE § 47.8g, i–k: potential and irrealis/contrafactual periods use different common correlations; the potential imperfect subjunctive does not simply mean “impossible,” and the pluscuamperfect subjunctive + conditional compound is a typical counterfactual pattern.
- Direct source: https://www.rae.es/gram%C3%A1tica/sintaxis/tiempo-y-modo-en-las-oraciones-condicionales

### Changes made

- `src/content/es/sentence-structure/conditional-sentences.mdx`: repaired malformed emphasis around the `si` clause and the future/conditional prohibition; added direct NGLE source locators and `draft` status; changed learner-error heading to neutral contrast examples; retained the explicit boundary that the prohibition applies to ordinary conditional protases, not every possible occurrence of the word `si`.
- `src/content/es/sentence-structure/si-clauses-overview.mdx`: downgraded `verified` to `draft`; added direct NGLE locators alongside the existing style-guide source; changed learner-error heading to neutral contrast examples.

### Evidence register

| Claim/example | Direct source | Disposition |
|---|---|---|
| `Si tengo tiempo, iré` | NGLE § 47.8e | Retained as a typical open/prospective condition; wording clarifies that present indicative does not imply a completed condition. |
| `Si tuviera tiempo, viajaría` | NGLE § 47.8g, i | Retained as a common potential/hypothetical correlation; explicitly not equated with logical impossibility. |
| `Si hubiera tenido tiempo, habría viajado` | NGLE § 47.8j–k | Retained as a common past counterfactual correlation, not a claim that all conditional relations use only this template. |
| `*Si tendré tiempo`, `*Si tendría tiempo` in ordinary conditional protases | NGLE § 47.8d | Retained as nonstandard for the target neutral standard; historical and other non-equivalent constructions remain outside this basic rule. |

**Evidence boundary:** NGLE § 47.8a–k was read directly for the claims above. No full survey of all conditional correlations, corpus query, country-by-country variation study, independent Ukrainian editorial review, or browser/accessibility/SEO test was performed. Both pages remain `draft`.


## 22. Imperative forms, clitic placement, forms of address, and voseo — 2026-10-19

### Direct evidence read

- RAE/ASALE, NGLE § 42.3c, g: the imperative paradigm is defective and chiefly involves second-person forms; forms such as *ven* (tú), *vení* (vos), and *venid* (vosotros) are exclusive imperative forms, while *venga* (usted) and *vengan* (ustedes) coincide with subjunctive forms. The same section identifies the common irregular affirmative *tú* forms *di, haz, ve, pon, sal, sé, ten, ven*.
- NGLE § 42.3e, h: affirmative imperative forms allow enclitic pronouns; in the relevant imperative uses, pronouns do not precede the verb. The negative pattern is different.
- NGLE § 42.3k–m: some enclitic combinations cause morphological changes, including loss of final *-d* before *os* and loss of final *-s* in first-person plural forms before *nos/se*. These details are not exhaustively covered in the short site article.
- NGLE § 42.3t–u: negative imperatives use subjunctive forms; exclusive affirmative imperative forms such as *entra, llamá, ven, di* do not simply take *no* unchanged (*no entres, no llamés/no llames, no vengas, no digas* according to the selected address variety).
- DPD entries «vos» and «vosotros»: *vos* is a singular second-person form in voseante varieties; *vosotros* is informal plural in most of Spain and is not used in America or in some southern Spanish areas, where *ustedes* also serves informal plural address. Direct references: https://www.rae.es/dpd/vos and https://www.rae.es/dpd/vosotros.

### Changes made

- `src/content/es/moods/imperativo.mdx`: added direct NGLE source locators and `draft` status; repaired malformed emphasis around affirmative/negative forms, the subjunctive mapping, and address examples; repaired two malformed contrast lines; corrected the Ukrainian audience heading; changed learner-error framing to neutral contrast examples.
- `src/content/es/pronouns/tu-usted-vosotros-ustedes.mdx`: added direct RAE source locators and `draft` status; repaired malformed Markdown around *usted* agreement; clarified the function of *vosotros* vs *ustedes*; changed learner-error framing to neutral contrast examples.
- `src/content/es/pronouns/object-pronoun-placement.mdx`: added direct NGLE § 42.3 locator for imperative enclisis/proclisis and negative imperatives; downgraded `reviewed` to `draft` because the imperative-specific claims now have a new source pass but the whole page has not been exhaustively checked.
- `src/content/es/regional/voseo.mdx`: added a direct DPD «vos» link, repaired malformed emphasis and a Ukrainian spelling issue, and downgraded `verified` to `draft`. The direct source supports the core pronoun/distribution note, not every country-level or social-frequency statement on the page.
- `en cuanto` remains an explicit open item: NGLE §§ 22.6p and 31.14i establish its temporal immediacy meaning and relative-adverbial classification, but the inspected passages do not directly establish a complete mood-selection rule. The existing caveat should remain until an exact direct source is found.

### Evidence boundary

This was a bounded source/editorial pass, not a full conjugation audit. No full review of every irregular imperative, all imperative-plus-clitic spellings, all regional voseo paradigms, country-by-country treatment norms, corpus frequencies, independent Ukrainian editorial review, or browser/accessibility/SEO testing was performed. All four pages remain `draft`; no claim of full verification or publication readiness is made.


## 23. Voseo imperative accentuation and plural address distribution — 2026-10-19

### Direct evidence read

- RAE/ASALE DPD «voseo», § 2.1.2.5: voseo imperative forms derive from the second-person plural forms with loss of final *-d* (e.g. *tomá, respondé, escribí*); the DPD distinguishes these from irregular *tú* imperatives. When enclitic pronouns are added, general accentuation rules apply.
- DPD «voseo», §§ 2.3–2.4: voseo has regional and social variation; the Rioplatense forms are accepted in the educated norm in Argentina, Paraguay and Uruguay. In Montevideo, formal registers more often use verbal voseo with *tú*; the Chilean system has a different profile and imperative voseo is restricted.
- DPD «tilde», §§ 1.2.1–1.2.3: agudas ending in a vowel take a written accent; llana words ending in a vowel do not; esdrújulas and sobresdrújulas always take a written accent.
- DPD «vosotros»: *vosotros/as* is informal plural in most of Spain, but it is absent from America and some southern Spanish areas such as the Canary Islands and western Andalusia, where *ustedes* also serves informal plural address. https://www.rae.es/dpd/vosotros

### Changes made

- `src/content/es/moods/imperativo.mdx`: added DPD «voseo» and «tilde» sources; clarified that enclitic accentuation follows rules for the resulting word; added the contrast `decí → decime → decímelo`; narrowed the voseo imperative description and noted that the Chilean pattern is not universal.
- `src/content/es/pronouns/tu-usted-vosotros-ustedes.mdx`: added a direct DPD-based caveat to the quick map for informal *ustedes* in the Canary Islands and western Andalusia; clarified that *ustedes* is not exclusively formal throughout Spain.
- `src/content/es/regional/voseo.mdx`: added direct DPD source locator for voseo paradigms; included Paraguay in the Rioplatense summary and noted the DPD-described formal-register variation in Montevideo; bounded the Chilean imperative statement.

### Evidence boundary

The cited DPD passages were read directly. The changes support only the specific paradigms and geographic/normative distinctions described above. No exhaustive accentuation audit, full country-by-country review of all voseo forms, corpus/frequency study, independent Ukrainian editorial review, or browser/accessibility/SEO testing was performed. All three pages remain `draft`.


## 24. Voseo page claim-level audit — 2026-10-19

### Claim-by-claim findings against DPD

- **Definition and two dimensions:** DPD «voseo», §§ 2.1.1–2.1.2, distinguishes *voseo pronominal* (using *vos* in place of *tú/ti*) from *voseo verbal* (using voseante verbal endings). The former page example *Vos vivís aquí* combined both dimensions and was not a clean illustration of pronominal voseo alone. It is replaced with *Vos eres inteligente*, a pronominal-only pattern documented by the DPD for some varieties.
- **Rioplatense present indicative:** the table forms *vos hablás, comés, vivís, sos, tenés, querés, podés* are consistent with the DPD's description of the generalized Rioplatense model. The page explicitly labels this table as Rioplatense rather than a universal voseo paradigm.
- **Geographic scope:** DPD §§ 2.3–2.4 describes voseo in the majority of Hispanic America but emphasizes sharply different country/area distributions and social values. The overview now names Argentina, Paraguay and Uruguay in its Rioplatense summary, and does not equate voseo presence with a single social meaning.
- **Imperative:** DPD § 2.1.2.5 supports *cantá, comé, viví* as voseante imperatives; §§ 2.3.1–2.3.2 distinguish the Rioplatense pattern from the more restricted Chilean imperative profile. The page retains this distinction.
- **Accentuation:** DPD § 2.1.2.5 says voseante imperatives with enclitic pronouns follow general accentuation rules; the adjacent canonical imperative page now illustrates *decí → decime → decímelo* with DPD «tilde» §§ 1.2.1–1.2.3.
- **Valid mixed systems:** *vos eres* can occur in pronominal voseo with a tuteante verb, so it must not be displayed as a general error. The former two `Mistake` components were replaced by a contrast table that explicitly labels the variety and avoids implying universal incorrectness.

### Changes made

- `src/content/es/regional/voseo.mdx`: corrected the pronominal-voseo example; expanded the geographic summary to include Paraguay; replaced two potentially misleading `Mistake` components with a variety-labelled contrast table; added direct DPD links; retained `review_status: draft`.
- `src/content/es/moods/imperativo.mdx`, `src/content/es/pronouns/tu-usted-vosotros-ustedes.mdx`: their immediately preceding source-supported updates remain in place.

### Evidence boundary

DPD «voseo» §§ 2.1.1–2.1.2.5 and 2.3–2.4 were read directly. This pass is a claim-level spot-check of the overview and Rioplatense table, not a complete audit of every voseo tense, every country's paradigm, or frequency/register claims. No corpus query, independent Ukrainian editorial review, or browser/accessibility/SEO test was performed. The page remains `draft`.


## 25. Temporal *en cuanto* — prospective subjunctive evidence, bounded — 2026-10-19

### Evidence

- RAE/ASALE NGLE § 22.6p establishes temporal *en cuanto* as ‘inmediatamente que’; § 31.14i discusses it among relative adverbial expressions of immediacy. These passages establish meaning/category, but not by themselves a complete mood-selection paradigm.
- A result excerpt from the RAE-hosted BRAE article «Las conjunciones temporales del español» (p. 301) explicitly gives *en cuanto salgan* alongside *cuando venga* as a prospective/future temporal subordinate with subjunctive, contrasting these with temporal conjunctions that take present indicative in certain simultaneous contexts. Source PDF: https://apps2.rae.es/BRAE_DB_PDF/TOMO_LXII/CCXXVI/Eberenz_289_385.pdf
- This evidence supports the prospective pattern *En cuanto salgan, avísame*; it does **not** establish that *en cuanto* categorically excludes indicative in every habitual, factual, past or generic context.

### Changes made

- `src/content/es/moods/subjunctive-triggers.mdx`: replaced the prior statement that mood distribution had no separate evidence with the narrower supported claim and a direct link to the BRAE article.
- `src/content/es/moods/when-not-subjunctive.mdx`: added the same evidence boundary; the page no longer implies that only the semantic meaning was checked.
- `src/content/comparisons/indicative-subjunctive.mdx`: added the prospective example and source link, while retaining a caveat against a complete distribution claim.

### Evidence boundary

The relevant excerpt from the RAE-hosted BRAE PDF search result was inspected, not a full page-by-page audit of the article. No corpus query or full distributional study was performed. The prospective pattern is supported; a complete *en cuanto* mood-selection account remains open. The three pages remain `draft`.


## 26. Частини тіла, присвійні форми та узгодженість порівняння — 2026-10-19

**Обсяг:** source-level редакційний прохід для `src/content/es/pronouns/body-parts-possession.mdx`, `src/content/es/pronouns/possessive-pronouns.mdx` і `src/content/comparisons/articles.mdx`. Це не повна перевірка кожного прикладу чи всіх регіонів.

### Зміни та підстави

- У порівняльній сторінці артиклів додано прямі переходи до канонічних пояснень про частини тіла/одяг і присвійні форми. Це усуває навігаційну прогалину: приклад `Me duele la cabeza` уже є в короткому огляді, але його синтаксис і роль `me` пояснюються в іншій статті.
- На сторінці частин тіла уточнено межу джерельної заяви: наявні локатори NGLE вказують на релевантні розділи про дативи та невідчужуване володіння, але не підтверджують автоматично кожний приклад, переклад, конструкцію з одягом або регіональне твердження.
- У присвійній статті додано локатор до NGLE §§ 18.1–18.7 (форми перед/після іменника, семантика, антецеденти та чергування з `de`) і встановлено `review_status: draft`: до цього не було claim-level запису джерел у frontmatter.
- Виправлено пошкоджене Markdown-виділення у вступі присвійної статті та нормалізовано виділення `vuestro/vosotros/de ustedes`. Регіональний абзац прямо повідомляє, що країно-за-країною аудит не виконаний.

### Докази й статус

- RAE/ASALE, *Nueva gramática de la lengua española*, предметний покажчик: розділи про посесивні конструкції з непрямим додатком — §§ 35.7i, ñ, p; невідчужуване володіння — § 18.7a–i; посесивні форми — §§ 18.1–18.7. Офіційний покажчик: https://www.rae.es/sites/default/files/Indice_contenidos_gramatica.pdf
- RAE/ASALE, § 38.11w, обговорює означений артикль у відношеннях невідчужуваного володіння в літературних абсолютних конструкціях: https://www.rae.es/gram%C3%A1tica/sintaxis/las-construcciones-absolutas-i-sus-elementos-constitutivos. Це вузьке підтвердження релевантності артикля, а не доказ універсального правила для всіх розмовних конструкцій із частинами тіла.
- Результат: редакційна узгодженість і прозорість джерельних обмежень покращені; повна перевірка прикладів, перекладів, одягу, дативної класифікації й регіонального розподілу залишається відкритою. Статус `draft` збережено.


## 27. QA failure follow-up: possessive-page emphasis artifact — 2026-10-19
The exact run [39208866244](https://github.com/ClippyFirst/Spanish-Grammar/actions/runs/39208866244), job 117917615173, failed in `npm run audit:final`, not in typecheck, MDX preflight, table audit, content validation, links, graph, or design checks. The reported blocking count was `emphasis_artifacts: 1`, with the sole reported match on the regional-variation paragraph in `pronouns/possessive-pronouns`. The paragraph used bold Markdown for several Spanish forms in one sentence, which triggered the emphasis-artifact detector. Changed the forms to single-asterisk italics in commit `063a11c08530627bf25937dd6a1c883d5e91050f`; this is a narrow formatting repair, not a linguistic claim change. The latest commit still requires a fresh full QA run. Do not claim CI pass until a run for the exact current SHA succeeds.


## 28. Частини тіла: експерієнцер і симпатетичний датив — 2026-10-19

### Прямо перевірені джерела

- RAE/ASALE, *Glosario de términos gramaticales*, «dativo»: https://www.rae.es/gtg/dativo — розрізняє датив-аргумент (зокрема експерієнцер у *Me duele la garganta*) і датив-додаток; посесивний/симпатетичний датив установлює відношення належності, приналежності або включення.
- RAE/ASALE, *Glosario de términos gramaticales*, «complemento indirecto»: https://www.rae.es/gtg/complemento-indirecto — прямо протиставляє аргументний CI у *Le dio el libro al niño* та неаргументний симпатетичний датив у *Le lavó el pelo al niño*. У джерелі зазначено, що *lavar* відбирає агенса й тему, а не окремого адресата.
- Офіційний предметний покажчик NGLE вказує на релевантні розділи про посесивний датив (§§ 35.7f–ñ) та невідчужуване володіння (§ 18.7a–i): https://www.rae.es/sites/default/files/indice_de_materias_gramatica.pdf. Сам покажчик є локатором, а не доказом усіх конкретних прикладів.

### Знахідки й зміни

- У src/content/es/pronouns/body-parts-possession.mdx додано прямі посилання на дві статті GTG та розмежовано три аналізи: *Me duele la cabeza* — датив експерієнцера, який може також установлювати зв’язок належності; *Me lavo las manos* — займенник кореферентний із підметом у конструкції, де *las manos* є прямим додатком, але його не слід беззастережно описувати як прямий зворотний додаток «мию себе»; *Le lavó el pelo al niño* — прямо засвідчений у GTG неаргументний симпатетичний датив.
- Для *El médico me revisó la garganta* збережено обережне формулювання: *me* позначає особу, якої стосується дія, але точну класифікацію не поширено на всі контексти без окремого аналізу.
- Не зроблено висновку, що кожен датив у реченнях із частинами тіла неаргументний. За GTG дативи можуть бути аргументами або додатками; *doler* із експерієнцером та *lavar* із симпатетичним дативом — не одна синтаксична модель.

### Межі доказу / відкриті питання

- Це джерельно підкріплене уточнення синтаксичного пояснення, а не повна перевірка всіх прикладів, українських перекладів, конструкцій з одягом або регіональної варіантності.
- Не виконано корпусного пошуку, частотного аналізу, країнового зіставлення чи браузерного/accessibility/SEO тесту.
- possessive-pronouns.mdx залишається draft: загальний локатор NGLE §§ 18.1–18.7 не замінює перевірки парадигм, прикладів, перекладів і розподілу vuestro/vuestra, su/sus, de ustedes за конкретними різновидами.


## 29. Присвійні форми: прямий текст NGLE і регіональні межі — 2026-10-19

### Прямо прочитані джерела

- RAE/ASALE, NGLE § 18.2 «Propiedades fundamentales de los posesivos»: https://www.rae.es/gram%C3%A1tica/sintaxis/propiedades-fundamentales-de-los-posesivos. §§ 18.2b–c розрізняють функції prenominal і postnominal possessives; § 18.2e підтверджує узгодження посесивної форми з іменником/займенником, який вона модифікує; § 18.2i описує загальноіспанську дистрибуцію присвійного перед іменником у позиції детермінанта та відсутність одночасного означеного артикля в нейтральній моделі.
- RAE/ASALE, NGLE § 18.3 «Posesivos prenominales y posnominales»: https://www.rae.es/gram%C3%A1tica/sintaxis/posesivos-prenominales-y-posnominales. § 18.3a розрізняє визначальну функцію prenominal possessives і прикметникову функцію postnominal possessives; § 18.3k–m фіксує варіантність із відносними підрядними в різних різновидах.
- RAE/ASALE, NGLE § 18.5a «Interpretación semántica de las relaciones de posesión»: https://www.rae.es/gram%C3%A1tica/sintaxis/interpretaci%C3%B3n-sem%C3%A1ntica-de-las-relaciones-de-posesi%C3%B3n. Підтверджує широкий, контекстний діапазон посесивних відношень — власність, частина/ціле, належність, спорідненість та атрибуція.
- RAE/ASALE, NGLE § 18.7a–i «Alternancias de presencia y ausencia de posesivos»: https://www.rae.es/gram%C3%A1tica/sintaxis/alternancias-de-presencia-y-ausencia-de-posesivos. § 18.7b–g описує означений артикль із посесивною інтерпретацією в конструкціях із частинами тіла; § 18.7g–h показує роль симпатетичного дативу та antecedent.

### Знахідки й зміни

- У src/content/es/pronouns/possessive-pronouns.mdx загальні локатори до індексу замінено прямими посиланнями на текст NGLE §§ 18.2–18.3, 18.5 і 18.7.
- Уточнено, що *mi casa* / відсутність артикля перед prenominal possessive — нейтральна загальноіспанська модель, а не універсальна заборона на будь-які послідовності «артикль + присвійний». NGLE § 18.2l–ñ документує історичні та регіонально обмежені конструкції, зокрема *un su amigo* / *una mi hijita* у північно-західній частині Піренейського півострова та в окремих зонах Мексики, Центральної Америки, Парагваю й Анд. Ці дані не виправдовують перенесення такої моделі на весь іспанський простір.
- Розділено три структурно різні моделі: *mi casa*; *un amigo mío* / *la casa es mía*; *el mío / la mía*. Попередня коротка формула могла помилково зближувати предикативне *la casa es mía* з іменниковою групою *el mío*.
- У регіональному абзаці збережено обмеження: *vuestro/vuestra* пов’язане з формою звертання *vosotros*; твердження про повний розподіл присвійних форм у країнах і спільнотах не оголошено завершеним.

### Межі доказу

- Прямий текст NGLE підтверджує описані синтаксичні відмінності та наявність конкретних регіонально обмежених моделей. Це не повний аудит усіх рядків парадигми, всіх прикладів і перекладів або всіх різновидів іспанської.
- Для *su/sus* збережено пояснення про потенційну неоднозначність референта, але не проведено корпусного вимірювання неоднозначності чи повного аналізу всіх контекстів.
- Не виконано корпусного/частотного дослідження, країно-за-країною перевірки всіх форм, незалежної повної української редактури чи браузерного/accessibility/SEO тесту.
- Статус сторінки залишається `draft`; джерела у frontmatter не є підставою для `verified`.


## 30. QA failure: malformed YAML source string in body-parts page — 2026-10-19

- **Run:** [39210353945](https://github.com/ClippyFirst/Spanish-Grammar/actions/runs/39210353945), job `117922128723`, failed during `astro sync` / frontmatter parsing before the other QA stages ran.
- **Exact finding:** `src/content/es/pronouns/body-parts-possession.mdx:33:5`, `bad indentation of a mapping entry`. The newly replaced NGLE § 18.7 source locator line lacked its closing double quote in YAML frontmatter.
- **Repair:** added the missing closing quote in commit `82cd7e57f9135ff44f1d1e628c925591e16b40f7`. This is a syntax-only correction; the cited source and linguistic claims did not change.
- **Status:** rerun full QA on the exact latest HEAD after audit/matrix/handoff updates. Do not treat the earlier success on `a593e4d7d2c7c436ae85decfeea74c6533998e8e` as validation of this later change.


## 31. Приклади частин тіла й одягу: переклади та статус «помилки» — 2026-10-19

### Прямі джерела й перевірені приклади

- Прочитано NGLE § 18.7a–i: https://www.rae.es/gram%C3%A1tica/sintaxis/alternancias-de-presencia-y-ausencia-de-posesivos. § 18.7b прямо порівнює *Me duele la cabeza* з нехарактерним для іспанської *Me duele mi cabeza*; § 18.7d охоплює частини тіла й речі особистої сфери, зокрема *pantalones*; § 18.7e дає приклади з дативом і означеним артиклем (*Se me cierran los ojos*, *Se me taponaron los oídos*); § 18.7g–h пояснює зв’язок симпатетичного датива з посесивним артиклем.
- Підтверджено базову логіку *Me duele la cabeza*, *Te duelen los pies*, *Me lavo las manos*, *Quítate los zapatos* та конструкцій на кшталт *Le curaron la herida*. Для *Me duele la cabeza* частина тіла узгоджується з дієсловом; займенник позначає експерієнцера/особу, якої стосується стан.

### Зміни

- У src/content/es/pronouns/body-parts-possession.mdx переклад *Le quitaron la chaqueta* змінено на «З нього/неї зняли куртку» замість неоднозначного «забрали куртку».
- Переклад *Le lavó el pelo al niño* нейтралізовано щодо невираженого роду підмета: «Дитині помили волосся».
- У *Se rompió el brazo* вилучено альтернативний переклад «рука зламалася», який міг змішувати цю конструкцію з *Se le rompió el brazo*. Додано коротке застереження про різницю між моделями.
- *Lavo mis manos* більше не позначено через компонент `Mistake` як безумовну помилку. Замінено на примітку: *Me lavo las manos* — нейтральніший типовий вибір у звичайному контексті, але менш типовий варіант не оголошується неграматичним без урахування контексту.
- Точніше описано *Me lavo las manos*: *las manos* — прямий додаток; *me* кореферентне з підметом і має посесивну інтерпретацію, тому не варто просто ототожнювати його з прямим зворотним додатком у *Me lavo*.
- *El médico me revisó la garganta* описано як аналіз за аналогією з посесивним/симпатетичним дативом, не як дослівний приклад з GTG. Явно позначено, що це синтаксичний аналіз конструкції, а не цитата з джерела.

### Межі

- Це точкова перевірка наведених конструкцій і перекладів, а не корпусний аудит частотності або повна перевірка всіх конструкцій з одягом/частинами тіла в усіх регіонах.
- Не виконано незалежної повної української редактури, браузерного/accessibility/SEO тесту чи систематичного країнового зіставлення. Сторінка залишається `draft`.


## 32. Cross-page consistency: article special cases and body-part guide — 2026-10-19

- **Files:** `src/content/es/articles/special-cases.mdx`; `src/content/es/pronouns/body-parts-possession.mdx`; comparison `src/content/comparisons/articles.mdx`.
- **Source:** directly inspected NGLE § 18.7a–i at https://www.rae.es/gram%C3%A1tica/sintaxis/alternancias-de-presencia-y-ausencia-de-posesivos. The section explicitly explains article with possessive interpretation in body-part constructions, the influence of noun/verb/syntactic position, and dative clitics.
- **Changes:** `special-cases.mdx` now links to the direct NGLE § 18.7 page instead of only the contents index, its `updated` metadata is `2026-10-19`, and its body-part paragraph links to the canonical detailed guide while warning against a categorical ban on possessives. The body-part page now distinguishes the intended reading of *Se rompió el brazo* from *Se le rompió el brazo* and avoids presenting the former as a simple anticausative reading without context.
- **Cross-page check:** the articles comparison already links to both the body-part/dative guide and the possessive forms page; no extra topic/page was created.
- **Limits:** this is a targeted consistency pass, not a full audit of all special-case examples or all regional distributions. No browser testing, full accessibility/SEO review, or corpus study was run. Keep the relevant pages `draft`.


## 33. Одяг: синтаксичні ролі clitic і межі узагальнення — 2026-10-19

- **Джерело:** NGLE § 18.7a–i, прочитаний безпосередньо: https://www.rae.es/gram%C3%A1tica/sintaxis/alternancias-de-presencia-y-ausencia-de-posesivos. § 18.7d прямо включає речі особистої сфери, зокрема *pantalones*, до іменників, що можуть уживатися з артиклем у посесивному значенні; § 18.7g описує роль симпатетичного датива.
- **Зміна:** у `body-parts-possession.mdx` уточнено, що *Ponte el abrigo*, *Quítate los zapatos*, *Me he manchado la camisa* і *Le quitaron la chaqueta* не слід автоматично описувати як одну й ту саму конструкцію. У всіх прикладах предмет одягу оформлено як іменникову групу, але функція clitic залежить від дієслова та контексту. У швидкій довідці виправлено опис *me* в *Me lavo las manos*: прямий додаток — *las manos*, а *me* кореферентне з підметом і має посесивне прочитання.
- **Межа:** NGLE § 18.7 підтримує загальну модель артикля/посесивної інтерпретації, але не надає повного окремого розбору кожного з чотирьох наведених речень. Тому точна функція clitic не приписується автоматично за аналогією.
- **Не виконано:** корпусний пошук, кількісний аналіз, країнове/реєстрове зіставлення та повна незалежна українська редактура. Сторінка лишається `draft`.


## 34. Special-case articles: direct DPD pass and evidence limits (2026-10-19)

- Opened RAE/ASALE DPD «el»: https://www.rae.es/dpd/el. §§ 2.1–2.2 directly establish that *el* before a feminine noun beginning with stressed /a/ is a formal variant of the feminine article; it applies only when the article immediately precedes the noun (*el agua fría*, but *la mejor agua*), does not change feminine agreement, and does not license masculine demonstratives (*esta agua*, not *este agua*). §§ 4–6 address personal names with/without article and geographical names, including the general tendency to omit articles from country names and variation by name.
- Opened NGLE § 18.7a–i directly for the possessive article and body-part examples. NGB § 9.1.1 directly lists the article paradigms, including *el/un águila* alongside feminine *la/una* forms.
- `special-cases.mdx`: replaced the contents-index-only locator for stressed-*a* with direct DPD §§ 2.1–2.2; added direct DPD §§ 4–6 for personal and geographical names; retained NGLE §§ 15.11–15.13 only as an explicitly labelled contents-index locator. Added `body-parts-possession` and `possessive-pronouns` to frontmatter `related` links.
- Regional/name wording now notes that *Argentina* can occur with or without the article, while *España* and *Ucrania* are commonly used without it; it also records DPD-documented conversational/register and regional conditions for *la María*. Added the exception to *al/del* contraction when **El** is part of a proper name (e.g. *a El Salvador*, *de El Cairo*), but explicitly marked contraction as not fully source-verified in this batch.
- **Still open:** no direct source passage on professions after *ser*, weekday article use, or language names was inspected. *Soy médico*, *el lunes/los lunes*, and *Hablo español / el español de Argentina* remain bounded illustrative examples, not claims fully verified against specific NGLE sections. The NGLE § 14.3 contraction citation is still only a contents-index locator, not chapter text.
- No corpus query, frequency study, exhaustive regional survey, independent full Ukrainian edit, browser/accessibility/SEO test was performed. `special-cases.mdx` remains `draft`.


## 35. Cross-page consistency: profession examples and *al/del* exception (2026-10-19)

- **Files:** `src/content/es/articles/definite-indefinite.mdx`, `src/content/es/articles/zero-article.mdx`, `src/content/es/articles/special-cases.mdx`, `src/content/comparisons/articles.mdx`.
- Replaced `Mistake` components that labelled *Soy un médico* as the bad form with neutral `MinPair` comparisons against *Soy médico*. The accompanying text already explained that *Soy un médico especializado en cirugía* is possible; the visual component contradicted that explanation by implying categorical ungrammaticality. Both canonical pages were marked `draft` and their `updated` date set to 2026-10-19.
- Added the proper-name exception to the *al/del* summary in the article comparison: do not contract when **El** belongs to a proper name (*a El Salvador*, *de El Cairo*). The special-cases page now includes the same exception and explicitly flags the lack of direct source verification for NGLE § 14.3.
- Direct source basis for stressed initial /a/ and personal/geographical names remains DPD «el» §§ 2.1–2.2, 4–6; NGLE § 18.7a–i supports the body-part possession section. The contraction exception is a bounded editorial correction but remains open for direct verification against the NGLE chapter text.
- **Limits:** no direct NGLE passage on profession predicates after *ser*, weekday article use, or language names was located/read in this batch. No corpus/frequency study, independent full Ukrainian edit, browser/accessibility/SEO test. Relevant pages remain `draft`.


## 36. Direct NGLE evidence for bare predicatives and language names (2026-10-19)

- Read NGLE § 15.11 directly: https://www.rae.es/gram%C3%A1tica/sintaxis/la-ausencia-del-art%C3%ADculo-i-constituci%C3%B3n-e-interpretaci%C3%B3n-sem%C3%A1ntica-de-los-grupos-nominales-sin-determinante. § 15.11g explicitly gives bare nominal predicates (*Son médicos*); § 15.11m gives a language name without determiner (*Habla ruso*) in a habitual/generic context. This supports the general pattern behind *Soy médico* and *Hablo español*, not every possible context or all language names.
- Read NGLE § 15.13 directly: https://www.rae.es/gram%C3%A1tica/sintaxis/la-ausencia-del-art%C3%ADculo-iii-otros-factores-aspectos-fraseol%C3%B3gicos-y-discursivos. It discusses construction-specific/phraseological bare nouns; it does not establish a general weekday rule.
- RAE «Ortografía» directly states that a/de do not contract when the article is part of an official place name, with examples such as *a El Cairo* and *de El Dorado*: https://www.rae.es/diccionario-estudiante/docs/ortografia.pdf.
- **Disposition:** `special-cases.mdx` source register and evidence note now distinguish direct text from contents-index locators. Profession and language-name patterns have general direct support; weekday article use and the full *al/del* rule remain open. Page remains `draft`.


## 37. QA failure and markup-only repair — special-cases *el/él* (2026-10-19)

- **Run:** [39211512517](https://github.com/ClippyFirst/Spanish-Grammar/actions/runs/39211512517), exact SHA `d8839aefa1afa7f2caa2da4fc4b33c4084c33f5b`, failed only at the final emphasis audit (`emphasis_artifacts: 1`). All other listed blocking totals were zero.
- **Finding:** `src/content/es/articles/special-cases.mdx:112` flagged adjacent bold spans in the contrast between the article *el* and pronoun *él*.
- **Repair:** changed the two labels from bold to italic in commit `2c75c52ede13e9c231fd010894360e27924588df`. No linguistic claim or QA rule was changed.
- **Status:** rerun full QA on the exact latest HEAD after the repair and current handoff update.


## 38. Артиклі: direct-source gaps and cross-page consistency (2026-10-19)

- **Exact CI baseline before this documentation batch:** run [39211778009](https://github.com/ClippyFirst/Spanish-Grammar/actions/runs/39211778009) passed on exact HEAD `c415272c498fb523a866d27ffca602ffccbc3060`. Any edits in this section and the subsequent checkpoint require a new exact-HEAD QA run.
- **Cross-page scope:** compared `articles/definite-indefinite.mdx`, `articles/zero-article.mdx`, `articles/special-cases.mdx`, and `comparisons/articles.mdx`. The profession contrast is aligned: `Soy médico` is the neutral classificatory pattern, while a qualified/identifying NP can take an article; none of the pages now labels `Soy un médico...` categorically ungrammatical. The `al/del` proper-name exception is aligned between the special-cases and comparison pages.
- **Traceability repair:** the zero-article page now cites the directly read NGLE § 15.11 and § 15.13 pages rather than only the table-of-contents index; a Ukrainian heading typo was corrected. This is a source-link/editorial repair, not verification of every claim on the page.
- **Weekday article use:** targeted searches of RAE/ASALE online material did not yield a directly relevant specialized passage in this bounded pass. The examples `El lunes...` and `Los lunes...` remain ordinary illustrative examples, but their rule-level analysis is **not source-verified** here. Do not claim that a dedicated RAE rule was found; retain this gap or remove any stronger generalization until a direct source is located.
- **General `al/del` contraction:** RAE *Ortografía* directly supports the exception when `El` belongs to an official proper name. The direct NGLE § 14.3 passage was not located/read in this pass; the NGLE citation remains a contents-index locator. General contraction is a basic descriptive rule, but this project's requested source-level gate remains open until the precise academic passage is inspected.
- **Evidence limits:** no corpus/frequency analysis, exhaustive example/translation audit, country/register survey, independent full Ukrainian edit, browser/accessibility/SEO test, or publication-readiness certification. Relevant pages remain `draft`.


## 39. QA follow-up — malformed source-list line break (2026-10-19)

- **Failure:** run [39212495117](https://github.com/ClippyFirst/Spanish-Grammar/actions/runs/39212495117) failed at `astro sync` while parsing `src/content/es/articles/zero-article.mdx:25:322` with `bad indentation of a sequence entry`.
- **Cause:** while replacing the contents-index locator with two direct NGLE URLs, the line separator was written as the literal characters `\\n` inside the YAML string instead of a real newline. This was a frontmatter formatting error, not a linguistic or source-content failure.
- **Repair:** replaced the literal separator with a real newline in commit `2d24c3c6db5031c0f3f233e62541fa9d9c3425c0`; the two NGLE references are now separate YAML list entries.
- **Status:** run 39212495117 validates neither the repaired file nor subsequent checkpoint commits. Full QA must pass on the exact newest HEAD before the batch is called green.


## 40. Прямі джерела для днів тижня та al/del (2026-10-19)

- **Exact QA baseline before this batch:** run [39212609998](https://github.com/ClippyFirst/Spanish-Grammar/actions/runs/39212609998) passed on exact HEAD `b6f0f24bc30d1bb2559135796aca3905a4808468`. It does not validate the content/documentation edits in this batch.
- **Weekday article — direct NGLE § 14.8c–h:** https://www.rae.es/gram%C3%A1tica/sintaxis/usos-de%C3%ADcticos-del-art%C3%ADculo-determinado-el-art%C3%ADculo--en-las-expresiones-temporales. § 14.8c says weekday names normally require the definite article when identifying a calendar day (*Vendrá el lunes*); § 14.8f documents no-article cases such as *Hoy es jueves*, date headings and appositions to deictic adverbs; § 14.8g contrasts *Lo hice el viernes* with generic/non-deictic *Lo hice en viernes*; § 14.8h describes generic plural *Los viernes no habrá clase* and generic singular *El lunes es el peor día de la semana*. The canonical explanation was updated to show the generalization and the construction-specific exceptions.
- **Contraction — direct NGLE § 14.3a–g:** https://www.rae.es/gram%C3%A1tica/sintaxis/formas-del-art%C3%ADculo-determinado-ii-el-art%C3%ADculo--en-las-construcciones-contractas. § 14.3b describes *al/del* as general/systematic when preposition and masculine singular article occur together; § 14.3c–d addresses article as part of a proper name and notes a written recommendation to avoid contraction with names such as *El Salvador*, while also acknowledging recorded variants; § 14.3g specifies strict adjacency. The canonical wording now distinguishes the general rule from the proper-name exception and avoids presenting the latter as a simplistic absolute about every name.
- **Canonical page change:** `src/content/es/articles/special-cases.mdx` now links directly to both NGLE sections and narrows the weekday and contraction wording. No page status was raised; it remains `draft`.
- **Limits:** this pass verifies these specific rule-level claims, not every example, every proper name, every country-specific usage, corpus frequencies, the full article system, or Ukrainian copy. No browser/accessibility/SEO test was performed.
- **Next action:** inspect exact newest HEAD QA. If green, do a final targeted consistency check across the four article pages and update the handoff. If red, inspect and repair only the reported blocker. Keep PR #27 open/unmerged and do not modify `main`.
