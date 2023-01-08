# WEEK 3 JavasScript

## Exercise3.1


Create a memoize function that remembers previous inputs and stores them in cache so that itwon’t have to compute the same inputs more than once. 
The function will take an unspecifiednumber of integer inputs and a reducer method. 
(1.5hours)


## What is Memoization?
Memoization is an optimization technique that makes applications more efficient and faster.
By storing computation results in cache, so next time it's needed instead of computing it again.
 
## What is Map()?

The Map object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value.

```javascript

const map1 = new Map();

map1.set('a', 1);
map1.set('b', 2);
map1.set('c', 3);

console.log(map1.get('a'));
// expected output: 1

map1.set('a', 97);

console.log(map1.get('a'));
// expected output: 97

console.log(map1.size);
// expected output: 3

map1.delete('b');

console.log(map1.size);
// expected output: 2

```

