---
outline: [2,3]
---

# 模板升级

随着 Sun-Panel 的功能迭代，底层模板会对基础功能增加，打包等脚本进行安全更新。本文档指导你如何将项目从旧版本模板升级到最新版本，保持与平台的兼容性。

## 一键升级（推荐）{#auto_upgrade}
升级条件检查你的项目内根目录下含有 `scripts/update-template.mjs` 脚本，如果有则支持一件升级模板，如果升级脚本文件不存在或者升级失败，则需要手动升级。

最简单的方式是直接执行升级命令：

```bash
npm run update
```

此命令会从模板仓库拉取最新的底层文件（构建脚本、依赖配置等），**不会覆盖你自己的业务代码**。

::: tip 适用场景
一键升级适用于底层文件有更新、但配置格式无破坏性变更的版本。如果新版本引入了配置格式变更（如新增必填字段），一键升级后仍需手动修改配置文件，请参考下方说明。
:::

## 手动升级 {#manual_upgrade}

当一键升级失败，或新版本引入了配置格式变更时，需要手动升级。

### 步骤 1：备份当前项目

```bash
cp -r your-app your-app-backup
```

### 步骤 2：拉取最新模板代码

从 [Hello World 模板仓库](https://github.com/Sun-Panel/microapp-hello-world) 拉取最新代码，将以下文件/目录**排除在外**，其余文件直接覆盖到你的开发项目中：

::: danger 不要覆盖的文件和目录
- `src/components` - 你的组件代码
- `config/*` - 你的配置文件（`app.config.js`、`components.config.js` 等）
:::

::: info 自动同步的文件
以下文件由 `npm run update` 自动同步，通常不需要手动处理：
- `build/` - 构建脚本（`build.js`、`pack.js`、`generators/`）
- `scripts/` - 更新脚本（`update-template.mjs`、`template-files.json`）
- `vite.config.js` - Vite 配置
- `eslint.config.js` - ESLint 配置
- `package.json` - 依赖版本（不会覆盖 `scripts`、`name` 等字段）
- `jsconfig.json`
:::

### 步骤 3：查看版本变更说明

查看最新的 [版本变更历史](#changelog)，了解本次升级引入了哪些配置格式变更，按照说明修改对应的配置文件。

### 步骤 4：构建验证

升级完成后，执行构建命令验证配置是否正确：

```bash
# 安装依赖（如有新增）
npm install

# 编译语言文件（如适用）
npm run build:locales

# 构建项目
npm run build
```

## 通用检查清单

每次升级后，建议逐项确认：

- [ ] `config/app.config.js` 中 `appJsonVersion` 已更新为最新版本
- [ ] `config/app.config.js` 中的所有必填字段已按要求补充
- [ ] `config/components.config.js` 中的小部件配置无遗漏
- [ ] `locales/` 目录下的翻译文件包含所有新增的翻译键
- [ ] `npm install` 依赖安装成功
- [ ] `npm run build` 构建成功
- [ ] 上传到应用商店后主平台能正确解析

## 回滚方案

如果升级后出现严重问题，可以回滚到备份的旧版本：

```bash
# 删除升级后的项目
rm -rf your-app

# 恢复备份
mv your-app-backup your-app

# 重新安装依赖并验证
cd your-app
npm install
npm run build
```

::: warning 注意
如果升级前没有备份，则需要手动恢复被修改的配置文件。建议**每次升级前都进行备份**。
:::


## 版本变更历史 {#changelog}

以下记录了模板各版本之间的主要变更。升级时请查阅对应版本的变更说明。

### v1.1 {#v1_1}

> 相对于 v1.0 的变更

#### 主要变更

- **国际化支持**：引入独立的 `locales/` 翻译文件体系，替换 v1.0 中内嵌在 `appInfo` 里的多语言对象
- **小部件元数据**：`components.config.js` 新增 `widgetName`、`widgetDescription`、`sort` 字段

#### 需要手动修改的配置

**1. `config/app.config.js`**

- 新增 `appJsonVersion: '1.1'`
- 新增 `locales` 对象，指定语言代码到文件名的映射
- `appInfo` 改用 `$t:KEY` 语法引用翻译

::::: code-group

```js [v1.1 新版格式]
export default {
  appJsonVersion: '1.1',
  // ...
  appInfo: {
    appName: '$t:APP_NAME',
    description: '$t:APP_DESCRIPTION',
    networkDescription: '$t:NETWORK_DESCRIPTION',
  },
  locales: {
    'zh-CN': 'zh-CN.json',
    'en-US': 'en-US.json',
    // 'zh-TW': 'zh-CN.json',  // 示例：繁体中文可指向简体中文文件
  },
};
```

```js [v1.0 旧版格式]
export default {
  // 无 appJsonVersion 或为 '1.0'
  appInfo: {
    'zh-CN': {
      appName: '天气',
      description: '查看各地天气数据',
      networkDescription: '首次安装后下载必要的配置数据'
    },
    'en-US': {
      appName: 'Weather',
      description: 'View weather data worldwide',
      networkDescription: 'Download necessary config data on first run'
    }
  },
};
```

:::::

**2. 新建 `locales/` 翻译文件**

将 v1.0 中 `appInfo` 内嵌的翻译文本提取到独立文件中：

```bash
mkdir -p locales
```

创建 `locales/zh-CN.js` 和 `locales/en-US.js`，格式参考 [国际化](./i18n) 文档。

**3. `config/components.config.js`（可选）**

新增小部件的名称、描述和排序字段：

```js
export default {
  widgets: {
    'my-widget': {
      component: MyWidget,
      configComponentName: 'my-config',
      // v1.1 新增字段
      widgetName: '$t:WIDGET_NAME',
      widgetDescription: '$t:WIDGET_DESC',
      sort: 10,
      size: ['1x1', '2x2'],
    },
  },
};
```

#### 升级检查清单

- [ ] `appJsonVersion` 已改为 `'1.1'`
- [ ] 已添加 `locales` 对象
- [ ] `appInfo` 使用 `$t:KEY` 语法
- [ ] `locales/` 目录下创建了翻译文件
- [ ] 小部件的 `widgetName`/`widgetDescription` 使用 `$t:KEY`（可选）
