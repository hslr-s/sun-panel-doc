---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Sun-Panel"
  text: "Simple, Easy to Use, Attractive"
  tagline: "A NAS, server navigation panel, easy Docker manager, Homepage, and browser start page"
  actions:
    - theme: alt
      text: Project Introduction
      link: /introduce/project

    - theme: brand
      text: Quick Deployment
      link: /usage/quick_deploy

    - theme: alt
      text: Download
      link: https://github.com/hslr-s/sun-panel/releases

    - theme: alt
      text: GitHub
      link: https://github.com/hslr-s/sun-panel
  image:
    src: /images/introduce/main-dark.png
    alt: ico

features:

  - icon:
     src: /images/index_home/f_concise.png
    title: Concise
    details: No code modification required, easy to operate, powerful, minimal resource usage, supports switching between LAN and public network environments.
  - title: Docker Deployment
    icon:
     src: /images/index_home/f_docker.png
    details: Supports easy Docker deployment, simplifies the operation process.
  - title: <a href="/browser_extension/index">Browser Extension</a>
    icon:
     src: /images/index_home/f_extension.png
    details: Combine extension functionality to create a new tab page that rivals native experiences.

---


<div class="tip custom-block" style="max-width:1152px;margin:20px auto">
Translations in other languages in the documentation are provided by ChatGPT. 

If there are any inaccuracies, please forgive.If you are willing, you can click on the edit this page below the document to modify this page.
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
