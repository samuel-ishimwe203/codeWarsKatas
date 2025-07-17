
// find the multiples of given number and specifiy the limit

const multiplesOfAnyNumber=(n,limit)=>{
     let answer=[]
     for(let i=n;i<=limit;i+=n){
        answer.push(i)
     }
     return answer
}

console.log(multiplesOfAnyNumber(4,20))
