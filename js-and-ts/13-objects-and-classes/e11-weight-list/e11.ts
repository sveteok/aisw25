/*
Define an object type Weights that allows a key of type string to be associated with a number. 
Use the type to create an object of people's weights. Add some weights to populate the object:

"Anton Andersson": 86.7
"Belle Brooks": 82.3
"Cesar Clarke": 62.8
"Danny DeVito": 95.3
"Elias Engel": 74.6
Write a function getWeight that takes two parameters: an object of type Weights and 
a name of type string and returns the weight of the person if the name is in the list, 
and zero if the name is not found.

Extra: Modify the Weights type to include a value that tells the unit of the weight. 
E.g. "unit": "kg". This property should not be a part of the index signature of the Weights type. Then update the getWeight function to return the weight in a message form, saying "The weight of Belle Brooks is 82.3 kg", or a suitable message if the person is not found.
*/

type Weights = {
  [key: string]: number;
};

const weights: Weights = {
  "Anton Andersson": 86.7,
  "Belle Brooks": 82.3,
  "Cesar Clarke": 62.8,
  "Danny DeVito": 95.3,
  "Elias Engel": 74.6,
};

// const getWeight = (weighs: Weights, name: string): number => {
//   return weighs[name] !== undefined ? weighs[name] : 0;
// };

const getWeight = (weighs: Weights, name: string): number | undefined => {
  return weighs[name];
};

const anton = "Anton Andersson";
const antonWeight = getWeight(weights, anton);
// console.log(`The weight of ${anton} is ${antonWeight} kg`);
console.log(
  `The weight of ${anton} is ${antonWeight !== undefined ? antonWeight : 0} kg`
);

//Extra
type WeightUnit = "kg" | "lbs" | "g";
interface PeopleWeights {
  unit: WeightUnit;
  weights: Weights;
}

const peopleWeights: PeopleWeights = {
  weights: {
    "Anton Andersson": 86.7,
    "Belle Brooks": 82.3,
    "Cesar Clarke": 62.8,
    "Danny DeVito": 95.3,
    "Elias Engel": 74.6,
  },
  unit: "kg",
};

const getWeightMsg = (weighs: PeopleWeights, name: string): string => {
  const weight = weighs.weights[name];
  if (weight !== undefined) {
    return `The weight of ${name} is ${weight} ${weighs.unit}`;
  } else {
    return `The weight of ${name} is not found`;
  }
};
console.log(getWeightMsg(peopleWeights, anton));
