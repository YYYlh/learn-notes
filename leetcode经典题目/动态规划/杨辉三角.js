function generate(numRows) {
    let result = []
    if (numRows === 0) {
        return result
    }
    result[0] = [1]
    for(let rowNum = 1; rowNum < numRows; rowNum++) {
        let row = [1]
        let prevRow = result[rowNum - 1]
        for (let j = 1; j < rowNum; j++) {
            row.push(prevRow[j - 1] + prevRow[j])
        }
        row.push(1)
        result.push(row)
    }
    return result
}
generate(5)