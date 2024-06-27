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
];
