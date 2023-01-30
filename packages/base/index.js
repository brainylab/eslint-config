module.exports = {
  env: {
    es2020: true,
    node: true,
    jest: true,
  },
  reportUnusedDisableDirectives: true,
  extends: [
    'airbnb-base',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'eslint-plugin-import-helpers', 'prettier'],
  rules: {
    camelcase: 'off',
    'prettier/prettier': 'error',
    'class-methods-use-this': 'off',
    'no-shadow': 'off',
    'no-console': 'off',
    'no-use-before-define': 'off',
    'no-useless-constructor': 'off',
    'no-empty-function': 'off',
    'lines-between-class-members': 'off',
    'import/no-duplicates': 'off',
    'import/no-unresolved': 'error',
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': ['off', { devDependencies: ['*.js'] }],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        ts: 'never',
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
  overrides: [
    {
      files: ['*.js'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
  ],
  settings: {
    'import/resolver': {
      typescript: {
        project: ['./*/**/tsconfig.json', './tsconfig.json'],
      },
    },
  },
};
