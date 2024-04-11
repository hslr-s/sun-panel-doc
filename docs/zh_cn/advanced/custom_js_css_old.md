# 自定义CSS和JS（v1.3.0及之前版本）

（实验性功能，后期可能调整，请持续关注后面的更新信息）

支持的版本：`1.3.0-beta24-01-17`及以后的版本，如果你觉得目前的界面不能满足你，或者你想自定义一些全局的东西，又或者你想加入一些好玩的东西，你可以选择自定义css和js **(此操作针对全局和所有账号生效)**。你还可以前往[**社区**](https://github.com/hslr-s/sun-panel/discussions)可以发布你的教程，让更多人使用。

:::danger 
请不要添加来源不明的js代码，避免被攻击！！！
:::

自定义的文件在`web/custom`目录下，**如果文件不存在，可以在此目录下手动创建`index.js`,`index.css`这两个文件**

<div class="tip custom-block">

**docker需要在docker run 的时候增加`-v ~/docker_data/sun-panel/custom:/app/web/custom`进行挂载（仅仅是示例根据自身环境修改冒号前的路径）**

</div>


大概的目录结构如下:
```txt {10-11}
.
├── conf
├── database
├── runtime
├── sun-panel
├── uploads
└── web
    ├── assets
    ├── custom
    │   ├── index.css // [!code focus]
    │   └── index.js // [!code focus]
    ├── favicon-black.svg
    ├── favicon.ico
    ├── favicon.svg
    ├── index.html
    ├── logo.png
    └── static
```

然后可以编辑这两个文件，到浏览器刷新后查看效果，如果没有效果，请清除浏览器缓存

:::danger 
请不要添加来源不明的js代码，避免被攻击！！！
:::