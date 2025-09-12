/*
In past slides we had an example of how automatic type conversion can lead to some unwanted or surprising results. In the example this piece of code was introduced:

const text3 = "monkeys " + 6 + 6;  // "monkeys 66"
Why does "monkeys" + 6 + 6 result "monkeys 66" where as 6 + 6 + "monkeys" results "12 monkeys"?

Try to fix the example line above so that it would result "monkeys 12".
*/

const text3 = "monkeys " + (6 + 6); // "monkeys 66"
console.log(text3);
