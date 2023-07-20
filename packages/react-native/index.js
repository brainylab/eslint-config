module.exports = {
  extends: ['@react-native'],
  plugins: ['@typescript-eslint', 'eslint-plugin-import-helpers'],
  rules: {
    'react/no-unstable-nested-components': 'off',
    'react-native/no-inline-styles': 'off',
    'import-helpers/order-imports': [
      'warn',
      {
        newlinesBetween: 'always',
        groups: [
          '/^react/',
          '/^react-native/',
          '/@brainylab/',
          'module',
          ['/^hooks/', '/^contexts/', '/^reducers/'],
          [
            '/^shared/',
            '/^database/',
            '/^modules/',
            '/^config/',
            '/^components/',
            '/^screens/',
          ],
          ['/^utils/', '/^services/'],
          ['/^interfaces/'],
          ['parent', 'sibling', 'index'],
        ],
        alphabetize: { order: 'asc', ignoreCase: true },
      },
    ],
  },
  settings: { react: { version: 'detect' } },
};
