<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [vue组件通信](#vue%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1)
    - [props传值(父传子)](#props%E4%BC%A0%E5%80%BC%E7%88%B6%E4%BC%A0%E5%AD%90)
    - [$emit(子传父)](#emit%E5%AD%90%E4%BC%A0%E7%88%B6)
    - [事件总线EventBus(非父子)](#%E4%BA%8B%E4%BB%B6%E6%80%BB%E7%BA%BFeventbus%E9%9D%9E%E7%88%B6%E5%AD%90)
  - [Vuex](#vuex)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## vue组件通信

#### props传值(父传子)

#### $emit(子传父)

vm.$emit( event, arg ) //触发当前实例上的事件

vm.$on( event, fn );//监听event事件后运行 fn； 

```vue
//从About.vue向App.vue传值
//App.vue
//html
<about @countChange="updateCount"></about>
<p>{{ mainCount }}</p>

//js
import About from "./views/About"
export default {
  name: "App",
  data() {
    return {
      // mainCount用来接收子组件传过来的参数count
      mainCount: 0
    }
  },
  methods: {
    updateCount(count) {
      this.mainCount = count
      console.log(count)
    }
  },
}
```

```vue
//About.vue
//html
<div class="about">
  <button @click="changeCount">Click {{ count }}</button>
</div>
//js
export default {
  data() {
    return {
      count: 0
    }
  },
  methods: {
    changeCount() {
      this.count++
      this.$emit("countChange", this.count)
    }
  }
}
```



#### 事件总线EventBus(非父子)

EventBus其实就是一个空的Vue实例

```js
//event-bus.js
import Vue from 'vue'
const EventBus = new Vue()
export default EventBus
```

通过bus.$emit触发bus的事件

```vue
//About.vue向UserProfile.vue传递
//About.vue
//html
<div class="about">
  <h1>This is an about page</h1>
  非父子:<button @click="sendMsg">send msg</button>
</div>

//js
import EventBus from "../event-bus"
export default {
  data() {
    return {
      count: 0,
      msg: "Hello"
    }
  },
  methods: {
    changeCount() {
      this.count++
      this.$emit("countChange", this.count)
    },
    sendMsg() {
      EventBus.$emit("msgSend", this.msg)
    }
  }
}
```

```vue
//UserProfile.vue
//html
<div class="user-profile">
  <h3>用户中心UserProfile</h3>
  我是兄弟组件: <span>{{ myMsg }}</span>
</div>

//js
import EventBus from "../event-bus"
export default {
  data() {
    return {
      myMsg: "Hi"
    }
  },
  mounted() {
    EventBus.$on("msgSend", this.sendMsg)
  },
  methods: {
    sendMsg(msg) {
      this.myMsg = msg
      console.log(msg)
    }
  },
  // 销毁eventbus
  beforeDestroy() {
    EventBus.$off("msgSend", () => console.log("eventbus已被销毁"))
  }
}
```

```vue
//App.vue
//html
<about></about>
我是兄弟组件:<userprofile></userprofile>
```

[eventbus存在问题](https://juejin.im/post/5d358280e51d4556bc06704d#heading-5),所以需要在使用完后手动销毁它,在beforDestory和destoryed中使用$off

`vm.__patch__(vm._vnode, null)`用来触发所有的destory钩子函数。

### $refs

通过this.$refs.[componentName]来访问已注册的组件

```vue
// Props传值
<template>
  <div class="father">
    <component-a :my-msg="msg" ref="myComponent"></component-a>
    <button @click="bindClick">点击</button>
  </div>
</template>

<script>
import componentA from "@/components/componentA"
export default {
  components: {
    componentA: componentA
  },
  data() {
    return {
      msg: "12345"
    }
  },
  methods: {
    bindClick(props) {
      console.log(props)
      console.log(this.$refs.myComponent)
    }
  }
}
</script>
```

![image-20200802131621838](https://minimax-1256590847.cos.ap-shanghai.myqcloud.com/img/image-20200802131621838.png)

通过官方文档可以看到vm.$refs是一个对象,持有注册过 [`ref` attribute](https://cn.vuejs.org/v2/api/#ref) 的所有 DOM 元素和组件实例。

所以只要给组件注册过ref属性,就可以通过vm.$refs来访问到该组件。

### Vuex

**store的几个属性**

state：存放公共数据的地方
getter：获取根据业务场景处理返回的数据
mutations：唯一修改state的方法，修改过程是同步的
action：异步处理，通过分发操作触发mutation
module：将store模块分割，减少代码臃肿
