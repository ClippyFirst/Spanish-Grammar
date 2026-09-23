# Content methodology and rewrite audit — 2026-09-23

## Scope

This branch upgrades the Spanish grammar reference for Ukrainian-speaking learners. The goal is not to turn the site into an academic textbook. The target is a rigorous, deep, readable reference: accurate enough to consult, explanatory enough to understand, and structured enough to find a solution quickly.

The first rewrite pass focuses on the highest-risk/highest-value grammar domains: ser / estar; por / para; direct and indirect object pronouns; se; pretérito indefinido vs imperfecto; presente de subjuntivo; definite/indefinite articles; noun gender; relative pronouns; negation; gustar; personal a.

## Methodological principles

### 1. Concept before rule

Start with the grammatical problem a Ukrainian speaker actually has. Then give the core model, then exceptions and edge cases.

Avoid rules such as: ser = permanent; estar = temporary; subjuntivo = unreal; por = cause and para = purpose; a = before every person. These are useful mnemonic fragments only when explicitly marked as incomplete.

### 2. Contrastive Ukrainian-first explanation

For each major topic ask: What does Ukrainian allow the learner to assume incorrectly?

Examples: Ukrainian has one basic copular verb, so ser/estar must be distinguished. Ukrainian lacks articles, so article choice must be explained as reference/discourse, not translation. Ukrainian uses case, so personal a and object-clitic functions need syntactic explanation. Ukrainian past morphology does not map directly to the Spanish tense/aspect system. Ukrainian has a subjunctive/conditional form, but it is not equivalent to Spanish subjuntivo.

### 3. Construction-based learning

Do not teach isolated words when the grammar is constructional. Examples: me gusta + noun/infinitive; se + lo/la; a + animate specific direct object; para que + subjuntivo; estar + gerundio; se vende / se venden; cuyo + noun. The unit of learning is often a construction, not a single grammatical label.

### 4. Minimal pairs

When two forms compete, show the smallest change that changes interpretation: Es listo / Está listo; Lo veo / Le escribo; Lo hago para ti / Lo hago por ti; Viví en Madrid / Vivía en Madrid; Creo que es / No creo que sea; Hay un libro / El libro está...

### 5. Progressive disclosure

Every major page should answer questions in this order: what is the problem; what is the quick rule/model; how is it formed; when is it used; when is it not used; what contrasts with it; exceptions; Ukrainian-specific difficulty; regional variation; related topics.

Advanced detail should not block the basic answer.

### 6. Examples as evidence

Examples should demonstrate the rule rather than decorate the page. Prefer contemporary natural Spanish, varied persons and contexts, affirmative and negative examples, questions where relevant, minimal pairs for contrasts, and Ukrainian translations for important examples. Avoid invented textbook Spanish that exists only to illustrate a form.

### 7. Valency and syntax

Where a mistake depends on what a verb selects, explain the construction rather than blaming the learner. Examples: ayudar a alguien still has a direct object; gustar has a different argument structure from English like; escribir a alguien selects an indirect object; prepositional complements must be learned with the governing verb where appropriate.

### 8. Error analysis

Typical Ukrainian mistake must mean a plausible, linguistically motivated transfer error. Do not manufacture mistakes merely to fill a section. Priorities are Ukrainian structural interference, direct translation, confusion between two Spanish constructions, and English interference only where genuinely common.

### 9. Regional/pluricentric Spanish

The reference treats Spanish as a pluricentric language. Regional information is included when it changes what a learner will encounter, especially tú / vos / usted; vosotros / ustedes; voseo; leísmo and related pronominal systems; tense choice; imperative forms; common regional constructions. A regional variant is not presented as wrong merely because it differs from another variety.

### 10. Corpus-minded factual discipline

Before a grammatical statement is promoted to a rule, distinguish productive grammatical rule, strong tendency, lexical restriction, register preference, regional variation, and pedagogical simplification. The reference should never turn a convenient mnemonic into a false universal.

## External methodological grounding

The rewrite is informed by current RAE/ASALE grammatical organization and terminology, and by Instituto Cervantes ELE methodology.

Useful reference frameworks include RAE/ASALE, Nueva gramática de la lengua española; RAE/ASALE, Nueva gramática básica; and Instituto Cervantes ELE materials on learner difficulties, grammar in use, contrast, error analysis, ser/estar, pronouns, past tenses, subjunctive and regional variation.

## Academic Writing Toolkit audit

The Academic Writing Toolkit paragraph review was applied to rewritten MDX pages. It reports many short-paragraph findings. These are largely caused by the project's intentional component-based format: MinPair, Mistake, Note, Formula, tables and short example blocks. Therefore the raw paragraph count should not be interpreted as a prose-quality score for MDX. The tool is useful here as a deterministic structural signal, but its findings must be interpreted in the context of the document format.

This is why the project should use layered QA rather than one generic academic-prose score.

## Definition of done for future rewrites

A major grammar page is ready only when the central distinction is explained without a false universal; formation is correct; important non-uses are covered; at least one contrast/minimal pair exists where relevant; examples are natural and translated; Ukrainian interference is addressed where justified; regional variation is distinguished from the general rule; terminology is consistent; related links are real; no duplicate article silently contradicts the canonical explanation; MDX/frontmatter validates; content graph validates; and the production build succeeds.

## Remaining rewrite roadmap

1. all pronoun pages, especially clitic placement, double objects, reflexives, demonstratives, possessives and interrogatives;
2. the full tense system, including perfecto, pluscuamperfecto, futuro and condicional;
3. all subjunctive tenses and trigger/anti-trigger pages;
4. imperative and pronoun placement;
5. conjunctions and subordinate-clause selection;
6. preposition governance and high-frequency verb-preposition constructions;
7. adjective position and meaning changes;
8. adverbs and information structure;
9. sentence structure, reported speech, passive and conditional clauses;
10. spelling, accentuation and pronunciation;
11. regional Spanish pages;
12. reference tables and cross-page consistency.

The objective is coverage plus depth, not simply making every page longer.

## Important quality principle

A 10,000-word article is not automatically better than a 3,000-word article. The target is maximum useful explanatory density with minimum unnecessary cognitive load.

A reference page should let a learner both solve the immediate problem and understand why the answer is what it is.

## Sources

- Real Academia Española / ASALE — Nueva gramática: https://www.rae.es/gramática
- Real Academia Española / ASALE — Nueva gramática básica: https://www.rae.es/gramática-básica
- Instituto Cervantes — Centro Virtual Cervantes: https://cvc.cervantes.es/
- Instituto Cervantes — current ELE grammar training materials: https://gestionportales.cervantes.es/


## Second deep rewrite pass — 2026-09-23

The second pass extended the same methodology into articles covering articles, demonstratives, subject-pronoun omission, double object pronouns, possessives, indefinites, interrogatives, word order, questions, hay/estar, pluscuamperfecto, condicional, imperative, spatial prepositions, temporal prepositions, and verb-preposition government. Existing pages were rewritten rather than merely lengthened: simplified universal rules were replaced with construction-based explanations, minimal contrasts, syntactic function, discourse/reference distinctions, and Ukrainian-specific transfer notes.

### Academic Writing Toolkit follow-up

The paragraph-logic review was run on the rewritten article set. It reported many short-paragraph findings. This is expected for this project because examples, tables, formulas, MinPair/Mistake/Note components, and one-idea reference blocks are deliberately short. The findings should therefore trigger a manual structural review rather than automatic prose merging. In a grammar reference, merging all short blocks into long academic paragraphs would reduce retrieval speed and obscure examples.

The useful quality signal from the review is therefore: each prose paragraph should have one clear claim and a clear relation to the surrounding section; example blocks should remain separate when they function as evidence; tables/components should not be merged merely to satisfy a paragraph-length heuristic.

## Current completion criterion

The branch is still intentionally **not merged into main**. Content work continues until the full coverage map is addressed and the remaining pages pass cross-page consistency, MDX/frontmatter, link, graph, and production QA. A page being rewritten does not by itself mean the whole grammar reference is complete.


## Third deep rewrite pass — 2026-09-23

The third pass deepened the verbal-periphrase section rather than simply adding more examples. The overview now distinguishes genuine grammatical periphrases from ordinary combinations such as a motion verb plus a purpose infinitive, and it maps the main infinitive-, gerund- and selected participle-based constructions by function. The pages for **deber / poder / soler** and **tener que / hay que** now distinguish obligation, recommendation, general necessity, possibility, permission, skill and habituality without treating their Ukrainian translations as one-to-one equivalents. The frequent-periphrases page was expanded around **acabar de, volver a, seguir + gerundio, dejar de, ponerse a, llevar + gerundio** and **ir + gerundio**, with aspectual contrasts and Ukrainian transfer warnings.

The Academic Writing Toolkit paragraph review was re-run against representative prose from this pass. It again flagged short paragraphs, but no higher-level logical problem was identified by the tool. The short blocks are intentional reference units and should not be merged merely to satisfy a generic academic-prose heuristic.

A technical limitation remains important: the repository's GitHub Pages workflow runs `npm run qa` only on pushes to `main`; the working rewrite branch therefore does not receive that deployment workflow automatically. The branch is kept separate from `main` while content work continues.


## Cross-page consistency pass — 2026-09-23

A targeted consistency audit was applied after the periphrase rewrite. The audit did not treat individual pages as isolated essays: constructions were checked against neighboring pages for competing explanations, especially **ir a + infinitivo / futuro / presente**, **estar + gerundio / seguir + gerundio**, and **acabar de / terminar de**. Several pedagogical shortcuts were tightened because they could otherwise be read as universal rules: ir a + infinitivo is not restricted to finalized plans, futuro simple is not merely a prediction form, and estar + gerundio is not restricted to the exact moment of speaking. The regional note on estar + gerundio was also rewritten to avoid an unsupported country-wide frequency generalization.

The Academic Writing Toolkit was used again on the revised prose. Its paragraph-level review is treated as a structural signal, not as an automatic requirement to merge short reference units. The current pass therefore prioritizes semantic precision and cross-page consistency over paragraph length.

### New cross-page audit rule

When two pages teach competing constructions, the reference should not assign each construction a single fixed Ukrainian translation or a single communicative function if the actual Spanish system permits overlap. A canonical page may give the most useful default, but neighboring pages must preserve the overlap explicitly. This is especially important for tense choice, modal constructions, aspectual periphrases and future reference.


## Fourth deep rewrite pass — 2026-09-23

The fourth pass treated the tense system as an interconnected system rather than a collection of isolated pages. The overview was checked against **pretérito perfecto, indefinido / imperfecto, pluscuamperfecto, futuro, futuro perfecto, condicional simple, condicional compuesto, sequence of tenses and conditionals**. The main quality criterion was preservation of temporal perspective: a tense should not be reduced to one Ukrainian translation or one communicative label.

Particular attention was given to three recurrent risks:

- **Perfecto vs indefinido:** the distinction was kept probabilistic and variety-sensitive rather than reduced to a universal “today vs yesterday” rule. The reference explicitly warns against treating Latin American Spanish as if it simply lacked *perfecto*.
- **Futuro and futuro perfecto:** both pages retain the distinction between temporal future reference and modal inference. *Futuro* can express supposition about the present, while *futuro perfecto* can express supposition about a prior situation.
- **Condicional and reported speech:** *condicional* remains the normal resource for future relative to a past reference point, but reported speech is not treated as a mechanical backshift operation. A speaker can preserve a present-oriented perspective where context supports it. The conditional page was adjusted so that *Dijo que viene mañana* is no longer presented as an automatic error.

The **sequence-of-tenses** page was checked for the same principle: *quería que vinieras* and *esperaba que hubieras terminado* are taught through relative temporal relations, not through a simple “move everything one tense back” formula. The conditionals page similarly keeps the traditional 1–3 classification only as a learning map and explicitly includes mixed conditionals.

The Academic Writing Toolkit was run again on representative tense-system prose. It returned only short-paragraph findings, which are expected for a component-based grammar reference and were not treated as reasons to merge evidence blocks. The resulting edits therefore prioritize semantic precision, deictic perspective, regional variation and cross-page consistency.


## Fifth deep rewrite pass — 2026-09-23

The fifth pass audited the boundary between **subjuntivo, conditional clauses, sequence of tenses and reported speech**. The goal was to remove a different class of pedagogical overstatement: rules that are useful as first approximations but become false when generalized.

The conditional-sentence page was tightened so that the open-condition pattern is described as **indicativo in the *si*-clause**, while the main clause may use future, present or an imperative. The old “three types” map is retained only as a learning framework, and mixed conditionals are now explicit. The statement about *futuro/condicional* after *si* was narrowed to the ordinary standard conditional construction instead of being phrased as a universal claim about every sentence containing *si*.

The subjunctive-trigger page was also tightened. In particular, *aunque + subjuntivo* is no longer reduced to “unknown” information: the page now describes the range as hypothetical, alternative or not asserted as an established fact, while preserving the context-sensitive nature of the contrast with indicativo. Temporal clauses now also include *cuando hayas terminado*, making the relationship between **future reference and perfect subjunctive** visible rather than teaching a simple *cuando + present subjunctive* formula.

The Academic Writing Toolkit was run against representative prose from this pass. It returned **three short-paragraph findings and no higher-level logic finding**. These remain intentional reference units rather than prose defects. The fifth pass therefore confirms the project's QA principle: use paragraph-level tooling to catch unclear prose structure, but do not optimize a grammar reference for paragraph length at the expense of retrieval and contrastive examples.


## Sixth deep rewrite pass — 2026-09-23

The sixth pass audited the intersection of **imperative formation, subjuntivo, clitic placement and regional address forms**. This area was treated as one system because a learner error often crosses page boundaries: choosing the wrong imperative form can also force the wrong pronoun position, and a simplified statement about subjuntivo can contradict the imperative page.

The imperative pages were tightened in several ways:

- **Affirmative vs negative commands** are now explicitly separated. Negative commands are taught as **no + presente de subjuntivo**, rather than as an affirmative imperative with *no* added.
- The person system is made explicit: **usted, nosotros/as and ustedes** affirmative forms coincide with corresponding present-subjunctive forms; **tú** and **vosotros/as** have characteristic affirmative forms, while **tú** also has a high-frequency irregular set.
- The contrast is demonstrated with lexical pairs such as *Ven → No vengas*, *Hazlo → No lo hagas* and *Di la verdad → No digas la verdad*, preventing learners from extending the positive irregular form into the negative command.
- **Clitic placement** is stated as a constructional opposition: affirmative imperative + enclitic(s) versus negative command + proclitic(s). Double-object order remains indirect + direct, with **se** replacing **le/les** before *lo/la/los/las*.
- The accent section was corrected so that orthographic stress is treated as a consequence of Spanish spelling rules rather than as a mechanical “imperative + pronoun = add an accent” rule. The specific form **vete** was corrected from the erroneous *véte*.
- **Voseo** is presented as a regional system rather than as an error or a single universal Latin American pattern. Examples such as *hablá, comé, vení* are retained while acknowledging variation.
- The quick-reference page was synchronized with the detailed pages so that its person/form table, subjunctive relationship, clitic placement and regional wording no longer imply competing rules.

The Academic Writing Toolkit paragraph review was applied to representative prose from the sixth pass. As in earlier passes, short findings are expected where the reference intentionally uses compact rule blocks, examples, tables and components. The review should therefore be interpreted together with semantic and cross-page checks rather than as a paragraph-length target.

A further manual consistency point was established: whenever a grammar construction changes both **morphology and clitic position**, the canonical page should show the two dimensions together in at least one minimal pair. This is now implemented with pairs such as *Dímelo → No me lo digas*.


## Seventh deep rewrite pass — 2026-09-23

The seventh pass deepened the **subordinating-conjunction and prepositional-government system**. The goal was to prevent a common failure mode in grammar references: presenting *que, cuando, aunque, si* or another conjunction as if the conjunction itself mechanically selected a mood.

The subordinating-conjunction page was expanded to distinguish **semantic relation, syntactic construction, semantic status and temporal perspective**. It now covers causal, purposive, temporal, concessive, conditional and complement clauses, with additional attention to *antes de que, hasta que, después de que* and *en cuanto*. Future-oriented temporal clauses are contrasted with habitual/factual ones so that learners do not memorize “*cuando = subjuntivo*”. The page also explicitly separates conditional *si* from interrogative *si*, and connector-like consequence markers such as *así que* from subordinate conjunctions.

The pass also corrected small editorial defects in the existing page, including the malformed *A aunque* wording and the stray marker before *Creo de que viene*.

The **que / de que** page was strengthened as a constructional government reference. It now uses the contrast between *Creo que viene* and *Me alegro de que hayas venido*, extends the analysis to *depender de que*, and makes clear that the *eso/algo* substitution test is diagnostic rather than an absolute grammatical rule. The page also distinguishes the governing head (verb, adjective or noun) from the subordinate clause itself.

The Academic Writing Toolkit paragraph-logic review was run on representative prose from this pass and returned **no issues**. This is a useful confirmation that the expanded explanatory paragraphs remain structurally coherent. The project continues to treat intentional short MDX blocks as reference components rather than forcing them into academic-style paragraph lengths.

A new cross-page QA rule follows from this pass: whenever a conjunction appears on more than one canonical page, each page must preserve the same **construction + mood + temporal perspective** relationship. In particular, *cuando*, *aunque* and *si* must not receive conflicting blanket rules on the conjunction page, subjunctive pages and conditional pages.


## Eighth deep rewrite pass — 2026-09-23

The eighth pass deepened the **prepositional-government and high-frequency verb + preposition system**. The goal was to make the distinction between lexical government, free prepositional meaning, and other constructions explicit rather than presenting lists of verb/preposition pairs as a flat memorization table.

The pages for **verb-preposition pairs** and **verbs with prepositions** were rewritten around constructional units such as *depender de, pensar en, soñar con, confiar en, insistir en, tratar de, empezar a* and *interesarse por*. The revised material now distinguishes:

- the governing verb from the semantic contribution of the preposition;
- verb + preposition + noun/pronoun from verb + preposition + infinitive;
- verb + infinitive without a preposition from constructions where the preposition is obligatory;
- verbal government from **personal a** and other independent functions of *a*;
- prepositional government before *que* from the mood selected by the subordinate construction;
- a default lexical pattern from cases where a verb permits more than one construction with different meanings or contextual conditions.

The rewrite also strengthened the **pensar en / pensar de** contrast and added a constructional algorithm: identify the governing head, identify its complement pattern, check whether the model changes meaning, and only then use the Ukrainian translation as a semantic aid. This prevents the reference from teaching a false one-to-one mapping such as «український прийменник → іспанський прийменник».

The **queísmo/dequeísmo** boundary was kept connected to the prepositional-government pages: *me acuerdo de que...* is treated as the result of the governing construction *acordarse de*, while *creo que...* illustrates a verb that does not select *de*. The mood of a clause after a preposition is not presented as mechanically caused by the preposition itself.

The Academic Writing Toolkit paragraph-logic review was run on representative prose from this pass. It returned **one short-paragraph finding and no higher-level logic issue**. The finding corresponds to a deliberately compact Ukrainian-learner summary and does not justify merging the reference structure into longer academic-style paragraphs. As in earlier passes, short reference units are evaluated by function and retrieval value rather than paragraph length alone.

A new cross-page QA rule follows from this pass: whenever a verb-preposition construction appears in more than one page, the pages must agree on its **governing preposition, complement type, core meaning, and degree of lexical variation**. Special attention should be paid to *pensar en/de, preocuparse por/de, depender de, ayudar a*, and constructions that meet *queísmo/dequeísmo*, *personal a*, infinitival complements, or verbal periphrases.


## Ninth deep rewrite pass — 2026-09-23

The ninth pass performed a cross-page **preposition-system consistency audit**, following the eighth pass on verbal government. The focus was the interaction between *por/para*, common prepositional constructions, spatial/temporal prepositions, and the constructional verb-preposition pages.

The canonical *por/para* page was deepened so that the guide no longer relies on a compact «por = X / para = Y» formula. It now separates purpose, addressee, deadline, destination, cause/motive, exchange, route, duration, means/channel, and passive agent, and explicitly distinguishes semantic relations from Ukrainian translation equivalents. The page also strengthens *para + infinitive* vs *para que + finite clause* without turning the subject relation into an absolute rule.

The companion *por/para markers* page was synchronized so that its marker lists are explicitly treated as a learning map, not a universal decision algorithm. An unsupported broad regional claim was removed and replaced with a restrained statement about shared basic opposition and possible frequency/style variation.

The *common-constructions* page was aligned with the government model: lexical government (*depender de, soñar con*) is distinguished from prepositional locutions (*a pesar de, en lugar de*), and the infinitive vs *que* distinction for locutions was clarified. This prevents the overview page from silently teaching a simpler system than the canonical pages.

The cross-page audit retained the existing spatial and temporal pages as separate reference systems. Their core contrasts — *en/a/de/desde/hacia/hasta* for place and *a/en/desde/hasta/durante/por/hace* for time — remain useful, while *por/para* is now explicitly linked to them as a semantic rather than translation-based system.

Academic Writing Toolkit was run on representative prose from the canonical *por/para* rewrite. It returned **4 short-paragraph findings and no higher-level logic issue**. These findings are structural signals from intentionally compact reference prose; no artificial paragraph merging was performed merely to satisfy paragraph-length heuristics.

New cross-page QA rule: every occurrence of *por/para* must agree with the canonical semantic distinction and must not reintroduce a blanket translation rule. Examples involving *por la mañana, para mañana, por tres horas, en tres años, durante tres años,* and *desde hace tres años* should remain explicitly distinguishable as different temporal constructions. Likewise, *para Madrid* (destination), *a Madrid* (basic goal/direction), and *por Madrid* (route) must not be presented as interchangeable translations of «до/через».


## Tenth deep rewrite pass — 2026-09-23

The tenth pass extends the prepositional-government work from verbs to **adjective complements**. The canonical page `adjective-complements.mdx` was rewritten around the constructional unit **adjetivo + régimen**, with explicit separation of complement types (noun phrase, infinitive, finite `que` clause), semantic/model variation, and learner transfer from Ukrainian.

The new reference inventory covers high-frequency models including `capaz de`, `contento con/de`, `orgulloso de`, `interesado en`, `dispuesto a`, `contrario a`, `favorable a`, `responsable de`, `consciente de`, `seguro de`, `diferente de`, `parecido a`, and `lleno de`. It explicitly states that the inventory is a learning map rather than a complete government dictionary.

The page now cross-links adjective government with the previously rewritten verbal government and `queísmo/dequeísmo` pages. In particular, it distinguishes `Estoy seguro de que vendrá` from `Es posible que venga`, preventing the common false rule that `que` either always requires `de` or never does. It also documents cases where different prepositions form different constructions rather than simple interchangeable variants, e.g. `contento con el resultado` vs `contento de verte`.

Academic Writing Toolkit was applied to representative prose. It returned **3 short-paragraph findings and no higher-level logic issue**. These are treated as structural signals in a reference page, not as reasons to merge intentionally compact examples or definition blocks.

New cross-page QA rule: adjective-government examples must use the same constructional principle as verb-government pages. Every adjective + preposition example should be checked for (1) governing adjective, (2) complement type, (3) semantic model, (4) `queísmo/dequeísmo` implications where relevant, and (5) consistency with Ukrainian-first contrastive explanations. The guide should not infer Spanish prepositions from Ukrainian equivalents alone.


## Eleventh deep rewrite pass — 2026-09-23

The eleventh pass adds the missing **noun complement government** layer through `src/content/es/nouns/noun-complements.mdx`. The page treats noun + preposition as a lexical-syntactic construction rather than a translation exercise, and separates noun-phrase, infinitival, and finite `que` complements.

The reference map includes `necesidad de`, `miedo a/de`, `interés en/por`, `confianza en`, `acceso a`, `solución a`, `relación con`, `causa de`, `problema con`, and `dependencia de`. Multiple models are explicitly treated as potentially meaning- or construction-sensitive rather than automatically interchangeable.

The page connects nominal government with the already rewritten adjective and verb government systems. A specific contrast is documented for `interesarse por algo` / `estar interesado en algo` / `tener interés en/por algo`, preventing false transfer of a preposition across related lexical items.

Academic Writing Toolkit was applied to representative prose. It returned **4 short-paragraph findings and no higher-level logic issue**. As with previous reference-page audits, compact definition/example units remain intentional and should not be merged solely to satisfy paragraph-length heuristics.

Cross-page QA rule added: noun-government examples must be checked for the governing noun, semantic sense, complement type, preposition, and interaction with `queísmo/dequeísmo`; related verb/adjective forms must not be assumed to share the same preposition merely because Ukrainian translations are similar.


## Twelfth deep rewrite pass — 2026-09-23

The twelfth pass broadened the noun system from **government** to the interaction of countability, reference, possession, collective agreement, apposition and noun formation. Two existing pages were revised: `possessive-constructions.mdx` and `noun-special-cases.mdx`.

The possessive page was corrected and deepened in several ways. The earlier statement about a genitive case was narrowed to the more precise claim that Spanish lacks a **productive genitive case** comparable to Ukrainian. The page now distinguishes possession from the wider set of relations expressed by `de + noun phrase`, including material, content, origin and part/whole relations. It also corrects the treatment of `de él`: this form is grammatical and can be useful for contrast or disambiguation, so it must not be described as simply incorrect or universally rare. The previous blanket regional note on `su casa de él` was replaced with a restrained statement about double possessive marking in particular varieties and contexts.

The special-noun-cases page was revised around a constructional view of **countability and quantification**. The previous example `Quiero un agua` was identified as too categorical: `agua` commonly appears without an article when referring to the substance, but `un agua` can be grammatical when the noun is interpreted as a portion, drink or variety. The page now contrasts `Bebo agua`, `Quiero un vaso de agua` and `Quiero un agua mineral`, making the semantic shift explicit. The treatment of `gente` retains singular grammatical agreement while avoiding the broader claim that collective nouns can never show contextual variation. Compound-noun plurals, apposition and profession names were also reframed as systems with lexical or constructional variation rather than one-rule exceptions.

Academic Writing Toolkit was run on representative revised prose from the possessive page and returned **3 short-paragraph findings**; no higher-level paragraph-logic problem was identified. The findings are consistent with the project's component-based reference format and do not justify artificial paragraph merging.

### New cross-page QA rule

Noun pages should distinguish at least four separate questions: **(1) lexical government, (2) possession/other `de` relations, (3) countability and quantification, and (4) grammatical agreement**. A noun construction must not be classified solely from its Ukrainian translation or from the presence of a preposition. In particular, `de + noun` must not automatically be called possession, `un/una` must not be treated as a permanent property of a lexical item, and collective nouns such as `gente` must be checked together with their agreement pattern. Possessive pages must also remain consistent with `possessive-pronouns`, article pages and noun-complement government.


## Thirteenth deep rewrite pass — 2026-09-23

The thirteenth pass audited noun number formation against the broader noun/article system and against current normative evidence. \`numero-plural.mdx\` was substantially rewritten.

The page no longer presents plural formation as an almost exceptionless \`-s/-es\` mechanism. It now distinguishes the high-frequency patterns (vowel + \`-s\`, most consonants + \`-es\`, \`-z → -ces\`) from invariant plurals such as \`lunes\` and \`crisis\`, and from variant or lexicalized patterns in loanwords. The earlier wording that \`clubes\` was simply the normative form was corrected: \`clubs\` and \`clubes\` are both documented valid plurals, so the page now treats them as variation rather than error. This is consistent with RAE/ASALE material on current Spanish plural formation.

The treatment of accentuation was also reframed. Instead of claiming that stress simply remains in the same syllable, the page now uses \`canción → canciones\` and \`régimen → regímenes\` to show that plural formation can alter the prosodic environment and therefore the written accentuation. The page also warns against applying one universal rule to stressed \`-í/-ú\` forms.

Academic Writing Toolkit was run on representative revised prose. It returned **3 short-paragraph findings and no higher-level paragraph-logic problem**. These findings are retained as a structural warning rather than treated as a defect requiring longer prose, because the reference uses short explanatory blocks intentionally.

### New cross-page QA rule

Plural formation must remain consistent with **article/reference, adjective agreement, noun special cases and lexical government**. Invariant nouns must not be taught as if they lacked grammatical number; number may be expressed elsewhere in the noun phrase. Loanword plurals and stressed \`-í/-ú\` forms must be checked for documented variation rather than forced into the most common productive rule. Any regional statement about plural pronunciation must be separated from the written standard and supported independently.
