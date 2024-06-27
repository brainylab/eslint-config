import pluginJs from '@eslint/js';
import globals from 'globals';

import { pluginImport, configPrettier } from '../plugins';

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
			import: pluginImport,
		},
		languageOptions: {
			parserOptions: {
				ecmaVersion: 'latest',
				sourceType: 'module',
			},
			globals: {
				...globals.es2021,
			},
		},
		rules: {
			...pluginJs.configs.recommended.rules,
			'no-unused-vars': 'off',
			'import-x/named': 'off',
			'import/order': [
				'error',
				{
					'newlines-between': 'always',
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
	{
		name: 'no default exports',
		rules: {
			'no-restricted-syntax': [
				'error',
				{
					selector: 'ExportDefaultDeclaration',
					message: 'Prefer named exports',
				},
			],
		},
	},
	{
		name: 'no default exports exceptions',
		files: [
			'src/app/**/{page,layout,template}.tsx',
			'*.config.{ts,js}',
			'**/*.config.{ts,js}',
			'*.d.ts',
			'**/*.d.ts',
		],
		rules: {
			'no-restricted-syntax': ['off', { selector: 'ExportDefaultDeclaration' }],
		},
	},
	configPrettier,
] as FlatESLintConfig[];
