// Write a JavaScript function to concatenate a given string n times (default is 1).

const repeat = (str, no) => {
  return str.repeat(no ? no : 1);
};
console.log(repeat("Ha!"));
console.log(repeat("Ha!", 3));
console.log(repeat("Ha!", 2));

// output:
// "Ha!"
// "Ha!Ha!"
// "Ha!Ha!Ha!"
