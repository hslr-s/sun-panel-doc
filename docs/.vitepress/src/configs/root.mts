import type { DefaultTheme } from "vitepress";

export default function getNavs() {

  return [

    { text: "主页", link: "/" },

    {

      text: "关于",

      items: [

        {

          text: "团队",

          link: "/zh/examples/about/team",

          activeMatch: "/about/team",

        },

        {

          text: "常见问题",

          link: "/zh/examples/about/problem",

          activeMatch: "/about/problem",

        },

      ],

      activeMatch: "/zh/examples/about/", // // 当前页面处于匹配路径下时, 对应导航菜单将突出显示

    },

  ]

}