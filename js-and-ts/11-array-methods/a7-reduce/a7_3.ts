/*
Get practice with using Reduce by doing the following exercises:

https://coursework.vschool.io/array-reduce-exercises/
*/

//3. Turn an array of voter objects into a count of how many people voted
interface Voter {
  name: string;
  age: number;
  voted: boolean;
}

const voters: Voter[] = [
  { name: "Bob", age: 30, voted: true },
  { name: "Jake", age: 32, voted: true },
  { name: "Kate", age: 25, voted: false },
  { name: "Sam", age: 20, voted: false },
  { name: "Phil", age: 21, voted: true },
  { name: "Ed", age: 55, voted: true },
  { name: "Tami", age: 54, voted: true },
  { name: "Mary", age: 31, voted: false },
  { name: "Becky", age: 43, voted: false },
  { name: "Joey", age: 41, voted: true },
  { name: "Jeff", age: 30, voted: true },
  { name: "Zack", age: 19, voted: false },
];

const totalVotes = (arr: Voter[]) => {
  return arr.reduce(
    (acc: number, curr: Voter) => acc + (curr.voted ? 1 : 0),
    0
  );
};
console.log(totalVotes(voters)); // 7
