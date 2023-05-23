// Program to remove duplicates from an array or string

const removeDupFromString = () => {
  const str = "hiikjlol";
  const remove = new Set([...str.split("")]);
  return [...remove].join("");
};
console.log(removeDupFromString());

//  Program to remove duplicates from an array

const removeDupFromArray = () => {
  const str = ["h", "i", "k", "j", "l", "o"];
  const remove = new Set([...str]);
  return [...remove];
};
console.log(removeDupFromArray());

// output:
// hikjlo
// [ 'h', 'i', 'k', 'j', 'l', 'o' ]
