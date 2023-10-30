module.exports = {
  extends: ['next'],
  plugins: ['@typescript-eslint', 'eslint-plugin-import-helpers'],
  rules: {
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
          ['type']
        ],
        alphabetize: { order: 'asc', ignoreCase: true },
      },
    ],
  },
  settings: { react: { version: 'detect' } },
};
