import a from './a'

a()
function test() {
    console.log('test')
}

test()

let c = [1,2,3]
c.find(item => item & 1 === 0)
console.log(c);