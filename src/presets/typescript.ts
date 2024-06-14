import eslintTypescript from 'typescript-eslint';
import type { FlatESLintConfig } from 'eslint-define-config';

const typescriptCore = eslintTypescript.config({
  extends: [...eslintTypescript.configs.recommended],
  languageOptions: {
    parserOptions: {
      parser: eslintTypescript.parser,
      project: './tsconfig.json',
      ecmaVersion: 'latest',
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
});

export const typescript = [
  ...typescriptCore,
  {
    files: ['**/*.d.ts'],
    rules: {
      'eslint-comments/no-unlimited-disable': 'off',
      'import/no-duplicates': 'off',
      'unused-imports/no-unused-vars': 'off',
    },
  },
  {
    files: ['**/*.{test,spec}.ts?(x)'],
    rules: {
      'no-unused-expressions': 'off',
    },
  },
  {
    files: ['**/*.?([cm])js', '**/*.cjs'],
    rules: {
      '@typescript-eslint/no-require-imports': 'off',
      '@typescript-eslint/no-var-requires': 'off',
    },
  },
  {
    files: ['**/*.d.ts'],
    rules: {
      'no-restricted-syntax': [
        'error',
        'ForInStatement',
        'LabeledStatement',
        'WithStatement',
      ],
    },
  },
] as FlatESLintConfig[];
