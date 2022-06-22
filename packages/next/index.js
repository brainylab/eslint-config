module.exports = {
  extends: ['eslint-config-next'],
  rules: {
    'import-helpers/order-imports': [
      'warn',
      {
        newlinesBetween: 'always',
        groups: [
          '/^react/',
          ['module'],
          ['/^hooks/'],
          ['/^shared/', '/^core/', '/^modules/', '/^config/', '/^components/'],
          ['/^utils/', '/^service/'],
          ['/^interfaces/'],
          ['parent', 'sibling', 'index'],
        ],
        alphabetize: { order: 'asc', ignoreCase: true },
      },
    ],
  },
  settings: { react: { version: 'detect' } },
};