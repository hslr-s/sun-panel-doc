---
outline: [2,3]
---

# 自定义页脚

::: tip 
v1.3.0新增，我们可以通过 `应用启动器` -> `基础设置` -> `自定义footer` 来自定义页脚代码，此功能需要有基本的HTML的编码能力，**如果您不了解不要填写来源不明的代码**，如果填写代码后导致页面错乱，可以点击输入框右边的清除按钮或者`重置`。如果您有很棒的玩法并且有贡献的精神，可以点击页面下的`在github编辑此页面`来添加你的玩法。
:::

## 一些示例

### 备案号
将代码中的`京`换成你域名备案地的简写，`xxxx...`换成备案号
```html
<div style="text-align: center;color:#fff">
    <a href="https://beian.miit.gov.cn" target="_blank">京ICP备 xxxxxxxxxx号</a>
</div>
```

### 动态渐变背景

<div class="tip custom-block">

此配置同时可以直接在[自定义css](../advanced/custom_js_css.md)中使用，如果在css中使用请删除代码中的`<style></style>`标签，**请注意使用此代码，默认自带背景部分设置将会失效**，如果使用导致卡顿请停止使用

</div>

gif尺寸太大了不放图了，重点行代码最后三个参数可以修改你想要的颜色

```html {20}
<style>
@keyframes hueRotate {
    100% {
        filter: hue-rotate(360deg);
    }
}
.sun-main .cover {
    width: 100vw;
    height: 100vh;
    margin: auto;
}

.sun-main .cover::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(30deg, #ffcc00, deeppink, #9c27b0);
    -webkit-animation: hueRotate 5s infinite alternate;
    animation: hueRotate 5s infinite alternate;
}

.sun-main .cover[style*="filter"]::before {
    filter: none;
}
</style>
```