/*
Get practice with using Reduce by doing the following exercises:

https://coursework.vschool.io/array-reduce-exercises/
*/

//1. Turn an array of numbers into a total of all the numbers
function total(arr) {
  return arr.reduce((acc, curr) => acc + curr, 0);
}
console.log(total([1, 2, 3])); // 6

//2. Turn an array of numbers into a long string of all those numbers.
const stringConcat = (arr) => {
  return arr.reduce((acc, curr) => acc.toString() + curr.toString(), "");
};
console.log(stringConcat([1, 2, 3])); // "123"

//3. Turn an array of voter objects into a count of how many people voted
const voters = [
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

const totalVotes = (arr) => {
  return arr.reduce((acc, curr) => acc + (curr.voted ? 1 : 0), 0);
};
console.log(totalVotes(voters)); // 7

// 4. Given an array of all your wishlist items, figure out how much it would cost to just buy everything at once
const wishlist = [
  { title: "Tesla Model S", price: 90000 },
  { title: "4 carat diamond ring", price: 45000 },
  { title: "Fancy hacky Sack", price: 5 },
  { title: "Gold fidgit spinner", price: 2000 },
  { title: "A second Tesla Model S", price: 90000 },
];

const shoppingSpree = (arr) => {
  return arr.reduce((acc, curr) => acc + curr.price, 0);
};
console.log(shoppingSpree(wishlist)); // 227005

//5. Given an array of arrays, flatten them into a single array
var arrays = [["1", "2", "3"], [true], [4, 5, 6]];

const flatten = (arr) => {
  return arr.reduce((acc, curr) => acc.concat(curr), []);
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

const votersArr = [
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

const voterResults = (arr) => {
  return arr.reduce(
    (acc, curr) => {
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

const https = require("https");

const options = {
  hostname: "api.github.com",
  port: 443,
  path: "/users/sveteok/repos",
  method: "GET",
  headers: {
    "User-Agent": "Node.js",
  },
};

https
  .request(options, (res) => {
    let data = "";

    res.on("data", (chunk) => {
      data += chunk;
    });

    res.on("end", () => {
      try {
        const repos = JSON.parse(data);
        // console.log(repos.length);
        const totalWatchers = repos.reduce(
          (acc, curr) => acc + curr.watchers_count,
          0
        );
        console.log(`Total watchers (GitHub): ${totalWatchers}`);
      } catch (err) {
        console.error("Error parsing JSON:", err);
      }
    });
  })
  .on("error", (err) => {
    console.error("Error with request:", err);
  })
  .end();

//GitLab version
const gitLabOptions = {
  hostname: "gitlab.com",
  port: 443,
  //   path: "/api/v4/projects/[your_username]%2F[your_repository_name]", //For one repo "your_username/your_repository_name" - URL encode '/' as '%2F'
  path: "/api/v4/projects?owned=true", //For all owned repos
  method: "GET",
  headers: {
    "User-Agent": "Node.js",
  },
};

// add a PRIVATE-TOKEN header
gitLabOptions.headers["PRIVATE-TOKEN"] = "your_access_token";

https
  .request(gitLabOptions, (res) => {
    let data = "";

    res.on("data", (chunk) => {
      data += chunk;
    });

    res.on("end", () => {
      if (res.statusCode !== 200) {
        console.error(`Error (GitLab): ${res.statusCode}`);
        return;
      }
      const repos = JSON.parse(data);
      //   console.log(repos.forks_count); - For one repo
      //   console.log(repos);
      const totalWatchers = repos.reduce(
        (acc, curr) => acc + curr.forks_count,
        0
      );
      console.log(`Total watchers (GitLab): ${totalWatchers}`);
    });
  })
  .on("error", (err) => {
    console.error("Error with request:", err);
  })
  .end();

/*
For testing purposes:
curl --header "PRIVATE-TOKEN: <your_access_token>" \
  "https://gitlab.com/api/v4/projects/[user_name]%2F[project_name]"

*/

//use the axios library
const axios = require("axios");

axios
  .get("https://api.github.com/users/sveteok/repos", {
    headers: { "User-Agent": "Node.js" },
  })
  .then((response) => {
    if (response.status !== 200) {
      console.error(`Error (GitHub): ${response.status}`);
      return;
    }
    const repos = response.data;
    console.log(repos.length);
    const totalWatchers = repos.reduce(
      (acc, curr) => acc + curr.watchers_count,
      0
    );
    console.log(`Total watchers (GitHub): ${totalWatchers}`);
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });

//GitLab version
axios
  .get("https://gitlab.com/api/v4/projects?owned=true", {
    headers: {
      "User-Agent": "Node.js",
      "PRIVATE-TOKEN": "your_access_token",
    },
  })
  .then((response) => {
    if (response.status !== 200) {
      console.error(`Error (GitLab): ${response.status}`);
      return;
    }
    const repos = response.data;
    const totalWatchers = repos.reduce(
      (acc, curr) => acc + curr.forks_count,
      0
    );
    console.log(`Total watchers (GitLab): ${totalWatchers}`);
  })
  .catch((error) => {
    console.error("Error fetching data (GitLab):", error.status);
  });
