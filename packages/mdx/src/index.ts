/* eslint-disable no-restricted-syntax */
/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-ignore
import * as mdxEslint from 'eslint-plugin-mdx';

import type { FlatESLintConfig } from 'eslint-define-config';

export const mdxConfig = [
	{
		files: ['**/*.mdx'],
		...mdxEslint.flat,
		processor: mdxEslint.createRemarkProcessor({
			lintCodeBlocks: true,
			languageMapper: {},
		}),
	},
	{
		...mdxEslint.flatCodeBlocks,
		rules: {
			...mdxEslint.flatCodeBlocks.rules,
			'no-var': 'error',
			'prefer-const': 'error',
		},
	},
] as FlatESLintConfig[];

export default mdxConfig;
