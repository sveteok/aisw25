/*
Get practice with using Reduce by doing the following exercises:

https://coursework.vschool.io/array-reduce-exercises/
*/

/*6. Given an array of potential voters,
return an object representing the results of the vote Include
how many of the potential voters were in the ages 18-25,
how many from 26-35,
how many from 36-55, and
how many of each of those age ranges actually voted.
The resulting object containing this data should have 6 properties.
See the example output at the bottom.*/

interface Voter {
  name: string;
  age: number;
  voted: boolean;
}

interface VoterStats {
  numYoungVotes: number;
  numYoungPeople: number;
  numMidVotesPeople: number;
  numMidsPeople: number;
  numOldVotesPeople: number;
  numOldsPeople: number;
}

const votersArr: Voter[] = [
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

const voterResults = (arr: Voter[]) => {
  return arr.reduce(
    (acc: VoterStats, curr: Voter) => {
      if (curr.age >= 18 && curr.age < 26) {
        acc.numYoungPeople++;
        if (curr.voted) {
          acc.numYoungVotes++;
        }
      } else if (curr.age < 36) {
        acc.numMidsPeople++;
        if (curr.voted) {
          acc.numMidVotesPeople++;
        }
      } else if (curr.age < 56) {
        acc.numOldsPeople++;
        if (curr.voted) {
          acc.numOldVotesPeople++;
        }
      }
      return acc;
    },
    {
      numYoungVotes: 0,
      numYoungPeople: 0,
      numMidVotesPeople: 0,
      numMidsPeople: 0,
      numOldVotesPeople: 0,
      numOldsPeople: 0,
    }
  );
};
console.log(voterResults(votersArr));
/*
{ numYoungVotes: 1,
  numYoungPeople: 4,
  numMidVotesPeople: 3,
  numMidsPeople: 4,
  numOldVotesPeople: 3,
  numOldsPeople: 4 
}
*/
