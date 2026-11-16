// Site-wide navigation and footer copy, validated at build.
import { siteSchema } from '../src/schemas/site';

export const site = siteSchema.parse({
  primaryNav: [
    { label: 'About', href: '/about/' },
    { label: 'Board', href: '/board/' },
    { label: 'Valleyview Grant', href: '/valleyview/' },
    { label: 'Contact', href: '/contact/' },
  ],
  footerNav: [
    { label: 'Contact', href: '/contact/' },
    { label: 'Privacy', href: '/privacy/' },
  ],
  regionsIntro: 'We work across British Columbia. We are starting in',
});
