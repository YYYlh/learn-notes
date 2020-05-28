// 按顺序访问一个集合（数组）

// 迭代器类
class MyIterator {
    constructor(target) {
        this.list = target.list;
        this.index = 0;
    }
    next() {
        if (this.hasNext()) {
            return { key: this.index, value: this.list[this.index++] }
        } else {
            return null;
        }
    }
    hasNext() {
        const len = this.list.length;
        let result = null;
        this.index < len ?  result = true : result = false;
        return result;
    }
}

// 将需要迭代的集合放入迭代器中并生成一个迭代器
class Container {
    constructor(list) {
        this.list = list;
    }
    // 生成迭代器
    getIterator() {
        return new MyIterator(this);
    }
}

let arr = [0,1,2,3,4];

const container = new Container(arr);
const itreator = container.getIterator();

while(itreator.hasNext()) {
    console.log(itreator.next())
}
//  { key: 0, value: 0 }
//  { key: 1, value: 1 }
//  { key: 2, value: 2 }
//  { key: 3, value: 3 }
//  { key: 4, value: 4 }