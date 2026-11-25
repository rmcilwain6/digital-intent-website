// Splits a web address into the parts the 404 page explains. Runs at build
// time (for the example address) and in the browser (for the address the
// visitor tried), so it has no dependencies. Nothing here leaves the page.

export const urlPartKinds = [
  'scheme',
  'subdomain',
  'domain',
  'tld',
  'port',
  'path',
  'query',
  'fragment',
] as const;

export type UrlPartKind = (typeof urlPartKinds)[number];

export interface UrlPart {
  kind: UrlPartKind;
  text: string;
}

/** Percent-decodes for display; leaves the text as it was if it is malformed. */
function decode(text: string): string {
  try {
    return decodeURIComponent(text);
  } catch {
    return text;
  }
}

/**
 * The address in reading order. The domain is the last two labels of the
 * host name (`digitalintent.ca`); anything before them is the subdomain. That
 * is a simplification: names such as `example.co.uk` split differently.
 */
export function splitUrl(url: URL): UrlPart[] {
  const parts: UrlPart[] = [{ kind: 'scheme', text: `${url.protocol}//` }];

  const labels = url.hostname.split('.');
  const last = labels.at(-1) ?? '';
  // An IP address or a one-word host such as `localhost` has no TLD.
  if (labels.length >= 2 && !/^\d+$/.test(last)) {
    const tld = labels.pop() ?? '';
    const domain = labels.pop() ?? '';
    if (labels.length > 0) {
      parts.push({ kind: 'subdomain', text: `${labels.join('.')}.` });
    }
    parts.push({ kind: 'domain', text: domain });
    parts.push({ kind: 'tld', text: `.${tld}` });
  } else {
    parts.push({ kind: 'domain', text: url.hostname });
  }

  if (url.port) parts.push({ kind: 'port', text: `:${url.port}` });
  parts.push({ kind: 'path', text: decode(url.pathname) });
  if (url.search) parts.push({ kind: 'query', text: decode(url.search) });
  if (url.hash) parts.push({ kind: 'fragment', text: decode(url.hash) });
  return parts;
}

/** Shortens long text for the traceroute lines, which must fit a phone. */
export function shorten(text: string, max: number): string {
  return text.length > max ? `${text.slice(0, max - 1)}…` : text;
}

/**
 * Pads each hop with dot leaders to one column, as traceroute output does:
 * `digitalintent.ca ...... `.
 */
export function dotLeaders(hops: readonly string[]): string[] {
  const column = Math.max(...hops.map((hop) => hop.length)) + 7;
  return hops.map((hop) => `${hop} `.padEnd(column, '.'));
}
