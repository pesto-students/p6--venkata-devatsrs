// binary search 
// decreasing time Complexity
// very big array to search 
// Note: assume array to be sorted 

// 1 , 2 , 3 , 4, 5, 6  
// ToFind => 3
// low = 0        high = 5
// mid = 0+5/2 => 2
// arrray[2]  == 3 true Return 2 index 
// ToFind => 2
// 3 < 5
// low = mid+1    
// 3 < 2
// hi = mid

function binarySearch(array = [], toFind) {

  let low = 0;
  let high = array.length - 1;

  while(high - low >= 1){

    let mid = Math.floor( (high + low) / 2 );

    if(array[mid] == toFind){
      return mid;
    }
    if (array[mid] < toFind){
      low = mid + 1;
    }else{
      high = mid;
    }

  }
  if(array[low] == toFind){
    return low;
  }
  if(array[high] == toFind){
    return high;
  }

  
}
const array = [1, 2, 3, 4, 5];
const toFind = 4;
console.log('Search   ', binarySearch(array,toFind));  // Search    4

 // TC - O(Log n)
 // SC - O(1)
 