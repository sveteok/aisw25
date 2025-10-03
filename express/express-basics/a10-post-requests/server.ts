/*
POST Requests
Add two more endpoints to your app:

POST /students should expect the request body to include student name and email. 
If either of these parameters are missing, the endpoint should return a response 
with status code 400 and an error message. 
The endpoint should store the student information in an array called students. 
Each student should have a unique ID number. 
The endpoint should return an empty response with status code 201.

GET /students/:id should return the information of a single student, 
identified by the id request parameter. The response should be in JSON format. 
If there is no such student, the endpoint should return 404.

Modify the GET /students endpoint to return the list of all student ids, without names or emails.
*/
import express from 'express';
import { loggerMiddleware, unknownEndpoint, validateStudentData, type Body } from './middleware.js';
import logger from './logger.js';
import students from './students.js';

const server = express();
const port = 3000;

server.use(express.json());
server.use(express.urlencoded({ extended: false }));
server.use(loggerMiddleware);

server.get('/students', (_, res: express.Response) => {
	res.json(students.getStudentIds());
});

server.get('/students/:id', (req: express.Request, res: express.Response) => {
	const id = req.params.id || '';
	const student = students.findStudentById(id);

	if (!student) {
		res.status(404).send({ error: 'Student not found' });
		return;
	}
	res.json(student);
});

server.post('/students', validateStudentData, (req: express.Request, res: express.Response) => {
	const { name, email }: Body = req.body;
	students.add(name, email);
	res.status(201).send();
});

server.get('/logs', (_, res) => {
	res.json(logger.getLogs());
});

server.use(unknownEndpoint);

server.listen(port, () => {
	console.log(`Server running at http://localhost:${port}`);
});

/*
tested
curl -i \
        -H "Accept: application/json" \
        -H "Content-Type: application/json" \
        -X POST \
        -d '{
            "name": "Svetlana",
            "email": "svetlana@gmail.com"
         }' \
        http://localhost:3000/students

Response:
	HTTP/1.1 201 Created
	X-Powered-By: Express
	Date: Fri, 03 Oct 2025 18:55:14 GMT
	Connection: keep-alive
	Keep-Alive: timeout=5
	Content-Length: 0

curl -i \
        -H "Accept: application/json" \
        -H "Content-Type: application/json" \
        -X POST \
        -d '{
            "name": " ",
            "email": "svetlana@gmail.com"
         }' \
        http://localhost:3000/students

Response:
	HTTP/1.1 400 Bad Request
	X-Powered-By: Express
	Content-Type: application/json; charset=utf-8
	Content-Length: 24
	ETag: W/"18-JuqjY3AlIIuk6HNrsvPXfTpN+WY"
	Date: Fri, 03 Oct 2025 18:57:22 GMT
	Connection: keep-alive
	Keep-Alive: timeout=5

	{"error":"Invalid name"}%    
		*/
