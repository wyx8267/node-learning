let a = require('./index2')
// 1 在没有任何内容导出的情况下获取某个文件的内容，会得到一个空对象
// 2 require获取文件路径时，默认后缀js，可不加

let b = require('./index2')
console.log('a',a)
console.log('b', b)
console.log(a == b)
// 模块仅在第一次被使用时执行一次