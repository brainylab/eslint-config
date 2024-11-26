/* eslint-disable no-restricted-syntax */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import pluginJs from '@eslint/js';
import globals from 'globals';
import eslintPluginImportX from 'eslint-plugin-import-x';
// @ts-ignore
import eslintConfigPrettier from 'eslint-config-prettier';

import type { FlatESLintConfig } from 'eslint-define-config';

export const baseConfig = [
	{
		files: ['**/*.{js,cjs,mjs,jsx,mjsx,ts,tsx,mtsx}', '**/*.d.ts'],
		ignores: [
			'**/node_modules/**/*',
			'**/build/**/*',
			'**/coverage/**/*',
			'**/dist/*',
			'**/.next/**/*',
			'**/*.d.ts',
			'eslint.config.js',
		],
		plugins: {
			import: eslintPluginImportX,
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
			'eslint-comments/no-unlimited-disable': 'off',
			'import/no-duplicates': 'off',
			'unused-imports/no-unused-vars': 'off',
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
			'src/app/**/{page,layout,template,loading,error,robots,sitemaps}.tsx',
			'src/app/**/{robots,sitemap}.ts',
			'*.config.{ts,js,mjs,cjs}',
			'**/*.config.{ts,js,mjs,cjs}',
			'*.d.ts',
			'**/*.d.ts',
		],
		rules: {
			'no-restricted-syntax': ['off', { selector: 'ExportDefaultDeclaration' }],
		},
	},
	eslintConfigPrettier,
] as FlatESLintConfig[];

export default baseConfig;
