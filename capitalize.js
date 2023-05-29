// Write a JavaScript function to capitalize the first letter of each word in a string.

const capitalize_Words = (str) =>
  str.split(" ").reduce((acc, word) => {
    return acc + " " + word[0].toUpperCase() + word.slice(1);
  }, "");

console.log(capitalize_Words("js string exercises"));

// output:
// "Js String Exercises"
