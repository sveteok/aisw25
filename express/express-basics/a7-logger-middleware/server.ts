/*
Logger Middleware
Create a new project called Student Registry. 
We will be developing this program in stages during this lecture. 
For now it should have a single GET endpoint /students that returns an empty list.

Create a logger middleware function that is used in all the project's endpoints. 
The middleware should log

the time the request was made
the method of the request
the url of the endpoint
*/
import { loggerMiddleware, logger } from './middleware.js';

import express from 'express';

const server = express();
const port = 3000;

server.use(loggerMiddleware);

server.get('/students', (_, res: express.Response) => {
	res.send([]);
});

server.get('/logs', (_, res: express.Response) => {
	res.json(logger.getLogs());
});

server.listen(port, () => {
	console.log(`Server running at http://localhost:${port}`);
});
