// Contact page (SPEC 7.6, issue #12). The topics are the list in SPEC 7.6;
// their descriptions and the privacy note are agent drafts and need approval
// by a person. Each topic opens the visitor's own email app with the subject
// filled in, so messages arrive already sorted.
import { contactSchema } from '../src/schemas/contact';

export const contact = contactSchema.parse({
  emailLabel: 'Email',
  topics: {
    heading: 'What to write to us about',
    intro:
      'Pick a topic and your email app opens with the subject filled in. Anything else is welcome too.',
    items: [
      {
        label: 'Pro-D and workshops',
        description:
          'Sessions for teachers and school staff on technology in the classroom.',
        subject: 'Pro-D and workshops',
      },
      {
        label: 'School visits',
        description: 'Having us visit your school or classroom.',
        subject: 'School visit',
      },
      {
        label: 'Partnerships',
        description:
          'Organizations, businesses and groups working toward better outcomes for students, teachers and parents.',
        subject: 'Partnership',
      },
      {
        label: 'The Valleyview Grant',
        description: 'Questions about the grant for Grade 12 students.',
        subject: 'Valleyview Grant question',
      },
      {
        label: 'Media',
        description: 'Interviews, comment and stories.',
        subject: 'Media request',
      },
    ],
  },
  privacyNote:
    'Writing to us opens your own email app, and your message goes straight to our inbox. This website does not see or keep what you write.',
});
