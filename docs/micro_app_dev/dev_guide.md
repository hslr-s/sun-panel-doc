# Component Development

This document introduces how to develop micro app components using the Lit framework, including class inheritance, template rendering, styles, lifecycle, and other core concepts. For more Lit features, refer to the [Lit framework official site](https://lit.dev) and the [Lit framework Chinese site](https://lit.tips). Only a few examples are given here.

## Class Inheritance

The micro app component inheritance is as follows:

```
LitElement (Web Components standard)
  └── SunPanelElement (common base class)
       ├── SunPanelWidgetElement (widget / card component)
       └── SunPanelPageElement (page component)
```

| Component | Purpose |
|-----------|---------|
| `SunPanelWidgetElement` | Card widget on the panel |
| `SunPanelPageElement` | Popup page / config page |

## Reactive Properties

Use Lit's `static properties` to declare reactive properties. Property changes automatically trigger re-rendering:

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
    this.name = 'Default value';
    this.count = 0;
    this.items = [];
  }
}
```

**Supported types**: String, Number, Boolean, Array, Object

## Template Rendering

:::: tip
To highlight the html code in WebComponents components, you can install the [highlight plugin](https://lit.dev/docs/tools/development/#lit-plugin) on VSCode. For more template syntax and Lit features, refer to the [Lit framework official site](https://lit.dev) and [Lit framework Chinese site](https://lit.tips).
::::

### Basic Syntax

```javascript
import { html } from 'lit';

render() {
  return html`
    <div class="container">
      <h1>${this.name}</h1>
      <p>Count: ${this.count}</p>
    </div>
  `;
}
```

### Conditional Rendering

```javascript
render() {
  return html`
    ${this.isActive
      ? html`<div class="active">Active</div>`
      : html`<div class="inactive">Inactive</div>`}
  `;
}
```

### Loop Rendering

```javascript
render() {
  return html`
    <ul>
      ${this.items.map(item => html`<li>${item.name}</li>`)}
    </ul>
  `;
}
```

## Event Listening

```javascript
render() {
  return html`
    <button @click=${this.handleClick}>Click</button>
    <input @input=${this.handleInput}>
  `;
}

handleClick(e) {
  console.log('Clicked', e.target);
}

handleInput(e) {
  this.inputValue = e.target.value;
}
```

## Style Definition

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

## Context Data (spCtx)

Access the context data provided by the platform via `this.spCtx`. All these context properties support reactive page updates.

### Common Properties

| Property | Type | Description |
|----------|------|-------------|
| `api` | MicroAppAPI | See [Platform API](./api) |
| `darkMode` | boolean | Dark mode |
| `language` | string | Language, such as `'zh-CN'` |
| `networkMode` | `'WAN' \| 'LAN' \| 'AUTO'` | Network mode (Internet, LAN, Auto) |
| `staticPath` | string | Static resource path |
| `role` | `0 \| 1 \| 2` | Permission role: 0=public, 1=normal, 2=admin |

### Widget Component Extra Properties

```javascript
this.spCtx = {
  // Common properties
  ...commonProperties,

  // Widget specific
  widgetInfo: {
    widgetId: string,    // Card unique identifier
    background: string,  // Background color
    config: object,       // User config data
    gridSize: string,    // Size, such as '1x1', '2x2'
    title: string,       // Card title
  },
};
```

### Page Component Extra Properties

```javascript
this.spCtx = {
  // Common properties
  ...commonProperties,

  // Page specific
  background: string,    // Page background color
  widgetInfo: object,    // Component config
  customParam: any,     // Custom parameter (passed when opening the window)
};
```

## Lifecycle

### Execution Order

```
constructor → connectedCallback → initializeMicroApp
→ onConnected → onInitialized → render → firstUpdated
→ onFirstRendered → (property change) updated → (DOM removed) disconnectedCallback → onDisconnected
```

### Lifecycle Hooks

| Hook | Description | Applies To |
|------|-------------|-----------|
| `constructor()` | Instance created | All |
| `onConnected()` | Callback after connected | All |
| `onInitialized()` | Initialization complete callback | **Widget**: no parameters<br>**Page**: `{ widgetInfo, customParam }` |
| `render()` | Returns HTML template (must override) | All |
| `onFirstRendered()` | First render complete callback | All |
| `onDisconnected()` | Disconnect callback, used for cleanup | All |

### Data Change Listeners

| Callback | Trigger Condition | Parameters |
|----------|------------------|-----------|
| `onWidgetInfoChanged()` | Card config change (only widget components support) | `(newWidgetInfo, oldWidgetInfo)` |
| `onDarkModeChanged()` | Dark mode switch | `(isDark, oldIsDark)` |
| `onLanguageChanged()` | Language switch | `(language, oldLanguage)` |
| `onNetworkModeChanged()` | Network mode change | `(networkMode, oldNetworkMode)` |

Where `networkMode` values: `'WAN'` | `'LAN'` | `'AUTO'`

## Common Methods

```javascript
// Trigger re-render
this.requestUpdate();

// Get static resource path
const logoUrl = this.getAssetPath('/logo.png');
```

To ensure static resource files are correctly accessed in both development and production environments, if your micro app has static resources like images, you can place them in the `public` directory. The component base class (`SunPanelWidgetElement` / `SunPanelPageElement`) has built-in a `getAssetPath()` method that can be used directly:

```js
export class Widget extends SunPanelWidgetElement {
  // Directly use the base class's this.getAssetPath() method
  // Automatically detects the micro app's static resource base URL from import.meta.url, resolving correctly in both dev and production modes
  render() {
    const logoUrl = this.getAssetPath('/logo.png');
    const bgUrl = this.getAssetPath('/images/background.jpg');
    
    return html`
      <div>
        <img src="${logoUrl}" alt="Logo">
        <div style="background-image: url('${bgUrl}')"></div>
      </div>
    `;
  }
}
```

## Complete Example

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
    this.title = 'Title';
    this.count = 0;
  }

  onInitialized() {
    // Initialize
    this.loadData();
  }

  onWidgetInfoChanged(newInfo) {
    this.title = newInfo?.config?.title || 'Default';
    this.requestUpdate();
  }

  handleClick() {
    this.count++;
    this.requestUpdate();
  }

  render() {
    return html`
      <div>
        <h2 class="card">${this.title}</h2>
        <p>Count: ${this.count}</p>
        <button @click=${this.handleClick}>+1</button>
      </div>
    `;
  }

  onDisconnected() {
    // Must clean up all resources here, especially:
    // 1. Timers created via api.timer (if not manually cleared, the main app will force-recycle on unmount, but proactive cleanup is safer)
    // 2. Subscriptions created via api.systemMonitor.register (be sure to call unregister to cancel)
    // 3. Any global listeners registered via native methods like window.addEventListener (the main app cannot track, needs manual removal)
  }

  static styles = css`
    .card { padding: 16px; }
  `;
}
```

## Notes

1. **Do not manipulate DOM in constructor** - The DOM doesn't exist yet
2. **Manipulate DOM in onFirstRendered** - The DOM is rendered by then
3. **Call requestUpdate() after modifying properties** - Triggers re-render
4. **Clean up resources in onDisconnected** - Prevent memory leaks. Timers and monitor subscriptions **must use `api.timer` / `api.systemMonitor`** (the main app can track and force-recycle on unmount); native `setInterval` / `addEventListener` cannot be recycled by the main app, and repeatedly opening windows will accumulate in the background causing memory leaks
5. **Call super methods** - Remember to call parent class methods when overriding lifecycle methods

## Next Steps

- [Platform API](./api) - Call network, cache, data node, and other capabilities
- [Data Nodes](./data_node) - Data storage and sharing
- [Permission Declaration](./permission) - Permission config
