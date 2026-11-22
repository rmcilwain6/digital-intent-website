// Site-wide navigation and footer copy, validated at build.
import { siteSchema } from '../src/schemas/site';

export const site = siteSchema.parse({
  home: { label: 'Home', href: '/' },
  primaryNav: [
    { label: 'About', href: '/about/' },
    { label: 'Board', href: '/board/' },
    { label: 'Valleyview Grant', href: '/valleyview/', featured: true },
    { label: 'Contact', href: '/contact/' },
  ],
  footerNav: [
    { label: 'About', href: '/about/' },
    { label: 'Board', href: '/board/' },
    { label: 'Valleyview Grant', href: '/valleyview/' },
    { label: 'Contact', href: '/contact/' },
    { label: 'Privacy', href: '/privacy/' },
  ],
  nextStops: [
    {
      label: 'Who we are',
      href: '/about/',
      description: 'Our mission, our four pillars and how we work.',
    },
    {
      label: 'The Valleyview Grant',
      href: '/valleyview/',
      description: 'Funding and mentorship for Grade 12 students with an idea.',
    },
    {
      label: 'Talk to us',
      href: '/contact/',
      description: 'Pro-D, school visits, partnerships and media.',
    },
  ],
  regionsIntro: 'We work across British Columbia. We are starting in',
  licence: 'Code MIT · writing CC BY 4.0',
  mapCredit:
    'Map: Natural Earth. Elevation: Copernicus DEM, © DLR e.V. 2010–2014 and © Airbus Defence and Space GmbH 2014–2018, provided under COPERNICUS by the European Union and ESA.',
});
