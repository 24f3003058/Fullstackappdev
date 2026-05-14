/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargest(arr){
  let largest=arr[0];
  for(let i=0;i<arr.length;i++){
    if(arr[i]>largest){
      largest=arr[i];
    }
  }
}

console.log(findLargest([1,20,3,4,5])
