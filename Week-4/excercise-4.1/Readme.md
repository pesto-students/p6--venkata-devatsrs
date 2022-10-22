# WEEK 4 :JS

## Exercise4.1:

Implement a function named `getNumber` which generatesa random umber.
If randomNumberis divisible by 5 it will reject the promise else it will resolve the promise. 
Let’s also keep the promise resolution/rejection time as a variable.


## Guidlines:
- JS promises should not be used.
- A custom promise function should be created.
- This function should be able to handle all 3 states Resolve, Reject and Fulfilled.
- Should be able to accept callbacks as props



## Outcome:
- Under the hood understanding of how a promise actually works
- Using “bind” to bind the callback functions sent as props
- Understanding what a polyfill is.
- Error handling using functions


## Concepts Used
- Polyfil
- Callback
- ES6


## Lessions
- ES6 Arrow functions cant be used for constructor.
- How to handle call back function inside a custom function.

## Rererences

- https://bobbyhadz.com/blog/javascript-typeerror-callback-is-not-a-function#:~:text=The%20%22callback%20is%20not%20a,parameter%20when%20calling%20the%20function.

- https://developer.mozilla.org/en-US/docs/Glossary/Polyfill#:~:text=A%20polyfill%20is%20a%20piece,do%20not%20natively%20support%20it.

- https://stackoverflow.com/questions/10107198/javascript-not-a-constructor-exception-while-creating-objects

- https://stackoverflow.com/questions/72819236/how-to-write-polyfill-of-promise-which-works-for-promise-resolve

