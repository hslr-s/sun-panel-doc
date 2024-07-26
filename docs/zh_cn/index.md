---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Sun-Panel"
  text: "简单、易用、美观"
  tagline: 一个NAS、服务器导航面板、简易docker管理器、Homepage、浏览器首页
  actions:
    - theme: alt
      text: 项目介绍
      link: /zh_cn/introduce/project

    - theme: brand
      text: 快速部署
      link: /zh_cn/usage/quick_deploy

    - theme: alt
      text: 下载压缩包
      link: https://github.com/hslr-s/sun-panel/releases

    - theme: alt
      text: Github
      link: https://github.com/hslr-s/sun-panel
  image:
    src: /images/introduce/main-dark.png
    alt: ico

features:
 
  - icon:
     src: /images/index_home/f_concise.png
    title: 简洁
    details: 无需代码修改，易于操作，功能强大，占用资源小，支持局域网与公网环境切换
  - title: docker部署
    icon:
     src: /images/index_home/f_docker.png
    details: 支持 Docker 轻松部署，简化操作流程。
  - title: <a href="/zh_cn/browser_extension/index">浏览器辅助插件</a>
    icon:
     src: /images/index_home/f_extension.png
    details: 结合插件功能，打造媲美原生体验的新标签页
---



<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #bd34fe 30%, #41d1ff);

  /* --vp-home-hero-image-background-image: linear-gradient(-45deg, #41d1ff 10%, #bd34fe 10%); */
  --vp-home-hero-image-filter: blur(40px);
}

@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px);
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(72px);
  }
}
</style>