/*
Create a ATM program to check your balance. Create variables balance, isActive, checkBalance.

Write conditional statements that implement the flowchart below.

Change the values of balance, checkBalance, and isActive to test your code!
*/

const banance = 10,
  isActive = false,
  checkBalance = false;

if (checkBalance) {
  if (isActive && banance > 0) {
    console.log(`Balance ${banance}`);
  } else if (!isActive) {
    console.log("Your account is not active!");
  } else if (banance === 0) {
    console.log("Your account is empty!");
  } else {
    console.log("Your account is negative");
  }
} else {
  console.log("Have a nice day!");
}
