// 本质：重写子类的原型，代之以父类的实例
// 缺点：1.如果子类修改了父类的公共属性则会影响到所有的子类
//      2.无法向父类的构造函数传递参数
// 父类
function ParentUser(userName) {
    this.userName = userName ? userName : 'Unknown'
    this.book = ['c++从入门到入土', 'mySql从入门到删库']
    ParentUser.prototype.read = function() {
        console.log(`${this.userName}最喜欢看的书是：${this.book.join('/')}`)
    }
}
// 子类
function ChildUser(userName) {
    if (userName) {
        this.userName = userName
    }
}
ChildUser.prototype = new ParentUser()

let user1 = new ChildUser('liuhao')
let user2 = new ChildUser('张三')
console.log(user1 instanceof ChildUser)
console.log(user1 instanceof ParentUser)
user1.read()
user2.read()
user1.book.push('金瓶梅') // 父类的属性被修改会影响所有子类
user1.read()
user2.read()