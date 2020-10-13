function formatMoney(num) {
  /* 正则实现 */
  // 参考：https://www.cnblogs.com/lvmylife/p/8287247.html
  let [integer, decimal] = String(num).split('.')
  let regExp = /\d{1,3}(?=(\d{3})+$)/g
  // let regExp = /\B(?=(\d{3})+$)/g
  integer = integer.replace(regExp, '$&,')
  return `${integer}${decimal === undefined ? '' : '.' + decimal}`
  // 正则解释
  // 正则表达式 \d{1,3}(?=(\d{3})+$)  表示前面有1~3个数字，后面的至少由一组3个数字结尾
  // 先行肯定断言(?=)会作为匹配校验，但不会出现在匹配结果字符串里面
  // ?=表示正向引用，可以作为匹配的条件，但匹配到的内容不获取，并且作为下一次查询的开始
  // $& 表示与正则表达式相匹配的内容，具体的可查看 w3school的replace()方法
  /* Number.prototype.toLocaleString()实现 */
  // Number.prototype.toLocaleString()
  // return num.toLocaleString('en');
  /* Intl.NumberFormat().format(number)实现 */
  // Intl.NumberFormat().format(number)
  // return Intl.NumberFormat('en').format(num);
  // reduce 方案
  // let arr = String(num).split('.');
  // let char = arr[0].split('').reverse();
  // let IntStr = char.reduce((acc, value, index) => {
  //     return `${index % 3 === 0 ? String(value)+',' : String(value)}${acc}`;
  // }, '').slice(0, -1);
  // return `${IntStr}${arr[1]? '.'+arr[1] : '' }`;
}
console.log(formatMoney(12345678.12))
