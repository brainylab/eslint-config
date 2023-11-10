module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: ['@brainylab/eslint-config-base'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'react-hooks'],
  rules: {
    'no-param-reassign': 'off',
    'react/jsx-filename-extension': [2, { extensions: ['.tsx', '.jsx'] }],
    'import-helpers/order-imports': [
      'warn',
      {
        newlinesBetween: 'always',
        groups: [
          ['/^react/'],
          ['/@brainylab/'],
          ['module'],
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
          ['sibling', 'parent', "type"],
          ['absolute'],
          ['index'],
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
