'use strict'
function Person(name){
    // ! this = global with sloppy mode
    this.name = name;  
}
// Person('Deven'); // Cant set property  name of undefined
const person1 = new Person('Deven'); // with new keyword works well
console.log(person1); // Person { name: 'Deven' }

return;

function Person(name){
    // ! this = global with sloppy mode
    this.name = name;  
}
Person('Deven'); 
console.log(global.name); // Deven
