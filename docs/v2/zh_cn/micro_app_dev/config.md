---
outline: [2,3]
---
# 配置说明

## 📂 配置文件结构

微应用项目包含两个主要配置文件：

```txt
config/
├── app.config.js        # 应用主配置文件
└── components.config.js # 组件注册配置文件
```

## ⚙️ 应用配置 (app.config.js) {#app_config}

应用主配置文件定义了微应用的基础信息、权限控制和国际化支持。

### 完整配置示例

```javascript
export default {
  // 应用基础信息
  author: 'hslr',                          // 作者标识
  microAppId: 'hslr-weather',    // 应用唯一标识
  version: '1.0.0',                        // 版本号
  entry: 'main.js',                        // 入口文件
  icon: 'logo.png',                        // 应用图标

  // 应用国际化信息
  appInfo: {
    'zh-CN': {
      appName: '天气',
      description: '可以查看全球各地的天气',
      networkDescription: '首次运行，需(向 xxx.weather.com)下载城市列表数据'
    },
    'en-US': {
      appName: 'Weather',
      description: '可以查看全球各地的天气',
      networkDescription: 'For the first time, you need to download city list data(from xxx.weather.com)'
    }
  },

  // 权限配置
  permissions: [
    'network',     // 网络权限
    'dataNode'     // 数据节点权限
  ],

  // 网络域名白名单
  networkDomains: [
    'example.weather.com'
  ],

  // 数据节点配置
  dataNodes: {
    config: {
      scope: 'app', // App级别-所有用户可读，管理员可写
      isPublic: true // 是否允许公开模式读取
    },
    weatherData: {
      scope: 'app',
      isPublic: true
    },
    note: {
      scope: 'user',// 用户级别-多账号数据隔离，仅当前用户可读写
      isPublic: false 
    }
  }
};
```

### 基础配置参数

| 参数名 | 类型 | 必填 | 示例值 | 说明 |
|--------|------|------|--------|------|
| `author` | string | ✅ | hslr | 作者标识，用于生成组件标签名前缀，大于三个字符，**不含”-“以外的特殊符号** |
| `microAppId` | string | ✅ | `hslr-weather` | 应用唯一标识，格式需使用 `作者-应用名` 格式，**不含”-“以外的特殊符号** |
| `version` | string | ✅ | 1.0.0 | 版本号，遵循语义化版本规范 |
| `entry` | string | ✅ | `'main.js'` | 入口文件路径 |
| `icon` | string | ✅ | `icon.png` | 应用图标文件名（位于 public 目录） |

### 应用信息配置 （appInfo）

应用支持多语言配置，至少需要配置一种语言。语言标识符遵循 [IETF BCP 47](https://www.rfc-editor.org/info/bcp47) 标准，常用的配置包括：

- `zh-CN` - 简体中文（中国大陆）
- `en-US` - 英语（美国）
- `zh-TW` - 繁体中文（台湾）
- `ja-JP` - 日语（日本）
- `ko-KR` - 韩语（韩国）
- `es-ES` - 西班牙语（西班牙）
<!-- - `fr-FR` - 法语（法国）
- `de-DE` - 德语（德国）
- `ru-RU` - 俄语（俄罗斯）
- `pt-BR` - 葡萄牙语（巴西）
- `it-IT` - 意大利语（意大利）
- `ar-SA` - 阿拉伯语（沙特阿拉伯） -->

<!-- **语言代码参考资源：**
- [ISO 639-1 两字母语言代码完整列表](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes)
- [IANA Language Subtag Registry](https://www.iana.org/assignments/language-subtag-registry)（官方权威源）
- [BCP 47 Language Tags Generator](https://r12a.github.io/app-subtags/)（在线工具） -->

```javascript
appInfo: {
  'zh-CN': {
    appName: '天气',
    description: '查看各地天气数据',
    networkDescription: '首次安装后下载必要的配置数据'
  },
  'en-US': {
    appName: 'App Name',
    description: 'App Description',
    networkDescription: 'Network Description'
  }
}
```

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| `appName` | string | ✅ | 应用显示名称 |
| `description` | string | ✅ | 应用功能描述 |
| `networkDescription` | string | - | 网络权限说明，未使用网络权限可忽略 |

### 权限配置
请务必准确声明，否则可能不能使用相关API能力和注册，更多权限说明参阅 [权限声明](./permission)

```javascript
permissions: [
  'network',     // 网络权限
  'dataNode'     // 数据节点权限
]
```



### 网络配置

```javascript
networkDomains: [
  'api.example.com',
  'github.com'
]
```

| 参数名 | 类型 | 说明 |
|--------|------|------|
| `networkDomains` | string[] | 网络请求白名单域名列表 |

### 数据节点配置 (dataNodes)
具体的说明以及权限可参阅 [数据节点说明](./data_node)
```javascript
// 数据节点配置
dataNodes: {
  config: {
    scope: 'app', // App级别-所有用户可读，管理员可写
    isPublic: true // 是否允许公开模式读取
  },
  weatherData: {
    scope: 'app',
    isPublic: true
  },
  note: {
    scope: 'user',// 用户级别-多账号数据隔离，仅当前用户可读写
    isPublic: false 
  }
}
```

| 参数名 | 类型 | 说明 |
|--------|------|------|
| `dataNodes` | object | 数据节点配置对象，键为节点标识 |

#### 数据节点内部字段说明

| 字段名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| `scope` | string | ✅ | 数据作用域，可选值：`'app'`（应用级别）或 `'user'`（用户级别） |
| `isPublic` | boolean | ✅ | 是否允许在公开模式下读取，`true`表示公开可读，`false`表示仅登录用户可读 |



## 🧩 组件配置 (components.config.js)

组件配置文件用于注册页面和小部件组件。每个微应用建议最多包含3个`小部件组件`、`小部件配置组件`、`主页面组件`（暂未有入口打开，可以从小部件打开）。可以单独有一个小部件组件，也可以有一个独立主页面组件，非强制要求齐全，和组件数量，但是不可将多种无关类型的功能放在同一个微应用内。

### 完整配置示例

```javascript
import HelloWorldConfig from '../src/components/widgetConfig.js';
import HelloWorldWidget from '../src/components/widget.js';

export default {
  // 页面注册
  pages: {
    'hello-world-config': {
      component: HelloWorldConfig,        // 配置页面组件
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',  // 渐变背景
      headerTextColor: '#ffffff'          // 白色文字
    }
  },

  // 小部件（卡片）注册
  widgets: {
    'hello-world-widget': {
      component: HelloWorldWidget,           // 小部件组件
      configComponentName: 'hello-world-config', // 配置页面名称
      size: ['1x1', '1x2', '1xfull', '2x1', '2x2', '2x4'], // 支持的尺寸
      background: '',                        // 默认背景颜色
    },
  },
};
```

### 页面配置

```javascript
pages: {
  'page-name': {
    component: PageComponent,        // 页面组件类
    background: '#000',  // 背景样式
    headerTextColor: '#1890ff'          // 头部文字颜色
    main:false // 是否为主页面
  }
}
```

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| `component` | class | ✅ | 页面组件类 |
| `main` | boolean | ❌ | 是否为主页面，首个开发版暂不兼容，后期项目会增加相关应用列表入口，点击直接打开 |
| `background` | string | ❌ | 背景样式（CSS background 属性） |
| `headerTextColor` | string | ❌ | 头部文字颜色（CSS color 值） |

### 小部件配置

```javascript
widgets: {
  'widget-name': {
    component: WidgetComponent,           // 小部件组件类
    configComponentName: 'config-page',   // 对应配置页面名称
    size: ['1x1', '2x2'],                 // 支持的尺寸
    background: '',                       // 默认背景颜色
  }
}
```

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| `component` | class | ✅ | 小部件组件类 |
| `configComponentName` | string | ✅ | 对应的配置页面名称 |
| `size` | string[] | ✅ | 支持的网格尺寸 |
| `background` | string | ❌ | 卡片背景颜色,留空跟随系统卡片默认色。小部件可以设置和覆盖此颜色 |

### 支持的网格尺寸

| 尺寸 | 说明 | 适用场景 |
|------|------|----------|
| `1x1` | 1格×1格 | 高x宽 |
| `1x2` | 1格×2格 | 高x宽 |
| `2x1` | 2格×1格 | 高x宽 |
| `2x2` | 2格×2格 | 高x宽 |
| `2x4` | 2格×4格 | 高x宽 |
| `1xfull` | 1格×全屏宽 | 全屏宽度展示 |



<!-- ## 🔄 配置生成流程

1. **开发模式**：运行 `npm run dev` 或 `npm run gen:dev`
   - 自动添加 `-dev` 后缀到 `microAppId`
   - 生成带开发标识的配置

2. **生产模式**：运行 `npm run build` 或 `npm run gen`
   - 使用原始 `microAppId`
   - 生成正式版本配置

3. **配置文件生成**：系统会自动生成 `app.json` 文件
   - 包含完整的应用配置信息
   - 用于主平台识别和加载微应用 -->

## 📋 配置最佳实践

### 命名规范
- `microAppId`：使用 `作者-功能` 格式
- 页面名称：使用小写字母和连字符，如 `weather-config`
- 小部件名称：使用小写字母和连字符，如 `weather-widget`

### 权限控制
- 仅申请必要的权限
- 网络权限需明确指定域名白名单

### 国际化支持
- 至少提供一项语言配置
- 描述信息要准确反映应用功能
- 网络描述要说明数据流向

### 组件设计
- 合理选择支持的网格尺寸
- 背景配置要推荐深色模式适配
- 配置页面要与小部件功能对应