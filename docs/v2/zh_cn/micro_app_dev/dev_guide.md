# 组件开发

本文档介绍如何使用 Lit 框架开发微应用组件，包括类继承、模板渲染、样式、生命周期等核心概念。更多 Lit 特性可以参考 [Lit框架官网](https://lit.dev)，[Lit框架官网-汉化站](https://lit.tips/)，这里仅简单举几个示例。


## 类继承关系

微应用组件继承关系如下：

```
LitElement (Web Components 标准)
  └── SunPanelElement (通用基类)
       ├── SunPanelWidgetElement (小部件/卡片组件)
       └── SunPanelPageElement (页面组件)
```

| 组件 | 用途 |
|------|------|
| `SunPanelWidgetElement` | 面板上的卡片小部件 |
| `SunPanelPageElement` | 弹窗页面/配置页面 |


## 响应式属性

使用 Lit 的 `static properties` 声明响应式属性，属性变化会自动触发重新渲染：

```javascript
import { SunPanelWidgetElement } from '@sun-panel/micro-app';

class MyWidget extends SunPanelWidgetElement {
  static properties = {
    name: { type: String },
    count: { type: Number },
    isActive: { type: Boolean },
    items: { type: Array },
    config: { type: Object },
  };

  constructor() {
    super();
    this.name = '默认值';
    this.count = 0;
    this.items = [];
  }
}
```

**支持的类型**：String, Number, Boolean, Array, Object


## 模板渲染

::: tip
让 WebComponents 组件中的html代码高亮，可以在vscode上安装[高亮插件](https://lit.dev/docs/tools/development/#lit-plugin)。更多模版语法Lit特性可以参考 [Lit框架官网](https://lit.dev)，[Lit框架官网-汉化站](https://lit.tips/)
:::

### 基本语法

```javascript
import { html } from 'lit';

render() {
  return html`
    <div class="container">
      <h1>${this.name}</h1>
      <p>计数: ${this.count}</p>
    </div>
  `;
}
```

### 条件渲染

```javascript
render() {
  return html`
    ${this.isActive
      ? html`<div class="active">激活</div>`
      : html`<div class="inactive">未激活</div>`}
  `;
}
```

### 循环渲染

```javascript
render() {
  return html`
    <ul>
      ${this.items.map(item => html`<li>${item.name}</li>`)}
    </ul>
  `;
}
```


## 事件监听

```javascript
render() {
  return html`
    <button @click=${this.handleClick}>点击</button>
    <input @input=${this.handleInput}>
  `;
}

handleClick(e) {
  console.log('点击了', e.target);
}

handleInput(e) {
  this.inputValue = e.target.value;
}
```


## 样式定义

```javascript
import { css } from 'lit';

static styles = css`
  .container {
    padding: 16px;
    background: #fff;
  }

  :host([dark]) .container {
    background: #222;
    color: #fff;
  }
`;
```


## 上下文数据 (spCtx)

通过 `this.spCtx` 访问平台提供的上下文数据。此上下文属性全部支持响应式更新页面。

### 通用属性

| 属性 | 类型 | 说明 |
|------|------|------|
| `api` | MicroAppAPI | 参考[平台 API](./api) |
| `darkMode` | boolean | 深色模式 |
| `language` | string | 语言，如 `'zh-CN'` |
| `networkMode` | `'wan' \| 'lan' \| 'auto'` | 网络模式 |
| `staticPath` | string | 静态资源路径 |
| `role` | `0 \| 1 \| 2` | 角色：0=公开, 1=私有, 2=管理员 |

### 小部件组件额外属性

```javascript
this.spCtx = {
  // 通用属性
  ...通用属性,

  // 小部件特有
  widgetInfo: {
    widgetId: string,    // 卡片唯一标识
    background: string,  // 背景颜色
    config: object,       // 用户配置数据
    gridSize: string,    // 尺寸，如 '1x1', '2x2'
    title: string,       // 卡片标题
  },
};
```

### 页面组件额外属性

```javascript
this.spCtx = {
  // 通用属性
  ...通用属性,

  // 页面特有
  background: string,    // 页面背景色
  widgetInfo: object,    // 组件配置
  customParam: any,     // 自定义参数（打开窗口时传入）
};
```


## 生命周期

### 执行顺序

```
constructor → connectedCallback → initializeMicroApp
→ onConnected → onInitialized → render → firstUpdated
→ onFirstRendered → (属性变化) updated → (DOM移除) disconnectedCallback → onDisconnected
```

### 生命周期钩子

| 钩子 | 说明 | 适用 |
|------|------|------|
| `constructor()` | 实例创建 | 所有 |
| `onConnected()` | 连接后回调 | 所有 |
| `onInitialized()` | 初始化完成回调 | **Widget**: 无参数<br>**Page**: `{ widgetInfo, customParam }` |
| `render()` | 返回 HTML 模板（必须重写） | 所有 |
| `onFirstRendered()` | 首次渲染完成回调 | 所有 |
| `onDisconnected()` | 断开连接回调，用于清理 | 所有 |

### 数据变化监听

| 回调 | 触发条件 | 参数 |
|------|---------|------|
| `onWidgetInfoChanged()` | 卡片配置变化（仅 widget 组件支持） | `(newWidgetInfo, oldWidgetInfo)` |
| `onDarkModeChanged()` | 深色模式切换 | `(isDark, oldIsDark)` |
| `onLanguageChanged()` | 语言切换 | `(language, oldLanguage)` |
| `onNetworkModeChanged()` | 网络模式变化 | `(networkMode, oldNetworkMode)` |

其中 `networkMode` 可选值：`'wan'` | `'lan'` | `'auto'`


## 常用方法

```javascript
// 触发重新渲染
this.requestUpdate();

// 获取静态资源路径
const logoUrl = this.getAssetPath('/logo.png');
```

为兼容微应用开发和生产环境都能正确的访问到静态资源文件，如果你的微应用有一些图片等静态资源，你可以这样做：
```js

// 从工具目录中导入方法
import { getAssetPath } from '../utils/assetPath.js';

export class Widget extends SunPanelWidgetElement {
  // 省略部分代码...

  // 定义一个方法，将上下文的静态路径传入给 getAssetPath 
  // 之后每次使用仅这样写 this.getAssetPath("/images/abc.jpg") 即可同时兼容开发和生产环境了。
  getAssetPath(relativePath) {
    console.log('[getAssetPath] Called with:', { relativePath, staticPath: this.spCtx.staticPath });
    return getAssetPath(relativePath, this.spCtx.staticPath);
  }

  // 省略部分代码...
}
```


## 完整示例

```javascript
import { SunPanelWidgetElement } from '@sun-panel/micro-app';
import { html, css } from 'lit';

export class DemoWidget extends SunPanelWidgetElement {
  static properties = {
    title: { type: String },
    count: { type: Number },
  };

  constructor() {
    super();
    this.title = '标题';
    this.count = 0;
  }

  onInitialized() {
    // 初始化
    this.loadData();
  }

  onWidgetInfoChanged(newInfo) {
    this.title = newInfo?.config?.title || '默认';
    this.requestUpdate();
  }

  handleClick() {
    this.count++;
    this.requestUpdate();
  }

  render() {
    return html`
      <div        <h2 class="card">
>${this.title}</h2>
        <p>计数: ${this.count}</p>
        <button @click=${this.handleClick}>+1</button>
      </div>
    `;
  }

  onDisconnected() {
    // 清理资源，如定时器
  }

  static styles = css`
    .card { padding: 16px; }
  `;
}
```


## 注意事项

1. **不要在 constructor 中操作 DOM** - 此时 DOM 还不存在
2. **在 onFirstRendered 中操作 DOM** - 此时 DOM 已渲染完成
3. **修改属性后调用 requestUpdate()** - 触发重新渲染
4. **在 onDisconnected 中清理资源** - 防止内存泄漏
5. **调用 super 方法** - 重写生命周期方法时记得调用父类方法


## 下一步

- [平台 API](./api) - 调用网络、缓存、数据节点等能力
- [数据节点](./data_node) - 数据存储和共享
- [权限声明](./permission) - 权限配置
