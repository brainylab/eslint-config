import { pluginNext } from '../plugins';

import type { FlatESLintConfig } from 'eslint-define-config';

export const next = [
	{
		plugins: {
			'@next/next': pluginNext,
		},
		rules: {
			...pluginNext.configs.recommended.rules,
			...pluginNext.configs['core-web-vitals'].rules,
			'@next/next/no-html-link-for-pages': 'off',
		},
		ignores: ['.next/*'],
	},
] as FlatESLintConfig[];
