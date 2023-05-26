module.exports = {
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
    'plugin:prettier/recommended',
    'plugin:vitest-globals/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'eslint-plugin-import-helpers'],
  rules: {
    'prettier/prettier': ['error'],
    camelcase: 'off',
    'no-param-reassign': 'off',
    'no-use-before-define': 'off',
    'import/no-duplicates': 'off',
    'no-useless-constructor': 'off',
    'no-useless-catch': 'off',
    '@typescript-eslint/adjacent-overload-signatures': 'off',
    'import-helpers/order-imports': [
      'warn',
      {
        newlinesBetween: 'always',
        groups: [
          'module',
          '/@brainylab/',
          ['/^@modules/', '/^@core/', '/^@shared/'],
          ['/^@utils/', '/^@service/', '/^@config/'],
          ['/^@interfaces/', '/^@types/', '/^types/'],
          ['parent', 'sibling', 'index'],
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
