#### 描述符可拥有的键值

|            | `configurable` | `enumerable` | `value` | `writable` | `get`  | `set`  |
| ---------- | -------------- | ------------ | ------- | ---------- | ------ | ------ |
| 数据描述符 | 可以           | 可以         | 可以    | 可以       | 不可以 | 不可以 |
| 存取描述符 | 可以           | 可以         | 不可以  | 不可以     | 可以   | 可以   |

> 如果一个描述符不具有 `value`、`writable`、`get` 和 `set` 中的任意一个键，那么它将被认为是一个数据描述符。如果一个描述符同时拥有 `value` 或 `writable` 和 `get` 或 `set` 键，则会产生一个异常。

即一个描述符不可同时拥有`value` 或 `writable` 和 `get` 或 `set` 键（不可同时拥有数据描述符和存取描述符）

```js
const data = {}
Object.defineProperty(data, 'name', {
  configurable: false,
  enumerable: false,
  value: 'ls', // 值，默认为undefined
  writable: true // 是否可写，默认false
})

data.name = 'zs'
console.log(data.name)
```

```js
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
// set newVal
// get value
// ls
```

