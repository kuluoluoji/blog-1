const str =
  'https://www.baidu.com/s?tn=02003390_hao_pg&ie=utf-8&wd=%E5%93%88%E5%93%88'
const res = str.match(/([^=&?])*=([^=&?])*/g)
console.log(res)
// 正则表达式([^=&?])*=([^=&?])*
// 捕获组([^=&?]) ([^=&?])
// ([^=&?]) 匹配除 = & ? 外的字符串 * 匹配{0,n}次 后接 = 符号
