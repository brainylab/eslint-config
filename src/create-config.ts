import type { FlatESLintConfig } from 'eslint-define-config';
import { base } from './presets/base';
import { typescript } from './presets/typescript';
import { node } from './presets/node';

type ConfigParams = {
  config: FlatESLintConfig | FlatESLintConfig[];
  presets?: {
    typescript?: boolean;
    node?: boolean;
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

  if (Object.keys(params.config).length > 0) {
    configs.push(
      ...(Array.isArray(params.config) ? params.config : [params.config]),
    );
  }

  return configs;
  899;
}
