/*
Continue with previous exercise and refactor the code so that console.log will take 2 variables, one let and one const

console.log(firstName + text)
where we can alter the name while the text remains the same. Print few different varieties.

Test what happens if you try to alter text the same way as the name.

Note: Use camelCase for variable names.
*/
let firstName = "Svetlana";

const text = " is in the chat";
console.log(firstName + text);

firstName = "Rubini";
console.log(firstName + text);

firstName = "Anjalee";
console.log(firstName + text);
