// return the unique number in array of the same element but find the one which is unique to others



function findUniq(arr) {

  let unique = arr.find((item) => arr.indexOf(item) === arr.lastIndexOf(item));
  return unique
  }
console.log(findUniq([1,1,1,2,1,1]));