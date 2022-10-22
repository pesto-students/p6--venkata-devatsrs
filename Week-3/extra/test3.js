// ! bind alternative way
function product( a , b , c , d) {
  console.log("a = " , a); // 2 
  console.log("b = " , b); // 10
  console.log("c = " , c); // 4 
  console.log("d = " , d); // 5 
  return a * b ;
}

console.log(product(5,10)); // 50
const doDouble = product.bind(null,2); // a = 2
console.log(doDouble(10)); // b = 10 => a * b = 2 * 10 => 20   

const doDouble2 = product.bind(null,2 , 10); // a = 2 , b= 10
console.log(doDouble2()); // a * b = 2 * 10 => 20   
console.log(doDouble2(4,5)); // => 20 again why ? because 4 => 3rd argument  , 5 => 5th argument so ignored


return ;


let arr = [1, 2, 3];
let numbers = [4, 5, 6];
arr.push.apply(arr, numbers);
console.log(arr);
//[ 1, 2, 3, 4, 5, 6 ]

return;

function isOdd(number) {
    return number % 2;
  }
  
  function getOddNumbers() {
    return Array.prototype.filter.call(arguments, isOdd);
  }
  
  let results = getOddNumbers(10, 1, 3, 4, 8, 9);
  console.log(results); 
  // [ 1, 3, 9 ]

  return 

let person = {
    name: 'John Doe',
    getName: function() {
        console.log(this.name);
    }
};

var unboundedGetNam = person.getName;
unboundedGetNam(); // ! global context 
// undefined

// Solution of above problem
let boundedGetNam = person.getName.bind(person);
boundedGetNam(); //John Doe
var boundgetName = unboundedGetNam.bind(person);
boundgetName();//John Doe


return;



// # bind
function sum(a ,b ) {
    console.log(a, b, this.a, this.b);
    return this.a + this.b ; 
}
console.log(sum());
// ! .bind binds permenently 
const sumB = sum.bind({ a: 10 , b: 20});
const sumC = sumB.bind({ a: 20 , b: 20});
console.log(sumB());
console.log(sumC());
// sum() -> undefined undefined undefined undefined
// sum() -> NaN
// sumB() -> undefined undefined 10 20
// sumB() -> 30
// sumC() -> undefined undefined 10 20
// sumC() -> 30
