# 部署教程

## 默认账号密码
账号：admin@sun.cc

密码：12345678

## 命令参数
|参数|说明|
|---|---|
|-h|查看命令说明|
|-config|生成配置文件（conf/conf.ini）|
|-password-reset|重置第一个用户的密码|


## docker 运行

::: tip
DockerHub [Sun-Panel项目首页](https://hub.docker.com/r/hslr/sun-panel) 
:::

目录挂载 `-v`，根据自己的需求选择：
|容器目录|说明|
|---|---|
|/app/conf|配置文件|
|/app/uploads|上传的文件|
|/app/database|数据库文件|
|/app/runtime|运行日志(不推荐挂载)|

1. 拉取镜像
```sh
docker pull hslr/sun-panel
```

2. 直接下载运行
```sh
docker run -d --restart=always -p 3002:3002 \
-v ~/docker_data/sun-panel/conf:/app/conf \
-v ~/docker_data/sun-panel/uploads:/app/uploads \
-v ~/docker_data/sun-panel/database:/app/database \
--name sun-panel \
hslr/sun-panel
```

## 二进制文件运行

::: tip
前往Github  [Releases](https://github.com/hslr-s/sun-panel/releases) 下载二进制文件
:::


执行示例

```sh
./sun-panel
```



