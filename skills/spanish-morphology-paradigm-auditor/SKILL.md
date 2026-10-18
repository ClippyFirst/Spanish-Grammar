---
name: spanish-morphology-paradigm-auditor
description: Audits Spanish inflectional paradigms, irregular forms, stem changes, clitics and agreement across grammar tables, explanations and exercises.
---

# Spanish Morphology & Paradigm Auditor

## Scope

Use for conjugation tables, nominal/adjectival agreement, pronoun and clitic paradigms, imperatives, subjunctive forms, participles, gerunds, and morphophonological alternations.

## Workflow

1. Inventory each paradigm and the grammatical features it claims to encode (person, number, tense, mood, aspect, polarity, treatment form, gender or case-like clitic distinctions).
2. Verify every displayed form, including orthographic accents, spelling changes, irregular stems, enclitic accentuation and regionally variable forms.
3. Compare tables with the accompanying prose and examples. Check that labels and paradigm boundaries agree.
4. Check interactions, not just isolated cells: affirmative/negative imperative, clitic placement and order, voseo/tuteo/ustedeo, compound tenses, agreement and common exceptions.
5. Distinguish a genuinely absent form from a form not used in the stated meaning or variety.
6. Compare duplicate paradigms across pages and shared data sources. Identify whether discrepancies are editorial errors or intentional differences in scope.
7. For machine-checkable forms, propose a small fixture-based regression test with source, expected form, feature bundle and accepted regional alternatives.
8. Report unresolved cases for expert review rather than silently selecting one paradigm.

## Output

Table/page reference; feature inventory; verified and suspect cells; source and access date; variety/register notes; confidence; proposed correction; regression fixtures.

## Guardrails

- Do not flatten voseo, tuteo and ustedeo into a single universal paradigm.
- Do not confuse orthographic spelling rules with phonological alternations.
- RAE/ASALE normative descriptions are primary for normative claims; corpus evidence helps assess usage but does not by itself establish a normative rule.
- Never generate whole paradigms from memory when a source can be checked.
- Keep exceptions and disputed analyses explicit.
