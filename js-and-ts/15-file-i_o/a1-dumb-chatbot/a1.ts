import readline from 'readline-sync';
import dotenv from 'dotenv';
dotenv.config({ path: './.env' });

const WEATHER_API_URL = process.env.WEATHER_API_URL;
const WEATHER_API_KEY = process.env.WEATHER_API_KEY;

import axios from 'axios';

const WELCOME = `Hi! I am a dumb chat bot You can check all the things I can do by typing 'help'.`;
const HELLO = `What is your name?
`;

const HELP = `--------------------------------------------------------------
Here´s a list of commands that I can execute! 

help: Opens this dialog.
hello: I will say hello to you
botInfo: I will introduce myself
botName: I will tell my name
botRename: You can rename me
forecast: I will forecast tomorrows weather 100% accurately
quit: Quits the program.
--------------------------------------------------------------`;

const BOT_RENAME = `Type my new name, please.
`;
const HELLO_USER = `Hello there, {USER_NAME}!`;
const ASKED_ONE_QUESTION = `I am a dumb bot. You can ask me almost anything :). You have already asked me one question.`;
const ASKED_N_QUESTIONS = `I am a dumb bot. You can ask me almost anything :). You have already asked me {NUM_QUESTIONS} questions.`;

const FORECAST = `--------------------------------------------------------------
      Tomorrows weather will be....
      Temperature: {TEMPERATURE_NUM} celsius degree
      Cloudy: {CLOUDY_BOOLEAN}
      Sunny: {SUNNY_BOOLEAN}
      Wind: {WIND_BOOLEAN}
--------------------------------------------------------------`;

const CONFIRM_NEW_NAME = `Are you happy with the name {NEW_NAME}? (If yes - "yes")\n`;

const BOT_NAME = `botName
My name is currently {BOT_NAME}. If you want to change it, type botRename.`;

const RENAMED_NAME = `I was renamed to {BOT_NAME}`;
const OLD_NAME = `Name not changed. My name is {BOT_NAME}`;
const GOODBYE = `Goodbye!`;
const UNKNOWN_COMMAND = `Unknown command`;
const ERROR_EMPTY_NAME = `The name must not be empty`;
const ERROR_EMPTY_CITY = `City name cannot be empty`;
const ENTER_CITY = `Enter your city for weather forecast:\n`;
const ENTER_NEXT_COMMAND = `Enter next command (Help - "help"): `;
const ERROR_FEATCHING_WEATHER = `Error featching weather forecast`;
const ERROR_INVALID_API_KEY = `Invalid API key. Please see https://openweathermap.org/faq#error401 for more info.`;

enum BotCommand {
	HELLO = 'hello',
	BOT_INFO = 'botInfo',
	BOT_NAME = 'botName',
	BOT_RENAME = 'botRename',
	FORECAST = 'forecast',
	HELP = 'help',
}

type BotChatCommand =
	| BotCommand.HELLO
	| BotCommand.BOT_INFO
	| BotCommand.BOT_NAME
	| BotCommand.BOT_RENAME
	| BotCommand.FORECAST
	| BotCommand.HELP;

type CommandList = BotChatCommand | 'quit';

interface WeatherAPI {
	weather: { main: string; [key: string]: number | string }[];
	main: { temp: number; [key: string]: number };
	wind: { speed: number; [key: string]: number };
}

class BotChat {
	private commandCounter: Record<BotChatCommand, number>;
	private name: string;
	private running: boolean = true;
	private commandList: Record<CommandList, () => void>;

	constructor(name: string = 'Chat Bot') {
		this.name = name;
		this.commandCounter = {
			[BotCommand.HELLO]: 0,
			[BotCommand.BOT_INFO]: 0,
			[BotCommand.BOT_NAME]: 0,
			[BotCommand.BOT_RENAME]: 0,
			[BotCommand.FORECAST]: 0,
			[BotCommand.HELP]: 0,
		};
		this.commandList = {
			[BotCommand.HELLO]: this.hello,
			[BotCommand.BOT_INFO]: this.botInfo,
			[BotCommand.BOT_NAME]: this.botName,
			[BotCommand.BOT_RENAME]: this.botRename,
			[BotCommand.FORECAST]: this.forecast,
			[BotCommand.HELP]: this.help,
			quit: this.quit,
		};
		console.log(WELCOME);
	}

	run = async (command: string): Promise<void> => {
		if (command in this.commandList) {
			await this.commandList[command as CommandList]();
		} else {
			throw new Error(UNKNOWN_COMMAND);
		}
	};

	isRunning = (): boolean => {
		return this.running;
	};

	private incrementCommandCounter(command: BotChatCommand): void {
		this.commandCounter[command] += 1;
	}

	help = () => {
		this.incrementCommandCounter(BotCommand.HELP);
		console.log(HELP);
	};

	hello = (): void => {
		this.incrementCommandCounter(BotCommand.HELLO);
		const name = readline.question(HELLO).trim();

		if (name.length === 0) {
			throw new Error(ERROR_EMPTY_NAME);
		}
		console.log(HELLO_USER.replace('{USER_NAME}', name));
	};

	botInfo = (): void => {
		this.incrementCommandCounter(BotCommand.BOT_INFO);
		let numQuestions: number = 0;
		let details: string = '';
		Object.entries(this.commandCounter).map(([key, value]) => {
			details += `${key} -> counter = ${value}\n`;
			numQuestions += value;
		});

		if (numQuestions === 1) {
			console.log(ASKED_ONE_QUESTION);
		} else {
			console.log(ASKED_N_QUESTIONS.replace('{NUM_QUESTIONS}', numQuestions.toString()));
		}
		console.log(details);
	};

	botName = (): void => {
		this.incrementCommandCounter(BotCommand.BOT_NAME);
		console.log(BOT_NAME.replace('{BOT_NAME}', this.name));
	};

	botRename = (): void => {
		this.incrementCommandCounter(BotCommand.BOT_RENAME);
		const newName = readline.question(BOT_RENAME);
		if (newName.length === 0) {
			throw new Error(ERROR_EMPTY_NAME);
		}
		const needRename = readline
			.question(CONFIRM_NEW_NAME.replace('{NEW_NAME}', newName))
			.trim()
			.toLocaleLowerCase();

		if (needRename === 'yes') {
			this.name = newName;
			console.log(RENAMED_NAME.replace('{BOT_NAME}', this.name));
		} else {
			console.log(OLD_NAME.replace('{BOT_NAME}', this.name));
		}
	};

	forecastByRandom = (): void => {
		this.incrementCommandCounter(BotCommand.FORECAST);

		const temperature: string = Math.floor(Math.random() * 81 - 40).toString();
		const isCloudy: boolean = Math.random() < 0.5;
		const isSunny: boolean = Math.random() < 0.5;
		const isWindy: boolean = Math.random() < 0.5;
		console.log(
			FORECAST.replace('{TEMPERATURE_NUM}', temperature)
				.replace('{CLOUDY_BOOLEAN}', isCloudy ? 'yes' : 'no')
				.replace('{SUNNY_BOOLEAN}', isSunny ? 'yes' : 'no')
				.replace('{WIND_BOOLEAN}', isWindy ? 'yes' : 'no')
		);
	};

	async getWeatherFromOpenweathermapAPI(city: string): Promise<WeatherAPI> {
		try {
			if (!WEATHER_API_URL || !WEATHER_API_KEY) {
				throw new Error(ERROR_INVALID_API_KEY);
			}
			const res = await axios.get<WeatherAPI>(WEATHER_API_URL, {
				params: {
					q: city,
					appid: WEATHER_API_KEY,
					units: 'metric',
				},
			});
			return res.data;
		} catch (error) {
			console.error(`${ERROR_FEATCHING_WEATHER}: ${error}`);
			throw error;
		}
	}

	//use openweathermap API
	forecast = async (): Promise<void> => {
		this.incrementCommandCounter(BotCommand.FORECAST);

		const city: string = readline.question(ENTER_CITY).trim();

		if (city.length === 0) {
			throw new Error(ERROR_EMPTY_CITY);
		}

		const { main, weather, wind } = await this.getWeatherFromOpenweathermapAPI(city);

		const temperature: string = main.temp.toFixed(1);
		const isCloudy: boolean = weather.some((w) => w.main.toLowerCase().includes('cloud'));
		const isSunny: boolean = weather.some((w) => w.main.toLowerCase().includes('clear'));
		const isWindy: boolean = wind.speed > 10;
		console.log(
			FORECAST.replace('{TEMPERATURE_NUM}', temperature)
				.replace('{CLOUDY_BOOLEAN}', isCloudy ? 'yes' : 'no')
				.replace('{SUNNY_BOOLEAN}', isSunny ? 'yes' : 'no')
				.replace('{WIND_BOOLEAN}', isWindy ? 'yes' : 'no')
		);
	};

	quit = (): void => {
		this.running = false;
		console.log(GOODBYE);
	};
}

const main = async (): Promise<void> => {
	const botChat: BotChat = new BotChat();
	let command;
	while (botChat.isRunning()) {
		console.log(ENTER_NEXT_COMMAND);
		command = readline.question();
		try {
			await botChat.run(command);
		} catch (error) {
			console.log(error instanceof Error ? error.message : error);
		}
	}
};
main();

/*
Output:
Hi! I am a dumb chat bot You can check all the things I can do by typing 'help'.
Enter next command (Help - "help"): 
help
--------------------------------------------------------------
Here´s a list of commands that I can execute! 

help: Opens this dialog.
hello: I will say hello to you
botInfo: I will introduce myself
botName: I will tell my name
botRename: You can rename me
forecast: I will forecast tomorrows weather 100% accurately
quit: Quits the program.
--------------------------------------------------------------
Enter next command (Help - "help"): 
hello
What is your name?
Svetlana
Hello there, Svetlana!
Enter next command (Help - "help"): 
helloa
Unknown command
Enter next command (Help - "help"): 
hello
What is your name?

The name must not be empty
Enter next command (Help - "help"): 
help
--------------------------------------------------------------
Here´s a list of commands that I can execute! 

help: Opens this dialog.
hello: I will say hello to you
botInfo: I will introduce myself
botName: I will tell my name
botRename: You can rename me
forecast: I will forecast tomorrows weather 100% accurately
quit: Quits the program.
--------------------------------------------------------------
Enter next command (Help - "help"): 
botInfo
I am a dumb bot. You can ask me almost anything :). You have already asked me 5 questions.
hello -> counter = 2
botInfo -> counter = 1
botName -> counter = 0
botRename -> counter = 0
forecast -> counter = 0
help -> counter = 2

Enter next command (Help - "help"): 
botName
botName
My name is currently Chat Bot. If you want to change it, type botRename.
Enter next command (Help - "help"): 
botRename
Type my new name, please.
HO HO        
Are you happy with the name HO HO? (If yes - "yes")
yes
I was renamed to HO HO
Enter next command (Help - "help"): 
botName
botName
My name is currently HO HO. If you want to change it, type botRename.
Enter next command (Help - "help"): 
help
--------------------------------------------------------------
Here´s a list of commands that I can execute! 

help: Opens this dialog.
hello: I will say hello to you
botInfo: I will introduce myself
botName: I will tell my name
botRename: You can rename me
forecast: I will forecast tomorrows weather 100% accurately
quit: Quits the program.
--------------------------------------------------------------
Enter next command (Help - "help"): 
forecast
Enter your city for weather forecast:
oulu
--------------------------------------------------------------
      Tomorrows weather will be....
      Temperature: 16.2 celsius degree
      Cloudy: no
      Sunny: yes
      Wind: no
--------------------------------------------------------------
Enter next command (Help - "help"): 
forecast
Enter your city for weather forecast:
Helsinki
--------------------------------------------------------------
      Tomorrows weather will be....
      Temperature: 13.2 celsius degree
      Cloudy: yes
      Sunny: no
      Wind: no
--------------------------------------------------------------
Enter next command (Help - "help"): 
forecast
Enter your city for weather forecast:
aaaa
Error featching weather forecast: AxiosError: Request failed with status code 404
Request failed with status code 404
Enter next command (Help - "help"): 
quit
Goodbye!
*/
