/*
Create an async function waitFor that takes in a number (milliseconds) as a parameter.

When called, the function must wait for the specified amount of time to pass before returning, without doing anything else.

Tip: setTimeout wrapped in a Promise + await.
*/

const waitFor = async (ms: number): Promise<void> => {
	await new Promise((resolve) => {
		setTimeout(resolve, ms);
	});
};

waitFor(2000);
