const data = {}
let temp = 'zs'
Object.defineProperty(data, 'name', {
  configurable: false,
  enumerable: false,
  get() {
    console.log('get value')
    return temp
  },
  set(newVal) {
    console.log('set newVal')
    temp = newVal
  }
})

data.name = 'ls'
console.log(data.name)
