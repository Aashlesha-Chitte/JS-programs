// Problem: Given a sorted array of distinct integers, find a pair with a given sum.

const findPairWithSum = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    const currentSum = arr[left] + arr[right];
    if (currentSum === target) {
      return [ arr[left],  arr[right]];
    } else if (currentSum < targetSum) {
      left++;
    } else {
      right--;
    }
  }
};
const arr = [1, 2, 4, 5, 6];
const arr1 = [1, 3, 4, 5];
const arr2 = [1, 2, 4, 5, 7];
const arr3 = [1, 2, 5, 6, 8, 9];
const targetSum = 7;
console.log(findPairWithSum(arr, targetSum)); 
console.log(findPairWithSum(arr1, targetSum)); 
console.log(findPairWithSum(arr2, targetSum)); 
console.log(findPairWithSum(arr3, targetSum)); 
// output:
// [ 1, 6 ]
// [ 3, 4 ]
// [ 2, 5 ]
// [ 1, 6 ]