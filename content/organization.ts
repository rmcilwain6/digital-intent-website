// Mission, pillars and goals (SPEC 2). Statements of the organization's
// position: a human approves every change (SPEC 12.5).
import { organizationSchema } from '../src/schemas/organization';

export const organization = organizationSchema.parse({
  mission: '[TK: mission statement, pending board ratification]',
  // Board vote, Oct 15 2026 (SPEC 2).
  pillars: [
    {
      title: 'Be an independent voice on technology in BC education.',
      definition: '[TK: approved one-line definition]',
    },
    {
      title:
        'Build lasting, face-to-face partnerships with educators and communities.',
      definition: '[TK: approved one-line definition]',
    },
    {
      title: 'Help learners understand, question and shape the digital world.',
      definition: '[TK: approved one-line definition]',
    },
    {
      title: 'Empower young people to build their ideas now.',
      definition: '[TK: approved one-line definition]',
    },
  ],
  goals: ['[TK: goals, pending the strategic framework]'],
});
