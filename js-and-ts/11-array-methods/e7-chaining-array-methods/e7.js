/*
Building on your solution for the 1. part of the previous exercise, 
modify it so that instead of printing the whole array at once, 
you print the animals separately on their own lines.
*/

const animals = ["horse", "cow", "dog", "hamster", "donkey", "cat", "parrot"];

//1. have the letter "o" in their name.
const animalsWithO = animals.filter((a) => a.includes("o"));
animalsWithO.forEach((a) => console.log(a));
/*
Output:
horse
cow
dog
donkey
parrot
*/
