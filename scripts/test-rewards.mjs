import { build } from 'esbuild';
import { resolve } from 'node:path';

const result = await build({
  entryPoints: [resolve('tests/rewards.test.ts')],
  bundle: true, platform: 'node', format: 'esm', write: false,
});
await import(`data:text/javascript;base64,${Buffer.from(result.outputFiles[0].text).toString('base64')}`);
