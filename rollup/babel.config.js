module.exports = {
  "presets": [
    [
      "@babel/preset-env",
      {
        "debug": true
      }
    ]
  ],
  "plugins": [
    [
      "@babel/plugin-transform-runtime",
      {
        "absoluteRuntime": false,
        "corejs": {
          "version": 3,
          "proposals": false
        },
        "helpers": true,
        "regenerator": true
      }
    ]
  ]
}
