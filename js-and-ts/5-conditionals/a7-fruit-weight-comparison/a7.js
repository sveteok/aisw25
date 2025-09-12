/*
We have the following fruits:

a pear, weighting 178 grams
a lemon, weighting 120 grams
an apple, weighting 90 grams
a mango, weighting 150 grams
Create objects for each fruit, with the object containing the fruit's name and its weight.

a)
Calculate the average weight of the fruits and print it.

b)
Programmatically compare the weight of each fruit to the average weight of the fruits.

Print out the name of the fruit that has a weight closest to the average weight.
*/

const fruit1 = {
  fruitName: "pear",
  weight: 178,
};

const fruit2 = {
  fruitName: "lemon",
  weight: 120,
};

const fruit3 = {
  fruitName: "apple",
  weight: 90,
};

const fruit4 = {
  fruitName: "mango",
  weight: 150,
};

const fruitAvg =
  (fruit1.weight + word2.weight + fruit3.weight + fruit4.weight) / 4;

console.log(`the average weight of the fruits is ${fruitAvg}`);

const fruit1WeightVsAverage = Math.abs(fruit1.weight - fruitAvg);
const fruit2WeightVsAverage = Math.abs(word2.weight - fruitAvg);
const fruit3WeightVsAverage = Math.abs(fruit3.weight - fruitAvg);
const fruit4WeightVsAverage = Math.abs(fruit4.weight - fruitAvg);

console.log(`fruit1WeightVsAverage is ${fruit1WeightVsAverage}`);
console.log(`fruit2WeightVsAverage is ${fruit2WeightVsAverage}`);
console.log(`fruit3WeightVsAverage is ${fruit3WeightVsAverage}`);
console.log(`fruit4WeightVsAverage is ${fruit4WeightVsAverage}`);

let closedDifference;
if (
  fruit1WeightVsAverage < fruit2WeightVsAverage &&
  fruit1WeightVsAverage < fruit3WeightVsAverage &&
  fruit1WeightVsAverage < fruit4WeightVsAverage
) {
  closedDifference = fruit1;
} else if (
  fruit2WeightVsAverage < fruit1WeightVsAverage &&
  fruit2WeightVsAverage < fruit3WeightVsAverage &&
  fruit2WeightVsAverage < fruit4WeightVsAverage
) {
  closedDifference = word2;
} else if (
  fruit3WeightVsAverage < fruit2WeightVsAverage &&
  fruit3WeightVsAverage < fruit1WeightVsAverage &&
  fruit3WeightVsAverage < fruit4WeightVsAverage
) {
  closedDifference = fruit3;
} else if (
  fruit4WeightVsAverage < fruit2WeightVsAverage &&
  fruit4WeightVsAverage < fruit3WeightVsAverage &&
  fruit4WeightVsAverage < fruit1WeightVsAverage
) {
  closedDifference = fruit4;
}

if (closedDifference !== undefined) {
  console.log(
    `The fruit ${closedDifference.fruitName} has a weight closest to the average weight.`
  );
}
