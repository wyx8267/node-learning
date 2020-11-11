var fs = require('fs');
// 导入文件模块
// node，读写文件也有同步和异步的接口

// 同步
// var fd = fs.openSync('./hello.txt', "r")
// console.log(fd)
// 输出：3 （在内存打开的位置）
// var buf = Buffer.alloc(20)
// var content = fs.readSync(fd, buf, 0, 20, 0)
// var content = fs.readFileSync('hello.txt', { flag: 'r', encoding: 'utf-8' })
// console.log(content)

// 异步
// fs.readFile('hello.txt', { flag: 'r', encoding: 'utf-8' }, function (err, data) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data); //2
//   }
//   console.log('mirai'); //3
// })
// console.log(327); //1

// 封装
function fsRead(path) {
  return new Promise(function (resolve, reject) {
    fs.readFile(path, { flag: 'r', encoding: 'utf-8' }, function (err, data) {
      if (err) {
        reject(err)
      } else {
        resolve(data)
      }
    })
  })
}

var file1 = fsRead('hello.txt')
file1.then(function (res) {
  console.log('file1');
  console.log(res);
})

async function readList() {
  var file2 = await fsRead('hello.txt');
  var file3 = await fsRead(file2 + '.txt');
  var file3Content = await fsRead(file3 + '.txt')
  console.log(file3Content);
}
readList()