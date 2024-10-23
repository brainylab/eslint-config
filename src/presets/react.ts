import globals from 'globals';
import reactPlugin from 'eslint-plugin-react';

export const react: any[] = [
	{
		files: ['**/*.{js,jsx,mjs,cjs,ts,tsx}'],
		...reactPlugin.configs.flat?.recommended,
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
		},
	},
];
