/* eslint-disable no-restricted-syntax */

import globals from 'globals';
import pluginNode from 'eslint-plugin-n';

import type { FlatESLintConfig } from 'eslint-define-config';

export const nodeConfig = [
	pluginNode.configs['flat/recommended-script'],
	{
		languageOptions: {
			globals: {
				...globals.node,
			},
		},
		rules: {
			'no-useless-constructor': 'off',
			'n/no-missing-import': 'off',
			'n/handle-callback-err': ['error', '^(err|error)$'],
			'n/no-deprecated-api': 'error',
			'n/no-exports-assign': 'error',
			'n/no-new-require': 'error',
			'n/no-path-concat': 'error',
			'n/no-unsupported-features/es-builtins': 'error',
			'n/prefer-global/buffer': ['error', 'never'],
			'n/prefer-global/process': ['error', 'never'],
			'n/process-exit-as-throw': 'error',
			'@typescript-eslint/no-empty-object-type': 'off',
		},
	},
] as FlatESLintConfig[];

export default nodeConfig;
