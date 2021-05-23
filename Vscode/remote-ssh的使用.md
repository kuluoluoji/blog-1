---
title: remote-ssh的使用过程
tags:
- vscode
- linux
---

## Linux使用ssh密钥登录

首先在vscode下载remote-ssh相关插件

### 参考链接:

[VSCode 配置 Remote-SSH 远程开发](https://xirikm.net/2019/619-1)

<!-- more -->

### 在服务器上安装公钥

键入以下命令，在服务器上安装公钥：

```bash
cd .ssh
cat id_rsa.pub >> authorized_keys
```



### 配置SSH密钥登陆

用户目录下的 `.ssh` 文件夹内的 id_rsa 和 id_rsa.pub 两个文件,分别对应为私钥和公钥。将 id_rsa.pub 文件中的内容复制到你远程主机用户目录下 .ssh 文件夹内名为 authorized_keys 的文件中即可。

或者将id_rsa.pub复制到.ssh目录下,然后执行

```bash
cat id_rsa.pub >> authorized_keys
```



### 遇到的问题

- 用`ssh-keygen`生成密钥的时候,如果本地已经存在id_rsa,id_rsa.pub 文件,可以直接使用.

- 如果服务器不支持密钥登陆,则需要开启.参考链接:[设置SSH通过密钥登陆](https://hyjk2000.github.io/2012/03/16/how-to-set-up-ssh-keys/)

  ```bash
  vim /etc/ssh/sshd_config
  #修改如下内容
  RSAAuthentication yes
  PubkeyAuthentication yes
  ```

- 完成以上操作后,使用root用户可以正常登陆,但是用普通用户登陆仍然要输入密码

  **这里的原因是.ssh目录与authorized_keys文件的权限不能太大,像766这种肯定是无法登陆的.**

  **于是我对照root用户下的权限,改成了700,测试发现可以登陆了**
  
  注意: .ssh目录权限改为700,authorized_keys 权限改为600
  
  ```sh
  chmod 700 ~/.ssh
  chmod 600 ~/.ssh/authorized_keys
  ```
  
  
  
  

### /etc/ssh/sshd_config配置

```
PasswordAuthentication no	#禁用密码登陆
```



### authorized_keys文件

远程主机将用户的公钥，保存在登录后的用户主目录的$HOME/.ssh/authorized_keys文件中。公钥就是一段字符串，只要把它追加在authorized_keys文件的末尾就行了。



## ssh生成密钥

https://docs.microsoft.com/zh-cn/azure/virtual-machines/linux/create-ssh-keys-detailed

```bash
ssh-keygen \
    -m PEM \
    -t rsa \
    -b 4096 \
    -C "azureuser@myserver" \
    -f ~/.ssh/mykeys/myprivatekey \
    -N mypassphrase
```

**命令解释**

`ssh-keygen` = 用于创建密钥的程序

`-m PEM` = 将密钥的格式设为 PEM

`-t rsa` = 要创建的密钥类型，本例中为 RSA 格式

`-b 4096` = 密钥的位数，本例中为 4096

`-C "azureuser@myserver"` = 追加到公钥文件末尾以便于识别的注释。 通常以电子邮件地址用作注释，但也可以使用任何最适合你基础结构的事物。

`-f ~/.ssh/mykeys/myprivatekey` = 私钥文件的文件名（如果选择不使用默认名称）。 追加了 `.pub` 的相应公钥文件在相同目录中生成。 该目录必须存在。

`-N mypassphrase` = 用于访问私钥文件的其他密码。

```sh
$ ssh-keygen -t rsa -C "dongcheng96@foxmail.com"
Enter file in which to save the key (/Users/cheng/.ssh/id_rsa): /Users/cheng/.ssh/banwa_id_rsa #输入保存路径
```

