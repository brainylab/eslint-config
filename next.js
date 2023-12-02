module.exports = {
  extends: ['next'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'eslint-plugin-import-helpers'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        printWidth: 80,
        tabWidth: 2,
        singleQuote: true,
        trailingComma: 'all',
        arrowParens: 'always',
        semi: false,
        endOfLine: 'auto',
      },
    ],
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
          ['type'],
        ],
        alphabetize: { order: 'asc', ignoreCase: true },
      },
    ],
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/parsers': {
      [require.resolve('@typescript-eslint/parser')]: ['.ts', '.tsx', '.d.ts'],
    },
  },
}
