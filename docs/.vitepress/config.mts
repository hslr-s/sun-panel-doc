import { defineConfig,DefaultTheme } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Sun-Panel",
  description: "sun-panel文档",
  lang:"zh-CN",
  lastUpdated: true,
  locales: {
    root: {
      label: '简体中文',
      lang: 'zh_cn',
      themeConfig:getChineseThemeConfig()
    },
    en: {
      label: 'English',
      lang: 'en',
      link: '/en/',
      // themeConfig:getEnglishThemeConfig()
    },
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config


    socialLinks: [
      { icon: 'github', link: 'https://github.com/hslr-s/sun-panel' }
    ],

    search: { 
      provider: 'local',
    }, 
    
  },

  
})



function getChineseThemeConfig():DefaultTheme.Config {
  return {
    nav: [
      { text: '首页', link: '/' },
    ],
    
    sidebar: {
      '/':[
        {
          text: '介绍',
          link: '/introduce',
        },

        {
          text: '部署',
          items: [
            { text: '快速部署', link: '/quick_deploy'},
          ]
        },
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/hslr-s/sun-panel' }
    ],

    search: { 
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档'
          },
          modal: {
            noResultsText: '无法找到相关结果',
            resetButtonTitle: '清除查询条件',
            footer: {
              selectText: '选择',
              navigateText: '切换'
            },
          },
        },
      },
    }, 

    //页脚
    footer: { 
      message: 'Released under the MIT License.', 
      copyright: 'Copyright © 2023-present Sun-Panel', 
    }, 
  };
}
