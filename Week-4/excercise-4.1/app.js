/**
 * Program to demostrate Promise without use of JS Promise() function
 */

/**
 * This is Polifill for Promise , using callback function it triggers its core resolve and reject functions
 * @param callback
 * @returns output of callback
 */
function myPolyPromise(callback) {
  this.result = "";
  this.message = "";
  this.isPending = true;
  this.isFullfilled = false;
  this.isRejected = false;
  let time = 0;
  let startTime = 0;

  
  function timeLogStart(label) {
    startTime = performance.now();
    console.time(label);
  }
  function timeLogEnd(label) {
    time = performance.now() - startTime;

    console.timeEnd(label);
    console.log(time);
  }

  this.resolve = function (result) {
    console.log("Resolve");
    console.log(arguments);
    console.log(result);

    this.result = result;

    //Switching state
    this.isFullfilled = true;
    this.isPending = false;

    timeLogEnd();

    return this;
  };

  this.reject = function (result) {
    console.log("Reject");
    console.log(arguments);
    console.log(result);
    this.result = result;
    this.message = result.message;

    //Switching state
    this.isRejected = true;
    this.isPending = false;

    timeLogEnd("promise");
    //  console.log("this");
    // console.log(this);
    return this;
  };

  this.then = function (callback) {
    console.log("Then");
    console.log(arguments);
    callback();
    return this;
  };

  //   this.reject.bind(this);
  //   this.resolve.bind(this);

  timeLogStart("promise");

  //Execure Promise Callback with resolve and reject as an input arguments
  callback(this.resolve, this.reject);
  // console.log(arguments);
  // callback(this.resolve, this.reject);
}

// Return a Number
const getNumber = () => {
  // 0 - 9
  let random = Math.floor(Math.random() * 10);
  // let random = 5;
  return random;
};

// Check if given number is divisible by given number or not
let isDivisibleBy = (number, divisibleBy) => {
  if (number % divisibleBy === 0) {
    return true;
  } else {
    return false;
  }
};

console.log("Start");

// Initialize Promise function
let p = new myPolyPromise((resolve, reject) => {
  // console.log(arguments);
  // console.log("In callback");

  let number = getNumber();
  number = 4;
  console.log(`number = ${number}`);
  if (isDivisibleBy(number, 5)) {
    resolve("Yes");
  } else {
    reject(new Error("Not"));
  }
}).then((result) => {
  console.log("Then callback");
});

console.log("Ends");
