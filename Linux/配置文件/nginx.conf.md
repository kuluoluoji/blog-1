## Nginx 配置详解

Nginx配置详解：https://www.runoob.com/w3cnote/nginx-setup-intro.html

Nginx全配置：https://www.nginx.com/resources/wiki/start/topics/examples/full/

nginx配置：https://zhuanlan.zhihu.com/p/31202053

```nginx
user       www www;  ## Default: nobody
worker_processes  5;  ## Default: 1 允许生成的进程数，默认为1
error_log  logs/error.log; # 错误日志 <FILE>    <LEVEL>：[debug|info|notice|warn|error|crit|alert|emerg]，级别越高记录的信息越少。
pid        logs/nginx.pid; # 指定nginx进程运行文件存放地址
worker_rlimit_nofile 8192;

events {
  worker_connections  4096;  ## Default: 1024
}

http {
  # http全局设置
  include    conf/mime.types;
  include    /etc/nginx/proxy.conf;
  include    /etc/nginx/fastcgi.conf;
  index    index.html index.htm index.php;

  default_type application/octet-stream;
  log_format   main '$remote_addr - $remote_user [$time_local]  $status '
    '"$request" $body_bytes_sent "$http_referer" '
    '"$http_user_agent" "$http_x_forwarded_for"';
  access_log   logs/access.log  main;
  sendfile     on;
  tcp_nopush   on;
  server_names_hash_bucket_size 128; # this seems to be required for some vhosts

  server { # php/fastcgi
    listen       80;
    server_name  domain1.com www.domain1.com;
    access_log   logs/domain1.access.log  main;
    root         html; # 根目录，如果location没有指定，就往外层的server和http寻找

    location ~ \.php$ {
      fastcgi_pass   127.0.0.1:1025;
    }
  }

  server { # simple reverse-proxy
    listen       80;
    server_name  domain2.com www.domain2.com;
    access_log   logs/domain2.access.log  main;

    # serve static files
    location ~ ^/(images|javascript|js|css|flash|media|static)/  {
      root    /var/www/virtual/big.server.com/htdocs;
      expires 30d;
    }

    # pass requests for dynamic content to rails/turbogears/zope, et al
    location / {
      proxy_pass      http://127.0.0.1:8080;
    }
  }

  upstream big_server_com {
    server 127.0.0.3:8000 weight=5;
    server 127.0.0.3:8001 weight=5;
    server 192.168.0.1:8000;
    server 192.168.0.1:8001;
  }

  server { # simple load balancing
    listen          80;
    server_name     big.server.com;
    access_log      logs/big.server.access.log main;

    location / {
      proxy_pass      http://big_server_com;
    }
  }
}
```

- 1、**全局块**：配置影响nginx全局的指令。一般有运行nginx服务器的用户组，nginx进程pid存放路径，日志存放路径，配置文件引入，允许生成worker process数等。
- 2、**events块**：配置影响nginx服务器或与用户的网络连接。有每个进程的最大连接数，选取哪种事件驱动模型处理连接请求，是否允许同时接受多个网路连接，开启多个网络连接序列化等。
- 3、**http块**：可以嵌套多个server，配置代理，缓存，日志定义等绝大多数功能和第三方模块的配置。如文件引入，mime-type定义，日志自定义，是否使用sendfile传输文件，连接超时时间，单连接请求数等。
- 4、**server块**：配置虚拟主机的相关参数，一个http中可以有多个server。
- 5、**location块**：配置请求的路由，以及各种页面的处理情况。

#### server块

```nginx
server {

    listen       80; #监听端口
    server_name  t-industrygraph.aigauss.com; #监听地址

    location / {
        #root path #根目录
        root   /usr/share/nginx/html;
        index  index.html index.htm;
        # try_files file ... uri
        # try_files的作用: https://www.hi-linux.com/posts/53878.html
        # $uri/ 是为了访问一个目录路径时，同时去匹配目录下的索引页，即 访问127.0.0.1/images/ 会去访问  127.0.0.1/images/index.html 
        # $url === $document_root 此处是/usr/share/nginx/html 目录
        try_files $uri $uri/ /index.html;
    }

    #
    error_page   500 502 503 504  /50x.html;
    location = /50x.html {
        root   html;
    }

}
```





#### error_log配置

https://blog.csdn.net/czlun/article/details/73251714