// Problem: Implement a function to check if a given number is a power of two.

const isPowerOfTwo = (n) => {
  if (n <= 1) {
    return false;
  }
  while (n % 2 === 0) {
    n /= 2;
  }
  return n === 1;
};

console.log(isPowerOfTwo(16));
console.log(isPowerOfTwo(1));
// Output: true
// Output: false