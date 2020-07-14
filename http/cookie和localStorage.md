<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [cookie localStorage sessionStorage](#cookie-localstorage-sessionstorage)
  - [cookie](#cookie)
  - [Web Storage API](#web-storage-api)
  - [token](#token)
  - [Cookie, LocalStorage 与 SessionStorage](#cookie-localstorage-%E4%B8%8E-sessionstorage)
    - [localStorage 和 sessionStorage](#localstorage-%E5%92%8C-sessionstorage)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## cookie localStorage sessionStorage

### cookie

[cookie 和 session 的区别](https://juejin.im/post/5aa783b76fb9a028d663d70a#heading-1)

**1.什么是 cookie**

- cookie 是客户端保存用户信息的一种机制,用来记录用户的一些信息,实际上 Cookie 是服务器在**本地机器**上存储的一小段文本,并随着每次请求发送到服务器。

[mdn](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Cookies)关于cookie的解释

> HTTP Cookie（也叫Web Cookie或浏览器Cookie）是服务器发送到用户浏览器并保存在本地的一小块数据,它会在浏览器下次向同一服务器再次发起请求时被携带并发送到服务器上。
>
> 通常，它用于告知服务端两个请求是否来自同一浏览器，如保持用户的登录状态。Cookie使基于[无状态](https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview#HTTP_is_stateless_but_not_sessionless)的HTTP协议记录稳定的状态信息成为了可能。

Cookie主要用于以下三个方面：

- 会话状态管理（如用户登录状态、购物车、游戏分数或其它需要记录的信息）
- 个性化设置（如用户自定义设置、主题等）
- 浏览器行为跟踪（如跟踪分析用户行为等）

Cookie 技术通过请求和响应报文中写入 Cookie 信息来控制客户端的状态。

**2.cookie 和 session 的区别?**

---

### Web Storage API

[Web Storage](https://developer.mozilla.org/zh-CN/docs/Web/API/Web_Storage_API) 包含如下两种机制：

- `sessionStorage` 为每一个给定的源（given origin）维持一个独立的存储区域，该存储区域在页面会话期间可用（即只要浏览器处于打开状态，包括页面重新加载和恢复）。
- `localStorage` 同样的功能，但是在浏览器关闭，然后重新打开后数据仍然存在。

---

### token

什么是 token

### Cookie, LocalStorage 与 SessionStorage

https://jerryzou.com/posts/cookie-and-web-storage/

| 特性           | Cookie                                                                              | localStorage                                                    | sessionStorage                               |
| -------------- | ----------------------------------------------------------------------------------- | --------------------------------------------------------------- | -------------------------------------------- |
| 数据的生命期   | 一般由服务器生成，可设置失效时间。如果在浏览器端生成 Cookie，默认是关闭浏览器后失效 | 除非被清除，否则永久保存                                        | 仅在当前会话下有效，关闭页面或浏览器后被清除 |
| 存放数据大小   | 4K 左右                                                                             | 一般为 5MB                                                      |                                              |
| 与服务器端通信 | 每次都会携带在 HTTP 头中，如果使用 cookie 保存过多数据会带来性能问题                | 仅在客户端（即浏览器）中保存，不参与和服务器的通信              |                                              |
| 易用性         | 需要程序员自己封装，源生的 Cookie 接口不友好                                        | 源生接口可以接受，亦可再次封装来对 Object 和 Array 有更好的支持 |                                              |

#### localStorage 和 sessionStorage

[相关文章](http://caibaojian.com/localstorage-sessionstorage.html)

html5 中的 [web](http://caibaojian.com/w3c/) Storage 包括了两种存储方式：sessionStorage 和 localStorage。 sessionStorage 用于本地存储一个会话（session）中的数据，这些数据只有在同一个会话中的页面才能访问，会话结束后数据也随之销毁。localStorage 用于存储一个域名下的需要永久存在在本地的数据，这些数据可以被一直访问，直到这些数据被删除。因此 sessionStorage 和 localStorage 的主要区别在于他们存储数据的生命周期，sessionStorage 存储的数据的生命周期是一个会话，而 localStorage 存储的数据的生命周期是永久，直到被主动删除，否则数据永远不会过期的。
