//Reverse 
function* reverse(iter){
    for (let i = iter.length - 1; i >=  0 ; i--) {
        yield iter[i];
    }
}
for (const el of reverse([1,2,3])) {
    console.log(el);
} 
// 3
// 2
// 1


return ;
// Cycle 
function* cycle(iter) {
    
    while(true){
        for (const el of iter) {
            yield el;
        }
    }
    // or 
    // let i = 0;
    // while(i <= iter.length){
    //     yield iter[i];
    //     i++;
    //     if( i >= iter.length){
    //         i = 0;
    //     }
    // }
}
let i = cycle([1,2,3])
console.log(i.next()); // ! 1
console.log(i.next()); // ! 2
console.log(i.next()); // ! 3
console.log(i.next()); // ! 1
console.log(i.next()); // ! 2
console.log(i.next()); // ! 3






return 
// Solution of range 
function* range(upperBound) {
    for (let i = 0; i < upperBound; i++) {
        yield i;
    }
}

// console.log(range(10000000000000)); // Fatal JavaScript invalid size error 169220804
// This will not stop and give error 
// in memory ony one value i with one value ...
for (const el of range(10000000000000)) {
    console.log(el);
}


return ;
// Problem with Array 
function range(upperBound) {
    
    const result = [];
    
    for (let i = 0; i < upperBound; i++) {
        result.push(i)
    }

    return result;
}

console.log(range(10));
console.log(range(10000000000000)); // Fatal JavaScript invalid size error 169220804