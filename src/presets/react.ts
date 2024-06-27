import globals from 'globals';

import { pluginJsxA11y, pluginReact, pluginReactHook } from '../plugins';

export const react = [
	{
		languageOptions: {
			ecmaVersion: 2022,
			globals: { ...globals.browser, ...globals.node },
			parserOptions: {
				ecmaFeatures: {
					jsx: true,
				},
				ecmaVersion: 2022,
				sourceType: 'module',
			},
			sourceType: 'module',
		},
		settings: {
			react: {
				version: 'detect',
			},
		},
		plugins: {
			react: pluginReact,
			'react-hooks': pluginReactHook,
			'jsx-a11y': pluginJsxA11y,
		},
		rules: {
			...pluginReact.configs.recommended.rules,
			...pluginReactHook.configs.recommended.rules,
		},
	},
];
