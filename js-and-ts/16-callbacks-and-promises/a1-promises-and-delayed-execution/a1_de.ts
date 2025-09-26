/*
d)
Create a function createDelayedCalculation with two parameters: limit and milliseconds.

The function should create and return a Promise similar to c),
expect that instead of 50000 and a fixed delay of 2 seconds,
the limit and delay are configurable.

Make sure the following code works:


// Prints 200000010000000 after a delay of 2 seconds
createDelayedCalculation(20000000, 2000).then(result => console.log(result));


// Prints 1250025000 after a delay of 0.5 seconds
createDelayedCalculation(50000, 500).then(result => console.log(result));
*/
const sum = (limit: number) => (limit * (limit + 1)) / 2;

const createDelayedCalculation = (limit: number, ms: number): Promise<number> => {
	return new Promise((resolve, reject) => {
		try {
			setTimeout(() => resolve(sum(limit)), ms);
		} catch (error) {
			reject(error);
		}
	});
};

console.log('createDelayedCalculation(20000000, 2000)');
// Prints 200000010000000 after a delay of 2 seconds
createDelayedCalculation(20000000, 2000).then((result) => console.log(result));

// Prints 1250025000 after a delay of 0.5 seconds
console.log('createDelayedCalculation(50000, 500)');
createDelayedCalculation(50000, 500).then((result) => console.log(result));

/*
Why, when running the above code, is the result of sum(50000) printed before sum(20000000), 
despite that the promise for the latter is created above the former?

Add a comment explaining this. If you're unsure, 
check how asynchronous functions and callbacks work.

Answer:
The order of Promise resolution depends on the delay,
not the order in which the Promises are created.
The result of sum(50000) will print before sum(20000000)
because 500ms < 2000ms, even though the latter is created first.
*/

export {};
