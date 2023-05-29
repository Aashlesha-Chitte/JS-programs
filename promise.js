const fetchData = (condition) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = { message: "Data fetched successfully" };
      condition ? resolve(data) : reject("Error Occured");
    }, 2000);
  });
};

fetchData(1)
  .then((result) => {
    console.log(result.message);
  })
  .catch((error) => {
    console.log("Error:", error);
  });

fetchData(0)
  .then((result) => {
    console.log(result.message);
  })
  .catch((error) => {
    console.log("Error:", error);
  });

// Output:
// Data fetched successfully
// Error: Error Occured
