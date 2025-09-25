/*
Create a countdown program using the setTimeout and callback functions.

The program should output something like this:

3     ⇒ Wait 1 second
2     ⇒ Wait another second
1     ⇒ Wait the last 1 second..
GO!
*/

// const countdown = (text: string, func: () => void): void => {
// 	console.log(text);
// 	setTimeout(() => {
// 		func();
// 	}, 1000);
// };

// countdown(`Wait 1 second`, () =>
// 	countdown(`Wait another second`, () =>
// 		countdown(`Wait the last 1 second..`, () => {
// 			console.log('GO!');
// 		})
// 	)
// );

const delay = (msg: string) =>
	new Promise((res) => {
		setTimeout(() => res(msg), 1000);
	});

const countdownV2 = async () => {
	console.log(`Wait 1 second`);
	console.log(await delay(`Wait another second`));
	console.log(await delay(`Wait the last 1 second..`));
	console.log(await delay(`GO!`));
};
countdownV2();
