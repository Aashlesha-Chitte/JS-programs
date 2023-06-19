const createCounter = (init) => {
  let value = init;
  return {
    increment: () =>{
      return  ++value;
    },
    decrement: () => {
      return --value;
    },
    reset: () => {
      value = init;
      return value;
    },
  };
};

const counter = createCounter(5);
console.log(counter.increment()); 
// Output: 6
console.log(counter.reset()); 
// Output: 5
console.log(counter.decrement()); 
// Output: 4
