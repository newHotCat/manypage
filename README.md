# vue 多页面配置

通过webapck4 搭建 vue 多页面工程 参考： https://juejin.im/post/5b9b4f046fb9a05d37618115

## 目录

├── README.md
├── build                               // webapck 配置
|  ├── webpack.common.js
|  ├── webpack.dev.js
|  └── webpack.prod.js
├── package.json
├── postcss.config.js
├── public                              // 静态文件
|  └── template.html
├── src                                 // 工程
|  ├── components                       // vue 实例使用的组件
|  |  ├── page1
|  |  └── page2
|  └── js                               // 每个js都是一个vue实例
|     ├── page1.js
|     └── page2.js
└── yarn.lock