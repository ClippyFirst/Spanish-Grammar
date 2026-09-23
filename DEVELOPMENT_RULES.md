# Development Rules

## Mandatory workflow
1. REQUEST — state the user-visible or maintenance goal.
2. ARCHITECTURE PREFLIGHT — read ARCHITECTURE.md and relevant architecture docs.
3. EXISTING IMPLEMENTATION — locate the current route/component/content/script pattern.
4. REUSE — use the existing pattern if it already solves the problem.
5. EXTEND — extend an existing abstraction when the same responsibility recurs.
6. NEW ABSTRACTION — introduce one only when repeated evidence justifies it; document the decision.
7. IMPLEMENT — keep the change narrow and reversible.
8. QA — run npm run qa or the narrowest valid gate during iteration, then the full gate before release.
9. DOCUMENT — update architecture/docs when a stable rule or decision changes.
10. RELEASE — review diff, routes, content counts and generated artifacts.

## AI rules
Before editing, read architecture rules, inspect existing implementation, search for an equivalent, preserve URL/content semantics, and avoid inventing dependencies or frameworks.
If the requested feature conflicts with architecture, adapt the feature first. If architecture is insufficient, make the smallest justified extension and document it.

## Content rules
- Ukrainian is the explanation language.
- Spanish examples are normative or explicitly marked as regional/colloquial.
- Mnemonics must not become false universal laws.
- Use construction-based explanations where syntax/function matters.
- Use minimal contrasts for competing forms.
- Do not invent learner errors.
- Regional claims specify geography and variation.
- Separate editorial rewrites from technical refactors where practical.

## File/dependency rules
- Reference-check imports, dynamic references, scripts, docs and CI before deletion.
- Verify dependency consumers before removal.
- Do not add a dependency for a one-off task existing tooling can perform.
- Do not commit generated build output unless explicitly required.

## Git
Large changes use a dedicated branch and PR. No force-push or history rewrite. Keep commits coherent. Do not mix unrelated cleanup with content rewriting.

## Review
A change is ready when a new contributor can understand it, existing patterns are reused, public URLs are preserved unless migration is documented, and appropriate QA passes.