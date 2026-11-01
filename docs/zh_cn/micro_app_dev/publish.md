# 打包发布

本文档介绍微应用的构建、打包和发布流程。


## 构建流程

微应用的构建流程如下：

```
1. 生成配置文件 → 2. Vite 构建 → 3. 打包成 .zip
```

### 1. 生成配置文件

从 `config/app.config.js` 读取配置，自动生成 `app.json` 文件：

- **在线运行**（`npm run dev`）：`microAppId` 添加 `-dev` 后缀
- **测试模式**（`npm run pack:dev` / `npm run pack:test`）：自动添加 `-test` 后缀到 `microAppId`，并自动开启 `debug`
- **生产模式**（`npm run pack`）：使用原始 `microAppId`，`debug` 透传配置值（由 `config/app.config.js` 控制，正式发布请设置为 `false`）

### 2. Vite 构建

- 构建源码到 `dist/` 目录
- 将 `public/` 目录下的文件直接复制到根目录

### 3. 打包成 .zip

将 `app.json`、`main.js` 和静态资源打包，输出到 `packages/` 目录：

```
packages/
└── hslr-hello-world-1.0.0.zip
    ├── app.json              # 应用配置
    ├── main.js               # 组件入口
    ├── logo.png             # 应用图标
    └── sun-panel-logo.png   # Sun Panel Logo
```


## 构建命令

| 命令 | 说明 |
|------|------|
| `npm run pack` | 打包组件包（生产模式，无后缀） |
| `npm run pack:dev` | 打包组件包（测试模式，`-test` 后缀） |
| `npm run pack:test` | 打包组件包（测试模式，`-test` 后缀） |
| `npm run gen` | 生成配置文件（生产模式） |
| `npm run gen:test` | 生成配置文件（测试模式） |


## 测试/生产环境区分

```javascript
// 在线运行（npm run dev）→ -dev 后缀
const isDevServer = import.meta.env.DEV && !import.meta.env.PROD;
// 打包测试（pack:dev / pack:test）→ -test 后缀
const isTestBuild = import.meta.env.PROD && import.meta.env.MODE === 'development';

const microAppId = isDevServer ? `${config.microAppId}-dev`
  : isTestBuild ? `${config.microAppId}-test`
  : config.microAppId;
```

也可以通过配置判断：

```javascript
const isDevMode = MicroAppPackage.appConfig.dev;
```


## 发布流程

平台正在开发中，标准发布流程如下：

```
注册为开发者 → 开发测试 → 打包测试 → 提交审核 → 发布微应用商店
```

::: tip
开发测试阶段可暂时省略注册步骤，直接使用本地打包的 `.zip` 文件进行测试。
:::
