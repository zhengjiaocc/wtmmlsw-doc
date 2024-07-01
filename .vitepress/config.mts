import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/wtmmlsw-doc/",
  head:[ 
  ["link", { rel: "icon", href: "/wtmmlsw-doc/favicon.ico" }]],
  title: "《问题妹妹恋上我》",
  description: "小说《问题妹妹恋上我》的文档站",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "https://hexo-blog-anzhiyu-zhengjiao.oss-cn-hongkong.aliyuncs.com/img/202407020449859.png",
    nav: [
      { text: '主页', link: '/' },
      { text: '项目地址', link: '/markdown-examples' },
      { text: '关于我们', link: '/markdown-examples' }

    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],
    footer:{
      copyright: "Copyright © 2024-present ZhangHanxiao",
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
     

    ]
  }
  
})
