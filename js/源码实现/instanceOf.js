let a = new Array()

function myInstanceof(left, right) {
    let proto = left.__proto__
    let prototype = right.prototype
    while (true) {
        if (proto === null) return false
        if (proto === prototype) return true
        proto = proto.prototype
    }
}

const myInstanceof1 = (left, right) => left.__proto__ === null ? false : left.__proto__ === right.prototype ? true : myInstanceof1(left.__proto__, right)
console.log(myInstanceof(a, Array));
console.log(myInstanceof1(a, Array));

