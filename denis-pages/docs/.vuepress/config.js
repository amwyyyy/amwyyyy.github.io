// 资源导航
const nav = [
  {
    text: '游记',
    link: '/travel/'
  },
  {
    text: '笔记',
    link: '/note/'
  },
  {
    text: '收藏',
    link: '/collection/'
  },
  {
    text: '技术',
    link: '/develop/'
  },
  {
    text: '相册',
    link: '/photo/'
  }
]

// 侧边栏
const sidebar = {
  '/travel/': [
    {
      title: '游记',
      collapsable: false,
      children: [
        'yjhld'
      ]
    }
  ],
  '/note/': [
    {
      title: '笔记',
      collapsable: false,
      children: [
        'docker', 'git', 'elasticsearch'
      ]
    }
  ]
}

var config = {
  base: '/',
  title: 'denis的网站',
  description: '种一棵树最好的时间是十年前，其次是现在',
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    repo: 'https://github.com/amwyyyy/amwyyyy.github.io',
    repoLabel: 'github',
    sidebarDepth: 0,
    searchMaxSuggestions: 10,
    lastUpdated: 'Last Updated',
    nav,
    sidebar
  }
}

module.exports = config
