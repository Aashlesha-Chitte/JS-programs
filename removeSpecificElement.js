// Remove a specific element from an array using shorthand techniques.

const removeElement = (arr, element) => arr.filter((item) => item !== element);
console.log(removeElement([1, 2, 3, 4, 5], 3));

// Output:
// [1, 2, 4, 5]
