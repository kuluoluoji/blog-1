class Father {
  constructor(name = 'ls', age = 18) {
    this.name = name
    this.age = age
  }
  sayHi() {
    console.log('Hi')
  }
}

const fa = new Father('zs', 20)
// console.log(fa) // Father { name: 'zs', age: 20 }
// fa.sayHi() // Hi

class Son extends Father {
  constructor(sex = 1) {
    super()
    this.sex = sex
  }
}

const p = new Son()
console.log(p)
