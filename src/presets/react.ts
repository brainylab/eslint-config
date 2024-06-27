import globals from 'globals';

import { pluginReact, pluginReactHook } from '../plugins';

export const react = [
	{
		files: ['*.jsx', '*.tsx', '*.mdx'],
		languageOptions: {
			globals: { ...globals.browser, ...globals.node },
			parserOptions: {
				ecmaFeatures: {
					jsx: true,
				},
			},
		},
		settings: {
			react: {
				version: 'detect',
			},
		},
		plugins: {
			react: pluginReact,
			'react-hooks': pluginReactHook,
		},
		rules: {
			...pluginReact.configs.recommended.rules,
			...pluginReact.configs['jsx-runtime'].rules,
			...pluginReactHook.configs.recommended.rules,
			'react/react-in-jsx-scope': 'off',
			'react/jsx-uses-react': 'off',
			'react/jsx-filename-extension': [1, { extensions: ['.jsx', '.tsx'] }],
		},
	},
];
