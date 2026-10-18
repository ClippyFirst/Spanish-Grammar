# Пілотний аудит skill suite на реальних статтях

**Дата:** 2026-10-18  
**Гілка статей:** `docs/grammar-reference-architecture-2026-10-18`  
**Гілка навичок:** `feat/grammar-research-skills-2026-10-18`  
**Метод:** source-level review of MDX, frontmatter, examples, relationships and visible claims. No local build, `npm run qa`, browser session, external corpus query or complete claim-level source verification was executed. Findings below are not a full-corpus audit.

## 1. Executive summary

The pilot confirms that the skill suite has useful specialization, but also needs tighter routing and an explicit distinction between:
- editorial/source-level findings and verified grammatical claims;
- article-level example review and corpus-level example coverage;
- formal link validation and semantic navigation review;
- reference explanation design and course/exercise design.

Three article types were sampled: the `ser/estar` canonical article + comparison, the `pretérito indefinido/imperfecto` contrast, and object-clitic placement.

## 2. Findings

### P1 — Relative canonical link in comparison may resolve to the wrong route

**File:** `src/content/comparisons/ser-estar.mdx`  
**Evidence:** the comparison route is `/comparisons/ser-estar/`; grammar article routes are `/es/<category>/<slug>/`. The link `../es/verbs/ser-estar/` is relative to the comparison URL and can resolve beneath `/comparisons/`, not to the canonical grammar route. The existing link script only checks absolute Markdown links beginning with `/es/`, so this relative link can evade that check.

**Action on audit branch:** changed it to `/es/verbs/ser-estar/` in commit `e4a35a53636cf9409da09b023e6b74c81686795e`.

**Verification status:** source-level path reasoning; local `npm run links` not run.

### P1 — Malformed Markdown emphasis in the past-tense contrast

**File:** `src/content/es/tenses/preterito-vs-imperfecto.mdx`  
**Evidence:** the introduction and multiple later paragraphs used malformed triple-asterisk sequences such as `***indefinido**`, `***перспектива**`, `***llegué**` and `***pretérito perfecto compuesto**`. This can render emphasis incorrectly and is inconsistent with the intended distinction between bold labels and italic examples.

**Action on audit branch:** repaired the malformed emphasis and a Latin `a` in Ukrainian `часовa` → `часова` in commit `44b4837acc8ef5bd7fef39f26d30592f9129d472`.

**Verification status:** text-level correction; MDX preflight/build not run.

### P2 — Awkward and potentially misleading Ukrainian analogy in clitic placement

**File:** `src/content/es/pronouns/object-pronoun-placement.mdx`  
**Evidence:** the opening sentence contained an ungrammatical phrase (“ніж здається носієві української мови учневі”). The later explanation compressed Ukrainian word-order flexibility into a simplistic “free position of the object” analogy.

**Action on audit branch:** rewrote the introduction using “українськомовному читачеві” and clarified that the position of a full Ukrainian pronoun may vary with syntax/information structure, but this does not permit arbitrary placement of a Spanish clitic. Commit `6b5d7851084328ed263e01b70071d0a74a9eb378`.

**Verification status:** editorial/contrastive clarity improvement; a specialist linguistic source review is still pending.

### P1 — Sources are not visible at the claim level in the sampled articles

**Files:** `src/content/es/verbs/ser-estar.mdx`, `src/content/comparisons/ser-estar.mdx`, `src/content/es/tenses/preterito-vs-imperfecto.mdx`, `src/content/es/pronouns/object-pronoun-placement.mdx`.

**Evidence:** the inspected frontmatter does not expose a `sources` list for these articles. The content schema defaults `sources` to an empty array, so the field's existence in the schema does not establish evidence for a claim.

**Action:** treat grammar claims, regional distribution and claims about Ukrainian-speaking readers as **unverified until source evidence is recorded**. The next audit should associate important claims with exact sources/sections and distinguish normative, descriptive, corpus and pedagogical claims.

**Verification status:** frontmatter/source-level only; not a claim that every statement is false or unsupported elsewhere.

### P2 — A past-tense timeline is a candidate, not an automatic requirement

**File:** `src/content/es/tenses/preterito-vs-imperfecto.mdx`.

**Evidence:** the page already uses a contrast table and examples for event/background, habitual patterns and state. A small timeline could help visualize the relation between an ongoing background interval and a bounded event, but a timeline could also falsely suggest that tense choice is reducible to elapsed time.

**Recommendation:** keep the existing text/table as the baseline. Prototype an inline SVG only if it can show viewpoint/aspect (background interval vs event) without implying a universal algorithm. Caption it as schematic, preserve the full textual explanation, and fact-check all labels/examples before publication.

**Visualization verdict:** optional candidate; not yet approved or implemented.

### P2 — The clitic article may benefit more from a compact position table than a diagram

**File:** `src/content/es/pronouns/object-pronoun-placement.mdx`.

**Evidence:** the article already contrasts a finite verb, infinitive, gerund, affirmative imperative and negative imperative. This is a discrete set of syntactic environments.

**Recommendation:** first ensure all contexts and accepted alternatives are precisely scoped. A compact table with environment → position → example is likely simpler than a flowchart. Do not add a visual until a specific remaining comprehension problem is identified.

**Visualization verdict:** table/prose first; no diagram recommended from this source-level pass.

### P2 — The `ser/estar` pair is more consistent after the comparison rewrite, but still not fully source-verified

**Files:** `src/content/es/verbs/ser-estar.mdx`, `src/content/comparisons/ser-estar.mdx`.

**Evidence:** both reject the universal equation “ser = permanent / estar = temporary”, distinguish location of an entity from location of an event, and use the same core minimal pairs (*es listo/está listo*, *es aburrido/está aburrido*, *es malo/está malo*).

**Recommendation:** preserve one canonical long explanation and a shorter comparison entry; check all shared claims/examples against suitable grammar sources and keep the regional note proportional to evidence. Do not infer that the pair is verified just because the pages agree.

**Verification status:** cross-page consistency source review passed provisionally; claim-level fact-check remains pending.

## 3. Skill routing observations

| Skill group | Pilot result | Routing adjustment |
|---|---|---|
| Fact-check + citation integrity | Needed for all three topics; not replaced by source-free editorial review | Require claim-level evidence before marking “verified” |
| Ukrainian–Spanish contrastive + proofreading | Caught an awkward phrase and an overcompressed word-order analogy | Run when an article makes claims about Ukrainian structure or likely transfer |
| Variation + pragmatics | Important for any broad region/register claim, but not every page needs a long regional section | Trigger by scope-sensitive claims; state which varieties were actually checked |
| Example corpus + naturalness | Useful but overlapping | Corpus auditor owns set-level coverage/provenance; naturalness auditor owns individual contextual examples |
| Forms + morphology paradigm | Both relevant to morphology-heavy pages, redundant for many prose-only pages | Use forms auditor locally; paradigm auditor for cross-page tables/regressions |
| Learning design + education content | Their old descriptions were course/exercise-oriented | Refocus on explanations and optional paths; keep exercises conditional |
| Visualization auditor | Added as a recommendation gate | “No visual” and “table is better” must be accepted outcomes |
| Link script + knowledge graph auditor | Script detects structural link errors, not whether a path is conceptually useful | Keep automated and semantic audits separate |

## 4. Pilot scorecard

| Dimension | Status | Meaning |
|---|---|---|
| Source/markup review | Findings found and two clear source issues corrected | Does not imply full MDX/build success |
| Cross-page consistency | Provisional pass for the core `ser/estar` contrast | Still needs source verification |
| Ukrainian editorial quality | One obvious sentence/analogy corrected | Not a full Ukrainian proofread |
| Claim-level source integrity | Open | Requires actual source-by-source review |
| Regional coverage | Open | No exhaustive country-by-country audit performed |
| Visualization suitability | Recommendations recorded | No SVG created or published |
| Local QA/build/browser | Not run | Must not be described as passed |

## 5. Next actions

1. Run local `npm run qa` on the branch and record the actual result.
2. Review claim-level sources for the three pilot topics.
3. Continue the full inventory and coverage matrix from the grammar roadmap; do not mark an article “verified” based on a sample or on file presence.
4. Expand regional checks from pan-Hispanic labels to the specific countries/regions relevant to each claim, including Spain and Latin American varieties; explicitly record where evidence is missing.
5. Keep the two PRs unmerged until their documents, routing and QA claims are reconciled.


### P1 — QA final-content audit не розрізняв помилкову й нормативну українську форму

Під час CI для commit `d1ecf1a8` фінальна перевірка помилково позначила «українськомовному» як заборонене слово та виявила хибний Markdown-artifact на коректному `**imperfecto**` поруч із курсивом. Це дефект самого QA-скрипту, а не доказ того, що ці форми неправильні.

**Виправлення:** `scripts/audit-final-content.mjs` у commit `817dedf01ef97d931ec33b1b17fb2530ad388e45` тепер забороняє лише «україномов…» і шукає непарні потрійні зірочки. Повторний повний QA для цього commit ще не підтверджено.


### P1 — Додаткові порівняльні сторінки містили пошкоджене Markdown-виділення

**Файли:** `src/content/comparisons/articles.mdx`, `src/content/comparisons/indicative-subjunctive.mdx`, `src/content/comparisons/por-para.mdx`.

**Доказ:** у вступних формулюваннях і прикладах змішувалися одиночні, подвійні та потрійні зірочки, наприклад `**означений***`, `* **Sé que está*** en casa.*` та `**para — ціль і призначення***`. Це могло зламати очікуване виділення термінів та іспанських прикладів.

**Дія:** переписано відповідні речення й приклади, щоб використовувати просте вкладення жирного та курсиву без неоднозначної послідовності зірочок. Зміни внесено в commits `a37dc06abc68054e2870fb77c8942082b90bebdd`, `adc7afb4ff66adfbe865698bf02813b5bcae3b32` і `a42cda44525df4966c3691c88b8f0dc74a456c0a`.

**Статус:** source-level виправлення; production build і браузерна перевірка ще очікують фінального QA.
