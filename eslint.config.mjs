import { baseConfig } from './packages/base/dist/index.js';
import { createTypescriptConfig } from './packages/typescript/dist/index.js';

export default [
	...baseConfig,
	...createTypescriptConfig({
		tsFilePath:
			'/Users/andrefelipeschulle/Developer/brainylab/libs/eslint-config/tsconfig.json',
	}),
];
