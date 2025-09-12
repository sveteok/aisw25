/*
Create two boolean-type variables and give them some values.

Write a program that:

prints "both are true" in case both are true,
"first is true, second is false" in case only the first of them is true
"first is false, second is true" in case only the second of them is true
"both are false" in case neither is true

*/

const booleanVal1 = false,
  booleanVal2 = false;

if (booleanVal1 && booleanVal2) {
  console.log("both are true");
} else if (booleanVal1 && !booleanVal2) {
  console.log("first is true, second is false");
} else if (booleanVal2 && !booleanVal1) {
  console.log("first is false, second is true");
} else {
  console.log("both are false");
}
