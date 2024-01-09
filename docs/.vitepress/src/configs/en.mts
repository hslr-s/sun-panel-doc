import type { DefaultTheme } from "vitepress";

export function getEnglishThemeConfig(): DefaultTheme.Config {
  return {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Release Notes', link: 'https://github.com/hslr-s/sun-panel/releases'},
    ],
    
    sidebar: {
      '/': [
        {
          text: 'Introduction',
          collapsed: false,
          items: [
            { text: 'Project Introduction', link: '/introduce/project'},
            { text: 'Demo Site', link: '/introduce/demo_site'},
            { text: 'Contact the Author & Community', link: '/introduce/author_groups'},
            { text: 'Donate🧧', link: '/introduce/donate'},
          ]
        },

        {
          text: 'Usage',
          collapsed: false,
          items: [
            { text: 'Quick Deployment', link: '/usage/quick_deploy'},
            { text: 'Compile and Run', link: '/usage/compile'},
            { text: 'Reset Password', link: '/usage/reset_password'},
            { text: 'Custom footer', link: '/usage/custom_footer'},
          ]
        },

        {
          text: 'Advanced',
          collapsed: false,
          items: [
            { text: 'Configuration File', link: '/advanced/config'},
            { text: 'Using MySQL/Redis', link: '/advanced/mysql_redis'},
            { text: 'Using Reverse Proxy + External Access', link: '/advanced/use_reverse_proxy'},
          ]
        },

        {
          text: 'Updates',
          collapsed: false,
          items: [
            { text: 'Release Notes', link: '/update/update_log'},
            { text: 'Beta Update Tutorial', link: '/update/update_beta'},
          ]
        },

        {
          text: 'Other',
          collapsed: false,
          items: [
            { text: 'Recommended Wallpaper and Icon Websites', link: '/other/icon_wallpaper_recommend_sites'},
            { text: 'Browser Bookmark Conversion', link: 'https://hslr-s.github.io/sun-panel-tool-page/'},
          ]
        },
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/hslr-s/sun-panel' }
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
