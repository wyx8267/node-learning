const { rejects } = require("assert");
let events = require("events");
let fs = require("fs");

let emitEvent = new events.EventEmitter();

emitEvent.on("hello", function (eventMsg) {
  console.log('1.Eden');
  console.log(eventMsg);
})
emitEvent.on("hello", function () {
  console.log('2.GreyStone');
})
emitEvent.on("hello", function () {
  console.log('3.ErTrackSimuator');
})
emitEvent.on("hello", function () {
  console.log('4.Fatorio');
})

function lcReadFile(path) {
  return new Promise(function(resolve, reject){
    fs.readFile(path, { encoding: "utf-8" }, function (err, data) {
      if (err) {
        // console.log(err);
        reject(err)
      } else {
        // console.log(data);
        resolve(data)
        // emitEvent.emit("hello", data);
      }
    })
  })
}

lcReadFile("hello.txt").then(function (data) {
  emitEvent.emit("hello", data);
})

async function test() {
  let data = await lcReadFile("hello.txt")
  emitEvent.emit("hello", data);
}
test()