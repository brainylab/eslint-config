module.exports = {
  extends: ['next'],
  plugins: ['@typescript-eslint', 'eslint-plugin-import-helpers'],
  rules: {
    'import-helpers/order-imports': [
      'warn',
      {
        newlinesBetween: 'always',
        groups: [
          ['/^react/', '/^next/', 'type'],
          ['/@brainylab/', 'type'],
          ['module', 'type'],
          ['/^hooks/', '/^contexts/', 'type'],
          [
            '/^shared/',
            '/^core/',
            '/^modules/',
            '/^config/',
            '/^components/',
            '/^layouts/',
            'type'
          ],
          ['/^utils/', '/^service/', 'type'],
          ['/^interfaces/', 'type'],
          ['parent', 'sibling', 'index', 'type'],
        ],
        alphabetize: { order: 'asc', ignoreCase: true },
      },
    ],
  },
  settings: { react: { version: 'detect' } },
};
