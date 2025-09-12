/*
Imagine that our program is checking the age of someone that is heading into an age-restricted event. No children under age of 15 are allowed.

Have a variable for the person's age (age) and for the age limit (ageLimit). Compare them using the ternary operator and store the result of the comparison into a variable: if the person is allowed, the result should be "allowed", and otherwise "you shall not pass".

Print the result. Try it with different age and limit values.

*/

const age = 15,
  ageLimit = 15;

if (age < ageLimit) {
  console.log("you shall not pass");
} else {
  console.log("allowed");
}

console.log(age < ageLimit ? "you shall not pass" : "allowed");
