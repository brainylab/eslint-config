module.exports = {
  extends: ['next'],
  plugins: ['eslint-plugin-import-helpers'],
  rules: {
    'import-helpers/order-imports': [
      'warn',
      {
        newlinesBetween: 'always',
        groups: [
          ['/^react/', '/^next/'],
          'module',
          ['/^hooks/', '/^contexts/'],
          ['/^shared/', '/^core/', '/^modules/', '/^config/', '/^components/'],
          ['/^utils/', '/^service/'],
          ['/^interfaces/'],
          ['parent', 'sibling', 'index'],
        ],
        alphabetize: { order: 'asc', ignoreCase: false },
      },
    ],
  },
  settings: { react: { version: 'detect' } },
};
