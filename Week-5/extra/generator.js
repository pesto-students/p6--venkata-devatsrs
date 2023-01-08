// iter_list = iter(['Geeks', 'For', 'Geeks'])
// print(next(iter_list))
// print(next(iter_list))
// print(next(iter_list))

return;

// Example 
// Take first5 natural number 
function* naturlaNumber(){
    let num = 1;
    while(true){
        yield num;  // ! suspended here 
        num = num + 1;
    }
    // or
    // for(const n=0;;n++){
    //     yield n;
    // }
}

function* takeFirst(num , iterable){

    for(const x of iterable){
        if (num <= 0 ) return;
        num--;
        yield x;
    }
}

const first5 = takeFirst(5, naturlaNumber());
for(num of first5){
    console.log(num);
}
// 1
// 2
// 3
// 4
// 5
const first_5 = takeFirst(5, ['a','b','c']);
for(num of first_5){
    console.log(num);
}
// a
// b
// c


return ;

class InterableClass   {

    constructor(start =0 , end = Infinity ){
        this.start  = start ;
        this.end = end;
    }

    [Symbol.iterator]() {
        //end = 5;
        let counter = 0;
        let nextIndex = this.start;
        return  {
            next: () => {
                if ( nextIndex < this.end ) {
                    let result = { value: nextIndex,  done: false }
                    nextIndex++;
                    counter++;
                    return result;
                }
                return { value: counter, done: true };
            }
        }
    }
}
const interObj = new InterableClass(1,5)
for (const num of interObj) {
    console.log(num);
}
// 1
// 2
// 3
// 4

return;

const interableObj  = {
    [Symbol.iterator]() {
        end = 5;
        let counter = 0;
        let nextIndex = 0;
        return  {
            next: () => {
                if ( nextIndex < end ) {
                    let result = { value: nextIndex,  done: false }
                    nextIndex++;
                    counter++;
                    return result;
                }
                return { value: counter, done: true };
            }
        }
    }
}

for (const num of interableObj) {
    console.log(num);
}
// 0
// 1
// 2
// 3
// 4



return;



// The following example illustrates how to use a generator to generate a never-ending sequence:
function* forever() {
    let index = 0;
    while (true) {
        yield index;
        index++;
    }
}

let f = forever();
console.log(f.next()); // { value: 0, done: false }
console.log(f.next()); // { value: 1, done: false }
console.log(f.next()); // { value: 2, done: false }
console.log(f.next()); // { value: 3, done: false }
console.log(f.next()); // { value: 4, done: false }
console.log(f.next()); // { value: 5, done: false }
//... infinite loop

return ;

function* gen() {
    console.log('invoked 1st time');
    yield 1;
    console.log('invoked 2nd time');
    yield 2;
}

let iter = gen();
console.log(gen); // Object [Generator] {}

let result = iter.next();
console.log(result); //invoked 1st time // { value: 1, done: false }

result = iter.next();
console.log(result); // invoked 2nd time { value: 2, done: false }


result = iter.next();
console.log(result); // { value: undefined, done: true }

// Since a generator is iterable, you can use the for...of loop:
for (const g of gen()) {
    console.log(g);
}
/*invoked 1st time
1
invoked 2nd time
2*/