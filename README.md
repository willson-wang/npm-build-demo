## 简介（Introduction)

npm包构建demo

## 技术栈（Scheme）

rollup + webpack + vite + esbuild + swc

## 项目设计结构

```js
.
├── LICENSE
├── README.md
├── esbuild
│   ├── build.js
│   ├── package.json
│   ├── pnpm-lock.yaml
│   └── src
│       ├── check.ts
│       └── util.ts
├── rollup
│   ├── babel.config.js
│   ├── package.json
│   ├── pnpm-lock.yaml
│   ├── rollup.config.mjs
│   ├── rollup.config1.js
│   └── src
│       ├── index.ts
│       └── util.ts
├── swc
│   ├── build.js
│   ├── package.json
│   ├── pnpm-lock.yaml
│   └── src
│       ├── index.ts
│       └── util.ts
├── vite
│   ├── package.json
│   ├── pnpm-lock.yaml
│   ├── src
│   │   ├── index.ts
│   │   └── util.ts
│   └── vite.config.js
└── webpack
    ├── babel.config.js
    ├── index.html
    ├── package.json
    ├── pnpm-lock.yaml
    ├── src
    │   ├── index.ts
    │   └── util.ts
    └── webpack.config.js
```

## 使用（Usage）

### 克隆仓库
 
git clone git@github.com:willson-wang/npm-build-demo.git
 
### 安装依赖
 
pnpm install
 
### 构建模式

构建npm包
```
pnpm build
```


