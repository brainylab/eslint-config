module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true,
    jest: true,
  },
  extends: ['@brainylab/eslint-config-base'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: ['react', 'react-hooks'],
  rules: {
    'no-nested-ternary': 'off',
    'no-unused-expressions': 'off',
    'react/prop-types': 'off',
    'react/jsx-filename-extension': [2, { extensions: ['.tsx', '.jsx'] }],
    'import-helpers/order-imports': [
      'warn',
      {
        // example configuration
        newlinesBetween: 'always',
        groups: [
          '/^react/',
          '@brainylab',
          ['module', '/^@unform/'],
          ['/^@hooks/'],
          [
            '/^@shared/',
            '/^@core/',
            '/^@modules/',
            '/^@config/',
            '/^@components/',
          ],
          ['/^@utils/', '/^@service/'],
          ['/^@interfaces/'],
          ['parent', 'sibling', 'index'],
        ],
        alphabetize: { order: 'asc', ignoreCase: true },
      },
    ],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        ts: 'never',
        tsx: 'never',
        js: 'never',
        jsx: 'never',
      },
    ],
  },
  settings: { react: { version: 'detect' } },
};
