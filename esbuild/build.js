// require('esbuild').build({
//   entryPoints: ['./src/index.ts'],
//   bundle: true,
//   platform: 'browser',
//   outfile: 'dist/main.js',
//   sourcemap: false,
//   target: 'es6',
//   format: 'esm',
// });

// // https://github.com/evanw/esbuild/issues/708
// require('esbuild').build({
//   entryPoints: ['./src/index.ts', './src/util.ts'],
//   bundle: false,
//   platform: 'browser',
//   outdir: 'dist-mutil',
//   sourcemap: false,
//   target: 'es6',
//   format: 'esm',
// });

const esbuild = require('esbuild');

esbuild.build({
  entryPoints: ['./src/check.ts'],
  bundle: true,
  minify: true,
  target: ['node12'],
  outfile: './build/check.js',
  platform: 'node',
  charset: 'utf8',
  // packages: 'external'
})
