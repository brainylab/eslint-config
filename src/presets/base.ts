import eslintConfigPrettier from 'eslint-config-prettier';
import pluginJs from '@eslint/js';
import eslintPluginImport from 'eslint-plugin-import-x';
import globals from 'globals';
import type { FlatESLintConfig } from 'eslint-define-config';

export const base = [
  {
    files: ['**/*.{js,cjs,mjs,jsx,ts,tsx}'],
    ignores: [
      '**/node_modules/**/*',
      '**/build/**/*',
      '**/coverage/**/*',
      '**/dist/*',
      '**/.next/**/*',
      '**/*.d.ts',
    ],
    plugins: {
      import: eslintPluginImport,
    },
    languageOptions: {
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: {
          jsx: true,
        },
        sourceType: 'module',
      },
      globals: {
        ...globals.es2021,
      },
    },
    settings: { 'import-x/resolver': { typescript: {} } },
    rules: {
      ...pluginJs.configs.recommended.rules,
      'no-unused-vars': 'off',
      'import/order': [
        'error',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
            'object',
            'type',
          ],
          pathGroups: [{ group: 'internal', pattern: '{{@,~}/,#}**' }],
          pathGroupsExcludedImportTypes: ['type'],
        },
      ],
    },
  },
  eslintConfigPrettier,
] as FlatESLintConfig[];
