---
outline: [2,3]
---

# 配置说明

微应用包含两个主要配置文件：`app.config.js` 和 `components.config.js`。


## 应用配置 (app.config.js) {#app_config}

定义微应用的基础信息、权限、数据节点等。

### 基础配置

| 参数 | 类型 | 必填 | 说明 |
|------|------|------|------|
| `appJsonVersion` | string | ✅ | 配置文件版本，当前最新为 `1.1` |
| `author` | string | ✅ | 作者标识，用于生成组件标签名前缀，不能含特殊符号 |
| `microAppId` | string | ✅ | 应用唯一标识，格式为 `作者-应用名` |
| `version` | string | ✅ | 版本号，遵循语义化版本规范 |
| `entry` | string | ✅ | 入口文件路径，如 `'main.js'` |
| `icon` | string | ✅ | 应用图标文件名（位于 `public` 目录） |
| `debug` | boolean |  | 调试模式，后端可以通过命令行查看接口请求和数据节点的调试数据，前端通过控制台查看其他调试数据。默认：`false` 。|

### 应用信息 (appInfo) {#app_info}

应用的基本信息，如果要支持多语言，参数支持[国际化](/v2/zh_cn/micro_app_dev/i18n)，如 `$t:APP_NAME`。

#### 参数：
| 参数 | 类型 | 必填 | 说明 |
|------|------|------|------|
| `appName` | string | ✅ | 应用名称 |
| `description` | string | - | 应用描述 |
| `networkDescription` | string | - | 网络请求说明 |

::: details `appJsonVersion:'1.1'` 与旧版本（1.0）格式更新说明
::: code-group

```js [1.1]
// 1.1 不使用国际化支持：
appInfo: {
  appName: 'Hello World',
  description: 'Micro App Hello World',
  networkDescription: 'No need to link to any third-party websites',
}

// 1.1 国际化支持：
appInfo: {
  appName: '$t:APP_NAME',
  description: '$t:APP_DESCRIPTION',
  networkDescription: '$t:NETWORK_DESCRIPTION',
}

// 国际化文件：locales/en-US.json
export default {
  // App basic information
  APP_NAME: 'Hello World',
  APP_DESCRIPTION: 'Micro App Hello World',

  // Network configuration
  NETWORK_DESCRIPTION: 'No need to link to any third-party websites'

  // ...
}

// 国际化文件：locales/zh-CN.json
export default {
  // 应用基本信息
  APP_NAME: 'Hello World',
  APP_DESCRIPTION: 'Sun-Panel 演示微应用',

  // 网络配置
  NETWORK_DESCRIPTION: '无需链接任何三方网站',

  // ...
}

```

```js [1.0]
// 1.0 旧版本格式如下 (Sun-Panel 正式版发布之后将陆续不再支持，请尽快更新底层模板)：
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
}
```
:::

### 权限配置 (permissions)

声明应用所需的权限，如网络请求、数据节点等。详见 [权限声明](./permission)。

### 网络域名白名单 (networkDomains)

当声明 `network` 权限时，必须配置允许访问的域名白名单。详见 [权限声明](./permission)。

### 数据节点配置 (dataNodes)

配置应用的持久化数据存储节点。详见 [数据节点](./data_node)。

### 完整示例

<!-- ::: warning 版本说明
当前支持 v1.0 和 v1.1 两种配置文件格式。推荐使用 v1.1 版本以获得更好的国际化支持。
::: -->

`./config/app.config.js` 文件内容：
::: code-group
```js [1.1]
export default {
  // 基础信息
  appJsonVersion: '1.1',
  author: 'hslr',
  microAppId: 'hslr-weather',
  version: '1.0.0',
  entry: 'main.js',
  icon: 'logo.png',
  debug: false,

  // 多语言翻译配置
  i18n: translations,

  // 应用信息
  appInfo: {
    appName: '天气',
    description: '查看各地天气数据',
    networkDescription: '对接三方天气接口',
  },

  // 权限配置
  permissions: [
    'network',     // 网络权限
    'dataNode'     // 数据节点权限
  ],

  // 网络域名白名单
  networkDomains: [
    'api.example.com'
  ],

  // 数据节点配置
  dataNodes: {
    // 节点名
    config: {
      scope: 'app',
      isPublic: true
    }
  }
};
```

```js [1.0]
export default {
  // 基础信息
  author: 'hslr',
  microAppId: 'hslr-weather',
  version: '1.0.0',
  entry: 'main.js',
  icon: 'logo.png',
  debug: false,

  // 国际化信息
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

  // 权限配置
  permissions: [
    'network',     // 网络权限
    'dataNode'     // 数据节点权限
  ],

  // 网络域名白名单
  networkDomains: [
    'api.example.com'
  ],

  // 数据节点配置
  dataNodes: {
    // 节点名
    config: {
      scope: 'app',
      isPublic: true
    }
  }
}

```
:::


## 组件配置 (components.config.js) {#components_config}

定义微应用的页面组件和小部件组件的基本信息。

### 完整示例

::: warning 版本说明
`appJsonVersion:1.1` 新增了 `widgetName`、`widgetDescription` 和 `sort` 字段，支持国际化。
:::

```javascript
import HelloWorldConfig from '../src/components/widgetConfig.js';
import HelloWorldWidget from '../src/components/widget.js';

export default {
  // 页面注册
  pages: {
    'hello-world-config': {
      component: HelloWorldConfig,
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      headerTextColor: '#ffffff'
    }
  },

  // 小部件注册
  widgets: {
    'hello-world-widget': {
      component: HelloWorldWidget,
      configComponentName: 'hello-world-config',
      // appJsonVersion:1.1 新增字段
      widgetName: 'Demo Widget',
      widgetDescription: 'Demo Widget Description',
      sort: 10, // 排序权重，数字越小越靠前
      size: ['1x1', '1x2', '2x1', '2x2', '2x4', '1xfull'],
      background: '',
    },
  },
};
```

### 页面组件类型

微应用的页面组件分为两种类型：

| 类型 | 标识 | 说明 |
|------|------|------|
| **小部件配置组件** | `config` | 会在添加小部件时作为引导添加页面打开，或通过小部件右键菜单「小部件配置」打开 |
| **首页面组件** | `main` | 会在同一微应用列表处统一入口打开（暂未实现统一入口），或在微应用内任意处使用 `this.api.window.open("主页面名称")` 打开 |

可通过 `type` 字段指定页面类型，默认为 `config`。

### 页面配置参数 {#page_config_param}

| 参数 | 类型 | 必填 | 说明 |
|------|------|------|------|
| `component` | class | ✅ | 页面组件类 |
| `background` | string | - | 背景样式（CSS background 属性），默认：`#ffffff`（白色）|
| `headerTextColor` | string | - | 头部文字颜色，默认：`#000000`（黑色） |
| `width` | number \| string | - | 窗口宽度，数字时单位为 `px`，默认：`800` |
| `height` | number \| string | - | 窗口高度，数字时单位为 `px`，默认：`600` |
| `showFullscreenBtn` | boolean | - | 是否显示全屏按钮，默认：`false` |
| `resize` | boolean | - | 是否允许调整窗口大小，默认：`false` |
| `move` | boolean | - | 是否允许移动窗口，默认：`false` |
| `type` | string | - | 页面类型，可选值：`main`（主页面）、`config`（小部件配置页面），默认： `config` |

### 小部件配置参数

| 参数 | 类型 | 必填 | 说明 |
|------|------|------|------|
| `component` | class | ✅ | 小部件组件类 |
| `configComponentName` | string | - | 对应的配置页面名称（配置后会在添加组件、小部件的右键菜单打开页面配置组件的窗口） |
| `widgetName` | string | - | 小部件显示名称（1.1新增，支持 `$t:` 语法） |
| `widgetDescription` | string | - | 小部件描述（1.1新增，支持 `$t:` 语法） |
| `sort` | number | - | 排序权重，数字越小越靠前（1.1新增） |
| `size` | string[] | ✅ | 支持的网格尺寸 |
| `background` | string | - | 默认背景颜色 |



## 支持的网格尺寸

| 尺寸 | 说明（行x列） | 适用场景 |
|------|------|----------|
| `1x1` | 1格×1格 | 迷你组件 |
| `1x2` | 1格×2格 | 纵向窄卡片 |
| `2x1` | 2格×1格 | 横向窄卡片 |
| `2x2` | 2格×2格 | 标准卡片 |
| `2x4` | 2格×4格 | 大卡片 |
| `1xfull` | 1格×全屏宽 | 全屏宽度展示 |


## 命名规范

- `microAppId`：使用 `作者-功能` 格式，如 `hslr-weather`
- 页面名称：使用小写字母和连字符，如 `weather-config`
- 小部件名称：使用小写字母和连字符，如 `weather-widget`
