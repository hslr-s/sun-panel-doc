# 项目结构

本文档介绍官方微应用开发模板 [Hello World](https://github.com/Sun-Panel/microapp-hello-world) 的目录结构，帮助你快速了解每个文件的作用。


## 目录概览

我们开发时，仅需关注`config`、`src`、`locales`和`public` 目录即可，静态资源存放在`public`目录下，自动构建。其他都归属于模版，无需修改，也不推荐修改。

```txt {2-8,13,19}
microapp-hello-world/
├── config/                          # 配置文件目录 // [!code focus]
│   ├── app.config.js               # 应用主配置（应用信息、权限、数据节点等）// [!code focus]
│   └── components.config.js        # 组件配置（页面和组件注册）// [!code focus]
├── src/                            # 源码目录 // [!code focus]
│   ├── components/                 # 组件文件 // [!code focus]
│   │   ├── widget.js              # 小部件组件（卡片主体） // [!code focus]
│   │   └── widgetConfig.js        # 配置页面组件 // [!code focus]
│   └── main.js                     # 入口文件
├── locales/                        # 国际化资源目录（非必须） // [!code focus]
│   ├── en-US.js                   # 英文语言包
│   ├── zh-CN.js                   # 中文语言包
│   └── ...
├── build/                          # 构建脚本目录
├── scripts/                        # 工具脚本目录
├── public/                         # 静态资源（直接打包到根目录）// [!code focus]
│   ├── logo.png                   # 应用图标
│   └── sun-panel-logo.png         # Sun Panel Logo
├── dist/                           # 构建输出目录
├── packages/                       # 打包输出目录（.zip 文件）
├── app.json                        # 自动生成的应用配置
├── package.json                    # 项目依赖配置
├── vite.config.js                  # Vite 配置
└── README.md                       # 项目说明
```

## 核心文件说明


### config/app.config.js
参考[应用配置](/v2/zh_cn/micro_app_dev/config.html#app_config)


### config/components.config.js

参考[组件配置](/v2/zh_cn/micro_app_dev/config.html#components_config)


### src/components/widget.js

小部件组件，继承自 `SunPanelWidgetElement`，是显示在面板上的卡片：

```javascript
import { SunPanelWidgetElement } from '@sun-panel/micro-app';
import { html, css } from 'lit';

export class Widget extends SunPanelWidgetElement {
  static properties = {
    name: { type: String },
  };

  onInitialized() {
    // 组件初始化
  }

  // 不同尺寸的渲染方法
  render1x1() { return html`<div>1x1 内容</div>`; }
  render1x2() { return html`<div>1x2 内容</div>`; }
  render2x1() { return html`<div>2x1 内容</div>`; }
  render2x2() { return html`<div>2x2 内容</div>`; }
  render2x4() { return html`<div>2x4 内容</div>`; }
  render1xfull() { return this.render2x4(); }

  render() {
    return html`
      <div class="container">
        ${this.spCtx.widgetInfo.gridSize === "1x1" ? this.render1x1() : ''}
        ${this.spCtx.widgetInfo.gridSize === "1x2" ? this.render1x2() : ''}
        ${this.spCtx.widgetInfo.gridSize === "2x2" ? this.render2x2() : ''}
        <!-- ...其他尺寸 -->
      </div>
    `;
  }

  static styles = css`
    .container { padding: 16px; }
  `;
}
```


### src/components/widgetConfig.js

配置页面组件，继承自 `SunPanelPageElement`，用于配置小部件/微应用主页面：


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
    // 初始化配置
    const config = widgetInfo?.config || {};
    this.textOption = config.textOption || 'default';
    this.customText = config.customText || 'World';
    this.showLogo = config.showLogo ?? true;
    this.useSystemBgColor = config.useSystemBgColor ?? false;
  }

  // 保存配置
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
        <!-- 配置表单 -->
        <button @click=${this.handleSave}>保存</button>
      </div>
    `;
  }

  static styles = css`
    .config-container { padding: 16px; }
  `;
}
```


### public/ 目录

静态资源目录，放入 `public/` 目录的文件会在构建时自动复制到打包根目录：

- `logo.png` - 应用图标
- 其他静态资源


## 下一步

- [配置说明](./config) - 了解更多配置选项
- [组件开发](./dev_guide) - 学习组件开发
