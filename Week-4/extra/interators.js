// ! Iterator  -> Symbol.Iterator -> next() with value and single when done 

const emojis = 'a🙂😀😃c';
const iter = emojis[Symbol.iterator]();
console.log(iter); //Object [String Iterator] {}
console.log(iter.next()); //{ value: 'a', done: false }
console.log(iter.next()); //{ value: '🙂', done: false }
console.log(iter.next()); //{ value: '😀', done: false }
console.log(iter.next()); //{ value: '😃', done: false }
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

const emojis = 'a🙂😀😃c';
let [firstChar , firstEmoji , ...rest ] = emojis;
console.log(firstChar ); // a 
console.log(firstEmoji);  // 🙂
console.log(rest); // [ '😀', '😃', 'c' ]

console.log(...emojis); // a 🙂 😀 😃 c

const emojis = 'a🙂😀😃c';
function x(firstChar, firstEmoji, ...rest){
    console.log(firstChar ); // a 
    console.log(firstEmoji);  // 🙂
    console.log(rest); // [ '😀', '😃', 'c' ]

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

const emojis = 'a🙂😀😃c';

for (const char of emojis) {
    console.log(char);
}
// ouptut 
// a
// 🙂
// 😀
// 😃
// c

// ! not working as for if loop 
console.log('With c-Style for loop');

for (let i = 0; i < emojis.length; i++) {
    console.log(emojis[i]);
}
// ouptut
// a
// �
// �
// �
// �
// �
// �
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
