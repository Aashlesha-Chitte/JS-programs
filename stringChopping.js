// Write a JavaScript function to chop a string into chunks of a given length.
// Test Data :
// console.log(string_chop('javascript'));
// console.log(string_chop('javascript', 2));
// console.log(string_chop('javascript',3));
// [ 'javascript' ]
// [ 'ja', 'va', 'sc', 'ri', 'pt' ]
// [ 'jav', 'asc', 'rip', 't' ]
const string_chop = (string, num) => {
  const chunks = [];
  if (num) {
    for (let i = 0; i < string.length; i += num) {
      chunks.push(string.slice(i, i + num));
    }
    return chunks;
  }
  return [string];
};
console.log(string_chop("javascript"));
console.log(string_chop("javascript", 2));
console.log(string_chop("javascript", 3));
