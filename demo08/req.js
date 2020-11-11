// let axios = require('axios')
let request = require('request')
let fs = require('fs')
let {fsRead, fsWrite, fsDir} = require('./demofs')
// console.log(axios);

let httpUrl = "https://www.1905.com/vod/list/n_1_t_1/o3p1.html"
// let httpUrl = "https://api.apiopen.top/getJoke?page=1&count=10&type=image"

function req(url) {
  return new Promise(function (resolve, reject) {
    request.get(url, function (err, response, body) {
      if (err) {
        reject(err)
      } else {
        resolve({
          response,
          body
        })
      }
    })
  })
}

// axios.get(httpUrl, {
//   header: {
//     'X-Requested-With': 'XMLHttpRequest'
//   }
// }).then(function (res) {
//   console.log(res);
// })

// 获取起始页码的所有分类地址
async function getClassUrl() {
  let {
    response,
    body
  } = await req(httpUrl)
  // console.log(body);
  let reg = /<span class="search-index-L">类型(.*?)<div class="grid-12x">/igs
  let result = reg.exec(body)[1]
  // console.log(result);
  let reg1 = /<a href="javascript\:void\(0\);" onclick="location\.href='(.*?)';return false;".*?>(.*?)<\/a>/igs
  
  // 获取分类里的电影链接
  let arrClass = []
  while (res = reg1.exec(result)) {
    // console.log(res);
    if (res[2] != '全部') {
      let obj = {
        className: res[2],
        url: res[1]
      }
      arrClass.push(obj)

      await fsDir('./movies/' + res[2])
      getMovies(obj.url, obj.className)
    }
  }
  // console.log(arrClass);

}

// 通过分类获取电影链接
async function getMovies(url, type) {
  let {
    response,
    body
  } = await req(url)
  let reg = /<a class="pic-pack-outer" target="_blank" href="(.*?)".*?><img/igs
  let arrList = []
  while (res = reg.exec(body)) {
    // 改进，改为迭代器，提升性能
    arrList.push(res[1])
    parsePage(res[1], type)
  }
  // console.log('分类：',type);
  // console.log(arrList);
}

// 根据电影链接获取电影的详细信息
async function parsePage(url, type) {
  let {
    response,
    body
  } = await req(url)

  let reg = /<div class=".*?playerBox-info-cnName">(.*?)<\/h1>.*?id="playerBoxIntroCon">(.*?)<a.*?导演.*?target="_blank" title="(.*?)" data-hrefexp/igs
  let res = reg.exec(body)
  console.log(res[1]);
  let movie = {
    name: res[1],
    brief: res[2],
    director: res[3],
    movieUrl: url,
    movieType: type
  }
  let strMovie = JSON.stringify(movie)
  fsWrite('./movies/'+type+'/'+res[1]+'.json', strMovie)
}

getClassUrl()