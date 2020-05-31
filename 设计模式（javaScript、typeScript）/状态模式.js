// 一个对象有状态变化
// 每次状态变化都会触发一个逻辑

class State {
    constructor(color) {
        this.color = color;
    }
    handle(content) {
        // 在这里状态发生了改变
        content.setState(this.color);
    }
}

class Content {
    constructor() {
        this.state = null;
    }
    setState(state) {
        this.state = state;
    }
    getState() {
        return this.state;
    }
}

const content = new Content();

const red = new State('red');
const yellow = new State('yellow');
const green = new State('green');

red.handle(content);

console.log(content.getState()); // red