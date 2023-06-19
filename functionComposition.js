var compose = function (functions) {
  return function (x) {
    return functions.reduceRight((acc, curr) => {
      return curr(acc);
    }, x);
  };
};

// Example 1
const functions1 = [(x) => x + 1, (x) => x * x, (x) => 2 * x];
const x1 = 4;
const fn = compose(functions1);
console.log(fn(x1));
// Output: 65

// Example 2
const functions2 = [(x) => 10 * x, (x) => 10 * x, (x) => 10 * x];
const x2 = 1;
const fn2 = compose(functions2);
console.log(fn2(x2));
// Output: 65

// Example 3
const functions3 = [];
const x3 = 42;
const fn3 = compose(functions3);
console.log(fn3(x3));
// Output: 42
