const promises = [
  Promise.resolve("First Resolved Promise"),
  Promise.reject("Rejected Promise"),
  Promise.resolve("Second Resolved Promise"),
];

Promise.allSettled(promises).then((results) => {
  results.forEach((result) => {
    if (result.status === "fulfilled") {
      console.log("Fulfilled::::::::", result.value);
    } else if (result.status === "rejected") {
      console.log("Rejected::::::::", result.reason);
    }
  });
});

// Output:
// Fulfilled:::::::: First Resolved Promise
// Rejected:::::::: Rejected Promise
// Fulfilled:::::::: Second Resolved Promise
