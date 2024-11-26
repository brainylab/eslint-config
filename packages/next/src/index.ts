/* eslint-disable no-restricted-syntax */
/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-ignore
import pluginNext from '@next/eslint-plugin-next';
import { baseConfig } from '@brainylab/eslint-config-base';
import { typescriptConfig } from '@brainylab/eslint-config-typescript';
import { reactConfig } from '@brainylab/eslint-config-react';

import type { FlatESLintConfig } from 'eslint-define-config';

export const nextConfig = [
	...baseConfig,
	...typescriptConfig,
	...reactConfig,
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

export default nextConfig;
