/*
Use the following asynchronous function twice to get 2 random values:

interface RandomValue {
  value: number;
}

const getValue = function (): Promise<RandomValue> {
  return new Promise<RandomValue>((res, rej) => {
    setTimeout(() => {
      res({ value: Math.random() });
    }, Math.random() * 1500);
  });
};
console.log() the two resulting values:

console.log(`Value 1 is ${valueOneHere} and 
  value 2 is ${valueTwoHere}`);
Do this exercise twice with both methods, async + await and promise.then()!
*/

interface RandomValue {
	value: number;
}

const getValue = function (): Promise<RandomValue> {
	return new Promise<RandomValue>((res) => {
		setTimeout(() => {
			res({ value: Math.random() });
		}, Math.random() * 1500);
	});
};

async function getValuesWithAsyncAwait() {
	const valueOne = await getValue();
	const valueTwo = await getValue();

	console.log(`Value 1 is ${valueOne.value} and value 2 is ${valueTwo.value}`);
}

getValuesWithAsyncAwait();

function getValuesWithThen() {
	let valueOne: number, valueTwo: number;
	getValue()
		.then((v) => {
			valueOne = v.value;
			return getValue();
		})
		.then((v) => {
			valueTwo = v.value;
			console.log(`Value 1 is ${valueOne} and value 2 is ${valueTwo}`);
		});
}

getValuesWithThen();
