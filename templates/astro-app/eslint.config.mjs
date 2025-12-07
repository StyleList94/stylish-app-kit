// @ts-check

import { defineConfig, globalIgnores } from 'eslint/config';
import globals from 'globals';
import astroESLintParser from 'astro-eslint-parser';
import tsESLintParser from '@typescript-eslint/parser';

import { configs as astroConfigs } from 'eslint-plugin-astro';
import stylish from 'eslint-config-stylish';
import stylishTypeScript from 'eslint-config-stylish/typescript';
import eslintConfigPrettier from 'eslint-config-prettier/flat';

export default defineConfig(
  globalIgnores(['node_modules', 'dist', '.astro']),
  ...astroConfigs.recommended,
  ...astroConfigs['jsx-a11y-strict'],
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,astro}'],
    extends: [stylish],
    rules: {
      'import/prefer-default-export': 'off',
    },
  },
  {
    files: ['**/*.{ts,mts,cts}'],
    languageOptions: {
      parserOptions: {
        project: './tsconfig.json',
        ecmaVersion: 12,
        sourceType: 'module',
      },
    },
    extends: [stylishTypeScript],
  },
  {
    files: ['**/*.astro'],
    languageOptions: {
      parser: astroESLintParser,
      parserOptions: {
        parser: tsESLintParser,
        extraFileExtensions: ['.astro'],
        project: './tsconfig.json',
        ecmaVersion: 12,
        sourceType: 'module',
      },
      globals: {
        ...globals.browser,
      },
    },
    extends: [stylishTypeScript],
    rules: {
      'astro/prefer-class-list-directive': 'warn',
      'import/namespace': 'off',
    },
  },
  eslintConfigPrettier,
);
