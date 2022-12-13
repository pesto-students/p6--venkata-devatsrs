// lenear search 


function search(array = [], toFind) {
  for (let index = 0; index < array.length; index++) {
    let element1 = array[index];

      if (element1 === toFind) {
        return index;
      }
    }
}
const array = [1, 2, 3, 4, 5];
const toFind = 5;
console.log('Search   ', search(array,toFind));  // Search    4

 // TC - O(N)
 // SC - O(1)
 