import { base } from './presets/base';
import { typescript } from './presets/typescript';
import { node } from './presets/node';
import { react } from './presets/react';
import { next } from './presets/next';

import type { FlatESLintConfig } from 'eslint-define-config';

type ConfigParams = {
	config?: FlatESLintConfig | FlatESLintConfig[];
	presets?: {
		typescript?: boolean;
		node?: boolean;
		react?: boolean;
		mdx?: boolean;
		next?: boolean;
	};
};

export function createConfig(params: ConfigParams): FlatESLintConfig[] {
	const configs: FlatESLintConfig[] = [...base];

	if (params.presets?.typescript) {
		configs.push(...typescript);
	}

	if (params.presets?.node) {
		configs.push(...node);
	}

	if (params.presets?.react || params.presets?.next) {
		configs.push(...react);
	}

	if (params.presets?.next) {
		configs.push(...next);
	}

	if (params.config) {
		configs.push(
			...(Array.isArray(params.config) ? params.config : [params.config]),
		);
	}

	return configs;
}
