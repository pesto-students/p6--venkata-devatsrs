//const a = [4,5,23,1,5,5,676,23,2,-1,4,6,8];

const input = [1, 3, 3, 4, 6, 7, 7, 8];

const output = [];
// [1,2,3,4]; // left < right or righ > left

function binarySearch(array = [], low, high, toFind) {
  if (high >= 1) {
    let mid = Math.floor((high + low) / 2);

    if (array[mid] === toFind) {
      return mid;
    }
    if (array[mid] > toFind) {
      high = mid;
      return binarySearch(array, low, high, toFind);
    } else {
      low = mid + 1;
      return binarySearch(array, low, high, toFind);
    }
  }else{

    return -1;
  }
}

let toFound = 3;
let foundIndex = 0;
foundIndex = binarySearch(input, 0, input.length - 1, toFound);
console.log("input " + input);
console.log("found " + foundIndex);

input[foundIndex] = 0;

foundIndex = binarySearch(input, 0, input.length - 1, toFound);
console.log("input " + input);
console.log("found " + foundIndex);
input[foundIndex] = 0;

console.log("input " + input);
foundIndex = binarySearch(input, 0, input.length - 1, toFound);
console.log("input " + input);
console.log("found " + foundIndex);
input[foundIndex] = 0;


// let i = 0;
// while (i < 2 ) {
//   found = binarySearch(input, 0, input.length - 1, toFound);
//   output.push(found);
//   input[found] = 0;
//   i++
//   //newInput.splice(found, 1);
//   console.log("input " + input);
//   console.log("found " + found);
// }

// console.log(output);
