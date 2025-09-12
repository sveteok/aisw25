/*
Create a program with two variables: a name and an age number. Assign some values for these variables.
a)
Make the program print the two variables.

b)
Make the program print the line name is age years old.
Tip: To concatenate strings with variables, you can use the plus ( + ) operator. For example, console.log("Hello " + name).
*/

let name = "Svetlana",
  ageNum = 23;
console.log("Hello " + name + " " + ageNum);

console.log(
  name + " is " + ageNum + " " + (ageNum === 1 ? "year" : "yeas") + " old."
);

console.log(`${name} is ${ageNum} ${ageNum === 1 ? "year" : "yeas"} old.`);
