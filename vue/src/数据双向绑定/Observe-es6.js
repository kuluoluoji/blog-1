class Observe {
  constructor(obj) {
    this.obj = obj
    this.observable(this.obj)
  }

  observable(obj) {
    let keys = Object.keys(obj)
    keys.forEach((key) => {
      this.defineReactive(obj, key, obj[key])
    })
    return obj
  }
  defineReactive(obj, key, val) {
    Object.defineProperty(obj, key, {
      get() {
        console.log(`${key}属性被读取了...`)
        return val
      },
      set(newVal) {
        console.log(`${key}属性被修改了...`)
        val = newVal
      }
    })
  }
}
let p = new Observe({
  name: 'zs',
  age: 15
})
console.log(p.obj.name)
p.obj.age = 20
console.log(p.obj.age)
