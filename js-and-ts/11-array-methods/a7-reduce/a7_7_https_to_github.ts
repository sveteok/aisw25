/*
Get practice with using Reduce by doing the following exercises:

https://coursework.vschool.io/array-reduce-exercises/
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

const gitHubOptions: RequestOptions = {
  hostname: "api.github.com",
  port: 443,
  path: "/users/sveteok/repos",
  method: "GET",
  headers: {
    "User-Agent": "Node.js",
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
        const repos: GitHubRepo[] = JSON.parse(data);
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
