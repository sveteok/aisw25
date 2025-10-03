/*
 404 Not Found
Add a middleware function that sends a response with status code 404 and 
an appropriate error message, if user tries to use an endpoint that does not exist.

If you have not already done so, move all your middleware to a separate file, 
to keep your program clean and readable.

*/
import { loggerMiddleware, logger, unknownEndpoint } from './middleware.js';

import express from 'express';

const server = express();
const port = 3000;

server.use(loggerMiddleware);

server.get('/students', (_, res: express.Response) => {
	res.send([]);
});

server.get('/logs', (_, res) => {
	res.json(logger.getLogs());
});

server.use(unknownEndpoint);

server.listen(port, () => {
	console.log(`Server running at http://localhost:${port}`);
});
