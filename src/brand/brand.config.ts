// Organization identity. Components read the name, contact details and
// brand assets from here, never from literals (SPEC section 6, rule 7).
// Every value is listed in README.md in this folder.

export interface SocialLink {
  /** Visible link text, e.g. the platform name. */
  label: string;
  href: string;
}

export interface SocialImage {
  /** Path under `public/`, 1200 × 630. */
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface Brand {
  /** True until the final brand lands. Layouts show a "Placeholder brand" label while it is set. */
  placeholder: boolean;
  name: string;
  shortName: string;
  tagline: string;
  /** Bare domain, no protocol. */
  domain: string;
  email: string;
  /** Address of the privacy officer (a role, not a person), named on the Privacy page as BC's PIPA asks. */
  privacyEmail: string;
  social: readonly SocialLink[];
  /** Where we start, not our boundary (SPEC section 2). */
  regions: readonly string[];
  /** Paths under `public/`. */
  logo: {
    /** Wordmark for paper (Analog) grounds. */
    full: string;
    /** Wordmark for navy (Digital) grounds, e.g. the site header and footer. */
    onDark: string;
    /** Square icon. */
    mark: string;
    /** Logo files have their natural size here, for width and height attributes. */
    width: number;
    height: number;
    alt: string;
  };
  favicon: string;
  /** The sharing image for every page that doesn't name its own. */
  socialImage: SocialImage;
  /** Sharing images for particular pages, picked with BaseLayout's `socialImage` prop. */
  pageSocialImages: Readonly<Record<string, SocialImage>>;
}

const name = 'Digital Intent Learning Society';

export const brand = {
  placeholder: false,
  name,
  shortName: 'Digital Intent',
  tagline: '[TK: tagline, from the brand work]',
  domain: 'digitalintent.ca',
  email: 'helloworld@digitalintent.ca',
  // An alias for the privacy officer. Create it before launch.
  privacyEmail: 'privacy@digitalintent.ca',
  social: [],
  regions: ['Kamloops', 'Victoria', 'Vancouver'],
  logo: {
    full: '/brand/logo.svg',
    onDark: '/brand/logo-on-dark.svg',
    mark: '/brand/logo-mark.svg',
    width: 610,
    height: 155,
    alt: name,
  },
  favicon: '/brand/favicon.svg',
  socialImage: {
    src: '/brand/og-default.png',
    alt: 'Every student learns how the natural world works. What about the digital one? Digital Intent, digitalintent.ca.',
    width: 1200,
    height: 630,
  },
  pageSocialImages: {
    valleyview: {
      src: '/brand/og-valleyview.png',
      alt: "Valleyview Social Innovation Grant. Pick a hard problem. We'll put $2,000 behind it. $2,000 plus mentorship, for Valleyview Grade 12s. A rough idea is enough. Digital Intent.",
      width: 1200,
      height: 630,
    },
  },
} as const satisfies Brand;
