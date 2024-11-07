/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-expect-error
import * as mdxEslint from 'eslint-plugin-mdx';

export const mdx: any[] = [
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
];
