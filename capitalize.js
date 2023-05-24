// Write a JavaScript function to capitalize the first letter of each word in a string.

const capitalize_Words = (str) => {
  const words = str.split(" ");
  const capitalizeWords = words
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
  return capitalizeWords;
};

console.log(capitalize_Words("js string exercises"));

// output:
// "Js String Exercises"
