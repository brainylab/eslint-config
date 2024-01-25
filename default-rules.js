module.exports = {
  'no-unused-vars': 'off',
  '@typescript-eslint/no-explicit-any': ['warn', { ignoreRestArgs: true }],
  '@typescript-eslint/no-unused-vars': 'error',
  '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
  'prettier/prettier': [
    'error',
    {
      printWidth: 80,
      tabWidth: 2,
      singleQuote: true,
      trailingComma: 'all',
      arrowParens: 'always',
      semi: true,
    },
  ],
};
