const cheerio = require('cheerio');
// 获取HTML文档内容，操作与jQuery一样
const axios = require('axios');
const fs = require('fs')
const path = require('path')

let httpUrl = "https://www.doutula.com/article/list/?page=1"

spider()

async function spider() {
  let allPageNum = await getNum();
  for (let i = 1; i <= 5; i++){
    parseList(i)
  }
}

// 获取总页数
async function getNum() {
  let res = await axios.get(httpUrl);
  let $ = cheerio.load(res.data);
  let btnLength = $('.pagination li').length;
  let totalPage = $('.pagination li').eq(btnLength - 2).find('a').text()
  return totalPage;
}

async function parseList(pageNum) {
  let httpUrl = "https://www.doutula.com/article/list/?page=" + pageNum
  let res = await axios.get(httpUrl)
  // console.log(res.data)
  let $ = cheerio.load(res.data)
  $('#home .col-sm-9>a').each((i, element) => {
    // console.log($(element).attr('href'));
    let pageUrl = $(element).attr('href');
    let title = $(element).find('.random_title').text();
    let reg = /(.*?)\d/igs
    title = reg.exec(title)[1]
    fs.mkdir('./img/' + title, function (err) {
      if (err) {
        // console.log(err);
      } else {
        console.log('mkdir:' + title);
      }
    });
    parsePage(title, pageUrl)
  })
}


async function parsePage(title, url) {
  let res = await axios.get(url)
  let $ = cheerio.load(res.data)
  // console.log(title);
  $('.pic-content img').each((i, element) => {
    let imgUrl = $(element).attr('src')
    let ext = path.extname(imgUrl)
    let imgPath = `img/${title}/${title}-${i}${ext}`
    console.log(imgPath);
    // 创建写入图片流
    let ws = fs.createWriteStream(imgPath)
    axios.get(imgUrl, {
      responseType: 'stream'
    }).then(() => {
      res.data.pipe(ws)
      console.log('success:' + imgPath);
      res.data.on('close', function () {
        ws.close()
      })
    })
  })
}