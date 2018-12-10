# vue 多页面配置

通过webapck4 搭建 vue 多页面工程 参考： https://juejin.im/post/5b9b4f046fb9a05d37618115

## 目录

project
  |- bulid                   <!-- 这个目录是自动生成的-->
       |- public
       |- css
       |- js
       |- page1.html             <!-- 插件生成的html文件-->
       |- page2.html             <!-- 插件生成的html文件-->
       ...
  |- public/                 <!-- 存放字体、图片、网页模板等静态资源-->
  |- src                     <!-- 源码文件夹-->
       |- components/
       |- css/
       |- js/
       |- page1.js               <!-- 每个页面唯一的VUE实例，需绑定到#app-->
       |- page2.js               <!-- 每个页面唯一的VUE实例，需绑定到#app-->
       ...
  |- package.json
  |- package-lock.json
  |- README.md

