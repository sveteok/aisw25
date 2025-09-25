import { addition, subtraction, multiplication, division } from "./math.js";

const a = 10;
const b = 2;

console.log(`${a} + ${b} = ${addition(a, b)}`);
console.log(`${a} - ${b} = ${subtraction(a, b)}`);
console.log(`${a} * ${b} = ${multiplication(a, b)}`);
console.log(`${a} / ${b} = ${division(a, b)}`);

/*
10 + 2 = 12
10 - 2 = 8
10 * 2 = 20
10 / 2 = 5
*/
