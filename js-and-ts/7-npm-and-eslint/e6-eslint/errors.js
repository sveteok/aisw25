/*
Use the previous instructions to create a new project and 
install ESlint and Prettier there. 
Use this config for ESLint (Exercise continues on the next slide):

export default defineConfig([
  {
    // ...
    rules: {
      "no-unused-vars": ["error", { args: "none", ignoreRestSiblings: true }],
      "no-undef": "error",
      "no-const-assign": "error",
      "no-redeclare": "error",
      "prefer-const": "error",
      "eqeqeq": "error"
    },
  },
]);

Exercise 3: ESLint continued
Use this Prettier config:

const config = {
  trailingComma: "es5",
  tabWidth: 2,
  semi: true,
  singleQuote: false,
};
Create a new file called errors.js and add this code to it. Fix any problems that ESLint finds! Use Prettier to also format the code.

errors.js:

const name = 'Han'
name = 'Solo'           

let planet = 'Tatooine'
let planet = 'Hoth'     

console.log(result)     

var ship = 'Falcon'     

let speed = 0
if (speed == '0') {     
        console.log('stopped')
}

const unused = 123   
*/

// eslint no-unused-vars: "error"
// const name = "Han";
//eslint "no-const-assign": "error"
// name = "Solo";

let planet = "Tatooine";
// let planet = "Hoth"; //Parsing error
// eslint no-unused-vars: "error"
planet = "Hoth";
console.log(planet);

// eslint "no-undef": "error"
// console.log(result);

// eslint no-unused-vars: "error"
// var ship = "Falcon";

const speed = 0;
// if (speed == "0") { //eslint eqeqeq: "error"
if (speed === "0") {
  console.log("stopped");
}

// eslint no-unused-vars: "error"
// const unused = 123;
