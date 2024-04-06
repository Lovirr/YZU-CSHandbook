import { defineConfig, type DefaultTheme } from "vitepress";

export default defineConfig({
  lang: "zh-CN",
  title: "YZU-CSHandbook",
  description: "更适合 YZU 计科专业学生的入门手册",
  lastUpdated: true,
  cleanUrls: true,
  head: [
    ['link', { rel: 'apple-touch-icon', sizes: '144x144', href: '/apple-touch-icon-144x144.png' }],
    ['link', { rel: 'icon', type: 'image/png', href: '/favicon-144x144.png' }]
],
  themeConfig: {
    logo: "/favicon-144x144.png",
    outline: {
      level: 'deep',
      label: '目录'
    },
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },
    editLink: {
      pattern: "https://github.com/Lovirr/YZU-CSHandbook/edit/main/docs/:path",
      text: "在 GitHub 上编辑此页",
    },
    footer: {
      message:
        "Released under the MIT License | Copyright © 2023-present Lovir"
    },
    search: {
      provider: "algolia",
      options: {
        appId: "8J64VVRP8K",
        apiKey: "a18e2f4cc5665f6602c5631fd868adfd",
        indexName: "vitepress",
      },
    },

    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'short'
      }
    },

    nav: [
      { text: "主页", link: "/" },
      { text: "文章", link: "/about/quickstart" },
      { text: "课程", link: "/courses/" },
      { text: "鸣谢", link: "/about/team" },
      {
        text: "链接",
        items: [
          {
            text: "个人主页",
            link: "https://i.lovir.cn",
          },
          {
            text: "个人博客",
            link: "https://lovir.cn",
          },
        ],
      },
    ],

    sidebar: {
      "/": { base: "", items: sidebarGuide() },
      "/courses/": { base: "/courses/", items: sidebarCourses() },
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/Lovirr/YZU-CSHandbook" },
    ],
  },
});

function sidebarGuide(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "简介",
      collapsed: false,
      base: "/about/",
      items: [
        { text: "快速上手", link: "quickstart" },
        { text: "关于项目", link: "project" },
        { text: "关于作者", link: "author" },
        { text: "鸣谢", link: "team" },
      ],
    },
    {
      text: "工具",
      collapsed: false,
      base: "/tools/",
      items: [
        {
          text: "电脑选配", link: "computer",
        },
        {
          text: "必备软件",
          items: [
            { text: "编程软件", link: "code-app" },
            { text: "文章写作", link: "write-app" },
            { text: "实用工具", link: "useful-app" },
          ],
          collapsed: false,
        },
        {
          text: "必学技能",
          items: [
            { text: "科学上网", link: "vpn" },
            { text: "包管理器", link: "package-manager" },
            { text: "数据备份", link: "data-backup" },
            { text: "文件整理", link: "file-organization" },
            { text: "版本控制", link: "git" },
            { text: "Markdown", link: "markdown" }
          ],
          collapsed: false,
        },
        {
          text: "其他",
          items: [
            { text: "教育邮箱", link: "edu-email" },
            { text: "学生福利", link: "student-welfare" }
          ],
          collapsed: false,
        },
      ],
    },
    {
      text: "美食图鉴",
      collapsed: false,
      base: "/food/",
      items: [
        { text: "东区-津园", link: "east-canteen" },
        { text: "西区-润园", link: "west-canteen" },
        { text: "周边美食", link: "surrounding-food" },
        { text: "外卖店铺", link: "takeaway" }
      ],
    },
    { text: "课程攻略", base: "/courses/", link: "/" },
  ];
}

function sidebarCourses(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "课程攻略",
      base: "/courses/",
      items: [
        {
          text: "大一",
          items: [
            { text: "军事训练", link: "military-training" },
            { text: "高等数学", link: "higher-mathematics" },
            { text: "军事理论", link: "military-theory" },
            { text: "C 语言", link: "c-language" },
            { text: "线性代数", link: "linear-algebra" },
            { text: "离散数学", link: "discrete-mathematics" },
            { text: "大学英语", link: "college-english" },
            { text: "思想道德修养", link: "ideology-and-morality" },
            { text: "学科导论", link: "subject-instruction" },
            { text: "大学物理", link: "physics" },
            { text: "电路与电子技术", link: "electronic" },
            { text: "面向对象程序设计", link: "c++" },
            { text: "项目综合实践 I", link: "project-practice1" },
            { text: "马克思主义基本原理", link: "principles-of-marxism" },
            { text: "形势与政策", link: "situation-policy" }
          ],
        },
        {
          text: "大二",
          items: [
            { text: "数据结构", link: "data-structure" },
            { text: "汇编语言", link: "assembly" },
            { text: "企业管理", link: "enterprise-management" },
            { text: "中国近代史", link: "modern-history" },
            { text: "工程经济学", link: "engineering-economics" },
            { text: "Verilog 电路设计", link: "verilog" },
            { text: "概率论与数理统计", link: "probability-theory" },
            { text: "专业创新基础", link: "innovation" },
            { text: "项目综合实践 II", link: "project-practice2" },
            { text: "数据库系统原理", link: "database-system" },
            { text: "操作系统原理", link: "operating-system" },
            { text: "计算机组成原理", link: "computer-composition" },
            { text: "算法设计与分析", link: "algorithm" }
          ],
        },
        {
          text: "大三",
          items: [
            { text: "微机原理", link: "microcomputer" },
            { text: "计算机网络", link: "computer-networks" },
            { text: "软件工程", link: "software" },
            { text: "Web 开发技术", link: "web-design" },
            { text: "计算方法", link: "calculation-method" },
            { text: "编译原理", link: "compiling-principle" },
            { text: "云计算", link: "cloud-computing" },
            { text: "嵌入式系统", link: "embedded-system" },
            { text: "数据挖掘", link: "data-mining" },
            { text: "机器学习", link: "machine-learing" },
            { text: "CPU设计", link: "cpu-design" },
            { text: "项目综合实践 III", link: "project-practice3" }
          ],
        },
        {
          text: "其他",
          items: [
            { text: "奖学金", link: "others/scholarship" },
            { text: "转专业", link: "others/change-major" },
            { text: "毕业实习", link: "others/internship" },
            { text: "毕业设计", link: "others/graduation-project" },
            { text: "考研考编", link: "others/postgraduate" }
          ],
        },
      ],
    },
  ];
}
