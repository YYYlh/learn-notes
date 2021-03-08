function compact(array: any[]): any[] {
    let index = 0
    let result = []

    for (let item of array) {
        if(item) {
            result[index++] = item
        }
    }

    return result
}
console.log(compact([1, 0, false, 2, '', NaN, null, 3, undefined]));
