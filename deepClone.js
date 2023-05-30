const originalObject = {
  name: "John",
  age: 30,
  hobbies: ["reading", "painting", "gaming"],
};

const originalObject2 = {
  name: "Marry",
  age: 25,
  hobbies: ["reading", "painting", "gaming"],
};
// deep copying
const clonedObject = JSON.parse(JSON.stringify(originalObject));

// shallow coping
const clonedObject2 = { ...originalObject2 };
// deep copying
// const clonedObject = structuredClone(originalObject);

clonedObject.name = "Jane";
clonedObject.age = 25;
clonedObject.hobbies.push("swimming");

clonedObject2.name = "Marry Doe";
clonedObject2.age = 28;
clonedObject2.hobbies.push("Music");

console.log(originalObject);
// Output:
// { name: 'John', age: 30, hobbies: ['reading', 'painting', 'gaming'] }

console.log(clonedObject);
// Output:
// {
//   name: "Jane",
//   age: 25,
//   hobbies: ["reading", "painting", "gaming", "swimming"],
// }

console.log(originalObject2);
// Output:
// {
//   name: "Marry",
//   age: 25,
//   hobbies: ["reading", "painting", "gaming", "Music"],
// }
console.log(clonedObject2);
// Output:
// {
//   name: "Marry Doe",
//   age: 28,
//   hobbies: ["reading", "painting", "gaming", "Music"],
// }
