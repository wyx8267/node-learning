let fs = require('fs');
let {fsRead, fsWrite} = require('./demofs')

const txtPath = 'all.txt'
fs.readdir('../demo03', function (err, files) {
  if (err) {
    console.log(err);
  } else {
    console.log(files);
    files.forEach(async function (filename, i) {
      let content = await fsRead('../demo03/' + filename)
      await fsWrite(txtPath, content)
    })
  }
})