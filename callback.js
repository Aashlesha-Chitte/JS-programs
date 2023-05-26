const calculateSum = (numbers, callback) => {
  setTimeout(() => {
    const sum = numbers.reduce((acc, curr) => acc + curr, 0);
    callback(sum);
  }, 2000);
};

// Usage:
const numbers = [1, 2, 3, 4, 5];

calculateSum(numbers, (result) => {
  console.log("Sum", result);
});
// Output:
// Sum 15 (after 2 seconds)
