---
title: Shell脚本常见问题
tags:
- Linux
---

- 等待上一任务执行完再执行下一任务

[Wait命令](https://wangchujiang.com/linux-command/c/wait.html)

https://www.jianshu.com/p/a31461ee5260



Linux中的>,>>和<的区别？

\>> 是追加内容

\> 是覆盖原有内容



### 输入重定向和输出重定向

https://www.runoob.com/linux/linux-shell-io-redirections.html

输出重定向就是将原本的输出（比如从终端输出）变到从其他地方输出（比如输出到文件）

输入重定向则相反，改为从其他地方（比如文件）获取输入，而不是从终端获取输入。

`>`和`>>`是输出重定向

`<`是输入重定向

比如

```bash
$ wc -l << EOF
    欢迎来到
    菜鸟教程
    www.runoob.com
EOF
3          # 输出结果为 3 行
$
```

wc命令

```bash
wc test.txt
# 输出结果
7     8     70     test.txt
# 行数 单词数 字节数 文件名
```

