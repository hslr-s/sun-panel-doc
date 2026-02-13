# 快速开始



需提前在电脑上安装好（NodeJS >= 18.20）



## 开始

我们这里以 `Hello World` 项目展开演示。
首先要先克隆项目模板 [项目地址](https://github.com/Sun-Panel/microapp-hello-world) ，克隆到本地后，进入项目的目录，执行一下命令

### 1. 安装依赖

```bash
npm install
```

### 2. 启动开发服务器

```bash
npm run dev
```

### 3. 构建生产版本

```bash
npm run build
```

### 4. 打包组件包

```bash
npm run pack
```




## 📂 项目结构

我们开发时，仅需关注`config`和`src`这两个目录即可，静态资源存放在`public`目录下，自动构建。其他都归属于模版，无需修改，也不推荐修改。

```txt {2-8,13}
microapp-hello-world/
├── config/                          # 配置文件目录 // [!code focus]
│   ├── app.config.js               # 应用主配置（应用信息、权限、数据节点等）// [!code focus]
│   └── components.config.js        # 组件配置（页面和组件注册）// [!code focus]
├── src/                            # 源码目录 // [!code focus]
│   ├── components/                 # 组件文件 // [!code focus]
│   │   ├── widget.js              # 小部件组件（卡片主体） // [!code focus]
│   │   └── widgetConfig.js        # 配置页面组件 // [!code focus]
│   ├── utils/                      # 工具函数
│   │   └── assetPath.js           # 资源路径处理
│   └── main.js                     # 入口文件（打包成单个对象）
├── build/                          # 构建脚本目录
├── public/                         # 静态资源（直接打包到根目录）// [!code focus]
│   ├── logo.png                   # 应用图标
│   └── sun-panel-logo.png         # Sun Panel Logo
├── dist/                           # 构建输出目录
├── packages/                       # 打包输出目录（.zip 文件）
├── app.json                        # 自动生成的应用配置
├── package.json                    # 项目依赖配置
├── vite.config.js                  # Vite 配置
├── demo.html                      # 开发调试页面
├── demo-usage.html                 # 使用示例页面
└── README.md                       # 项目说明
```



## ⚙️ 配置说明

### 应用配置
本实例仅演示了 `Hello world` 的配置文件，并不是最完整的，完整的配置项说明参阅[配置说明](./config#app_config)

`config/app.config.js` - 应用主配置文件：
```javascript
export default {
  // 应用基础信息
  author: 'hslr',                          // 作者标识
  microAppId: 'hslr-hello-world',          // 应用唯一标识
  version: '1.0.0',                        // 版本号
  entry: 'main.js',                        // 入口文件
  icon: 'logo.png',                        // 应用图标

  // 应用国际化信息
  appInfo: {
    'zh-CN': {
      appName: 'Hello World',
      description: 'Sun-Panel 演示微应用',
      networkDescription: '无需链接任何三方网站'
    },
    'en-US': {
      appName: 'Hello World',
      description: 'Micro App Hello World',
      networkDescription: 'For demonstration purposes'
    }
  },

  // 权限配置
  permissions: [
    // 'network',     // 网络权限
    // 'dataNode'     // 数据节点权限
  ],

  // 网络域名白名单
  networkDomains: [],

  // 数据节点配置
  dataNodes: {}
};
```

### 组件配置

`config/components.config.js` - 组件注册配置：

```javascript
export default {
  // 页面注册
  pages: {
    'hello-world-config': {
      component: HelloWorldConfig,        // 配置页面组件
      background: 'linear-gradient(...)',  // 背景颜色
      headerTextColor: '#1890ff'          // 头部文字颜色
    }
  },

  // 小部件（卡片）注册
  widgets: {
    'hello-world-widget': {
      component: HelloWorldWidget,           // 小部件组件
      configComponentName: 'hello-world-config', // 配置页面名称
      size: ['1x1', '1x2', '1xfull', '2x1', '2x2', '2x4'], // 支持的尺寸
      background: '',                        // 默认背景颜色
      isModifyBackground: false,            // 是否可修改背景色
    },
  },
};
```

## 🛠️ 开发指南

### 开发命令

| 命令 | 说明 |
|------|------|
| `npm run dev` | 启动开发服务器（自动添加 -dev 后缀） |
| `npm run build` | 生产模式构建 |
| `npm run build:dev` | 开发模式构建 |
| `npm run pack` | 打包组件包（生产模式） |
| `npm run pack:dev` | 打包组件包（开发模式） |
| `npm run gen` | 生成配置文件 |
| `npm run gen:dev` | 开发模式生成配置文件 |
| `npm run demo` | 启动交互式示例 |
| `npm run clean` | 清理构建产物 |

### 小部件组件开发

继承自 `SunPanelWidgetElement`，实现不同尺寸的渲染方法：

```javascript
import { SunPanelWidgetElement } from '@sun-panel/micro-app';
import { html, css } from 'lit';

export class Widget extends SunPanelWidgetElement {
  static properties = {
    name: { type: String },
  };

  // 组件初始化
  onInitialized() {
    this.name = "World";
  }

  // 配置变化回调
  handleCustomTextChanged(newValue, oldValue) {
    this.name = newValue || "World";
  }

  // 小部件信息变化回调
  onWidgetInfoChanged(newWidgetInfo, oldWidgetInfo) {
    this.requestUpdate();
  }

  // 不同尺寸的渲染方法
  render1x1() {
    return html`<div>1x1 内容</div>`;
  }

  render1x2() {
    return html`<div>1x2 内容</div>`;
  }

  render2x1() {
    return html`<div>2x1 内容</div>`;
  }

  render2x2() {
    return html`<div>2x2 内容</div>`;
  }

  render2x4() {
    return html`<div>2x4 内容</div>`;
  }

  render1xfull() {
    return this.render2x4();
  }

  // 主渲染方法
  render() {
    return html`
      <div class="container">
        ${this.spCtx.gridSize === "1x1" ? this.render1x1() : ''}
        ${this.spCtx.gridSize === "1x2" ? this.render1x2() : ''}
        ${this.spCtx.gridSize === "2x1" ? this.render2x1() : ''}
        ${this.spCtx.gridSize === "2x2" ? this.render2x2() : ''}
        ${this.spCtx.gridSize === "2x4" ? this.render2x4() : ''}
        ${this.spCtx.gridSize === "1xfull" ? this.render1xfull() : ''}
      </div>
    `;
  }

  static styles = css`
    /* 组件样式 */
  `;
}
```

### 上下文数据

组件中可以通过 `this.spCtx` 访问上下文数据：

```javascript
// 获取网格尺寸
const gridSize = this.spCtx.gridSize;  // "1x1", "2x2", etc.

// 获取小部件配置
const config = this.spCtx.widgetInfo.config;

// 获取静态资源路径
const staticPath = this.spCtx.staticPath;

// 获取深色模式状态
const darkMode = this.spCtx.darkMode;

// 获取平台 API
const platformAPI = this.spCtx.platformAPI;
```

## 生命周期
参考 [生命周期说明](./life_cycle.md)


## 📦 构建和打包

### 构建流程

1. **生成配置文件**
   - 从 `config/app.config.js` 读取配置
   - 自动生成 `app.json` 文件
   - 开发模式自动添加 `-dev` 后缀

2. **Vite 构建**
   - 构建源码到 `dist/` 目录
   - 将 `public/` 目录下的文件直接打包到根目录

3. **打包成 .zip**
   - 将 `app.json`、`main.js` 和静态资源打包
   - 输出到 `packages/` 目录
   - 文件名格式：`{microAppId}-{version}{-dev}.zip`

### 打包产物示例

```
packages/
└── hslr-hello-world-dev-1.0.0.zip
    ├── app.json              # 应用配置
    ├── main.js               # 组件入口
    ├── logo.png             # 应用图标
    └── sun-panel-logo.png   # Sun Panel Logo
```



## 🔌 主平台使用

在线开发环境：
输入开发环境的入口文件地址，运行之后可以在打开的页面上查看（例如：`http://localhost:3000/src/main.js`）

正式环境：
打包后，离线安装，上传


## 🎯 MicroAppPackage 结构
此项开发者无需过度关注，已经封装好的。

```javascript
{
  appConfig: {
    author: 'hslr',
    microAppId: 'hslr-hello-world-dev',  // 开发模式自动添加 -dev
    version: '1.0.0',
    entry: 'main.js',
    icon: 'logo.png',
    appInfo: { /* 国际化配置 */ },
    permissions: [/* 权限列表 */ ],
    networkDomains: [/* 域名白名单 */ ],
    dataNodes: { /* 数据节点配置 */ },
    dev: true
  },
  components: {
    pages: {
      'hello-world-config': {
        component: ConfigPage,
        background: 'linear-gradient(...)',
        headerTextColor: '#1890ff'
      }
    },
    widgets: {
      'hello-world-widget': {
        component: Widget,
        configComponentName: 'hello-world-config',
        size: ['1x1', '1x2', '2x1', '2x2', '2x4', '1xfull'],
        background: '',
        isModifyBackground: false
      }
    }
  }
}
```



## 💡 最佳实践

### 1. 组件命名规范

- **页面组件**：使用 `page` 前缀，如 `home-page`
- **小部件组件**：使用 `widget` 前缀，如 `weather-card`
- **配置页面**：与对应小部件关联，如 `weather-config`

### 2. 静态资源处理

将静态资源放入 `public/` 目录，构建时会自动打包到根目录：

```javascript
// 获取资源路径
import { getAssetPath } from '../utils/assetPath.js';

const logoUrl = getAssetPath('/sun-panel-logo.png', this.spCtx.staticPath);
```

### 3. 开发/生产环境区分

```javascript
const isDev = import.meta.env.DEV || import.meta.env.MODE === 'development';
const microAppId = isDev ? `${config.microAppId}-dev` : config.microAppId;
```

### 4. 深色模式适配

```javascript
render() {
  const bgColor = (this.spCtx && this.spCtx.darkMode) ? '#181818' : 'white';
  return html`
    <div style="background: ${bgColor}">
      <!-- 内容 -->
    </div>
  `;
}
```

## ❓ 常见问题（开发者交流群）

### Q: 如何判断是否为开发版本？

```javascript
const isDev = MicroAppPackage.appConfig.dev;
console.log(isDev);  // true 或 false
```

### Q: 开发遇到任何问题都可以添加我的微信/QQ(95302870)

文档还在不断完善，部分功能还没有提到，有任何问题加作者微信



## 📚 相关资源

- **交互式示例**：打开 `demo-usage.html` 查看完整示例
- **开发调试**：打开 `demo.html` 进行开发调试
- **API 文档**：参考 `@sun-panel/micro-app` SDK 文档
- **Lit 框架**：https://lit.dev/


