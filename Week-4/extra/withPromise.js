// const  p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve([
//         { username: 'john', email: 'john@test.com' },
//         { username: 'jane', email: 'jane@test.com' },
//       ]);
//     }, 1000);
//   });

//   p1.then(result=>{

//       console.log(result);
//   })


const getNumber = () => {
    
    // 0 - 9
    let random = Math.floor(Math.random() * 10);
    // let random = 5;

    return random;

};

let isDivisibleBy = (number , divided) => {
    
    if( number % divided === 0){
        return true;
    }else{
        return false;
    }
};

let p = new Promise((resolve, reject ) => {
    let number = getNumber();
    number = 4;
    console.log(`number = ${number}`);
    if(isDivisibleBy(number ,5)){
        resolve('Yes');
    }else{
        reject('No');
    }
}).then(result => {
    console.log(`result = ${result}`);
}).catch(result => {
    console.log(`result = ${result}`);
})