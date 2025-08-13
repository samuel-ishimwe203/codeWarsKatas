//Given an array of numbers and an index, return either the index of the smallest 
// number that is larger than the element at the given index, or -1 if there is no
//  such index ( or, where applicable, Nothing or a similarly empty value ).


function leastLarger(a,i) {
    let indeOfA=a[i]
    let position =-1;
    for(let x=0; x<=a.length;x++){
        if(a[x]>indeOfA){
            if(position===-1 || a[x]<a[position]){
                position=x
            }
        }
    }
    
    
  return position;
}

console.log(leastLarger( [4, 1, 3, 5, 6], 0 ))