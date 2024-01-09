# 编译运行

## 前端
```sh
# 开发运行
pnpm dev

# 编译打包(打包后生成dist目录，若需要结合后端使用请改成web)
pnpm build
```

## 后端

1.正式编译程序前先进入`service`

2.按照[静态资源编译教程](./backend_static_compilation)编译后端静态文件

3.正式编译
```sh
# 进入后端项目
cd service

# 开发运行
go run main.go

# 编译打包
go build -o sun-panel main.go
```

## docker

::: warning 
执行命令前，请保证你已经拉取了项目代码，然后使用命令行进入到项目根目录
:::

构建docker镜像
```sh
docker build -t sun-panel .
```

运行 `D:\docker\data\sun-panel` 为本地开发运行的路径
```sh
docker run --rm -d -p 3003:3002 -v  D:\docker\data\sun-panel\conf:/app/conf -v  D:\docker\data\sun-panel\runtime:/app/runtime -v D:\docker\data\sun-panel\uploads:/app/uploads -v D:\docker\data\sun-panel\database:/app/database --name sun-panel sun-panel
```