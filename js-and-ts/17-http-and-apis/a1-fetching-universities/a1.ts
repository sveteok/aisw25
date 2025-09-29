/*
a)
Create an async function getUniversities. The function should fetch data about Finnish universities
 (using fetch or axios) from http://universities.hipolabs.com/search?country=Finland

Print the data after it has been fetched. You can use either Promises or async/await for the task.

Call your function and check what your program prints to make sure it works correctly.

b)
Remove the data print from the getUniversities function. Instead, make the function return the data.

Call the function, and when it has finished running (Promise.then), 
use Array.map to map the array of university objects into an array of university names. 
Print all the university names.
*/

import axios from 'axios';

type CountryCodes = 'FI' | 'EN';

interface University {
	web_pages: string[];
	name: string;
	'state-province': string | null;
	alpha_two_code: CountryCodes;
	domains: string[];
	country: string;
}

const getUniversities = async (country: string): Promise<University[]> => {
	try {
		const res = await axios.get<University[]>(`http://universities.hipolabs.com/search?country=${country}`);
		return res.data;
	} catch (error) {
		console.error(`Error fetching universities: ${error}`);
		throw error;
	}
};
// const universities = await getUniversities('Finland');
// console.log(universities);

getUniversities('Finland')
	.then((universities: University[]) => {
		const names: string[] = universities.map((u) => u.name);
		console.log(`University names: \n ${names.join(', ')}`);
		// console.log(names);
	})
	.catch((error) => console.error(`Error occurred: ${error}`));

/*
University names: 
 Abo Akademi University, Central Ostrobothnia University of Applied Sciences, Diaconia University of Applied Sciences, EVTEK University of Applied Sciences, University of Helsinki, Helsinki School of Economics and Business Administration, Helsinki University of Technology, University of Joensuu, University of Jyväskylä, Academy of Fine Arts, Lahti Polytechnic, Laurea University of Applied Sciences, Lappeenranta University of Technology, Oulu Polytechnic, University of Oulu, Vaasa University of Applied Sciences, Rovaniemi University of Applied Sciences, Scandinavian Art and Business Institute, Satakunta University Of Applied Scinces, South Carelian Polytechnic, Swedish School of Economics and Business Administration, Finland, Sibelius Academy, Theatre Academy Finland, Tampere Polytechnic, Turku School of Economics and Business Administration, Tampere University of Technology, University of Art and Design Helsinki, University of Kuopio, University of Lapland, University of Tampere, University of Turku, University of Vaasa, Aalto University, Metropolia University of Applied Sciences, Häme University of Applied Sciences
  */
