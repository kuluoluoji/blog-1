## Curl

利用URL规则在命令行下工作的文件传输工具

**文件下载**

curl命令可以用来执行下载、发送各种HTTP请求，指定HTTP头部等操作。如果系统没有curl可以使用`yum install curl`安装，也可以下载安装。curl是将下载文件输出到stdout，将进度信息输出到stderr，不显示进度信息使用`--silent`选项。

即curl url 是将url中的内容输出到终端

如果需要下载为文件需要使用 -O

```sh
-o/--output	 #把输出写到该文件中  使用本地自定义名称
-O/--remote-name #把输出写到该文件中，保留远程文件的文件名  使用远程文件的名称
-s/--silent	#静默模式。不输出任何东西
-S/--show-error	#显示错误
```





```sh
curl http://example.com/text.iso --silent -O
```

