/*
Exercise 3: Array
Create an array of fruits (you can pick what you like the most) and print the length of the array to the console.
Try changing some of the values in the array and then printing the values to the console.
Add a value to the array using push -method HINT: the syntax is myArray.push(newValue);
To which position was the new value added?
Check what is the array length after pushing new values.
Remove a value from the array using pop -method HINT: the syntax is myArray.pop();
Which element was removed from the array?
Check what is the array length after removing values.
Try printing the whole array to the console.
How are arrays printed to the console compared to primitive types?
Check the type of your array using typeof and print the type to the console.

 */

const fruits = ["Banana", "Apple", "Pineapple", "Mango"];
console.log(fruits); //[ 'Banana', 'Apple', 'Pineapple', 'Mango' ]

fruits[0] = "Pear"; // This is ok
// fruits = ["Kiwi", "Peach", "Strawberry", "Cherry"]; // This will result an error
console.log(fruits); // [ 'Pear', 'Apple', 'Pineapple', 'Mango' ]

fruits.push("Kiwi");
console.log(fruits); //[ 'Pear', 'Apple', 'Pineapple', 'Mango', 'Kiwi' ]
console.log(fruits.length); // 5

fruits.pop();
console.log(fruits); //[ 'Pear', 'Apple', 'Pineapple', 'Mango' ]
console.log(fruits.length); //4
console.log(typeof fruits); //object

/*
[ 'Banana', 'Apple', 'Pineapple', 'Mango' ]
[ 'Pear', 'Apple', 'Pineapple', 'Mango' ]
[ 'Pear', 'Apple', 'Pineapple', 'Mango', 'Kiwi' ]
5
[ 'Pear', 'Apple', 'Pineapple', 'Mango' ]
4
object
*/
