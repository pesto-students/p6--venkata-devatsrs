class Fibonacci {

  constructor(n) {
      this.max = n;
      this.i = 0;
      this.n1 = 0;
      this.n2 = 0;
  }
  [Symbol.iterator]() {
      
    return  {
      
      next: () => {
        
              if(this.i++ <= this.max ){
                // swap values  with add prev 2 values 
                [this.n1 , this.n2 ] =  [this.n2 , (this.n1 + this.n2) || 1 ];
                
                return { value: this.n1, done: false };
              }else{
                //stop flag 
                return { done: true };
              }
              
          },
          return: () => {
              // cleaning up...
              return { value: null, done: true };
          }
      }
  }
}
let fibonacci = new Fibonacci(6);

for (const num of fibonacci) {
  if( num > 13 ) { // cleanup case example
      break;
  }
  console.log(num);
}