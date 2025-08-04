

// set is the bult-in javascript object that store unique value of an type , primitive and object refrences.

const variable1 = new Set()
variable1.add(1)
variable1.add('hello')
variable1.add({name : 'samuel'})
variable1.add([1,3,4])

console.log(variable1)


// const a = [1,2,3,4,5]
// const b = [3,5,6,7,8]

// const union = new Set([...a ,...b])
// const intersection= new Set([...a].filter(x=>b.has(x)))

// console.log(union)
// console.log(intersection)

// Return Negative even number is positive number


function negativePostive(num){
    if(num<0){
        return num
    }
    return num*(-1)
}

console.log(negativePostive(5))

// Square Every Digit

function squareDigits(num){
  
  const squareDigits= num.toString().split('')
  const result= squareDigits.map(e=>e*e).join('') 
  
  return Number(result)
}

// Map

const obj = new Map()

 obj.set  ('user',{
    name : 'samuel',
    name : 'samuel',
    age : 34,
    years : 2005

})

console.log(obj)



