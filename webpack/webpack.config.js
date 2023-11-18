const path = require('path');

const commonConfig = {
  mode: 'production',
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js'],
  },
  optimization: {
    minimize: true
  },
  module: {
    rules: [
      {
        test: /\.[tj]sx?$/,
        use: 'babel-loader',
        exclude: /\bcore-js\b/
      }
    ]
  }
}

module.exports = [{
  ...commonConfig,
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].min.js',
    library: {
      type: "umd",
      name: 'MyLibrary',
    }
  },
},
// {
//   ...commonConfig,
//   entry: './src/index.ts',
//   output: {
//     path: path.resolve(__dirname, 'dist'),
//     filename: '[name].esm.js',
//     library: {
//       type: 'module',
//     },
//   },
//   experiments: {
//     outputModule: true,
//   },
// },
// {
//   ...commonConfig,
//   entry: {
//     index: './src/index.ts',
//     util: './src/util.ts'
//   },
//   output: {
//     path: path.resolve(__dirname, 'dist-mutil'),
//     filename: '[name].js',
//     library: {
//       type: 'module',
//     },
//   },
//   optimization: {
//     minimize: false,
//     usedExports: false,
//     sideEffects: false
//   },
//   experiments: {
//     outputModule: true,
//   },
// }
]
