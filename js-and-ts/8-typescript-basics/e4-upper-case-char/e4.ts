/*
Create a function upperCaseChar that takes two parameters: text (string) and index (number). 
The function should print the text so that the character 
that corresponds to the given index number is turned to uppercase.

For example:

upperCaseChar("Sunset and evening star", 11) 
// prints "Sunset and Evening star"
*/

function upperCaseChar(text: string, index: number): void {
  if (index < 0 || index >= text.length) {
    console.log("Invalid index");
    return;
  }
  const upperCased =
    text.slice(0, index) +
    text.charAt(index).toUpperCase() +
    text.slice(index + 1);
  console.log(upperCased);
}

upperCaseChar("Sunset and evening star", 11);
// Sunset and Evening star
