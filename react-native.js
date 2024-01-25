/* eslint-disable @typescript-eslint/no-var-requires */
const defaultRules = require('./default-rules');

module.exports = {
  env: {
    es6: true,
  },
  extends: ['@brainylab/eslint-config/react'],
  plugins: [
    '@typescript-eslint',
    'eslint-plugin-import-helpers',
    'react-native',
    '@react-native',
  ],
  rules: {
    ...defaultRules,
    '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
    'react/no-unstable-nested-components': 'off',
    'react-native/no-inline-styles': 'off',
    'import-helpers/order-imports': [
      'warn',
      {
        newlinesBetween: 'always',
        groups: [
          ['/^react/', '/^react-native/'],
          ['/@brainylab/', 'module'],
          [
            '/^hooks/',
            '/^@hooks/',
            '/^contexts/',
            '/^@contexts/',
            '/^reducers/',
            '/^@reducers/',
          ],
          [
            '/^database/',
            '/^@database/',
            '/^modules/',
            '/^@modules/',
            '/^components/',
            '/^@components/',
            '/^screens/',
            '/^@screens/',
            '/^routes/',
            '/^@routes/',
          ],
          ['/^utils/', '/^@utils/', '/^services/', '/^@services/'],
          ['/^interfaces/', '/^@interfaces/'],
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
  ignorePatterns: ['node_modules'],
};
