# 快速开始

本指南将帮助你在 5 分钟内跑通 Hello World 微应用。

::: tip 前置要求
电脑上需要安装 Node.js >= 18.20
:::


## 步骤 1：克隆项目

从 GitHub 克隆项目模板：

```bash
git clone https://github.com/Sun-Panel/microapp-hello-world.git
cd microapp-hello-world
```


## 步骤 2：安装依赖

```bash
npm install
```


## 步骤 3：启动开发服务器

```bash
npm run dev
```

启动成功后，会自动打开一个网页，按照提示复制入口文件地址，在 Sun-Panel 中导入，即预览微应用。


## 步骤 4：打包发布

```bash
npm run build   # 构建生产版本
npm run pack    # 打包组件包
```

打包产物位于 `packages/` 目录，生成 `.zip` 文件可直接上传到 Sun-Panel。


## 开发命令一览

| 命令 | 说明 |
|------|------|
| `npm run dev` | 启动开发服务器 |
| `npm run build` | 生产模式构建 |
| `npm run pack` | 打包组件包（生产模式） |
| `npm run pack:dev` | 打包组件包（开发模式） |
| `npm run clean` | 清理构建产物 |


## 下一步

- [项目结构](./project_structure) - 了解目录和文件
- [配置说明](./config) - 修改应用信息
- [组件开发](./dev_guide) - 开发你的第一个组件
