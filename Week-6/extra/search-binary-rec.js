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

function binarySearch(array = [], low, high, toFind) {

 
  if(high >= 1){

    let mid = Math.floor( (high + low) / 2 );

     if(array[mid] == toFind){
      return mid;
    }
    if (array[mid] < toFind){
      low = mid + 1;
      return binarySearch(array, low, high, toFind) 

    }else{
      high = mid;
      return binarySearch(array, low, high, toFind) 
    }

  }
  return -1;

  
}
const array = [1, 2, 3, 4, 5];
const toFind = 5;
console.log('Search   ', binarySearch(array,0,array.length-1,toFind));  // Search    4

 // TC - O(Log n)
 // SC - O(1)
 