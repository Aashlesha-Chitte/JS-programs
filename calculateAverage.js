// Problem: Calculate the average of all values in an object using reduce.

const calculateAverage = (obj) => {
    const values = Object.values(obj);
    const sum = values.reduce((acc, curr) => acc + curr, 0);
    return sum / values.length;
};

const obj = { a: 4, b: 6, c: 8 };
console.log(calculateAverage(obj));

// Output: 6
