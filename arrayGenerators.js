var inorderTraversal = function* (arr) {
  const c = arr.flat(Infinity);
  for (i of c) {
    yield i;
  }
};

const generator = inorderTraversal([[[6]], [1, 3], []]);
console.log(generator.next().value); // 6
console.log(generator.next().value); // 1
console.log(generator.next().value); // 3
console.log(generator.next().done); // true
s