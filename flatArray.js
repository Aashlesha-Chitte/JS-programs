// Problem Statement: Given a nested array, flatten it to a single-level array.
const arr = [1, 2, [1, 2, [3, 4, [5, 6], 7], 8]];
console.log(arr.flat(Infinity));

// output:
// [1, 2, 1, 2, 3, 4, 5, 6, 7, 8];
