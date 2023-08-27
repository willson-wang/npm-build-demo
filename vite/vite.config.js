import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    target: 'es5',
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
    },
    minify: false,
    rollupOptions: {
      output: [{
        format: 'es',
        exports: 'named',
        dir: './dist',
        entryFileNames: '[name].bundle.js',
      },{
        format: 'es',
        exports: 'named',
        dir: './dist-signle-input-mutil-output',
        entryFileNames: '[name].js',
        preserveModules: true,
      }],
    },
  },
})
