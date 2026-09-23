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
