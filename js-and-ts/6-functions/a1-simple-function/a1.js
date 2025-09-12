/*
a)
Create a variable in the global scope for language.
Then, create a function named hello. The function should print "Hello World!" in the specified language 
(for example, "fi", "en", "es"). At least 3 languages need to be supported.
Call your function to make sure it works.
*/

// const language = "fi";

// const hello = () => {
//   if (language == "en") {
//     console.log(`${"Hello World!"}`);
//   } else if (language == "fi") {
//     console.log(`${"Hei maailma!"}`);
//   } else if (language == "es") {
//     console.log(`${"Hola mundo!"}`);
//   } else {
//     console.log("Language not supported");
//   }
// };

// hello();

/*
b)
Remove the language variable from the global scope and instead add it as a parameter to your hello function.
Call your hello function 3 times with different values 
for the language parameter to make your program print "Hello World!" to the console with 3 different languages.
*/

const hello = (lang) => {
  if (lang == "en") {
    console.log(`${"Hello World!"}`);
  } else if (lang == "fi") {
    console.log(`${"Hei maailma!"}`);
  } else if (lang == "es") {
    console.log(`${"Hola mundo!"}`);
  } else {
    console.log("Language not supported");
  }
};

hello("en");
hello("fi");
hello("es");

const helloWithSwitch = (lang) => {
  switch (lang) {
    case "en":
      console.log("Hello World!");
      break;
    case "fi":
      console.log(`${"Hei maailma!"}`);
      break;
    case "es":
      console.log(`${"Hola mundo!"}`);
      break;
    default:
      console.log("Language not supported");
      break;
  }
};

helloWithSwitch("en");
helloWithSwitch("fi");
helloWithSwitch("es");
