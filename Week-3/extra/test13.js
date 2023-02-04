Array.prototype.myFind = function(callback){
    for(let i=0; i<this.length; i++){
      const res = callback(this[i],i,this);
        if(res){
          return this[i];
        }
     }
     return undefined;
}

// [1,2,3].forEach(e => {
//   console.log(e);
// });

//console.log([1,2,3].find(e => e === 2));

const result = [1,2,3].myFind((ele,i) => i === 2);
console.log(result);