# 0006: Valleyview becomes a grant home with past-recipient features

- Status: Proposed
- Date: 2026-11-22
- Deciders: [TK: Reed McIlwain and Nicole Peverley approve in the pull request]
- Spec references: section 7.4, D5, D19

## Context

SPEC 7.4 made `/valleyview` an information page for this year's grant, with no past-recipient section (D19). That was set because a photo shoot and feature on the year 1 recipient seemed unlikely before launch, not because a feature was unwanted. The organization also sees the grant as part of a bigger goal: pillar 4, "Empower young people to build their ideas now." Students should see why we fund them before they see the rules.

## Options considered

1. Keep 7.4 as written. A recipient feature stays a separate page, added later.
2. Make `/valleyview` the home for the grant across years: the pillar 4 framing first, then past recipients, then this year's grant. Each past recipient gets a feature page at `/valleyview/<year>/`.

## Decision

Option 2.

- `/valleyview` reads in this order: pillar 4 framing, past recipients (a teaser each), this year's grant and how to apply.
- Each past recipient has a feature page at `/valleyview/<year>/`, from `content/valleyview-recipients/<year>.md`, with an article and a photo gallery.
- A recipient's details are committed only with their consent, first name only unless they agree to more. Photos stay labelled placeholders until the shoot.
- The feature can ship after launch if it is not ready; the route and layout exist now.
- D5 is unchanged: no apply button until the board picks the application form. The page shows a labelled slot where it will go.
- A wider grants page may come later, with Valleyview under it. Not built now.

## Consequences

- Easier: the page explains why the grant exists, and each new year adds one content file.
- Harder: we hold information about a former student in a public repository, so consent must be confirmed before each recipient's details are committed.
- Revisit when a second grant program starts, which would move this under a grants page.
