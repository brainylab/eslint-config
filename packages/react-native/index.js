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
          ['/^react/', '/^react-native/', 'type'],
          ['/@brainylab/', 'module', 'type'],
          [
            '/^hooks/',
            '/^@hooks/',
            '/^contexts/',
            '/^@contexts/',
            '/^reducers/',
            '/^@reducers/',
            'type'
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
            'type'
          ],
          ['/^utils/', '/^@utils/', '/^services/', '/^@services/', 'type'],
          ['/^interfaces/', '/^@interfaces/', 'type'],
          ['parent', 'sibling', 'index', 'type'],
        ],
        alphabetize: { order: 'asc', ignoreCase: true },
      },
    ],
  },
  settings: { react: { version: 'detect' } },
};
