// 系统中被唯一使用
// 一个类只有一个实例

class SingleObject {
    private static instance = null;
    static getInstance() {
        if (this.instance === null) {
            this.instance = new SingleObject();
        }
        return this.instance
    }
}

let singleObject1 = SingleObject.getInstance();
let singleObject2 = SingleObject.getInstance();

console.log(singleObject1 === singleObject2); // true