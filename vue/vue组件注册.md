<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [Vue组件注册](#vue%E7%BB%84%E4%BB%B6%E6%B3%A8%E5%86%8C)
  - [组件名大小写的问题](#%E7%BB%84%E4%BB%B6%E5%90%8D%E5%A4%A7%E5%B0%8F%E5%86%99%E7%9A%84%E9%97%AE%E9%A2%98)
  - [全局注册](#%E5%85%A8%E5%B1%80%E6%B3%A8%E5%86%8C)
  - [局部注册](#%E5%B1%80%E9%83%A8%E6%B3%A8%E5%86%8C)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

### Vue组件注册

#### 组件名大小写的问题

请注意:定义组件时组件名只能用**驼峰式写法**或者**全小写(可以用-连接)**

#### 全局注册

`Vue.component`可以用来全局注册组件

```js
//main.js
Vue.component('my-component-name', {
  // ... 选项 ...
})

//或者
import User from './views/User'
import About from './views/About'
// 全局注册组件
Vue.component('user', User)
Vue.component('about', About)
```



#### 局部注册

```vue
var componentA = { /* ... */ }


new Vue({
  el: '#app',
  components: {
	'component-a': ComponentA,
	'component-b': ComponentB
  }
})
```

