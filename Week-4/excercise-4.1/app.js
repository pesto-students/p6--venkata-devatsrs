/**
 * Program to demostrate Promise without use of JS Promise() function
 */

function myPolyPromise(callback){

    this.resolve = function(){
        console.log("Resolve");
        console.log(arguments);
    }
    
    this.reject = function(){
        console.log("Reject");
        console.log(arguments);
    }

    this.then = function(){
        console.log("Then");
        console.log(arguments);
    }

    return callback(this.resolve,this.reject);
    // console.log(arguments);
    // callback(this.resolve, this.reject);

};

let p = new myPolyPromise((resolve, reject)=>{
    // console.log(arguments);
    // console.log("In callback");

    
    resolve(1);
}).then();


//Learning
//https://bobbyhadz.com/blog/javascript-typeerror-callback-is-not-a-function#:~:text=The%20%22callback%20is%20not%20a,parameter%20when%20calling%20the%20function.