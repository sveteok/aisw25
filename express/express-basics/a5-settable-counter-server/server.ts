/*
Expand the API from the previous assignment by accepting a query parameter 
that can be used to set the individual counters to any number.

Aaron enters /counter/Aaron 🠖 { "Aaron": 1 }
Aaron enters /counter/Aaron?counter=10 🠖 { "Aaron": 10 }
Aaron enters /counter/Aaron 🠖 { "Aaron": 11 }
Extra: Modify your previous extra endpoint so that it simultaneously sets both counters to the provided number.
*/
import counter from './counter.js';
import express from 'express';

const NAME_REQUIRED = 'Name is required';
const BOTH_NAMES_REQUIRED = 'Both names are required';

const server = express();
server.listen(3000, () => {
	console.log('Listening to port 3000');
});

const validateName = (name: string) => name && name.trim() !== '';

server.get('/counter/:name', (req, res) => {
	const { name } = req.params;
	if (!validateName(name)) {
		return res.status(400).json({ error: NAME_REQUIRED });
	}
	const newCounter = req.query.counter ? Number(req.query.counter) : undefined;
	if (newCounter !== undefined && !isNaN(newCounter)) {
		return res.json({
			[name]: counter.resetCounter(name, newCounter),
		});
	}
	res.json({ [name]: counter.incrementCounter(name) });
});

server.get('/counters/:name1/:name2', (req, res) => {
	const { name1, name2 } = req.params;
	if (!validateName(name1) || !validateName(name2)) {
		return res.status(400).json({ error: BOTH_NAMES_REQUIRED });
	}
	const newCounter: number | undefined = req.query.counter ? Number(req.query.counter) : undefined;
	if (newCounter !== undefined && !isNaN(newCounter)) {
		return res.json({
			[name1]: counter.resetCounter(name1, newCounter),
			[name2]: counter.resetCounter(name2, newCounter),
		});
	}
	res.json({ [name1]: counter.incrementCounter(name1), [name2]: counter.incrementCounter(name2) });
});
