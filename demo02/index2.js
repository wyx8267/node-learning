let a = 123
let b = 456
let c = 789
let s1 = {username: 'team s'}
console.log(s1)

// exports 就是默认导出对象
exports.a = a;
module.exports.c = c;
// 系统默认设置了 exports = module.exports
// exports = { user: 'mirai' }
// module.exports = { user: 'mirai' }
// 系统默认以module.exports为准

// exports只能单个设置属性exports.a = a;
// module.exports可以设置单个属性，也可以整个对象赋值并覆盖

module.exports = s1