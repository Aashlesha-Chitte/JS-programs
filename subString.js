//  Write a JavaScript function to get a part of a string after a specified character.

const subStrAfterChars = (str, char, c) => {
  return c === "a" ? str.split("").slice(0, str.indexOf(char)).join("")
    : str.split("").slice(str.indexOf(char) + 1).join("");
};
console.log(subStrAfterChars("w3resource: JavaScript Exercises", ":", "a"));
console.log(subStrAfterChars("w3resource: JavaScript Exercises", "E", "b"));

// Output :
// "w3resource"
// "xercises"
