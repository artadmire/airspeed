> 目的：高效率完成前端业务代码

业务开发过程中，会经常用到`日期格式化`、`url参数转对象`、`浏览器类型判断`、`节流函数`等常用函数，为避免不同项目多次复制粘贴的麻烦，这里统一封装，并发布到npm，以提高开发效率。如果你也有常用的代码，欢迎为本项目提交pr。

## :building_construction:  安装使用

1. 直接下载`min`目录下的[my-outils.min.js](https://github.com/artadmire/my-outils/tree/main/min)使用，支持UMD通用模块规范  
2. 使用npm安装

### 浏览器:
``` html
  <script src="my-outils.min.js"></script>
  <script>
      var is = window['my-outils'].isEmptyObject()
  </script>
```

### npm:
``` bash
$ npm install --save-dev my-outils
```

webpack、RequireJS、SeaJS等

``` javascript
// 完整引入
const outils = require('my-outils')
const a = outils.isEmptyObject({})
```

**推荐使用方法**  

你真的不需要完整引入所有函数，所以只引入需要使用的方法即可。
``` javascript
// 只引入部分方法('my-outils/<方法名>')
const isEmptyObject = require('my-outils/isEmptyObject')
const a = isEmptyObject({})
```
