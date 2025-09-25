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

interface GitHubRepo {
  id: number;
  name: string;
  watchers_count: number;
  // [key: string]: any; // Optional: allow extra fields
}

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
    // console.log(repos.length);

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

/*
For testing purposes:
curl --header "PRIVATE-TOKEN: <your_access_token>" \
  "https://gitlab.com/api/v4/projects/[user_name]%2F[project_name]"

*/
