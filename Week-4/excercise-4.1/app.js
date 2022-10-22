/**
 * Program to demostrate Promise without use of JS Promise() function
 */

/**
 * This is Polifill for Promise , using callback function it triggers its core resolve and reject functions
 * @param callback 
 * @returns output of callback
 */
function myPolyPromise(callback) {
    
  this.resolve = function (result) {
    console.log("Resolve");
    console.log(arguments);
    console.log(result);
    // return this;
  };

  this.reject = function (result) {
    console.log("Reject");
    console.log(arguments);
    console.log(result);
    // return this;

  };

  this.then = function (callback) {
    console.log("Then");
    console.log(arguments);
    callback();
    // return this;

  };

  return callback(this.resolve, this.reject);
  // console.log(arguments);
  // callback(this.resolve, this.reject);
}

const getNumber = () => {
  // 0 - 9
  let random = Math.floor(Math.random() * 10);
  // let random = 5;
  return random;
};

let isDivisibleBy = (number, divided) => {
  if (number % divided === 0) {
    return true;
  } else {
    return false;
  }
};

let p = new myPolyPromise((resolve, reject) => {
  // console.log(arguments);
  // console.log("In callback");

  let number = getNumber();
  number = 4;
  console.log(`number = ${number}`);
  if (isDivisibleBy(number, 5)) {
    resolve("Yes");
  } else {
    reject("No");
  }

  return resolve(1);
}).then((result)=>{
      console.log("Then callback");
});


//Learning
//https://bobbyhadz.com/blog/javascript-typeerror-callback-is-not-a-function#:~:text=The%20%22callback%20is%20not%20a,parameter%20when%20calling%20the%20function.
