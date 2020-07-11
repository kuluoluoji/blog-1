## cookie和token认证

### cookie

[cookie和session的区别](https://juejin.im/post/5aa783b76fb9a028d663d70a#heading-1)

**1.什么是cookie**

- cookie是客户端保存用户信息的一种机制,用来记录用户的一些信息,实际上Cookie是服务器在**本地机器**上存储的一小段文本,并随着每次请求发送到服务器。

Cookie技术通过请求和响应报文中写入Cookie信息来控制客户端的状态。

**2.cookie和session的区别?**



### token

什么是token

### Cookie, LocalStorage 与 SessionStorage

https://jerryzou.com/posts/cookie-and-web-storage/

| 特性           | Cookie                                                       | localStorage                                                | sessionStorage                               |
| -------------- | ------------------------------------------------------------ | ----------------------------------------------------------- | -------------------------------------------- |
| 数据的生命期   | 一般由服务器生成，可设置失效时间。如果在浏览器端生成Cookie，默认是关闭浏览器后失效 | 除非被清除，否则永久保存                                    | 仅在当前会话下有效，关闭页面或浏览器后被清除 |
| 存放数据大小   | 4K左右                                                       | 一般为5MB                                                   |                                              |
| 与服务器端通信 | 每次都会携带在HTTP头中，如果使用cookie保存过多数据会带来性能问题 | 仅在客户端（即浏览器）中保存，不参与和服务器的通信          |                                              |
| 易用性         | 需要程序员自己封装，源生的Cookie接口不友好                   | 源生接口可以接受，亦可再次封装来对Object和Array有更好的支持 |                                              |

#### localStorage和sessionStorage

[相关文章](http://caibaojian.com/localstorage-sessionstorage.html)

html5 中的 [web](http://caibaojian.com/w3c/) Storage 包括了两种存储方式：sessionStorage 和 localStorage。 sessionStorage 用于本地存储一个会话（session）中的数据，这些数据只有在同一个会话中的页面才能访问，会话结束后数据也随之销毁。localStorage 用于存储一个域名下的需要永久存在在本地的数据，这些数据可以被一直访问，直到这些数据被删除。因此sessionStorage 和 localStorage 的主要区别在于他们存储数据的生命周期，sessionStorage 存储的数据的生命周期是一个会话，而 localStorage 存储的数据的生命周期是永久，直到被主动删除，否则数据永远不会过期的。