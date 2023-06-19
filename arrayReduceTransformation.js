const reducedArray = (nums, fn, initialValue) => {
  return nums.reduce((acc, curr) => fn(acc, curr), initialValue);
};

// Input 1
const nums1 = [1, 2, 3, 4];
const fn1 = (accum, curr) => {
  return accum + curr;
};
const initialValue1 = 0;
console.log(reducedArray(nums1, fn1, initialValue1));

// Input 2
const nums2 = [1, 2, 3, 4];
const fn2 = (accum, curr) => {
  return accum + curr * curr;
};
const initialValue2 = 100;
console.log(reducedArray(nums2, fn2, initialValue2));

// INput 3
const nums3 = [];
const fn3 = (accum, curr) => {
  return 0;
};
const initialValue3 = 25;
console.log(reducedArray(nums3, fn3, initialValue3));

// Input:
// nums = [1,2,3,4]
// fn = function sum(accum, curr) { return accum + curr; }
// initialValue = 0
// Output: 10

// Input:
// nums = [1,2,3,4]
// fn = function sum(accum, curr) { return accum + curr * curr; }
// initialValue = 100
// Output: 130

// Input:
// nums = []
// fn = function sum(accum, curr) { return 0; }
// initialValue = 25
// Output: 25
