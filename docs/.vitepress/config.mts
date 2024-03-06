import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "diysoul",
  description: "diysoul's website",
  base: "/diysoul-note/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      {
        text: "前端",
        items: [{ text: "React", link: "/frontend/react/index" }],
      },
      {
        text: "后端",
        items: [{ text: "Golang", link: "/backend/golang/index" },{ text: "go-zero", link: "/backend/go-zero/index" }],
      },
      {
        text: "数据库",
        items: [{ text: "Mysql", link: "/database/mysql/index" }],
      },
    ],

    sidebar: {
      "/backend/": [
        {
          text: "后端",
          items: [
            { text: "Golang", link: "/backend/golang/index" },
            { text: "go-zero", link: "/backend/go-zero/index" },
          ],
        },
      ],
      "/frontend/": [
        {
          text: "前端",
          //   items: [
          //     { text: "Index", link: "/guide/" },
          //     { text: "One", link: "/guide/one" },
          //     { text: "Two", link: "/guide/two" },
          //   ],
        },
      ],
      "/database/": [
        {
          text: "数据库",
          //   items: [
          //     { text: "Index", link: "/guide/" },
          //     { text: "One", link: "/guide/one" },
          //     { text: "Two", link: "/guide/two" },
          //   ],
        },
      ],
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
