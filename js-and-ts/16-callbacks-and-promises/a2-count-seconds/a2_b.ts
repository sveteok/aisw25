/*
Create an async function countSeconds that prints numbers from 0 to 10.

Between printing each number, the program must call waitFor and await the function to complete. 
This makes the program wait exactly 1 second before printing the next number.

Call your countSeconds function. If you did these steps correctly, your program should print numbers from 0 to 10, 
with a delay of 1 second between each number appearing on the terminal.
*/

const printResult = (result: string | number): void => console.log(result);

const waitFor = async (ms: number): Promise<void> => {
	await new Promise((resolve) => setTimeout(resolve, ms));
};
const countSeconds = async (): Promise<void> => {
	for (let i = 0; i <= 10; i++) {
		printResult(i);
		await waitFor(1000);
	}
};
countSeconds();
