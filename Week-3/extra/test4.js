


var numbers = [5,  6, 7, 8];
// positional arguments
console.log(Math.max(5,  6, 7, 8)); // 8 

//array arguments
console.log(Math.max.apply(null, numbers)); // 8 
// ! Math.max(5,  6, 7, 8)

console.log(Math.min.apply(null, numbers)); // 5

