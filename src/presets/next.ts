import { pluginNext } from '../plugins';

export const next = [
	{
		plugins: {
			'@next/next': pluginNext,
		},
		rules: {
			...pluginNext.configs.recommended.rules,
			'react/no-unknown-property': ['error', { ignore: ['tw'] }],
		},
	},
];
