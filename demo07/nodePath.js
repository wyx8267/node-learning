let path = require('path');
let fs = require('fs');

// console.log(path);

let strPath = "https://file.tapd.cn//tfl/captures/2020-09/tapd_49198478_base64_1599726269_71.png"

console.log('ext',path.extname(strPath));

let arr = ['ff', 'jyzy', 'mjs']
let routeInfo = path.resolve(...arr)
console.log('route',routeInfo);

console.log('__dirname',__dirname);
console.log(path.join(__dirname, ...arr));

let ffStr = "https://ff.sdo.com/ff/erozia.html"

let arrParse = ffStr.split('/').slice(-2)
console.log('arrParse',arrParse);

let filePath = path.join(__dirname, ...arrParse)
console.log('filePath', filePath);
fs.readFile(filePath, { encoding:"utf-8" }, function (err, data) {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
})