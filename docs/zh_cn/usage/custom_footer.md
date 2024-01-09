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