const promises = [
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise 1");
    }, 2000);
  }),
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise 2");
    }, 3000);
  }),
  new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Promise 3");
    }, 1000);
  }),
];

Promise.race(promises)
  .then((result) => {
    console.log("First promise settled:", result);
  })
  .catch((error) => {
    console.log("First promise rejected:", error);
  });

// Output:
//   First promise rejected: Promise 3
