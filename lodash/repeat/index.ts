// 简单版本
function repeat1(str: string, items: number) {
    let result = ''
    while(items--) {
        result += str
    }
    return result
};

// console.log(repeat1('6', 3))

// 优化版本
function repeat2(str: string, items: number) {
    let result = ''
    if (str === '' || items < 1) {
        return ''
    }
    do {
        if (items % 2) {        
            result += str
        }
        items = Math.floor(items / 2)
        if (items) {
            str += str
        }
    } while(items)
    return result
}
console.log(repeat2('6', 101))