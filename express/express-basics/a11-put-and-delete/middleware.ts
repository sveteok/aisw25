import express from 'express';
import logger, { type Logs } from './logger.js';
import { isValidString } from './utils.js';

export interface Body {
	name: string;
	email: string;
}

export const loggerMiddleware = (req: express.Request, _res: express.Response, next: express.NextFunction): void => {
	const log: Logs = {
		date: new Date(),
		method: req.method,
		url: req.originalUrl,
	};
	if (req.body) {
		log.body = JSON.stringify(req.body);
	}
	logger.add(log);
	console.log(`${log.date.toISOString()} ${log.method} ${log.url}${log.body ? JSON.stringify(log.body) : ''}`);
	next();
};

export const unknownEndpoint = (_req: express.Request, res: express.Response): void => {
	res.status(404).send({ error: `Unknown endpoint` });
};

export const validateStudentData = (req: express.Request, res: express.Response, next: express.NextFunction) => {
	const { name, email }: Body = req.body;
	if (!isValidString(name)) {
		return res.status(400).send({ error: 'Invalid name' });
	}
	if (!isValidString(email)) {
		return res.status(400).send({ error: 'Invalid email' });
	}
	next();
};
