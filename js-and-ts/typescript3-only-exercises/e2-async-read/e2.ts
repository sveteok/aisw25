/*
Create a program that has an asynchronous function getUsers that uses fetch or 
axios to get a list of ten users from https://jsonplaceholder.typicode.com/users and 
cast them as a list of User objects with following properties.

Use the getUsers function to get a list of users and then print the list. 
What do you notice when you compare the interface and the printed values?

interface User {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  address: {
    street: string;
    city: string;
  }
}
  */

import axios from 'axios';
const URL = `https://jsonplaceholder.typicode.com/users`;

interface User {
	id: number;
	firstname: string;
	lastname: string;
	email: string;
	phone: string;
	address: {
		street: string;
		city: string;
	};
}

const getUsers = async (): Promise<User[]> => {
	try {
		const res = await axios.get<User[]>(URL);
		return res.data;
	} catch (error) {
		console.error(`Error featching users: ${error}`);
		throw error;
	}
};

try {
	const users = await getUsers();
	console.log(users);
} catch (error) {
	console.error(`Error: ${error}`);
	throw error;
}

/*
[
  {
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
    address: {
      street: 'Kulas Light',
      suite: 'Apt. 556',
      city: 'Gwenborough',
      zipcode: '92998-3874',
      geo: [Object]
    },
    phone: '1-770-736-8031 x56442',
    website: 'hildegard.org',
    company: {
      name: 'Romaguera-Crona',
      catchPhrase: 'Multi-layered client-server neural-net',
      bs: 'harness real-time e-markets'
    }
  },
  {
    id: 2,
    name: 'Ervin Howell',
    username: 'Antonette',
    email: 'Shanna@melissa.tv',
    address: {
      street: 'Victor Plains',
      suite: 'Suite 879',
      city: 'Wisokyburgh',
      zipcode: '90566-7771',
      geo: [Object]
    },
    phone: '010-692-6593 x09125',
    website: 'anastasia.net',
    company: {
      name: 'Deckow-Crist',
      catchPhrase: 'Proactive didactic contingency',
      bs: 'synergize scalable supply-chains'
    }
  },
  {
    id: 3,
    name: 'Clementine Bauch',
    username: 'Samantha',
    email: 'Nathan@yesenia.net',
    address: {
      street: 'Douglas Extension',
      suite: 'Suite 847',
      city: 'McKenziehaven',
      zipcode: '59590-4157',
      geo: [Object]
    },
    phone: '1-463-123-4447',
    website: 'ramiro.info',
    company: {
      name: 'Romaguera-Jacobson',
      catchPhrase: 'Face to face bifurcated interface',
      bs: 'e-enable strategic applications'
    }
  },
  {
    id: 4,
    name: 'Patricia Lebsack',
    username: 'Karianne',
    email: 'Julianne.OConner@kory.org',
    address: {
      street: 'Hoeger Mall',
      suite: 'Apt. 692',
      city: 'South Elvis',
      zipcode: '53919-4257',
      geo: [Object]
    },
    phone: '493-170-9623 x156',
    website: 'kale.biz',
    company: {
      name: 'Robel-Corkery',
      catchPhrase: 'Multi-tiered zero tolerance productivity',
      bs: 'transition cutting-edge web services'
    }
  },
  {
    id: 5,
    name: 'Chelsey Dietrich',
    username: 'Kamren',
    email: 'Lucio_Hettinger@annie.ca',
    address: {
      street: 'Skiles Walks',
      suite: 'Suite 351',
      city: 'Roscoeview',
      zipcode: '33263',
      geo: [Object]
    },
    phone: '(254)954-1289',
    website: 'demarco.info',
    company: {
      name: 'Keebler LLC',
      catchPhrase: 'User-centric fault-tolerant solution',
      bs: 'revolutionize end-to-end systems'
    }
  },
  {
    id: 6,
    name: 'Mrs. Dennis Schulist',
    username: 'Leopoldo_Corkery',
    email: 'Karley_Dach@jasper.info',
    address: {
      street: 'Norberto Crossing',
      suite: 'Apt. 950',
      city: 'South Christy',
      zipcode: '23505-1337',
      geo: [Object]
    },
    phone: '1-477-935-8478 x6430',
    website: 'ola.org',
    company: {
      name: 'Considine-Lockman',
      catchPhrase: 'Synchronised bottom-line interface',
      bs: 'e-enable innovative applications'
    }
  },
  {
    id: 7,
    name: 'Kurtis Weissnat',
    username: 'Elwyn.Skiles',
    email: 'Telly.Hoeger@billy.biz',
    address: {
      street: 'Rex Trail',
      suite: 'Suite 280',
      city: 'Howemouth',
      zipcode: '58804-1099',
      geo: [Object]
    },
    phone: '210.067.6132',
    website: 'elvis.io',
    company: {
      name: 'Johns Group',
      catchPhrase: 'Configurable multimedia task-force',
      bs: 'generate enterprise e-tailers'
    }
  },
  {
    id: 8,
    name: 'Nicholas Runolfsdottir V',
    username: 'Maxime_Nienow',
    email: 'Sherwood@rosamond.me',
    address: {
      street: 'Ellsworth Summit',
      suite: 'Suite 729',
      city: 'Aliyaview',
      zipcode: '45169',
      geo: [Object]
    },
    phone: '586.493.6943 x140',
    website: 'jacynthe.com',
    company: {
      name: 'Abernathy Group',
      catchPhrase: 'Implemented secondary concept',
      bs: 'e-enable extensible e-tailers'
    }
  },
  {
    id: 9,
    name: 'Glenna Reichert',
    username: 'Delphine',
    email: 'Chaim_McDermott@dana.io',
    address: {
      street: 'Dayna Park',
      suite: 'Suite 449',
      city: 'Bartholomebury',
      zipcode: '76495-3109',
      geo: [Object]
    },
    phone: '(775)976-6794 x41206',
    website: 'conrad.com',
    company: {
      name: 'Yost and Sons',
      catchPhrase: 'Switchable contextually-based project',
      bs: 'aggregate real-time technologies'
    }
  },
  {
    id: 10,
    name: 'Clementina DuBuque',
    username: 'Moriah.Stanton',
    email: 'Rey.Padberg@karina.biz',
    address: {
      street: 'Kattie Turnpike',
      suite: 'Suite 198',
      city: 'Lebsackbury',
      zipcode: '31428-2261',
      geo: [Object]
    },
    phone: '024-648-3804',
    website: 'ambrose.net',
    company: {
      name: 'Hoeger LLC',
      catchPhrase: 'Centralized empowering task-force',
      bs: 'target end-to-end models'
    }
  }
]
  */

/* 
The interface and printing values ​​are different
To resolve the issue we can update User interface to match API - apiUser
or keep inteface and transform data
*/

//Update User interface

interface apiUser {
	id: number;
	name: string;
	username: string;
	email: string;
	address: {
		street: string;
		city: string;
		suite: string;
		zipcode: string;
		geo: { lat: string; lng: string };
	};
	phone: string;
	website: string;
	company: {
		name: string;
		catchPhrase: string;
		bs: string;
	};
}

const useApiInterface = async (): Promise<void> => {
	const getUsers = async (): Promise<apiUser[]> => {
		try {
			const res = await axios.get<apiUser[]>(URL);
			return res.data;
		} catch (error) {
			console.error(`Error featching users: ${error}`);
			throw error;
		}
	};

	try {
		const users = await getUsers();
		console.log(users);
	} catch (error) {
		console.error(`Error: ${error}`);
		throw error;
	}
};

await useApiInterface();

//Transform data
const splitName = (name: string): { firstname: string; lastname: string } => {
	const parts: string[] = name.trim().split(/\s+/);
	let firstName = parts[0] || '';

	if (parts.length === 1) {
		return { firstname: firstName, lastname: '' };
	}

	const titles = ['Mrs.', 'Ms.', 'Miss', 'Mx.'];

	if (titles.includes(firstName)) {
		parts.shift();
		firstName = parts[0] || '';
	}

	const lastname = parts.slice(1).join(' ');

	return { firstname: firstName, lastname: lastname };
};

const getUserAndTransformData = async (): Promise<void> => {
	const getUsers = async (): Promise<User[]> => {
		try {
			const res = await axios.get<apiUser[]>(URL);
			return res.data.map((user) => {
				const { firstname, lastname } = splitName(user.name);

				return {
					id: user.id,
					firstname: firstname || '',
					lastname: lastname || '',
					email: user.email,
					phone: user.phone,
					address: {
						street: user.address.street,
						city: user.address.city,
					},
				};
			});
		} catch (error) {
			console.error(`Error featching users: ${error}`);
			throw error;
		}
	};

	try {
		const users = await getUsers();
		console.log(users);
	} catch (error) {
		console.error(`Error: ${error}`);
		throw error;
	}
};

await getUserAndTransformData();

/*
[
  {
    id: 1,
    firstname: 'Leanne',
    lastname: 'Graham',
    email: 'Sincere@april.biz',
    phone: '1-770-736-8031 x56442',
    address: { street: 'Kulas Light', city: 'Gwenborough' }
  },
  {
    id: 2,
    firstname: 'Ervin',
    lastname: 'Howell',
    email: 'Shanna@melissa.tv',
    phone: '010-692-6593 x09125',
    address: { street: 'Victor Plains', city: 'Wisokyburgh' }
  },
  {
    id: 3,
    firstname: 'Clementine',
    lastname: 'Bauch',
    email: 'Nathan@yesenia.net',
    phone: '1-463-123-4447',
    address: { street: 'Douglas Extension', city: 'McKenziehaven' }
  },
  {
    id: 4,
    firstname: 'Patricia',
    lastname: 'Lebsack',
    email: 'Julianne.OConner@kory.org',
    phone: '493-170-9623 x156',
    address: { street: 'Hoeger Mall', city: 'South Elvis' }
  },
  {
    id: 5,
    firstname: 'Chelsey',
    lastname: 'Dietrich',
    email: 'Lucio_Hettinger@annie.ca',
    phone: '(254)954-1289',
    address: { street: 'Skiles Walks', city: 'Roscoeview' }
  },
  {
    id: 6,
    firstname: 'Dennis',
    lastname: 'Schulist',
    email: 'Karley_Dach@jasper.info',
    phone: '1-477-935-8478 x6430',
    address: { street: 'Norberto Crossing', city: 'South Christy' }
  },
  {
    id: 7,
    firstname: 'Kurtis',
    lastname: 'Weissnat',
    email: 'Telly.Hoeger@billy.biz',
    phone: '210.067.6132',
    address: { street: 'Rex Trail', city: 'Howemouth' }
  },
  {
    id: 8,
    firstname: 'Nicholas',
    lastname: 'Runolfsdottir V',
    email: 'Sherwood@rosamond.me',
    phone: '586.493.6943 x140',
    address: { street: 'Ellsworth Summit', city: 'Aliyaview' }
  },
  {
    id: 9,
    firstname: 'Glenna',
    lastname: 'Reichert',
    email: 'Chaim_McDermott@dana.io',
    phone: '(775)976-6794 x41206',
    address: { street: 'Dayna Park', city: 'Bartholomebury' }
  },
  {
    id: 10,
    firstname: 'Clementina',
    lastname: 'DuBuque',
    email: 'Rey.Padberg@karina.biz',
    phone: '024-648-3804',
    address: { street: 'Kattie Turnpike', city: 'Lebsackbury' }
  }
]
  */
