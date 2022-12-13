// sorting an array through insertion sort

function insertionSort(inputArray = []) {
  let n = inputArray.length;

  for (let i = 1; i < n; i++) { // start from 1
    let current = inputArray[i];
    let j = i - 1;

    while (j > -1 && current < inputArray[j]) {
      inputArray[j + 1] = inputArray[j];
      j--;
    }

    inputArray[j + 1] = current;
  }

  return inputArray;
}

const array = [2, 0, 3, 1];
console.log("original ", array); // -> original  [ 2, 0, 3, 1 ]
console.log("output   ", insertionSort(array)); // -> output    [ 0, 1, 2, 3 ]


// TC - O(N2)
// SC - O(1)
