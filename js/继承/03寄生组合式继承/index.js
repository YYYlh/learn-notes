function Person(name, age, sex) {
    this.name = name
    this.age = age
    this.sex = sex
}
Person.prototype.say = function() {
    console.log(`我叫${this.name}, 今年${this.age}岁了`)
}

function Student(name, age, sex, school) {
    Person.call(this, name, age, sex) // 继承属性
    this.school = school
}

inherit(Student, Person)

Student.prototype.doing = function() {
    console.log('我正在学习')
}

const s1 = new Student('刘浩', '18', '男', '实验')
const p1 = new Person('刘浩', '18', '男')
s1.say()

// 封装继承方法
function inherit(child, parent) {
    const p = Object.create(parent.prototype)
    p.constructor = child
    child.prototype = Object.assign(p, child.prototype)
}