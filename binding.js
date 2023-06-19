function greet(message) {
  console.log(message + " " + this.name);
}

const person = {
  name: "John",
};

greet.call(person, "Hello");
// Output: "Hello John"

const boundGreet = greet.bind(person);

boundGreet('Hello');
// Output: "Hello John"

greet.apply(person, ['Hello']);
// Output: "Hello John"