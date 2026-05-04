# 在1Panel面板上部署
## 安装1Panel
首要条件部署好1Panel面板，点击查看[1panel官方文档](https://1panel.cn/)

## 安装sun-panel

在「应用商店」中搜索「sun-panel」 项目，并点击安装

![](/images/deploy/1panel/search.png)

选择好将要安装的版本，并勾选搜所需项
![](/images/deploy/1panel/install1.webp)

（可选）如果要使用容器监控功能，需要勾选编辑 compose 文件，并在最下方文件编辑框中添加如下代码片段，给容器添加访问 docker.sock 的权限

```yml
- /var/run/docker.sock:/var/run/docker.sock
```
![](/images/deploy/1panel/install2.webp)

填写好配置项，并点击安装
## 访问使用
- 浏览器访问设置的**域名**或者 `ip:端口` 的格式访问
- 账号密码参考：[默认部署教程](/zh_cn/usage/quick_deploy.html)