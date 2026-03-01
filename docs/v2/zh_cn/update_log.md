---
outline: [2,3]
---

# V2 开发版 更新日志

::: danger 必读
V2 开发版本暂时**不支持** **V1** 以升级的方式**覆盖更新**，数据暂时不兼容。请等待后续版本更新适配。
:::



## v2.0.0-dev-7 <Badge type="warning" text="DEV" /> {#v2.0.0-dev-7}
::: tip
- 微应用开发请拉取最新版本的 [Hello World演示项目](https://github.com/Sun-Panel/microapp-hello-world)。已有项目需要重新 `npm intall`。
- 新增一个完整功能的的演示项目[All-In-One-demo](https://github.com/Sun-Panel/All-In-One-demo)
:::

- [新增] 内置窗口打开网站窗口支持全屏
- [优化] 窗口基础组件功能
- [优化] 微应用 页面窗口标题显示 及卡片标题显示
- [优化] 微应用 `app.json/app.config.js` 增加 [调试模式](/v2/zh_cn/micro_app_dev/config) 参数
- [优化] 微应用 后端相应网络透传、数据节点 日志调试（需要开启调试模式）
- [优化] 微应用 重写网络透传方法，调整参数格式（兼容旧格式），支持 cookie 管理 [网络透传](/v2/zh_cn/micro_app_dev/api#network)
- [优化] 其他细节

## v2.0.0-dev-6 <Badge type="warning" text="DEV" /> {#v2.0.0-dev-6}
> 微应用开发请拉取最新版本的 [Hello World演示项目](https://github.com/Sun-Panel/microapp-hello-world)。已有项目需要重新 `npm intall`。新增一个完整功能的的演示项目[All-In-One-demo](https://github.com/Sun-Panel/All-In-One-demo)，（网络透传以及窗口管理暂未开发完成，其他功能均已完成）

- [新增] 微应用 新增用户级别和应用级别的按key删除数据节点功能，并调整相关API路由和前端调用方式
- [修复] 微应用 修复批量获取数据节点key数据格式错误的问题 [数据节点API使用文档](/v2/zh_cn/micro_app_dev/api.html#dataNode)
- [修复] 微应用 用户级别和应用级别的按key删除数据节点key功能导致删除整个数据节点的bug
- [修复] 微应用 缓存管理器不能储存的用户级别的数据bug

## v2.0.0-dev-3 <Badge type="warning" text="DEV" /> {#v2.0.0-dev-3}
- [修复] 添加微应用时，引导页面编辑框不能输入的BUG
- [修复] 卡片点击添加自定义地址导致页面卡死的BUG
- [修复] 离线安装方式更新某个微应用导致其他微应用全部丢失的BUG
- [优化] 应用管理夜间模式未适配(26年02月19日)
- [优化] 标准卡片样式美化

## v2.0.0-dev-1 <Badge type="warning" text="DEV" /> {#v2.0.0-dev-1}

> 仅写了部分内容

- [新增] 重构导航页面布局方式，支持不同尺寸的卡片放在同一分组内。
- [新增] 微应用/小部件卡片框架，在有限的屏幕里，提升无限的可玩性，灵活安装和卸载。喜爱开发的小伙伴可以按照规范自由开发。
- [新增] 卡片自定义地址，可以参与网络环境识别智能打开或右键菜单打开。
- [新增] 全新的网络环境检测方案，可根据当前访问页面地址，匹配到合适的内网地址、自定义地址内的同网段地址。
- [新增] MAC端（移除cgo版本sqlite数据库）