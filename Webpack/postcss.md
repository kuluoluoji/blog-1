How to use postcss❓

https://github.com/postcss/postcss#usage

Use [`postcss-loader`](https://github.com/postcss/postcss-loader) in `webpack.config.js`:

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            }
          },
          {
            loader: 'postcss-loader'
          }
        ]
      }
    ]
  }
}
```









## 在webpack中利用postcss将px转换为vw

### [postcss-px-to-viewport插件](https://github.com/evrone/postcss-px-to-viewport)

> [@huge689](https://github.com/huge689) At first you need use `postcss` via https://github.com/postcss/postcss-loader
> `postcss-px-to-viewport` only plugin for `postcss`.
> Scheme:
> `postcss-px-to-viewport => postcss => postcss-loader => webpack`

```js
module: {
    rules: [
      { test: /\.txt$/, use: 'raw-loader' },
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: ['postcss-px-to-viewport'],
              },
            },
          },
        ],
      },
    ],
  },
```

**postcss-px-to-viewport的默认选项--Default Options:**

```js
{
  unitToConvert: 'px',
  viewportWidth: 320,
  unitPrecision: 5,
  propList: ['*'],
  viewportUnit: 'vw',
  fontViewportUnit: 'vw',
  selectorBlackList: [],
  minPixelValue: 1,
  mediaQuery: false,
  replace: true,
  exclude: undefined,
  include: undefined,
  landscape: false,
  landscapeUnit: 'vw',
  landscapeWidth: 568
}
```

**编写自定义配置**

```js
const postcssPxToViewport = require('postcss-px-to-viewport')
module: {
    rules: [
      { test: /\.txt$/, use: 'raw-loader' },
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  new postcssPxToViewport({
                    viewportWidth: 750,
                  }),
                ],
              },
            },
          },
        ],
      },
    ],
  },
```

