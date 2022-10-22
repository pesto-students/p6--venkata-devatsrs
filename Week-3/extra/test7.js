'use strict';
var undefined  = 9;

// in node
console.log(undefined ); // 9 

// in windows 
console.log(undefined); // Uncaught TypeError: Cannot assign to read only property 'undefined' of object '#<Window>'
return;



// without strict mode 
var undefined = 9;
console.log(undefined); // blank  - no error 