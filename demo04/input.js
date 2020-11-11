let readline = require('readline');
let {fsWrite} = require('./demofs')

// 实例化接口对象
var r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

// 设置question提问事件
// r1.question('拂晓？', function (answer) {
//   console.log('答复：', answer);
//   r1.close()
// })

function ffQuestion(title) {
  return new Promise(function (resolve, reject) {
    r1.question(title, function (answer) {
      resolve(answer)
    })
  })
}

async function createPackage(){
  let name = await ffQuestion('package name:');
  let description = await ffQuestion('package description:');
  let main = await ffQuestion('package entry:');
  let author = await ffQuestion('package author:');
  
  let content = `
  {
    "name": "${name}",
    "main": "${main}",
    "description": "${description}",
    "author": "${author}",
    "scripts": {
      "test": "echo \\\"Error: no test specified\\\" && exit 1"
    }
  }
  `
  await fsWrite('package.json', content)
  r1.close()
}

createPackage()

r1.on('close', function () {
  process.exit(0);
})