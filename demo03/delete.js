let fs = require('fs');

fs.unlink('demoon.txt', function () {
  console.log('Delete!');
})