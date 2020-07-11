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

### 完整的导航解析流程

1. 导航被触发。
2. 在失活的组件里调用 `beforeRouteLeave` 守卫。
3. 调用全局的 `beforeEach` 守卫。
4. 在重用的组件里调用 `beforeRouteUpdate` 守卫 (2.2+)。
5. 在路由配置里调用 `beforeEnter`。
6. 解析异步路由组件。
7. 在被激活的组件里调用 `beforeRouteEnter`。
8. 调用全局的 `beforeResolve` 守卫 (2.5+)。
9. 导航被确认。
10. 调用全局的 `afterEach` 钩子。
11. 触发 DOM 更新。
12. 用创建好的实例调用 `beforeRouteEnter` 守卫中传给 `next` 的回调函数。

### 路由懒加载

动态加载组件

```js
const Foo = () => import(/* webpackChunkName: "group-foo" */ './Foo.vue')
const router = new VueRouter({
  routes: [
    { path: '/foo', component: Foo }
  ]
})
```

其中`/* webpackChunkName: "group-foo" */`是webpack中的

相关内容可以看这篇[文章](https://github.com/mrdulin/blog/issues/43)