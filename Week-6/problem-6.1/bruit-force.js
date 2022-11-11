const A = [1, 2, 3, 4, -10];// 10
//const A = [-2, 1, -3, 4, -1, 2, 1, -5, 4]; // 6
let maxSum = 0;
let outputArray = [];
for (let k = 0; k < A.length; k++) {

  for (let i = k; i < A.length; i++) {
    let sum = 0;
    let array = [];

    for (let j = k; j <= i; j++) {
      sum += A[j];
      array.push(A[j]);
    }
    console.log("------------");
    console.log(sum);
    console.log(array);
    console.log("------------");
    if (sum > maxSum) {
      maxSum = sum;
      outputArray = array;
    }
  }
}

console.log(maxSum);
console.log(outputArray);
// Time Complexity : O(N3)
// Space Complexity : O(N2)
