<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [路由实现的核心原理](#%E8%B7%AF%E7%94%B1%E5%AE%9E%E7%8E%B0%E7%9A%84%E6%A0%B8%E5%BF%83%E5%8E%9F%E7%90%86)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

- SPA(单页应用程序)中,为什么不能使用a标签?

  因为单页应用只有一个主的index.html页面,所以a标签是不起作用的,必须使用vue-router进行管理

[Vue-router实现原理](https://juejin.im/post/5bc6eb875188255c9c755df2)

[单页路由解析与实现](https://github.com/chenqf/frontEndBlog/issues/11)

### 路由实现的核心原理

- hash的实现原理

```html
<a href="#/home">首页</a>
<a href="#/about">关于</a>
<div id="html"></div>

<script>
    window.addEventListener('load',()=>{
        html.innerHTML = location.hash.slice(1);
    });
    window.addEventListener('hashchange',()=>{
        html.innerHTML = location.hash.slice(1)
    })
</script>
```

- history api的实现原理

```html
<a onclick="go(/home)">首页</a>
<a onclick="go(/about)">关于</a>
<div id="html"></div>

<script >
    function go(pathname) {
        history.pushState({},null,pathname)
        html.innerHTML = pathname;
    }
    window.addEventListener('popstate',()=>{
        go(location.pathname);
    })
</script>
```

需要注意的是: history模式在使用本地文件即file:///模式运行是不可用的,需要使用ip模式访问页面