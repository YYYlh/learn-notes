
// 设置不可枚举属性
export function def(obj, key, val) {
    Object.defineProperty(obj, key, {
        value: val,
        enumerable: false,
        configurable: true,
        writable: true
    })
}