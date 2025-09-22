/*
Modify your answer to the previous exercise so that instead of a Rectangle class, 
there's a Shape class, with the width and height properties. Then,

Add a getArea method to the Shape class, which returns 0.
Add a Rectangle class that is derived from the Shape class. The class must have a getArea method that returns the area of the rectangle.
Similarly to point 1, add an Ellipse class that is derived from the Shape class. Hint: an ellipse's area is pi * width / 2 * height / 2
Similarly to point 1, add a Triangle class that is derived from the Shape class
Create some shapes of each type and call their getArea functions to make sure that your code works.
*/

// class Shape {
//   constructor(public width: number, public height: number) {
//     this.width = width;
//     this.height = height;
//   }

//   getArea(): number {
//     return 0;
//   }
// }

abstract class Shape {
  constructor(public width: number, public height: number) {
    this.width = width;
    this.height = height;
  }

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

class Ellipse extends Shape {
  constructor(width: number, height: number) {
    super(width, height);
  }

  override getArea(): number {
    return (Math.PI * this.width * this.height) / 4;
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
];

for (const shape of shapes) {
  console.log(`${shape.constructor.name} area: ${shape.getArea()}`);
}
/*
Rectangle area: 10
Ellipse area: 23.561944901923447
Triangle area: 3
*/
