/* eslint-disable no-restricted-syntax */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import globals from 'globals';
// @ts-ignore
import * as pluginNode from 'eslint-plugin-n';
import baseEslintConfig from '@brainylab/eslint-config-base';
import typescriptEslintConfig from '@brainylab/eslint-config-typescript';

import type { FlatESLintConfig } from 'eslint-define-config';

const nodeConfig = [
	...baseEslintConfig,
	...typescriptEslintConfig,
	{
		plugins: {
			node: pluginNode,
		},
		languageOptions: {
			globals: {
				...globals.node,
			},
		},
		settings: {},
		rules: {
			'no-useless-constructor': 'off',
			'node/handle-callback-err': ['error', '^(err|error)$'],
			'node/no-deprecated-api': 'error',
			'node/no-exports-assign': 'error',
			'node/no-new-require': 'error',
			'node/no-path-concat': 'error',
			'node/no-unsupported-features/es-builtins': 'error',
			'node/prefer-global/buffer': ['error', 'never'],
			'node/prefer-global/process': ['error', 'never'],
			'node/process-exit-as-throw': 'error',
			'@typescript-eslint/no-empty-object-type': 'off',
		},
	},
] as FlatESLintConfig[];

export default nodeConfig;
