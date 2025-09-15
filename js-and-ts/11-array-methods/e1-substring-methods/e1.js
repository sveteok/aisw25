/*
Take the following string:

"According to all known laws
of aviation, there is no way a bee
should be able to fly."
Print all of its words that start with the letter A.
*/

const text =
  "According to all known laws of aviation, there is no way a bee should be able to fly.";

const words = text.split(" ");
const aWords = words.filter((word) => word.charAt(0).toLowerCase() === "a");
console.log(aWords);
//[ 'According', 'all', 'aviation,', 'a', 'able' ]
