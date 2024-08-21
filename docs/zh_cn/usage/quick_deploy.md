# 部署教程

## 默认账号密码
账号：**admin@sun.cc**

密码：**12345678**

## 命令参数

::: info `v1.4.0+` 

|参数|说明|
|---|---|
|-h|查看命令说明|
|-config-reset|生成或重置配置文件（conf/conf.ini）|
|-config-path|指定程序配置文件的目录 (默认 "./conf")|
|-password-reset|重置第一个管理账号的密码|

:::

::: details `v1.3.0` 及之前版本，请点此查看
|参数|说明|
|---|---|
|-h|查看命令说明|
|-config|生成配置文件（conf/conf.ini）|
|-password-reset|重置第一个管理账号的密码|
:::

## docker 运行 {#docker_run}

::: tip
DockerHub [Sun-Panel项目首页](https://hub.docker.com/r/hslr/sun-panel) 
:::

::: info `v1.4.0+` 
如果您是从`v1.3.0`及之前的版本升级到此版本，[请查看这个说明](https://github.com/hslr-s/sun-panel/discussions/98)

目录挂载 `-v`，全部可选，根据自己的需求选择：
|本地目录|容器目录|说明|
|---|---|---|
|~/sun-panel/conf|/app/conf|配置文件（多合一目录）|
|/var/run/docker.sock|/var/run/docker.sock|若想在容器中使用docker功能，请挂载此目录（非特殊情况下，**请原样挂载**）`1.5.0+`|
|~/sun-panel/runtime|/app/runtime|运行日志（不推荐挂载）|
:::

::: details `v1.3.0` 及之前版本，请点此查看
目录挂载 `-v`，全部可选，根据自己的需求选择：
|容器目录|说明|
|---|---|
|/app/conf|配置文件|
|/app/uploads|上传的文件|
|/app/database|数据库文件|
|/app/runtime|运行日志(不推荐挂载)|
|/app/web/custom|自定义（js,css等）仅限 `v1.3.0`|
:::

1. 拉取最新镜像
```sh
docker pull hslr/sun-panel:latest
```

2. 直接下载运行

::: info `v1.4.0+` 

`latest` 可以替换成其他版本号（[查看](https://hub.docker.com/r/hslr/sun-panel/tags)），示例已经挂载了docker目录，可在容器中使用docker
```sh
docker run -d --restart=always -p 3002:3002 \
-v ~/docker_data/sun-panel/conf:/app/conf \
-v /var/run/docker.sock:/var/run/docker.sock \
--name sun-panel \
hslr/sun-panel:latest
```

容器端口默认：3002，`--restart=always` 自动重启，`-d` 后台运行
:::

::: details `v1.3.0` 及之前版本，请点此查看
```sh
docker run -d --restart=always -p 3002:3002 \
-v ~/docker_data/sun-panel/conf:/app/conf \
-v ~/docker_data/sun-panel/uploads:/app/uploads \
-v ~/docker_data/sun-panel/database:/app/database \
--name sun-panel \
hslr/sun-panel
```
:::

## docker-compose 运行 {#docker_compose}

仅供参考，请根据自己的需求修改 `v1.4.0及以上版本`

```yaml
version: "3.2"

services:
  sun-panel:
    image: "hslr/sun-panel:latest"
    container_name: sun-panel
    volumes:
      - ./conf:/app/conf
      - /var/run/docker.sock:/var/run/docker.sock # 挂载docker.sock
      # - ./runtime:/app/runtime # 挂载日志目录
      # - /mnt/sata1-1:/os # 硬盘挂载点（根据自己需求修改）
    ports:
      - 3002:3002
    restart: always
```

运行
```sh
docker-compose up -d
```


## 可执行（二进制）文件运行

::: tip
前往Github  [Releases](https://github.com/hslr-s/sun-panel/releases) 下载二进制文件
:::


执行示例（使用命令行运行）

```sh
./sun-panel
```



