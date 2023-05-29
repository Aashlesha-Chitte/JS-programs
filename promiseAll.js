const promises = [
  Promise.resolve("First Resolved Promise"),
  Promise.reject("Rejected Promise"),
  Promise.resolve("Second Resolved Promise"),
];

Promise.all(promises)
  .then((results) => {
    console.log("result::::", results);
  })
  .catch((err) => {
    console.log("Error::::", err);
  });

// Output:
//   Error:::: Rejected Promise
