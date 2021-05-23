经常看到一些项目根目录有`.env.dev`、`.env.prod`等文件，不知道他们有什么作用。

实际上，这些文件是用于配合webpack切换开发环境的。
之前有说到，在webpack.config.js中webpack通过判断process.env === 'production' 来使用不同配置

另外一种方式是使用dev.config.js、prod.config.js 等文件来切花不同配置。

首先，process是node环境下的一个变量，我们来打印下，在webpack.config.js中console.log 一下就行了。
```sh
process {
  version: 'v15.14.0',
  versions: {
    node: '15.14.0',
    v8: '8.6.395.17-node.28',
    uv: '1.41.0',
    zlib: '1.2.11',
    brotli: '1.0.9',
    ares: '1.17.1',
    modules: '88',
    nghttp2: '1.42.0',
    napi: '8',
    llhttp: '2.1.3',
    openssl: '1.1.1k+quic',
    cldr: '38.1',
    icu: '68.2',
    tz: '2020d',
    unicode: '13.0',
    ngtcp2: '0.1.0-DEV',
    nghttp3: '0.1.0-DEV'
  },
  arch: 'x64',
  platform: 'darwin',
  release: {
    name: 'node',
    sourceUrl: 'https://nodejs.org/download/release/v15.14.0/node-v15.14.0.tar.gz',
    headersUrl: 'https://nodejs.org/download/release/v15.14.0/node-v15.14.0-headers.tar.gz'
  },
  _rawDebug: [Function: _rawDebug],
  moduleLoadList: [
    // ......
    // ......
    ... 66 more items
  ],
  config: {
    target_defaults: {
      cflags: [],
      default_configuration: 'Release',
      defines: [],
      include_dirs: [],
      libraries: []
    },
    variables: {
    // ...
    }
  },
  kill: [Function: kill],
  exit: [Function: exit],
  features: {
    inspector: true,
    debug: false,
    uv: true,
    ipv6: true,
    tls_alpn: true,
    tls_sni: true,
    tls_ocsp: true,
    tls: true,
    cached_builtins: [Getter]
  },
  env: {
    USER: 'cheng',
    HOME: '/Users/cheng',
    SHELL: '/bin/zsh',
    __CF_USER_TEXT_ENCODING: '0x1F5:0x19:0x34',
    TMPDIR: '/var/folders/p2/cn9jx_j10dg_xnr90k64cszr0000gn/T/',
    XPC_SERVICE_NAME: '0',
    XPC_FLAGS: '0x0',
    ORIGINAL_XDG_CURRENT_DESKTOP: 'undefined',
    SHLVL: '1',
    PWD: '/Users/cheng/Github/webpack-test',
    OLDPWD: '/Users/cheng/Github/webpack-test',
    ZSH: '/Users/cheng/.oh-my-zsh',
    NVM_DIR: '/Users/cheng/.nvm',
    NVM_CD_FLAGS: '-q',
    NVM_BIN: '/Users/cheng/.nvm/versions/node/v15.14.0/bin',
    NVM_INC: '/Users/cheng/.nvm/versions/node/v15.14.0/include/node',
    PAGER: 'less',
    LESS: '-R',
    LSCOLORS: 'Gxfxcxdxbxegedabagacad',
    AUTOJUMP_SOURCED: '1',
    AUTOJUMP_ERROR_PATH: '/Users/cheng/Library/autojump/errors.log',
    TERM_PROGRAM: 'vscode',
    TERM_PROGRAM_VERSION: '1.55.2',
    LANG: 'zh_CN.UTF-8',
  },
  title: 'webpack',
  argv: [
    '/Users/cheng/.nvm/versions/node/v15.14.0/bin/node',
    '/usr/local/bin/webpack',
    '--config',
    'webpack.config.js'
  ],
  execArgv: [],
  pid: 35053,
  ppid: 34693,
  execPath: '/Users/cheng/.nvm/versions/node/v15.14.0/bin/node',
  debugPort: 9229,
  hrtime: [Function: hrtime] { bigint: [Function: hrtimeBigInt] },
  argv0: 'node',
  _preload_modules: [],
  mainModule: Module {
    id: '.',
    path: '/Users/cheng/.config/yarn/global/node_modules/webpack/bin',
    exports: {},
    filename: '/Users/cheng/.config/yarn/global/node_modules/webpack/bin/webpack.js',
    loaded: true,
    children: [ [Module], [Module] ],
    paths: [
      '/Users/cheng/.config/yarn/global/node_modules/webpack/bin/node_modules',
      '/Users/cheng/.config/yarn/global/node_modules/webpack/node_modules',
      '/Users/cheng/.config/yarn/global/node_modules',
      '/Users/cheng/.config/yarn/node_modules',
      '/Users/cheng/.config/node_modules',
      '/Users/cheng/node_modules',
      '/Users/node_modules',
      '/node_modules'
    ]
  },
}
```

从上面我们可以看到env变量
```sh
{
  USER: 'cheng',
  PATH: '/Users/cheng/.autojump/bin:/Users/cheng/.autojump/bin:/Users/cheng/.nvm/versions/node/v15.14.0/bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:/Users/cheng/.autojump/bin:/Users/cheng/.nvm/versions/node/v15.14.0/bin',
  LOGNAME: 'cheng',
  SSH_AUTH_SOCK: '/private/tmp/com.apple.launchd.23sRj7uUxB/Listeners',
  HOME: '/Users/cheng',
  SHELL: '/bin/zsh',
  __CF_USER_TEXT_ENCODING: '0x1F5:0x19:0x34',
  TMPDIR: '/var/folders/p2/cn9jx_j10dg_xnr90k64cszr0000gn/T/',
  XPC_SERVICE_NAME: '0',
  XPC_FLAGS: '0x0',
  ORIGINAL_XDG_CURRENT_DESKTOP: 'undefined',
  SHLVL: '1',
  PWD: '/Users/cheng/Github/webpack-test',
  OLDPWD: '/Users/cheng/Github/webpack-test',
  ZSH: '/Users/cheng/.oh-my-zsh',
  NVM_DIR: '/Users/cheng/.nvm',
  NVM_CD_FLAGS: '-q',
  NVM_BIN: '/Users/cheng/.nvm/versions/node/v15.14.0/bin',
  NVM_INC: '/Users/cheng/.nvm/versions/node/v15.14.0/include/node',
  PAGER: 'less',
  LESS: '-R',
  LSCOLORS: 'Gxfxcxdxbxegedabagacad',
  AUTOJUMP_SOURCED: '1',
  AUTOJUMP_ERROR_PATH: '/Users/cheng/Library/autojump/errors.log',
  TERM_PROGRAM: 'vscode',
  TERM_PROGRAM_VERSION: '1.55.2',
  LANG: 'zh_CN.UTF-8',
  COLORTERM: 'truecolor',
  VSCODE_GIT_IPC_HANDLE: '/var/folders/p2/cn9jx_j10dg_xnr90k64cszr0000gn/T/vscode-git-82c20a0e31.sock',
  GIT_ASKPASS: '/Applications/Visual Studio Code.app/Contents/Resources/app/extensions/git/dist/askpass.sh',
  VSCODE_GIT_ASKPASS_NODE: '/Applications/Visual Studio Code.app/Contents/Frameworks/Code Helper (Renderer).app/Contents/MacOS/Code Helper (Renderer)',
  VSCODE_GIT_ASKPASS_MAIN: '/Applications/Visual Studio Code.app/Contents/Resources/app/extensions/git/dist/askpass-main.js',
  TERM: 'xterm-256color',
  _: '/usr/local/bin/webpack'
}
```