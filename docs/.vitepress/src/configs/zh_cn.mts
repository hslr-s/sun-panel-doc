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
      { text: '首页', link: '/zh_cn/' },
      { text: '更新日志', link: '/zh_cn/update/update_log'},
      { text: '赞助', link: '/zh_cn/introduce/donate'},
      { text: '社区', link: 'https://github.com/hslr-s/sun-panel/discussions'},
    ],
    
    sidebar: {
      '/':[
        {
          text: '介绍',
          collapsed: false,
          items: [
            { text: '项目介绍', link: '/zh_cn/introduce/project'},
            { text: '演示站点', link: '/zh_cn/introduce/demo_site'},
            { text: '作者&交流群&社区', link: '/zh_cn/introduce/author_groups'},
            { text: '打赏🧧', link: '/zh_cn/introduce/donate'},
            
          ]
        },

        {
          text: '使用教程',
          collapsed: false,
          items: [
            { text: '快速部署', link: '/zh_cn/usage/quick_deploy'},
            { text: '编译运行', link: '/zh_cn/usage/compile'},
            { text: '重置密码', link: '/zh_cn/usage/reset_password'},
            { text: '公开访问（访客模式）', link: '/zh_cn/usage/public_visit'},
            { text: '自定义页脚', link: '/zh_cn/usage/custom_footer'},
          ]
        },

        {
          text: '高级',
          collapsed: false,
          items: [
            { text: '配置文件', link: '/zh_cn/advanced/config'},
            { text: '使用mysql/redis', link: '/zh_cn/advanced/mysql_redis'},
            { text: '使用反向代理+外网访问', link: '/zh_cn/advanced/use_reverse_proxy'},
            { text: '自定义js、css', link: '/zh_cn/advanced/custom_js_css'},
            
          ]
        },

        {
          text: '更新',
          collapsed: false,
          items: [
            { text: '更新日志', link: '/zh_cn/update/update_log'},
            { text: 'Beta更新教程', link: '/zh_cn/update/update_beta'},
          ]
        },

        {
          text: '其他',
          collapsed: false,
          items: [
            { text: '壁纸-图标网站推荐', link: '/zh_cn/other/icon_wallpaper_recommend_sites'},
            { text: '浏览器书签转换', link: 'https://hslr-s.github.io/sun-panel-tool-page/'},
            
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