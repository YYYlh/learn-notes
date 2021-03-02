function slice(array: Array<any>, start: number, end: number): Array<any> {
    let length = array.length
    if (start < 0) {
        start = -start > length ? 0 : (length + start)
    }
    if (end < 0) {
        end += length
    }
    length = start > end ? 0 : (end - start)

    let index = -1
    const result = new Array(length)
    while(++index < length) {
        result[index] = array[index + start]
    }
    return result
}

// test
let array = [1,2,3,4,5]
console.log(slice(array, 1, -2));