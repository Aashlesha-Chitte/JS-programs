const loggingItem = (item) => {
  console.log(`Logging item: ${item}`);
};

const loggingItems = (items) => {
  items.forEach((element) => {
    process.nextTick(() => {
      loggingItem(element);
    });
  });
};
const items = [1, 2, 3, 4, 5];
loggingItems(items);

// Output:
// Logging item: 1
// Logging item: 2
// Logging item: 3
// Logging item: 4
// Logging item: 5