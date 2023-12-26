import type { DefaultTheme } from "vitepress";

export function getChineseThemeConfig():DefaultTheme.Config {
  return {
    outlineTitle: '本页目录',
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },
    darkModeSwitchLabel: '外观',
    sidebarMenuLabel: '菜单',
    returnToTopLabel: '返回顶部',

    nav: [
      { text: '首页', link: '/' },
    ],
    
    sidebar: {
      '/':[
        {
          text: '介绍',
          items: [
            { text: '项目介绍', link: '/introduce/index'},
            { text: '演示站点', link: '/introduce/demo_site'},
          ]
        },

        {
          text: '部署',
          items: [
            { text: '快速部署', link: '/deploy/quick_deploy'},
            { text: '编译运行', link: '/deploy/compile'},
            { text: '重置密码', link: '/deploy/reset_password'},
          ]
        },

        {
          text: '其他',
          items: [
            { text: '壁纸-图标网站推荐', link: '/icon_wallpaper_recommend_sites'},
          ]
        },

        
      ],
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
    editLink: {
      pattern: 'https://github.com/hslr-s/sun-panel-doc/edit/master/docs/:path',
      text:'在Github编辑此页面'
    },
    lastUpdated:{
      text:'最后编辑时间'
    }
   
  };
}