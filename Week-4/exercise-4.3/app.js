/**
 * The programe to demostrate interator with fibonacci series
 * Reference:  https://medium.com/@akshayshekokar/fibonacci-series-with-iterators-90a8b3dd0d92
 */

/**
 * Return a fibonacci series with help of iterator
 * @param {string} n 
 * @returns 
 */
const fibonacci = (n) => ({
  [Symbol.iterator]: () => {
    let i = 0,
      old = (new1 = 0);

    return {
      next: () => {
        // interation condition
        
        if (i++ <= n) {
          //add old and new number to next  new number  and swap
          [old, new1] = [new1, old + new1 || 1];

          return { value: old, done: false };
        }

        // when breaks
        return { done: true };
      },
      return: () => {
        // cleaning up...
        return { value: null, done: true };
      },
    };
  },
});
const fibonacciObj = fibonacci(6)
//console.log([...fibonacci(6)]);
for (const num of fibonacciObj) {
  if (num > 8) {
    // cleanup case example
    break;
  }
  console.log(num);
}
