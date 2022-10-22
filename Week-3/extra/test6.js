'use strict';
function abc1(){
    foo1 = 17;
}
abc1();
console.log(foo1); //ReferenceError: foo1 is not defined
console.log(global.foo1); // ReferenceError: foo1 is not defined




//----------------------------------------------
// -- without use strict mode 
function abc(){
    foo = 17;
}
abc();
console.log(foo); //17 
console.log(global.foo); // 17
