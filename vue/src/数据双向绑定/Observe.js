function observable(obj) {
  let keys = Object.keys(obj)
  keys.forEach((key) => {
    defineReactive(obj, key, obj[key])
  })
  return obj
}
function defineReactive(obj, key, val) {
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
let p = observable({
  name: 'zs',
  age: 15
})
console.log(p.name)
p.age = 20
console.log(p.age)
