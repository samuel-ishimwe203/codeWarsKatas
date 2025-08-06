function onlyDuplicates(str) {
 
    const arr=str.split("").filter(ele=>str.indexOf(ele)!==str.lastIndexOf(ele)).join("")
    return arr
 
  
}
console.log(onlyDuplicates('ishimwesa'))