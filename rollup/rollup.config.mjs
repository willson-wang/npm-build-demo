import { getBabelOutputPlugin } from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';

import pkg from './package.json' assert {type: 'json'};

export default [
  {
    input: './src/index.ts',
    output: [{
      file: pkg.main,
      format: 'cjs',
      exports: 'named',
    },{
      file: pkg.module,
      format: 'esm',
      exports: 'named',
    }],
    plugins: [
      resolve(),
      json(),
      commonjs({
        transformMixedEsModules: true,
      }),
      typescript(),
      getBabelOutputPlugin(),
    ],
    external: [], // 不需要打入包内的第三方npm包,例如['lodash']
  }
];
