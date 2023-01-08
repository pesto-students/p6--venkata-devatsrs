
// Merge Sort Algorithm
// Let’s look into the algorithm −

// Declare an array, left index, right index and middle variable.

// Perform the merge sorting.

// mergesort(array, left index, right index)

// if left index > right index

// return

// mid= (left index + right index) / 2

// mergesort(array, left index, mid) // First half

// mergesort(array, mid+1, right index) // Second half

// merge(array, left index, mid, right index) // merge two halfes sorted in above steps

function merge_Arrays(left_sub_array, right_sub_array) {
   let array = []
   while (left_sub_array.length && right_sub_array.length) {
      if (left_sub_array[0] < right_sub_array[0]) {
         array.push(left_sub_array.shift())
      } else {
         array.push(right_sub_array.shift())
      }
   }
   return [ ...array, ...left_sub_array, ...right_sub_array ]
}
function merge_sort(unsorted_Array) {
   const middle_index = unsorted_Array.length / 2
   if(unsorted_Array.length < 2) {
      return unsorted_Array
   }
   const left_sub_array = unsorted_Array.splice(0, middle_index)
   return merge_Arrays(merge_sort(left_sub_array),merge_sort(unsorted_Array))
}
unsorted_Array = [39, 28, 44, 4, 10, 83, 11];
console.log("The unsorted array : ",(unsorted_Array));
console.log("The sorted array will be: ",merge_sort(unsorted_Array));
