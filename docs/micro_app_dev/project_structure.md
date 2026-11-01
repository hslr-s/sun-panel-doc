# Project Structure

This document introduces the directory structure of the official micro app development template [Hello World](https://github.com/Sun-Panel/microapp-hello-world), helping you quickly understand the purpose of each file.

## Directory Overview

When developing, we only need to focus on the `config`, `src`, `locales`, and `public` directories. Static resources are stored in the `public` directory and built automatically. Everything else belongs to the template and does not need (and is not recommended) to be modified.

```txt {2-8,13,19}
microapp-hello-world/
├── config/                          # Config file directory // [!code focus]
│   ├── app.config.js               # Main app config (app info, permissions, data nodes, etc.) // [!code focus]
│   └── components.config.js        # Component config (page and component registration) // [!code focus]
├── src/                            # Source code directory // [!code focus]
│   ├── components/                 # Component files // [!code focus]
│   │   ├── widget.js              # Widget component (card body) // [!code focus]
│   │   └── widgetConfig.js        # Configuration page component // [!code focus]
│   └── main.js                     # Entry file
├── locales/                        # Internationalization resource directory (optional) // [!code focus]
│   ├── en-US.js                   # English language pack
│   ├── zh-CN.js                   # Chinese language pack
│   └── ...
├── build/                          # Build script directory
├── scripts/                        # Tool script directory
├── public/                         # Static resources (directly packaged to root) // [!code focus]
│   ├── logo.png                   # App icon
│   └── sun-panel-logo.png         # Sun Panel Logo
├── dist/                           # Build output directory
├── packages/                       # Package output directory (.zip files)
├── app.json                        # Auto-generated app config
├── package.json                    # Project dependency config
├── vite.config.js                  # Vite config
└── README.md                       # Project description
```

## Core File Description

### config/app.config.js

See [App Config](/micro_app_dev/config#app_config)

### config/components.config.js

See [Component Config](/micro_app_dev/config#components_config)

### src/components/widget.js

The widget component, inheriting from `SunPanelWidgetElement`, is the card displayed on the panel:

```javascript
import { SunPanelWidgetElement } from '@sun-panel/micro-app';
import { html, css } from 'lit';

export class Widget extends SunPanelWidgetElement {
  static properties = {
    name: { type: String },
  };

  onInitialized() {
    // Component initialization
  }

  // Render methods for different sizes
  render1x1() { return html`<div>1x1 content</div>`; }
  render1x2() { return html`<div>1x2 content</div>`; }
  render2x1() { return html`<div>2x1 content</div>`; }
  render2x2() { return html`<div>2x2 content</div>`; }
  render2x4() { return html`<div>2x4 content</div>`; }
  render1xfull() { return this.render2x4(); }

  render() {
    return html`
      <div class="container">
        ${this.spCtx.widgetInfo.gridSize === "1x1" ? this.render1x1() : ''}
        ${this.spCtx.widgetInfo.gridSize === "1x2" ? this.render1x2() : ''}
        ${this.spCtx.widgetInfo.gridSize === "2x2" ? this.render2x2() : ''}
        <!-- ...other sizes -->
      </div>
    `;
  }

  static styles = css`
    .container { padding: 16px; }
  `;
}
```

### src/components/widgetConfig.js

The configuration page component, inheriting from `SunPanelPageElement`, used to configure widgets / micro app main pages:

```javascript
import { SunPanelPageElement } from '@sun-panel/micro-app';
import { html, css } from 'lit';

export class WidgetConfig extends SunPanelPageElement {
  static properties = {
    textOption: { type: String },
    customText: { type: String },
    showLogo: { type: Boolean },
    useSystemBgColor: { type: Boolean },
  };

  onInitialized({ widgetInfo, customParam }) {
    // Initialize config
    const config = widgetInfo?.config || {};
    this.textOption = config.textOption || 'default';
    this.customText = config.customText || 'World';
    this.showLogo = config.showLogo ?? true;
    this.useSystemBgColor = config.useSystemBgColor ?? false;
  }

  // Save config
  async handleSave() {
    await this.spCtx.api.widget.save({
      ...this.spCtx.widgetInfo,
      config: {
        textOption: this.textOption,
        customText: this.customText,
        showLogo: this.showLogo,
        useSystemBgColor: this.useSystemBgColor
      },
    });
    this.spCtx.api.window.close();
  }

  render() {
    return html`
      <div class="config-container">
        <!-- Config form -->
        <button @click=${this.handleSave}>Save</button>
      </div>
    `;
  }

  static styles = css`
    .config-container { padding: 16px; }
  `;
}
```

### public/ Directory

The static resource directory. Files placed in the `public/` directory are automatically copied to the package root during the build:

- `logo.png` - App icon
- Other static resources

## Next Steps

- [Configuration](./config) - Learn more configuration options
- [Component Development](./dev_guide) - Learn component development
