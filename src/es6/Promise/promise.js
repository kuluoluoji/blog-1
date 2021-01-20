/**
 * ***********************
 *    Promise防止阻塞
 * ***********************
 */
function timeoutPromise(interval) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log('done')
      resolve('done')
    }, interval)
  })
}

function timeTest() {
  // return timeoutPromise(2000)
  //   .then(() => timeoutPromise(3000))
  //   .then(() => timeoutPromise(4000))

  // 防止阻塞 赋值的本质 是因为Promise实例一旦建立就会立即执行,而后面的then是为了获取Promise实例的状态
  const timeout1 = timeoutPromise(2000)
  const timeout2 = timeoutPromise(3000)
  const timeout3 = timeoutPromise(4000)
  return timeout1.then(() => timeout2).then(() => timeout3)
}

let startTime = Date.now()
timeTest().then(() => {
  let finishTime = Date.now()
  let timeTaken = finishTime - startTime
  console.log('Time taken in milliseconds: ' + timeTaken)
})
