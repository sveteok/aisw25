/*
Create a variable called name.

If the variable has a valid value, make the program greet the user by their name.

If the variable's value is null or undefined, make the program print "Please give me your name!" instead.

Make use of the ternary operator in this task.

*/
// let name;
const name = undefined; //null; //"Svetlana";

console.log(
  name === null || name === undefined
    ? "Please give me your name!"
    : `Hello ${name}`
);
