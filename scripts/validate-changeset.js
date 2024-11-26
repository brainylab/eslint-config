// @ts-ignore
// @ts-nocheck

import fs from 'node:fs';
import path from 'node:path';
import console from 'node:console';
import process from 'node:process';

const changesetDir = path.resolve(import.meta.dirname, '../.changeset');
const changesetFiles = fs
	.readdirSync(changesetDir)
	.filter((file) => file.endsWith('.md'));

for (const file of changesetFiles) {
	const content = fs.readFileSync(path.join(changesetDir, file), 'utf-8');
	if (content.includes('major')) {
		console.error(
			`Changeset ${file} contains a major version bump, which is not allowed.`,
		);

		fs.rmSync(path.join(changesetDir, file));

		process.exit(1);
	}
}

console.log('All changesets are valid.');
