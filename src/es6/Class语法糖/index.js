function Father(name = 'mr', age = 18) {
  this.name = name
  this.age = age
}
Father.prototype.sayHi = function () {
  console.log('Hi')
}

const fa = new Father('zs', 20)
// console.log(fa) // Father { name: 'zs', age: 20 }
// fa.sayHi() // Hi

function Son(sex = 1) {
  this.sex = sex
}

Son.prototype = new Father() // Son.prototype == Father的实例, 构成继承关系
// 所以 Faher的实例的方法,例如sayHi() Son.prototype 也有
// Son.prototype.sayHi() // Hi
Son.prototype.constructor = Son

const p = new Son(0)
console.log(p)
// 到目前为止,通过new Son构造出来的实例还是只能拥有自己的属性
// 如果想要继承父类的属性,需要指定子类的constructor =
