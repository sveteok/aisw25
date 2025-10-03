/*
Counter Server
Create an API that consists of only one GET endpoint: /counter

Whenever you enter this endpoint from the browser, it should respond with a JSON object with information on how many times the endpoint has been accessed.

Extra: Create also a GET endpoint /fibonacci. Whenever you enter this endpoint, it should response with a JSON object with the next number in the Fibonacci sequence.
*/
import counter from './counter.js';
import express from 'express';

const server = express();
server.listen(3000, () => {
	console.log('Listening to port 3000');
});

server.get('/counter', (_, res: express.Response) => {
	res.json({ counter: counter.getCounter() });
});

server.get('/fibonacci', (_, res: express.Response) => {
	res.json({ fibonacci: counter.getNextFibonacciNumber() });
});
