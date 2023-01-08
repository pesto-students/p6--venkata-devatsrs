/**
 * The programe to demostrate inheritance and prototype in JS.
 */

//Persona function created 
var Person = function () {};
// Function initialize added with help of prototype
Person.prototype.initialize = function (name, age) {
  this.name = name;
  this.age = age;
};

//Teacher function created 
var Teacher = function () {};

//Function teach added with the help of prototype 
Teacher.prototype.teach = function (subject) {
  this.subject = subject;
};
Teacher.prototype.info = function () {
  console.log(this.name,this.age);
};

// console.log(Teacher.prototype, Person.prototype);

// Both class prototype merged
Object.setPrototypeOf(Teacher.prototype, Person.prototype); 
var him = new Teacher();
him.initialize("Adam", 45);
him.teach("Inheritance");
him.info();
console.log(him);
