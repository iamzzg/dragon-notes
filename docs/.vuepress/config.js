const path = require("path");
const { getSidebarArray } = require("../util/index");

module.exports = {
  title: "前端笔记",
  base: "/dragon-notes/",
  description: "前端知识记录积累",
  // 主题配置,默认主题也在此配置
  themeConfig: {
    // 左边logo配置,/以.vuepress/public目录为静态资源目录
    logo: "/assets/img/logo.jpeg",
    // 顶部导航栏的链接
    nav: [
      { text: "首页", link: "/" },
      { text: "github", link: "https://github.com/iamzzg" }
      // 嵌套下拉链接
      // {
      //   text: "语言",
      //   ariaLabel: "语言菜单",
      //   items: [
      //     {
      //       text: "中文",
      //       items: [
      //         { text: "潮汕话", link: "/language/japanese" },
      //         { text: "广东话", link: "/language/japanese" },
      //       ],
      //     },
      //     { text: "日文", link: "/language/japanese" },
      //   ],
      // },
    ],
    // 显示所有页面的标题链接
    // displayAllHeaders: true,
    // 分组侧边栏
    // sidebar: [
    //   {
    //     title: "webpack",
    //     path: "/前端笔记/webpack/",
    //     sidebarDepth: 2,
    //     children: ["/前端笔记/webpack/", "/前端笔记/cmd/"]
    //   }
    // ]
    sidebar: getSidebarArray(path.resolve(__dirname, "../前端笔记"))
  }
};
