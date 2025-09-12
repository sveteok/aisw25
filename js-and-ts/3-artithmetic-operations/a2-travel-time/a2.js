/*
Create variables for distance (kilometers) and speed (km/h), and give them some values. Calculate and print out how many hours it takes to travel the distance at the given speed.

EXTRA: Express the time in hours and minutes instead of only hours. For example, traveling 120 km at 50 km/h would take 2 hours 24 minutes."
*/

let distance = 120,
  speed = 50;

let hoursInDecimal = 120 / 50;
console.log(
  "Traveling 120 km at 50 km/h would take " + hoursInDecimal + " hours."
);

let hours = Math.floor(hoursInDecimal);
let minutes = Math.round((hoursInDecimal - hours) * 60);

console.log(
  "Traveling 120 km at 50 km/h would take " + hours + "h. " + minutes + "min."
);
