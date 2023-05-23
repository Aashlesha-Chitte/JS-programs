// Write a JavaScript function to remove the first occurrence of a given 'search string' from a string.

const removeFirstOccurence = (string, word) => {
    const index = string.indexOf(word);
    // console.log(index)
    const newString = string.slice(0, index) + string.slice(index + word.length + 1)
    return newString;
}
const string = 'The quick brown fox jumps over the lazy dog';
const word ='the';
const word1 ='over';
const word2 ='dog';
console.log(removeFirstOccurence(string, word));
console.log(removeFirstOccurence(string, word1));
console.log(removeFirstOccurence(string, word2));

// output:
// The quick brown fox jumps over lazy dog
// The quick brown fox jumps the lazy dog
// The quick brown fox jumps over the lazy 
