/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
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
