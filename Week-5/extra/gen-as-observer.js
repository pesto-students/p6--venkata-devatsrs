//yield*
function* callee(){
    console.log(`callee: ${yield 10}`);
} 
function* caller(){
    while(true){
        yield*  callee()
    }
} 
let a = caller();
console.log(a); // Object [Generator] {}
console.log(a.next()); //{ value: 10, done: false }
console.log(a.next()); // callee: undefined { value: 10, done: false }
console.log(a.next()); // callee: undefined { value: 10, done: false }


return ;

//yield*
function* cycle(iter) {
    while(true){
        yield* iter;
        //or 
        // for (const el of iter) {
        //     yield el;
        // }
    }
}
let i = cycle('abc')
console.log(i.next()); // ! { value: 'a', done: false }
console.log(i.next()); // ! { value: 'b', done: false }
console.log(i.next()); // ! { value: 'c', done: false }
console.log(i.next()); // ! { value: 'a', done: false }


return ;
//.throw() 
function* gen1() {
    try{
        console.log('Started');
        console.log(`1. ${yield 42}`); // (A)
        console.log(`2. ${yield 45} `);
    }catch(er){
        console.log('caught an error');
    }
    

    return 'result';    // ! done becomes true so we cant have this statement 
}

//solution
const gen_Obj1 = gen1();
console.log(gen_Obj1.next()); // Starts , { value: 42, done: false }
console.log(gen_Obj1.next(10)); // 1. 10 , { value: 45, done: false }
console.log(gen_Obj1.throw(new Error('This is return'))); //caught an error  , { value: 'result', done: true }
console.log(gen_Obj1.next(20)); // { value: undefined, done: true }
// Started
// { value: 42, done: false }
// 1. 10
// { value: 45, done: false }
// caught an error
// { value: 'result', done: true }


return ;

// .return() 
function* gen() {
    console.log('Started');
    console.log(`1. ${yield 42}`); // (A)
    console.log(`2. ${yield 45} `);
    return 'result';    // ! done becomes true so we cant have this statement 
}

//solution
const gen_Obj = gen();
console.log(gen_Obj.next()); // Starts , { value: 42, done: false }
console.log(gen_Obj.next(10)); // 1. 10 , { value: 45, done: false }
console.log(gen_Obj.return('This is return')); // { value: 'This is return', done: true }
console.log(gen_Obj.next(20)); // { value: undefined, done: true }
// Started
// { value: 42, done: false }
// 1. 10
// { value: 45, done: false }
// { value: 'This is return', done: true }
// { value: undefined, done: true }


return ; 


/// other way of using observer 
function* dataConsumer2() {
    console.log('Started');
    let str = `1. ${yield 42}`;
    console.log(str); 
    console.log(`2. ${yield 45}`);
    return 'result';    // ! done becomes true so we cant have this statement 
}

//solution
const genObj2 = dataConsumer2();
console.log(genObj2.next()); // Starts 
console.log(genObj2.next(10)); //  yield becomes value that I am passing 
console.log(genObj2.next(20));
// Started
// { value: 42, done: false }
// 1. 10
// { value: 45, done: false }
// 2. 20
// { value: 'result', done: true }

// 
function* dataConsumer() {
    console.log('Started');
    console.log(`1. ${yield}`); // (A)
    console.log(`2. ${yield}`);
    return 'result';    // ! done becomes true so we cant have this statement 
}

//solution
const genObj1 = dataConsumer();
genObj1.next(); // Starts 
genObj1.next(10); //  yield becomes value that I am passing 
genObj1.next(20);
genObj1.next('b'); // ! nothing as done is true at 2nd yield
// Started
// 1. 10
// 2. 20


//problem 
const genObj = dataConsumer();
genObj.next();
genObj.next();
genObj.next();
// Started
// 1. undefined
// 2. undefined

