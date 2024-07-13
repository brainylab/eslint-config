import { pluginMdx } from '../plugins';

import type { FlatESLintConfig } from 'eslint-define-config';

export const mdx = [
	{
		files: ['*.mdx'],
		...pluginMdx.flat,
		processor: pluginMdx.createRemarkProcessor({
			lintCodeBlocks: true,
			languageMapper: {},
		}),
	},
	{
		files: ['*.mdx'],
		...pluginMdx.flatCodeBlocks,
		rules: {
			...pluginMdx.flatCodeBlocks.rules,
			'no-var': 'error',
			'prefer-const': 'error',
		},
	},
] as FlatESLintConfig[];
