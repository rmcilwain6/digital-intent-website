// Schema for the 404 page (content/not-found.ts, SPEC 7.8). The heading and
// the plain sentence under it are Markdown in content/pages/404.md.
import { z } from 'astro/zod';
import { urlPartKinds, type UrlPartKind } from '../lib/url-parts';

/** What one part of a web address is called and what it does. */
const urlPartCopy = z.strictObject({
  label: z.string().min(1),
  description: z.string().min(1),
});

/** Copy for every kind of part, so a missing one fails the build. */
const partsCopy = z.strictObject(
  Object.fromEntries(urlPartKinds.map((kind) => [kind, urlPartCopy])) as Record<
    UrlPartKind,
    typeof urlPartCopy
  >,
);

export const notFoundSchema = z.strictObject({
  /** Small label above the heading, e.g. "Error 404". */
  eyebrow: z.string().min(1),
  /** The main way out: a key that goes to Home. */
  homeLabel: z.string().min(1),
  /** Heading over the list of other pages (the primary navigation). */
  othersHeading: z.string().min(1),
  /**
   * The traceroute figure. Decorative: hidden from screen readers, which get
   * the caption instead.
   */
  trace: z.strictObject({
    /** A mistyped path shown as the example, e.g. `/abuot/`. */
    examplePath: z.string().regex(/^\/[a-z0-9-]+\/$/),
    found: z.string().min(1),
    notFound: z.string().min(1),
    caption: z.string().min(1),
  }),
  /**
   * The address taken apart. Without JavaScript it shows the example address;
   * with it, the address the visitor tried, read by a script on the page.
   */
  anatomy: z.strictObject({
    heading: z.string().min(1),
    /** Intro over the example address (no JavaScript). */
    introExample: z.string().min(1),
    /** Intro over the visitor's own address. */
    introVisited: z.string().min(1),
    parts: partsCopy,
  }),
});

export type NotFound = z.infer<typeof notFoundSchema>;
