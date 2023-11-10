module.exports = {
  root: true,
  env: {
    es2021: true,
    node: true,
    jest: true,
    'vitest-globals/env': true,
  },
  reportUnusedDisableDirectives: true,
  extends: [
    'standard',
    'plugin:@typescript-eslint/recommended',
    'plugin:vitest-globals/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'eslint-plugin-import-helpers'],
  rules: {
    camelcase: 'off',
    'no-param-reassign': 'off',
    'no-use-before-define': 'off',
    'import/no-duplicates': 'off',
    'no-useless-constructor': 'off',
    'no-useless-catch': 'off',
    '@typescript-eslint/adjacent-overload-signatures': 'off',
    '@typescript-eslint/adjacent-overload-signatures': 'off',
    "@typescript-eslint/no-explicit-any": "warn",
    'import-helpers/order-imports': [
      'warn',
      {
        newlinesBetween: 'always',
        groups: [
          ['module', 'type'],
          ['/@brainylab/', 'type'],
          ['/^@modules/', '/^@core/', '/^@shared/', 'type'],
          ['/^@utils/', '/^@service/', '/^@config/', 'type'],
          ['/^@interfaces/', '/^@types/', '/^types/', 'type'],
          ['parent', 'sibling', 'index', 'type'],
        ],
        alphabetize: { order: 'asc', ignoreCase: true },
      },
    ],
  },
  settings: {
    'import/parsers': {
      [require.resolve('@typescript-eslint/parser')]: ['.ts', '.tsx', '.d.ts'],
    },
    'import/resolver': {
      typescript: {
        project: ['./*/**/tsconfig.json', './tsconfig.json'],
      },
    },
  },
};
