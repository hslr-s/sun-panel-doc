---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Sun-Panel V2"
  text: "Simple, Easy to Use, Attractive"
  tagline: "v2.0.2 released · New micro-app/widget framework, redesigned navigation, and video wallpapers"
  actions:
    - theme: brand
      text: Explore V2
      link: /introduce/project_v2

    - theme: alt
      text: Quick Deployment
      link: /usage/quick_deploy

    - theme: alt
      text: Download
      link: https://github.com/hslr-s/sun-panel/releases
    
    - theme: alt
      text: v1
      link: /introduce/project

  image:
    src: /images/introduce/main-dark-v2.webp
    alt: Sun-Panel V2

features:

  - icon:
     src: /images/index_home/f_concise.png
    title: Redesigned Navigation
    details: Mixed card sizes, cross-group drag and drop, and a mobile-friendly layout.
  - icon:
     src: /images/index_home/f_extension.png
    title: <a href="//appstore.sun-panel.top">Micro-Apps / Widgets</a>
    details: Install, uninstall, check for updates, and upgrade versions; developers can build their own.
  - icon:
     src: /images/index_home/f_video.png
    title: Video Wallpapers
    details: Upload any video as the page background for a more dynamic homepage.
  - icon:
     src: /images/index_home/f_network.png
    title: Smart Network Selection
    details: Match internal addresses based on the current URL; custom card addresses support right-click actions.
  - icon:
     src: /images/index_home/f_docker.png
    title: Docker Manager
    details: Card-based container status with real-time network speed and total traffic.
  - icon:
     src: /images/index_home/f_code.png
    title: Import/Export & Custom Code
    details: Share .zip configurations by group, use the snippet manager and marketplace, and enjoy multilingual UI.

---


----
<div style="text-align:center;font-size:20px;margin-top:32px">

\- **It's finally here after a year — see what's new in Sun-Panel V2** -
</div>

<div style="position:relative;width:100%;max-width:900px;margin:16px auto;aspect-ratio:16/9;">
  <iframe src="https://player.bilibili.com/player.html?bvid=BV1Js486QE1w&amp;page=1&amp;high_quality=1&amp;danmaku=0" style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;" scrolling="no" allowfullscreen></iframe>
</div>

<div style="text-align:center;margin-top:8px;">
  <a href="https://www.bilibili.com/video/BV1Js486QE1w/" target="_blank" rel="noopener">Watch the full video on Bilibili</a>
</div>

<div style="text-align:center;font-size:20px">

\- **All-new V2 interface, freely combined** -
</div>

![](/images/v2_screenshot/glass_style_2.png)

![](/images/v2_screenshot/all_widget.png)

![](/images/v2_screenshot/glass_style_1.png)

![](/images/v2_screenshot/v2_appstore.png)

<div style="display: flex; justify-content: center; gap: 16px;">
  <img src="/images/v2_screenshot/v2_phone_1.png" alt="Mobile preview 1" style="width: calc(50% - 8px); max-width: 500px; height: auto;">
  <img src="/images/v2_screenshot/v2_phone_2.png" alt="Mobile preview 2" style="width: calc(50% - 8px); max-width: 500px; height: auto;">
</div>


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

<LangChange/>

<script setup>

import LangChange from '../docs/.vitepress/src/components/langChange.vue';
</script>
