const pm1 = new Promise((resolve, reject) => {
  // throw 'Error'
  resolve('success')
})

// then接受2个回调函数作为参数
pm1.then(
  (val) => {
    console.log(val)
  },
  (err) => {
    console.log(err)
  }
)
// 等价于
// catch是then的语法糖
pm1
  .then((result) => {
    console.log(result)
  })
  .catch((err) => {
    console.log(err)
  })
