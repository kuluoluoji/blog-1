---
title: Linux复制多个文件的解决办法
tags:
- Linux
description: cp命令复制多个文件
---

### [复制———cp命令](https://wangchujiang.com/linux-command/c/cp.html)

将目录`/usr/men`下的所有文件及其子目录复制到目录`/usr/zh`中

```shell
cp -r /usr/men /usr/zh
cp -r source target
```

cp复制多个文件,使用{filename1,filename2}包起来

```bash
cp -avf ./DoNotStarveTogether/MyDediServer/{Caves,Master}
```

### [linux下cp目录时排除一个或者多个目录的实现方法](https://www.cnblogs.com/hubavyn/p/5452039.html)

rsync和cp的区别:https://www.crifan.com/linux_command_rsync_vs_cp/

[rsync递归复制文件夹，不包括某些文件夹](https://www.it-swarm.dev/zh/bash/%E9%80%92%E5%BD%92%E5%A4%8D%E5%88%B6%E6%96%87%E4%BB%B6%E5%A4%B9%EF%BC%8C%E4%B8%8D%E5%8C%85%E6%8B%AC%E6%9F%90%E4%BA%9B%E6%96%87%E4%BB%B6%E5%A4%B9/968416316/)

[cp命令用于排除某些文件被复制](https://www.it-swarm.dev/zh/command-line/cp命令用于排除某些文件被复制/961610596/)

https://www.codenong.com/4585929/

