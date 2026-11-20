# Website Spec (v0.7)

Status: moved into the repo from Notion on 2026-10-20. This file is now the source of truth; changes go through pull requests. Section 14 tracks every decision as **Decided**, **Open (board)** or **Open (research)**. Research tasks (R1, R2, ...) are defined in section 15.

**This is a living guide, not a contract.** Decisions are firm enough to build on, not fixed forever. Requirements will change as the brand, the board's decisions and the team's needs develop. When something here gets in the way of what the work needs, raise it and change the spec in a pull request rather than working around it quietly. Larger changes get a decision record (section 12.4).

**We are in MVP mode** (decision record 0002). The goal is a live, well-made site with the core pages, the final name and the final brand. The values rules in section 4 hold from day one. Heavy process and automation (the full CI test suite, skills, analytics events) come after launch. Where this spec describes something as post-MVP, do not build it yet.

Owners: Reed McIlwain and Nicole Peverley (shared; no fixed split of roles)

Source material: 2026-10-15 requirements meeting minutes; strategic framework draft (Oct 2026); spec Q&A 2026-10-17 (two rounds); stack decision 2026-10-20; MVP scoping 2026-10-21; brand and Valleyview planning to 2026-10-29; requirements session 2026-11-11 (record 0004)

---

## 1. Purpose

Build the public website for a BC technology education nonprofit (name not yet chosen). The site exists to:

1. Give teachers, school leaders and district staff a credible place to land after a conversation with us.
2. Give students a findable home for the Valleyview Social Innovation Grant. Last year the application was only reachable by direct link.
3. Publish our positions, resources and values openly.
4. Serve as a working demonstration that we build technology well: fast, accessible, private by default.

The site is built **before** the name and brand are final. Brand values stay in one place and brand expression stays in known places, so applying the brand does not mean rebuilding the site (section 6).

## 2. Organizational context agents must know

- Four strategic pillars (board vote, Oct 15 2026):
  1. Be an independent voice on technology in BC education.
  2. Build lasting, face-to-face partnerships with educators and communities.
  3. Help learners understand, question and shape the digital world.
  4. Empower young people to build their ideas now.
- Starting regions: Kamloops, Victoria, Vancouver. These are where we start and have reach, not our boundary. The organization is province-wide and the site must read that way: a teacher in the North, the Rockies, a rural community or an Indigenous school should never conclude "this isn't for me".
- We are a BC organization working on a BC problem. BC identity is settled. How it shows up (visuals, colour, language, the name, or a mix) is being worked out in the brand process (D25).
- Values that become engineering rules: skepticism of ed-tech business models, transparency, privacy by default, face-to-face over platform.
- Public voice: plain language, no marketing language, critique ideas not people.

## 3. Audiences

This order sets what we build first. It does not rank people: every audience meets the same brand and comes to us as they are.

| Priority | Audience                                | What they need                                           |
| -------- | --------------------------------------- | -------------------------------------------------------- |
| 1        | Teachers and school/district staff (BC) | Who we are, what we do, why to trust us, how to reach us |
| 2        | Graduating high school students         | Valleyview grant details and how to apply                |
| 3        | Funders, partners, media                | Mission, board, funding values, contact                  |
| 4        | Parents and the public                  | Plain-language writing and resources (later phases)      |

## 4. Non-negotiable rules

These apply to every change, including during MVP. Agents must not break them without a recorded decision (section 12.4). During MVP, most of them are checked by people in review and in a pre-launch pass (section 9) rather than by automated checks.

1. **No personal information is collected or stored by this site.** No forms that submit personal data to our infrastructure, no accounts, no logins. Anything that collects personal information (applications, surveys, sign-ups) is a separate system reached by an outbound link, unless a recorded decision says otherwise (see D5).
2. **No tracking of individuals.** No cookies, no persistent identifiers in storage, no fingerprinting, no IP address retention, no third-party trackers or pixels. Anonymous aggregate counts only (section 10).
3. **No third-party runtime requests for core assets.** Fonts, images and scripts are self-hosted.
4. **Core content works without JavaScript.** JavaScript and motion enhance; they never gate reading.
5. **Accessibility is a release blocker.** WCAG 2.2 AA. Checked manually before launch; automated checks in CI after MVP (section 9).
6. **Agents do not invent facts.** Copy not sourced from `content/` or this spec uses a visible placeholder: `[TK: what is needed]`. No `[TK:` may remain at launch (checked manually for MVP; a build check after MVP).
7. **Brand values live in one place.** No component hard-codes the organization name, colours, fonts, logo, domain or contact details (section 6).
8. **No stock imagery.** Image slots stay as labelled placeholders until original photography exists.
9. **The repository is public.** Never commit secrets, personal contact details, or anything about students. Assume every issue, comment and pull request discussion is read by the public.

## 5. Scope by phase

The MVP is Phases 0 to 2: foundation, core pages, then brand and launch.

### Phase 0: Foundation

- D1 (Astro on Cloudflare) recorded as decision record 0001.
- Repo, basic tooling (type check, lint, format, build in CI), deploy pipeline, preview deploys per pull request. Pre-launch deploys are protected by Cloudflare Access (D23).
- `AGENTS.md`, this spec, decision log, public-repo files (section 11).
- Brand layer and placeholder brand: neutral "wireframe" theme in light and dark, plus the shared layout (header, navigation, footer, skip link, theme toggle).

### Phase 1: Core pages (pre-brand)

Pages: Home, About, Board, Valleyview Grant (information only), Contact, Privacy, 404 (section 7), built against the placeholder brand. Funding moved to post-MVP (section 7.5, record 0004).

Open for launch: the Indigenous outreach page (section 7.9, D13), a Partnerships page or a contact email (D27), and a terms of service page if one is legally needed (D28).

### Phase 2: Brand and launch

- Apply name, logo, colours, type and motion language as section 6 describes.
- Set up the organization email, connect the domain (`digitalintent.ca`, registered; D2), make production public, remove `noindex`.
- Pre-launch checks (section 9.2) and launch checklist (section 13).
- Stretch goals: anonymous page view counts (D7) and the page receipt (section 8.2).

### Launch timing (D16, D20)

Target: November 25, 2026 (D16). All site copy is ready for a joint review by November 21, 2026. Website, brand and board work run in parallel, with several people involved. The brand is the hardest piece; if it is not ready, the launch date moves, and that is fine. The site goes public with the final name, brand and domain together, and there is no public interim URL. Until launch, deploys are visible only to the team (D23).

Valleyview depends on this date. Promotion to students and application intake, planned for late November, start only once the website and the application form are live.

### Post-MVP (soon after launch)

- The automated quality suite in section 9.3.
- Agent skills (section 12.6).
- Named analytics events (section 10).
- Valleyview automatic page status (section 7.4). The application link is not tied to a phase: it ships as soon as D5 is decided, at launch if that is possible.
- Funding page (section 7.5), when Reed says it is needed.
- Info icons on UI patterns (section 8.2).

### Phase 3: Publishing (soon after launch)

Blog/News first, then Teacher Resources, Tool Guide, Events, Get Involved, FAQ, Corrections log, AI Use statement. Posts on everyday tech terms with precise technical meanings (for example "sandbox", "guardrails", "playground"). The Indigenous outreach page moved toward launch (section 7.9).

### Phase 4: Interactive tools (each gets its own spec)

- District policy map: each school district's public positions on AI, phones and classroom technology, as a public data set with a published collection method, plus an interface on the site (map, list or charts). Only public records (minutes, policies, approvals), with a tool for ingesting new material. Visitors pick a district, see its policy on a topic and trace it to the board meeting where it was discussed or approved, with at-a-glance comparisons by topic (for example phones and AI). It covers districts. Whether to show projected policy direction based on winning trustees' public election statements, clearly labelled as our projection, is open (D29).
- Other uses of the BC map (D25).
- Troubleshooting toolkit (web plus printable PDF).
- Digital skills check (runs in the browser, stores nothing).
- Annual report as a web page.

### Stretch goals (no phase assigned)

- French language support.
- Content in Indigenous languages, only in partnership with the communities concerned (R7).

### Future ideas (2027; record only, do not build)

- An interactive playground scene with clickable, reactive elements that each teach something, and a sandbox to play in.
- A friendly terminal-style interaction, for example for asking questions in place of a form, with notes explaining what a command line is. Anything entered is never sent to our infrastructure (rule 1).
- History of digital technology content. Optional.
- Hidden things to discover, so the site feels like a place to explore.
- Students contributing a feature to the site for open-source experience.

### Out of scope for this repo

- Surveys, volunteer databases or any system holding personal information, unless D5 decides otherwise for Valleyview.
- Donations and payments.
- Accounts or member areas.

## 6. Brand layer (swap-in architecture)

Goal: applying the final brand does not mean rewriting content or page structure.

- **Brand values** (name, contact details, colours, type, spacing, motion tokens, logos) live only in `src/brand/` and `public/brand/`.
- **Brand expression** (signature visuals, layout, motion patterns) can need changes outside those folders. Keep it in the shared layouts and named components, not scattered through pages. Keep content in `content/`, so restyling a page does not touch its words.

```
src/brand/
  brand.config.ts   # name, shortName, tagline, domain, email, social links, regions
  brand.css         # entry point; imports fonts.css and tokens.css
  tokens.css        # colour (light and dark), type scale, spacing, radius, motion tokens
  fonts.css         # self-hosted font definitions
  fonts/            # font files and their licences
public/brand/
  logo.svg, logo-mark.svg, favicon.svg, og-default.png
```

Rules:

- Components use tokens only. No raw colour values, font names or durations outside `src/brand/`.
- Motion tokens (durations, easings, distances) live in the brand layer, so the brand pass can change how the site moves as well as how it looks.
- Organization name and contact details are read from `brand.config.ts`.
- Post-MVP: a CI check fails on colour literals and the placeholder org name outside `src/brand/`. Until then, reviewers check this.
- Both themes (light and dark) must pass contrast checks for every token pairing used (checked before launch).
- The placeholder theme must look deliberately unfinished and be labelled "Placeholder brand".
- **Typefaces must render Indigenous place names and orthographies correctly**, including characters such as é, ʷ, ̓ (combining comma above), ə, ł, ḵ, x̱ and ʔ. A fixture page renders sample strings (Secwépemc, Lək̓ʷəŋən, xʷməθkʷəy̓əm, Sḵwx̱wú7mesh, səl̓ilw̓ətaʔɬ) in every font weight in use. For MVP, a person checks it with the brand fonts before launch; post-MVP it becomes an automated check.

## 7. Site map and page requirements

All pages share: header with primary navigation, footer (contact, regions, privacy link), skip link, theme toggle, page title and meta description. Navigation goes to separate pages; no anchor-scroll menus. No land acknowledgement in the footer or anywhere else (D13).

### 7.1 Home (`/`) Phase 1

Home walks the visitor through full-width sections, each with its own job and call to action. It should feel like a guided walk, not a stack of text blocks. There is little content at launch, so Home makes the most of what exists.

Sections, in order (teachers above Valleyview is a preference, not settled; D30):

1. **Hero**, above the fold. Says who we are and carries the bridge idea: we connect technology and education, two groups with competing interests. Two primary calls to action (D4): one for teachers (destination open, D26) and one for students and parents, linking to `/valleyview`. A Grade 12 student or parent looking for the grant must find it immediately. Image slots for original BC photography (an idea to explore: bridges in Kamloops, Vancouver and Victoria).
2. **Problem statement.** Why we exist, before the mission.
3. **Mission, pillars and goals**, linking to About. Stretch: a scroll-pinned section that steps through the four pillars one at a time, preferred over a carousel. Without JavaScript or with reduced motion, all four pillars show as static content.
4. **BC map.** Its own section below the fold, not merged with the pillars. Shows the province with Victoria, Vancouver and Kamloops highlighted as where we start. Copy says we are a BC organization and BC is our mandate, so the starting regions do not read as our boundary (section 2). Built on the province outline from #23; weight budget per #16. The map is not permanently on screen.
5. **For teachers.** What teachers can get from us, to start a conversation. Open to teachers anywhere, not only in BC. If the destination is booking a call, it is an outbound link to a third-party scheduler, never a booking form on our site (rule 1), and the Privacy page names it.
6. **Valleyview grant.** What it is, how to apply, what we look for; links to `/valleyview`.
7. **Commitment to Indigenous outreach.** Links to the outreach page (section 7.9).
8. **Partnerships.** An invitation to organizations, businesses and groups working to improve outcomes for students, teachers and parents. We have partners, not competitors: one node in a network, not a hierarchy. Own page or a section with a contact email (D27).
9. Footer.

### 7.2 About (`/about`) Phase 1

- Mission statement (`[TK]` until ratified).
- Pillars with approved one-line definitions.
- Values and how we work (remote-first, in person by choice, three starting regions, province-wide in scope).

### 7.3 Board (`/board`) Phase 1

Card per person, with data in `content/board.ts`, schema-validated:

- Required: name, photo, board role, home region.
- Optional: industry or career, areas of expertise, short bio, one external link.
- Not shown: personal email, phone, or regional lead designation (pending board decision D14).
- Photo slots use placeholders until original portraits are shot.
- A board member's details are committed only after that member has agreed to them. Git history is public and permanent, so a draft that is later removed is still published.

### 7.4 Valleyview Social Innovation Grant (`/valleyview`) Phase 1, information only

This is a well-designed information page until D5 is decided. How applications are collected and handled is not the website's decision (D5). The likely outcome is an outbound link to a Canadian-hosted form or survey tool.

This year keeps last year's format and is open to Grade 12 students at Valleyview only. The grant must read as advancing education: recipients agree to mentorship and to follow-up showing how the grant was used to learn, so do not describe it as "no strings attached".

Information page:

- What it is, who can apply, award amount, what recipients get (funding plus mentorship), what they agree to in return. Use `[TK]` for any detail the board has not confirmed.
- The three application questions: what's the idea, why are you the right person, how will this help.
- Timeline from data, where dates are known.
- How and when to apply, as text. No apply button until D5 is decided.
- Short FAQ addressing last year's barriers: nerves about pitching, feeling unqualified.
- No past-recipient section.
- Short, memorable URL for posters and school announcements.

Once D5 is decided:

- Apply button pointing to the application destination. Outside the window, the button is replaced by explanatory text and the next expected date.

Post-MVP:

- Page status (open / opening soon / closed) computed from dates. It must stay correct on a static site: status computed only at build time goes stale when the window opens or closes, and the text must make sense without JavaScript.

### 7.5 Funding (`/funding`) Post-MVP

Not part of the MVP (record 0004). It ships when Reed says it is needed, after conversations with funders.

- A designed, full-desktop "wall of funding", modelled on a community-centre donor wall rather than a table, in the final brand.
- Three jobs at once: thanks, encouragement ("you could be here"), and transparency about who funds us.
- Every funder is thanked publicly. We do not take money from anyone who wants it kept quiet.
- Separates sponsorship (a business relationship: logo placement, social mentions) from donation (charitable, nothing given in return). How to present this is open.
- Keeps the funding values: no money from companies whose main business is selling ed-tech, and the aim that no single source becomes large enough to shape what we say.
- Funder amounts and format follow D11.
- Wording approved by a human.

### 7.6 Contact (`/contact`) Phase 1

- Organization email from brand config as a `mailto:` link. No form. The address does not exist yet; it is created with the domain (Phase 2).
- What to contact us about: Pro-D and workshops, school visits, partnerships, Valleyview, media.
- Post-MVP: clicking the email link counts as an anonymous event (section 10, D7).

### 7.7 Privacy (`/privacy`) Phase 1

- Bare bones. States what the site does and does not collect: no personal information, no cookies, anonymous aggregate counts only.
- May open as a dialog from a footer button. The button's link points at `/privacy`, so the text is reachable without JavaScript (rule 4).
- Lists every service involved (hosting, analytics) and where it is based.
- Names every third-party service linked from the site (for example a scheduler for teacher calls, or external forms) and explains that each has its own notice and where its data is stored.
- Notes that the theme toggle preference is stored only in the visitor's own browser.
- Agent drafts, human approves.

Terms of service: Reed checks whether one is legally needed (D28). If so, it is bare bones and gets the same treatment as Privacy.

### 7.8 404 Phase 1

Helpful, on-brand, links to Home and Contact.

### 7.9 Indigenous outreach (path to be decided) Phase 1 or soon after launch (D13)

- A living hub for our outreach with Indigenous communities, not a values page. It grows as we act: our strategy, the commitments we make, and a record of what we have done and where.
- Replaces a land acknowledgement anywhere else on the site.
- Copy comes from the team member leading this work. Agents do not draft position statements for it (section 12.5).
- Home links to it (section 7.1). Whether the full page ships at launch depends on the copy being ready.
- Post-MVP: a map or timeline of schools we have visited or worked with, shown as points for projects or visits, not Nation boundaries. Any First Nations schools data comes from relationships and consent, not a dataset (R6).

### 7.10 Phase 3 pages

| Page              | Path            | Notes                                                                                          |
| ----------------- | --------------- | ---------------------------------------------------------------------------------------------- |
| Blog / News       | `/writing`      | Posts with author, date, tags; RSS feed. Authors may include anyone on the team (section 12.7) |
| Teacher Resources | `/resources`    | Curated, filterable by type, grade band, topic                                                 |
| Tool Guide        | `/tools`        | Critical reviews against fixed questions; vendor naming policy D15                             |
| Events            | `/events`       | Data-driven; .ics file per event                                                               |
| Get Involved      | `/get-involved` | Outbound links only                                                                            |
| FAQ               | `/faq`          |                                                                                                |
| Corrections       | `/corrections`  | Public log of what we got wrong and what changed                                               |
| AI Use            | `/ai`           | Once the organization's statement exists                                                       |

## 8. Technical requirements

### 8.1 Stack: Astro on Cloudflare (D1, decided Oct 20, 2026)

Astro, deployed to Cloudflare Workers (static assets) on the free tier. This is the MVP platform and stays open to revision if needs change. See `docs/decisions/0001-astro-on-cloudflare.md`.

App-like features go, in order of preference:

1. An island on a page (client-side component loaded only where used).
2. A server-rendered Astro route (decision record required under T2).
3. A separate app on a subdomain or routed path, with its own privacy scope.

The stack must continue to meet these requirements:

| #   | Requirement                                                                                                              |
| --- | ------------------------------------------------------------------------------------------------------------------------ |
| T1  | Free hosting tier whose terms allow use by an organization (Vercel's Hobby tier does not: personal, non-commercial only) |
| T2  | Pages prerendered as static files by default. Server code only by recorded decision                                      |
| T3  | TypeScript, strict mode                                                                                                  |
| T4  | Content as Markdown/MDX files plus typed data modules, validated at build                                                |
| T5  | Path to a CMS that non-technical writers can use without GitHub accounts (R3)                                            |
| T6  | Rich motion and interactive components (e.g. a BC map) loaded only where used, without bloating text-only pages          |
| T7  | Light and dark themes without a flash of the wrong theme on load                                                         |
| T8  | Routing structure ready for additional languages without a rewrite                                                       |
| T9  | Anonymous page view counting (a stretch goal for launch); named events later (section 10, D7)                            |
| T10 | Mainstream enough that AI agents and future volunteers can work in it, and credible as a modern stack                    |

Candidates considered: Next.js (static export), Astro, SvelteKit. Next.js remains the fallback if the site shifts toward being an application.

Fixed regardless of stack:

- No database in Phases 0 to 2.
- `.ca` domain: `digitalintent.ca` (D2).
- $0 per month operating cost target; only the domain is paid.
- Until launch, the production and preview deploys sit behind Cloudflare Access (free tier), so only allowlisted team members can see them (D23). This is account configuration, not code. Never commit the allowlist or team email addresses. At launch, Access comes off the production domain; it may stay on previews.

### 8.2 Look, feel and motion

- Approachable, active and unique. The site should feel alive and clearly from BC.
- How BC shows up in the brand is open (D25). Design research (R5) explores this before the brand pass. The BC map will have a place on the site, and visitors should be able to control or hide it. It is not decided as the core brand element.
- Teaching through the site: every page should teach something, to every kind of visitor, without asking them to do extra work. It should serve beginners and experts at once.
  - Page receipt (stretch goal for launch): a footer element showing what the page loaded and how big it was. A possible running total for the visit is held in memory only, never stored or sent (rule 2). Scoped in its own issue.
  - Post-MVP: info icons beside UI patterns (for example the hero) that, on hover or keyboard focus, outline the component and explain what it is and why sites use it.
- Kept from the layout studies, not yet scoped: "next stops" that continue the reader's path at the end of a page.
- Motion is part of the identity, under these limits:
  - Every animation respects `prefers-reduced-motion` with a still alternative.
  - Motion never delays or hides content. Text is readable at first paint.
  - Animate transform and opacity only, unless a recorded decision allows otherwise.
  - Heavy visuals (map, canvas, WebGL) load only on routes that use them and have their own performance budget.
- Dark mode ships at launch, following the system setting by default with a manual toggle.
- Photography: original images shot by Reed in fall 2026. Layouts define image slots with fixed aspect ratios and a short art-direction note per slot.

## 9. Quality bars

The standards are the same before and after MVP. What changes is how they are checked: by people during MVP, by automation after it.

### 9.1 MVP: enforced on every pull request

- CI: type check (`astro check`), lint, format check and build pass.
- Secret scanning and push protection (GitHub repository settings).
- Content schemas validate at build (a missing required field fails the build).

### 9.2 MVP: checked in review and before launch

In review, for changes that affect the UI:

- Keyboard navigation with visible focus on every interactive element.
- Reduced-motion version checked for every animated component.
- 200% zoom without horizontal scroll.
- Plain-language copy (aim for grade 8 to 10 reading level on general pages).
- No colour literals, font names, durations or organization name outside `src/brand/`.

Once before launch, run by hand against the built site with the final brand:

- Accessibility scan (axe) on every route in both themes, with zero violations.
- Lighthouse on key routes, aiming for 95 or above (mobile) in all four categories.
- Budgets for text-first pages: under 200 KB transferred excluding images; JavaScript under 100 KB compressed.
- Contrast for every token pairing in both themes.
- Orthography fixture with the brand fonts (section 6).
- No `[TK:` placeholders remain, and internal links resolve.

### 9.3 Post-MVP: automated

- Unit tests for data schemas and utilities.
- End-to-end smoke tests load every route at mobile and desktop widths, in light and dark themes.
- Automated axe scan with zero violations on every route and theme.
- Lighthouse CI on key routes at 95 or above (mobile). Run against a local production build with the median of several runs, because scores vary between runs.
- Brand-literal check, `[TK:` check (when launch is enabled), orthography font fixture, internal link check.
- Routes with heavy visuals (for example a BC map on Home) declare their own budget in a decision record.

## 10. Analytics

Purpose: know which pages are visited and whether key actions happen, without knowing who anyone is.

At launch (D7), as a stretch goal: page views per route only. Launch does not wait for it.

Later (deferred, tool via R2):

- Named events, initially: `valleyview_apply_click`, `contact_email_click`, `theme_toggle`.
- Referrer domain and broad device class, if the tool provides them without identifiers.

Must not, at any phase:

- Set cookies or store identifiers in the browser.
- Store IP addresses or build per-visitor sessions.
- Share data with advertising networks.

The Privacy page names the tool. Optional, if cheap: publish the aggregate numbers on a public stats page as part of being transparent.

## 11. Repository

- Hosted on Reed's personal GitHub account for now, with transfer to an organization account later. Nothing (CI, deploy config, links, badges) may hard-code the owner name; read it from config so the transfer is painless.
- Public from day one. Required files: `README.md`, `LICENSE` (D17), `CONTRIBUTING.md`, `CODE_OF_CONDUCT.md`, `SECURITY.md`.

```
/AGENTS.md                 # rules for all AI agents (canonical, tool-neutral)
/CLAUDE.md                 # imports AGENTS.md
/docs/SPEC.md              # this document
/docs/decisions/           # numbered decision records
/docs/research/            # technical research findings moved from Drive (D22), prototypes kept for reference
/docs/CONTENT.md           # editing guide, voice and style (when needed)
/.claude/skills/           # skills, also listed in AGENTS.md so any agent can read them (post-MVP)
/content/                  # pages and typed data
/data/map/                 # processed open map data, with sources and licences
/tools/map/                # development-only scripts that rebuild the map data
/src/                      # application code, brand layer
/public/brand/             # logo, favicon, social image
/tests/                    # end-to-end, unit, visual fixtures (post-MVP)
/.github/                  # CI, issue and pull request templates
```

## 12. Agent workflow

### 12.1 Work intake

- Work is tracked as GitHub Issues with short acceptance criteria, so the whole team can see what is planned and in progress. One issue per pull request.
- **An agent working with a person directing it in a live session** may act on that person's instructions. The instruction is the approval.
- **An agent working without a person directing it** (scheduled, background, or told to find work) only picks up issues labelled `agent-ready`, applied by a maintainer. The repository is public and anyone can open an issue, so agents never act on an unlabelled issue on their own.

### 12.2 Pull requests

- Branch protection on `main`: pull request required, CI green, at least one approval from a person other than the author. No exceptions for content-only changes. Team members review each other's work.
- Size guideline: under about 400 changed lines excluding content and lockfiles. Split larger work where it is sensible.
- Template: what changed, why, linked issue, and screenshots when the UI changes (mobile and desktop; light and dark where it matters).
- Preview deploy URL on every pull request (behind Cloudflare Access until launch).
- `main` is staging. Production deploys only from a published GitHub release, which moves the `production` branch (record 0003).
- Conventional Commits.

### 12.3 Agent tools

Team members may use different AI tools. `AGENTS.md` is the single source of agent instructions and must not assume a specific tool. Tool-specific files only point to it.

### 12.4 Decisions

Decision records are for choices worth explaining later: architectural changes, server code, runtime dependencies that ship JavaScript to visitors, motion budget exceptions, and any exception to section 4. Add the record in the same pull request. Keep it short. Agents may propose; humans approve through review. Development-only tools (linters, test runners) do not need a record.

### 12.5 Human-only areas

Agents may draft, but a human must approve: the brand layer, privacy text, funding wording, board bios, and any statement of the organization's position.

### 12.6 Skills (post-MVP)

Write these once the patterns they describe have settled in real code. `add-page` may come earlier if several pages are built the same way.

| Skill           | Purpose                                                                                                                                     |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| `add-page`      | New route, content file, metadata, navigation entry, end-to-end test, from the page template                                                |
| `add-post`      | Converts a submitted draft into a blog post with valid metadata (Phase 3)                                                                   |
| `review-pr`     | Checks a pull request against this spec, section 4 and section 9                                                                            |
| `brand-swap`    | Applies a brand package as section 6 describes, then runs visual checks                                                                     |
| `research-task` | Runs an R-task and writes findings in a fixed format: question, options, criteria, evidence with sources, recommendation (location per D22) |
| `grill-me`      | Interviews a human to turn a vague request into an issue with acceptance criteria                                                           |

### 12.7 Blog publishing workflow (Phase 3)

- Start: writers send drafts in any format. A maintainer (or an agent using `add-post`) turns each into a pull request; a human approves.
- Later: a CMS that lets any team member write and submit without a GitHub account, chosen through R3.

## 13. Launch checklist (Phase 2)

- [ ] Name, logo, colours, type and motion applied as section 6 describes
- [ ] Pre-launch checks in section 9.2 pass with the final brand, both themes
- [ ] No `[TK:` placeholders remain
- [ ] Fixture pages (`/fixtures/`) removed from the production build
- [ ] Domain connected, HTTPS enforced, `www` redirect decided
- [ ] Cloudflare Access removed from the production domain
- [ ] `noindex` removed
- [ ] Privacy page approved; names the analytics tool if one is in use and every linked third-party service
- [ ] Valleyview content approved; application link included only if D5 is decided
- [ ] Organization email tested from the Contact page

## 14. Decisions

| ID  | Decision                                                | Status                 | Resolution or default                                                                                                                                                                                     |
| --- | ------------------------------------------------------- | ---------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| D1  | Stack and hosting                                       | Decided                | Astro on Cloudflare Workers (static assets), free tier. Oct 20, 2026. Record 0001                                                                                                                         |
| D2  | Domain                                                  | Decided                | `digitalintent.ca`. Registered; not yet connected to the deploy (see the launch checklist)                                                                                                                |
| D3  | GitHub home                                             | Decided                | Reed's personal account, transferable later                                                                                                                                                               |
| D4  | Home calls to action                                    | Decided                | Two above the fold: one for teachers (destination D26), one for students and parents (`/valleyview`). Nov 11, 2026 (record 0004)                                                                          |
| D5  | Where Valleyview applications are collected             | Open (board)           | Decided outside the website, in board discussions; R4 informs it. Likely an outbound link to a Canadian-hosted form tool. The information page can launch without it; student promotion and intake cannot |
| D6  | Repo visibility                                         | Decided                | Public                                                                                                                                                                                                    |
| D7  | Analytics                                               | Decided for MVP        | Anonymous page views only, no cookies, as a stretch goal for launch. Named events deferred; tool via R2                                                                                                   |
| D8  | Content editing and CMS                                 | Decided for now        | Drafts submitted, published via pull request. CMS later via R3                                                                                                                                            |
| D9  | Languages                                               | Decided                | English only. i18n-ready routing. French and Indigenous languages are stretch goals (R7)                                                                                                                  |
| D10 | Dark mode                                               | Decided                | At launch, system default plus toggle                                                                                                                                                                     |
| D11 | Funding disclosure                                      | Open (board)           | Every funder is thanked publicly, and we take no money from anyone who wants it kept quiet (Nov 11, 2026). Amounts and format open. Values only until the funding page ships                              |
| D12 | Donations                                               | Decided                | Out of scope                                                                                                                                                                                              |
| D13 | Land acknowledgement / Indigenous outreach page         | Open (board)           | No land acknowledgement on Home, in the footer or elsewhere; the outreach page (section 7.9) replaces it. Board confirms the page and its timing. R6 informs                                              |
| D14 | Regional leads shown publicly                           | Open (board)           | Not shown                                                                                                                                                                                                 |
| D15 | Tool Guide names specific products                      | Open (board)           | Phase 3                                                                                                                                                                                                   |
| D16 | Launch date                                             | Decided (target)       | November 25, 2026, together with name, brand and domain (D20). Copy review November 21. Moves if the brand is not ready. Revised Nov 11, 2026 (record 0004)                                               |
| D17 | Licence                                                 | Decided                | MIT for code, CC BY 4.0 for written content                                                                                                                                                               |
| D18 | Human review on every pull request                      | Decided                | Yes, including content-only changes                                                                                                                                                                       |
| D19 | Past Valleyview recipients featured                     | Decided for launch     | No. A feature on a past recipient, linked from Valleyview, may follow with that recipient's consent                                                                                                       |
| D20 | Valleyview page before the name exists                  | Decided                | No public interim launch. The site, name, brand and domain go public together. Valleyview launches as an information page; the application link follows D5. Revised Oct 21, 2026 (record 0002)            |
| D21 | Organization email                                      | Open (blocked)         | Created with the domain in Phase 2                                                                                                                                                                        |
| D22 | Where research findings live                            | Decided for now        | Google Drive. Technical findings may move to `docs/research/`                                                                                                                                             |
| D23 | Pre-launch visibility                                   | Decided                | Production and preview deploys behind Cloudflare Access until launch; only allowlisted team members can see them. Oct 21, 2026                                                                            |
| D24 | MVP scope                                               | Decided                | Phases 0 to 2 with the section 4 rules; heavy automation, skills and analytics events after launch. Oct 21, 2026 (record 0002). Funding page moved to post-MVP, Nov 11, 2026 (record 0004)                |
| D25 | Role of the BC map and how BC shows up in the brand     | Open (brand and board) | BC identity is settled. The map has a place on the site; how it ranks against the rest of the identity is open. Oct 29, 2026                                                                              |
| D26 | Teacher call to action destination                      | Open                   | A resource library, or booking a call ("office hours") through an outbound link to a scheduler. The team prefers the call. Reed settles it                                                                |
| D27 | Partnerships: own page or a section with an email       | Open                   | Nicole decides during the build. A page has room for partner logos                                                                                                                                        |
| D28 | Terms of service                                        | Open                   | Reed checks whether one is legally needed. If so, bare bones, like Privacy                                                                                                                                |
| D29 | Policy map projections from trustees' public statements | Open (board)           | Decided before the policy map spec is written (Phase 4)                                                                                                                                                   |
| D30 | Home order: teachers above or below Valleyview          | Open                   | Lean: teachers above. Nicole and Reed decide during the build                                                                                                                                             |

## 15. Research tasks

Each produces a findings document in Google Drive (D22) using the `research-task` format: question, options, criteria, evidence with sources, recommendation. Humans make the decision.

| ID  | Question                                                                                                                                                                                                                                                                                            | Blocks                                                                                                      |
| --- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| R1  | Which stack and host best meet T1 to T10?                                                                                                                                                                                                                                                           | Resolved by D1. The scaffold and first deploy act as the proof of concept; motion work comes with the brand |
| R2  | Which tool counts anonymous page views (and later named events) with no cookies, at no cost? Include hosted options and a self-built counter on the host's free tier. Check rules 2 and 3: whether a vendor-hosted script counts as a third-party request, and what the tool does with IP addresses | Page views at launch (stretch goal, D7)                                                                     |
| R3  | Which CMS lets non-technical writers draft and submit posts without GitHub accounts, works with Astro, and costs nothing?                                                                                                                                                                           | Phase 3                                                                                                     |
| R4  | How should Valleyview applications be collected? Compare building our own (separate system, Canadian hosting) with Canadian form tools. Account for applicants who are minors, BC privacy law (PIPA), what schools expect, cost, and effort                                                         | Valleyview application link and intake (D5). Owned by the board discussion                                  |
| R5  | Design inspiration: sites and identities that feel approachable, active and rooted in place, especially BC and Canadian examples, and how others use maps, geography and motion                                                                                                                     | Phase 2                                                                                                     |
| R6  | Best practices for land acknowledgements and organizational responses to the TRC Calls to Action, especially Calls 62 to 65 on education. What makes them meaningful rather than performative, and who should be consulted                                                                          | Board decision D13                                                                                          |
| R7  | What supporting French and Indigenous languages would take: technical needs, translation and community partnership, and examples of respectful practice                                                                                                                                             | Stretch                                                                                                     |
