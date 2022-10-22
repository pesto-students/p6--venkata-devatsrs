// iteration

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Enumerability_and_ownership_of_properties#:~:text=Enumerable%20properties%20are%20those%20properties,are%20not%20enumerable%20by%20default.
const parent2 = {
    name : "parent" , // ! Enumerable 
    abc : "xyz" , // ! Enumerable 
}

// for-in-loop
const obj4  = {
    first : 'Deven',
    last : 'Sitapara',
    [Symbol()]: 123  // not included in for-in-loop
}
// set parent of an object
Object.setPrototypeOf(obj4, parent2);


// ! Return everything present in object including Symbols too
const ownKeys = Reflect.ownKeys(obj4); 

console.log(ownKeys); // [ 'first', 'last', Symbol() ]

console.log(Object.keys(Object.prototype)); // ! [] -  doesnt return not Enumerable properties
console.log(Reflect.ownKeys(Object.prototype));
// [
//     'constructor',
//     '__defineGetter__',
//     '__defineSetter__',
//     'hasOwnProperty',
//     '__lookupGetter__',
//     '__lookupSetter__',
//     'isPrototypeOf',
//     'propertyIsEnumerable',
//     'toString',
//     'valueOf',
//     '__proto__',
//     'toLocaleString'
// ]

return ;


const parent1 = {
    name : "parent" , // ! Enumerable 
    abc : "xyz" , // ! Enumerable 
}

// for-in-loop
const obj3  = {
    first : 'Deven',
    last : 'Sitapara',
    [Symbol()]: 123  // not included in for-in-loop
}
// set parent of an object
Object.setPrototypeOf(obj3, parent1);

// ! Only string keys
// ! Doesnt climb up to the parent object
const keys = Object.keys(obj3); // [ 'first', 'last' ]
const values = Object.values(obj3); 
const entries = Object.entries(obj3); 




entries.forEach( (pair) => console.log(pair));
// [ 'first', 'Deven' ]
// [ 'last', 'Sitapara' ]

//es6
entries.forEach( (pair) => {
    const [key , value] = pair
    console.log(key , value);
} );
// first Deven
// last Sitapara

values.forEach( (value) => console.log(value));
// Deven
// Sitapara


keys.forEach( (key) => console.log(key));
// first
// last
keys.forEach( (key) => console.log(obj3[key]));
// Deven
// Sitapara

console.log(keys); 



return ;

const parent = {
    name : "parent" , // ! Enumerable 
    abc : "xyz" , // ! Enumerable 
}

// for-in-loop
const obj2  = {
    last : 'Sitapara',
    [Symbol()]: 123  // not included in for-in-loop
}
// set parent of an object
Object.setPrototypeOf(obj2, parent);

//console.log(obj2.name); // parent

// not recommended to use for-in-loop as parent object may change dynamically and loop will run N no. of times 
let i = 0;
for (let key in obj2) {
  console.log(key , obj2[key]); // name pesto
  console.log( i++);
}
// parent
// last Sitapara
// name parent


return; 



// for-in-loop
const obj  = {
    name : 'pesto',
    [Symbol()]: 123  // not included in for-in-loop
}

for (let key in obj) {
  console.log(key , obj[key]); // name pesto
}


return; 

//for loop
const arr = [1, 2, "b", 3];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
