module.exports = {
  title: "Hello VuePress",
  description: "Just Playing around",
  // 主题配置,默认主题也在此配置
  themeConfig: {
    // 左边logo配置,/以.vuepress/public目录为静态资源目录
    logo: "/assets/img/hero.webp",
    // 导航栏的链接
    nav: [
      { text: "首页", link: "/" },
      { text: "引导", link: "/guide/" },
      { text: "外部链接", link: "https://www.baidu.com" },
      {
        text: "语言",
        ariaLabel: "语言菜单",
        items: [
          {
            text: "中文",
            items: [
              { text: "潮汕话", link: "/language/japanese" },
              { text: "广东话", link: "/language/japanese" },
            ],
          },
          { text: "日文", link: "/language/japanese" },
        ],
      },
    ],
  },
};
