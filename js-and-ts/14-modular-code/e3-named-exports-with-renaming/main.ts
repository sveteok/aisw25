import {
  formatDate as dateFormat,
  validateEmail as isEmailValid,
  generateId as nextId,
} from "./utilities.js";

console.log(`Tänään on ${dateFormat(new Date(), "fi-FI")}`);
const email = "1test.my_email@gmail.com";
const brokenEmail = "1test.;;my_email@gmail.com";
console.log(`Email ${email} is ${isEmailValid(email) ? "" : "not "}valid`);
console.log(
  `Email ${brokenEmail} is ${isEmailValid(brokenEmail) ? "" : "not "}valid`
);
console.log(`Next ID is ${nextId()}`);
/*
Tänään on 22.09.2025 klo 12.56
Email 1test.my_email@gmail.com is valid
Email 1test.;;my_email@gmail.com is not valid
Next ID is 6087fd9c-f37e-40ef-a40b-c2727ba76f54
*/
