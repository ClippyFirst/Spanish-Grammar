# Пілотний claim-level аудит граматичних пояснень — 2026-10-18

**Гілка:** `docs/grammar-reference-architecture-2026-10-18`  
**Сфера:** три канонічні статті та порівняльна сторінка `ser/estar`.  
**Підхід:** зіставлення конкретних граматичних узагальнень із доступними академічними джерелами RAE/ASALE і FundéuRAE; корекція надмірно категоричних формулювань; фіксація того, що ще не перевірено.

> **Обмеження:** це пілотний аудит тверджень, а не повний лінгвістичний рецензентський висновок для всіх прикладів і всіх регіонів. Метадані `review_status: reviewed` означають, що статтю пройдено редакторсько-джерельним оглядом; це не рівнозначно `verified`.

## Підсумок

| Стаття | Результат | Статус |
|---|---|---|
| `src/content/es/verbs/ser-estar.mdx` | Основна модель не зводиться до «постійне / тимчасове»; розділено характеристики, місце предмета/особи та місце події. Прибрано невдалий блок `Mistake`, де помилковий і правильний приклади були однаковими. Загальну регіональну заяву замінено вимогою перевіряти конкретні конструкції. | Reviewed; окремі прикметникові та регіональні приклади ще потребують адресної перевірки. |
| `src/content/comparisons/ser-estar.mdx` | Зіставлено з канонічною статтею: обидві відкидають універсальне правило «постійне / тимчасове», містять мінімальні пари й розрізняють місце події та місце предмета. | Source-level consistency check; не окремий повний аудит кожного прикладу. |
| `src/content/es/tenses/preterito-vs-imperfecto.mdx` | Уточнено аспектуальне пояснення; додано конкретні посилання на розділи NGLE про `canté`, `cantaba`, habitualidad і їхню опозицію. Регіональну примітку звужено: варіантність perfecto compuesto/indefinido не доводить відсутності варіантності в інших контекстах. | Reviewed; приклади `saber/conocer/querer` і частотні інтерпретації ще варто перевірити окремо. |
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
| The ser/estar contrast cannot be reduced to “permanent vs temporary.” | The official RAE/ASALE NGLE contents index identifies § 37.7 (semantic aspects), § 37.8 (locative attributes), and § 37.9 (syntactic and lexical aspects): https://www.rae.es/sites/default/files/Indice_contenidos_gramatica.pdf | Core pages already explain the contrast as construction- and meaning-sensitive. Kept the explanation; normalized the section locators. The index is a locator, not a substitute for reading all sections. |
| Entity location normally uses estar, while ser + location can locate an event. | Same NGLE locator, § 37.8, specifically identifies locative attributes as a dedicated topic. | Retained as a typical baseline, not an exceptionless rule. The location page contained broken Markdown emphasis and an overly strong `verified` status supported only by a generic syntax landing page. Fixed the markup, added precise locator leads, and downgraded `review_status` to `draft`. Examples and their regional frequency still need item-by-item checking. |
| Adjectives can receive different readings with ser/estar. | NGLE locator §§ 37.7–37.9 provides the correct semantic/syntactic/lexical research location. | Kept the useful minimal pairs, but downgraded `ser-estar-with-adjectives.mdx` from `verified` to `draft`: its old source note named NGLE without any section locator. The individual senses/translations of `listo, aburrido, verde, rico, seguro, abierto, cerrado` still require dictionary-level checking. |
| Existential `haber` is impersonal and remains singular in existential use. | RAE/ASALE, *El buen uso del español*, conjugation table identifies `ha (impersonal: hay)`: https://www.rae.es/buen-uso-español/conjugación-española. FundéuRAE explains singular `había`, `hubo`, `ha habido`, and modal-periphrasis examples: https://www.fundeu.es/recomendacion/habia-habian-muchas-personas-haber-uso-impersonal/ | Supported. Added these direct sources to both canonical `ser-estar-hay.mdx` and `hay-vs-estar.mdx`. |
| `hay` introduces existence/presence; `estar` locates an identified entity. | NGLE §§ 15.6d–e and 37.8a; RAE/ASALE DPD `haber` § 4. | Retained as a basic discourse/semantic contrast, explicitly not a mechanical “unknown vs known” rule. |
| A bare proper name after existential `hay` in a neutral presentative construction. | NGLE § 15.6i explicitly says the listed exceptions are not documented with proper names, marks `Hay Eva y Javier` as rejected, and contrasts it with `En la lista hay un tal Luis Pérez`. | Reintroduced a qualified `Mistake` example for neutral-standard `Hay Juan en la sala`, with a cited explanation and a scope caveat. This is now directly supported for the neutral standard pattern; no claim is made that every imaginable discourse context or regional usage is impossible. |
| A definite NP is not the ordinary neutral presentational complement of `hay`. | NGLE § 15.6c explicitly gives `Hubo un apagón` vs. rejected neutral `Hubo el apagón`, and § 15.6i describes exceptions, including non-referential quantitative NPs in § 15.6j. | Updated the page with the direct NGLE link and retained a qualified generalization; exceptions remain construction-specific, not a blanket ban. |
| Regional distributions of ser/estar/hay and adjectival pairs. | No regional corpus query or country-specific reference was consulted in this batch. | Removed a broad comparative assertion from the canonical triad page and replaced it with an explicit scope limitation. No country-level frequency or distribution claim is certified. |

### Files changed in this follow-up

- `src/content/es/verbs/ser-estar.mdx`: updated NGLE locator to §§ 37.7–37.9; replaced the unsupported empirical-sounding “common mistakes among Ukrainian speakers” heading with “contrastive examples for Ukrainian-speaking readers”.
- `src/content/es/verbs/ser-estar-hay.mdx`: added direct RAE/Fundéu sources; bounded the regional note; renamed “typical mistakes” to “contrastive examples”.
- `src/content/es/sentence-structure/hay-vs-estar.mdx`: added direct RAE/Fundéu sources and replaced the categorical proper-name “mistake” example with a qualified contrast.
- `src/content/es/verbs/ser-estar-location.mdx`: repaired malformed emphasis, added NGLE locator leads, and downgraded `verified` to `draft`.
- `src/content/es/verbs/ser-estar-with-adjectives.mdx`: added NGLE locator leads and downgraded `verified` to `draft` pending individual lexical checks.
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

### Editorial follow-up: contextual examples in adjective pairs

The seven rows in `ser-estar-with-adjectives.mdx` now include full Spanish examples and Ukrainian glosses for both `ser` and `estar` readings (`Es muy listo` / `¿Estás listo?`, `La película es aburrida` / `Estoy aburrido`, etc.). This replaces isolated one-word translations with contexts that make the contrast inspectable. It is an editorial clarity improvement, not proof that every reading is universal or regionally neutral; the page remains `draft`.

### Follow-up dictionary spot-check: adjective contrasts

The official DLE entries for all seven adjectives listed on `ser-estar-with-adjectives.mdx` were opened and checked as lexical evidence leads:

- `listo`: the entry distinguishes a prepared/disposed sense from a sagacious/astute sense, supporting the broad contrast *estar listo* vs *ser listo* without making the construction the dictionary's only organizing principle. https://dle.rae.es/listo
- `aburrido`: the entry gives “que causa aburrimiento”; it does not by itself establish every predicate/state contrast for *ser/estar*. https://dle.rae.es/aburrido
- `verde`: the entry includes the colour sense, fruit not yet ripe, and figurative inexperience/unpreparedness. https://dle.rae.es/verde
- `rico`: the entry distinguishes wealth from taste/pleasantness. https://dle.rae.es/rico
- `seguro`: the entry distinguishes safe/reliable from a person who feels no doubt (example: *Está segura de ello*). https://dle.rae.es/seguro
- `abierto` and `cerrado`: the entries include contrasting personality/attitude senses (frank/receptive vs strict/rigid or reserved), alongside other senses. https://dle.rae.es/abierto and https://dle.rae.es/cerrado

This is a lexical spot-check, not full verification of each *ser/estar* pairing. DLE entries establish possible senses; the NGLE sections on the copular contrast still need full-text claim checks to support construction choice and the Ukrainian translation in context. The page remains `draft`.

### Evidence boundaries / remaining work

- The direct online NGLE texts for §§ 37.7 and 37.8 were read through the relevant subsections; the relevant portions of § 37.9 were also inspected. This is not an exhaustive audit of every example or every subsection in the full chapters.
- The RAE conjugation page, FundéuRAE, DPD § 4 and NGLE §§ 15.6/41.6 support the impersonal-singular baseline and the definiteness effect; they do not exhaustively verify every example's register, frequency, regional distribution, or discourse context.
- The seven adjective entries have now been spot-checked in the DLE, but this does not exhaustively verify each construction-to-sense pairing or all Ukrainian translations in context.
- No corpus query, country-by-country frequency audit, browser test, accessibility/SEO smoke test, or release-readiness assessment was performed.
- Do not raise any affected page to `verified` on the basis of this pass alone.

