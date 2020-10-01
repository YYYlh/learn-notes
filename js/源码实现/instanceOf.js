let a = new Array()

function myInstanceof(left, right) {
    let proto = left.__proto__
    console.log(right);
    let prototype = right.prototype
    while (true) {
        if (proto === null) return false
        if (proto === prototype) return true
        proto = proto.prototype
    }
}
console.log(myInstanceof(a, Array));

