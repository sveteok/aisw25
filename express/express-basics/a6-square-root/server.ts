/*
Square Root
Create a server that calculates square roots. 
It should have one endpoint: GET /:number that returns the square root of the number provided.

If the number is invalid, meaning it either can not be parsed to a number or 
the number is negative, the server responds with status 400 (Bad Request) and 
appropriate error message.

Extra: Add a query parameter "complex" that when set to true, 
allows imaginary results to be imaginary.

Extra Extra (difficult): Allow also imaginary input when "complex" is set to true.
https://www.cuemath.com/algebra/square-root-of-complex-number/
https://www.emathhelp.net/calculators/algebra-2/nth-roots-of-complex-number-calculator/?i=9i&n=2

*/

import express from 'express';

const ERROR_NEGATIVE_NUMBER = 'Negative number not allowed';
const ERROR_INVALID_NUMBER = 'The number is invalid';
const ERROR_INPUT_PARSING = `Error while input parsing, correct example: '-10.5+7.88i'`;

const server = express();
server.listen(3000, () => {
	console.log('Listening to port 3000');
});

const parseComplex = (input: string): { real: number; imaginary: number; error?: string } => {
	const regex = /^([+-]?\d+(?:\.\d+)?)(?:([+-]\d+(?:\.\d+)?)i)?$|^([+-]?\d*(?:\.\d+)?)i$/;

	const match = input.match(regex);
	if (!match) return { real: 0, imaginary: 0, error: ERROR_INPUT_PARSING };

	let real: number, imaginary: number;

	if (match[1] !== undefined) {
		real = parseFloat(match[1]);
		imaginary = match[2] ? parseFloat(match[2]) : 0;
	} else {
		real = 0;
		let imaginaryStr: string | undefined = match[3];
		if (imaginaryStr === '+' || imaginaryStr === '' || imaginaryStr === undefined) {
			imaginaryStr = '1';
		}
		if (imaginaryStr === '-') {
			imaginaryStr = '-1';
		}
		imaginary = parseFloat(imaginaryStr);
	}

	return { real, imaginary };
};

const getSqrtFromComlex = (
	input: string
): { results: { real: number; imaginary: number }[] | null; error?: string } => {
	const { real, imaginary, error } = parseComplex(input);
	if (error) {
		return { results: null, error };
	}
	const z = Math.sqrt(real ** 2 + imaginary ** 2);
	const real_result = Math.sqrt((z + real) / 2);
	const imaginary_result = Math.sign(imaginary) * Math.sqrt((z - real) / 2);

	const results = [
		{ real: real_result, imaginary: imaginary_result },
		{ real: -real_result, imaginary: -imaginary_result },
	];

	return { results: results };
};

server.get('/:number', (req, res) => {
	const { number } = req.params;

	const complex = req.query.complex === 'true';
	if (complex) {
		const { results, error } = getSqrtFromComlex(number);
		if (error) {
			return res.status(400).json({ error });
		}
		return res.json({
			results,
		});
	}

	const num = Number(number);
	if (Number.isNaN(num)) {
		return res.status(400).json({ error: ERROR_INVALID_NUMBER });
	}

	if (num < 0) {
		return res.status(400).json({ error: ERROR_NEGATIVE_NUMBER });
	}

	return res.json({
		results: [Math.sqrt(num), -Math.sqrt(num)],
	});
});
