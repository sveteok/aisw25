import express from 'express';

interface Logs {
	date: Date;
	method: string;
	url: string;
}

class Logger {
	private logs: Logs[];
	static MAX_LOGS_SIZE = 1000;

	constructor() {
		this.logs = [];
	}

	add = (log: Logs): void => {
		this.logs.push(log);
		if (this.logs.length > Logger.MAX_LOGS_SIZE) {
			this.logs.shift();
		}
	};

	printLogs = (): void => {
		this.logs.forEach((log) => console.log(JSON.stringify(log)));
	};

	getLogs = (): Logs[] => {
		return this.logs;
	};

	formatDate(date: Date): string {
		const formatter = new Intl.DateTimeFormat('fi-FI', {
			year: 'numeric',
			month: '2-digit',
			day: '2-digit',
			hour: '2-digit',
			minute: '2-digit',
			hour12: false,
			timeZone: 'UTC',
		});

		return formatter.format(date);
	}
}
export const logger = new Logger();

export const loggerMiddleware = (req: express.Request, _res: express.Response, next: express.NextFunction): void => {
	const log: Logs = {
		date: new Date(),
		method: req.method,
		url: req.originalUrl,
	};
	logger.add(log);
	console.log(`${log.date.toISOString()} ${log.method} ${log.url}`);
	next();
};

export const unknownEndpoint = (_req: express.Request, res: express.Response): void => {
	res.status(404).send({ error: `Unknown endpoint` });
};
