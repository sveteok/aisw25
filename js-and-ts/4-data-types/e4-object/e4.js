/*
Create an object that holds data from you: Name, age, do you like pineapple on pizza
After initialization, do the following:
Try adding some property of your own to the object
Try changing some of the values in the object
Check the types of all the data fields in the object and print the types to the console
Print the object created to the console
How are objects printed to the console compared to primitive types?
Check the type of your object and print the type to the console
*/

const student = {
  name: "Bob",
  age: 11,
  likesPineappleOnPizza: true,
};

student.created = new Date();
console.log(student);

student.age += 6;
console.log(student);

console.log(`typeof student.name ${typeof student.name}`);
console.log(`typeof student.age ${typeof student.age}`);
console.log(
  `typeof student.likesPineappleOnPizza ${typeof student.likesPineappleOnPizza}`
);
console.log(`typeof student.created ${typeof student.created}`);
console.log(typeof student);

/*
{
  name: 'Bob',
  age: 11,
  likesPineappleOnPizza: true,
  created: 2025-09-09T15:25:31.538Z
}
{
  name: 'Bob',
  age: 17,
  likesPineappleOnPizza: true,
  created: 2025-09-09T15:25:31.538Z
}
typeof student.name string
typeof student.age number
typeof student.likesPineappleOnPizza boolean
typeof student.created object
object
*/
