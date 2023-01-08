// ! How to fix following problem

// Workaround 1 : that = this
// Not to rely on this keyword which is lexically scopped 
var obj2 = {
  firstName: "Jane",
  friends: ["Tarzan", "Cheeta"],
  loop: function () {
    // ! this == obj
    that = this;
    this.friends.forEach(function (friend) {
      console.log(that.firstName + " knows " + friend);
    });
  },
};
obj2.loop();
// Jane knows Tarzan
// Jane knows Cheeta


// Workaround 2 : bind
var obj3 = {
  firstName: "Jane",
  friends: ["Tarzan", "Cheeta"],
  loop: function () {
    // ! this == obj
    this.friends.forEach(function (friend) {
      console.log(this.firstName + " knows " + friend);
    }.bind(this));
  },
};
obj3.loop();
// Jane knows Tarzan
// Jane knows Cheeta


// Workaround 3 : a thisValue for forEach()
var obj4 = {
  firstName: "Jane",
  friends: ["Tarzan", "Cheeta"],
  loop: function () {
    // ! this == obj
    this.friends.forEach(function (friend) {
      console.log(this.firstName + " knows " + friend);
    } , this);
  },
};
obj4.loop();
// Jane knows Tarzan
// Jane knows Cheeta


// Workaround 4 : Best: using arrow function
var obj5 = {
  firstName: "Jane",
  friends: ["Tarzan", "Cheeta"],
  loop: function () {
    // ! this == obj
    // ! using arrow this is always bound to parent 
    this.friends.forEach( (friend) => {
      console.log(this.firstName + " knows " + friend);
    });
  },
};
obj5.loop();
// Jane knows Tarzan
// Jane knows Cheeta




return ;
// ! Problem

global.firstName = "[Not defined yet]";
var obj2 = {
  firstName: "Jane",
  friends: ["Tarzan", "Cheeta"],
  loop: function () {
    // ! this == obj
    console.log(this.firstName + " knows -- " ); //Jane knows -- 
    this.friends.forEach(function (friend) {
      // ! callback 
      // ! this == global
      //  undefined knows Tarzan
      console.log(this.firstName + " knows " + friend);
      // [Not defined yet] knows Tarzan

    });
  },
};
obj2.loop();
// Jane knows -- 
// [Not defined yet] knows Tarzan
// [Not defined yet] knows Cheeta
//----
// undefined knows Tarzan
// undefined knows Cheeta

return;

// ! Arrow functions

const arr = [1, 2, 3];
const squares = arr.map((x) => x * x);

// () => { ... } // No parameter
// x => { ... } // One parameter, an identifier
// (x,y) => { ... } // Multiple parameters

(x) => {
  return x * x;
}; // block
(x) => x * x;

// ! The complete list of variables whose values are determinded lexically is :
// arguments
// super
// this
// new.target

return;

var counter = {
  count: 0,
  inc: function () {
    console.log("inc was called");
    this.count++;
  },
};

setTimeout(counter.inc, 1000);
setTimeout(() => {
  console.log(counter.count); //! 1
}, 2000);
// OR
var fn = counter.inc;
fn(); // ! Object is lost
console.log(counter.count); //! 0
console.log(global.count); //! NaN
// ! this.count = this.count + 1
// ! this.count = global.count + 1
// ! this.count = undefined + 1
// ! this.count = NaN

return;
// ! Implicit Lost
function foo() {
  console.log(this === global); //
  // ! this = obj when called like obj.foo()
  console.log(this.a);
}
const obj1 = {
  a: 2,
  print: foo,
};
var fn = obj1.print; // ! undefine ;
fn(); // ! Object is lost ->   undefine ;
obj1.print(); // !  2

return;
// ! Implicit binding
function foo() {
  console.log(this === global); //
  // ! this = obj when called like obj.foo()
  console.log(this.a);
}
const obj = {
  a: 2,
  print: foo,
};
foo(); // ! undefine ;
obj.print(); // !  2
// true
// undefined
// false
// 2
// Deven

// ! Default binding...
global.firstName = "Deven";
function print() {
  // ! this -> global in Node.js
  // ! this -> window in the browser
  console.log(this.firstName); // output - Deven
}
print();

return;

// ! Default binding...
function print() {
  // ! this -> global in Node.js
  // ! this -> window in the browser
  console.log(this.firstName); // output - undefined
}
print();

return;

function createUser(initialName) {
  let name = initialName;

  return {
    getName() {
      return name;
    },
    setName(newName) {
      name = newName;
    },
  };
}
let p1 = createUser("Deven");
let p2 = createUser("Sitapara");
p2.setName(null);

console.log(p1.getName()); // ! Deven

return;

return;

(function immediateA(a) {
  // ! a = 0
  return (function immediateB(b) {
    // ! b = 1
    console.log(a); // ! 0
  })(1);
})(0);

return;
function _a() {
  let fn;
  {
    //    var x = 5;

    // search for x variable for parent to global scope
    fn = function () {
      console.log(x); // ! 10
    };
  }

  return fn;
}
var x = 10;
var b = _a();
b();

return;

//https://pestotech.teachable.com/courses/plus-program-content122/lectures/42948096
// Chapter 2.2 - Closure Examples
function a() {
  let fn;
  {
    var x = 5;

    fn = function () {
      console.log(x); // ! 5
    };
  }

  return fn;
}
var x = 10;
var b = a();
b();
