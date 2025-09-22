/*
Adding to your answer to the previous exercise,

Add a Square class. It should be derived from Rectangle and be otherwise identical, 
but because the sides of a square are all identical in length, its constructor should only take 1 parameter. 
Call the base class constructor properly to create a square.
Similarly, add a Circle class, derived from Ellipse, and give it a constructor that only takes 1 parameter.
Create some Squares and Circles of a size that you find cool and call their getArea function to print their areas.
*/

abstract class Shape {
  constructor(public width: number, public height: number) {}

  abstract getArea(): number;
}

class Rectangle extends Shape {
  constructor(width: number, height: number) {
    super(width, height);
  }

  override getArea(): number {
    return this.width * this.height;
  }
}

class Square extends Rectangle {
  constructor(width: number) {
    super(width, width);
  }
}

class Ellipse extends Shape {
  constructor(width: number, height: number) {
    super(width, height);
  }

  override getArea(): number {
    return (Math.PI * this.width * this.height) / 4;
  }
}

class Circle extends Ellipse {
  constructor(radius: number) {
    super(radius, radius);
  }
}

class Triangle extends Shape {
  constructor(width: number, height: number) {
    super(width, height);
  }

  override getArea(): number {
    return (this.width * this.height) / 2;
  }
}

const shapes: Shape[] = [
  new Rectangle(5, 2),
  new Ellipse(15, 2),
  new Triangle(3, 2),
  new Square(5),
  new Circle(15),
];

for (const shape of shapes) {
  console.log(`${shape.constructor.name} area: ${shape.getArea()}`);
}

/*
Rectangle area: 10
Ellipse area: 23.561944901923447
Triangle area: 3
Square area: 25
Circle area: 176.71458676442586
*/
