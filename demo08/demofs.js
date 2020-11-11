let fs = require('fs');

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

function fsWrite(path, content) {
  return new Promise(function (resolve, reject) {
    fs.writeFile(path, content, { flag: 'a', encoding: 'utf-8' }, function (err) {
      if (err) {
        // console.log('Error!');
        reject(err)
      } else {
        // console.log('Success!');
        resolve(err)
      }
    })
  })
}

function fsDir(path) {
  return new Promise(function (resolve, reject) {
    fs.mkdir(path, function (err) {
      if (err) {
        reject(err)
      } else {
        resolve('创建目录成功')
      }
    })
  })
}

module.exports = {
  fsRead, fsWrite, fsDir
}