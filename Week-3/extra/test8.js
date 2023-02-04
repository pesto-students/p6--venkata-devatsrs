'use strict';
function fun1(){
    console.log(this);
    return this;
}

console.log(fun1() === undefined); // true and   undefined
console.log(typeof fun1.call(2) === 'number'); // true and  2
console.log(fun1.apply(null) === null); // true and  null
console.log(fun1.call(undefined) === undefined); // true and  undefined
console.log(typeof fun1.bind(true)() === 'boolean'); // true and   true



return;


// sloppy mode
function fun(){
    console.log(this);
    return this;
}

console.log(fun() === global); // true and   //<ref *1> Object [global] {
console.log(typeof fun.call(2) === 'object'); // true and   //[Number: 2]
console.log(fun.apply(null) === global); // true and  //<ref *1> Object [global] {
console.log(fun.call(undefined) === global); // true and  //<ref *1> Object [global] {
console.log(typeof fun.bind(true)() === 'object'); // true and   //[Boolean: true]

