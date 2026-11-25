// Schema for the Home page sections (content/home.ts, SPEC 7.1).
import { z } from 'astro/zod';

/**
 * A call to action. `href` is a site path (`/valleyview/`), an outbound https
 * URL, or a `[TK: ...]` note while the destination is undecided. Never a form
 * (SPEC rule 1).
 */
const callToAction = z.strictObject({
  label: z.string().min(1),
  href: z
    .string()
    .regex(
      /^(\/([a-z0-9-]+\/)*|https:\/\/\S+|\[TK: .+\])$/,
      'Use a site path like /about/, an https URL, or a [TK: ...] note',
    ),
});

const section = z.strictObject({
  heading: z.string().min(1),
  /** Optional opening line, set larger than the body. */
  lead: z.string().min(1).optional(),
  /** Paragraphs, in order. */
  body: z.array(z.string().min(1)).min(1),
  cta: callToAction.optional(),
  /**
   * True while the copy is an agent draft awaiting human approval. The page
   * then shows a visible `[TK]` marker, so it cannot ship unnoticed (rule 6).
   */
  draft: z.boolean(),
});

/**
 * "Why we exist": a short intro, three challenges side by side, the
 * "Could you answer this?" window with a question from content/questions.ts,
 * then a closing note on why this is hard, which hands off to What we do.
 */
const whyWeExist = z.strictObject({
  heading: z.string().min(1),
  lede: z.string().min(1),
  challenges: z
    .array(
      z.strictObject({
        title: z.string().min(1),
        text: z.string().min(1),
      }),
    )
    .length(3),
  questions: z.strictObject({
    heading: z.string().min(1),
    lede: z.string().min(1),
    /** How many questions from the bank the window shows. */
    count: z.int().min(1).max(8),
    /** Lowercase mono label in the window's title bar. */
    windowTitle: z.string().min(1),
    /** Lowercase mono line before the reveal key. */
    prompt: z.string().min(1),
    reveal: z.string().min(1),
    hide: z.string().min(1),
    next: z.string().min(1),
  }),
  /** Why this is hard: a quiet, left-aligned note after the window. */
  closing: z.strictObject({
    heading: z.string().min(1),
    body: z.string().min(1),
  }),
  draft: z.boolean(),
});

/**
 * The Teacher Library band: heading and copy, and one library card that is
 * the band's only call to action (#61).
 */
const librarySection = z.strictObject({
  heading: z.string().min(1),
  body: z.array(z.string().min(1)).min(1),
  card: z.strictObject({
    /** Mono label at the card's top right. */
    kind: z.string().min(1),
    /** The library's name, as printed on the card. */
    name: z.string().min(1),
    /** A short mono line under the name. */
    note: z.string().min(1),
    /** Written on the signature line. */
    holder: z.string().min(1),
    /** Printed under the signature line. */
    holderLabel: z.string().min(1),
    /** A made-up card number, digits in groups. The barcode is drawn from it. */
    number: z
      .string()
      .regex(/^\d+( \d+)*$/, 'Digits in groups, like 2 9412 0001'),
    /** The link text under the card. */
    action: z.string().min(1),
    /** A site path, optionally to a section on it (/teachers/#library). */
    href: z
      .string()
      .regex(
        /^\/([a-z0-9-]+\/)*(#[a-z0-9-]+)?$/,
        'Use a site path like /teachers/ or /teachers/#library',
      ),
  }),
  draft: z.boolean(),
});

/**
 * One thing we are doing under a pillar. `title` may be a `[TK: ...]` note
 * while we decide what goes there.
 */
const focusItem = z.strictObject({
  title: z.string().min(1),
  text: z.string().min(1).optional(),
});

/**
 * "What we do": the mission (from content/organization.ts), then the four
 * pillars as "what we focus on", each with one thing live now and one in the
 * works, then a line on taking many approaches at once.
 */
const whatWeDo = z.strictObject({
  heading: z.string().min(1),
  /** Names the pillars on Home, in plain words. */
  focusHeading: z.string().min(1),
  /** Labels for the two kinds of item under each pillar. */
  labels: z.strictObject({
    now: z.string().min(1),
    next: z.string().min(1),
  }),
  /**
   * One entry per pillar in content/organization.ts, in the same order: one
   * thing live now, with a link, and one thing in the works.
   */
  focus: z
    .array(
      z.strictObject({
        /** One word of the pillar, shown with the highlighter on its card. */
        highlight: z.string().min(1),
        now: focusItem.extend({ cta: callToAction }),
        next: focusItem,
      }),
    )
    .length(4),
  /** Accessible names for the dots and arrows beside the stack. */
  controls: z.strictObject({
    label: z.string().min(1),
    previous: z.string().min(1),
    next: z.string().min(1),
  }),
  /** Under the pillars: the mission and pillars in full, on About. */
  cta: callToAction,
  /** Closes the section: there is no single fix, so we try many things. */
  approach: z.string().min(1),
  draft: z.boolean(),
});

/**
 * The Valleyview band (#66): a navy band inviting Valleyview Grade 12s in.
 * Information only (D5): its links go to the grant page and to Contact.
 */
const valleyviewSection = z.strictObject({
  /** Lowercase mono mark, shown as selected text: which year of the grant. */
  year: z.string().min(1),
  /** Lowercase mono note after the mark. */
  yearNote: z.string().min(1),
  heading: z.string().min(1),
  body: z.array(z.string().min(1)).min(1),
  /** Short facts as a mono list, such as who and when. */
  details: z
    .array(
      z.strictObject({ term: z.string().min(1), value: z.string().min(1) }),
    )
    .min(1),
  /** The keycap to the grant page. Lowercase, as typed. */
  cta: callToAction,
  /** An invitation for other schools, to Contact. */
  school: callToAction,
  draft: z.boolean(),
});

export const sectionKeys = [
  'problem',
  'mission',
  'map',
  'library',
  'valleyview',
  'outreach',
  'partnerships',
] as const;

export type SectionKey = (typeof sectionKeys)[number];

export const homeSchema = z.strictObject({
  hero: z.strictObject({
    heading: z.string().min(1),
    lede: z.string().min(1),
    /**
     * Route for teachers, on paper: an index card (design system: RouteCards).
     * `href` may be a [TK] note while a destination is undecided; the card is
     * then not a link. Today it is the teachers page (D26).
     */
    teachers: z.strictObject({
      eyebrow: z.string().min(1),
      title: z.string().min(1),
      action: z.string().min(1),
      href: callToAction.shape.href,
    }),
    /** Route for Valleyview students, on navy: a window (design system: RouteCards). */
    valleyview: z.strictObject({
      /** Lowercase mono label in the title bar. */
      windowTitle: z.string().min(1),
      title: z.string().min(1),
      /** Typed line under the title, lowercase. */
      command: z.string().min(1),
      href: callToAction.shape.href,
      /** Shown when the window is closed, before the reopen button. */
      closedNote: z.string().min(1),
      /** Labels for the details the maximized window shows. */
      detailLabels: z.strictObject({
        who: z.string().min(1),
        what: z.string().min(1),
        asks: z.string().min(1),
        when: z.string().min(1),
      }),
    }),
    /**
     * The three prints on the whiteboard, one bridge per starting region:
     * top left (landscape), top right (portrait), then below (landscape).
     */
    images: z
      .array(
        z.strictObject({
          /** The region, shown as the print's caption. */
          place: z.string().min(1),
          label: z.string().min(1),
          /** One-line art direction for the photo to come (SPEC rule 8). */
          note: z.string().min(1),
          /** When it was taken, written on the back of the print. */
          taken: z.string().min(1),
        }),
      )
      .length(3),
  }),
  /**
   * The break straight after the hero: one question split across the two
   * worlds, the first half on paper, the second on navy.
   */
  question: z.strictObject({
    analog: z.string().min(1),
    digital: z.string().min(1),
  }),
  sections: z.strictObject({
    problem: whyWeExist,
    mission: whatWeDo,
    map: section.extend({
      regionsHeading: z.string().min(1),
      /** Under the map: how to read it. */
      mapCaption: z.string().min(1),
      /** Mono label on the close-up of the southwest. */
      insetLabel: z.string().min(1),
    }),
    library: librarySection,
    valleyview: valleyviewSection,
    outreach: section,
    partnerships: section,
  }),
  /** Section order after the hero. Every section appears exactly once (D30). */
  order: z
    .array(z.enum(sectionKeys))
    .length(sectionKeys.length)
    .refine((keys) => new Set(keys).size === keys.length, {
      message: 'Each section must appear exactly once',
    }),
});

export type Home = z.infer<typeof homeSchema>;
export type WhyWeExist = z.infer<typeof whyWeExist>;
export type WhatWeDo = z.infer<typeof whatWeDo>;
export type CallToAction = z.infer<typeof callToAction>;
