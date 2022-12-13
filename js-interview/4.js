function mySort() {
    const array = this;
    let n = array.length;
    for(let i = 0; i < n ; i++){
        for(let j = 0; j < n ; j++){
            //compare 
            if( i != j &&  array[i] < array[j]){
                //swap
                const temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }
    }
    return array;
};

Array.prototype.mySort = mySort;
const a = [9,8,7, 6, 10].mySort();
console.log(a);

