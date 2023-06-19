hoistedFunction(); 
// Output: "Hello!"
function hoistedFunction() {
  console.log("Hello!");
}

console.log(hoistedVariable); 
// Output: undefined
var hoistedVariable = "Hello!";
console.log(hoistedVariable); 
// Output: "Hello!"


// console.log(hoistedVariable2); 
// Output: ReferenceError: hoistedVariable is not defined
let hoistedVariable2 = "Hello!";
console.log(hoistedVariable); 
// Output: "Hello!"

// sayHello(); 
// Output: TypeError: sayHello is not a function
var sayHello = () => {
  console.log("Hello!");
};
sayHello();
// Output: "Hello!"
