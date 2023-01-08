//What is the currying function
// Currying is the process of taking a function with multiple arguments and turning it into a sequence of functions each with only a single argument
(function(){
  return () =>{
    console.log("Currying...");
  }
})()();

const curryUnaryFunction = (a) => (b) => (c) => a + b + c;
console.log(curryUnaryFunction(1)(2)(3)); // 6


//What is a first class function
//treated like any other variable
const handler = () => console.log("This is a click handler function");

// What is a first order function
//First-order function is a function that doesn’t accept another function as an argument and doesn’t return a function as its return value.

const firstOrder = () => console.log("I am a first order function!");


//What is a higher order function
//Higher-order function is a function that accepts another function as an argument or returns a function as a return value or both.
const firstOrderFunc = () =>
  console.log("Hello, I am a First order function");
const higherOrder = (ReturnFirstOrderFunc) => ReturnFirstOrderFunc();
higherOrder(firstOrderFunc);

//What is a unary function
// accepts exactly one argument
const unaryFunction = (a) => console.log(a + 10); // Add 10 to the given argument and display the value


//What is a pure function
//A Pure function is a function where the return value is only determined by its arguments without any side effects.



// ------------------

const numbers = [11, 25, 31, 23, 33, 18, 200];
numbers.sort();
console.log(numbers);


var of = ['of'];
for(var of of of) {
  console.log(of);
}

getMessage();

var getMessage = () => {
  console.log("Good morning");
};


let arr = [1, 2, 3];
let str = "1,2,3";

console.log(arr == str); // true
console.log([1, 2, 3].toString());



let msg = "Good morning!!";

msg.name = "John";

console.log(msg.name); // Undefined



let zero = new Number(0);
if (zero) {
  console.log("If"); // yes 
} else {
  console.log("Else");
}


console.log(typeof typeof typeof true); // string


console.log("🙂" === "🙂"); // true





const USER = { age: 30 };
USER.age = 25;
console.log(USER.age);



class Vehicle {
  constructor(name) {
    this.name = name;
  }

  start() {
    console.log(`${this.name} vehicle started`);
  }
}

class Car extends Vehicle {
  start() {
    console.log(`${this.name} car started`);
    super.start();
  }
}

const car = new Car("BMW");
console.log(car.start());





function Person() {}

Person.prototype.walk = () => {
  return this;
};

Person.run = () => {
  return this ;
};

let user = new Person();
let walk = user.walk;
console.log(walk());

let run = Person.run;
console.log(run());





class Square {
  constructor(length) {
    this.length = length;
  }

  get area() {
    return this.length * this.length;
  }

  set area(value) {
    this.area = value;
  }
}
const squareObj = new Square(10);
console.log(squareObj.area);



// const num = 0o38; // Invalid or unexpected token
// console.log(num);



const myGenerator = (function* () {
  yield 1;
  yield 2;
  yield 3;
})();
for (const value of myGenerator) {
  console.log(value);
  break;
}

for (const value of myGenerator) {
  console.log(value);
}



function* yieldAndReturn() {
  yield 1;
  return 2;
  yield 3;
}

var myGenObj = yieldAndReturn();
console.log(myGenObj.next());
console.log(myGenObj.next());
console.log(myGenObj.next());
console.log(myGenObj.next());





function* myGenFunc() {
  yield 1;
  yield 2;
  yield 3;
}
var myGenObj = myGenFunc();
console.log(myGenObj.next().value);



const obj = { key: "value" };
const array = [...obj]; // TypeError: obj is not iterable
console.log(array);



function myFun(x, y, ...manyMoreArgs) {
  console.log(manyMoreArgs);
}

myFun(1, 2, 3, 4, 5);
myFun(1, 2);





function inner() {
  return "Inner";
}

function outer(f = inner()) {
console.log("her" , f);
 }
outer();



function checkType(num = 1) {
  console.log(num);
  console.log(typeof num);
}

checkType();
checkType(undefined);
checkType("");
checkType(null);



const { a: x = 10, b: y = 20 } = { a: 30 };

console.log(x);
console.log(y);



const [x,  z, ...y] = [1, 2, 3, 4];
console.log(x,  z, y);
