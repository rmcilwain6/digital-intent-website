import { getEntry } from 'astro:content';

/** Loads a page's copy from content/pages/<id>.md, failing the build if it is missing. */
export async function getPage(id: string) {
  const page = await getEntry('pages', id);
  if (!page) {
    throw new Error(`Missing page content: content/pages/${id}.md`);
  }
  return page;
}
