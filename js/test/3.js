let a = {
    [Symbol.iterator]: () => {
        const items = ['h', 'e', 'l', 'l', 'o']
        return {
            next() {
                return {
                    done: items.length === 0,
                    value: items.shift()
                }
            }
        }
    }
}

for (let i of a) {
    console.log(i);
}