/**
 * This function stores computed result into cache 
 * Gets computed result from cache if exists.
 * @param fn 
 * @returns 
 */
function memoize(fn) {
  // key value pair variable
  let cache = new Map();

  // returns a fuction instead value so as to use as fn(arg1, arg2)
  return function (...args) {
    const key = args.toString();

    //check if key exists in cache then return
    if (cache.has(key)) {
      return cache.get(key);
    }

    // store fn result in key
    cache.set(key, fn(...args));

    return cache.get(key);
  };
}


/**
 * Timer takes function as argument and 
 * runs the function and log effective time to run that function.
 * @param fn 
 */
function time(fn) {
  console.time(); // Starts timer

  fn(); // calls the add function.

  console.timeEnd(); // stops timer and the elapsed time is automatically displayed in the Web console
}

// function to add 2 values
function add(a, b) {
  return a + b;
}

// Memoize our add function
const memoizeAdd = memoize(add);

//run memoizeAdd function

time(() => memoizeAdd(5955326623487965776832423324234363131246546313245435546546546546654654546654546654, 768786595532666313124654623432423423424234231546754665767556756765767556567));
time(() => memoizeAdd(9999999511353453453453453879411, 99345345345345349999911111));
time(() => memoizeAdd(5955326623487965776832423324234363131246546313245435546546546546654654546654546654, 768786595532666313124654623432423423424234231546754665767556756765767556567));
time(() => memoizeAdd(5955326623487965776832423324234363131246546313245435546546546546654654546654546654, 768786595532666313124654623432423423424234231546754665767556756765767556567));
time(() => memoizeAdd(5955326623487965776832423324234363131246546313245435546546546546654654546654546654, 768786595532666313124654623432423423424234231546754665767556756765767556567));
time(() => memoizeAdd(5955326623487965776832423324234363131246546313245435546546546546654654546654546654, 768786595532666313124654623432423423424234231546754665767556756765767556567));
time(() => memoizeAdd(9999999511353453453453453879411, 99345345345345349999911111));
time(() => memoizeAdd(9999999511353453453453453879411, 99345345345345349999911111));
