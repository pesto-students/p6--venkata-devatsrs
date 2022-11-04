// ! Using async/await create separate functions and achieve same fuctionality 


// ! Using async/await way...

//helper object 
var promiseHelper = {
  message : "not defined",
  log: function() { // ! arrow function wont work here...
       console.log(this.message)
  },
};

const async_await = {
    
    doTask1: () => {
        return new Promise((resolve,reject) => {
            setTimeout(() => {
              resolve('Do Task 1');
            }, 500);
          });
    },

    doTask2: () => {
        
        return new Promise((resolve,reject) => {
            setTimeout(() => {
              resolve('Do Task 2');
            }, 600);
          });
    },
    doTask3: () =>{
        return new Promise((resolve,reject) => {
            setTimeout(() => {
                reject('Task 3 rejected');
            }, 700);
          });
    },

    callbackResolve: (message) => promiseHelper.log.bind({message})(),

    callbackReject: (message) => promiseHelper.log.bind({message})()

};

console.log("start");
const taskPro1 = async_await.doTask1().then(async_await.callbackResolve).catch(async_await.callbackReject);
const taskPro2 = async_await.doTask2().then(async_await.callbackResolve).catch(async_await.callbackReject);
const taskPro3 = async_await.doTask3().then(async_await.callbackResolve).catch(async_await.callbackReject);
console.log("Ends...");
 


