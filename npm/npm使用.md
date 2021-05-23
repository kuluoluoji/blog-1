---
title: npm使用
tags:
- nodejs
---

## NPM CLI vs Yarn CLI

https://github.com/zuojj/fedlab/issues/3

yarn对比npmhttps://zhuanlan.zhihu.com/p/23493436

从npm迁移到yarnhttps://classic.yarnpkg.com/en/docs/migrating-from-npm

### 命令

安装模块

```bash
npm install [package]
```

**-S, --save 安装包信息将加入到dependencies（生产阶段的依赖）**

```bash
npm install gulp --save 或 npm install gulp -S

yarn add [package]
```

package.json 文件的 dependencies 字段：

```json
"dependencies": {
    "gulp": "^3.9.1"
}
```

**-D, --save-dev 安装包信息将加入到devDependencies（开发阶段的依赖），所以开发阶段一般使用它**

```bash
npm install gulp --save-dev 或 npm install gulp -D

yarn add [package] [--dev/-D]
```

package.json 文件的 devDependencies字段：

```bash
"devDependencies": {
    "gulp": "^3.9.1"
}
```

#### update

```sh
npm update --global                  	yarn global upgrade
```



### 换源

**npm更换源**

```sh
npm config get registry  // 查看npm当前镜像源

npm config set registry https://registry.npm.taobao.org/  // 设置npm镜像源为淘宝镜像

yarn config get registry  // 查看yarn当前镜像源

yarn config set registry https://registry.npm.taobao.org/  // 设置yarn镜像源为淘宝镜像
```

**镜像源地址部分如下：**

```text
npm --- https://registry.npmjs.org/

cnpm --- https://r.cnpmjs.org/

taobao --- https://registry.npm.taobao.org/

nj --- https://registry.nodejitsu.com/

rednpm --- https://registry.mirror.cqupt.edu.cn/

npmMirror --- https://skimdb.npmjs.com/registry/

deunpm --- http://registry.enpmjs.org/
```



## npx vs npm

https://www.ruanyifeng.com/blog/2019/02/npx.html