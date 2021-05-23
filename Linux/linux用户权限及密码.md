---
title: linux新建用户
tags:
- linux
---

> 起因:
>
> 想远程通过remote ssh远程连接服务器,写代码,保存在服务器上运行,而不用本地运行.而通过root用户登陆不太好,所以需要创建一个用户,并设置好权限.

创建用户前,我们需要了解一下[linux的用户和用户组以及权限的概念](https://blog.csdn.net/yue7603835/article/details/73699258).

## [新建用户](https://blog.csdn.net/beitiandijun/article/details/41678251)

### adduser命令

会自动为创建的用户指定主目录、系统shell版本，会在创建时输入用户密码。

```bash
adduser apple
```

这样在创建用户名时，就创建了用户的主目录(/home/apple)以及密码。

默认情况下：

adduser在创建用户时会主动调用  /etc/adduser.conf；

在创建用户主目录时默认在/home下，而且创建为 /home/用户名

### useradd命令

需要使用参数选项指定上述基本设置，如果不使用任何参数，则创建的用户无密码、无主目录、没有指定shell版本。

```bash
useradd tt
```

```bash
useradd
Usage: useradd [options] LOGIN
       useradd -D
       useradd -D [options]

Options:
  -b, --base-dir BASE_DIR       base directory for the home directory of the
                                new account
                                #为新用户指定home目录
  -c, --comment COMMENT         GECOS field of the new account
  #加上备注文字。备注文字会保存在passwd的备注栏位中；
  -d, --home-dir HOME_DIR       home directory of the new account
  #指定用户登入时的启始目录；
  -D, --defaults                print or change default useradd configuration
  -e, --expiredate EXPIRE_DATE  expiration date of the new account
  -f, --inactive INACTIVE       password inactivity period of the new account
  -g, --gid GROUP               name or ID of the primary group of the new
                                account
  -G, --groups GROUPS           list of supplementary groups of the new
                                account
  -h, --help                    display this help message and exit
  -k, --skel SKEL_DIR           use this alternative skeleton directory
  -K, --key KEY=VALUE           override /etc/login.defs defaults
  -l, --no-log-init             do not add the user to the lastlog and
                                faillog databases
                                #不要将用户添加到lastlog和faillog数据库
  -m, --create-home             create the user's home directory
  								#自动建立用户的登入目录
  -M, --no-create-home          do not create the user's home directory
  -N, --no-user-group           do not create a group with the same name as
                                the user
  -o, --non-unique              allow to create users with duplicate
                                (non-unique) UID
  -p, --password PASSWORD       encrypted password of the new 
  								#新帐号的密码
  -r, --system                  create a system account
  								#建立系统帐号
  -R, --root CHROOT_DIR         directory to chroot into
  								
  -s, --shell SHELL             login shell of the new account
  								#指定用户登入后所使用的shell
  -u, --uid UID                 user ID of the new account
  								#指定用户id
  -U, --user-group              create a group with the same name as the user
  -Z, --selinux-user SEUSER     use a specific SEUSER for the SELinux user mapping
```



[参考链接](https://www.cnblogs.com/52php/p/5677628.html)

## 深入理解 sudo 与 su 之间的区别

两个命令的最大区别是：

`sudo`命令需要输入当前用户的密码,而`su`命令则需要输入root用户的密码.另外一个区别是其默认行为。sudo 命令只允许使用提升的权限运行单个命令，而 su 命令会启动一个新的 shell，同时允许使用 root 权限运行尽可能多的命令，直到明确退出登录。

### [su命令](https://wangchujiang.com/linux-command/c/su.html)



```bash
su [options] [-] [USER [arg]...]

Change the effective user id and group id to that of USER.
A mere - implies -l.   If USER not given, assume root.

Options:
 -m, -p, --preserve-environment  do not reset environment variables 
 								 #变更身份时，不要变更环境变量；
 -g, --group <group>             specify the primary group
 -G, --supp-group <group>        specify a supplemental group

 -, -l, --login                  make the shell a login shell
 #改变身份时，也同时变更工作目录，以及HOME,SHELL,USER,logname。此外，也会变更PATH变量；
 -c, --command <command>         pass a single command to the shell with -c
#执行完指定的指令后，即恢复原来的身份；
 --session-command <command>     pass a single command to the shell with -c
                                 and do not create a new session
#执行完指定的指令后，即恢复原来的身份；并且不会创建一个新的会话
 -f, --fast                      pass -f to the shell (for csh or tcsh)
 -s, --shell <shell>             run shell if /etc/shells allows it

 -h, --help     display this help and exit
 -V, --version  output version information and exit
```



## [linux---user and group 用户和组的概念](https://blog.51cto.com/13438667/2061590)

Linux用户分为管理员和普通用户，普通用户又分为系统用户和自定义用户。可以查看/etc/passwd来查看。

```bash
root:x:0:0:root:/root:/bin/bash
sshd:x:74:74:Privilege-separated SSH:/var/empty/sshd:/sbin/nologin
www:x:1000:1000::/home/www:/bin/bash
```

以`root:x:0:0:root:/root:/bin/bash` 为例

![](https://pic1.zhimg.com/80/v2-83338ceda500e5ffc3bc56b9477da368_720w.jpg)

- login_name 注册名 root
- passwd 口令   由于 passwd 不再保存密码信息，所以用 x 占位代表。
- uid 用户标识号
- gid 组标识号
- users 注释性描述
- home_directory 用户主目录     /home/www
- shell 登陆shell  ---> /bin/bash

## [在linux中为用户设置root权限](https://linoxide.com/usr-mgmt/give-normal-user-root-privileges/)

#### usermod命令

```bash
Usage: usermod [options] LOGIN

Options:
  -c, --comment COMMENT         new value of the GECOS field
  -d, --home HOME_DIR           new home directory for the user account
  -e, --expiredate EXPIRE_DATE  set account expiration date to EXPIRE_DATE
  -f, --inactive INACTIVE       set password inactive after expiration
                                to INACTIVE
  -g, --gid GROUP               force use GROUP as new primary group
  #强制使用GROUP作为新的主要组
  -G, --groups GROUPS           new list of supplementary GROUPS
  -a, --append                  append the user to the supplemental GROUPS
                                mentioned by the -G option without removing
                                the user from other groups
  #将用户添加到-G选项提到的附加GROUPS上，而不将用户从其他组中删除
  -h, --help                    display this help message and exit
  -l, --login NEW_LOGIN         new value of the login name
  -L, --lock                    lock the user account
  -m, --move-home               move contents of the home directory to the
                                new location (use only with -d)
  -o, --non-unique              allow using duplicate (non-unique) UID
  -p, --password PASSWORD       use encrypted password for the new password
  -R, --root CHROOT_DIR         directory to chroot into
  -P, --prefix PREFIX_DIR       prefix directory where are located the /etc/* files
  -s, --shell SHELL             new login shell for the user account
  -u, --uid UID                 new UID for the user account
  -U, --unlock                  unlock the user account
  -v, --add-subuids FIRST-LAST  add range of subordinate uids
  -V, --del-subuids FIRST-LAST  remove range of subordinate uids
  -w, --add-subgids FIRST-LAST  add range of subordinate gids
  -W, --del-subgids FIRST-LAST  remove range of subordinate gids
  -Z, --selinux-user SEUSER     new SELinux user mapping for the user account

```

```sh
usermod -g root cheng
```

### 用户不在sudoers文件中的解决方法

https://blog.csdn.net/attagain/article/details/11987297

编辑/etc/sudoers

```sh
## Allow root to run any commands anywhere
root    ALL=(ALL)       ALL
cheng    ALL=(ALL)       ALL   #添加这一行
```

