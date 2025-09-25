/*
Create a countdown program using Promises, with the setTimeout function.

The program should output something like this:

3    ⇒ Wait 1 second
2    ⇒ Wait another second
1    ⇒ Wait the last 1 second..
GO!
*/

const delay = (): Promise<void> => new Promise((resolve) => setTimeout(resolve, 1000));
const countdown = async (): Promise<void> => {
	const msgArr = [`Wait 1 second`, `Wait another second`, `Wait the last 1 second..`];
	for (let i = 0; i < msgArr.length; i++) {
		console.log(msgArr[i]);
		await delay();
	}
	console.log('GO!');
};

countdown();
