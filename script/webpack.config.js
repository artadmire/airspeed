const path = require('path');

const pkg = require('../package.json');

const rootPath = path.resolve(__dirname, '../');

const config = {
  mode: 'production',
  entry: path.resolve(rootPath,'src', 'index.js'),
  output: {
    filename: `${pkg.name}.min.js`,
    path: path.resolve(rootPath, 'min'),
    library: 'myOutils',
    libraryTarget: "umd" //  支持CommonJS、AMD, 全局对象
  },
  module: {
    rules: [{
        test: /\.js$/,
        loader: "babel-loader" // 处理js文件 Babel 是一个 JavaScript 编译器。（把浏览器不认识的语法，编译成浏览器认识的语法。）
    }]
  }
}

module.exports = config;

