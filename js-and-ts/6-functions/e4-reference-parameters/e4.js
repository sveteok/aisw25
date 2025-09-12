/*
Define a function that takes an array as a parameter and changes the first element of the array
Define the array you give to the function and print it to the console before the function execution
Print the array after the function execution
*/

const myArray = [2, 4, "Test"];
const changeArr = (arr) => {
  arr[0] = "New value";
};

console.log(myArray);
changeArr(myArray);
console.log(myArray);

/*Define a function that takes an object as a parameter and adds a property to the object
Define the object you give to the function and print it to the console before the function execution
Print the object after the function execution
*/
const myObj = {
  name: "Sveta",
};
const addAgePropertyToObject = (obj) => {
  obj.age = 7;
};

console.log(myObj);
addAgePropertyToObject(myObj);
console.log(myObj);
