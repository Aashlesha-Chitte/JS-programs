// Program to check if two strings are anagram:
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
