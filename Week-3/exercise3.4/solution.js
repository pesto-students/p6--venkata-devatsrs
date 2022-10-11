function createStack() {
  let items = [];
  return {
    push(item) {
      items.push(item);
    },
    pop() {
      return items.pop();
    },
    log() {
      return items;
    },
  };
}
const stack = createStack();
stack.push(10);
stack.push(5);
console.log(stack.pop()); // => 5
stack.push(5);
stack.push(50);
console.log(stack.items);//undefined
console.log(stack.log());// [ 10, 5, 50 ]

