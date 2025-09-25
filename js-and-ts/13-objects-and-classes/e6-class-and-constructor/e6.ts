/*
Create a new Rectangle class with properties width and height.

The class constructor should take values for these properties as parameters and assign them.

Create a few new rectangles and print them.
*/

class Rectangle {
  width: number;
  height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }
}

const rectangle1: Rectangle = new Rectangle(5, 2);
console.log(rectangle1);
//Rectangle { width: 5, height: 2 }

const rectangle2: Rectangle = new Rectangle(15, 2);
console.log(rectangle2);
//Rectangle { width: 15, height: 2 }

const rectangle3: Rectangle = new Rectangle(1, 2);
console.log(rectangle3);
//Rectangle { width: 1, height: 2 }
