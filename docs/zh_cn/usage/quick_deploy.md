# 部署教程

## 默认账号密码
账号：admin@sun.cc

密码：12345678

## 命令参数

::: details `v1.4.0-beta24-04-11+` 请点此查看

|参数|说明|
|---|---|
|-h|查看命令说明|
|-cfgInit|生成配置文件（conf/conf.ini）|
|-cfgPath|指定程序配置文件的目录|
|-pwdReset|重置第一个管理账号的密码|

:::

`v1.3.0` 及之前版本
|参数|说明|
|---|---|
|-h|查看命令说明|
|-config|生成配置文件（conf/conf.ini）|
|-password-reset|重置第一个管理账号的密码|


## docker 运行

::: tip
DockerHub [Sun-Panel项目首页](https://hub.docker.com/r/hslr/sun-panel) 
:::

::: details `v1.4.0-beta24-02-20+` 请点此查看
如果您是从`v1.3.0`及之前的版本升级到此版本，[请查看这个说明](https://github.com/hslr-s/sun-panel/discussions/98)

目录挂载 `-v`，全部可选，根据自己的需求选择：
|容器目录|说明|
|---|---|
|/app/conf|配置文件（多合一目录）|
|/app/runtime|运行日志(不推荐挂载)|
:::

**`v1.3.0` 及之前版本**
目录挂载 `-v`，全部可选，根据自己的需求选择：
|容器目录|说明|
|---|---|
|/app/conf|配置文件|
|/app/uploads|上传的文件|
|/app/database|数据库文件|
|/app/runtime|运行日志(不推荐挂载)|
|/app/web/custom|自定义（js,css等）`v1.3.0+`|

1. 拉取镜像
```sh
docker pull hslr/sun-panel
```

2. 直接下载运行

::: details `v1.4.0-beta24-02-20+` 请点此查看

请自行替换版本号：`1.4.0-beta24-02-20`
```sh
docker run -d --restart=always -p 3002:3002 \
-v ~/docker_data/sun-panel/conf:/app/conf \
--name sun-panel \
hslr/sun-panel:1.4.0-beta24-02-20
```
:::

**`v1.3.0` 及之前版本**
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



