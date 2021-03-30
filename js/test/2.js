function * func () {
    console.log(1);
    const a = yield 1
    console.log(a);
    console.log(2);
}

let fn = func()

console.log(fn.next());
// console.log(fn.next(3));