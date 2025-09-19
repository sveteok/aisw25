/*
Given the following array of employee objects:

const users: Person[] = [
  { firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
  { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
  { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
  { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
  { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
  { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
  { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}
];
Use the array methods to create new arrays.

1. List the last names of all employees
2. List all employee objects that are Full Stack Residents
3. List all Instructors' full names (e.g., Wes Reid)
*/
interface Person {
  firstName: string;
  lastName: string;
  role: string;
}

const users: Person[] = [
  { firstName: "Bradley", lastName: "Bouley", role: "Full Stack Resident" },
  { firstName: "Chloe", lastName: "Alnaji", role: "Full Stack Resident" },
  { firstName: "Jonathan", lastName: "Baughn", role: "Enterprise Instructor" },
  { firstName: "Michael", lastName: "Herman", role: "Lead Instructor" },
  { firstName: "Robert", lastName: "Hajek", role: "Full Stack Resident" },
  { firstName: "Wes", lastName: "Reid", role: "Instructor" },
  { firstName: "Zach", lastName: "Klabunde", role: "Instructor" },
];

//1. List the last names of all employees
const lastNames: string[] = users.map((user) => user.lastName);
console.log(lastNames);
/*
Output:
[
  'Bouley',   'Alnaji',
  'Baughn',   'Herman',
  'Hajek',    'Reid',
  'Klabunde'
]
*/

//2. List all employee objects that are Full Stack Residents
const fullStackResidents: Person[] = users.filter(
  (user: Person) => user.role === "Full Stack Resident"
);
console.log(fullStackResidents);
/*
Output:
[
  {
    firstName: 'Bradley',
    lastName: 'Bouley',
    role: 'Full Stack Resident'
  },
  {
    firstName: 'Chloe',
    lastName: 'Alnaji',
    role: 'Full Stack Resident'
  },
  {
    firstName: 'Robert',
    lastName: 'Hajek',
    role: 'Full Stack Resident'
  }
]
*/

//3. List all Instructors' full names (e.g., Wes Reid)
const instructorsFullNames: string[] = users
  .filter((user: Person) => user.role.includes("Instructor"))
  .map((user: Person) => `${user.firstName} ${user.lastName}`);
console.log(instructorsFullNames);
/*
Output
[ 'Jonathan Baughn', 'Michael Herman', 'Wes Reid', 'Zach Klabunde' ]
*/
export {};
