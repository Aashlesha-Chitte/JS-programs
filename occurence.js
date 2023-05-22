// JavaScript Program to Check the Number of Occurrences of a Character in the String

const input = "AABBCABBDR";
let output = "";
let count = 1;

for (let i = 0; i < input.length; i++) {
  if (input[i] === input[i + 1]) {
    count++;
  } else {
    output += input[i] + count;
    count = 1;
  }
}
console.log(output);
