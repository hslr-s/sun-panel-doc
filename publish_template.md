## 群公告

### 正式版本
变量替换: version: 1.7.0
```
v{version}正式发布，升级请提前备份旧数据
如果更新后出现任何异常请尝试强制刷新页面（ctrl+shift+R），如果无法解决可以尝试清除浏览器缓存（ctrl+shift+del）

更新日志（必看）：
https://doc.sun-panel.top/zh_cn/update/update_log.html


=====
请先阅读使用说明部署教程：
https://doc.sun-panel.top/zh_cn/usage/quick_deploy.html


=====
docker 运行，建议新建容器运行，请提前备份好数据拉取指令参考
docker pull hslr/sun-panel:latest
docker pull hslr/sun-panel:{version}

拉取不下来下载离线镜像：
https://pan.quark.cn/s/bb1fb7c54d9a


=====
二进制文件下载运行（windows、linux）
https://github.com/hslr-s/sun-panel/releases
```

### Beta版本
变量替换: version: 1.7.0, date: 24-02-20
```
Beta更新v{version}-beta{date}
如果更新后出现任何异常请尝试强制刷新页面（ctrl+shift+R），如果无法解决可以尝试清除浏览器缓存（ctrl+shift+del）

docker指令参考:
docker pull hslr/sun-panel:beta
docker pull hslr/sun-panel:{version}-beta{date}

拉取不下来下载离线镜像：
https://pan.quark.cn/s/bb1fb7c54d9a

Linux和Windows二进制下载：
https://github.com/hslr-s/sun-panel/releases

新版本更新日志：https://doc.sun-panel.top/zh_cn/update/update_log_beta.html

更新教程：https://doc.sun-panel.top/zh_cn/update/update.html
```

### Github英文版更新说明

### 正式版本

```
[[简体中文]](https://sun-panel-doc.enianteam.com/zh_cn/update/update_log.html) | [English]

> [!CAUTION] 
> 
> 1. Before upgrading from the Docker version `v1.3.0` or earlier to this version, please read the [Update Instructions](https://github.com/hslr-s/sun-panel/discussions/98) first.
> 2. If you want to view the Docker status in the container, add the following when mounting: `-v /var/run/docker.sock:/var/run/docker.sock` (Some devices may not support this.)
> 3. If any exception occurs after updating, please try to force refresh the page (ctrl+shift+R). If it cannot be solved, you can try clearing the browser cache (ctrl+shift+del).

```

### Beta版本

```
[[简体中文]](https://doc.sun-panel.top/zh_cn/update/update_log_beta.html) | [English]

> Before upgrading from Docker version v1.3.0 or earlier, please read the [release notes](https://github.com/hslr-s/sun-panel/discussions/98) carefully.

> If you want to view the Docker status inside the container, make sure to mount with: `-v /var/run/docker.sock:/var/run/docker.sock`
> If any exception occurs after updating, please try to force refresh the page (ctrl+shift+R). If it cannot be solved, you can try clearing the browser cache (ctrl+shift+del).
```