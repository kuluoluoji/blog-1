const promise = new Promise((resolve, reject) => {
  setTimeout(function () {
    resolve('done')
  }, 3000)
})

promise.then((res) => {
  console.log(res),
    (err) => {
      console.log(err)
    }
})
