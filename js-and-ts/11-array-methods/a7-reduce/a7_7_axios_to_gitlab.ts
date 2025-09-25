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

import axios from "axios";
interface GitLabRepo {
  id: number;
  name: string;
  forks_count: number;
  // [key: string]: any;//allow other properties
}

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

/*
For testing purposes:
curl --header "PRIVATE-TOKEN: <your_access_token>" \
  "https://gitlab.com/api/v4/projects/[user_name]%2F[project_name]"

*/
