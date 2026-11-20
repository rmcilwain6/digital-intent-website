// Valleyview Grant details (SPEC 7.4). Information only until D5 is decided.
import { valleyviewSchema } from '../src/schemas/valleyview';

export const valleyview = valleyviewSchema.parse({
  eligibility: 'Open to Grade 12 students at Valleyview.',
  award: '[TK: award amount, pending board confirmation]',
  recipientsGet: ['Funding', 'Mentorship'],
  recipientsAgreeTo: [
    'Taking part in mentorship',
    'Follow-up showing how the grant was used to learn',
  ],
  questions: [
    "What's the idea?",
    'Why are you the right person?',
    'How will this help?',
  ],
  timeline: [],
  howToApply: '[TK: how and when to apply, pending board decision D5]',
  faq: [
    {
      question: '[TK: question about nerves when pitching]',
      answer: '[TK: answer]',
    },
    {
      question: '[TK: question about feeling unqualified to apply]',
      answer: '[TK: answer]',
    },
  ],
});
