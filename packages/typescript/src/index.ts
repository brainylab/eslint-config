/* eslint-disable no-restricted-syntax */

import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

import tsEslint from 'typescript-eslint';

import type { FlatESLintConfig } from 'eslint-define-config';

const typeScriptExtensions = ['.ts', '.tsx', 'd.ts'] as const;

const allExtensions = [...typeScriptExtensions, '.js', '.jsx'] as const;

type TypescriptConfig = {
	tsProjectPath?: string;
	tsProjectRoot?: string;
};

function getDirName(path: string) {
	if (path.startsWith('file://')) {
		return dirname(fileURLToPath(path));
	}

	return path;
}

export const createTypescriptConfig = (props?: TypescriptConfig) => {
	const tsconfigRootDir = props?.tsProjectRoot
		? getDirName(props.tsProjectRoot)
		: './';

	const typescriptCore = tsEslint.config({
		files: ['**/*.{ts,tsx}'],
		extends: [...tsEslint.configs.recommended],
		languageOptions: {
			parserOptions: {
				parser: tsEslint.parser,
				project: props?.tsProjectPath
					? props?.tsProjectPath
					: './tsconfig.json',
				tsconfigRootDir: tsconfigRootDir,
				ecmaVersion: 'latest',
				sourceType: 'module',
				ecmaFeatures: {
					jsx: true,
				},
			},
		},
		settings: {
			'import-x/extensions': allExtensions,
			'import-x/external-module-folders': [
				'node_modules',
				'node_modules/@types',
			],
			'import-x/parsers': {
				'@typescript-eslint/parser': [...typeScriptExtensions, '.cts', '.mts'],
			},
			'import-x/resolver': {
				node: {
					extensions: allExtensions,
				},
			},
		},
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

	return [
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
};

export const typescriptConfig = createTypescriptConfig();

export default typescriptConfig;
