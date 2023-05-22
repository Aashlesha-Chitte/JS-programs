// JavaScript Program to Sort Words in Alphabetical Order
// Enter a sentence:' I am learning JavaScript'
// The sorted words are:
// am
// I
// JavaScript
// learning

const sortWord = (sentense) => {
  const arr = sentense.split(" ");
  return arr.sort((a, b) => a.localeCompare(b));
};

const words = sortWord("I am learning JavaScript");
words.forEach((word) => {
  console.log(word);
});
