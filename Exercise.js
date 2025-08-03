

// set is the bult-in javascript object that store unique value of an type , primitive and object refrences.

const variable1 = new Set()
variable1.add(1)
variable1.add('hello')
variable1.add({name : 'samuel'})
variable1.add([1,3,4])

console.log(variable1)


const a = [1,2,3,4,5]
const b = [3,5,6,7,8]

const union = new Set([...a ,...b])
const intersection= new Set([...a].filter(x=>b.has(x)))

console.log(union)
console.log(intersection)