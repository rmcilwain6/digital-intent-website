// Mission, pillars and goals (SPEC 2). Statements of the organization's
// position: a human approves every change (SPEC 12.5).
import { organizationSchema } from '../src/schemas/organization';

export const organization = organizationSchema.parse({
  // The site's working wording, shared by Home and About. Not yet voted on;
  // the board will ratify a mission after launch (SPEC 7.2).
  mission:
    'We help young people in BC understand, question and build with the technology shaping their lives, working alongside their teachers, schools and families.',
  // Board vote, Oct 15 2026 (SPEC 2).
  pillars: [
    'Be an independent voice on technology in BC education.',
    'Build lasting, face-to-face partnerships with educators and communities.',
    'Help learners understand, question and shape the digital world.',
    'Empower young people to build their ideas now.',
  ],
  goals: ['[TK: goals, pending the strategic framework]'],
});
