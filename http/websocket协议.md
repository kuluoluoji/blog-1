<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [为什么需要 WebSocket？](#%E4%B8%BA%E4%BB%80%E4%B9%88%E9%9C%80%E8%A6%81-websocket)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

### 为什么需要 WebSocket？

HTTP 协议有一个缺陷：通信只能由客户端发起。

websocket协议特点:

- 建立在 TCP 协议之上，服务器端的实现比较容易。

- 与 HTTP 协议有着良好的兼容性。默认端口也是80和443，并且握手阶段采用 HTTP 协议，因此握手时不容易屏蔽，能通过各种 HTTP 代理服务器。
- 数据格式比较轻量，性能开销小，通信高效。
- 可以发送文本，也可以发送二进制数据。
- 没有同源限制，客户端可以与任意服务器通信。
- 协议标识符是`ws`（如果加密，则为`wss`），服务器网址就是 URL。