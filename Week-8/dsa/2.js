 
// JavaScript program to check whether
// the array is circularly sorted
 
 
// Function to check whether
// array is circularly sorted
function checkCircularSorted(arr, n)
{
 
    // cnt variable will store count of
    // arr[i-1] > arr[i]
    let cnt = 0;
 
    for (let i = 1; i < n; i++) {
 
        // increase cnt if arr[i-1] > arr[i]
        console.log(arr[i - 1] , arr[i],cnt);
        if (arr[i - 1] > arr[i]) {

            cnt++;
        }
    }
 
    // if cnt > 1 then false
    // else true
    if (cnt > 1) {
        return false;
    }
    else {
        return true;
    }
}
 
// Driver code
 
// Given array
let arr = [ 23, 34, 45, 12, 17, 19 ];
 
// size of array
let N = arr.length;
 
// Calling function to check
// cirularly sorted array
let result = checkCircularSorted(arr, N);
 
// Print result
if (result) {
    console.log("Array is circularly sorted","</br>");
}
else {
    console.log("Array is not circularly sorted","</br>");
}
 
// This code is contributed by shinjanpatra
