var assert = require('assert');
class MyMatch {

        constructor(value){
            this.value = value;
        }

        [Symbol.match](string){
            var index = string.indexOf(this.value)
            if (index === -1) {
                return null;        
            }
            return [this.value];
        }

}

var fooMatcher = 'foobar'.match(new MyMatch('foo')); // [ 'foo' ]
var barMatcher = 'foobar'.match(new MyMatch('bar')); // [ 'bar' ]
console.log(barMatcher);
assert.deepEqual(fooMatcher,['foo']);
assert.deepEqual(barMatcher,['bar']);
return;

class MyClass{

    static [Symbol.hasInstance](lho) {
        console.log(lho);
            return Array.isArray(lho);
    }
}
if ( [1,2, 3] instanceof MyClass ){
    console.log("yes");
}

return ;


console.log(9); // Literal Notation 
console.log(Number('9')); // String converted to a Number

// but in Symbol its different

let sym = Symbol();
console.log(sym);  // Symbol()

let red = Symbol('Red');
console.log(red);  // Symbol(Red)

console.log(typeof red);  // symbol
console.log(Symbol());  // Symbol()


return ;

let sym = Symbol();
let obj = {
	 name : "Deven"
}
obj[sym] = 42
console.log(obj); // { name: 'Deven', [Symbol()]: 42 }
console.log(Object.keys(obj)); // [ 'name' ]
//if Symbol in key that wont be part of .keys() , for..in, for ..of loop
// This symbol is giving some kind of weak private property, property is not accessible untill you have key 




