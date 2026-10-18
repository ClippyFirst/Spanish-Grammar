---
name: playwright-audit
description: Defines browser-level smoke and journey tests for the built grammar site, especially search, navigation, tables and responsive layouts.
---

# Playwright Audit

## Before testing
Read project scripts and QA docs. Build the site with the existing supported workflow; do not assume Playwright is installed. Do not add dependencies without approval and a clear gap in coverage.

## Test journeys
1. Open a representative grammar article directly and refresh it.
2. Navigate from category/list to article and back.
3. Search a known Spanish term and a Ukrainian explanation term using Pagefind.
4. Open a result and verify the URL, title and visible target content.
5. Follow related, prerequisite, contrast, extension and exception links where present.
6. Inspect conjugation and comparison tables at narrow viewport widths.
7. Keyboard-navigate search, menus, links and interactive controls.
8. Check focus visibility, labels, landmarks, language attributes and obvious console/network errors.
9. Load a deep URL under the production base path to catch GitHub Pages path regressions.

## Evidence
For each failure record browser/viewport, route, reproducible steps, expected/actual behavior and screenshot or trace path if the test runner supports it. Distinguish product defects from environmental or flaky failures.

## Guardrails
Do not claim tests were run if they were only proposed. Avoid brittle selectors tied to incidental markup; prefer accessible roles and stable test IDs only where justified. Never update snapshots blindly to hide regressions.

## Upstream lead
[playwright-audit-skill](https://github.com/mauricio2093/playwright-audit-skill) is an optional starting point, not a required dependency.
