<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

**Table of Contents** _generated with [DocToc](https://github.com/thlorenz/doctoc)_

- [正向先行断言(?=pattern)](#%E6%AD%A3%E5%90%91%E5%85%88%E8%A1%8C%E6%96%AD%E8%A8%80pattern)
- [正向后行断言(?<=pattern)](#%E6%AD%A3%E5%90%91%E5%90%8E%E8%A1%8C%E6%96%AD%E8%A8%80pattern)
- [负向先行断言(?!pattern) / 正向否定查找](#%E8%B4%9F%E5%90%91%E5%85%88%E8%A1%8C%E6%96%AD%E8%A8%80pattern--%E6%AD%A3%E5%90%91%E5%90%A6%E5%AE%9A%E6%9F%A5%E6%89%BE)
- [负向后行断言(?<!pattern) / 负向否定查找](#%E8%B4%9F%E5%90%91%E5%90%8E%E8%A1%8C%E6%96%AD%E8%A8%80pattern--%E8%B4%9F%E5%90%91%E5%90%A6%E5%AE%9A%E6%9F%A5%E6%89%BE)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

正则:

https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Regular_Expressions

RegExp

https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp

replace 用法:

[https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/replace#%E6%8C%87%E5%AE%9A%E4%B8%80%E4%B8%AA%E5%87%BD%E6%95%B0%E4%BD%9C%E4%B8%BA%E5%8F%82%E6%95%B0](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/replace#指定一个函数作为参数)

##### 正向先行断言(?=pattern)

![image-20201012223449023](https://minimax-1256590847.cos.ap-shanghai.myqcloud.com/img/image-20201012223449023.png)

##### 正向后行断言(?<=pattern)

![image-20201012223522428](https://minimax-1256590847.cos.ap-shanghai.myqcloud.com/img/image-20201012223522428.png)

##### 负向先行断言(?!pattern) / 正向否定查找

![image-20201012230251496](https://minimax-1256590847.cos.ap-shanghai.myqcloud.com/img/image-20201012230251496.png)

##### 负向后行断言(?<!pattern) / 负向否定查找

![image-20201012230527391](https://minimax-1256590847.cos.ap-shanghai.myqcloud.com/img/image-20201012230527391.png)

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

