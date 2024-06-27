import { tsEslint } from '../plugins';

import type { FlatESLintConfig } from 'eslint-define-config';

const typeScriptExtensions = ['.ts', '.tsx', 'd.ts'] as const;

const allExtensions = [...typeScriptExtensions, '.js', '.jsx'] as const;

const typescriptCore = tsEslint.config({
	extends: [...tsEslint.configs.recommended],
	languageOptions: {
		parserOptions: {
			parser: tsEslint.parser,
			project: './tsconfig.json',
			ecmaVersion: 'latest',
			sourceType: 'module',
			ecmaFeatures: {
				jsx: true,
			},
		},
	},
	settings: {
		'import-x/extensions': allExtensions,
		'import-x/external-module-folders': ['node_modules', 'node_modules/@types'],
		'import-x/parsers': {
			'@typescript-eslint/parser': [...typeScriptExtensions, '.cts', '.mts'],
		},
		'import-x/resolver': {
			node: {
				extensions: allExtensions,
			},
		},
	},
	files: ['**/*.{ts,tsx}'],
	ignores: [
		'**/node_modules/**/*',
		'**/build/**/*',
		'**/coverage/**/*',
		'**/dist/*',
		'**/.next/**/*',
	],
	rules: {
		'@typescript-eslint/no-explicit-any': ['warn', { ignoreRestArgs: true }],
		'@typescript-eslint/no-unused-vars': 'error',
		'@typescript-eslint/consistent-type-exports': 'error',
		'@typescript-eslint/consistent-type-imports': [
			'error',
			{ fixStyle: 'separate-type-imports' },
		],
	},
});

export const typescript = [
	...typescriptCore,
	{
		files: ['**/*.d.ts'],
		rules: {
			'eslint-comments/no-unlimited-disable': 'off',
			'import/no-duplicates': 'off',
			'unused-imports/no-unused-vars': 'off',
		},
	},
	{
		files: ['**/*.{test,spec}.ts?(x)'],
		rules: {
			'no-unused-expressions': 'off',
		},
	},
	{
		files: ['**/*.?([cm])js', '**/*.cjs'],
		rules: {
			'@typescript-eslint/no-require-imports': 'off',
			'@typescript-eslint/no-var-requires': 'off',
		},
	},
	{
		files: ['**/*.d.ts'],
		rules: {
			'no-restricted-syntax': [
				'error',
				'ForInStatement',
				'LabeledStatement',
				'WithStatement',
			],
		},
	},
] as FlatESLintConfig[];
