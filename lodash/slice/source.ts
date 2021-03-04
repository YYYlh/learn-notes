function slice(array: Array<any>, start: number, end: number): Array<any> {
    let length = array.length
    if (start < 0) {
        start = -start > length ? 0 : (length + start)
    }

    end = end > length ? length : end
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

export default slice