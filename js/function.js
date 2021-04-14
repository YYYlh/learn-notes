function func(name = 'liuhao') {
    name = '1' // 不会修改arguments里的值
    console.log(arguments); // arguments 不保存默认值
}

func()
func('lisi')

// 0 1 1 2 3 5 8

function fbImpl(a, b, n) {
    if (n === 0) {
        return a
    }
    return fbImpl(b, a + b, --n)
}

function fb(n) {
    return fbImpl(0, 1, n)
}

console.log(fb(7));