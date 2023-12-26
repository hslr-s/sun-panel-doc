## 环境要求

- Node.js 版本 18 或更高版本

- npm 最新版本

## 编辑方法
- 下载源码
```bash
git clone https://github.com/jackloves111/jackloves111.github.io.git
```

- 安装依赖
```bash
cd /jackloves111.github.io/源码/
npm install
```

- 修改markdown文档

- 打包markdown为html文件
```bash
npm run docs:build
```

- 替换打包好的html文件

1. 删除`/docs/`内原本的文件

2. 将`/源码/docs/.vitepress/dist/`内新的文件替换掉`/docs/`内的文件

- 所有变更的后的文件重新上传到github

## 本地化预览

```bash
npm run docs:dev
```