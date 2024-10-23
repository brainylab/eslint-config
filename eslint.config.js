import { presets } from './dist/index.js';

export default [
	...presets.base,
	...presets.typescript,
	...presets.node,
	...presets.react,
	...presets.next,
];
