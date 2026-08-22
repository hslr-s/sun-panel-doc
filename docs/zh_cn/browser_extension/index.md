# 浏览器扩展- Sun-Panel BE <Badge type="warning" text="beta" />

::: tip Sun-Panel BE 是什么
[Sun-Panel BE](https://github.com/hslr-s/sun-panel-browser-extension) (Sun-Panel For Browser Extension)是一款辅助 [Sun-Panel](http://sun-panel.top) 的浏览器扩展插件。可以运行在主流的浏览器上。本浏览器扩展需要搭配您自托管的 [Sun-Panel](http://sun-panel.top) 使用。
:::

## 视频介绍

[哔哩哔哩](https://www.bilibili.com/video/BV12b421E7cF/) | [YouTube](https://youtu.be/_cggRyQnfBY)

## 功能

- 🚅 将您自己托管的 Sun-Panel 设置为浏览器的新标签页面，支持局域网和公网双地址自动检测跳转。
- 🍰 快速将当前浏览器所访问的页面快速添加到您自己托管的 Sun-Panel 分组卡片中。


## 下载/安装

[Chrome](https://chromewebstore.google.com/detail/sun-panel-be/gchnnoadbmdgoimlemmdacmkocngjonm/privacy) | [Edge](https://microsoftedge.microsoft.com/addons/detail/sunpanel-be/peklhgoidjpnojdpcnohhncgpblbnhoi) 

[Firefox（火狐）以及离线版](https://github.com/hslr-s/sun-panel-browser-extension/releases) 
以 Chrome 为内核的浏览器请下载扩展名为 `.crx` 的文件，
Firefox 浏览器请下载扩展名为 `.xpi` 的文件
<!-- ## 安装说明

### zip 包

zip包时开发包，首先到您的 **`浏览器中找到扩展`** - **`并进入到扩展管理页面`** - **`然后开启开发者模式`** - **`刷新页面`** - **`将zip包拖拽到浏览器窗口中`**，此时您已经成功安装完成了。 -->


## 使用说明

### 设置为浏览器新标签页面

安装扩展后，默认替换了原有的浏览器新标签页面，首次使用需要配置首页地址，按照设置页面说明配置

![](/images/browser_extension/new_tab_setting_cn.png)


### 快速添加图标卡片

安装扩展后，可以将此扩展设置为显示在工具栏中，如图（图为Edge）:

![](/images/browser_extension/display_on_toolbar.png)

在您自己托管的 Sun-Panel ，开启OpenAPI功能后

![](/images/browser_extension/sun_panel_openapi_cn.png)

并配置好扩展的配置信息
![](/images/browser_extension/openapi_setting_cn.png)


在访问其他站点的时候，点击浏览器扩展的图标，可以识别到您当前访问网站的地址、图标、标题。**点击保存会将该站点的图标卡片添加到您自托管Sun-Panel上排序最前的分组中**，未来的Sun-Panel版本会增加分组的选择，请期待。
![](/images/browser_extension/popup_cn.png)

### 已知问题（Edge 安卓版）

在 Edge 安卓版 中，安装本扩展后，点击标签栏右侧的"+"按钮，仍然会打开 Edge 浏览器自带的默认新标签页，而**不会**被本扩展接管。可以访问 `edge://newtab` 手动打开。

目前点击标签页右侧“+”仍会调用 Edge 自带的新标签页，安卓版扩展功能与桌面版还没有完全一致，因此新标签页类扩展暂时无法像电脑版那样完整接管“+”按钮的行为。微软的移动版说明也明确将“+”定义为打开 Edge 新标签页。

**临时替代方案**：
- 将 `edge://newtab` 添加为书签或快速访问，手动点击打开。
- 或将 Sun-Panel 的地址保存为书签，直接访问。

**如何找Edge团队"抗议"**：

如果您希望 Edge 团队改进此行为，请在 Edge 安卓版中依次进入 **"☰"  → "帮助和反馈"**，说明"希望新标签页扩展能够接管'+'按钮，与桌面版行为保持一致"。

## 作者想说

希望这个扩展能帮助更多的小伙伴可以更愉快的使用Sun-Panel。如果使用中有任何BUG或者建议，可以到社区或者交流群中 `@` 作者，在此也感谢各位小伙伴的支持。
