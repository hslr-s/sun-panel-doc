// .vitepress/theme/index.ts
import DefaultTheme from "vitepress/theme"
import googleAnalytics from 'vitepress-plugin-google-analytics'
import sunAdvertisingPosition from './components/sun-ad'

// 只需添加以下一行代码，引入时间线样式
import "vitepress-markdown-timeline/dist/theme/index.css";

import mediumZoom from 'medium-zoom';
import { onMounted, watch, nextTick } from 'vue';
import { useRoute } from 'vitepress';
import './index.css';

function pictureZoom() {
  const route = useRoute();
  const initZoom = () => {
    // mediumZoom('[data-zoomable]', { background: 'var(--vp-c-bg)' }); // 默认
    // mediumZoom('.main img', { background: 'var(--vp-c-bg)' }); // 不显式添加{data-zoomable}的情况下为所有图像启用此功能
    // 除a标签以下的所有图像都进行缩放
    mediumZoom(':not(a) > img', { background: 'var(--vp-c-bg)' }); // 不显式添加{data-zoomable}的情况下为所有图像启用此功能
  };
  onMounted(() => {
    initZoom();
  });
  watch(
    () => route.path,
    () => nextTick(() => initZoom())
  );
}

function initAd() {
  const route = useRoute();
  const init = () => {
    // 中文广告：判断路由是否带有/zh_cn
    if (route.path.includes('/zh_cn')) {
      sunAdvertisingPosition({
        className: '.aside-content',
        positionId: 'p1kocz9wewayoi93kr',
        first: true,
        // height: "80px",
      })
    }else{
      sunAdvertisingPosition({
        className: '.aside-content',
        positionId: '0hso9rx6tc6dhkg6i5',
        first: true,
        // height: "80px",
      })
    }
  };
  onMounted(() => {
    init();
  });
  // 会出现每次路由更新的问题
  watch(
    () => route.path,
    () => nextTick(() => init())
  );
}

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    googleAnalytics({
      id: 'G-Y2L8MHCNCV', //跟踪ID，在analytics.google.com注册即可
    })
  },
  setup() {
    pictureZoom()
    initAd()
  },
}