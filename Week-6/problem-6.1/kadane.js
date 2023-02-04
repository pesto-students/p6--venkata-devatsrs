//const A = [1, 2, 3, 4, -10];// 10
const A = [-2, 1, -3, 4, -1, 2, 1, -5, 4]; // 6
          
let max_so_far = Number.MIN_VALUE; // the smallest positive number that can be represented within float precision , that's as close as you can get to zero

let max_ending_here = 0;
let final_sub_array = [];
for (let i = 0; i < A.length; i++) {

    max_ending_here += A[i] ;  // 0
    console.log(max_so_far, max_ending_here, A[i], max_so_far < max_ending_here, final_sub_array);
    if(max_so_far < max_ending_here){
        max_so_far = max_ending_here;
        final_sub_array.push(A[i]);
    }
    if(max_ending_here < 0){
        max_ending_here = 0;
    }
}
console.log(max_so_far);
console.log(final_sub_array);

// Time Complexity : O(N)
// Space Complexity : O(N)
