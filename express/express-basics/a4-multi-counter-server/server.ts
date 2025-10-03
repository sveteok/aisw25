/*
Multi Counter Server
Create an API with one dynamic endpoint: /counter/:name

When entering this endpoint, the server should respond with a JSON object with the information of how many times this named endpoint has been visited.

For example

Aaron enters /counter/Aaron 🠖 { "Aaron": 1 }
Beatrice enters /counter/Beatrice 🠖 { "Beatrice": 1 }
Aaron enters /counter/Aaron 🠖 { "Aaron": 2 }
Extra: Make an endpoint that accepts two names /counters/:name1/:name2. This endpoint should increase both counters by 1 and return an object with both counters.

Aaron and Cecilia enter /counter/Aaron/Cecilia 🠖 { "Aaron": 3, "Cecilia": 1 }
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
	res.json({ [name]: counter.incrementCounter(name) });
});

server.get('/counters/:name1/:name2', (req, res) => {
	const { name1, name2 } = req.params;
	if (!validateName(name1) || !validateName(name2)) {
		return res.status(400).json({ error: BOTH_NAMES_REQUIRED });
	}
	res.json({ [name1]: counter.incrementCounter(name1), [name2]: counter.incrementCounter(name2) });
});
