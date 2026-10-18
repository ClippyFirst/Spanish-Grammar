# Agent skills for Gramaticarrona

This directory contains **project-specific, original skill specifications** for reviewing the Spanish grammar reference for Ukrainian-speaking readers. They are not verbatim copies of third-party skills. Upstream projects and official linguistic resources are linked as inspiration or evidence sources; verify current availability, scope and licence before adopting third-party code.

## How to use

Choose a skill for a bounded task, provide relevant MDX files and repository rules, and require evidence in the output. Do not run every skill on every change: use the routing matrix below and run the repository's existing `npm run qa` after edits.

| Skill | Primary use | Suggested stage |
|---|---|---|
| [citation-integrity-auditor](./citation-integrity-auditor/SKILL.md) | Does each source support its exact claim? | Content review |
| [academic-proofreading](./academic-proofreading/SKILL.md) | Structured editorial review | Content review |
| [ukrainian-spanish-proofread](./ukrainian-spanish-proofread/SKILL.md) | Natural Ukrainian explanations and Spanish examples | Content review |
| [learning-design](./learning-design/SKILL.md) | Explanation clarity, prerequisites and optional topic pathways | Reference design |
| [education-content](./education-content/SKILL.md) | Clarity and usefulness of explanations, examples and reference tables | Editorial review |
| [grammar-exercise-validator](./grammar-exercise-validator/SKILL.md) | Answer keys and ambiguity only when exercises are in scope | Conditional |
| [seo-audit](./seo-audit/SKILL.md) | Search/indexation review without duplicating QA | Release review |
| [playwright-audit](./playwright-audit/SKILL.md) | Browser-level user journeys | Release review |
| [astro-post-audit](./astro-post-audit/SKILL.md) | Built HTML inspection | Release review |
| [grammar-site-accessibility-auditor](./grammar-site-accessibility-auditor/SKILL.md) | Accessible tables, linguistic notation, navigation and interactions | Release review |
| [seo-content-audit](./seo-content-audit/SKILL.md) | Content usefulness and search intent | Editorial review |
| [spanish-grammar-fact-checker](./spanish-grammar-fact-checker/SKILL.md) | Spanish grammar claims against authoritative sources | Rule changes |
| [spanish-ukrainian-contrastive](./spanish-ukrainian-contrastive/SKILL.md) | Function-based comparison of Spanish and Ukrainian | Comparative articles |
| [spanish-variation-auditor](./spanish-variation-auditor/SKILL.md) | Geography, register and variation | Usage claims |
| [grammar-coverage-auditor](./grammar-coverage-auditor/SKILL.md) | Coverage, contradictions, duplication and topic graph | Periodic corpus audit |
| [grammar-knowledge-graph-auditor](./grammar-knowledge-graph-auditor/SKILL.md) | Prerequisites, semantic links and navigation dependencies | Site architecture |
| [pcic-curriculum-mapper](./pcic-curriculum-mapper/SKILL.md) | Grammar coverage against consulted PCIC sections; optional topic paths | Coverage review |
| [spanish-orthography-auditor](./spanish-orthography-auditor/SKILL.md) | Spelling, accents, punctuation and capitalization | Examples and prose |
| [spanish-forms-auditor](./spanish-forms-auditor/SKILL.md) | Conjugations, agreement, clitics and morphology | Tables and examples |
| [spanish-morphology-paradigm-auditor](./spanish-morphology-paradigm-auditor/SKILL.md) | Cross-page paradigm correctness and regression fixtures | Tables and rule changes |
| [spanish-example-corpus-auditor](./spanish-example-corpus-auditor/SKILL.md) | Example quality, minimal contrasts and provenance | Every article |
| [spanish-example-naturalness-auditor](./spanish-example-naturalness-auditor/SKILL.md) | Contextual naturalness, idiomaticity and pedagogical fit | Example review |
| [learner-error-auditor](./learner-error-auditor/SKILL.md) | Evidence-based claims about reader difficulties | Conditional research |
| [spanish-ukrainian-error-taxonomy](./spanish-ukrainian-error-taxonomy/SKILL.md) | Evidence-graded taxonomy of Ukrainian-speaking learners' error hypotheses | Conditional research |
| [spanish-corpus-evidence-auditor](./spanish-corpus-evidence-auditor/SKILL.md) | Reproducible corpus queries and usage claims | Frequency/usage claims |
| [spanish-pragmatics-register-auditor](./spanish-pragmatics-register-auditor/SKILL.md) | Context, politeness and register | Usage explanations |
| [spanish-cefr-scope-auditor](./spanish-cefr-scope-auditor/SKILL.md) | Evidence for optional level and prerequisite labels | Conditional |
| [spanish-terminology-auditor](./spanish-terminology-auditor/SKILL.md) | Spanish–Ukrainian linguistic metalanguage | Editorial consistency |\n| [grammar-visualization-auditor](./grammar-visualization-auditor/SKILL.md) | Decides whether a diagram adds value and specifies an accessible, accurate form | Conditional visual review |

## Routing rules

1. For a disputed Spanish rule: fact-checker → variation auditor if relevant → citation auditor.
2. For a Spanish/Ukrainian comparison: contrastive skill → fact-checker → terminology audit → proofreading.
3. For examples or paradigms: morphology-paradigm auditor + example-corpus auditor; use naturalness and orthography audits where relevant.
4. For frequency or distribution claims: corpus-evidence auditor + variation auditor. Inspect the actual corpus interface/data and preserve query metadata.
5. For grammar coverage: PCIC mapper → CEFR scope audit only where level labels are in scope → grammar coverage and knowledge-graph audits. Treat PCIC alignment as an evidenced mapping, not a certification.
6. For existing or explicitly requested exercises only: exercise validator → fact-checker for disputed rules → accessibility audit for interactive behavior. Exercises are not a required product feature.
7. For Ukrainian-speaker difficulties: error taxonomy + learner-error auditor; keep observed evidence separate from contrastive hypotheses.
8. For explanation design and optional topic paths: learning-design + education-content. Do not add mandatory course sequencing, progress tracking, spaced review or exercises. Use CEFR audit only where levels are claimed.\n9. For proposed graphics: visualization auditor → grammar fact-checker/variation audit as relevant → accessibility/browser review. No-visual is a valid result.\n10. For site changes: existing `npm run qa` remains authoritative for repository gates; browser, accessibility and SEO audits are complementary, not replacements.


## Evidence sources

- [Instituto Cervantes — Plan curricular del Instituto Cervantes (PCIC)](https://cvc.cervantes.es/ensenanza/biblioteca_ele/plan_curricular/indice.htm): curriculum reference. Cite the exact section consulted; do not infer mappings from a title or search snippet.
- [RAE — Nueva gramática de la lengua española](https://www.rae.es/gram%C3%A1tica/): grammatical description and normative analysis.
- [RAE — Diccionario panhispánico de dudas](https://www.rae.es/dpd/): targeted usage and doubt resolution.
- [ASALE — Corpus ASALE](https://www.asale.org/corpus-asale/): evaluate for corpus evidence when the relevant data, methodology and access are available.
- [RAE — CORPES XXI](https://www.rae.es/banco-de-datos/corpes-xxi): pan-Hispanic corpus resource.
- [RAE — CREA](https://www.rae.es/banco-de-datos/crea): reference corpus for contemporary Spanish, subject to its documented scope.
- [GarethManning/education-agent-skills](https://github.com/GarethManning/education-agent-skills): possible pedagogical workflow inspiration; inspect individual skill quality and licence.
- [SkillMedev/skills — language-learning](https://github.com/SkillMedev/skills/tree/main/skills/language-learning): possible language-learning workflow inspiration; adapt selectively.

## Upstream leads

- [JakobThumm/proofreading](https://github.com/JakobThumm/proofreading)
- [zmoog/skills — proofread](https://github.com/zmoog/skills/tree/main/proofread)
- [lowwwbank/anything-to-course](https://github.com/lowwwbank/anything-to-course)
- [seo-skills/seo-audit-skill](https://github.com/seo-skills/seo-audit-skill)
- [mauricio2093/playwright-audit-skill](https://github.com/mauricio2093/playwright-audit-skill)
- [casoon/astro-post-audit](https://github.com/casoon/astro-post-audit)
- [UCL-ERL/skills — citation-integrity-auditor](https://github.com/UCL-ERL/skills/tree/main/skills/writing/citation-integrity-auditor)
- [scayver/marketing-skills — education-content](https://github.com/scayver/marketing-skills/tree/main/skills/education-content)
- [seranking/seo-skills — seo-content-audit](https://github.com/seranking/seo-skills/tree/main/skills/seo-content-audit)
- [GarethManning/education-agent-skills](https://github.com/GarethManning/education-agent-skills)
- [SkillMedev/skills — language-learning](https://github.com/SkillMedev/skills/tree/main/skills/language-learning)

For the complete per-skill decision, overlap notes, pilot cases and current evidence limits, see [the skill suite matrix](../docs/audits/current/SKILL-SUITE-MATRIX-2026-10-18.md).\n\n## Safety and quality contract

- These skills propose findings; they do not make unreviewed bulk edits.
- Never fabricate citations, corpus attestations, regional labels, learner errors, CEFR mappings or exercise results.
- Mark uncertainty and distinguish established rule, common tendency, pedagogical simplification and open question.
- Prefer primary academic sources and official documentation; record access date for volatile web resources.
- Preserve current architecture and content model. Read `ARCHITECTURE.md` and `DEVELOPMENT_RULES.md` before repository-wide changes.
- Every finding should include file/heading, evidence, severity, recommended change and a regression test where appropriate.
- External references are not endorsements. Verify availability, licence, maintenance, tool compatibility and dependency requirements before installing anything.

## Evaluation

Test at least one positive, one negative and one ambiguous case for each skill used. Record false positives, false negatives and unresolved questions. A skill is not validated merely because it produces a long report. Run the repository's `npm run qa` for code/content changes; this skill directory has not been runtime-tested merely by being committed.
