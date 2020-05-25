// 旧接口格式和使用者不兼容
// 中间加一个适配转换接口

// 接口提供类
class Adaptee {
    specificRequests() {
        return '德国标准的插头';
    }
}

// 适配器类
class Target {
    constructor() {
        this.adaptee = new Adaptee();
    }
    request() {
        // 在这里做适配操作
        const info = this.adaptee;
        return `${info.specificRequests()}->中国标准接口`;
    }
}

const target = new Target();

console.log(target.request()); // 德国标准的插头->中国标准接口
