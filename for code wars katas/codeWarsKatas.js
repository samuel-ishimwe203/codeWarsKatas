// function quadraticFormula(a, b, c) {

//     const Delta= b**2 - 4*a*c

//     if(Delta<0){
//         return `No real root in this function`;
//     }


//     const x1= (-b+ Math.sqrt(Delta))/(2*a)
//     const x2= (-b- Math.sqrt(Delta))/(2*a)

// return `The x1 is : ${x1} and x2 is : ${x2}`;
// }

// console.log(quadraticFormula(1,4,2))


// //Organise duplicate numbers in list

// function group(numbers) {
//   return numbers.reduce((result, num) => {
   
//     let existingGroup = result.find(group => group[0] === num);
    
//     if (existingGroup) {
//       existingGroup.push(num);
//     } else {
//       result.push([num]); 
//     }
    
//     return result;
//   }, []);
// }
//  console.log(group([1,2,3,4,5,3,2]))



 // Calculate how many times a number can be divided by a given number.

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
console.log(divisions(40, 2))


//You probably know the "like" system from Facebook and other pages. People can "like" blog
//  posts, pictures or other items. We want to create the text that should be displayed next 
// to such an item.Implement the function which takes an array containing the names of people that like an item. 
// It must return the display text as shown in the examples:


function likes(names) {
 let lengt = names.length
  if(lengt ===0){
      
      return `no one likes this`
  }
     else if (lengt===1){
         return names[0]+ ' likes this'
     }
      else if (lengt===2){
         return `${names[0]} and ${names[1]} like this`
     }
     else if (lengt===3){
         return `${names[0]}, ${names[1]} and ${names[2]} like this`
     }
     
     else{
         return `${names[0]}, ${names[1]} and ${lengt-2} others like this`
         
     }
  

}
