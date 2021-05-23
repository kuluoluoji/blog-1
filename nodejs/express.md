### Express热更新

nodemon实现热更新  https://www.npmjs.com/package/nodemon

启动文件不再使用 `node ./app.js` 而是 `nodemon ./app.js`

[res.setHeader和res.header之间的区别](https://stackoverflow.com/questions/40840852/difference-between-res-setheader-and-res-header-in-node-js)

`res.setHeader()`是Node.js的本机方法，并且`res.header()`是`res.set()`Express框架中方法的别名。

这两种方法做的完全一样，设置标头的HTTP响应。唯一的区别是只`res.setHeader()`允许您**设置单个标头**，`res.header()`并允许您**设置多个标头**。因此，使用一种适合您的需求。

