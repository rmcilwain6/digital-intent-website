// Fonts the layout preloads, so the body text font starts downloading with
// the page instead of after the stylesheet. Only the body face: italic and
// mono load when a page uses them. The URL is the same hashed file that
// fonts.css points at.
import sourceSans from './fonts/source-sans-3-wght.woff2?url';

export const preloadFonts: readonly string[] = [sourceSans];
