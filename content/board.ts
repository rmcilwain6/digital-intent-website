// Board member cards (SPEC 7.3). Fictional placeholders only: a member's real
// details are committed only after that member has agreed to them, because git
// history is public and permanent.
import { boardSchema } from '../src/schemas/board';

const portraitNote =
  'Head-and-shoulders portrait, original photography. Placeholder until portraits are shot.';

export const board = boardSchema.parse([
  {
    name: '[TK: board member 1 name, with their agreement]',
    photo: { placeholder: true, note: portraitNote },
    role: '[TK: board member 1 role]',
    region: '[TK: board member 1 home region]',
  },
  {
    name: '[TK: board member 2 name, with their agreement]',
    photo: { placeholder: true, note: portraitNote },
    role: '[TK: board member 2 role]',
    region: '[TK: board member 2 home region]',
  },
  {
    name: '[TK: board member 3 name, with their agreement]',
    photo: { placeholder: true, note: portraitNote },
    role: '[TK: board member 3 role]',
    region: '[TK: board member 3 home region]',
  },
  {
    name: '[TK: board member 4 name, with their agreement]',
    photo: { placeholder: true, note: portraitNote },
    role: '[TK: board member 4 role]',
    region: '[TK: board member 4 home region]',
  },
  {
    name: '[TK: board member 5 name, with their agreement]',
    photo: { placeholder: true, note: portraitNote },
    role: '[TK: board member 5 role]',
    region: '[TK: board member 5 home region]',
  },
]);
