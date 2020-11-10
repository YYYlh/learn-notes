var _ = require('lodash')

// _.isObject(value)

console.log(_.isObject({})) // true
console.log(_.isObject([])) // true
console.log(_.isObject(null)) // true
console.log(_.isObject(() => {})) // true
console.log(_.isObject(123)) // false