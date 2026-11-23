// The question bank (SPEC 7.1, Home: "Do you know the answer?"). Five
// questions on five different ideas for launch; the bank can grow, with
// longer answers, over time. Statements of the organization's position: a
// human approves each one and sets `draft: false` (SPEC 12.5).
import { questionBankSchema } from '../src/schemas/questions';

export const questions = questionBankSchema.parse([
  {
    slug: 'restart',
    concept: 'memory and state',
    question: 'Why does turning it off and on again fix so many problems?',
    answer:
      'A running computer keeps a lot in its short-term memory: open programs, half-finished tasks, and small mistakes that pile up. Turning it off clears all of that. When it starts again, everything begins from a clean, known state, the one its makers tested.',
    draft: true,
  },
  {
    slug: 'visiting-a-website',
    concept: 'how the web works',
    question:
      'What actually happens when you type youtube.com and press Enter?',
    answer:
      'Your browser first looks up the name, like a phone book, to find the address of a computer that can answer. It sends a request, and the company’s computers send back code, text and video, which your browser puts together into a page. Most big sites also load code that records how you use them.',
    draft: true,
  },
  {
    slug: 'the-cloud',
    concept: 'physical infrastructure',
    question: 'Where, physically, is “the cloud”?',
    answer:
      'In buildings full of computers called data centres, mostly owned by a few large companies and joined by cables, many of them under the ocean. The cloud is someone else’s computer, and it runs on a lot of electricity, and often water for cooling.',
    draft: true,
  },
  {
    slug: 'chatbots',
    concept: 'artificial intelligence',
    question:
      'When you ask a chatbot something, how does it decide what to say?',
    answer:
      'It usually isn’t looking anything up. It predicts, one piece at a time, the words most likely to come next, based on patterns in a huge amount of text it learned from. That’s why it can sound sure and still be wrong.',
    draft: true,
  },
  {
    slug: 'free-apps',
    concept: 'business models',
    question: 'If a social media app is free, how does it make money?',
    answer:
      'Mostly by selling ads, shown to you based on what the app has learned about you. The more time you spend, the more ads it can show, so the app is designed to keep you scrolling.',
    draft: true,
  },
]);
