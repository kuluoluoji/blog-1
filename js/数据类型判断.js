const a = 123
console.log(
  Object.prototype.toString.call(function () {}) === '[object Function]'
)
