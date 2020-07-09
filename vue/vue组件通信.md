## vue组件通信

- props传值(父传子)

- $emit(子传父)

  vm.$emit( event, arg ) //触发当前实例上的事件

  vm.$on( event, fn );//监听event事件后运行 fn； 

- 事件总线EventBus(非父子)

  EventBus其实就是一个空的Vue实例

  ```js
  const bus = new Vue()
  ```

  通过bus.$emit触发bus的事件

### Vuex

**store的几个属性**

state：存放公共数据的地方
getter：获取根据业务场景处理返回的数据
mutations：唯一修改state的方法，修改过程是同步的
action：异步处理，通过分发操作触发mutation
module：将store模块分割，减少代码臃肿