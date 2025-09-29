/*
c)
We want a mechanism for delaying the sum calculations.

Create a Promise where you use setTimeout to calculate and 
return the result of sum(50000),
but with a delay of 2 seconds.

Resolve the promise and console.log the result.
*/

const sum = (limit: number) => (limit * (limit + 1)) / 2;

// first approach
new Promise<number>((resolve, reject) => {
	try {
		setTimeout(() => resolve(sum(50000)), 2000);
	} catch (error) {
		reject(error);
	}
}).then((sum) => console.log(sum));
//1250025000

// second approach if need reusability
const delay = (ms: number, limit: number, fun: (limit: number) => number) =>
	new Promise((resolve, reject) => {
		try {
			setTimeout(() => resolve(fun(limit)), ms);
		} catch (error) {
			reject(error);
		}
	});

delay(2000, 50000, sum).then((sum) => console.log(sum));
//1250025000

export {};
