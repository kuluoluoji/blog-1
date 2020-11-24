const arr = ['a', 'b', 'c']
let matchStr = ''
arr.forEach((item) => {
  console.log(item)
  matchStr += `${item}|`
})
let reg = new RegExp(`${matchStr}`, 'g')
console.log(reg)
