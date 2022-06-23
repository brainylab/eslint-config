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
        ],
        alphabetize: { order: 'asc', ignoreCase: true },
      },
    ],
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'interface',
        format: ['PascalCase'],
        custom: {
          regex: '^I[A-Z]',
          match: true,
        },
      },
    ],
  },
  settings: { react: { version: 'detect' } },
};
