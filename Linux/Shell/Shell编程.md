---
title: Shell编程
---

### [Shell脚本中循环语句for,while,until用法](https://blog.51cto.com/kling/1252952)

http://c.biancheng.net/cpp/view/7008.html

#### 生成随机数

https://www.jianshu.com/p/e43adcebd73a

#### Date

https://www.runoob.com/linux/linux-comm-date.html

```bash
DATE=`date '+%m%d'`
zip -qr /www/wwwroot/cheng/dst/dstbackup$DATE.zip /home/cheng/.klei/DoNotStarveTo
gether/dstbackup
```

多个命令一起执行 ; && ||

- 每个命令之间用`;`隔开

  各命令的执行结果，不会影响其它命令的执行。换句话说，各个命令都会执行，
  但不保证每个命令都执行成功。

- 每个命令之间用`&&`隔开

  若前面的命令执行成功，才会去执行后面的命令。这样可以保证所有的命令执行完毕后，执行过程都是成功的。

- 每个命令之间用`||`隔开

  ||是或的意思，只有前面的命令执行失败后才去执行下一条命令，直到执行成功
  一条命令为止。

### Shell传递参数

在执行shell脚本时，向脚本传递参数，脚本内获取参数的格式为: **$n**。**n** 代表一个数字，1 为执行脚本的第一个参数，2 为执行脚本的第二个参数，以此类推……

```bash
#!/bin/bash
echo "执行的文件名：$0";
echo "第一个参数为：$1";
echo "第二个参数为：$2";
echo "第三个参数为：$3";
```

运行: ./test.sh  1 2 3



### 条件判断

shell中的 `()`、`[]`、`[[]]`: https://www.runoob.com/w3cnote/linux-shell-brackets-features.html

```bash
#!/bin/bash
a=30
b=20
if [[ $a>$b ]]
then echo '1'
else echo '2'
fi
```

