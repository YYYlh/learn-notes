// ! js中函数的传参都是值传递

// function change(p) {
//     p.name = 'liuhao'
// }
// let person = {
//     name: '张三'
// }
// change(person)
// console.log(person)

function change(p) {
    p = {
        name: '刘浩'
    }
}
let person = {
    name: '张三'
}
change(person)
console.log(person)