let fs = require('fs')

fs.readFile("hello.txt", { flag: "r", encoding: "utf-8" }, function (err, data) {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
    lcEvent.emit('fileSuccess', data)
  }
})

let lcEvent = {
  event:{},
  on: function (eventName, eventFn) {
    if (this.event[eventName]) {
      this.event[eventName].push(eventFn)
    } else {
      this.event[eventName] = []
      this.event[eventName].push(eventFn)
    }
  },
  emit:function (eventName, eventMsg) {
    if (this.event[eventName]) {
      this.event[eventName].forEach(itemFn => {
        itemFn(eventMsg)
      });
    }
  }
}

lcEvent.on('fileSuccess', function (eventMsg) {
  console.log('1.数据库查看所有用户详细信息');
})
lcEvent.on('fileSuccess', function (eventMsg) {
  console.log('2.统计年龄比例');
})
lcEvent.on('fileSuccess', function (eventMsg) {
  console.log('3.查看所有用户学校信息');
})
