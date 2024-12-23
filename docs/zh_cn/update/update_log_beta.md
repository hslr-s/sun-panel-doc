---
outline: [2,3]
---

# 更新日志 - BETA版本

::: danger 必读
更新前请自行备份，[**更新教程及版本说明**](./update.md)。

测试版本（BETA）是正式版本发布前的测试版本，会首次尝试加入一些新的功能，不排除可能会有一些致命性的BUG（概率很小），不建议在生产环境中使用。安装方式与正式版相同，任何人都可以更新使用。但是为了防止数据丢失，**请先自行备份重要数据再进行升级**。

如果您在使用过程中遇到任何问题，请及时反馈到任意[交流群](/zh_cn/introduce/author_groups.html)@我或者提[Issues](https://github.com/hslr-s/sun-panel/issues)。
:::

[Github Releases](https://github.com/hslr-s/sun-panel/releases)


<!-- 
快捷连接
https://github.com/hslr-s/sun-panel/pull/xx

-->

<!-- ----

Docker 离线镜像：[夸克网盘](https://pan.quark.cn/s/bb1fb7c54d9a) （不保证实时更新和长期维护）

二进制可运行文件下载包：[夸克网盘](https://pan.quark.cn/s/854bb164adfc) （不保证实时更新和长期维护） -->



## v1.6.0-beta24-11-06 <Badge type="warning" text="beta" />


> docker版本从v1.3.0及之前升级到此版本前请务必先阅读[更新说明](https://github.com/hslr-s/sun-panel/discussions/98)
>
> 如果更新后出现任何异常请尝试强制刷新页面（ctrl+shift+R），如果无法解决可以尝试清除浏览器缓存（ctrl+shift+del）

::: details 更新详情

- [优化] 账号管理页面 美化列表显示当前和公开账号样式
- [修复] 多账号切换器 修复登录会话过期后，再次登录同一账号切换器中出现两个账号的问题
:::

## v1.6.0-beta24-10-18 <Badge type="warning" text="beta" />


> docker版本从v1.3.0及之前升级到此版本前请务必先阅读[更新说明](https://github.com/hslr-s/sun-panel/discussions/98)
>
> 如果更新后出现任何异常请尝试强制刷新页面（ctrl+shift+R），如果无法解决可以尝试清除浏览器缓存（ctrl+shift+del）

::: details 更新详情

- [优化] 公开模式下隐藏搜索引擎设置按钮
- [修复] 重置配置文件异常的问题
- [修复] 账号切换器个别情况下出现多个相同账号的情况
- [修复] 按下编辑卡片信息的时候，无法正常输入 "/" 的问题
:::

## v1.6.0-beta24-10-12 <Badge type="warning" text="beta" />


> docker版本从v1.3.0及之前升级到此版本前请务必先阅读[更新说明](https://github.com/hslr-s/sun-panel/discussions/98)
>
> 如果更新后出现任何异常请尝试强制刷新页面（ctrl+shift+R），如果无法解决可以尝试清除浏览器缓存（ctrl+shift+del）

::: details 更新详情

> 包含 v1.5.3 更新内容

- [增加] 导航页面按下键盘 “/” 键可以快速聚焦到搜索栏
- [增加] docker管理器支持按状态排序
- [增加] 登录验证码功能 `PRO`
- **账号切换器** 
    - [优化] 点击登录状态已经失效的账号可直接跳转登录页免去再次输入账号
- **docker卡片**
    - [优化] 原loading层仅在操作（启动、关闭）容器的时候显示
    - [修复] 编辑卡片之后所有的修改未及时生效
- **开发相关**
    - [优化] 项目卡片 增加唯一id属性 命名规则为 `item-card-name-xx`

:::

## v1.6.0-beta24-09-06 <Badge type="warning" text="beta" />


> docker版本从v1.3.0及之前升级到此版本前请务必先阅读[更新说明](https://github.com/hslr-s/sun-panel/discussions/98)

::: details 更新详情

- [增加] 多账号切换功能 (`应用启动器` - `我的信息` - `已登录账号` - `添加其他账号`，当已登录账号大于一个的时候，右上角会显示切换按钮)
- [增加] 重构内置弹窗页面-支持拖拽移动、改变尺寸，多窗口显示，移动端全屏显示
- [优化] 应用启动器-应用加载失败页面增加返回到登录页面按钮

:::


## v1.5.2-beta24-08-23 <Badge type="warning" text="beta" />

> docker版本从v1.3.0及之前升级到此版本前请务必先阅读[更新说明](https://github.com/hslr-s/sun-panel/discussions/98)

::: details 更新详情

- [增加] 项目加载loading显示
- [优化] 卡片数据缓存
- [修复] docker 容器卡片状态因缓存原因导致同一个请求，请求多次的问题 `[由QQ群Fly提出以及帮助测试]`

:::


## v1.5.2-beta24-08-22 <Badge type="warning" text="beta" />

> docker版本从v1.3.0及之前升级到此版本前请务必先阅读[更新说明](https://github.com/hslr-s/sun-panel/discussions/98)

::: details 更新详情

- [增强] docker 容器列表在部分设备上加载速度
- [优化] 导航页在 `iframe` 框架中本页打开时，将使用父窗口打开
- [优化] docker 管理器样式
- [优化] docker 卡片绑定的容器在更新后（在登录状态下）会自动匹配同名容器

:::

## v1.5.2-beta24-08-10 <Badge type="warning" text="beta" />


> docker版本从v1.3.0及之前升级到此版本前请务必先阅读[更新说明](https://github.com/hslr-s/sun-panel/discussions/98)

::: details 更新详情

- [增强] 自定义页脚支持 `<script>` js的代码和引用外部js文件
- [增强] 项目卡片数据支持本地缓存，减短加载过程
- [增强] 公开模式下可以切换搜索引擎
- [优化] 搜索栏在Mac safari浏览器中文输入兼容性问题
- [优化] 移动端docker管理显示效果

---

- [JS插件] [侧栏目录插件](https://github.com/hslr-s/sun-panel-js-plugins/tree/master/toc) （需自行安装）
:::

## v1.5.0-beta24-07-03 <Badge type="warning" text="beta" />


> docker版本从v1.3.0及之前升级到此版本前请务必先阅读[更新说明](https://github.com/hslr-s/sun-panel/discussions/98)

> 如果要在容器中查看docker状态，挂载时需加：`-v /var/run/docker.sock:/var/run/docker.sock`

- [新增] 搜索框组件支持增加自定义搜索引擎（非`PRO`支持额外创建两个）
- [新增] 搜索框样式自定义
- [新增] 在线检查新版本（不支持在线升级）
- [新增] 卡片编辑窗口支持删除卡片
- [新增] 系统状态->磁盘卡片 自定义显示标题
- [优化] 鼠标放在图标卡片上会跟随背景色模拟发光效果
- [优化] 启动器等部分窗口支持拖拽移动
- [优化] docker 卡片的内存显示长度
- [修复] docker 卡片手动开启和关闭成功后状态更新异常的问题
- [修复] 某些场景下修改图标卡片排序会错乱的问题
- [其他] 项目卡片分组新增唯一标识，并在导航页分组样式的class类体现，配合自定义页脚、css、js可以实现更灵活的功能和丰富的样式 [更多说明](../advanced/landscap.md)
- [其他] 增加一些友好的提示标签
- [删除] 移除 `v1.5.0-beta24-05-10` 卡片常态下高斯模糊效果，如有需要通过自定义页脚/css来实现

## v1.5.0-beta24-05-11 <Badge type="warning" text="beta" />


> docker版本从v1.3.0及之前升级到此版本前请务必先阅读[更新说明](https://github.com/hslr-s/sun-panel/discussions/98)

> 如果要在容器中查看docker状态，挂载时需加：`-v /var/run/docker.sock:/var/run/docker.sock`

- [修复] `v1.5.0-beta24-05-10` 系统状态添加磁盘项无效的问题

## v1.5.0-beta24-05-10 <Badge type="warning" text="beta" />


> docker版本从v1.3.0及之前升级到此版本前请务必先阅读[更新说明](https://github.com/hslr-s/sun-panel/discussions/98)

> 如果要在容器中查看docker状态，挂载时需加：`-v /var/run/docker.sock:/var/run/docker.sock`

- [新增] 简单的docker管理器（非PRO可查看状态，不支持开启和关闭容器）
- [新增] 重构图标卡片，增加docker应用和内置应用图标卡片
- [优化] 分组风格支持独立设置，并可以设置公开模式隐藏
- [优化] 增加可配置的登录过期时长（并将原72小时过期改为168小时，仍延续自动续期机制）
- [优化] 内置应用启动器等按钮移至右上角


## v1.4.0-beta24-04-12 <Badge type="warning" text="beta" />

> [!CAUTION] 升级说明
> 从v1.3.0及之前升级到此版本前请 **认真备份** 数据❗❗❗docker版本务必先阅读[更新说明](https://github.com/hslr-s/sun-panel/discussions/98)（文章下面有中文版本说明）


- [新增] 全局站点设置
    - 自定义站点标题 `PRO`
    - 自定义网站图标 `PRO`
    - 自定义登录页面背景图
- [新增] 在线编辑全局自定义 index.js 和 index.css 文件`PRO`（非PRO用户依旧可以从软件安装目录中修改）
- [新增] OpenAPI开放接口，开发者可以通过调用API接口来实现一些功能 ([文档说明](/zh_cn/openapi/v1/apis.html))
- [优化] 获取三方网站图标（可以获取99.999...%的网站图标😉，除非网站未设置图标）
- [优化] 编辑项目图标时网址不带http或者https提示

## v1.4.0-beta24-02-20 <Badge type="warning" text="beta" />

::: danger 
温馨提示：升级此版本前请**认真备份**你的数据❗❗❗,docker版本务必先阅读[更新说明](https://github.com/hslr-s/sun-panel/discussions/98)（文章下面有中文版本说明）
:::

- [新增] 配置文件新增目录配置
    - 自定义web目录
    - 自定义css,js目录 （旧版本升级需要手动增加此配置项，否则默认依旧是：`./web/custom` [说明](https://github.com/hslr-s/sun-panel/discussions/128)）
- [优化] 系统应用加载失败的提示
- [优化] 修改系统状态[详情图标]显示格式，包含硬盘和内存的信息格式[已使用量/总量]
- [其他] docker版本精简挂载目录为一个`./conf`具体参考（[说明](https://github.com/hslr-s/sun-panel/discussions/98)）


## v1.3.0-beta24-01-25 <Badge type="warning" text="beta" />

- [新增] 网络模式切换按钮显示开关
- [修复] 部分错误不能正确显示的问题
- [其他] 优化dom结构并增加一些重要标签的class类名（方便自定义css使用）
- [其他] 后端命令行指令及所有输出内容为英文
- [其他] dockerfile声明端口号


## v1.3.0-beta24-01-17-19 <Badge type="warning" text="beta" />

- [新增] 深色模式适配
- [新增] 自定义css和js（实验性功能，后期可能调整）[参考说明](../advanced/custom_js_css.md)
- [优化] 优化搜索框样式(增加css hover效果，改善翻译) [#62](https://github.com/hslr-s/sun-panel/pull/62)
- [优化] 系统状态磁盘和内存显示内容为 [已使用/未使用]
- [优化] 优化部分设置和启动器标题
- [修复] docker下 [系统状态] - [内存] 未使用数据显示错误
- [其他] 去除后端返回提示信息，全部改用前端并适配多语言


## v1.3.0-beta24-01-09 <Badge type="warning" text="beta" />

- [新增] 系统状态模块（支持CPU、内存、磁盘）
- [新增] 自定义footer [备案号示例](../usage/custom_footer.md)
- [新增] 自定义壁纸的图片地址
- [新增] 国际化适配（新增英语）
- [优化] 登录过期提示消息过多的问题


## v1.2.0-beta23-12-20
- [新增] 全新图标排序方式，减少首页全局按钮
- [新增] 上传文件管理 #25 
- [新增] ico图片上传 #40
- [新增] 添加图标支持根据网址自动获取图标 
- [优化] 宽屏幕支持显示更多图标
- [优化] 图标排序模式单击支持编辑（ios端编辑图标）#1
- [优化] 添加提交图标增加loading，避免重复提交 #2 
- [修复] 后端用户名首尾空格检查 #30

## v1.2.0-beta23-12-14
- [新增] 更换设置窗口升级为内置应用启动器
- [新增] 搜索框搜索快捷图标开关
- [优化] 手机端时钟样式
- [修复] 退出排序模式有进入提示
- [其他] 浏览器书签换工具[快速进入](https://hslr-s.github.io/sun-panel-tool-page/#/)

## v1.2.0-beta23-12-10
- [新增] 导入导出图标（浏览器书签转换工具请期待后续更新）
- [新增] 系统图标本地化（不包含在线图标库）
- [修复] beta23-12-6：用户管理表格标题语言包未适配的问题
- [修复] beta23-12-6：登录后刷新丢失登录状态的（部分首次需登录成功后尝试手动退出再次登录或[清除浏览器缓存和localstorage](https://blog.csdn.net/m0_46156566/article/details/108519629)）
- [修复] bug 新用户刷新偶尔多出一个默认分组

## v1.2.0-beta23-12-6
- [新增] 公开访问账号（访客模式）
- [新增] 平台管理权限（之前创建的用户全部为 `平台管理` 的账号）
- [新增] 账号独立修改密码，昵称修改
- [新增] 页面上下边距自定义
- [新增] 搜索框支持搜索页面图标（存在bug，此版本默认开启，后面版本默认关闭）
- [优化] 帐号解除邮箱限制
- [优化] 调整了标题尺寸
- [优化] 图标适配宽屏幕尺寸，左右边距
- [修复] 创建用户用户昵称未保存成功



## v1.1.0-beta23-11-27
- 遗留上次添加成功内容（添加第二个图标时复现）
- 手机版文字logo过大
- 回到顶部
- 回车登录



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