// Find the first longest word in a sentence using shorthand techniques.
const findLongestWord = (sentence) =>
  sentence
    .split(" ")
    .reduce(
      (longest, word) => (word.length > longest.length ? word : longest),
      "");
console.log(findLongestWord("The quick brown fox jumps over the lazy dog"));

// output:
// quick