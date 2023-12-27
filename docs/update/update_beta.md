::: danger 谨慎更新
Beta版本是正式版本前的测试版本，极有可能有严重的bug，请谨慎升级！

目前beta版本只发布docker版本，不单独发布二进制文件。其中beta版本是测试版本，docker里面`latest`标签是正式版本或者稳定的beta版本，不会更新不稳定的beta版本。

beta的标签命名`[主版本号]-beta日期`示例：`1.1.0-beta23-11-24`组成。

更新完成如果没有任何效果记得[清除浏览器缓存](https://blog.csdn.net/m0_46156566/article/details/108519629)）
:::


## docker 版本

### 1. 进入到DockerHub的 [Sun-Panel项目首页](https://hub.docker.com/r/hslr/sun-panel/tags)，beta版本在标签行会有beta标识+日期

![](/images/update_log/docker_hub_beta.png)

### 2. 复制指令下载（请注意不是latest）

示例
```
docker pull hslr/sun-panel:1.1.0-beta23-11-24
```

### 3. 群晖或者其他可视化操作的
直接选择带有`beta+日期`的标签拉取，新建容器运行，不支持筛选标签按下面命令行方式运行

### 4. 命令行运行（挂载目录与正式版一致）
建议新建容器运行，如遇问题可以及时恢复,
```sh
docker run -d --restart=always -p 3002:3002 \
-v ~/docker_data/sun-panel/conf:/app/conf \
-v ~/docker_data/sun-panel/uploads:/app/uploads \
-v ~/docker_data/sun-panel/database:/app/database \
--name sun-panel \
hslr/sun-panel:1.1.0-beta23-11-24
```
将上面命令中`hslr/sun-panel:1.1.0-beta23-11-24`替换成最新beta版本的标签即可，其他参数按自身需求修改

完整运行参考：<a href="/deploy/quick_deploy">部署教程</a> | <a href="https://www.bilibili.com/video/BV1ke411y7B5" target="_blank">B站Beta更新视频教程</a>