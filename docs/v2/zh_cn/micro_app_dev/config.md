---
outline: [2,3]
---

# 配置说明

微应用包含两个主要配置文件：`app.config.js` 和 `components.config.js`。


## 应用配置 (app.config.js)

定义微应用的基础信息、权限和国际化支持。

### 基础配置

| 参数 | 类型 | 必填 | 说明 |
|------|------|------|------|
| `author` | string | ✅ | 作者标识，用于生成组件标签名前缀，不能含特殊符号 |
| `microAppId` | string | ✅ | 应用唯一标识，格式为 `作者-应用名` |
| `version` | string | ✅ | 版本号，遵循语义化版本规范 |
| `entry` | string | ✅ | 入口文件路径，如 `'main.js'` |
| `icon` | string | ✅ | 应用图标文件名（位于 public 目录） |

### 完整示例

```javascript
export default {
  // 基础信息
  author: 'hslr',
  microAppId: 'hslr-weather',
  version: '1.0.0',
  entry: 'main.js',
  icon: 'logo.png',

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
    config: {
      scope: 'app',
      isPublic: true
    }
  }
};
```

### 国际化支持

语言标识符遵循 [IETF BCP 47](https://www.rfc-editor.org/info/bcp47) 标准：

- `zh-CN` - 简体中文
- `en-US` - 英语
- `zh-TW` - 繁体中文
- `ja-JP` - 日语
- `ko-KR` - 韩语


## 组件配置 (components.config.js)

注册页面和小部件组件。

### 完整示例

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

### 页面配置参数

| 参数 | 类型 | 必填 | 说明 |
|------|------|------|------|
| `component` | class | ✅ | 页面组件类 |
| `background` | string | - | 背景样式（CSS background 属性） |
| `headerTextColor` | string | - | 头部文字颜色 |
| `type` | string | - | 页面类型，可选值：`main`（主页面）、`config`（小部件配置页面），默认为 `config` |

### 小部件配置参数

| 参数 | 类型 | 必填 | 说明 |
|------|------|------|------|
| `component` | class | ✅ | 小部件组件类 |
| `configComponentName` | string | - | 对应的配置页面名称（配置后会在添加组件、小部件的右键菜单打开页面配置组件的窗口） |
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
