// const nav = require('./nav')
// const sidebar = require('./sidebar')
const fs = require('fs')
const path = require('path')
function resolve() {
  let filePath = Array.from(arguments)
  return path.resolve(__dirname, ...filePath)
}
/**
 * 自动设置侧边栏
 * @param {String} filePath 路径
 * @returns 一个md文件名的数组
 */
function setSidebar(filePath) {
  return fs.readdirSync(resolve(filePath)).filter((val) => /md$/.test(val))
}

module.exports = {
  // base: './',
  title: 'VuePress',
  head: [['link', { rel: 'icon', href: '/logo.png' }]],
  port: 3000,
  themeConfig: {
    activeHeaderLinks: false, // 默认值：true
    nav: [
      {
        text: '前端',
        items: [
          { text: 'HTML', link: '/frontend/html/' },
          { text: 'CSS', link: '/frontend/css/' },
          { text: 'JavaScript', link: '/frontend/js/' },
          { text: 'Vue', link: '/frontend/vue/' },
          { text: 'Webpack', link: '/frontend/Webpack/' },
          { text: 'Npm', link: '/frontend/npm/' },
          { text: 'React', link: '/frontend/React/' },
          { text: 'Git', link: '/frontend/Git/Git常用命令' },
        ],
      },
      { text: 'Node', link: '/frontend/node/' },
      { text: 'linux', link: '/linux/' },
      {
        text: '软件设置',
        items: [
          { text: '软件设置', link: '/software/' },
          { text: 'VSCode', link: '/software/Vscode/' },
          { text: 'MACOS使用技巧', link: '/software/macOS使用/' },
        ],
      },
    ],
    // sidebar: {
    //   '/frontend/js/': ['', '深拷贝浅拷贝', '动态规划'],
    //   '/frontend/vue/': ['', 'vue-router', 'vue生命周期', 'vue组件通信'],
    //   '/frontend/node/': ['', 'express', 'json-server'],
    //   '/linux/': ['', 'ls命令'],
    // },
    /**
     * 对象式
     */
    sidebar: {
      '/frontend/js/': [
        {
          title: 'js',
          children: [
            { title: '动态规划', path: '动态规划' },
            { title: '深拷贝浅拷贝', path: '深拷贝浅拷贝' },
          ],
        },
        {
          title: 'es6',
          children: [
            { title: 'Promise', path: 'es6/Promise/' },
            { title: 'Class语法糖', path: 'es6/Class语法糖/' },
            { title: 'async-await语法糖', path: 'es6/async-await语法糖/' },
          ],
        },
      ],
      '/frontend/vue/': [
        {
          title: 'Vue',
          children: [
            { title: 'Vue-router', path: 'vue-router' },
            { title: 'Vue组件通信', path: 'vue组件通信' },
            'Vue组件注册',
          ],
        },
        // ['/Vue组件注册', 'vue-router', 'vue组件通信'],
        'Vue常见解决方案',
        {
          title: 'Vue组件使用',
          children: ['Vue表单验证Vee-Validate'],
        },
      ],
      '/frontend/Git/': /* [{ title: 'Git常用命令', path: 'Git常用命令' }], */ setSidebar('../frontend/Git/'),
      '/linux/': [
        {
          title: 'Linux',
          children: [
            { title: 'curl命令', path: 'curl命令' },
            { title: 'ls命令', path: 'ls命令' },
          ],
        },
      ],
      '/software/': [
        {
          title: '软件设置',
          children: [{ title: 'zsh终端配置', path: 'zsh终端配置' }],
        },
      ],
    },
    // plugins: {
    // 	"vuepress-plugin-auto-sidebar": {
    // 		nav: true,
    // 		titleMode: 'titlecase',
    // 		collapsable: true, // 设置为true,开启折叠
    // 	}
    // }
    smoothScroll: true,
  },
  plugins: {
    '@vuepress/active-header-links': {
      sidebarLinkSelector: '.sidebar-link',
      headerAnchorSelector: '.header-anchor',
    },
    '@vuepress/back-to-top': true,
  },
}
