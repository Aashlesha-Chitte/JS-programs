// JavaScript Program to Check the Number of Occurrences of a Character in the String

const input = "AABBCABBDR";
let output = "";

let currentChar = null;
let count = 0;

for (let char of input) {
  if (char === currentChar) {
    count++;
  } else {
    if (currentChar) {
      output += currentChar + count;
    }
    currentChar = char;
    count = 1;
  }
}
output += currentChar + count;
console.log(output);

// output:
// A2B2C1A1B2D1R1
