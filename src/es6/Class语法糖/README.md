## class 语法糖

- es5 function 写法

```js
function Father(name, age) {
  this.name = name
  this.age = age
}
Father.prototype.sayHi = function () {
  console.log('Hi')
}

const fa = new Father('zs', 20)
console.log(fa) // Father { name: 'zs', age: 20 }
fa.sayHi() // Hi
```

- es6 class

```js
class Father {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
  sayHi() {
    console.log('Hi')
  }
}

const fa = new Father('zs', 20)
console.log(fa) // Father { name: 'zs', age: 20 }
fa.sayHi() // Hi
```



### constructor方法

`constructor` 方法是类的构造函数，是一个默认方法，通过 `new` 命令创建对象实例时，自动调用该方法。一个类必须有 `constructor` 方法，如果没有显式定义，一个默认的 `consructor` 方法会被默认添加。所以即使你没有添加构造函数，也是会有一个默认的构造函数的。一般 `constructor` 方法返回实例对象 `this` ，但是也可以指定  `constructor` 方法返回一个全新的对象，让返回的实例对象不是该类的实例。

---

### super关键字

引用[MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/super)的说法:

> **super**关键字用于访问和调用一个对象的父对象上的函数。
>
> 在构造函数中使用时，`super`关键字将单独出现，并且必须在使用`this`关键字之前使用。`super`关键字也可以用来调用父对象上的函数。