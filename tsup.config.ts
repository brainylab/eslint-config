import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src'],
  outDir: 'dist/configs',
  format: ['cjs', 'esm'],
  target: 'es2018',
  dts: true,
  bundle: false,
});
