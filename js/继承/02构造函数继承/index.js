// 本质：在子类的构造函数通过call/apply调用父类的构造函数来实现继承
// 缺点：1.无法通过instanceof测试
//      2.不能继承父类原型上的方法
function ParentUser(username, password) {
    this.username = username
    this.password = password
    ParentUser.prototype.login = function() {
        console.log(`${this.username}的登录密码为${this,password}`);
    }
}

function ChildUser(username, password) {
    ParentUser.call(this, username, password)
}

const user1 = new ChildUser('liuhao', 'liuhao12345')

console.log(user1.username, user1.password)
console.log(user1 instanceof ParentUser) // 无法通过instanceof测试
console.log(user1.login()) // 不能继承父类原型上的方法