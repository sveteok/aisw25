/*
Make a third version of the previous exercise by using Promise.all.
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
	const [valueOne, valueTwo] = await Promise.all([getValue(), getValue()]);
	console.log(`Value 1 is ${valueOne.value} and value 2 is ${valueTwo.value}`);
}

getValuesWithAsyncAwait();

function getValuesWithThen() {
	Promise.all([getValue(), getValue()]).then(([valueOne, valueTwo]) => {
		console.log(`Value 1 is ${valueOne.value} and value 2 is ${valueTwo.value}`);
	});
}

getValuesWithThen();
