# 打包发布

本文档介绍微应用的构建、打包和发布流程。


## 构建流程

微应用的构建流程如下：

```
1. 生成配置文件 → 2. Vite 构建 → 3. 打包成 .zip
```

### 1. 生成配置文件

从 `config/app.config.js` 读取配置，自动生成 `app.json` 文件：

- **开发模式**：自动添加 `-dev` 后缀到 `microAppId`
- **生产模式**：使用原始 `microAppId`

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
| `npm run build` | 生产模式构建 |
| `npm run build:dev` | 开发模式构建 |
| `npm run pack` | 打包组件包（生产模式） |
| `npm run pack:dev` | 打包组件包（开发模式） |
| `npm run gen` | 生成配置文件（生产模式） |
| `npm run gen:dev` | 生成配置文件（开发模式） |


## 开发/生产环境区分

```javascript
const isDev = import.meta.env.DEV || import.meta.env.MODE === 'development';
const microAppId = isDev ? `${config.microAppId}-dev` : config.microAppId;
```

也可以通过配置判断：

```javascript
const isDev = MicroAppPackage.appConfig.dev;
```


## 发布流程

平台正在开发中，标准发布流程如下：

```
注册为开发者 → 开发测试 → 打包测试 → 提交审核 → 发布微应用商店
```

::: tip
开发测试阶段可暂时省略注册步骤，直接使用本地打包的 `.zip` 文件进行测试。
:::
