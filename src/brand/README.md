# Brand layer

Everything that makes the site look and sound like the organization lives here and in `public/brand/`. Brand values stay in these two folders; brand expression such as signature visuals and layout can reach the shared layouts and named components (SPEC section 6). Components read from this layer and never hard-code a name, colour, font, duration, logo or contact detail.

Colours, type, spacing, radius and the cursor come from the **Digital Intent design system** (v1.3, November 21, 2026). The logo files are the design system's outlined SVGs. The social image (`og-default.png`) is still a placeholder.

Changes here need approval from a person (AGENTS.md).

## Files

| File                     | What it holds                                                                    |
| ------------------------ | -------------------------------------------------------------------------------- |
| `brand.config.ts`        | Name, contact details, regions, paths to logo and images                         |
| `tokens.css`             | Colours (Analog and Digital), type, spacing, layout, shape, motion               |
| `fonts.css`              | `@font-face` rules for self-hosted fonts                                         |
| `fonts/`                 | Font files and their licences                                                    |
| `brand.css`              | Imports `fonts.css` and `tokens.css`; layouts import this file                   |
| `public/brand/`          | `logo.svg`, `logo-on-dark.svg`, `logo-mark.svg`, `favicon.svg`, `og-default.png` |
| `/fixtures/orthography/` | Page that renders the SPEC section 6 sample strings in every weight              |

## Config values (`brand.config.ts`)

| Key           | Current value                                                        | Notes                                                                                                                                                             |
| ------------- | -------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `placeholder` | `false`                                                              | While `true`, pages show a "Placeholder brand" label                                                                                                              |
| `name`        | `Digital Intent Learning Society`                                    | Full legal name (D31)                                                                                                                                             |
| `shortName`   | `Digital Intent`                                                     | Usual short form; for tight spaces (D31)                                                                                                                          |
| `tagline`     | `[TK]`                                                               | One line, plain language                                                                                                                                          |
| `domain`      | `digitalintent.ca`                                                   | Bare `.ca` domain, no `https://`. Also sets `site` in `astro.config.mjs` (D2)                                                                                     |
| `email`       | `[TK]`                                                               | Organization email, created with the domain (D21)                                                                                                                 |
| `social`      | none                                                                 | List of `{ label, href }`                                                                                                                                         |
| `regions`     | Kamloops, Victoria, Vancouver                                        | Starting regions (SPEC section 2)                                                                                                                                 |
| `logo`        | `/brand/logo.svg`, `/brand/logo-on-dark.svg`, `/brand/logo-mark.svg` | Wordmark for paper, wordmark for navy (header and footer), square icon; natural size 610 × 155; alt text. Never recolour a logo file: pick the one for the ground |
| `favicon`     | `/brand/favicon.svg`                                                 | SVG favicon                                                                                                                                                       |
| `socialImage` | `/brand/og-default.png`                                              | 1200 × 630, with alt text                                                                                                                                         |

## Tokens (`tokens.css`)

### Colour

The design system has two worlds instead of light and dark (decision record 0005). **Analog** is paper: beige ground, navy text, a pen-red cursor. **Digital** is the screen: navy ground, beige text, a lime cursor. `<html>` is `data-theme="analog"`; any element can set `data-theme="digital"` (or back to `"analog"`) and everything inside it switches. The visitor's system theme does not change the world, and there is no toggle.

Every text pairing must reach 4.5:1 and every border 3:1 in both worlds (checked before launch).

Brand colours, the same in both worlds. Prefer the world tokens below.

| Token           | Value     | Use                                                     |
| --------------- | --------- | ------------------------------------------------------- |
| `--color-navy`  | `#0B2E4F` | Digital ground, Analog text                             |
| `--color-paper` | `#F3EEE2` | Analog ground, Digital text                             |
| `--color-red`   | `#D0202B` | Pen red: cursor, marker marks, labels. Analog only      |
| `--color-lime`  | `#D4F06A` | Highlighter (Analog); cursor, labels, buttons (Digital) |

World tokens:

| Token                | Analog    | Digital   | Use                                            |
| -------------------- | --------- | --------- | ---------------------------------------------- |
| `--color-bg`         | paper     | navy      | Page or section ground                         |
| `--color-surface`    | `#E9E2D2` | `#133A5E` | Cards, image placeholders, form fields         |
| `--color-text`       | navy      | paper     | Body text and headings                         |
| `--color-text-muted` | `#4D5D6C` | `#B4C0CB` | Captions, dates, metadata                      |
| `--color-border`     | `#6B7886` | `#6F87A0` | Borders, dividers, control outlines            |
| `--color-signal`     | red       | lime      | The cursor colour                              |
| `--color-accent`     | navy      | lime      | Primary button fill                            |
| `--color-on-accent`  | paper     | navy      | Text on `--color-accent`                       |
| `--color-link`       | navy      | lime      | Links, always underlined                       |
| `--color-focus`      | navy      | lime      | Focus outline                                  |
| `--color-label`      | red       | lime      | Mono labels and intent lines. Red on `bg` only |

Emphasis, the same in both worlds:

| Token                  | Use                                                              |
| ---------------------- | ---------------------------------------------------------------- |
| `--color-highlight`    | Lime highlighter (Analog) and selected text (Digital)            |
| `--color-on-highlight` | Navy text on the highlight                                       |
| `--color-marker`       | Pen-red marker strokes: circles, underlines, arrows. Analog only |

Keycaps (Digital only): the key face is `--color-surface` and a pressed key sinks to `--color-bg`. `--color-key-lip` is the deep bottom edge, `--color-key-edge` and `--color-key-edge-top` the light edges.

Rules from the design system: navy and beige carry everything; lime and red cover a small part of any piece. Lime is never text or a line on paper. Red never appears on navy. One kind of emphasis per section.

### Type

| Token                                                | Use                                |
| ---------------------------------------------------- | ---------------------------------- |
| `--font-sans`, `--font-mono`                         | Source Sans 3, Source Code Pro     |
| `--font-body`, `--font-heading`                      | Both point at `--font-sans`        |
| `--font-weight-regular`, `--font-weight-bold`        | The only weights in use (400, 700) |
| `--text-sm`, `--text-base`, `--text-lg`, `--text-xl` | 15, 18, 21 and 24px                |
| `--text-code`                                        | 16px, code and typed text          |
| `--text-2xl`, `--text-3xl`                           | Headings; scale up to 32 and 44px  |
| `--leading-tight`, `--leading-normal`                | Line height for headings and body  |
| `--tracking-tight`                                   | Letter spacing for the page title  |

Any font must render the orthography fixture correctly (SPEC section 6). If you add a weight, add a `--font-weight-*` token and add it to the fixture page.

### Space, layout and shape

| Token                                       | Use                             |
| ------------------------------------------- | ------------------------------- |
| `--space-1` to `--space-8`                  | Spacing scale, 0.25rem to 4rem  |
| `--width-prose`                             | Maximum line length for reading |
| `--width-page`                              | Page width, 84rem (1344px)      |
| `--space-gutter`                            | Page side padding, 20 to 48px   |
| `--radius-sm`, `--radius-md`, `--radius-lg` | Corner radius                   |
| `--border-width`                            | Default border                  |
| `--focus-width`, `--focus-offset`           | Focus outline size and gap      |
| `--cursor-width`, `--cursor-height`         | The thin cursor, in em          |
| `--cursor-gap`, `--cursor-drop`             | Gap before it, drop below line  |

### Motion

Animate `transform` and `opacity` only. Under `prefers-reduced-motion: reduce`, durations and distances drop to zero; components still provide their own still alternative.

| Token                                                                        | Use                                                                      |
| ---------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| `--duration-press`                                                           | 80ms, a keycap press                                                     |
| `--duration-fast`, `--duration-base`, `--duration-slow`, `--duration-slower` | 120ms, 200ms, 400ms, 900ms (large, calm movements such as the board map) |
| `--ease-standard`, `--ease-enter`, `--ease-exit`                             | Easing curves                                                            |
| `--motion-distance-sm`, `--motion-distance-md`                               | How far things move                                                      |

## Fonts

Source Sans 3 (roman and italic) and Source Code Pro, variable weight 400 to 700, SIL Open Font License (`fonts/OFL.txt`). About 400 KB as WOFF2 in total; pages only download the files they use. These are the full upstream fonts, not the Google Fonts subsets, which drop combining marks the orthographies need. Every character in the orthography fixture is covered in all three files.

Hanken Grotesk (the wordmark), Chakra Petch and Martian Mono are for logos, print and social pieces. They lack characters that Indigenous place names need, so the site does not load them.

To change a font: add the file to `fonts/` with its licence, update `fonts.css` and the `--font-*` tokens, then check the fixture page in every weight.
