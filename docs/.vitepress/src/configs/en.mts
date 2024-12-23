import type { DefaultTheme } from "vitepress";

export function getEnglishThemeConfig(): DefaultTheme.Config {
  return {
    nav: nav(),

    sidebar: {
      '/': sidebarRoot(),
      '/openapi/': sidebarOpenapi(),
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

    editLink: {
      pattern: 'https://github.com/hslr-s/sun-panel-doc/edit/master/docs/:path',
      text: 'Edit this page on GitHub'
    },
    lastUpdated: {
      text: 'Last Edited Time'
    }
  };
}

function nav(): DefaultTheme.NavItem[] {
  return [
    { text: 'Deploy', link: '/usage/quick_deploy' },
    { text: 'FAQ', link: '/faq/faq.html' },
    { text: 'OpenAPI', link: '/openapi/v1/apis' },
    { text: 'Release Notes', link: 'https://github.com/hslr-s/sun-panel/releases' },
    {
      text: '<span style="background-image: linear-gradient(to right,#ee0979,#ff6a00);-webkit-text-fill-color: transparent;-webkit-background-clip: text;background-clip: text;font-weight:800;">PRO</span>',
      link: '//pro.sun-panel.top'
    },
    { text: 'Discussions', link: 'https://github.com/hslr-s/sun-panel/discussions' },
  ]
}

function sidebarRoot(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Introduction',
      collapsed: false,
      items: [
        { text: 'Project Introduction', link: '/introduce/project' },
        { text: 'Demo Site', link: '/introduce/demo_site' },
        { text: 'Author & Community', link: '/introduce/author_groups' },
        { text: 'Donate☕', link: '/introduce/donate' },
      ]
    },

    {
      text: 'Usage',
      collapsed: false,
      items: [
        { text: 'Quick Deployment', link: '/usage/quick_deploy' },
        { text: 'Baota Panel Deploy', link: '/deploy/baota' },
        { text: 'Browser Extension', link: '/browser_extension' },
        { text: 'Compile and Run', link: '/usage/compile' },
        { text: 'Reset Password', link: '/usage/reset_password' },
        { text: 'Public visit (visitor mode)', link: '/usage/public_visit' },
        { text: 'Custom footer', link: '/usage/custom_footer' },
      ]
    },

    {
      text: 'Updates',
      collapsed: false,
      items: [
        { text: 'Update instructions', link: '/update/update' },
        { text: 'Release Notes', link: 'https://github.com/hslr-s/sun-panel/releases' },
        // { text: 'Beta Update Tutorial', link: '/update/update_beta' },
        // { text: '更新日志-BETA版', link: '/zh_cn/update/update_log_beta' },// 英文版本直接只想github
      ]
    },


    {
      text: 'Browser Extension',
      collapsed: false,
      items: [
        { text: 'Usage', link: '/browser_extension/index' },
        { text: 'Update Log', link: '/browser_extension/update_log' },

      ]
    },



    {
      text: 'Advanced',
      collapsed: false,
      items: [
        { text: 'Configuration File', link: '/advanced/config' },
        { text: 'Using MySQL/Redis', link: '/advanced/mysql_redis' },
        { text: 'Using Reverse Proxy + External Access', link: '/advanced/use_reverse_proxy' },
        { text: 'Custom CSS and JS', link: '/advanced/custom_js_css' },
        { text: 'Beautification Instructions (beta)', link: '/advanced/landscap' },
        {
          text: 'JS PlugIn',
          collapsed: false,
          items: [
            { text: 'Introduction', link: 'https://github.com/hslr-s/sun-panel-js-plugins' },
            { text: 'TOC', link: 'https://github.com/hslr-s/sun-panel-js-plugins/tree/master/toc' },

          ]
        }
      ]
    },


    {
      text: 'Other',
      collapsed: false,
      items: [
        { text: 'Recommended Wallpaper and Icon Websites', link: '/other/icon_wallpaper_recommend_sites' },
        { text: 'Browser Bookmark Conversion', link: 'https://hslr-s.github.io/sun-panel-tool-page/' },
      ]
    },

    {
      text: 'FAQ',
      collapsed: false,
      link: '/faq/faq'
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
        { text: 'API Description', link: '/openapi/v1/apis' },
        { text: 'Error Code Description', link: '/openapi/v1/error_code' },
      ]
    },
  ]
}