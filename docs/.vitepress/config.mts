import { defineConfig } from 'vitepress'
import markdownItTaskList from 'markdown-it-task-lists'
import { getChineseThemeConfig } from "./src/configs/zh_cn.mts";
import { getEnglishThemeConfig } from "./src/configs/en.mts";
import timeline from "vitepress-markdown-timeline"; 

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Sun-Panel",
  description: "sun-panel文档",
  lang:"zh-CN",
  lastUpdated: true,
  locales: {
    zh_cn: {
      label: '简体中文',
      lang: '/zh_cn/',
      themeConfig:getChineseThemeConfig()
    },
    root: {
      label: 'English',
      lang: 'en',
      themeConfig:getEnglishThemeConfig()
    },
  },
  markdown:{
    lineNumbers: true,
    config: (md) => {
      md.use(markdownItTaskList)
      md.use(timeline)
    }
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    socialLinks: [
      { icon: 'github', link: 'https://github.com/hslr-s/sun-panel' },
    ],

    search: { 
      provider: 'local',
    }, 

    //页脚
    footer: { 
      message: 'Released under the MIT License.', 
      copyright: 'Copyright © 2023-present Sun-Panel', 
    }, 
    
  },

  
})



