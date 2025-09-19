/*
Create the following array:

["banana", "apple", "pear", "pineapple", "lemon"];

Create a loop where you go through items in the array and print all of them.

EXTRA: Print only the fruits that have more than 5 letters in their name.
*/

const fruits: string[] = ["banana", "apple", "pear", "pineapple", "lemon"];

for (let index: number = 0; index < fruits.length; index++) {
  console.log(fruits[index]);
}

//Extra
for (let index: number = 0; index < fruits.length; index++) {
  if (fruits[index].length > 5) {
    console.log(fruits[index]);
  }
}
export {};
