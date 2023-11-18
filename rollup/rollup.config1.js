// const typescript = require('@rollup/plugin-typescript');
// const babel = require('@rollup/plugin-babel');


// module.exports = [
//   // 输入单入口，输出单bundle
//   {
//     input: './src/index.ts',
//     output: {
//       format: 'esm',
//       exports: 'named',
//       file: './dist/index.bundle.js',
//     },
//     plugins: [
//       typescript(),
//       babel({
//         babelHelpers: 'runtime',
//         exclude: [/node_modules/],
//         // extensions: ['.ts', '.tsx', '.js', '.jsx', '.es6', '.es', '.mjs'],
//       }),
//     ],
//   },
//   // 输入单入口，输出多文件
//   {
//     input: './src/index.ts',
//     output: {
//       format: 'esm',
//       entryFileNames: '[name].js',
//       exports: 'named',
//       dir: './dist-signle-input-mutil-output',
//       preserveModules: true,
//     },
//     plugins: [
//       typescript(),
//       babel({
//         babelHelpers: 'runtime',
//         exclude: [/node_modules/],
//         // extensions: ['.ts', '.tsx', '.js', '.jsx', '.es6', '.es', '.mjs'],
//       }),
//     ],
//   },
//   // 输入多入口，输出单bundle
//   {
//     input: ['./src/index.ts', './src/util.ts'],
//     output: {
//       format: 'esm',
//       entryFileNames: '[name].js',
//       exports: 'named',
//       dir: 'dist-mutil-input'
//     },
//     plugins: [
//       typescript(),
//       babel({
//         babelHelpers: 'runtime',
//         exclude: [/node_modules/],
//         // extensions: ['.ts', '.tsx', '.js', '.jsx', '.es6', '.es', '.mjs'],
//       }),
//     ],
//   },
// ]
