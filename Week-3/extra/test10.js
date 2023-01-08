function debounce(fn, waitTime) {
  let timeoutID;
  return function (...args) {
    clearTimeout(timeoutID);
    const context = this;
    timeoutID = setTimeout(() => {
      fn.call(context, ...args);
    }, waitTime);
  };
}

let user = {
  name: "Deven",

  printName(number) {
    console.log(` ${number} ${this.name} `);
  },
};

const debounced = debounce(user.printName, 5000);

for (let i = 0; i < 5; i++) {

    
    debounced.call({ name: i }, i); // 4 4
    
    debounced.call(user, i); // 4 Deven
}
