// @ts-check
import js from '@eslint/js';
import { defineConfig } from 'eslint/config';
import astro from 'eslint-plugin-astro';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default defineConfig(
  { ignores: ['dist/', '.astro/', '.wrangler/', 'node_modules/'] },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...astro.configs.recommended,
  // Uses eslint-plugin-jsx-a11y-x, the maintained fork that supports ESLint 10.
  ...astro.configs['jsx-a11y-recommended'],
  {
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
    },
  },
  {
    rules: {
      // Lists styled with list-style: none lose their list role in Safari
      // and VoiceOver, so role="list" on them is deliberate, not redundant.
      'astro/jsx-a11y/no-redundant-roles': [
        'error',
        { ul: ['list'], ol: ['list'] },
      ],
    },
  },
);
