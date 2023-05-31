const loggingItem = (item, str) => {
  console.log(`logging item: ${item} with ${str}`);
}; 

const loggingItemsWithSetImmediate = (items) => {
  items.forEach((element) => {
    setImmediate(() => {
      loggingItem(element, 'setImmediate');
    });
  });
};

const loggingItemsWithNextTick = (items) => {
  items.forEach((element) => {
    process.nextTick(() => {
      loggingItem(element, 'nextTick');
    });
  });
};

const items = [1, 2, 3, 4, 5];

console.log("Logging items with setImmediate:");
loggingItemsWithSetImmediate(items);

console.log("Logging items with process.nextTick:");
loggingItemsWithNextTick(items);

// Output:
// Logging items with setImmediate:
// Logging items with process.nextTick:
// logging item: 1 with nextTick
// logging item: 2 with nextTick
// logging item: 3 with nextTick
// logging item: 4 with nextTick
// logging item: 5 with nextTick
// logging item: 1 with setImmediate
// logging item: 2 with setImmediate
// logging item: 3 with setImmediate
// logging item: 4 with setImmediate
// logging item: 5 with setImmediate