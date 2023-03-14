module.exports = {
  env: {
    es2021: true,
    node: true,
    jest: true,
  },
  reportUnusedDisableDirectives: true,
  extends: [
    'standard',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
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
    'no-useless-constructor': 'off',
    'no-param-reassign': 'off',
    '@typescript-eslint/no-use-before-define': [
      'error',
      {
        functions: true,
        classes: true,
        variables: false,
        allowNamedExports: false,
      },
    ],
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
