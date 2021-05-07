const obj = {
}


let nameVal = ''
Object.defineProperty(obj, 'name', {
    enumerable: true,
    set(value) {
        console.log('set发生了变化', value);
        nameVal = value + 1
    },
    get() {
        console.log('get');
        return nameVal
    }
})


let p = Object.create(obj)

p.name = 1
console.log(p);
console.log(p.name);
console.log(p.__proto__);