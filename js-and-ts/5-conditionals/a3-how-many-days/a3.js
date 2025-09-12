/*
Create a program that has a variable representing the number of a month. (1 = January, 2 = February and so on)

The program should print how many days there are in the given month. Do it using an if-else if... structure.

EXTRA: Do this task with a switch-case instead of an if-else structure.
*/

const mounth = 1;
// const month1 = "January",
//   month2 = "February",
//   month3 = "March",
//   month4 = "April",
//   month5 = "January",
//   month6 = "January",
//   month7 = "January",
//   month8 = "January",
//   month9 = "January",
//   month10 = "January",
//   month11 = "January",
//   month12 = "January";

if (mounth < 1 || mounth > 12) {
  console.log("Incorrect month number");
} else if (mounth === 2) {
  console.log(`This month ${mounth} has 28 days`);
} else if (mounth in [1, 3, 5, 7, 8, 10, 12]) {
  console.log(`This month ${mounth} has 31 days`);
} else {
  console.log(`This month ${mounth} has 30 days`);
}

switch (mounth) {
  case 2:
    console.log(`This month ${mounth} has 28 days`);
    break;
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    console.log(`This month ${mounth} has 31 days`);
    break;
  case 4:
  case 6:
  case 9:
  case 11:
    console.log(`This month ${mounth} has 30 days`);
    break;
  default:
    console.log("Incorrect month number");
    break;
}
