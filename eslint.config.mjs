import { baseConfig } from './packages/base/dist/index.js';
import { typescriptConfig } from './packages/typescript/dist/index.js';

export default [...baseConfig, ...typescriptConfig];
