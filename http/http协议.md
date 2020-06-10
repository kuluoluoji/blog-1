<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [关于 HTTP 协议](#%E5%85%B3%E4%BA%8E-http-%E5%8D%8F%E8%AE%AE)
  - [HTTP 简介](#http-%E7%AE%80%E4%BB%8B)
  - [HTTP-URL](#http-url)
  - [HTTP 之请求消息 Request](#http-%E4%B9%8B%E8%AF%B7%E6%B1%82%E6%B6%88%E6%81%AF-request)
- [B/S 架构和 C/S 架构](#bs-%E6%9E%B6%E6%9E%84%E5%92%8C-cs-%E6%9E%B6%E6%9E%84)
  - [C/S 架构](#cs-%E6%9E%B6%E6%9E%84)
  - [B/S 架构](#bs-%E6%9E%B6%E6%9E%84)
- [HTTP 请求](#http-%E8%AF%B7%E6%B1%82)
- [在浏览器输入 url 访问网址的过程中发生了什么?-](#%E5%9C%A8%E6%B5%8F%E8%A7%88%E5%99%A8%E8%BE%93%E5%85%A5-url-%E8%AE%BF%E9%97%AE%E7%BD%91%E5%9D%80%E7%9A%84%E8%BF%87%E7%A8%8B%E4%B8%AD%E5%8F%91%E7%94%9F%E4%BA%86%E4%BB%80%E4%B9%88-)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

---
title: http协议的学习
tags:
  - http
description: 什么是http?什么是tcp?从浏览器输入url敲下回车到页面输出的过程中发生了什么?
---

## [关于 HTTP 协议](https://www.cnblogs.com/ranyonsue/p/5984001.html)

### HTTP 简介

HTTP 协议是 Hyper Text Transfer Protocol（超文本传输协议）的缩写,是用于从万维网（WWW:World Wide Web ）服务器传输超文本到本地浏览器的传送协议。

HTTP 是一个基于 TCP/IP 通信协议来传递数据（HTML 文件, 图片文件, 查询结果等）。

![](https://upload-images.jianshu.io/upload_images/2964446-5a35e17f298a48e1.jpg?imageMogr2/auto-orient/strip%7CimageView2/2)

### HTTP-URL

HTTP 使用统一资源标识符（Uniform Resource Identifiers, URI）来传输数据和建立连接。URL 是一种特殊类型的 URI，包含了用于查找某个资源的足够的信息

URL,全称是 UniformResourceLocator, 中文叫统一资源定位符,是互联网上用来标识某一处资源的地址。以下面这个 URL 为例，介绍下普通 URL 的各部分组成：

`http://www.aspxfans.com:8080/news/index.asp?boardID=5&ID=24618&page=1#name`

从上面的 URL 可以看出，一个完整的 URL 包括以下几部分：

1. 协议部分：该 URL 的协议部分为“http：”，这代表网页使用的是 HTTP 协议。在 Internet 中可以使用多种协议，如 HTTP，FTP 等等本例中使用的是 HTTP 协议。在"HTTP"后面的“//”为分隔符.
2. 域名部分：该 URL 的域名部分为“www.aspxfans.com”。一个 URL 中，也可以使用 IP 地址作为域名使用
3. 端口部分：跟在域名后面的是端口，域名和端口之间使用“:”作为分隔符。端口不是一个 URL 必须的部分，如果省略端口部分，将采用默认端口.http 默认端口 80/tcp;https 默认端口 443/tcp 443/udp.参见[常见的默认端口](https://blog.csdn.net/u014421556/article/details/51671353)
4. 虚拟目录部分：从域名后的第一个“/”开始到最后一个“/”为止，是虚拟目录部分。虚拟目录也不是一个 URL 必须的部分。本例中的虚拟目录是“/news/”
5. 文件名部分：从域名后的最后一个“/”开始到“？”为止，是文件名部分，如果没有“?”,则是从域名后的最后一个“/”开始到“#”为止，是文件部分，如果没有“？”和“#”，那么从域名后的最后一个“/”开始到结束，都是文件名部分。本例中的文件名是“index.asp”。文件名部分也不是一个 URL 必须的部分，如果省略该部分，则使用默认的文件名
6. 锚部分：从“#”开始到最后，都是锚部分。本例中的锚部分是“name”。锚部分也不是一个 URL 必须的部分
7. 参数部分：从“？”开始到“#”为止之间的部分为参数部分，又称搜索部分、查询部分。本例中的参数部分为“boardID=5&ID=24618&page=1”。参数可以允许有多个参数，参数与参数之间用“&”作为分隔符。

### HTTP 之请求消息 Request

客户端发送一个 HTTP 请求到服务器的请求消息包括以下格式:

- 请求行(request line)
- 请求头部(header)
- 空行
- 请求数据

## B/S 架构和 C/S 架构

[参考链接](https://blog.csdn.net/tennysonsky/article/details/45062079)

- B/S 客户端/服务器模式
- C/S 浏览器/服务器模式

### C/S 架构

![img](https://img-blog.csdn.net/20150415173118535)

![img](https://img-blog.csdn.net/20150415191106683)

### B/S 架构

![image-20200604192512821](http介绍.assets/image-20200604192512821.png)

## HTTP 请求

**[一次完整的 HTTP 请求过程](https://zhuanlan.zhihu.com/p/38240894)**

<img src="https://pic1.zhimg.com/80/v2-4a9996d1f96058dc50a49caa8ddb5b90_720w.jpg" alt="Http请求全过程" style="zoom:125%;" />

**[访问一个网页的全过程]()**

<img src="https://img-blog.csdn.net/20180929162504523?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaWJvMTIzMDEyMw==/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70" alt="img" style="zoom:125%;" />

- DNS 解析

- 发送 TCP 请求(三次握手)

  - 浏览器会选择一个大于 1024 的本机端口向目标 IP 地址的 80 端口发起 TCP 连接请求。经过标准的 TCP 握手流程，建立 TCP 连接。

- 负载均衡

  - 什么叫负载均衡?

    - 当一台服务器无法支持大量的用户访问时，将用户分摊到两个或多个服务器上的方法叫负载均衡。

    - Nginx

- 浏览器渲染

- 网页静态资源加载(CDN)

  CDN 加速- 内容分发网络.依靠部署在各地的服务器,使用户就近获取所需内容，降低网络拥塞，提高用户访问响应速度。

## 在浏览器输入 url 访问网址的过程中发生了什么?-

> **url 组成**
>
> ![url组成](https://upload-images.jianshu.io/upload_images/301420-e308f1b76b1bfc97.png?imageMogr2/auto-orient/strip|imageView2/2/w/902/format/webp)
>
> 图中中括号是可选项
>
> - protocol 协议，常用的协议是 http
> - hostname 主机地址，可以是域名，也可以是 IP 地址
> - port 端口 http 协议默认端口是：80 端口，如果不写默认就是:80 端口
> - path 路径 网络资源在服务器中的指定路径
> - parameter 参数 如果要向服务器传入参数，在这部分输入
> - query 查询字符串 如果需要从服务器那里查询内容，在这里编辑
> - fragment 片段 网页中可能会分为不同的片段，如果想访问网页后直接到达指定位置，可以在这部分设置

- 用户在浏览器中输入 url 后,浏览器会先对输入的地址进行解析,比如用的协议是`http`还是`https`
- 之后根据域名进行 ip 的寻址
  - 寻址先从 DNS 缓存开始,比如 host
  - host 没有就访问 dns 服务器,一层一层向上,直至访问到根服务器(IPv4 协议跟服务器全球 13 台)(DNS 解析)
  - 寻找到对应的 ip 后服务器再把 ip 地址发送给客户端
- 客户端拿到 ip 地址后向对应 ip 地址的服务器发起请求
  - 与服务器建立 tcp 连接(3 次握手)
    - SSL/TLS 4 次握手交换信息(数字证书,3 个随机数,加密通信协议)
      - Client Hello Server Hello
- 成功建立连接后向服务器(代理服务器,CDN 服务器)发送 HTTP 请求.
- 服务器处理请求并返回数据(Http 报文),
- 浏览器解析并渲染出页面
  - 根据 HTML 解析生成 DOM 树
  - css 解析生成 css 规则树
  - JavaScript 资源下载
  - 结合 dom 树和 css 规则树进行绘制
- 渲染出页面
