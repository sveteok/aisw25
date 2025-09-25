/*
reate an object that contains fruits as keys and their average weights (in grams) as values.

banana: 118
apple: 85
mango: 200
lemon: 65
Then create a function printWeight(fruit) that prints the weight of the given fruit. 
For example, printWeight("banana") would print "banana weighs 118 grams".

EXTRA: If the given fruit doesn't exist, make the function print a list of supported fruits.
*/

const fruitWeights: { [key: string]: number } = {
  banana: 118,
  apple: 85,
  mango: 200,
  lemon: 65,
};

const printWeight = (fruit: string): void => {
  if (fruit in fruitWeights) {
    console.log(`${fruit} weighs ${fruitWeights[fruit]} grams`);
  } else {
    console.log(
      `No data about the weight of ${fruit}. Supported fruits: ${Object.keys(
        fruitWeights
      ).join(", ")}`
    );
  }
};

printWeight("banana"); //banana weighs 118 grams
printWeight("strawberry"); //No data about the weight of strawberry. Supported fruits: banana, apple, mango, lemon
