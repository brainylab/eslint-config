import eslintTypescript, { parser } from 'typescript-eslint';
import type { FlatESLintConfig } from 'eslint-define-config';

export const typescript = eslintTypescript.config({
  extends: [...eslintTypescript.configs.recommended],
  languageOptions: {
    parserOptions: {
      parser,
      ecmaVersion: 'latest',
      project: ['./tsconfig.json'],
      sourceType: 'module',
    },
  },
  files: ['**/*.{ts,tsx}'],
  ignores: [
    '**/node_modules/**/*',
    '**/build/**/*',
    '**/coverage/**/*',
    '**/dist/*',
    '**/.next/**/*',
    '**/*.d.ts',
  ],
  rules: {
    '@typescript-eslint/no-explicit-any': ['warn', { ignoreRestArgs: true }],
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/consistent-type-exports': 'error',
    '@typescript-eslint/consistent-type-imports': [
      'error',
      { fixStyle: 'separate-type-imports' },
    ],
  },
}) as FlatESLintConfig[];
