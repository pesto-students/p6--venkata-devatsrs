function createIncrement() {
    let count = 0;
    let message; // outer scope of log() method
    function increment() {
      count++;
       message = `Count is ${count}`; // moved inside increment() to be in sync with count variable
    }
  
    function log() {
      console.log(message);
    }
    return [increment, log];
  }
  
  const [increment, log] = createIncrement();
  increment();  // increment variable count
  increment();
  increment();
  log(); // What is logged?
  