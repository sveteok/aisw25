/*
Using the same two numbers as in the previous task, make your program print out which one is larger (just like our example).

However, if the numbers are equal, make the program print "a and b are equal" instead!
*/
const a = 3;
const b = 12;
if (a === b) {
  console.log("a and b are equal");
} else if (a < b) {
  console.log(`${a} < ${b}`);
} else {
  console.log(`${a} > ${b}`);
}
