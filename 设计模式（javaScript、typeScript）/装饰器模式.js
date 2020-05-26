// 为对象添加新功能
// 不改变其原有的结构和功能

// 原有对象
class Circle {
    darw() {
        console.log('画一个圆');
    }
}

// 装饰器
class Decorator {
    constructor(circle) {
        this.circle = circle;
    }
    // 保持原有功能
    darw() {
        this.circle.darw();
        // 装饰新功能
        this.setRedBorder();
    }
    // 添加新功能
    setRedBorder(circle) {
        console.log('设置为红色边框');
    }
}

const circle = new Circle();
circle.darw(); // 画一个圆

const dec = new Decorator(circle);
dec.darw(); // 画一个圆 // 设置为红色边框