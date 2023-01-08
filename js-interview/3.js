
var set = new Set();
set.add("+0").add("-0").add(NaN).add(undefined).add(NaN);
console.log(set);


var object = new Object();


var object = Object.create({});

console.log(object);

var object = {
    name: "Sudheer",
    age: 34
};
console.log(object);


function Person(name) {
    this.name = name;
    this.age = 21;
  }
var object = new Person("Sudheer");
console.log(object);


function Person() {}
Person.prototype.name = "Sudheer";
var object = new Person();
console.log(object);
