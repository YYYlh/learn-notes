let a = [1,2,3]
function b (arr) {
    arr[0] = 10
}
b(a)
console.log(a);

function changeAgeAndReference (person) {
    person.age = 25
    person = {
        name: 'John',
        age: 25
    }
    return person
}

var persionObj1 = {
    name: 'Alex',
    age: 30
}

var persionObj2 = changeAgeAndReference(persionObj1)

console.log(persionObj1);
console.log(persionObj2);