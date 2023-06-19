const map = (arr, fn) => {
  return arr.map((a) => fn(a, arr.indexOf(a)));
};

const arr = [1, 2, 3];
const fn1 = (n) => {
  return n + 1;
};
console.log(map(arr, fn1));

const fn2 = (n, i) => {
  return n + i;
};
console.log(map(arr, fn2));

const fn3 = () => {
  return 42;
};
console.log(map(arr, fn3));

// Example 1:
// Input: arr = [1,2,3], fn = function plusone(n) { return n + 1; }
// Output: [2,3,4]

// Example 2:
// The function increases each value by the index it resides in.
// Input: arr = [1,2,3], fn = function plusI(n, i) { return n + i; }
// Output: [1,3,5]

// Example 3:
// Input: arr = [10,20,30], fn = function constant() { return 42; }
// Output: [42,42,42]
