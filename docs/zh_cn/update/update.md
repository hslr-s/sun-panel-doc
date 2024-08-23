# 更新说明

::: danger 说明
**升级请务必自行备份数据，docker 版本要备份挂载目录！！！**，特别是升级 beta 版本，一定要备份！

如果更新完成没有任何效果记得 **清除浏览器缓存**。
<!-- [清除浏览器缓存](https://blog.csdn.net/m0_46156566/article/details/108519629)） -->
:::

## 版本命名说明

#### 规则：

`[大版本]`.`[小版本]`.`[正式版本/小功能更新/修复bug]`-`[测试/开发][日期]`

#### 示例：
- `v1.3.1-beta24-02-28` beta版本
- `v1.3.1`  正式版本 / 小功能更新 / 修复bug 

#### 版本从新到旧时间排序示例：

`v1.3.1` > `v1.3.1-beta24-02-28` > `v1.3.0` > `v1.3.0-beta24-02-20`

## docker 版本

### 1. 进入到 [DockerHub](https://hub.docker.com/r/hslr/sun-panel/tags)，找到对应的版本

请注意 docker 版本号不带 `v`

![](/images/update_log/docker_hub_beta.png)

### 2. 复制指令下载

示例
```
# 最新正式版本
docker pull hslr/sun-panel:latest

# 最新beta版本
docker pull hslr/sun-panel:beta

# 其他指定版本（版本号前不要带有 'v'）
docker pull hslr/sun-panel:1.4.0
docker pull hslr/sun-panel:1.4.0-beta24-02-20
```

### 3. 群晖或者其他可视化操作的
直接选择要使用的标签进行拉取，新建容器运行，挂载路径要保证与旧版本一致。如果不支持筛选标签按下面命令行方式运行

### 4. 命令行运行（挂载目录与旧版本一致）
建议新建容器运行，如遇问题可以及时恢复,
```sh
docker run -d --restart=always -p 3002:3002 \
-v ~/docker_data/sun-panel/conf:/app/conf \
--name sun-panel \
hslr/sun-panel:latest
```
将上面命令中 `latest` 替换成任意已有的版本标签即可，其他参数按自身需求修改


## 二进制版本

::: tip
前往Github  [Releases](https://github.com/hslr-s/sun-panel/releases) 下载二进制文件
:::

下载后，将压缩包中的 `web` 文件夹和 `可执行二进制文件`，直接覆盖后再次运行即可。

----
相关参考：<a href="../usage/quick_deploy">部署教程</a> | <a href="https://www.bilibili.com/video/BV1ke411y7B5" target="_blank">[Bilibili] Beta更新视频教程</a> |  <a href="https://youtu.be/wRo-azoAbsQ?si=ZNSKm89bx0yq5Puw" target="_blank">[YouTube] Beta更新视频教程</a>