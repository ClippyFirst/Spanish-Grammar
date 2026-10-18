# Agent skills for Gramaticarrona

This directory contains **project-specific, original skill specifications** for reviewing the Spanish grammar reference for Ukrainian speakers. They are not verbatim copies of third-party skills. Upstream projects are linked as inspiration or optional tools; check their current licences and dependencies before adopting their code.

## How to use

Choose a skill for a bounded task, provide the relevant MDX files and repository rules, and require evidence in the output. Do not run every skill on every change: use the routing matrix below and run the repository's existing `npm run qa` after edits.

| Skill | Primary use | Suggested stage |
|---|---|---|
| [citation-integrity-auditor](./citation-integrity-auditor/SKILL.md) | Does each source support its exact claim? | Content review |
| [academic-proofreading](./academic-proofreading/SKILL.md) | Structured editorial review | Content review |
| [ukrainian-spanish-proofread](./ukrainian-spanish-proofread/SKILL.md) | Natural Ukrainian explanations and Spanish examples | Content review |
| [learning-design](./learning-design/SKILL.md) | Learning goals, retrieval practice, scaffolding | Article design |
| [education-content](./education-content/SKILL.md) | Lesson and exercise quality | Article design |
| [seo-audit](./seo-audit/SKILL.md) | Search/indexation review without duplicating QA | Release review |
| [playwright-audit](./playwright-audit/SKILL.md) | Browser-level user journeys | Release review |
| [astro-post-audit](./astro-post-audit/SKILL.md) | Built HTML inspection | Release review |
| [seo-content-audit](./seo-content-audit/SKILL.md) | Content usefulness and search intent | Editorial review |
| [spanish-grammar-fact-checker](./spanish-grammar-fact-checker/SKILL.md) | Spanish grammar claims against authoritative sources | Mandatory for rule changes |
| [spanish-ukrainian-contrastive](./spanish-ukrainian-contrastive/SKILL.md) | Function-based comparison of Spanish and Ukrainian | Comparative articles |
| [spanish-variation-auditor](./spanish-variation-auditor/SKILL.md) | Geography, register and variation | Usage claims |
| [grammar-coverage-auditor](./grammar-coverage-auditor/SKILL.md) | Corpus coverage, contradictions and topic graph | Periodic corpus audit |
| [spanish-orthography-auditor](./spanish-orthography-auditor/SKILL.md) | Spelling, accents, punctuation and capitalization | Examples and prose |
| [spanish-forms-auditor](./spanish-forms-auditor/SKILL.md) | Conjugations, agreement, clitics and morphology | Tables and examples |
| [spanish-example-corpus-auditor](./spanish-example-corpus-auditor/SKILL.md) | Example quality, minimal contrasts and provenance | Every article |
| [learner-error-auditor](./learner-error-auditor/SKILL.md) | Evidence-based Ukrainian-speaker difficulty analysis | Exercises and explanations |

## Routing rules

1. For a disputed Spanish rule: fact-checker → variation auditor if relevant → citation auditor.
2. For a Spanish/Ukrainian comparison: contrastive skill → fact-checker → proofreading.
3. For examples or paradigms: forms auditor + example-corpus auditor; orthography auditor where needed.
4. For pedagogy: learning-design + education-content. Do not invent learner errors or claim measured learning gains without evidence.
5. For site changes: existing `npm run qa` remains authoritative for repository gates; browser and SEO audits are complementary, not replacements.

## Safety and quality contract

- These skills propose findings; they do not make unreviewed bulk edits.
- Never fabricate citations, corpus attestations, regional labels, learner errors, CEFR mappings or exercise results.
- Mark uncertainty and distinguish established rule, common tendency, pedagogical simplification and open question.
- Prefer primary academic sources and official documentation; record access date for volatile web resources.
- Preserve current architecture and content model. Read `ARCHITECTURE.md` and `DEVELOPMENT_RULES.md` before repository-wide changes.
- Every finding should include file/heading, evidence, severity, recommended change and a regression test where appropriate.
- External references are not endorsements. Verify availability, licence, maintenance, tool compatibility and dependency requirements before installing anything.

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

## Evaluation

Use the checklists inside each skill and test at least one positive, one negative and one ambiguous case. Record false positives and unresolved questions. A skill is not validated merely because it produces a long report.
