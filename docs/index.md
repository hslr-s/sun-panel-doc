---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Sun-Panel"
  text: "Simple, easy to use, and aesthetically pleasing"
  tagline: Server, NAS navigation panel, Homepage, Browser homepage
  actions:
    - theme: brand
      text: Quick Deployment
      link: /usage/quick_deploy
    - theme: alt
      text: Project Introduction
      link: /introduce/project
    - theme: alt
      text: Github
      link: https://github.com/hslr-s/sun-panel
  image:
    src: /images/introduce/main-dark.png
    alt: ico

features:
  - title: Concise
    details: Small resource footprint, no need to connect to an external database
  - title: Docker Deployment
    details: Easy to get started, no code modification required, switch between LAN and WAN connections
  - title: Supports opening in-page pop-up windows
    details: Rich icon options, some websites may block this feature
---



<div class="tip custom-block" style="max-width:1152px;margin:20px auto">
The author's native language is Chinese. Translations in other languages in the documentation are provided by ChatGPT. 

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