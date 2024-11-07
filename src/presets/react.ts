/* eslint-disable @typescript-eslint/ban-ts-comment */
import globals from 'globals';
import reactPlugin from 'eslint-plugin-react';
// @ts-expect-error
import reactHooksPlugin from 'eslint-plugin-react-hooks';

export const react: any[] = [
	{
		files: ['**/*.{jsx,tsx}'],
		...reactPlugin.configs.flat?.recommended,
		plugins: {
			react: reactPlugin.configs.flat?.recommended.plugins.react,
			'react-hooks': reactHooksPlugin,
		},
		languageOptions: {
			...reactPlugin.configs.flat?.recommended.languageOptions,
			globals: {
				...globals.serviceworker,
				...globals.browser,
			},
		},
		settings: {
			react: {
				version: 'detect',
			},
		},
		rules: {
			...reactPlugin.configs.flat?.recommended.rules,
			'react/react-in-jsx-scope': 'off',
			'react/jsx-uses-react': 'off',
			'react/jsx-filename-extension': [1, { extensions: ['.jsx', '.tsx'] }],
			'react/no-unknown-property': ['error', { ignore: ['tw'] }],
			...reactHooksPlugin.configs.recommended.rules,
		},
	},
];
