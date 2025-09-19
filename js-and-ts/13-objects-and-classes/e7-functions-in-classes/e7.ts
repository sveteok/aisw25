/*
Modifying the code of your answer to the previous exercise, add a function getArea to your Rectangle class.

This function must calculate and return the area of the rectangle using the values of the width and height properties.

Call your function and make sure it returns correct values.
*/

class Rectangle {
  width: number;
  height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  getArea(): number {
    return this.width * this.height;
  }
}

const rectangle1: Rectangle = new Rectangle(5, 2);
console.log(rectangle1);
console.log(`Area of the rectangle: ${rectangle1.getArea()}`);
//Rectangle { width: 5, height: 2 }
//Area of the rectangle: 10

const rectangle2: Rectangle = new Rectangle(15, 2);
console.log(rectangle2);
console.log(`Area of the rectangle: ${rectangle2.getArea()}`);
//Rectangle { width: 15, height: 2 }
//Area of the rectangle: 30

const rectangle3: Rectangle = new Rectangle(1, 2);
console.log(rectangle3);
console.log(`Area of the rectangle: ${rectangle3.getArea()}`);
//Rectangle { width: 1, height: 2 }
//Area of the rectangle: 2
