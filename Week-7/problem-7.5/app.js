
const array = [1, 2, 3, 0, 2, 6, 7, 8, 9, 10];
const k = 3;

function getNextLargestElement(array , k) {
    
    let i = 0;
    let found = false;

    while (i < array.length) {

        if(array[i] === k) {
            found = true;
        }
        if(found && array[i] > k) {
            return array[i];
        }
        i++;
    }
    return -1;
}

console.log(getNextLargestElement(array, k));

