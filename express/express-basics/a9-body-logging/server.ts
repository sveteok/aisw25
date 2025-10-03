/*
Body Logging
Enable body parsing in your application.

Modify your logger middleware so that in addition to existing functionality, 
it also logs the request body if it exists.

*/
import { loggerMiddleware, logger, unknownEndpoint } from './middleware.js';

import express from 'express';

const server = express();
const port = 3000;

server.use(express.json());
server.use(express.urlencoded({ extended: false }));
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
