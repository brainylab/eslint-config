import glob from 'fast-glob';
import fs from 'node:fs';
import path from 'node:path';

(async () => {
  const sourcePath = path.resolve('./');
  const fromPath = path.resolve('./dist');

  // copy package.json to build out
  const originalPackage = fs.readFileSync(
    path.join(sourcePath, 'package.json'),
  );
  const packageParsed = JSON.parse(originalPackage.toString());

  delete packageParsed.scripts;
  delete packageParsed.devDependencies;
  delete packageParsed.commitlint;
  delete packageParsed.config;
  delete packageParsed['release-it'];

  const newPackage = JSON.stringify(packageParsed, null, 2);

  fs.writeFileSync(path.join(fromPath, 'package.json'), newPackage);
  console.info('package.json copied to build out');

  // create package.json on components folder
  const directoryPackages = glob
    .sync('**/*/index.{js,ts,tsx}', {
      cwd: fromPath,
      ignore: ['cjs'],
    })
    .map(path.dirname);

  await Promise.all(
    directoryPackages.map(async (directoryPackage) => {
      console.log(directoryPackage);
      const packageJsonPath = path.resolve(
        fromPath,
        directoryPackage,
        'package.json',
      );

      const packageJson = {
        main: `./index.js`,
        module: directoryPackage === 'plugins' ? './index.mjs' : './index.js',
        types: './index.d.ts',
        type: 'module',
        sideEffects: false,
      };

      fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
      console.info(`package.json created on ${directoryPackage}`);
    }),
  );

  // clear tsconfig.lib.tsconfig.lib.tsbuildinfo
  const tsLibInfos = glob
    .sync('**/*/tsconfig.lib.tsbuildinfo', { cwd: '.' })
    .map(path.dirname);

  await Promise.all(
    // eslint-disable-next-line array-callback-return
    tsLibInfos.map((tsLibInfo) => {
      fs.unlinkSync(path.resolve(tsLibInfo, 'tsconfig.lib.tsbuildinfo'));
    }),
  );
  console.info(`clear files tsconfig.lib.tsbuildinfo`);
})();
