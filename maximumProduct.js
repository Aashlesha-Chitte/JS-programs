// Problem: Given an array of integers, find the maximum product of any two numbers.

const maxProduct = (arr) => {
  return Math.max(...arr) * arr.sort((a, b) => b - a)[1];
};

// or
const maxiumProduct = (arr) => {
  let max1 = -Infinity;
  let max2 = -Infinity;

  for (let num of arr) {
    if (num > max1) {
      max2 = max1;
      max1 = num;
    } else if (num > max2) {
      max2 = num;
    }
  }

  return max1 * max2;
};

const nums = [5, 7, 2, 4, 8, 1];
const numbers = [5, 8, 2, 4, 8, 1];
console.log(maxProduct(nums));
console.log(maxiumProduct(numbers));

// Output: 56
// Output: 64
