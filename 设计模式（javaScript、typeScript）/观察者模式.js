// 发布&订阅
// 一对多


// 主题（被观察的对象）
class Subject {
    constructor() {
        this.state = 0;
        this.obervers = [];
    }
    getState() {
        return this.state;
    }
    setState(state) {
        this.state = state;
        // 当状态改变时需要通知观察者
        this.notifyAllObserver();
    }
    notifyAllObserver() {
        // 通知观察者作出更新
        this.obervers.forEach((observer) => {
            observer.update();
        });
    }
    // 添加观察者
    attach(oberver) {
        this.obervers.push(oberver);
    }
}

// 观察者
class Observer {
    constructor(name, subject) {
        this.name = name;
        this.subject = subject;
        // 将自己与自己所观察的东西绑定
        this.subject.attach(this);
    }
    update() {
        console.log(`${this.name}所观察的数据发生了改变, 变为${this.subject.getState()}`);
    }
}

const subject = new Subject();

const oberver1 = new Observer('我是第一个观察者', subject);
const oberver2 = new Observer('我是第二个观察者', subject);

subject.setState(2); // 我是第一个观察者所观察的数据发生了改变, 变为2; 我是第二个观察者所观察的数据发生了改变, 变为2