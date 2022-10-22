
function myPromise(resolve,reject){

});

    then: ()=>{

        console.log("Then works!");
    }
}

const p = Object.create(myPromise)
p.callback()
p.then();