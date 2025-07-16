
// write the function that return reversed each strings 

const reversedString=(str)=>{
    const returnArray=str.split(' ').map(ele=>ele.split('').reverse().join('')).join(' ')
      return returnArray
   
  
}

console.log(reversedString('hello world'))