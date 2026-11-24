// About page sections (SPEC 7.2). Pillar wording is from the board vote of
// October 15, 2026 (SPEC section 2). The "How we work" lines are
// draft copy and need approval by a person. The values paragraph covers
// transparency, privacy by default and face-to-face over platform; the
// ed-tech business model value waits for the funding page (SPEC 7.5). "Our
// story" is draft copy from the founders' account and needs approval too.
import campusAvenue from '../src/assets/photos/campus-avenue-autumn.jpg';
import { aboutSchema } from '../src/schemas/about';

export const about = aboutSchema.parse({
  photo: {
    src: campusAvenue,
    alt: 'A student reads at a table under a long avenue of trees in autumn.',
    file: 'campus-avenue-autumn.jpg',
    size: '859 kb',
    taken: 'fall 2026',
  },
  // The pillars themselves live in content/organization.ts, shared with Home.
  pillars: {
    heading: 'Our strategic pillars',
  },
  howWeWork: {
    heading: 'How we work',
    paragraphs: [
      {
        text: 'We are remote first and in person by choice. Our board lives in {regions}, so that is where we start, but our work covers the whole province.',
        highlight: 'the whole province.',
      },
      {
        text: 'Our values include transparency, privacy and meeting people face to face. We work in the open, and our code and writing are public for anyone to read and reuse. This website protects your privacy by default, and our privacy page explains what that means. We meet teachers and students in person whenever we can, rather than sending them to another platform.',
        link: { text: 'our privacy page', href: '/privacy/' },
      },
    ],
  },
  story: {
    heading: 'Our story',
    paragraphs: [
      {
        text: 'We began in 2026, after many conversations with people who work in technology and in education. Those two groups often have competing interests, and the conversations kept pointing to the need for someone to bring them together. The Valleyview Social Innovation Grant came first, and it opened the door to more. Today we are people from both technology and education working together on that problem.',
        link: {
          text: 'Valleyview Social Innovation Grant',
          href: '/valleyview/',
        },
      },
    ],
  },
});
