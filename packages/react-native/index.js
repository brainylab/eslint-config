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
          ['type']
        ],
        alphabetize: { order: 'asc', ignoreCase: true },
      },
    ],
  },
  settings: { react: { version: 'detect' } },
};
