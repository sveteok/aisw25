/*
Create two interfaces: User with properties id (number) and name (string), and 
Timestamps with createdAt and updatedAt (both Date objects).
Create a new type UserWithTimestamps using intersection types that combines User and Timestamps types.
Write a function createUser that accepts a parameters for username and returns an object of type UserWithTimestamps.
Test your function by creating a user object with timestamps and logging it.
*/

interface User {
  id: number;
  name: string;
}

interface Timestamps {
  createdAt: Date;
  updatedAt: Date;
}

type UserWithTimestamps = User & Timestamps;

let userIdCounter: number = 1;

const createUser = (username: string): UserWithTimestamps => {
  const timestamp: Date = new Date();
  const newUser: UserWithTimestamps = {
    id: userIdCounter++,
    name: username,
    createdAt: timestamp,
    updatedAt: timestamp,
  };
  return newUser;
};

const sveta: UserWithTimestamps = createUser("Svetlana");
console.log(sveta);
/*
{
  id: 1,
  name: 'Svetlana',
  createdAt: 2025-09-19T12:17:36.648Z,
  updatedAt: 2025-09-19T12:17:36.648Z
}
  */

const rubini: UserWithTimestamps = createUser("Rubini");
console.log(rubini);
/*
{
  id: 2,
  name: 'Rubini',
  createdAt: 2025-09-19T12:17:36.655Z,
  updatedAt: 2025-09-19T12:17:36.655Z
}
  */

const anjalee: UserWithTimestamps = createUser("Anjalee");
console.log(anjalee);
/*
{
  id: 3,
  name: 'Anjalee',
  createdAt: 2025-09-19T12:17:36.655Z,
  updatedAt: 2025-09-19T12:17:36.655Z
}
  */
