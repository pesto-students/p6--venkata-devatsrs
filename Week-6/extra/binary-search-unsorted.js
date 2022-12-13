//const a = [4,5,23,1,5,5,676,23,2,-1,4,6,8];

const a = [1, 5, 3, 4, 5, 6, 7, 8];

// [1,2,3,4]; // left < right or righ > left

const target = 5;
const output = [];

let _low = 0;
let _hi = 0;
let _mid = 0;

const binarySearch = (array, low, hi) => {

    let mid = Math.floor((array.length - 1) / 2);

    _mid = _mid + mid;

    console.log("First", { array, low, mid, hi, _mid }); // [1, 5, 3, 4, 5, 6, 7, 8]

    if (array.length === 0) {       
        return [];
    }
    if (array[low] === target) {   // a[0]=1 != 5
        output.push(_mid + low);
        return array;

    }
    if (array[hi] === target) {  // a[7]=8 != 5
        output.push(_mid + hi);
        return array;
    }

    if (array[mid] === target) { // a[3]=4 != 5
        return output.push(_mid);
    }
    if (array[mid] >= target) { // a[3]=4 >= 5
        hi = mid - 1;
    }

    if (array[mid] <= target) { // a[3]=4 <= 5 True 
        low = mid + 1;
    }
    //console.log(array.length, low, mid, hi);
    let sub_array = array.splice(low, hi);
    return binarySearch(sub_array, low, hi); // left
};

console.log("Start", a);
_hi = a.length - 1;
console.log(binarySearch(a, _low, _hi));
console.log("output", output);
