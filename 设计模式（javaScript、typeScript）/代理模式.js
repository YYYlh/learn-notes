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