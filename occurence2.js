// JavaScript Program to Check the Total Number of Occurrences of a Character in the String

const input = "AAAABBCABBDR";
//
let obj = {};
let count = 1;

for (const key of input) {
  if (obj[key]) {
    obj[key] = obj[key] + count;
  } else {
    obj[key] = count;
  }
}

console.log(JSON.stringify(obj, null, 2));

// output:
// {
//   "A": 5,
//   "B": 4,
//   "C": 1,
//   "D": 1,
//   "R": 1
// }
