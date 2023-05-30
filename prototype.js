function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

// Add a fullName method to the prototype of the Person object
Person.prototype.fullName = function () {
  return this.firstName + " " + this.lastName;
};

// instance of person object
var p1 = new Person("John", "Doe");

console.log(p1.fullName());
// Output: "John Doe"
