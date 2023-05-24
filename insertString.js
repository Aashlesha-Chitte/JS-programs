//  Write a JavaScript function to insert a string within a string at a particular position (default is 1).

const insert = (string, word = "", index = 0) => {
  return string.substring(0, index) + word + string.substring(index);
};

console.log(insert("We are doing some exercises."));
console.log(insert("We are doing some exercises.", "JavaScript "));
console.log(insert("We are doing some exercises.", "JavaScript ", 18));

// Output:
// "We are doing some exercises."
// "JavaScript We are doing some exercises."
// "We are doing some JavaScript exercises."
