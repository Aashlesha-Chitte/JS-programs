const argumentsLength = (...args) => {
  return args.length;
};

console.log(argumentsLength({}, null, "3")); // 3
console.log(argumentsLength(5)); // 1
