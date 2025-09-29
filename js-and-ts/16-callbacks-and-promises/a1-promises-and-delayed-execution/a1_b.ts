/*
As an exercise, create a Promise where you calculate and return the result of sum(50000).

Resolve the promise and console.log the result.
*/

const sum = (limit: number) => (limit * (limit + 1)) / 2;

new Promise<number>((resolve, reject) => {
	try {
		resolve(sum(50000));
	} catch (error) {
		reject(error);
	}
}).then((sum) => console.log(sum));
//1250025000

export {};
