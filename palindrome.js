// Program to check if a string is a palindrome:

const checkPallindrome = (str) => {
  const reversed = str.split("").reverse().join("");
  return str === reversed;
};
console.log(checkPallindrome("hiiih"));
console.log(checkPallindrome("hiii"));

// output:
// true
// false
