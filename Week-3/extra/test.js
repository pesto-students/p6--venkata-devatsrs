// IIFE  (Immediately Invoked Function Expression)
for (var i = 0; i < 3; i++) {
    setTimeout(
      (
        function(i){
            return function(){ console.log(i); }; // this function will return to setTimeout call back function.
        }
        
      )(i),

      1000
    );
}


return ;
for (var i = 0; i < 3; i++) {
  setTimeout(     // TypeError [ERR_INVALID_CALLBACK]: Callback must be a function. Received undefined
    (function (i) {
      console.log(i);
    })(i),
    1000
  );
}

return;

function log_(i) {
  console.log(i);
}
for (var i = 0; i < 3; i++) {
  setTimeout(function (i) {
    log_(i);
  }, 1000);
}

return;

// ! ES5 Solutio9n
for (var i = 0; i < 3; i++) {
  console.log(i);
  setTimeout(function log(i) {
    console.log(i);
  }, 1000);
}
// undefined
// undefined
// undefined

return;

// ! ES6
for (let i = 0; i < 3; i++) {
  // using let i becomes block level;
  setTimeout(function log() {
    console.log(i);
  }, 1000);
}
// 0
// 1
// 2

return;
// ! ES5
for (var i = 0; i < 3; i++) {
  setTimeout(function log() {
    console.log(i);
  }, 1000);
}
// 3
// 3
// 3

return;

console.log(undefined == null); // true -> one of value type is promoted or demoted to be same
console.log(undefined === null); // false
console.log(1 == true); // true
console.log(1 === true); // false
console.log(0 == false); // true
console.log("" == false); // true
console.log("1" == true); // true

return;

// ! Implicit Coercion
console.log("3" * 4); //12  -> because cant do multiply operation on string

// ! Auto boxing using Implicit Coercion
// boxes to Object and found length
// Strig is not an object so it should not have a length property
// here string is converted to object and length is found and turn back to a string
console.log("abcd".length); // 4

// ! Explicit Type casting
const a = parseInt("3", 10);
const b = parseInt("4", 10);
console.log(a * b); // 12

return;

// ! Dynamic Type checking
console.log(10 + "20"); // 1020
console.log(10 + Number("20")); // 30
console.log(10 + 20); // 30

return;

// NaN
console.log(NaN + 1); // NaN
console.log(NaN === NaN); // false because NaN !== NaN
console.log([1, 2, NaN, 3].indexOf(3)); // 3
console.log([1, 2, NaN, 3].indexOf(NaN)); // -1

//isNaN
console.log(isNaN(undefined)); // true

//To Number
console.log(Number(56), typeof Number(56)); // 56 number
console.log(Number(null), typeof Number(null)); // 0 number
console.log(Number(""), typeof Number("")); // 0 number
console.log(Number("56abc"), typeof Number("56abc")); // NaN number
console.log(Number(true), typeof Number(true)); // 1 number
console.log(Number(false), typeof Number(false)); // 1 number
console.log(Number(undefined), typeof Number(undefined)); // NaN number

return;

function max(array) {
  let currentMax = -Infinity;
  for (const el of array) {
    if (el > currentMax) {
      currentMax = el;
    }
  }
  return currentMax;
}
console.log(max([2, 3, 5])); // 5
console.log(Infinity + 1); // Infinity
console.log(typeof Infinity); // number
console.log(0.1 + 0.2); // 0.30000000000000004
