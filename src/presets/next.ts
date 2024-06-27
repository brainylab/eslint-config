import { pluginNext } from '../plugins';

export const next = [
	{
		plugins: {
			'@next/next': pluginNext,
		},
		rules: {
			...pluginNext.configs.recommended.rules,
			'@next/next/no-html-link-for-pages': 'off',
		},
	},
];
