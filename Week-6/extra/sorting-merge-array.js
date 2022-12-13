//merge 
const merge = (array1, array2 ) => {

  let left = 0 , right = 0;
  let total = (array1.length + array2.length);
  let result = [];

  while (result.length <  total   ){

    if( array1[left] <= array2[right] ){
      result.push(array1[left]);
      left++;
    }else {
      result.push(array2[right]);
      right++;
    }
  }
  console.log(result);
};

//merge([1, 2, 3], [4,5,6]);
//merge([1,2,3,4], [5,6,7])
// merge([1,2], [5,6,7]);

function mergeSort(array1, array2, l , r  ) {


  if(l >= r){
    return;
  }

  let m  = l + Math.floor((r - l)/2);
  mergeSort(array1, l , r );
  mergeSort(array2, m + 1 , r );
  console.log(l, m+1, r);
  // merge(array1, array2  );
 
}
mergeSort([1,2], [5,6,7],0,3);
