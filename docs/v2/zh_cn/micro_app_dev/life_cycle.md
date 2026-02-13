# 微应用生命周期

微应用组件基于 LitElement 构建，提供完整的生命周期钩子函数。本文档将详细介绍微应用的生命周期流程和各个阶段的回调函数。

## 类继承结构

```
LitElement
  └── SunPanelElement (基类)
       ├── SunPanelWidgetElement (小部件基类)
       └── SunPanelPageElement (页面基类)
```

## 生命周期流程图

```
┌─────────────────┐
│   constructor   │ 构造函数
└────────┬────────┘
         │
         ▼
┌──────────────────────┐
│ connectedCallback()  │ 元素插入 DOM
└────────┬─────────────┘
         │
         ▼
┌───────────────────────┐
│ initializeMicroApp()  │ 初始化微应用
└────────┬──────────────┘
         │
         ▼
┌─────────────────┐
│  onConnected()  │ 连接回调
└────────┬────────┘
         │
         ▼
┌─────────────────────┐
│  onInitialized()   │ 初始化完成回调
└────────┬────────────┘
         │
         ▼
┌─────────────────────┐
│   render()         │ 首次渲染
└────────┬────────────┘
         │
         ▼
┌──────────────────────┐
│  firstUpdated()      │ 首次更新完成
└────────┬─────────────┘
         │
         ▼
┌─────────────────────────┐
│  onFirstRendered()     │ 首次渲染完成回调
└────────┬────────────────┘
         │
         │ ┌──────────────────────────────┐
         ├─│ 属性变化: spCtx            │──► onWidgetInfoChanged()
         │ │                              │    onDarkModeChanged()
         │ │                              │    onLanguageChanged()
         │ │                              │    onNetworkModeChanged()
         │ └──────────────────────────────┘
         │
         ▼
┌──────────────────────┐
│   updated()         │ 每次更新完成
└────────┬─────────────┘
         │
         ▼
┌─────────────────────┐
│  ... (持续更新)    │
└────────┬────────────┘
         │
         ▼
┌──────────────────────────────┐
│ disconnectedCallback()      │ 元素从 DOM 移除
└────────┬─────────────────────┘
         │
         ▼
┌─────────────────────┐
│ onDisconnected()   │ 断开连接回调
└─────────────────────┘
```

## 生命周期详解

### 1. 构造阶段

#### constructor()
- **执行时机**: 创建组件实例时
- **说明**: 初始化组件实例，设置默认状态
- **注意**: 不要在此阶段访问 DOM 或执行耗时操作

**示例**:
```javascript
export class MyWidget extends SunPanelWidgetElement {
  static properties = {
    name: { type: String },
  };

  constructor() {
    super();
    this.name = "World";
  }
}
```

### 2. 连接阶段

#### connectedCallback()
- **执行时机**: 元素被插入到 DOM 时
- **说明**: LitElement 原生生命周期钩子，用于执行连接相关操作
- **内部行为**: 调用 `initializeMicroApp()` 和 `onConnected()`

#### initializeMicroApp()
- **执行时机**: 在 `connectedCallback()` 中调用
- **说明**: 初始化微应用，设置事件监听器
- **注意**: 该方法只执行一次

#### onConnected()
- **执行时机**: 元素连接到 DOM 后
- **说明**: 子类可重写此方法，用于执行连接后的初始化逻辑
- **注意**: 此方法内部会调用 `onInitialized()`

**示例**:
```javascript
onConnected() {
  super.onConnected();  // 必须调用父类方法
  console.log('Widget connected');
}
```

### 3. 初始化阶段

#### onInitialized() / onInitialized({ widgetInfo, customParam })
- **执行时机**: 在 `onConnected()` 中调用
- **说明**: 初始化完成回调，子类可重写此方法
- **参数**:
  - `SunPanelWidgetElement.onInitialized()`: 无参数
  - `SunPanelPageElement.onInitialized({ widgetInfo, customParam })`: 包含 widgetInfo 和 customParam

**Widget 示例**:
```javascript
onInitialized() {
  this.name = "World"
  this.handleChangeName()
}
```

**Page 示例**:
```javascript
onInitialized({ widgetInfo, customParam }) {
  console.log('Initialized', widgetInfo, customParam);
  this.widgetInfo = widgetInfo;
  const config = widgetInfo?.config || {};
  this.showLogo = config.showLogo ?? true;
  this.requestUpdate();
}
```

### 4. 渲染阶段

#### render()
- **执行时机**: 每次 Lit 检测到属性变化时
- **说明**: 返回组件的 HTML 模板
- **注意**: 必须由子类实现

**示例**:
```javascript
render() {
  const showLogo = this.spCtx?.widgetInfo?.config?.showLogo ?? true;
  return html`
    <div class="container">
      ${showLogo ? html`<img src="${this.getAssetPath('/logo.png')}" />` : ''}
      ${this.spCtx.gridSize === "1x2" ? this.render1x2() : ''}
      ${this.spCtx.gridSize === "2x2" ? this.render2x2() : ''}
    </div>
  `;
}
```

### 5. 首次渲染完成阶段

#### firstUpdated()
- **执行时机**: 首次渲染完成后
- **说明**: LitElement 原生生命周期钩子
- **内部行为**: 调用 `onFirstRendered()`

#### onFirstRendered()
- **执行时机**: 首次渲染完成后
- **说明**: 适合进行 DOM 查询、初始化第三方库等操作
- **注意**: 只执行一次

**示例**:
```javascript
onFirstRendered() {
  // DOM 操作
  const element = this.shadowRoot.querySelector('.my-element');
  // 初始化第三方库
  this.chart = new Chart(element, config);
}
```

### 6. 更新阶段

#### updated(changedProperties)
- **执行时机**: 每次更新完成后
- **说明**: LitElement 原生生命周期钩子
- **参数**: `changedProperties` - 包含变化的属性
- **内部行为**:
  - 监听 `spCtx` 变化
  - 调用相应的回调函数

**自动触发的回调**:
- `onWidgetInfoChanged(newWidgetInfo, oldWidgetInfo)` - 小部件信息变化时
- `onDarkModeChanged(isDark, oldIsDark)` - 深色模式变化时
- `onLanguageChanged(language, oldLanguage)` - 语言变化时
- `onNetworkModeChanged(networkMode, oldNetworkMode)` - 网络模式变化时

**示例**:
```javascript
// Widget 专用
onWidgetInfoChanged(newWidgetInfo, oldWidgetInfo) {
  console.log('Widget info changed:', newWidgetInfo, oldWidgetInfo);
  if (newWidgetInfo?.config?.textOption === "custom") {
    this.name = newWidgetInfo.config?.customText;
  }
  this.requestUpdate();
}

// 通用
onDarkModeChanged(isDark, oldIsDark) {
  console.log('Dark mode changed:', isDark);
  // 更新样式或重新渲染
}

onLanguageChanged(language, oldLanguage) {
  console.log('Language changed:', language);
  // 更新多语言文本
}

onNetworkModeChanged(networkMode, oldNetworkMode) {
  console.log('Network mode changed:', networkMode);
  // 根据网络模式调整请求策略
}
```

### 7. 断开连接阶段

#### disconnectedCallback()
- **执行时机**: 元素从 DOM 移除时
- **说明**: LitElement 原生生命周期钩子
- **内部行为**: 调用 `_cleanupEventListeners()` 和 `onDisconnected()`

#### onDisconnected()
- **执行时机**: 元素从 DOM 移除后
- **说明**: 子类可重写此方法，用于清理资源

**示例**:
```javascript
onDisconnected() {
  super.onDisconnected();  // 必须调用父类方法
  // 清理定时器
  if (this.timer) {
    clearInterval(this.timer);
  }
  // 清理第三方库实例
  if (this.chart) {
    this.chart.destroy();
  }
}
```

## 不同组件类型的生命周期差异

### SunPanelWidgetElement (小部件组件)

小部件组件继承自 `SunPanelWidgetElement`，专用于面板上的卡片组件。

**特有生命周期**:
- `onInitialized()` - 无参数的初始化回调
- `onWidgetInfoChanged(newWidgetInfo, oldWidgetInfo)` - 小部件信息变化回调

**上下文数据**:
```javascript
this.spCtx = {
  api: MicroAppAPI,      // 微应用 API
  darkMode: boolean,     // 深色模式
  language: string,      // 语言
  networkMode: 'wan' | 'lan',  // 网络模式
  staticPath: string,    // 静态资源路径
  role: 0 | 1 | 2,      // 角色
  widgetInfo: WidgetInfo, // 小部件信息
}
```

### SunPanelPageElement (页面组件)

页面组件继承自 `SunPanelPageElement`，专用于以窗口形式加载的页面组件。

**特有生命周期**:
- `onInitialized({ widgetInfo, customParam })` - 带参数的初始化回调

**上下文数据**:
```javascript
this.spCtx = {
  api: MicroAppAPI,      // 微应用 API
  darkMode: boolean,     // 深色模式
  language: string,      // 语言
  networkMode: 'wan' | 'lan',  // 网络模式
  staticPath: string,    // 静态资源路径
  role: 0 | 1 | 2,      // 角色
  background: string,    // 背景颜色
  widgetInfo: WidgetInfo, // 小部件信息
  customParam: any,      // 自定义参数
}
```

## 最佳实践

### 1. 初始化时机
- 在 `onInitialized()` 中设置初始状态
- 在 `onFirstRendered()` 中进行 DOM 操作和第三方库初始化

### 2. 状态更新
- 使用 `requestUpdate()` 触发重新渲染
- 使用 `updateContext(partialContext)` 更新上下文数据

### 3. 资源清理
- 在 `onDisconnected()` 中清理定时器、事件监听器和第三方库实例

### 4. 响应式属性
- 使用 Lit 的响应式属性系统自动触发更新
- 监听 `spCtx` 变化来自动调用对应的回调函数

### 5. 避免内存泄漏
- 确保在组件销毁时清理所有资源
- 使用框架提供的事件管理方法

## 完整示例

### Widget 组件示例

```javascript
import { SunPanelWidgetElement } from '@sun-panel/micro-app';
import { html, css } from 'lit';

export class MyWidget extends SunPanelWidgetElement {
  static properties = {
    name: { type: String },
  };

  constructor() {
    super();
    this.name = "World";
  }

  onInitialized() {
    this.name = "World";
    this.handleChangeName();
  }

  onFirstRendered() {
    console.log('Widget first rendered');
    // 初始化第三方库
  }

  onWidgetInfoChanged(newWidgetInfo, oldWidgetInfo) {
    console.log('Widget info changed:', newWidgetInfo, oldWidgetInfo);
    if (newWidgetInfo?.config?.textOption === "custom") {
      this.name = newWidgetInfo.config?.customText;
    } else {
      this.name = "World";
    }
    this.requestUpdate();
  }

  onDarkModeChanged(isDark, oldIsDark) {
    console.log('Dark mode changed:', isDark);
    // 更新样式
  }

  onLanguageChanged(language, oldLanguage) {
    console.log('Language changed:', language);
    // 更新多语言文本
  }

  onNetworkModeChanged(networkMode, oldNetworkMode) {
    console.log('Network mode changed:', networkMode);
    // 调整请求策略
  }

  handleChangeName() {
    this.name = this.name === "World" ? "Sun-Panel" : "World";
  }

  render() {
    return html`
      <div class="container">
        Hello, <span @click=${this.handleChangeName}>${this.name}</span>!
      </div>
    `;
  }

  static styles = css`
    .container {
      font-family: Arial, sans-serif;
      padding: 16px;
    }
  `;
}
```

### Page 组件示例

```javascript
import { SunPanelPageElement } from '@sun-panel/micro-app';
import { html } from 'lit';

export class MyPage extends SunPanelPageElement {
  static properties = {
    widgetInfo: { type: Object },
    showLogo: { type: Boolean },
    textOption: { type: String },
    customText: { type: String },
  };

  onInitialized({ widgetInfo, customParam }) {
    console.log('Page initialized', widgetInfo, customParam);
    this.widgetInfo = widgetInfo;
    const config = widgetInfo?.config || {};
    this.showLogo = config.showLogo ?? true;
    this.textOption = config.textOption ?? 'toggle';
    this.customText = config.customText || '';
    this.requestUpdate();
  }

  onFirstRendered() {
    console.log('Page first rendered');
    // DOM 操作
  }

  onDarkModeChanged(isDark, oldIsDark) {
    console.log('Dark mode changed:', isDark);
    this.requestUpdate();
  }

  async handleSave() {
    await this.spCtx.api.widget.save({
      ...this.widgetInfo,
      config: {
        ...this.widgetInfo.config,
        showLogo: this.showLogo,
        textOption: this.textOption,
        customText: this.customText,
      },
    });
  }

  render() {
    const darkMode = this.spCtx?.darkMode ?? false;
    return html`
      <div class="container" style="color: ${darkMode ? '#e5e5e5' : '#262626'}">
        <h1>配置页面</h1>
        <label>
          <input type="checkbox" .checked="${this.showLogo}" 
                 @change="${(e) => this.showLogo = e.target.checked}">
          显示 Logo
        </label>
        <button @click="${this.handleSave}">保存</button>
      </div>
    `;
  }
}
```

## 常见问题

### Q: 什么时候使用 onInitialized() 和 onFirstRendered()?
A: `onInitialized()` 用于设置初始状态，此时 DOM 可能还未渲染；`onFirstRendered()` 用于 DOM 操作和第三方库初始化，此时 DOM 已完全渲染。

### Q: 如何监听配置变化?
A: 重写 `onWidgetInfoChanged(newWidgetInfo, oldWidgetInfo)` 方法，当 `widgetInfo` 发生变化时会自动调用。

### Q: 如何响应主题切换?
A: 重写 `onDarkModeChanged(isDark, oldIsDark)` 方法，或者直接在 `render()` 中使用 `this.spCtx.darkMode`。

### Q: 组件销毁时需要做什么?
A: 重写 `onDisconnected()` 方法，清理定时器、事件监听器和第三方库实例。

### Q: 为什么有时需要调用 requestUpdate()?
A: 当修改了非响应式属性或需要强制更新 UI 时，需要调用 `requestUpdate()` 触发重新渲染。
