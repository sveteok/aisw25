/*

By using a single if conditional, write the following conditions:

The game of Hearts can only be played with 4 people (playerCount)
Mark is happy when he is not stressed or if he has ice cream (isStressed, hasIceCream)
It is a beach day if the sun is shining, it is not raining and the temperature is 20 degrees Celsius or above
Arin is happy if he sees either Suzy or Dan on Tuesday night. However, seeing them both at the same time, or being alone, makes him sad.
*/

//The game of Hearts can only be played with 4 people (playerCount)
const playerCount = 4;
if (playerCount === 4) {
  console.log("Play Hearts");
}

//Mark is happy when he is not stressed or if he has ice cream (isStressed, hasIceCream)
const isStressed = true,
  hasIceCream = true;
if (!isStressed || hasIceCream) {
  console.log("Mark is happy");
}

// It is a beach day if the sun is shining, it is not raining and the temperature is 20 degrees Celsius or above
const sunIsShining = true;
const isRaining = true;
const temperature = 20;

if (sunIsShining && !isRaining && temperature >= 20) {
  console.log("It is a beach day");
}

// Arin is happy if he sees either Suzy or Dan on Tuesday night.
// However, seeing them both at the same time, or being alone, makes him sad.

const isTuesdayNight = false;
const seesSuzy = false;
const seesDan = true;

if (isTuesdayNight && seesSuzy !== seesDan) {
  console.log("Arin is happy!!!");
}
