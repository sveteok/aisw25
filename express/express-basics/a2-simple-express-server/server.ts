/*
Create a basic Express application. 
The application should respond to GET requests by returns a response 
with the following content: "Hello world!".

Extra: Start two servers simultaneously, using different ports. 
Make sure both are running at the same time
*/
import express from 'express';
import type { Response } from 'express';

const server = express();

server.get('/', (_, res: Response) => {
	res.send('Hello world!');
});

server.get('/hello', (_, res) => {
	res.send('Hello!');
});

const port3000 = 3000;
server.listen(port3000, () => {
	console.log(`Server running at http://localhost:${port3000}`);
});

const port3001 = 3001;
server.listen(3001, () => {
	console.log(`Server running at http://localhost:${port3001}`);
});

/*
Server running at http://localhost:3000
Server running at http://localhost:3001
*/
