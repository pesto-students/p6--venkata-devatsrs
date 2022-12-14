// ! Iterator  -> Symbol.Iterator -> next() with value and single when done 

const emojis = 'ağğğc';
const iter = emojis[Symbol.iterator]();
console.log(iter); //Object [String Iterator] {}
console.log(iter.next()); //{ value: 'a', done: false }
console.log(iter.next()); //{ value: 'ğ', done: false }
console.log(iter.next()); //{ value: 'ğ', done: false }
console.log(iter.next()); //{ value: 'ğ', done: false }
console.log(iter.next()); //{ value: 'c', done: false }
console.log(iter.next()); //{ value: undefined, done: true }


// ! Stread and Rest operators in ES6

const map = new Map([
    [65 , 'A'],
    [66 , 'B'],
]);

console.log(...map);
// [ 65, 'A' ] [ 66, 'B' ]


return;


// ! Stread and Rest operators in ES6

const emojis = 'ağğğc';
let [firstChar , firstEmoji , ...rest ] = emojis;
console.log(firstChar ); // a 
console.log(firstEmoji);  // ğ
console.log(rest); // [ 'ğ', 'ğ', 'c' ]

console.log(...emojis); // a ğ ğ ğ c

const emojis = 'ağğğc';
function x(firstChar, firstEmoji, ...rest){
    console.log(firstChar ); // a 
    console.log(firstEmoji);  // ğ
    console.log(rest); // [ 'ğ', 'ğ', 'c' ]

}
x(...emojis);
// ! Stread and Rest operators in ES6


return;

const map = new Map([
    [65 , 'A'],
    [66 , 'B'],
]);

const [[key,  val] , SendEl] = map;

console.log({key , val, SendEl});
// { key: 65, val: 'A', SendEl: [ 66, 'B' ] }


// ! Iterating over string 

const emojis = 'ağğğc';

for (const char of emojis) {
    console.log(char);
}
// ouptut 
// a
// ğ
// ğ
// ğ
// c

// ! not working as for if loop 
console.log('With c-Style for loop');

for (let i = 0; i < emojis.length; i++) {
    console.log(emojis[i]);
}
// ouptut
// a
// ï¿½
// ï¿½
// ï¿½
// ï¿½
// ï¿½
// ï¿½
// c



return;

const map = new Map([
    [65 , 'A'],
    [66 , 'B'],
    [67 , 'C'],
]);

for (let pair of map) {
    console.log(pair);
    let [key , value] = pair;
    console.log(key , value);
}
return ;

for (const x of [1,2,3]) {
    console.log(x);
}
// 1
// 2
// 3
