class RealImg {
    constructor(fileName) {
        this.fileName = fileName;
    }
    loadImg() {
        console.log(`loading...${this.fileName}`);
    }
    dispay() {
        console.log(`get${this.fileName}`);
    }
}

class ProxyImg {
    constructor(fileName) {
        this.realImg = new RealImg(fileName);
    }
    dispay() {
        this.realImg.dispay();
    }
}

const proxyImg = new ProxyImg('一份色图.png');
proxyImg.dispay(); // get一份色图.png

// es6 proxy
let star = {
    name: '沈月',
    age: 22,
    phone: '176738471347'
};

let agent = new Proxy(star, {
    get(target, key) {
        if (key === 'phone') {
            return '17671430910'
        }
        if (key === 'price') {
            return 500000
        }
        return target[key];
    },
    set(target, key, val) {
        if (key === 'customPrice') {
            if (val < 400000) {
                throw new Error('你出的价格太低');
            } else {
                target[key] = val;
                return true;
            }
        }
    }
});
console.log(agent.phone); // 17671430910
console.log(agent.price); // 500000
try {
    agent.customPrice = 300000;
} catch (error) {
    console.log(error); // Error: 你的出价太低（你不配）
}
agent.customPrice = 5000000;
console.log(agent.customPrice); // 500000