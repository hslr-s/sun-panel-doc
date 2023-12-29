// .vitepress/theme/index.ts
import DefaultTheme from "vitepress/theme"
import googleAnalytics from 'vitepress-plugin-google-analytics'

export default {
  extends: DefaultTheme,
  enhanceApp({app}) {
    googleAnalytics({
      id: 'G-SD85FK6KMM', //跟踪ID，在analytics.google.com注册即可
    })
  },
}