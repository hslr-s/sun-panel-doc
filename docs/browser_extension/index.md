# Browser Extension - Sun-Panel BE <Badge type="warning" text="beta" />

::: tip What is Sun-Panel BE
[Sun-Panel BE](https://github.com/hslr-s/sun-panel-browser-extension) (Sun-Panel For Browser Extension) is an auxiliary browser extension for [Sun-Panel](http://sun-panel.top). It can run on mainstream browsers. This browser extension needs to be used with your self-hosted [Sun-Panel](http://sun-panel.top).
:::

## Video Introduction

[Bilibili](https://www.bilibili.com/video/BV12b421E7cF/) | [YouTube](https://youtu.be/_cggRyQnfBY)

## Features

- 🚅 Set your self-hosted Sun-Panel as the browser's new tab page, supporting automatic detection and switching between LAN and public network addresses.
- 🍰 Quickly add the currently visited page to your self-hosted Sun-Panel group cards.

## Download/Install
[chrome](https://chromewebstore.google.com/detail/sun-panel-be/gchnnoadbmdgoimlemmdacmkocngjonm/privacy) | [Edge](https://microsoftedge.microsoft.com/addons/detail/sunpanel-be/peklhgoidjpnojdpcnohhncgpblbnhoi) 

[Firefox and offline version](https://github.com/hslr-s/sun-panel-browser-extension/releases) 
For browsers based on chrome, please download the file with the extension `.crx`,
For Firefox browser, please download the file with extension `.xpi`

<!-- ## Installation Instructions

### zip Package

The zip package is a development package. First, go to **`Extensions`** in your **`browser`** - **`enter the extension management page`** - **`enable developer mode`** - **`refresh the page`** - **`drag the zip package into the browser window`**, and you will have successfully installed it. -->

## Usage Instructions

### Set as Browser New Tab Page

After installing the extension, it will replace the original browser new tab page by default. For the first use, you need to configure the homepage address according to the instructions on the settings page.

![](/images/browser_extension/new_tab_setting_cn.png)

### Quickly Add Icon Cards

After installing the extension, you can set it to display in the toolbar, as shown in the picture (Edge browser example):

![](/images/browser_extension/display_on_toolbar.png)

On your self-hosted Sun-Panel, enable the OpenAPI feature:

![](/images/browser_extension/sun_panel_openapi_cn.png)

And configure the extension settings properly:

![](/images/browser_extension/openapi_setting_cn.png)

When visiting other sites, click the browser extension icon to identify the address, icon, and title of the site you are currently visiting. **Click save to add the site's icon card to the top group of your self-hosted Sun-Panel.** Future versions


### Known Issue (Edge Android)

In Edge Android, after installing this extension, clicking the **"+"** button on the right side of the tab bar will still open Edge's built-in default new tab page and will **NOT** be taken over by this extension. You can manually open it by visiting `edge://newtab`.

Currently, clicking the "+" on the right side of the tab bar still invokes Edge's own new tab page. Android extension functionality is not yet fully consistent with the desktop version, so new tab extensions are temporarily unable to fully take over the "+" button behavior like they do on desktop. Microsoft's mobile documentation also explicitly defines "+" as opening Edge's new tab page.

**Temporary Workarounds**:
- Add `edge://newtab` as a bookmark or quick access and open it manually.
- Or save your Sun-Panel address as a bookmark and access it directly.

**How to "Protest" to the Edge Team**:

If you would like the Edge team to improve this behavior, go to **"☰" → "Help and feedback"** in Edge Android and state: "I hope new tab extensions can take over the '+' button, consistent with the desktop version."
