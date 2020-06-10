---
title: http协议的学习
tags:
- http
description: 什么是http?什么是tcp?从浏览器输入url敲下回车到页面输出的过程中发生了什么?
---



## 在浏览器输入url访问网址的过程中发生了什么?- 

> **url组成**
>
> ![url组成](https://upload-images.jianshu.io/upload_images/301420-e308f1b76b1bfc97.png?imageMogr2/auto-orient/strip|imageView2/2/w/902/format/webp)
>
> 图中中括号是可选项
>
> - protocol 协议，常用的协议是http
> - hostname 主机地址，可以是域名，也可以是IP地址
> - port 端口 http协议默认端口是：80端口，如果不写默认就是:80端口
> - path 路径 网络资源在服务器中的指定路径
> - parameter 参数 如果要向服务器传入参数，在这部分输入
> - query 查询字符串 如果需要从服务器那里查询内容，在这里编辑
> - fragment 片段 网页中可能会分为不同的片段，如果想访问网页后直接到达指定位置，可以在这部分设置

- 用户在浏览器中输入url后,浏览器会先对输入的地址进行解析,比如用的协议是`http`还是`https`
- 之后根据域名进行ip的寻址
  - 寻址先从DNS缓存开始,比如host
  - host没有就访问dns服务器,一层一层向上,直至访问到根服务器(IPv4协议跟服务器全球13台)(DNS解析)
  - 寻找到对应的ip后服务器再把ip地址发送给客户端
- 客户端拿到ip地址后向对应ip地址的服务器发起请求
  - 与服务器建立tcp连接(3次握手)
    - SSL/TLS 4次握手交换信息(数字证书,3个随机数,加密通信协议)
      - Client Hello	Server Hello
- 成功建立连接后向服务器(代理服务器,CDN服务器)发送HTTP请求.
- 服务器处理请求并返回数据(Http报文),
- 浏览器解析并渲染出页面
  - 根据HTML解析生成DOM树
  - css解析生成css规则树
  - JavaScript资源下载
  - 结合dom树和css规则树进行绘制
- 渲染出页面