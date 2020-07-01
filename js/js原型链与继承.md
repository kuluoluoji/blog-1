---
title: JavaScript原型及原型链的学习
tags:
- JavaScript
---

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [JavaScript原型链](#javascript%E5%8E%9F%E5%9E%8B%E9%93%BE)
  - [什么是原型链](#%E4%BB%80%E4%B9%88%E6%98%AF%E5%8E%9F%E5%9E%8B%E9%93%BE)
  - [prototype属性](#prototype%E5%B1%9E%E6%80%A7)
  - [setPrototypeOf 与 Object.create区别](#setprototypeof-%E4%B8%8E-objectcreate%E5%8C%BA%E5%88%AB)
- [new关键字](#new%E5%85%B3%E9%94%AE%E5%AD%97)
- [ES5和ES6的继承](#es5%E5%92%8Ces6%E7%9A%84%E7%BB%A7%E6%89%BF)
  - [es5继承](#es5%E7%BB%A7%E6%89%BF)
    - [prototype模式](#prototype%E6%A8%A1%E5%BC%8F)
  - [es6继承](#es6%E7%BB%A7%E6%89%BF)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## JavaScript原型链

阮一峰老师的[《undefined与null的区别》](http://www.ruanyifeng.com/blog/2014/03/undefined-vs-null.html):

> null表示"没有对象",即此处不应该有值.
>
> undefined表示"缺少值",即此处应该有一个值,但是还没有定义.

### 什么是原型链

原型链是一种机制,指的是JavaScript每个对象包括原型对象都有一个内置的`__proto__`属性指向创建它的函数对象的原型对象,即prototype属性.

![](https://minimax-1256590847.cos.ap-shanghai.myqcloud.com/img/image-20200608133124144.png)

插一下 [nodejs中有\__proto\__属性吗?](../bug/nodejs的__proto__.md)

### prototype属性

> 可以用prototype访问的只有function类型，其他类型只能用getPrototypeOf或者_proto_,其他类型也都是通过function生成的（String,Number……涉及到隐式创建对象）

来验证一下

```js
const obj = {
  name: 'zs',
  sayHi: function () {
    console.log(`Hello ${this.name}`)
  }
}
obj.sayHi() // Hello zs
const me = Object.create(obj)
obj.name = 'ls'
obj.sayHi() // Hello ls
me.sayHi() // Hello ls
console.log(obj === me.__proto__) // true
console.log(obj.prototype === me.__proto__) // false
```

> 对象的原型只是一个引用，指向另外一个对象。对象原型之间的嵌套组成了原型链，原型链的作用是维护访问对象属性的查询，确定访问权限。

### setPrototypeOf 与 Object.create区别

[mdn](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf)关于`Object.setPrototypeOf()`的解释:

> Object.setPrototypeOf() 方法设置一个指定的对象的原型 ( 即, 内部[[Prototype]]属性）到另一个对象或  null。
>
> ```js
> Object.setPrototypeOf(A.prototype,B.prototype)
> ```
>
> 即让A的原型指向B

[mdn](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/create)关于`Object.create()`的解释:

> **`Object.create()`**方法创建一个新对象，使用现有的对象来提供新创建的对象的`__proto__`。
>
> ```js
> A.prototype = Object.create(A.prototype)
> ```
>
> 新创建的A的原型指向B.prototype

具体的区别可以看这篇[文章](https://juejin.im/post/5e9705c7f265da47ca692d0d)

## new关键字

mdn关于`new`关键字进行的操作解释:

> 1. 创建一个空的简单JavaScript对象（即**`{}`**）；
> 2. 链接该对象（即设置该对象的构造函数）到另一个对象 ；
> 3. 将步骤1新创建的对象作为**`this`**的上下文 ；
> 4. 如果该函数没有返回对象，则返回**`this`**。

```js
var a = new A()
```

代码运行的时候,内部实际执行的是

```js
// 1.首先创建一个空对象
var o = new Object()
// 2.将空对象的原型赋值为构造函数的原型
o._proto_ = A.prototype
// 3.更改构造函数内部this,指向新创建的空对象
A.call(o)
```

最后返回,返回的时候会进行一个判断,如果构造函数(这里即A)设置了返回值,并且返回值是一个Object类型的话,直接就返回该Object,否则默认返回新创建的空对象(即o)

```js
function Super(name, age) {
  this.name = name
  this.age = age
  return { name: 'ls', age: 20 }
}

const su = new Super('zs', 10)
console.log(su) // {name: "ls", age: 20}
console.log(su.name) // ls
```

结论: 通过new操作符,Super创建出来的实例可以访问到构造函数中的属性和构造函数原型链中的属性.实例与构造函数通过原型链连接了起来



## ES5和ES6的继承

[图解](http://keenwon.com/1524.html)

[阮一峰《构造函数的继承》](http://www.ruanyifeng.com/blog/2010/05/object-oriented_javascript_inheritance.html)

### es5继承

es5之前即构造函数的继承

- 构造函数继承
- [prototype模式](#prototype模式)
- 直接继承prototype,即原型替换
- 利用空对象作为中介
- 拷贝继承

#### prototype模式

![es5继承](img/es5继承.png)

```js
function Super() {}
function Sub() {}

Sub.prototype = new Super()	// 继承了Super
/* 继承是通过创建Super的实例,并将该实例赋给Sub.prototype实现的,本质是重写原型对象,用一个新类型
的实例替换 */
Sub.prototype.constructor = Sub // Super => Sub.prototype => Sub
/* 任何一个prototype对象都有一个constructor属性，指向它的构造函数。
如果没有"Sub.prototype = new Super();"这一行，Sub.prototype.constructor是指向Sub的；
加了这一行以后，Sub.prototype.constructor指向Super。*/

var p = new Sub()

Sub.prototype.constructor === Sub // true
p.constructor === Sub // true
p.__proto__ === Sub.prototype // true
Sub.prototype.__proto__ == Super.prototype // true
```

​	es5中这种继承,实质上是将子类的原型设置为父类的实例。

### es6继承

es6中的class语法其实只是语法糖,本质上还是通过原型链来继承,只是方便了书写

<details>
    <summary>示例</summary>
    <pre>
        class Animal {
          constructor() {
            this.species = "动物";
          }
          sayHi() {
            return console.log("hi");
          }
        }

        class Cat extends Animal {
          constructor(name, color) {
            super();
            this.name = name;
            this.color = color;
          }
        }

        var animal = new Animal();
        var cat1 = new Cat("大毛", "黄色");
        Animal.prototype.sayHi(); //hi
        animal.sayHi(); //hi
        cat1.sayHi(); //hi
        console.log(cat1.species); // 动物
    </pre>
</details>

![es6](img/es6继承.png)

```js
class Super {}

class Sub extends Super {}

const p = new Sub()

Sub.prototype.constructor === Sub // true
p.constructor === Sub // true
p.__proto__ === Sub.prototype // true
Sub.__proto__ === Super // true
Sub.prototype.__proto__ === Super.prototype // true

```

es6规定:子类的`_proto_`属性指向父类,这是es5中没有的操作

[es6 extends关键字](https://segmentfault.com/a/1190000010407445)

上面的代码通过babel转译后多出了`_inherits`和`_createClass`函数。

```js
// _inherits
function _inherits(subClass, superClass) {
  if (typeof superClass !== 'function' && superClass !== null) {
    throw new TypeError('Super expression must either be null or a function')
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: { value: subClass, writable: true, configurable: true }
  })
  if (superClass) _setPrototypeOf(subClass, superClass)
}
```

