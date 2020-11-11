let fs = require('fs');

fs.rmdir('aaa', function () {
  console.log('Delete success!');
})