var name = '小红'

function a() {
    var name = '小白'
    console.log(this.name)
}

function d (i) {
    return i()
}

var b = {
    name: '小黄',
    detail: function() {
        console.log(this.name)
    },
    bibi: function() {
        return function() {
            console.log(this.name)
        }
    }
}

var c = b.detail
b.a = a
var e = b.bibi()
a() // 小红
c() // 小红
b.a() // 小黄
d(b.detail) // 小红
e() // 小红
