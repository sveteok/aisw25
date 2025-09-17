/*
Get practice with using Reduce by doing the following exercises:

https://coursework.vschool.io/array-reduce-exercises/
*/

//1. Turn an array of numbers into a total of all the numbers
function total(arr: number[]): number {
  return arr.reduce((acc, curr) => acc + curr, 0);
}
console.log(total([1, 2, 3])); // 6

//2. Turn an array of numbers into a long string of all those numbers.
const stringConcat = (arr: number[]): string => {
  return arr.reduce((acc, curr) => acc.toString() + curr.toString(), "");
};
console.log(stringConcat([1, 2, 3])); // "123"

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

// 4. Given an array of all your wishlist items, figure out how much it would cost to just buy everything at once
interface WishlistItem {
  title: string;
  price: number;
}
const wishlist: WishlistItem[] = [
  { title: "Tesla Model S", price: 90000 },
  { title: "4 carat diamond ring", price: 45000 },
  { title: "Fancy hacky Sack", price: 5 },
  { title: "Gold fidgit spinner", price: 2000 },
  { title: "A second Tesla Model S", price: 90000 },
];

const shoppingSpree = (arr: WishlistItem[]) => {
  return arr.reduce((acc: number, curr: WishlistItem) => acc + curr.price, 0);
};
console.log(shoppingSpree(wishlist)); // 227005

//5. Given an array of arrays, flatten them into a single array
const arrays: (string | boolean | number)[][] = [
  ["1", "2", "3"],
  [true],
  [4, 5, 6],
];

const flatten = (
  arr: (string | boolean | number)[][]
): (string | boolean | number)[] => {
  return arr.reduce(
    (acc: (string | boolean | number)[], curr: (string | boolean | number)[]) =>
      acc.concat(curr),
    []
  );
};
console.log(flatten(arrays)); // ["1", "2", "3", true, 4, 5, 6];

/*6. Given an array of potential voters,
return an object representing the results of the vote Include
how many of the potential voters were in the ages 18-25,
how many from 26-35,
how many from 36-55, and
how many of each of those age ranges actually voted.
The resulting object containing this data should have 6 properties.
See the example output at the bottom.*/

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
console.log(voterResults(votersArr)); // Returned value shown below:
/*
{ numYoungVotes: 1,
  numYoungPeople: 4,
  numMidVotesPeople: 3,
  numMidsPeople: 4,
  numOldVotesPeople: 3,
  numOldsPeople: 4 
}
*/

/*
7. Extra credit
Using AJAX, do a GET request to your own Github repositories endpoint. 
The URL will be https://api.github.com/users//repos.

Once you get the data, use .reduce() to figure out 
how many watchers you have across all of your repositories. 
Don't be too disappointed if the number is 0. You're still new at this :)
*/

import https from "https";
import { RequestOptions, IncomingMessage } from "http";

interface GitHubRepo {
  id: number;
  name: string;
  watchers_count: number;
  // [key: string]: any; // Optional: allow extra fields
}

interface GitLabRepo {
  id: number;
  name: string;
  forks_count: number;
  // [key: string]: any;//allow other properties
}

const gitHubOptions: RequestOptions = {
  hostname: "api.github.com",
  port: 443,
  path: "/users/sveteok/repos",
  method: "GET",
  headers: {
    "User-Agent": "Node.js",
  },
};

const gitLabOptions: RequestOptions = {
  hostname: "gitlab.com",
  port: 443,
  //   path: "/api/v4/projects/[your_username]%2F[your_repository_name]", //For one repo "your_username/your_repository_name" - URL encode '/' as '%2F'
  path: "/api/v4/projects?owned=true", //For all owned repos
  method: "GET",
  headers: {
    "User-Agent": "Node.js",
    "PRIVATE-TOKEN": "your_access_token",
  },
};

//GitHub version use Node's built-in https module
const requestToGitHub = https.request(
  gitHubOptions,
  (res: IncomingMessage): void => {
    let data: string = "";

    res.on("data", (chunk) => {
      data += chunk;
    });

    res.on("end", () => {
      try {
        const repos = JSON.parse(data);
        // console.log(repos.length);
        const totalWatchers = repos.reduce(
          (acc: number, curr: { watchers_count: number }) =>
            acc + curr.watchers_count,
          0
        );
        console.log(`Total watchers (GitHub): ${totalWatchers}`);
      } catch (err: undefined | unknown) {
        console.error("Error parsing JSON:", err);
      }
    });
  }
);

requestToGitHub
  .on("error", (err: Error) => {
    console.error("Error with request:", err);
  })
  .end();

//GitLab version use Node's built-in https module
const requestToGitLab = https.request(gitLabOptions, (res: IncomingMessage) => {
  let data: string = "";

  res.on("data", (chunk) => {
    data += chunk;
  });

  res.on("end", () => {
    if (res.statusCode !== 200) {
      console.error(`Error (GitLab): ${res.statusCode}`);
      return;
    }

    try {
      const repos: GitLabRepo[] = JSON.parse(data);
      //   console.log(repos.forks_count); - For one repo
      //   console.log(repos);
      const totalWatchers = repos.reduce(
        (acc: number, curr: { forks_count: number }) => acc + curr.forks_count,
        0
      );
      console.log(`Total watchers (GitLab): ${totalWatchers}`);
    } catch (err: undefined | unknown) {
      console.error("Error parsing JSON:", err);
      return;
    }
  });
});

requestToGitLab
  .on("error", (err: Error) => {
    console.error("Error with request:", err);
  })
  .end();

/*
For testing purposes:
curl --header "PRIVATE-TOKEN: <your_access_token>" \
  "https://gitlab.com/api/v4/projects/[user_name]%2F[project_name]"

*/

//use the axios library
import axios from "axios";

//fetch GitHub repos using axios
async function fetchGitHubRepos() {
  try {
    const response = await axios.get<GitHubRepo[]>(
      "https://api.github.com/users/sveteok/repos",
      {
        headers: { "User-Agent": "Node.js" },
      }
    );

    if (response.status !== 200) {
      console.error(`Error (GitHub): ${response.status}`);
      return;
    }

    const repos = response.data;
    console.log(repos.length);

    const totalWatchers = repos.reduce(
      (acc: number, curr: GitHubRepo) => acc + curr.watchers_count,
      0
    );
    console.log(`Total watchers (GitHub): ${totalWatchers}`);
  } catch (error) {
    console.error("Error fetching data (GitHub):", error);
  }
}
fetchGitHubRepos();

//fetch GitLab repos using axios
async function fetchGitLabRepos() {
  try {
    const response = await axios.get<GitLabRepo[]>(
      "https://gitlab.com/api/v4/projects?owned=true",
      {
        headers: {
          "User-Agent": "Node.js",
          "PRIVATE-TOKEN": "your_access_token",
        },
      }
    );

    if (response.status !== 200) {
      console.error(`Error (GitLab): ${response.status}`);
      return;
    }

    const repos = response.data;
    console.log(repos.length);

    const totalForks = repos.reduce(
      (acc: number, curr: GitLabRepo) => acc + curr.forks_count,
      0
    );
    console.log(`Total forks (GitLab): ${totalForks}`);
  } catch (error) {
    console.error("Error fetching data (GitLab):", error);
  }
}
fetchGitLabRepos();
