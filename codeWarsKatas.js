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