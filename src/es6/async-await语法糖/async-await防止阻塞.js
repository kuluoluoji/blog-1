// Define custom promise function

function timeoutPromise(interval) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log('done')
      resolve('done')
    }, interval)
  })
}

async function timeTest() {
  // 这段代码看起来像同步的,执行起来也像同步的。原因是前一个await会阻塞后一个await进程的执行
  // 通过将 Promise 对象存储在变量中来同时开始它们，然后等待它们全部执行完毕。可以缓解这个问题
  // await timeoutPromise(3000)
  // await timeoutPromise(3000)
  // await timeoutPromise(3000)

  // 上面的代码等价于  每一个timeoutPromise都会阻塞后面一个timeoutPromise的执行
  // const timeoutPromise1 = timeoutPromise(3000)
  // await timeoutPromise1
  // const timeoutPromise2 = timeoutPromise(3000)
  // await timeoutPromise2
  // const timeoutPromise3 = timeoutPromise(3000)
  // await timeoutPromise3

  // 将三个Promise存储在变量中,这样可以同时启动三个Promise关联的进程,最终需要的时间只需要3s
  const timeout1 = timeoutPromise(3000)
  const timeout2 = timeoutPromise(3000)
  const timeout3 = timeoutPromise(3000)

  await timeout1
  await timeout2
  await timeout3
}

let startTime = Date.now()
timeTest().then(() => {
  let finishTime = Date.now()
  let timeTaken = finishTime - startTime
  console.log('Time taken in milliseconds: ' + timeTaken)
})
