# Design System

## Direction
The interface is an editorial linguistic atlas: typographic, information-led and restrained. The goal is fast comprehension and retrieval, not generic SaaS styling.

## Tokens
Use semantic tokens from src/styles/tokens.css before adding local values. New tokens require repeated semantic use, not one-off convenience.

## Style layers
tokens.css defines primitives → base.css establishes defaults → component/grammar/prose layers provide role-specific presentation → page-specific CSS is exceptional.

## Typography and layout
Use the existing font system. Keep long-form prose at a comfortable measure. Establish hierarchy through typography, spacing and alignment before borders or shadows.

## Components
Do not make every section a card. Lists normally behave as grouped lists with lightweight separation. Shared components have one clear responsibility and remain content-agnostic where practical.

## Accessibility
Responsive behavior must preserve reading order and hierarchy. Keyboard focus, skip navigation, semantic headings, link clarity, sufficient contrast and usable targets are requirements. Static audits cannot prove all runtime behavior.

## Change rule
Visual changes need a reason tied to usability, content hierarchy, accessibility, consistency or a documented product goal.