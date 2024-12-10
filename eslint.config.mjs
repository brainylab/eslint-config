import { typescriptConfig } from './packages/typescript/dist/index.js';
import { nodeConfig } from './packages/node/dist/index.js';

export default [...typescriptConfig, ...nodeConfig];
