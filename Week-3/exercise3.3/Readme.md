# WEEK 3 JavasScript

## Exercise3.3


What is the output of the below problem and why?(30 min)

```javascript {.numberLines .lineAnchors}

function createIncrement() {
  let count = 0;
  function increment() {
    count++;
  }
  let message = `Count is ${count}`;

  function log() {
    console.log(message);
  }
  return [increment, log];
}

const [increment, log] = createIncrement();

increment();
increment();
increment();
log(); // What is logged?


```
#### Output:

```
Count is 0
```


#### Why:
When `createIncrement()` method executes from line no 2 to 11
setting default variables ` count = 0 ` and ` message = Count is ${count} `
which then transforms to ` message = Count is 0` replacing count default value as in line 2.


Now when you run `log()` method it writes message variabel what is set by js as   ` message = Count is 0 ` 

Why not `Count is 3` output, Because ` increment() ` method is not updating ` message ` variable
it just incrementing variable `count`.

#### What's solution

Replace following code.

```javascript {.numberLines .lineAnchors}

function createIncrement() {
  let count = 0;
  let message;
  function increment() {
    count++;
     message = `Count is ${count}`; // Count is 0 
  }
   ... 
```
#### Output:

```
Count is 3
```
