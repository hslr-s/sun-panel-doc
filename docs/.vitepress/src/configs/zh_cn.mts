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
      // v1
      '/zh_cn/': sidebarRoot(),
      '/zh_cn/openapi/': sidebarOpenapi(),

      // v2
      '/v2/zh_cn': sidebarRootV2(),
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
    { text: 'OpenAPI', link: '/zh_cn/openapi/v1/' },
    { text: '更新日志', link: '/zh_cn/update/update_log' },
    {
      text: '<span style="background-image: linear-gradient(to right,#ee0979,#ff6a00);-webkit-text-fill-color: transparent;-webkit-background-clip: text;background-clip: text;font-weight:800;">PRO</span>',
      link: '//pro.sun-panel.top'
    },
    { text: '社区', link: 'https://github.com/hslr-s/sun-panel/discussions' },
    {
      text: 'V2 开发版',
      link: '/v2/zh_cn/index'
    },
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
      text: '使用说明',
      collapsed: false,
      items: [
        { text: '快速部署', link: '/zh_cn/usage/quick_deploy' },
        { text: '宝塔面板部署', link: '/zh_cn/deploy/baota' },
        { text: '编译运行', link: '/zh_cn/usage/compile' },
        { text: '重置密码', link: '/zh_cn/usage/reset_password' },
        { text: '公开访问（访客模式）', link: '/zh_cn/usage/public_visit' },
        { text: '自定义页脚', link: '/zh_cn/usage/custom_footer' },
        { text: '迁移、备份', link: '/zh_cn/usage/backup' },
      ]
    },

    {
      text: '更新',
      collapsed: false,
      items: [
        { text: '更新说明', link: '/zh_cn/update/update' },
        { text: '正式版更新日志', link: '/zh_cn/update/update_log' },
        { text: '测试版更新日志', link: '/zh_cn/update/update_log_beta' },
        // { text: 'Beta更新教程', link: '/zh_cn/update/update_beta' },
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
        { text: '启用HTTPS', link: '/zh_cn/advanced/https' },
        { text: '使用mysql/redis', link: '/zh_cn/advanced/mysql_redis' },
        { text: '使用反向代理+外网访问', link: '/zh_cn/advanced/use_reverse_proxy' },
        { text: '自定义js、css', link: '/zh_cn/advanced/custom_js_css' },
        { text: '美化（beta）', link: '/zh_cn/advanced/landscap' },
        {
          text: 'JS 插件',
          collapsed: false,
          items: [
            { text: '插件说明', link: 'https://github.com/hslr-s/sun-panel-js-plugins' },
            { text: '分组侧边栏', link: 'https://github.com/hslr-s/sun-panel-js-plugins/tree/master/toc' },
          ]
        },

        { text: 'Sun-Panel-Helper 美化工具', link: '/zh_cn/advanced/sun_panel_helper' },
        {
          text: '三方开发主题',
          collapsed: false,
          items: [
            { text: '主题说明', link: '/zh_cn/advanced/third_theme' },
            { text: '与末大佬主题', link: '/zh_cn/advanced/third_theme/yumo_theme' },
            { text: '香水大佬主题', link: '/zh_cn/advanced/third_theme/xshui_theme' },
          ]
        },

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
function sidebarRootV2(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'V2开发版',
      collapsed: false,
      items: [
        { text: '介绍', link: '/v2/zh_cn/index' },
        { text: 'v2 更新日志', link: '/v2/zh_cn/update_log' },
        { text: '微应用下载', link: '/v2/zh_cn/micro_app_store' },
        // { text: '演示站点', link: '/zh_cn/introduce/demo_site' },
        // { text: '作者&交流群&社区', link: '/zh_cn/introduce/author_groups' },
        // { text: '打赏🧧', link: '/zh_cn/introduce/donate' },

      ]
    },

    {
      text: '微应用开发',
      collapsed: false,
      items: [
        { text: '介绍', link: '/v2/zh_cn/micro_app_dev/index' },
        { text: '快速开始', link: '/v2/zh_cn/micro_app_dev/quick_start' },
        { text: '项目结构', link: '/v2/zh_cn/micro_app_dev/project_structure' },
        { text: '配置说明', link: '/v2/zh_cn/micro_app_dev/config' },
        { text: '组件开发', link: '/v2/zh_cn/micro_app_dev/dev_guide' },
        { text: '平台 API', link: '/v2/zh_cn/micro_app_dev/api' },
        { text: '数据节点', link: '/v2/zh_cn/micro_app_dev/data_node' },
        { text: '权限声明', link: '/v2/zh_cn/micro_app_dev/permission' },
        { text: '打包发布', link: '/v2/zh_cn/micro_app_dev/publish' },
      ]
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
        { text: '全局说明', link: '/zh_cn/openapi/v1/' },
        { text: '错误码说明', link: '/zh_cn/openapi/v1/error_code' },
        {
          text: '接口',
          items: [
            { text: '图标卡片组', link: '/zh_cn/openapi/v1/apis_item_group' },
            { text: '图标卡片', link: '/zh_cn/openapi/v1/apis_item' },
            { text: '其他', link: '/zh_cn/openapi/v1/other' },
          ]
        },
      ]
    },
  ]
}