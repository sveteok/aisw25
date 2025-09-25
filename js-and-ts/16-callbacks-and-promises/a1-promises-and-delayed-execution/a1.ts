/*
a)
Create a function sum that takes one parameter (limit). 
The function sums numbers from 0 up to and including the specified limit, and 
returns the total sum.

console.log(sum(10)); // prints 55 (= 0 + 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10)
b)
As an exercise, create a Promise where you calculate and return the result of sum(50000).

Resolve the promise and console.log the result.

c)
We want a mechanism for delaying the sum calculations.

Create a Promise where you use setTimeout to calculate and return the result of sum(50000), 
but with a delay of 2 seconds.

Resolve the promise and console.log the result.

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
e)
Why, when running the above code, is the result of sum(50000) printed before sum(20000000), despite that the promise for the latter is created above the former?

Add a comment explaining this. If you're unsure, check how asynchronous functions and callbacks work.
*/

//a)
const sum = (limit: number) => {
	return [...Array(limit + 1).keys()].reduce((sum, c) => (sum += c), 0);
};
console.log(sum(10)); // prints 55 (= 0 + 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10)
//55

//b
new Promise<number>((resolve) => {
	resolve(sum(50000));
}).then((sum) => console.log(sum));
//1250025000

//c)
const delay = (ms: number, limit: number, fun: (limit: number) => void) =>
	new Promise((resolve) => {
		setTimeout(() => resolve(fun(limit)), ms);
	});

delay(2000, 50000, sum).then((sum) => console.log(sum));
//1250025000

new Promise<number>((resolve) => {
	setTimeout(() => resolve(sum(50000)), 2000);
}).then((sum) => console.log(sum));
//1250025000

//d
const createDelayedCalculation = (limit: number, ms: number): Promise<number> => {
	return new Promise((resolve) => {
		setTimeout(() => resolve(sum(limit)), ms);
	});
};

console.log('createDelayedCalculation(20000000, 2000)');
// Prints 200000010000000 after a delay of 2 seconds
createDelayedCalculation(20000000, 2000).then((result) => console.log(result));

// Prints 1250025000 after a delay of 0.5 seconds
console.log('createDelayedCalculation(50000, 500)');
createDelayedCalculation(50000, 500).then((result) => console.log(result));
