// 1. 数组不能进行二进制数据的操作
// 2. js数组不像java,python等语言效率高
// 3. buffer 在内存空间开辟出固定大小的连续内存

var str = 'demoon'
let buf = Buffer.from(str)
// console.log(buf);

// 输出Buffer内容
// console.log(buf.toString());

// 开辟一个空buff（缓存区）
let buf1 = Buffer.alloc(10)
buf1[0] = 5
buf1[2] = 75
buf1[3] = 257
console.log(buf1);

let buf2 = Buffer.allocUnsafe(10)
console.log(buf2);