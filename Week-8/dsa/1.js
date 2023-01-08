// # any 2 value diff is B or not 
// A = [5, 10, 3, 2, 50, 80 ] B = 78 output = 1 
// A = [5, 10, 3, 2, 50, 80 ] B = 58 output = 0

function sol(arr, b) {

    for (let i = 0; i < arr.length; i++) {

        for (let j = 0; j < arr.length; j++) {
            if (i !== j && Math.abs(arr[i] - arr[j]) === Math.abs(b) ) {
                console.log(arr[i] , arr[j]);
                return true;
            }
        }
    }
    return false;
}
console.log(sol([5, 10, 3, 2, 50, 80], 78)); // true
console.log(sol([5, 10, 3, 2, 50, 80], 58)); // false
