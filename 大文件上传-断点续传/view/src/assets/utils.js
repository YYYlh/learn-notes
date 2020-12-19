export const readFile = (file, type = 'buffer') => {
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader()
        if (type === 'buffer') {
            fileReader.readAsArrayBuffer(file)
        }
        fileReader.onload = function(e) {
            resolve(e.target.result)
        }
    })
}