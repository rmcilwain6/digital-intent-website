// 404 page (SPEC 7.8, issue #14). Heading and lede are in content/pages/404.md.
import { notFoundSchema } from '../src/schemas/notFound';

export const notFound = notFoundSchema.parse({
  eyebrow: 'Error 404',
  homeLabel: 'Go to the home page',
  othersHeading: 'Or try one of these',
  trace: {
    examplePath: '/abuot/',
    found: 'found',
    notFound: 'not found (404)',
    caption:
      "The path to this page stops at a page that doesn't exist. Styled like traceroute, a tool that shows the steps a request takes across a network.",
  },
  anatomy: {
    heading: "What's in a web address",
    introExample: 'Here is an address with a typo, taken apart.',
    introVisited: 'Here is the address you tried, taken apart.',
    parts: {
      scheme: {
        label: 'Scheme',
        description:
          'How your browser talks to the server. The "s" in https means the connection is encrypted.',
      },
      subdomain: {
        label: 'Subdomain',
        description:
          'An optional name in front of the domain, often for a separate part of a site.',
      },
      domain: {
        label: 'Domain name',
        description:
          'The main name of the site. Together with the top-level domain after it, it is the name a person or organization registers.',
      },
      tld: {
        label: 'Top-level domain',
        description:
          'The last part of the name. Some are for countries, like .ca for Canada.',
      },
      port: {
        label: 'Port',
        description:
          'Which numbered door on the server to use. Browsers usually leave it out.',
      },
      path: {
        label: 'Path',
        description:
          'Which page on the site you asked for. This is the part we could not find.',
      },
      query: {
        label: 'Query string',
        description: 'Extra details passed to the page, such as a search term.',
      },
      fragment: {
        label: 'Fragment',
        description:
          'A spot inside the page. Your browser uses it to scroll and does not send it to the server.',
      },
    },
  },
});
