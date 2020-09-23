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
