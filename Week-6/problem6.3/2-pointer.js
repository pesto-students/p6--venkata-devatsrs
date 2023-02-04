/*

Given an array of size N containing only 0s, 1s, and 2s;
sort the array in ascending order. 

Example 1:
Input: 
N = 5
arr[]= {0 2 1 2 0}

Output: 0 0 1 2 2
*/

// Reference  https://www.geeksforgeeks.org/sort-an-array-of-0s-1s-and-2s/
let array = new Array("0", "2", "1", "2", "0");

let lo = 0;
let hi = array.length - 1;
let mid = 0;
let temp = 0;
// Iterate till all the elements
// are sorted
while (mid <= hi) {
  // If the element is 0
  if (array[mid] == 0) {
    temp = array[lo];
    array[lo] = array[mid];
    array[mid] = temp;
    lo++;
    mid++;
  }
  // If the element is 1
  else if (array[mid] == 1) {
    mid++;
  }
  // If the element is 2
  else {
    temp = array[mid];
    array[mid] = array[hi];
    array[hi] = temp;
    hi--;
  }
}
console.log(array);
// Time Complexity: O(n)
// Space Complexity: O(1), No extra space is required.

