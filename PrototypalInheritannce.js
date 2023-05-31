const animal = {
  eats: true,
};

const rabbit = {
  jumps: true,
};

rabbit.__proto__ = animal;

console.log(rabbit.eats); 
// Output:
// true


// Note:
// proto is a non-standard property that allows you to access an object's prototype
// .prototype is a property of a constructor function that is used to define the properties and methods that will be shared by all objects created using that constructor