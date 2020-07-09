<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [Function.prototype.apply()](#functionprototypeapply)
- [Function.prototype.bind()](#functionprototypebind)
- [Function.prototype.call()](#functionprototypecall)
- [Set和Map数据结构](#set%E5%92%8Cmap%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84)
- [图解ES5和ES6中的继承](#%E5%9B%BE%E8%A7%A3es5%E5%92%8Ces6%E4%B8%AD%E7%9A%84%E7%BB%A7%E6%89%BF)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## call,apply,bind的使用

- **[Function.prototype.apply()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/apply)**

  **`apply()`** 方法调用一个具有给定`this`值的函数，以及作为一个数组（或[类似数组对象](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Indexed_collections#Working_with_array-like_objects)）提供的参数。

- **Function.prototype.bind()**

  **`bind()`** 方法创建一个新的函数，在 `bind()` 被调用时，这个新函数的 `this` 被指定为 `bind()` 的第一个参数，而其余参数将作为新函数的参数，供调用时使用。

- **Function.prototype.call()**

  **`call()`** 方法使用一个指定的 **`this`** 值和单独给出的一个或多个参数来调用一个函数。

> **注意：**该方法的语法和作用与 [`apply()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/apply) 方法类似，只有一个区别，就是 `call()` 方法接受的是**一个参数列表**，而 `apply()` 方法接受的是**一个包含多个参数的数组**。

总结:
<div style="color:red;font-size:18px">call和apply都是用来调用函数的,区别就在于二者接受的第二个参数不一样,call接受的是一个个参数,apply是接受一个数组或类数组类型的;
而bind则是创建一个新的函数。</div>



```js
let a = 20;
var o = {
  a: 10,
  fn1: function () {
    console.log(this == o);
    console.log(this.a);
  },
  b: {
    a: 12,
    fn: function () {
      console.log(this == o);
      console.log(this.a); //12
    },
  },
};
// var j = o.fn1.bind(o);
// j();
var j = o.fn1;
j.call(o);
```




## Set和Map数据结构

Set相当于一个没有重复数据的数组

`Set`函数可以接受一个数组（或者具有 iterable 接口的其他数据结构）作为参数，用来初始化。



首先,要弄明白这三个函数存在的意义是什么?

答案是**改变函数执行时的上下文,也就是改变函数运行时的this指向**。

## 箭头函数

> “箭头函数”的`this`，总是指向定义时所在的对象，而不是运行时所在的对象。

箭头函数没有this,它的this取决于该函数外部非箭头函数的this值