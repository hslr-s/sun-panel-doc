import type { DefaultTheme } from "vitepress";

export function getChineseThemeConfig(): DefaultTheme.Config {
  return {
    outlineTitle: '本页目录',
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },
    darkModeSwitchLabel: '外观',
    sidebarMenuLabel: '菜单',
    returnToTopLabel: '返回顶部',

    nav: nav(),

    sidebar: {
      '/zh_cn/': sidebarRoot(),
      '/zh_cn/openapi/': sidebarOpenapi(),
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/hslr-s/sun-panel' },
      {
        icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M11.984 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12a12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.016 0m6.09 5.333c.328 0 .593.266.592.593v1.482a.594.594 0 0 1-.593.592H9.777c-.982 0-1.778.796-1.778 1.778v5.63c0 .327.266.592.593.592h5.63c.982 0 1.778-.796 1.778-1.778v-.296a.593.593 0 0 0-.592-.593h-4.15a.592.592 0 0 1-.592-.592v-1.482a.593.593 0 0 1 .593-.592h6.815c.327 0 .593.265.593.592v3.408a4 4 0 0 1-4 4H5.926a.593.593 0 0 1-.593-.593V9.778a4.444 4.444 0 0 1 4.445-4.444h8.296Z"/></svg>'
        },
        link: 'https://gitee.com/hslr/sun-panel',
        ariaLabel: 'gitee'
      },
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
      text: '在Github编辑此页面'
    },
    lastUpdated: {
      text: '最后编辑时间'
    }

  };
}

function nav(): DefaultTheme.NavItem[] {
  return [
    { text: '快速部署', link: '/zh_cn/usage/quick_deploy' },
    { text: '常见问题', link: '/zh_cn/faq/faq.html' },
    { text: 'OpenAPI', link: '/zh_cn/openapi/v1/apis' },
    { text: '更新日志', link: '/zh_cn/update/update_log' },
    {
      text: '<span style="background-image: linear-gradient(to right,#ee0979,#ff6a00);-webkit-text-fill-color: transparent;-webkit-background-clip: text;background-clip: text;font-weight:800;">PRO</span>',
      link: '//pro.sun-panel.top'
    },
    { text: '社区', link: 'https://github.com/hslr-s/sun-panel/discussions' },
  ]
}

function sidebarRoot(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: '介绍',
      collapsed: false,
      items: [
        { text: '项目介绍', link: '/zh_cn/introduce/project' },
        { text: '演示站点', link: '/zh_cn/introduce/demo_site' },
        { text: '作者&交流群&社区', link: '/zh_cn/introduce/author_groups' },
        { text: '打赏🧧', link: '/zh_cn/introduce/donate' },

      ]
    },

    {
      text: '使用教程',
      collapsed: false,
      items: [
        { text: '快速部署', link: '/zh_cn/usage/quick_deploy' },
        { text: '编译运行', link: '/zh_cn/usage/compile' },
        { text: '重置密码', link: '/zh_cn/usage/reset_password' },
        { text: '公开访问（访客模式）', link: '/zh_cn/usage/public_visit' },
        { text: '自定义页脚', link: '/zh_cn/usage/custom_footer' },
      ]
    },

    {
      text: '浏览器扩展',
      collapsed: false,
      items: [
        { text: '使用说明', link: '/zh_cn/browser_extension/index' },
        { text: '更新日志', link: '/zh_cn/browser_extension/update_log' },

      ]
    },




    {
      text: '高级',
      collapsed: false,
      items: [
        { text: '配置文件', link: '/zh_cn/advanced/config' },
        { text: '使用mysql/redis', link: '/zh_cn/advanced/mysql_redis' },
        { text: '使用反向代理+外网访问', link: '/zh_cn/advanced/use_reverse_proxy' },
        { text: '自定义js、css', link: '/zh_cn/advanced/custom_js_css' },
        { text: '美化（beta）', link: '/zh_cn/advanced/landscap' },

      ]
    },

    {
      text: '更新',
      collapsed: false,
      items: [
        { text: '更新日志', link: '/zh_cn/update/update_log' },
        { text: 'Beta更新教程', link: '/zh_cn/update/update_beta' },
      ]
    },

    {
      text: '其他',
      collapsed: false,
      items: [
        { text: '壁纸-图标网站推荐', link: '/zh_cn/other/icon_wallpaper_recommend_sites' },
        { text: '浏览器书签转换', link: 'https://hslr-s.github.io/sun-panel-tool-page/' },
      ]
    },

    {
      text: '常见问题',
      collapsed: false,
      link: '/zh_cn/faq/faq'
    },


  ]
}

function sidebarOpenapi(): DefaultTheme.SidebarItem[] {
  // return []
  return [
    {
      text: 'OpenAPI v1',
      collapsed: false,
      items: [
        { text: '接口说明', link: '/zh_cn/openapi/v1/apis' },
        { text: '错误码说明', link: '/zh_cn/openapi/v1/error_code' },
      ]
    },
  ]
}