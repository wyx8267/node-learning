let fs = require('fs')

// 创建写入流
let ws = fs.createWriteStream('output.txt', { flags: 'w', encoding: 'utf-8' });
// console.log(ws);

ws.on('open', function () {
  console.log('File opened.');
})

ws.on('ready', function () {
  console.log('File is ready.');
})

ws.on('close', function () {
  console.log('File closed.');
})

ws.write("Lahee~ Doh e pe ri la do ha\n", function (err) {
  if (err) {
    console.log('1 Output failed.');
  } else {
    console.log('1 Output success.');
  }
})
ws.write("Bibobobibobi\n", function (err) {
  if (err) {
    console.log('2 Output failed.');
  } else {
    console.log('2 Output success.');
  }
})

ws.end(function () {
  console.log('Write finished.');
})