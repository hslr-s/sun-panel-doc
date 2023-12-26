# 🍜 使用运行教程

<div id="default-username"></div>

### 默认账号密码
账号：admin@sun.cc

密码：12345678

### 命令参数
|参数|说明|
|---|---|
|-h|查看命令说明|
|-config|生成配置文件（conf/conf.ini）|
|-password-reset|重置第一个用户的密码|

### 二进制文件运行

去 [Releases](https://github.com/hslr-s/sun-panel/releases) 下载二进制文件

执行示例

```sh
./sun-panel
```

#### 重置密码

执行示例

```sh
./sun-panel -password-reset
```
输出
```
密码已经重置成功，以下是账号信息
用户名  xxx@qq.com
密码  12345678
```

### docker 运行

目录挂载 `-v`，根据自己的需求选择：
|容器目录|说明|
|---|---|
|/app/conf|配置文件|
|/app/uploads|上传的文件|
|/app/database|数据库文件|
|/app/runtime|运行日志(不推荐挂载)|

1. 拉取镜像
```
docker pull hslr/sun-panel
```

2. 直接下载运行
```
docker run -d --restart=always -p 3002:3002 \
-v ~/docker_data/sun-panel/conf:/app/conf \
-v ~/docker_data/sun-panel/uploads:/app/uploads \
-v ~/docker_data/sun-panel/database:/app/database \
--name sun-panel \
hslr/sun-panel
```


### 自编译运行

#### 前端
```
# 开发运行
pnpm dev

# 编译打包(打包后生成dist目录，若需要结合后端使用请改成web)
pnpm build
```

#### 后端

1.正式编译程序前先进入`service`

2.按照[静态资源编译教程](/backend_static_compilation)编译后端静态文件

3.正式编译
```
# 进入后端项目
cd service

# 开发运行
go run main.go

# 编译打包
go build -o sun-panel main.go
```

#### docker windows本地开发编译运行

```
// 编译
docker build -t sun-panel .

// 运行 D:\docker\data\sun-panel 为本地运行的路径
docker run --rm -d -p 3003:3002 -v  D:\docker\data\sun-panel\conf:/app/conf -v  D:\docker\data\sun-panel\runtime:/app/runtime -v D:\docker\data\sun-panel\uploads:/app/uploads -v D:\docker\data\sun-panel\database:/app/database --name sun-panel sun-panel
```

## 🎉 图标、壁纸网站推荐

图标：
- [阿里巴巴矢量图标](https://www.iconfont.cn/)
- [Icons8](https://icons8.com/)
- [Vectorjunky](https://www.iconfinder.com/)

壁纸：
- [Wallhaven](https://wallhaven.cc/)
- [Wallpaperscraft](https://wallpaperscraft.com/)
- [Wallpaper Abyss](https://wall.alphacoders.com/)

## ❤️ 感谢

- [Roc](https://github.com/RocCheng)提供自动构建多平台docker镜像[方案](https://github.com/hslr-s/sun-panel/issues/9#issuecomment-1817433439)