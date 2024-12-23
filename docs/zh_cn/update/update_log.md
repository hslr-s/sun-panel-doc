---
outline: [2,3]
---

# 更新日志 - 正式版本

::: tip 说明
更新前请自行备份，[**更新教程及版本说明**](./update.md)，**beta版本更新日志请[点此查看beta版本更新日志](./update_log_beta.md)**
:::

[Github Releases](https://github.com/hslr-s/sun-panel/releases)



<!-- 
快捷连接
https://github.com/hslr-s/sun-panel/pull/xx

-->

<!-- ----

Docker 离线镜像：[夸克网盘](https://pan.quark.cn/s/bb1fb7c54d9a) （不保证实时更新和长期维护）

二进制可运行文件下载包：[夸克网盘](https://pan.quark.cn/s/854bb164adfc) （不保证实时更新和长期维护） -->

## v1.6.1 <Badge type="tip" text="2024-12-23" />

> [!CAUTION] 重要说明
> 1. docker版本从 `v1.3.0` 及之前升级到此版本前请务必先阅读 [更新说明](https://github.com/hslr-s/sun-panel/discussions/98)
> 2. 如果要在容器中查看docker状态，挂载时需加：`-v /var/run/docker.sock:/var/run/docker.sock` （部分设备可能不支持）
> 3. 如果更新后出现任何异常请尝试强制刷新页面（ctrl+shift+R），如果无法解决可以尝试清除浏览器缓存（ctrl+shift+del）

- [优化] 因网络原因、图标卡片过多导致卡片首次加载延迟的问题



## v1.6.0 <Badge type="tip" text="2024-11-10" />

<div class="badge-box">

视频说明：

[![Bilibili](https://img.shields.io/badge/Bilibili-123456?logo=bilibili&logoColor=fff&labelColor=fb7299)](https://www.bilibili.com/video/BV1Xem6YZEmz/)
[![YouTube](https://img.shields.io/badge/YouTube-123456?logo=youtube&labelColor=ff0000)](https://youtu.be/lhnZvxGosVI)

</div>

> [!CAUTION] 重要说明
> 1. docker版本从 `v1.3.0` 及之前升级到此版本前请务必先阅读 [更新说明](https://github.com/hslr-s/sun-panel/discussions/98)
> 2. 如果要在容器中查看docker状态，挂载时需加：`-v /var/run/docker.sock:/var/run/docker.sock` （部分设备可能不支持）
> 3. 如果更新后出现任何异常请尝试强制刷新页面（ctrl+shift+R），如果无法解决可以尝试清除浏览器缓存（ctrl+shift+del）

- [增加] 多账号切换功能 (`应用启动器` - `我的信息` - `已登录账号` - `添加其他账号`，当已登录账号大于一个的时候，导航页右上角会显示 ‘切换按钮’ )
- [增加] 重构内置弹窗页面-支持拖拽移动、改变尺寸，多窗口显示，移动端全屏显示
- [增加] 登录验证码功能 `PRO`
- [增加] 导航页面按下键盘 “/” 键可以快速聚焦到搜索栏
- [增加] docker管理器支持按'状态'列排序
- [优化] 应用启动器-应用加载失败页面增加 '返回到登录页面' 按钮
- [优化] 公开模式下隐藏搜索引擎的 '设置' 按钮
- [修复] 重置配置文件异常的问题
- **docker卡片**
    - [优化] 原loading层仅在操作（启动、关闭）容器的时候显示
    - [修复] 编辑卡片之后所有的修改未及时生效
- **开发相关**
    - [优化] 项目卡片 增加唯一id属性 命名规则为 `item-card-name-xx` （xx 为卡片设置中的唯一标识）




## v1.5.3 <Badge type="tip" text="2024-09-30" />

> [!CAUTION] 版本说明
> 此版本为 `v1.5.2` 的修复Bug版本，不包含 `v1.6.0-betaXX` 的新功能。如果已经升级到了 `v1.6.0-betaXX` ，避免出现未知的问题，不推荐降级到此版本。

> [!CAUTION] 重要说明
> 1. docker版本从 `v1.3.0` 及之前升级到此版本前请务必先阅读 [更新说明](https://github.com/hslr-s/sun-panel/discussions/98)
> 2. 如果要在容器中查看docker状态，挂载时需加：`-v /var/run/docker.sock:/var/run/docker.sock` （部分设备可能不支持）

- [修复] Docker管理器 分页下开启关闭容器控制串页、异常的问题
- [优化] Docker管理器 容器启动失败错误原因提醒
- [优化] Docker管理器 取消分页并支持按容器名称排序
- [优化] Docker管理器 页面优化

## v1.5.2 <Badge type="tip" text="2024-08-28" />

<div class="badge-box">

视频说明：

[![Bilibili](https://img.shields.io/badge/Bilibili-123456?logo=bilibili&logoColor=fff&labelColor=fb7299)](https://www.bilibili.com/video/BV1bpHYeXEx1/)
[![YouTube](https://img.shields.io/badge/YouTube-123456?logo=youtube&labelColor=ff0000)](https://youtu.be/ioB0YvQUyz4?si=xsTFpkDnNuhiPX0f)

</div>

> [!CAUTION] 重要说明
> 1. docker版本从 `v1.3.0` 及之前升级到此版本前请务必先阅读 [更新说明](https://github.com/hslr-s/sun-panel/discussions/98)
> 2. 如果要在容器中查看docker状态，挂载时需加：`-v /var/run/docker.sock:/var/run/docker.sock` （部分设备可能不支持）

- [增强] 自定义页脚支持 `<script>` js的代码和引用外部js文件
- [增强] docker 容器列表在部分设备上加载速度
- [增强] 项目卡片数据支持本地缓存，提升加载过程
- [增强] 公开模式下可以切换搜索引擎（仅限当次访问有效，页面刷新后恢复原搜索引擎）
- [优化] 在 `iframe` 框架中本页打开时，将使用父窗口打开
- [优化] docker 管理器样式、移动端显示效果
- [优化] docker 卡片绑定的容器在更新后会自动匹配更新同名容器（为安全考虑，仅在登录状态下生效）
- [优化] 一些细节更新
- [修复] 搜索栏在 Mac OS 下 Safari 浏览器中文输入兼容性问题

---

- [JS插件] [侧栏目录插件](https://github.com/hslr-s/sun-panel-js-plugins/tree/master/toc) （需自行安装）


## v1.5.1 <Badge type="tip" text="2024-07-12" />



<div class="badge-box">

视频说明：

[![Bilibili](https://img.shields.io/badge/Bilibili-123456?logo=bilibili&logoColor=fff&labelColor=fb7299)](https://www.bilibili.com/video/BV1A6421f7Gy/)
[![YouTube](https://img.shields.io/badge/YouTube-123456?logo=youtube&labelColor=ff0000)](https://youtu.be/74GcQ7Z9mZM?si=3qKYE418vi_MoiVP)

</div>


> [!CAUTION] 重要说明
> 1. docker版本从 `v1.3.0` 及之前升级到此版本前请务必先阅读 [更新说明](https://github.com/hslr-s/sun-panel/discussions/98)
> 2. 如果要在容器中查看docker状态，挂载时需加：`-v /var/run/docker.sock:/var/run/docker.sock` （部分设备可能不支持）

- `v1.5.0` 所有功能
- [修复] 普通图标卡片因鼠标中键新窗打开地址导致无法拖动排序
- [修复] 风格设置搜索栏组件默认文字颜色为空的问题


## v1.5.0 <Badge type="tip" text="2024-07-11" />

<div class="badge-box">

视频说明：
[![Bilibili](https://img.shields.io/badge/Bilibili-123456?logo=bilibili&logoColor=fff&labelColor=fb7299)](https://www.bilibili.com/video/BV1A6421f7Gy/)
[![YouTube](https://img.shields.io/badge/YouTube-123456?logo=youtube&labelColor=ff0000)](https://youtu.be/74GcQ7Z9mZM?si=3qKYE418vi_MoiVP)

</div>

> [!CAUTION] 重要说明
> 1. docker版本从 `v1.3.0` 及之前升级到此版本前请务必先阅读 [更新说明](https://github.com/hslr-s/sun-panel/discussions/98)
> 2. 如果要在容器中查看docker状态，挂载时需加：`-v /var/run/docker.sock:/var/run/docker.sock` （部分设备可能不支持）

- [新增] 简单的 docker 管理器（非 `PRO` 可查看状态，不可控制开启和关闭容器）
- [新增] 重构图标卡片，增加 docker 应用和内置应用图标卡片
- [新增] 搜索框组件 
    - 样式自定义
    - 支持增加自定义搜索引擎（非 `PRO` 支持额外创建两个）([常用搜索引擎及图标](https://pan.quark.cn/s/fab31d6b6274))
- [新增] 在线检查新版本（不支持在线升级）
- [新增] 卡片编辑窗口支持删除卡片
- [新增] 隐藏所有的 PRO 功能徽章以及说明的开关 `PRO`
- [新增] 系统状态->磁盘卡片 自定义显示标题
- [新增] 鼠标中键新窗口打开项目卡片的地址
- [美化] 鼠标悬浮在图标卡片上，跟随背景色模拟发光效果
- [优化] 分组风格支持独立设置，并可以设置公开模式隐藏
- [优化] 启动器等部分窗口支持拖拽移动
- [优化] 可在配置文件配置登录过期时长（并将原72小时过期改为168小时，仍延续自动续期机制）[参考说明](../faq/faq.html)
- [修复] `v1.5.0-beta24-07-03` 系统状态磁盘小图卡片不显示自定义标题 
- [修复] 上传文件管理删除文件失败的问题
- [其他] 项目卡片分组新增唯一标识，并在导航页分组样式的class类体现，配合自定义页脚、css、js可以实现更灵活的功能和丰富的样式 [更多说明](../advanced/landscap.md)
- [其他] 更多可以参考之前 **v1.5.0-beta\*** 版本更新日志


## v1.4.0 <Badge type="tip" text="2024-04-26" />

> [!CAUTION] 重要说明
> 从v1.3.0及之前升级到此版本前请 **认真备份** 数据❗❗❗此版本简化了docker挂载目录，但是仍然兼容旧版本的路径挂载方式。如果您是docker用户想尝试最新的挂载方式，请务必先阅读[更新说明](https://github.com/hslr-s/sun-panel/discussions/98)（文章下面有中文版本说明）

- [新增] OpenAPI开放接口`beta功能`，开发者可以通过调用API接口来实现一些功能 ([文档说明](/zh_cn/openapi/v1/apis.html))
- [新增] 全局站点设置：自定义站点标题 `PRO`、自定义站点图标 `PRO`、自定义登录页面背景图
- [新增] 在线编辑全局自定义 index.js 和 index.css 文件 `PRO`（非PRO用户依旧可以从程序安装目录中修改）
- [新增] 背景图支持heic、avif格式上传 [ [#77](https://github.com/hslr-s/sun-panel/issues/77) ]（仅对avif进行测试了）
- [修复] `v1.4.0-beta24-04-12` 旧版用户升级不兼容在线编辑js、css的问题
- [优化] 禁用referrer 。解决部分网站跳转后（例：qBittorrent）无法打开 [[#64](https://github.com/hslr-s/sun-panel/issues/64), [#127](https://github.com/hslr-s/sun-panel/issues/127)]
- [优化] 获取三方网站图标
- [优化] 编辑项目时网址检测未以 `http/https` 开头并进行提醒
- [优化] 修改系统状态[详情图标]显示格式，包含硬盘和内存的信息格式[已使用量/总量]
- [其他] docker版本精简挂载目录为一个 `./conf` 具体参考（[说明](https://github.com/hslr-s/sun-panel/discussions/98)） [ [#45](https://github.com/hslr-s/sun-panel/issues/45) ]
- [其他] 更多可以参考之前 **v1.4.0-beta\*** 版本更新日志


## v1.3.0 <Badge type="tip" text="2024-01-30" />

> 支持上个正式版本直接升级无需特殊处理

- [新增] 国际化适配（增加英文支持）
- [新增] 系统状态模块（支持CPU、内存、磁盘）
- [新增] 深色模式适配
- [新增] 网络模式切换按钮显示开关
- [新增] **全局** 自定义JS和CSS（实验性功能，后期可能调整）[参考说明](../advanced/custom_js_css.md)
- [新增] **账号** 自定义页脚 [备案号示例](../usage/custom_footer.md)
- [新增] 自定义壁纸的图片地址
- [优化] 优化搜索框样式(增加css hover效果，改善翻译) [#62](https://github.com/hslr-s/sun-panel/pull/62) (By[Tang Jing Hang](https://github.com/keyboardreamer))
- [优化] 获取站点图标缓存到服务器，可以在上传文件中管理 [#74](https://github.com/hslr-s/sun-panel/issues/74)
- [优化] 登录过期提示消息过多的问题
- [优化] 搜索栏支持快捷键 `Esc` 清空关键字
- [其他] 更多可以参考之前 **v1.3.0-beta\*** 版本更新日志


## v1.2.1 <Badge type="tip" text="2023-12-28" />

- [新增] 增加最大宽度设置、左右边距设置
- [优化] 上传文件管理空白增加提示
- [优化] 分组标题增加阴影
- [修复] 刷新后掉登录
- [修复] 无法获取图标部分网站图标


## v1.2.0 <Badge type="tip" text="2023-12-28" />

> 包含`1.2.0-beta*`版本更新内容，支持上个正式版本直接升级无需特殊处理

**(从v1.1.0升级的登录后刷新后掉登录的，需要手动退出一下，再次登录恢复正常)**

- [新增] 添加网站图标支持获取非标准路径图标地址
- [优化] 优化导入导出提示语，文件管理加loading
- [修复] beta23-12-20：未开启快捷图标搜索，仍能搜索
- [修复] beta23-12-20：上传文件管理url地址bug

## v1.1.0
> 支持上个版本直接升级无需特殊处理

- [新增] 增加分组，拖拽排序
- [新增] 搜索框
- [新增] 应用图标支持URL外链
- [新增] 图标支持纯透明
- [新增] 壁纸背景增加遮罩设置
- [新增] 右键菜单新增打开局域网或者互联网地址
- [优化] 网址输入框增加https/http提示
- [优化] 小图标模式，鼠标悬浮显示详情，支持隐藏图标标题
- [优化] 详情图标样式，支持隐藏描述信息
- [优化] 添加用户密码时限制字符
- [其他] 新增arm版本docker支持。[DockerHub](https://hub.docker.com/r/hslr/sun-panel)直接拉取即可
- [其他] 新增多平台二进制文件运行。[Releases](https://github.com/hslr-s/sun-panel/releases)

<style>

.badge-box {
    display: flex;
    align-items: center;
}


.badge-box p{
    margin:0;
    display: flex;
    align-items: center;
}

</style>