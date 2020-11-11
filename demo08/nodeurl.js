let url = require('url')
// console.log(url);

let str = 'http://nodejs.cn/api/os.html?name=eliwa&team=hii#os_os_release'

console.log(url.parse(str));

let targetUrl = "https://www.ffwiki.com/"
let httpUrl = './susu?fish=10497'
console.log(url.resolve(targetUrl, httpUrl))