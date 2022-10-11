# WEEK 3 JavasScript

## Exercise3.4


Refactor the above stack implementation, using the concept of closure, such that there is noway to access items array outside of createStack() function scope: (2-3 hours)

```javascript {.numberLines .lineAnchors}

function createStack() {
  return {
    items: [],
    push(item) {
      this.items.push(item);
    },
    pop() {
      return this.items.pop();
    },
  };
}
const stack = createStack();
stack.push(10);
stack.push(5);
console.log(stack.pop()); // => 5
console.log(stack.items);// => [10]
stack.items= [10,100,1000];// Encapsulation broken!
console.log(stack.items);// => [ 10, 100, 1000 ]


```

### Desired ouptput

```javascript {.numberLines .lineAnchors}

const stack = createStack();
stack.push(10);
stack.push(5);
console.log(stack.pop()); // => 5
stack.push(5);
stack.push(50);
console.log(stack.items);//undefined
console.log(stack.log());// [ 10, 5, 50 ]
```



##### Get desired output
A: Desired output is in [solution.js](./solution.js)


##### Explain the code why it was not working before. 
A: `createStack()` method returns the object including items array which then accessible outside. 

##### Explain the code why it is working now.
A: `createStack()` method returns the object without including items array which is not accessible outside. 

