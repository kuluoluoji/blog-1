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
  constructor(name, age, sex = 1) {
    super(name, age) // 通过super()调用父类,使this指向Son;super()实质是 Son.call(this);
    // 上面一句执行的是super.call(this,name,age)
    this.sex = sex
  }
}

const p = new Son('zs', 22, 0)
console.log(p.name)
