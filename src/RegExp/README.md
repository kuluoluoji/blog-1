<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [语法](#%E8%AF%AD%E6%B3%95)
    - [正向先行断言(?=pattern)](#%E6%AD%A3%E5%90%91%E5%85%88%E8%A1%8C%E6%96%AD%E8%A8%80pattern)
    - [正向后行断言(?<=pattern)](#%E6%AD%A3%E5%90%91%E5%90%8E%E8%A1%8C%E6%96%AD%E8%A8%80pattern)
    - [负向先行断言(?!pattern) / 正向否定查找](#%E8%B4%9F%E5%90%91%E5%85%88%E8%A1%8C%E6%96%AD%E8%A8%80pattern--%E6%AD%A3%E5%90%91%E5%90%A6%E5%AE%9A%E6%9F%A5%E6%89%BE)
    - [负向后行断言(?<!pattern) / 负向否定查找](#%E8%B4%9F%E5%90%91%E5%90%8E%E8%A1%8C%E6%96%AD%E8%A8%80pattern--%E8%B4%9F%E5%90%91%E5%90%A6%E5%AE%9A%E6%9F%A5%E6%89%BE)
- [捕获组](#%E6%8D%95%E8%8E%B7%E7%BB%84)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

正则:

https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Regular_Expressions

RegExp

https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp

replace 用法:

[https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/replace#%E6%8C%87%E5%AE%9A%E4%B8%80%E4%B8%AA%E5%87%BD%E6%95%B0%E4%BD%9C%E4%B8%BA%E5%8F%82%E6%95%B0](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/replace#指定一个函数作为参数)

## RegExp

### 语法

##### 正向先行断言(?=pattern)

![image-20201012223449023](https://minimax-1256590847.cos.ap-shanghai.myqcloud.com/img/image-20201012223449023.png)

##### 正向后行断言(?<=pattern)

![image-20201012223522428](https://minimax-1256590847.cos.ap-shanghai.myqcloud.com/img/image-20201012223522428.png)

##### 负向先行断言(?!pattern) / 正向否定查找

![image-20201012230251496](https://minimax-1256590847.cos.ap-shanghai.myqcloud.com/img/image-20201012230251496.png)

##### 负向后行断言(?<!pattern) / 负向否定查找

![image-20201012230527391](https://minimax-1256590847.cos.ap-shanghai.myqcloud.com/img/image-20201012230527391.png)

**～～关于后向断言，js目前不支持～～**

#### 使用变量

首先字面量表示法不支持变量，必须用RegExp构造函数

```js
const variable = ’变量‘
const reg1 = new RegExp(`test${variable}`, 'g')
```

#### 正则表达式动态拼接

```js
const arr = ['a', 'b', 'c']
let matchStr = ''
arr.forEach((item) => {
  console.log(item)
  matchStr += `(${item})*`
})
let reg = new RegExp(`${matchStr}`, 'g')
console.log(reg)

```



#### 贪婪模式与非贪婪

使用 `?`

当该字符紧跟在任何一个其他限制符（*,+,?，{*n*}，{*n*,}，{*n*,*m*}）后面时，匹配模式是非贪婪的。非贪婪模式尽可能少的匹配所搜索的字符串，而默认的贪婪模式则尽可能多的匹配所搜索的字符串。例如，对于字符串“`oooo`”，“`o+?`”将匹配单个“`o`”，而“`o+`”将匹配所有“`o`”。

### 捕获组

https://www.runoob.com/w3cnote/java-capture-group.html

- 命名捕获组(?Expression)和普通捕获组(Expression)

  ```js
  /(?<test>hello)+\s(br)+/g
  // (?<捕获组名称>)
  /(?<test>hello)+\s(br)+/g
  // ()
  ```

```js
var re = /(?<test>hello)+\s(br)+/gi
var result = re.exec('hello br')
```

下表列出这个脚本的返回值：

| 对象   | 属性/索引      | 描述                                                                                                                                                                  | 例子                                                  |
| ------ | -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------- |
| result | [0]            | 匹配的全部字符串                                                                                                                                                      | `hello br`                                            |
|        | [1], ...[*n* ] | 括号中的分组捕获                                                                                                                                                      | [1] = hello<br/>[2] = br                              |
|        | Index          | 匹配到的字符位于原始字符串的基于 0 的索引值                                                                                                                           | 0                                                     |
|        | Input          | 原始字符串                                                                                                                                                            | hello br                                              |
|        | groups         | 捕获组                                                                                                                                                                | 如果没有就是 undefined,这里是 groups: {test: "hello"} |
| re     | lastIndex      | 下一次匹配开始的位置                                                                                                                                                  |                                                       |
|        | ignoreCase     | 是否使用了 "`i`" 标记使正则匹配忽略大小写                                                                                                                             | `true`                                                |
|        | global         | 是否使用了 "`g`" 标记来进行全局的匹配.                                                                                                                                | `true`                                                |
|        | multiline      | 是否使用了 "`m`" 标记使正则工作在多行模式（也就是，^ 和 \$ 可以匹配字符串中每一行的开始和结束（行是由 \n 或 \r 分割的），而不只是整个输入字符串的最开始和最末尾处。） | `false`                                               |
|        | source         | 正则匹配的字符串                                                                                                                                                      | `(?<test>hello)+\s(br)+`                              |

## replace的用法





#### 数字千分位表示

运行过程: https://www.cnblogs.com/lvmylife/p/8287247.html



#### 时间与歌词匹配

```js
// 匹配出 时间和内容
const str =
  '[00:00.000] 作词 : 李荣浩\n[00:01.000] 作曲 : 李荣浩\n[00:02.000] 编曲 : 李荣浩\n[00:03.000]\n[00:29.799] 电视一直闪\n[00:33.441] 联络方式都还没删\n[00:37.146] 你待我的好\n[00:40.752] 我却错手毁掉\n[00:44.392] 也曾一起想\n[00:48.023] 有个地方睡觉吃饭\n[00:51.674] 可怎么去熬 日夜颠倒\n[00:55.063] 连头款也凑不到\n[00:59.193] 墙板 被我砸烂\n[01:02.574] 到现在还没修\n[01:05.937] 一碗热的粥\n[01:07.960] 你怕我没够\n[01:09.829] 都留一半带走\n[01:12.809] 给你形容\n[01:15.276] 美好今后 你常常眼睛会红\n[01:20.501] 原来心疼我\n[01:22.517] 我那时候不懂\n[01:27.316] 假如我年少有为 不自卑\n[01:31.632] 懂得什么是珍贵\n[01:34.174] 那些美梦\n[01:37.783] 没给你 我一生有愧\n[01:41.863] 假如我年少有为 知进退\n[01:46.204] 才不会让你替我受罪\n[01:50.032] 婚礼上 多喝几杯\n[01:53.263] 和你现在那位\n[02:00.430]\n[02:26.175] 也曾一起想\n[02:29.798] 有个地方睡觉吃饭\n[02:33.428] 可怎么去熬 日夜颠倒\n[02:36.812] 连头款也凑不到\n[02:40.958] 墙板 被我砸烂\n[02:44.360] 到现在还没修\n[02:47.730] 一碗热的粥\n[02:49.757] 你怕我没够\n[02:51.589] 都留一半带走\n[02:54.622] 给你形容\n[02:57.078] 美好今后 你常常眼睛会红\n[03:02.280] 原来心疼我\n[03:04.333] 我那时候不懂\n[03:09.108] 假如我年少有为 不自卑\n[03:13.464] 懂得什么是珍贵\n[03:15.936] 那些美梦\n[03:19.553] 没给你 我一生有愧\n[03:23.677] 假如我年少有为 知进退\n[03:27.974] 才不会让你替我受罪\n[03:31.834] 婚礼上 多喝几杯\n[03:35.007] 和你现在那位\n[03:41.862] 假如我年少有为 不自卑\n[03:46.181] 尝过后悔的滋味\n[03:48.651] 金钱地位\n[03:52.300] 搏到了却好想退回\n[03:56.399] 假如我年少有为 知进退\n[04:00.701] 才不会让你替我受罪\n[04:04.629] 婚礼上 多喝几杯\n[04:07.732] 和你现在那位\n[04:15.261] 在婚礼上 多喝几杯\n[04:18.755] 祝我年少有为\n[04:27.855]\n[04:29.000] 制作人：李荣浩\n[04:29.500] 吉他：李荣浩\n[04:30.000] 贝斯：李荣浩\n[04:30.500] 鼓：Alex\n[04:31.000] 和声编写：李荣浩\n[04:31.500] 和声：李荣浩\n[04:32.000] 弦乐编写：李荣浩\n[04:32.500] 弦乐：国际首席爱乐乐团\n[04:33.000] 录音师：李荣浩\n[04:33.500] 混音师：李荣浩\n[04:34.000] 录音室：北京一样音乐录音室\n[04:34.500] 混音室：北京一样音乐录音室\n[04:35.000] 母带后期制作人：李荣浩\n[04:35.500] 母带后期处理工程师：周天澈TC Z.\n[04:36.000] 母带后期处理录音室：TC Faders\n[04:37.000]OP：一样音乐工作室\n[04:38.000]SP：酷亚音乐 (深圳) 有限公司 admin by One Asia Music Inc. 酷亚音乐股份有限公司\n'
const res1 = str.match(/\[.+?\]/g) // 匹配时间
// const res2 = str.match(/\D*(?=\)/g)
const res2 = str.match(/(\[(.+?)\])((?:\])?.*?\n)/g) // 匹配时间和歌词
const res3 = str.match(/(?<=\]).*?\n/g) // 匹配歌词
// /(?<=\]).*?(?=\n)/g  滤除 \n

// console.log(res1)
console.log(res2)

```

> 字符串中的\n 指 换行符 , 匹配时需要用\n ; 如果想匹配字符串\n 则用的是\\\n

