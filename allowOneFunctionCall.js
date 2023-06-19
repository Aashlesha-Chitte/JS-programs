// Given a function fn, return a new function that is identical to the original function except that it ensures fn is called at most once.
const once = (fn) => {
  let count = 0;
  return function (...args) {
    count += 1;
    if (count == 1) {
      return fn(...args);
    }
    return undefined;
  };
};

const fn = (a, b, c) => a + b + c;
const onceFn = once(fn);
console.log(onceFn(1, 2, 3));
// Output: 6
console.log(onceFn(2, 3));
// Output: undefined

