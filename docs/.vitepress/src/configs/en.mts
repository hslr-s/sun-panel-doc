import type { DefaultTheme } from "vitepress";

export function getEnglishThemeConfig(): DefaultTheme.Config {
  return {
    nav: [
      { text: 'Home', link: '/en/' },
      { text: 'Release Notes', link: '/update/update_log'},
    ],
    
    sidebar: {
      '/': [
        {
          text: 'Introduction',
          items: [
            { text: 'Project Introduction', link: '/en/introduce/project'},
            { text: 'Demo Site', link: '/en/introduce/demo_site'},
            { text: 'Contact the Author & Community', link: '/en/introduce/author_groups'},
            { text: 'Donate🧧', link: '/en/introduce/donate'},
          ]
        },

        {
          text: 'Deployment',
          items: [
            { text: 'Quick Deployment', link: '/en/deploy/quick_deploy'},
            { text: 'Compile and Run', link: '/en/deploy/compile'},
            { text: 'Reset Password', link: '/en/deploy/reset_password'},
          ]
        },

        {
          text: 'Advanced',
          items: [
            { text: 'Configuration File', link: '/en/advanced/config'},
            { text: 'Using MySQL/Redis', link: '/en/advanced/mysql_redis'},
            { text: 'Using Reverse Proxy + External Access', link: '/en/advanced/use_reverse_proxy'},
          ]
        },

        {
          text: 'Updates',
          items: [
            { text: 'Release Notes', link: '/en/update/update_log'},
            { text: 'Beta Update Tutorial', link: '/en/update/update_beta'},
          ]
        },

        {
          text: 'Other',
          items: [
            { text: 'Recommended Wallpaper and Icon Websites', link: '/en/other/icon_wallpaper_recommend_sites'},
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
