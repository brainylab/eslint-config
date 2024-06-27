import { base } from './presets/base';
import { typescript } from './presets/typescript';
import { node } from './presets/node';
import { react } from './presets/react';

import type { FlatESLintConfig } from 'eslint-define-config';

type ConfigParams = {
	config?: FlatESLintConfig | FlatESLintConfig[];
	presets?: {
		typescript?: boolean;
		node?: boolean;
		react?: boolean;
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

	if (params.presets?.react) {
		configs.push(...react);
	}

	if (params.config) {
		configs.push(
			...(Array.isArray(params.config) ? params.config : [params.config]),
		);
	}

	return configs;
}
