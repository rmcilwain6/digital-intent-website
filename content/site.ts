// Site-wide navigation and footer copy, validated at build.
import { siteSchema } from '../src/schemas/site';

export const site = siteSchema.parse({
  home: { label: 'Home', href: '/' },
  primaryNav: [
    { label: 'For teachers', href: '/teachers/' },
    { label: 'About', href: '/about/' },
    { label: 'Our team', href: '/team/' },
    { label: 'Valleyview Grant', href: '/valleyview/', featured: true },
    { label: 'Contact', href: '/contact/' },
  ],
  footerNav: [
    { label: 'For teachers', href: '/teachers/' },
    { label: 'About', href: '/about/' },
    { label: 'Our team', href: '/team/' },
    { label: 'Valleyview Grant', href: '/valleyview/' },
    { label: 'Contact', href: '/contact/' },
    { label: 'Privacy', href: '/privacy/' },
  ],
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
    text: 'We are grateful to live, work and play in British Columbia, on the lands of the many First Nations who have cared for them since time immemorial, much of it unceded.',
    link: {
      label: 'Our commitment to reconciliation and Indigenous outreach',
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
