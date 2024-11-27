/* eslint-disable no-restricted-syntax */
/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-ignore
import * as mdxEslint from 'eslint-plugin-mdx';

import type { FlatESLintConfig } from 'eslint-define-config';

type MDXConfig = {
	files?: string[];
};

export const createMdxConfig = (props?: MDXConfig) => {
	return [
		{
			files: ['**/*.mdx'],
			...props?.files,
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
		{
			files: ['**/*.mdx'],
			rules: {
				'no-restricted-syntax': 'off',
			},
		},
	] as FlatESLintConfig[];
};

export const mdxConfig = createMdxConfig();

export default mdxConfig;
