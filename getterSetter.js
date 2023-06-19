class Circle {
  constructor(radius) {
    this._radius = radius; // Private property
  }

  // Getter for the radius property
  get radius() {
    return this._radius;
  }

  // Setter for the radius property
  set radius(value) {
    if (value <= 0) {
      throw new Error('Radius must be a positive number.');
    }
    this._radius = value;
  }

  // Getter for the area property
  get area() {
    return Math.PI * this._radius ** 2;
  }
}

const circle = new Circle(5);

console.log(circle.radius);
// Output: 5

circle.radius = 7;

console.log(circle.area);
// Output: 153.93804002589985

// circle.radius = -3;
// Output: Uncaught Error: Radius must be a positive number.
