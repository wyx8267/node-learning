const axios = require('axios');
const fs = require('fs');
const path = require('path');

async function getPage(num) {
  let httpUrl = "http://www.app-echo.com/api/recommend/sound-day?page=" + num
  let res = await axios.get(httpUrl)
  // console.log(res.data.list);
  res.data.list.forEach(function (item, i) {
    let title = item.sound.name
    let songUrl = item.sound.source
    let filename = path.parse(songUrl).name
    // console.log(title, songUrl);
    console.log(path.parse(songUrl));
    // download(title, songUrl)
  });
}

async function download(title, url) {
  let res = await axios.get(url, {
    response: "stream"
  })
  let ws = fs.createWriteStream('./songs/' + title + '.mp3')
  res.data.pipe(ws)
  // res.data.on('close', function () {
  //   ws.close()
  //   console.log(title + '.mp3');
  // })
}

getPage(1)