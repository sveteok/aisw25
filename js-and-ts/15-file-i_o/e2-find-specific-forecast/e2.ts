/*
Use the Forecast interface shown before and create a file forecast_data.json


const forecast: Forecast = {
  day: "monday",
  temperature: 20,
  cloudy: true,
  sunny: false,
  windy: false,
};
Then retrieve the data and modify the temperature of that forecast.
Lastly, save the change back to the file.
*/
import fs from 'fs';

interface Forecast {
	day: string;
	temperature: number;
	cloudy: boolean;
	sunny: boolean;
	windy: boolean;
}

const forecast: Forecast = {
	day: 'monday',
	temperature: 20,
	cloudy: true,
	sunny: false,
	windy: false,
};

const writeData: string = JSON.stringify(forecast, null, 4);
fs.writeFileSync('../../forecast_data.json', writeData, 'utf8');

const readData: string = fs.readFileSync('../../forecast_data.json', 'utf8');
const allForecasts: Forecast = JSON.parse(readData);

const updateForecast = { ...allForecasts, temperature: 22 };
const writeUpdatedData: string = JSON.stringify(updateForecast, null, 4);
fs.writeFileSync('../forecast_data.json', writeUpdatedData, 'utf8');
