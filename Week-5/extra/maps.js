let map = {};
console.log(map.constructor); // opps: ? [Function: Object]
let word = 'constructor';
if(map[word]){
    map[word] = map[word] + 1;
}
console.log(map);   //{ constructor: 'function Object() { [native code] }1' }
