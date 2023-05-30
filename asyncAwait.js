const fetchData = (condition) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = { message: "Data fetched successfully" };
      condition ? resolve(data) : reject("Error Occurred");
    }, 2000);
  });
};

const fetchAndLogData = async (condition) => {
  try {
    const result = await fetchData(condition);
    console.log(result.message);
  } catch (error) {
    console.log("Error:", error);
  }
};

fetchAndLogData(1);
fetchAndLogData(0);

// Output:
// Data fetched successfully
// Error: Error Occurred
