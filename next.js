/* eslint-disable @typescript-eslint/no-var-requires */
const defaultRules = require('./default-rules');

module.exports = {
  extends: [
    'next',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  "parserOptions": {
    project: "./tsconfig.json"
  },
  plugins: ['@typescript-eslint', 'eslint-plugin-import-helpers'],
  rules: {
    ...defaultRules,
    'import-helpers/order-imports': [
      'warn',
      {
        newlinesBetween: 'always',
        groups: [
          ['/^react/', '/^next/'],
          '/@brainylab/',
          'module',
          ['/^hooks/', '/^contexts/'],
          [
            '/^shared/',
            '/^core/',
            '/^modules/',
            '/^config/',
            '/^components/',
            '/^layouts/',
          ],
          ['/^utils/', '/^service/'],
          ['/^interfaces/'],
          ['parent', 'sibling', 'index'],
          ['type'],
        ],
        alphabetize: { order: 'asc', ignoreCase: true },
      },
    ],
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/parsers': {
      [require.resolve('@typescript-eslint/parser')]: ['.ts', '.tsx', '.d.ts'],
    },
  },
};
