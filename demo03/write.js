let fs = require('fs');
// fs.writeFile('test.txt', '7 senses\n', { flag: 'a', encoding: 'utf-8' }, function (err) {
//   if (err) {
//     console.log('Error!');
//   } else {
//     console.log('Success!');
//   }
// })

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

async function writeList() {
  await fsWrite('demoon.txt', 'Foxyyyyyy\n')
  await fsWrite('demoon.txt', 'O X F O X\n')
}
writeList()