/**
 *深拷贝-递归
 * @param {Object} obj 一个对象,对象可以是多层的
 */
function deepClone(source) {
  // if source not an object
  if (typeof source != 'object') return source
  // if source an array
  const target =
    Object.prototype.toString.call(source) === '[object Array]' ? [] : {}
  for (const key in source) {
    // if (obj.hasOwnProperty(key)) {
    //不使用obj.hasOwnProperty(key)是为了确保能够调用到正确的方法,防止this指向问题
    if (Object.prototype.hasOwnProperty.call(source, key)) {
      // 如果还有子属性
      if (typeof source[key] === 'object') {
        target[key] = deepClone(source[key])
      } else {
        target[key] = source[key]
      }
    }
  }
  return target
}
const obj = {
  name: 'zs',
  age: 18,
  children: { name: 'wx', age: 20 }
}
const newObj = deepClone(obj)

obj.name = 'ls'
obj.children.name = 'ss'
console.log('obj: ', obj)
console.log('newObj: ', newObj)
