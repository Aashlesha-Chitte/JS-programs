// Write a JavaScript function that takes a string with both lowercase and upper case letters as a parameter. It converts upper case letters to lower case, and lower case letters to upper case.

const swapcase = (str) =>
  str
    .split("")
    .map((i) => (/[A-Z]+$/.test(i) ? i.toLowerCase() : i.toUpperCase()))
    .join("");

console.log(swapcase("AaBbc"));

// output:
// "aAbBC"
