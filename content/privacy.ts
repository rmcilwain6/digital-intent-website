// Privacy page (SPEC 7.7, issue #13). Agent draft: a person must approve this
// text before launch (SPEC 12.5). How Valleyview applications are collected
// is waiting on a board decision (D5), so it shows as [TK] notes. Other facts not yet confirmed are left out
// for now, not guessed: the approval date, where Cloudflare is based and what
// it logs, and the email provider and where it stores mail. Add each when known.
//
// Page view counting (D7) is a stretch goal and not built, so it is not
// mentioned. If it ships (#17), add it here before it goes live: the tool and
// where it is based under services, what it counts under collects, and a
// "Page views" line at a glance (SPEC 10: the Privacy page names the tool).
//
// The site stores nothing in the visitor's browser, not even a theme
// preference: there is no theme toggle (decision record 0005).
import { privacySchema } from '../src/schemas/privacy';

export const privacy = privacySchema.parse({
  collects: {
    heading: 'What this site collects',
    paragraphs: [
      'Nothing about you. There are no accounts, no forms and no sign-ups on this site. Anything that asks for your details, like an application, is on a separate site we link to. Those are listed below.',
    ],
  },
  doesNot: {
    heading: 'What this site does not do',
    items: [
      'Set cookies, or store anything in your browser. Not even a setting.',
      'Send what you type anywhere. There is nothing to type into.',
      'Run ads, trackers or fingerprinting, or share data with ad networks.',
      'Load fonts, images or scripts from other companies. Everything comes from our own site.',
    ],
  },
  services: {
    heading: 'Services that run this site',
    intro:
      'These services put the site online. We do not give them any personal information.',
    columns: ['Service', 'What it does', 'Where it is based'],
    items: [
      {
        name: 'Cloudflare Workers',
        role: 'Hosts the site and sends pages to your browser.',
      },
    ],
  },
  linked: {
    heading: 'Services we link to',
    intro:
      'Some links take you to other services. Once you are there, their privacy notice applies, not this one. Each one stores your information in its own place.',
    items: [
      {
        when: 'If you email us',
        name: 'Your email app',
        description:
          'Our email address opens your own email app. Your message goes from there to our inbox, not through this site.',
      },
      {
        when: 'If you apply for the grant',
        name: 'Valleyview applications',
        description:
          '[TK: how and where applications are collected, pending D5]',
        stored: '[TK: where applications are stored, pending D5]',
        notice: {
          label: 'Privacy notice',
          href: "[TK: the application tool's privacy notice, pending D5]",
        },
      },
    ],
  },
  glance: {
    heading: 'At a glance',
    items: [
      { label: 'Personal information', value: 'none' },
      { label: 'Cookies', value: '0' },
      { label: 'Trackers', value: '0' },
      { label: 'Forms', value: '0' },
      { label: 'Outside requests', value: '0' },
    ],
  },
  questions: {
    heading: 'Questions',
    lead: 'Email us at',
  },
});
