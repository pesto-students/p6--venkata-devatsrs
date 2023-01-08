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
merge([1,2], [5,6,7]);
