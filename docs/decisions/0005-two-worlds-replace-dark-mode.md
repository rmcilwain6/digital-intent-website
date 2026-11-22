# 0005: Two worlds replace light and dark mode

- Status: Proposed
- Date: 2026-11-21
- Deciders: [TK: Reed McIlwain and Nicole Peverley approve in the pull request]
- Spec references: section 6, section 8.2, T7, D10, rule 2

## Context

The spec asked for light and dark themes that follow the system setting, with a manual toggle (D10, T7). The Digital Intent design system (v1.3, November 21, 2026) replaces this with two "worlds":

- **Analog**: beige paper ground, navy text, a pen-red cursor. People, paper, the classroom.
- **Digital**: navy ground, beige text, a lime cursor. Screens, systems, the technology itself.

A page or section is Analog or Digital because of what it is, not because of the reader's setting. Pages are Analog; the header, footer, phone menu and 404 are Digital. Keeping a light and dark mode on top of this would mean four colour sets and a toggle that fights the design.

## Options considered

1. Keep light and dark, map Analog to light and Digital to dark. Small change, but the toggle would flip whole pages between worlds, which breaks the idea that each section has a fixed world.
2. Two worlds set per section with `data-theme`, no toggle, no system preference. Matches the design system. Readers with a dark system setting get Analog pages.
3. Two worlds, each with its own light and dark variant. Four palettes to design and check; no design exists for it.

## Decision

Option 2.

- Colour tokens are defined for `:root, [data-theme='analog']` and for `[data-theme='digital']` in `src/brand/tokens.css`. `<html>` carries `data-theme="analog"`. Any element can set `data-theme` to switch world for its subtree.
- The theme toggle, its stored preference and `prefers-color-scheme` handling are removed. The site stores nothing in the visitor's browser.
- Contrast is checked for every token pairing used, in both worlds (section 6, section 9.2).
- Fonts change with the design system: Source Sans 3 for website text and Source Code Pro for typed text, both self-hosted with full character sets. Noto Sans is removed.

## Consequences

- Easier: one colour set per world, no flash-of-wrong-theme script, no browser storage, less JavaScript.
- Harder: readers who prefer dark pages no longer get them. Analog pages are a soft beige rather than bright white, which helps, but it is not a dark mode.
- Revisit if accessibility feedback shows readers need a dark reading mode, or if a browser-level setting such as forced colours exposes problems.
