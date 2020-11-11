function decor(target) {
  console.log(target)
}

// @decor
class User{
  constructor() {
    this.userName = 'Mirai'
    this.password = '123456'
  }
}

var u1 = new User()
console.log(u1)