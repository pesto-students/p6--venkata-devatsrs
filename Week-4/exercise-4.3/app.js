class Fibonacci {
    

  constructor() {
      this.n1 = 0;
      this.n2 = 1;
      this.next = 0;
      this.done = false;
  }
  [Symbol.iterator]() {
      
    return  {
      
      next: () => {
        

              if( this.n1 < 30 ){

                // add prev 2 values 
                this.next = this.n1 + this.n2 ;

                //swap values 
                this.n1 = this.n2;
                this.n2 = this.next;
  
              }else{

                //stop flag 
                this.done = true;

              }
              
              return { value: this.n1, done: this.done };
              
          },
          return: () => {
              // cleaning up...
              return { value: null, done: true };
          }
      }
  }
}
let fibonacci = new Fibonacci();

console.log(fibonacci.n1); // first 0 
for (const num of fibonacci) {
  if( num > 13 ) { // cleanup case example
      break;
  }
  console.log(num);
}