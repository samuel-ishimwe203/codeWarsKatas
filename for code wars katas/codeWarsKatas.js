function quadraticFormula(a, b, c) {

    const Delta= b**2 - 4*a*c

    if(Delta<0){
        return `No real root in this function`;
    }


    const x1= (-b+ Math.sqrt(Delta))/(2*a)
    const x2= (-b- Math.sqrt(Delta))/(2*a)

return `The x1 is : ${x1} and x2 is : ${x2}`;
}

console.log(quadraticFormula(1,4,2))


//Organise duplicate numbers in list

function group(numbers) {
  return numbers.reduce((result, num) => {
   
    let existingGroup = result.find(group => group[0] === num);
    
    if (existingGroup) {
      existingGroup.push(num);
    } else {
      result.push([num]); 
    }
    
    return result;
  }, []);
}
 console.log(group([1,2,3,4,5,3,2]))



 
function divisions(n, devisor){
  let remeinder = n / devisor
  const arr = []
  while(remeinder > 1){
    if(remeinder >=1){
      arr.push(remeinder)
    }
    n = Math.ceil(remeinder)
    remeinder = n /devisor
  }
  if(arr.length <1){
    return 0
  }else{
    return arr.length
  }
}
console.log(divisions(4, 3))
