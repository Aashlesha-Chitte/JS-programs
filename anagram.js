// Program to check if two strings are anagram:
// An anagram is a word or phrase formed by rearranging the letters of another word or phrase. 
// For example - "Listen" and "silent" are anagrams of each other

const checkAnagram = (str1, str2) => {
  const sorted1 = str1.split("").reverse().sort().join("");
  const sorted2 = str2.split("").reverse().sort().join("");
  return sorted1 === sorted2;
};
console.log(checkAnagram("hiiih", "hihii"));
console.log(checkAnagram("hiii", "hello"));

// output:
// true
// false
