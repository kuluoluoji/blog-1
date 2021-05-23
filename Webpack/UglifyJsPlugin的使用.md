### webpack打包时去除注释

webpack打包时默认会去除注释

### webpack打包时去除console.log

webpack提供了[UglifyjsWebpackPlugin](https://webpack.docschina.org/plugins/uglifyjs-webpack-plugin/)

### [uglifyOptions](https://github.com/mishoo/UglifyJS2/tree/harmony#minify-options)

```js
[
  new UglifyJsPlugin({
    uglifyOptions: {
      ie8: false, //启用IE8支持,默认false
      ecma: 8,	//支持的ECMAScript的版本（5，6，7或8）。影响parse，compress&&output选项。默认undefined
      parse: {...options}, //其他解析选项 默认{}
      mangle: {
        ...options,
        properties: {
          // mangle property options
        }
      }, //启用名称处理（有关高级设置，请参阅Mangle属性，与⚠️一起使用）
      output: {
        comments: false,
        beautify: false,
        ...options
      }, //其他输出选项（默认设置已针对最佳压缩进行了优化）默认{}
      compress: {...options}, //其他压缩选项。默认true
      warnings: false //显示警告。默认false
    },
    sourceMap: false //sourceMap选项。默认false。如果希望指定源地图选项，则传递一个对象 。
  })
]
```

