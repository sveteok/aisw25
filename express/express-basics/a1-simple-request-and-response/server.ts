/*
Create a basic HTTP-server application. 
The application should respond to GET requests by returning a response 
with the following content: "Hello world!".

Test your application either with client such as Insomnia or Postman, or 
by navigating your browser to http://localhost:<your_portnumber>
*/

import http, { ServerResponse } from 'http';

const server = http.createServer((_, res: ServerResponse): void => {
	res.writeHead(200, { 'Content-Type': 'text/plain' });
	res.write('Hello world!');
	res.end();
});

const port = 3000;
server.listen(port);
console.log(`Server running at http://localhost:${port}/`);
