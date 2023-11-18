module.exports = {
  sourceType: 'unambiguous',
  presets: [
    [
      "@babel/preset-env",
    ],
    "@babel/preset-typescript",
  ],
  plugins: [
    ['@babel/plugin-transform-runtime', {
      'absoluteRuntime': false,
        'corejs': 3,
        'helpers': true,
        'regenerator': true,
    }]
  ]
}
