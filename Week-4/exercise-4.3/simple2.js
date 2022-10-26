/**
 * The programe to demostrate interator.
 */

 var arr = [];

 for (let i = 0; i < 10; i++) {
   let next = 0;
   if (i == 0) {
     next = 0; // 0=>0
   } else if (i == 1) {
     next = 1; // 0=>0, 1=>1
   } else {
     // 0=>0, 1=>1, 2=>1
     // 0=>0, 1=>1, 2=>1, 3=>2
     // 0=>0, 1=>1, 2=>1, 3=>2, 4=>3
     // 0=>0, 1=>1, 2=>1, 3=>2, 4=>3, 4=>5
     // ...
     next = arr[i-2] + arr[i-1]; // 0 1 2
   }
   arr.push(next);
   console.log(next);
 }
 
 