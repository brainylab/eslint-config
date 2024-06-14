import globals from 'globals';
import { pluginNode } from '../plugins';
import type { FlatESLintConfig } from 'eslint-define-config';

export const node = [
  {
    plugins: {
      node: pluginNode,
    },
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
    settings: {},
    rules: {
      'no-useless-constructor': 'off',
      'node/handle-callback-err': ['error', '^(err|error)$'],
      'node/no-deprecated-api': 'error',
      'node/no-exports-assign': 'error',
      'node/no-new-require': 'error',
      'node/no-path-concat': 'error',
      'node/no-unsupported-features/es-builtins': 'error',
      'node/prefer-global/buffer': ['error', 'never'],
      'node/prefer-global/process': ['error', 'never'],
      'node/process-exit-as-throw': 'error',
    },
  },
] as FlatESLintConfig[];
