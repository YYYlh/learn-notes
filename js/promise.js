// 简单的pormise实现
class MyPormise {
    constructor(fn) {
        this.fn = fn  
    }
    then(onSuccess, onFaild) {
        this.success = onSuccess
        this.faild = onFaild
        this.fn(this.success, this.faild)
    }
}
new MyPormise((reslove, reject) => {
    setTimeout(() => {
        reslove('23')
    })
    
}).then((result) => {
    console.log(result);
}, (error) => {

})