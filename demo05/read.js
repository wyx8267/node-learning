let fs = require('fs')


// 创建读取流
let rs = fs.createReadStream('output.txt', { flags: 'r', encoding: 'utf-8' });
// console.log(rs);

rs.on('open', function () {
  console.log('File opened.');
})

// 每一批数据流入完成
rs.on('data', function (chunk) {
  console.log(chunk);
  console.log('A piece');
})

rs.on('close', function () {
  console.log('File closed.');
})