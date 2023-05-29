// Program to check if a string is a palindrome:

// A palindrome text is a sequence of characters that reads the same forward and backward. In other words, when the text is reversed, it remains unchanged. It is like a mirror image of itself.
// For Example madam, level
const checkPallindrome = (str) => {
  const reversed = str.split("").reverse().join("");
  return str === reversed;
};
console.log(checkPallindrome("hiiih"));
console.log(checkPallindrome("hiii"));

// output:
// true
// false
