/**
 * The programe to demostrate interator with fibonacci series
 */

var arr = [];

let n1 = 0 , n2 = 1 , next = 0;

for (let i = 1; i < 10; i++) {

  console.log(n1);
  next = n1 + n2 ;
  n1 = n2;
  n2 = next;
}

