// sorting an array through bubble sort 

// compare adjacent element and swap if they are in wrong order 
// smaller or larger element will bubble to top 

function swap(index, index2, array) {

    let temp = array[index];
    array[index] = array[index2];
    array[index2] = temp;
}

function sort(array = []) {
  for (let index = 0; index < array.length; index++) {
    let element1 = array[index];

    for (let index2 = 0; index2 < array.length; index2++) {

      let element2 = array[index2];

    //   console.log( array[index], array[index2]);
      if (element1 < element2) {
        //swap
        swap(index, index2, array);
      }

    }
  }
  return array;
}
const array = [2, 0, 3, 1];
console.log('original ', array);
console.log('output   ',sort(array));  // [ 0, 1, 2, 3 ]

 
 // TC - O(N2)
 // SC - O(1)
 