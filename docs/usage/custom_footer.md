---
outline: [2,3]
---

# Custom footer

::: tip 
New in v1.3.0, we can customize the footer code through `App Launchers` -> `Basic Settings` -> `Custom Footer`. This feature requires basic HTML coding skills. **If you don't understand, do not fill in code from unknown sources**. If the page becomes distorted after entering code, you can click the clear button next to the input box or `Reset`. If you have great ideas and a spirit of contribution, you can add your ideas in the [GitHub community](https://github.com/hslr-s/sun-panel/discussions). This footer only takes effect for the account and is not global. If you want it to be effective globally, you can use [Custom JS/CSS](../advanced/custom_js_css.md).
:::
## Some Examples

### Dynamic Gradient Background

<div class="tip custom-block">

This configuration can also be used directly in [custom CSS](../advanced/custom_js_css.md). If used in CSS, please remove the `<style></style>` tags from the code. **Please note that using this code will override the default background settings. If it causes lag, consider discontinuing its use.**

</div>

The GIF size is too large, so no image is provided. The crucial part of the code is the last three parameters, which you can modify to achieve the desired colors.

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