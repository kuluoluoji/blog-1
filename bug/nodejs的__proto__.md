---
title: nodejs中的_proto_
tags:
- bug
---

在学习原型和原型链的时候

我写了这么一段代码

```js
// 以下代码运行在nodejs环境中
function Person(name) {
  this.name = name
  this.sayHi = function () {
    console.log(`Hello ${this.name}`)
  }
}
const p = new Person('ls')
console.log(p)
p.sayHi()
console.log(Person.prototype === p._proto_) // false
```

在vscode中运行的结果是`false`,但是根据原型链照理应该是相等的

于是我在浏览器中运行了一下

得到的结果是`true`

`Person.prototype`和`p._proto_`都是`{constructor: ƒ}`

我突然就想起来`_proto_`好像是浏览器特有的

于是乎我得到了这样一个结论: **nodejs没有`_proto_`**

暂时没有去验证(逃

最后发现,卧槽居然是写错了, 把`__proto__`写成了`_proto_`