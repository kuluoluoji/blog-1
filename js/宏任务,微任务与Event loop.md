## 宏任务、微任务、同步任务、异步任务与Event Loop

参考链接:

- [JS事件循环机制（event loop）](https://juejin.im/post/5b498d245188251b193d4059#heading-2)

### js事件循环

**Event Queue:**

**事件队列**是一个存储库，在此存储来自应用程序的事件，然后再由接收程序或系统对其进行处理。
事件队列通常在企业消息传递系统的上下文中使用。

<img src="https://user-gold-cdn.xitu.io/2018/7/14/164974fb89da87c5?imageView2/0/w/1280/h/960/format/webp/ignore-error/1" alt="cmd-markdown-logo" style="zoom:80%;" />

- 同步和异步任务分别进入不同的执行"场所"，同步的进入主线程，异步的进入Event Table并注册函数
- 当指定的事情完成时，Event Table会将这个函数移入Event Queue。
- 主线程内的任务执行完毕为空，会去Event Queue读取对应的函数，进入主线程执行。
- 上述过程会不断重复，也就是常说的Event Loop(事件循环)。



### 微任务(Microtasks)、宏任务(task)？

宏任务和微任务都是异步任务,它们都属于一个队列，主要区别在于他们的执行顺序，Event Loop的走向和取值。

<img src="https://user-gold-cdn.xitu.io/2018/7/14/164974fa4b42e4af?imageView2/0/w/1280/h/960/format/webp/ignore-error/1" alt="cmd-markdown-logo" style="zoom:80%;" />