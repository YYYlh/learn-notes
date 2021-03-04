import slice from '../slice/source'

function chunk(array: Array<any>, size: number = 1): Array<Array<any>> {
    size = Math.max(size, 0)
    const length = array.length
    
    if (size < 1) {
        return []
    }

    let index = 0
    let resIndex = 0
    const result = new Array(Math.ceil(length / size))

    while(index < length) {
        result[resIndex++] = slice(array, index, index += size)
    }
    return result
}

export default chunk
