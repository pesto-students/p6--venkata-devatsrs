
let resolve = (msg) =>  {
    console.log(msg);
    return stage = 'fulfilled';
};
let reject = (msg) =>  {
    console.log(msg);
    return  stage = 'rejected';
};

var PestoPromise = (resolve , reject) => {

// let number = getNumber();
// if(isDivisibleBy(number ,5)){
//     return resolve('Yes');
// }else{
//     return reject('No');
// }


let stage = 'pending';

// const resolve = (msg) =>  {
//     return () => {
//         console.log(msg);
//         return stage = 'fulfilled';
//     }
// };
// const reject = (msg) =>  {
//     return () => {
//         console.log(msg);
//         return  stage = 'rejected';
//     }
// };
const then = (result) =>  {
    return  result;
};
};


const getNumber = () => {

console.time();

// 0 - 9
let random = Math.floor(Math.random() * 10);
// let random = 5;

return random;

// if( random % 5 === 0){

//     console.timeEnd();
//     console.log();
//     resolve(`${random} is divisible`);

// }else{
//     console.timeEnd();
//     reject(`${random} is not divisible`)
// }
}

let isDivisibleBy = (number , divided) => {

if( random % divided === 0){
    return true;

}else{
    return false;
}
}

for(let i = 0 ; i < 50 ; i++){

// let p = new PestoPromise();
// let resolve = p.resolve;
// let reject = p.reject;



let p = new PestoPromise((resolve, reject) => {
    let number = getNumber();
    if(isDivisibleBy(number ,5)){
        resolve('Yes');
    }else{
        reject('No');
    }
}).then(result => {
    console.log(result);
});

}


