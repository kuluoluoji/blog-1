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
