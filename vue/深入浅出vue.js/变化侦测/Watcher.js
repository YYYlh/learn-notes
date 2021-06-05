export default class Watcher {
    constructor(vm, expOrFn, cb) {
        this.vm = vm
        this.cb = cb
        this.deps = []
        this.depIds = new Set()
        this.getter = parsePath(expOrFn)
        this.value = this.get()
    }

    get() {
        window.target = this
        let value = this.getter.call(this.vm, this.vm.data)
        window.target = undefined
        return value
    }

    update() {
        const oldValue = this.value
        this.value = this.get()
        this.cb.call(this.vm, this.value, oldValue)
    }

    addDep(dep) {
        const uid = dep.uid
        if (!this.depIds.has(uid)) {
            this.deps.push(dep)
            dep.addSub(this)
        }
    }
}

const bailRe = /[^\w.$]/
function parsePath(path) {
    if (bailRe.test(path)) {
        return
    }
    const segments = path.split('.')
    return function(obj) {
        for (let i = 0; i < segments.length; i++) {
            if (!obj) {
                return
            }
            obj = obj[segments[i]]
        }
        return obj
    }
}