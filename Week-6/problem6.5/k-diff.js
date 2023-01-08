/* k difference

Input Input 1: A = [5, 10, 3, 2, 50, 80] B = 78
Input 2: A = [-10, 20] B = 30

Example Output Output 1: 1
Output 2: 1


*/

// Reference  https://www.geeksforgeeks.org/find-a-pair-with-the-given-difference/

// Initialize positions of two elements
let i = 0;
let j = 1;
const A = [5, 10, 3, 2, 50, 80].sort((a, b) => a - b  ); // Sort 
// [ 80, 50, 2, 3, 10, 5 ]
const B = 2;

console.log(A);
const size = A.length;
let success = false;
// Search for a pair
while (i < size && j < size) {
    
    console.log(i, j, "(" + A[i] + ", " + A[j] + ")" ,  A[j] - A[i] );

    if (i != j && (A[j] - A[i] === B || A[i] - A[j]  === B) ) {
        console.log("Pair Found: (" + A[i] + ", " + A[j] + ")");
        success = true;
        return;
    }
    else if (A[j] - A[i] > B){
        j++;
    }
    else{
        i++;
    }
}
if(!success){
    console.log("No such pair");
    //console.log(0);
}


// Time Complexity: O(n log n) 
// Space Complexity: O(1)


