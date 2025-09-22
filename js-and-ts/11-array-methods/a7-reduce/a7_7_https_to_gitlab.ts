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

interface GitLabRepo {
  id: number;
  name: string;
  forks_count: number;
  // [key: string]: any;//allow other properties
}

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
