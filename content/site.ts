// Site-wide navigation and footer copy, validated at build.
import { siteSchema } from '../src/schemas/site';

export const site = siteSchema.parse({
  home: { label: 'Home', href: '/' },
  primaryNav: [
    { label: 'For Teachers', href: '/teachers/' },
    { label: 'Valleyview Grant', href: '/valleyview/', featured: true },
    { label: 'Our Team', href: '/team/' },
    { label: 'About', href: '/about/' },
    {
      label: 'Indigenous outreach',
      href: '/indigenous-outreach/',
      phoneOnly: true,
    },
    { label: 'Contact', href: '/contact/' },
  ],
  footerNav: [
    { label: 'For Teachers', href: '/teachers/' },
    { label: 'About', href: '/about/' },
    { label: 'Our Team', href: '/team/' },
    { label: 'Valleyview Grant', href: '/valleyview/' },
    { label: 'Indigenous outreach', href: '/indigenous-outreach/' },
    { label: 'Contact', href: '/contact/' },
    { label: 'Privacy', href: '/privacy/' },
  ],
  // The footer's "Next path": the first two that aren't the current page,
  // so order matters.
  nextStops: [
    {
      label: 'Who we are',
      href: '/about/',
      description: 'Our mission, our four pillars, how we work and our story.',
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
  // Draft wording, pending approval by the outreach lead (decision record 0007).
  acknowledgement: {
    // Matches the opening of the outreach page's acknowledgement.
    text: 'We are grateful to live, work and play in British Columbia, the land of many First Nations who have cared for it since time immemorial.',
    link: {
      label: 'Our land acknowledgement and commitments',
      href: '/indigenous-outreach/',
    },
  },
  regionsIntro: 'We work across British Columbia. We are starting in',
  licence: 'Code MIT · writing CC BY 4.0',
  // Credit for maps that draw school districts (Home, Team). The footer
  // carries mapCredit on every page.
  districtMapCredit:
    'Map data: Natural Earth (public domain). School district boundaries and the close-up coastline: DataBC. Contains information licensed under the Open Government Licence – British Columbia.',
  // Every photo on the site is original (SPEC rule 8) and by the same person.
  photoCredit: 'All photography by Reed McIlwain.',
  mapCredit:
    'Map: Natural Earth. Elevation: Copernicus DEM, © DLR e.V. 2010–2014 and © Airbus Defence and Space GmbH 2014–2018, provided under COPERNICUS by the European Union and ESA.',
});
