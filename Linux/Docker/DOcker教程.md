## Docker

http://www.ruanyifeng.com/blog/2018/02/docker-tutorial.html

### docker安装

```bash
# 验证是否安装成功
$ docker version
# 或者
$ docker info
```

### 开始

```sh
docker run -d -p 80:80 docker/getting-started
```

- `-d` -以分离模式运行容器（在后台）
- `-p 80:80` -将主机的端口80映射到容器中的端口80
- `docker/getting-started` -要使用的图像

> 您可以组合单个字符标志来缩短完整命令。例如，上面的命令可以写为：
>
> ```sh
> docker run -dp 80:80 docker/getting-started
> ```



### Q：docker镜像和容器有什么区别？

https://zhuanlan.zhihu.com/p/120982681

容器是由镜像实例化而来，这和我们学习的面向对象的概念十分相似，我们可以把镜像看作类，把容器看作类实例化后的对象。

也可以说镜像是文件, 容器是进程。 容器是基于镜像创建的, 即容器中的进程依赖于镜像中的文件, 这里的文件包括进程运行所需要的可执行文件， 依赖软件， 库文件， 配置文件等等...

### Q: docker 镜像alpine/buster/slim 有什么区别

#### 1.大小不同

```sh
docker pull --quiet python：3.8 
docker pull --quiet python：3.8.3 
docker pull --quiet python：3.8.3-slim 
docker pull --quiet python：3.8.3-alpine 
docker镜像
```

![](https://miro.medium.com/max/875/1*_G4THS8_oj2ogauQ_kzPnA.png)