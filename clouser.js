// Create a function that returns an object with methods to get and set a private variable using closures.

const createCounter = () => {
  let count = 0;

  return {
    getCount: () => count,
    increment: () => {
      count++;
    },
    decrement: () => {
      count--;
    },
  };
};

const counter = createCounter();
console.log(counter.getCount());
// Output: 0
counter.increment();
counter.increment();
console.log(counter.getCount());
// Output: 2
counter.decrement();
console.log(counter.getCount());
// Output: 1
