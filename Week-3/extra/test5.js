function returnThis1(){
    'use strict';
    return this;
}

console.log(returnThis1()); // undefined




return; 
// ------ // -- without use strict mode 

function returnThis(){
    return this;
}

console.log(returnThis()); // <ref *1> Object [global] {...
