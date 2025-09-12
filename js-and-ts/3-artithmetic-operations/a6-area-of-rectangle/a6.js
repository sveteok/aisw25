/*
Create two variables: width and length.

Like in the last task, calculate and print out the area. 
However, instead of a square, we're now dealing with a rectangle.

Each variable represents the length of two opposing sides of the rectangle.

EXTRA: In addition to a rectangle, calculate the area of a triangle, 
with the variables representing the length of the triangle's cathetuses.*/

let width = 5,
  length = 10;

let areaOfRectangle = width * length;
console.log(
  `The area of the rectangle (with the width of ${width} and the length of ` +
    `${length}) is ${areaOfRectangle}`
);

let areaOfTriangle = (width * length) / 2;
console.log(
  `The area of the triangle (with cathetuses of ${width} and ${length}) is ${areaOfTriangle}`
);
