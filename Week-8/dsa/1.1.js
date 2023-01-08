// # any 2 value diff is B or not 
// A = [5, 10, 3, 2, 50, 80 ] B = 78 output = 1 
// A = [5, 10, 3, 2, 50, 80 ] B = 58 output = 0

function sol(arr, b) {

    let start = 0;
    let end = 1;

    while(start < arr.length || end < arr.length){


        if(start !== end && Math.abs(arr[start]-arr[end]) == Math.abs(b) ){
            return true;
        }else if(start < arr.length - 1){
            start++;
        }else if(end < arr.length - 1){
            end++;
        }
    }
    return false;


}
console.log(sol([5, 10, 3, 2, 50, 80], 78)); // true
console.log(sol([5, 10, 3, 2, 50, 80], 58)); // false
