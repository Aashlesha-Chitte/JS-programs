// Problem: Find the intersection of two arrays and return a new array containing common elements.

const intersection = (arr1, arr2) => {
  let result = [];
  for (let num of arr1) {
    if (arr2.includes(num)) {
      result.push(num);
    }
  }
  return result;
}
const arr1 = [1, 2, 3, 4];
const arr2 = [3, 4, 5, 6];
console.log(intersection(arr1, arr2)); 

// Output: [3, 4]
