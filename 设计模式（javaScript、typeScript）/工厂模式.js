// 将new操作符单独封装
// 遇到new时， 就要考虑是否使用工厂模式


class Product {
    constructor(text) {
        this.text = text;
    }

    say() {
        console.log(this.text);
    }
}

function Factory(text) {
    return new Product(text);
}

const product = Factory('我是通过工厂生产出来的一个产品类');

product.say(); // 我是通过工厂生产出来的一个产品类