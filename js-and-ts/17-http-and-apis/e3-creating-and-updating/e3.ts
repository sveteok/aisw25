/*
Send a new post item to jsonplaceholder API that you created from scratch.

Based on the item you acquired in exercise 1, change its title and send a new version of it to jsonplaceholder API.

In both cases, print the HTTP status code to console.

Note that these do not REALLY change anything on the jsonplaceholder server, 
but you will get an appropriate response nevertheless as if the database was changed successfully.
*/

import axios from 'axios';

interface Post {
	id: number;
	title: string;
	body: string;
	userId: number;
}

const createNewPost = async (): Promise<void> => {
	try {
		const res = await axios.post<Post>(`https://jsonplaceholder.typicode.com/posts`, {
			title: 'New Post',
			body: 'Test',
			userId: 789,
		});
		console.log(`Response status - ${res.status}`);
		console.log(res.data);
	} catch (error) {
		console.error(`Error creating new post: ${error}`);
		throw error;
	}
};

try {
	await createNewPost();
} catch (error) {
	console.error(error);
}
/*
Response status - 201
{ title: 'New Post', body: 'Test', userId: 789, id: 101 }
 */

const getPostById = async (id: number): Promise<Post> => {
	try {
		const res = await axios.get<Post>(`https://jsonplaceholder.typicode.com/posts/${id}`);
		console.log(`Response status - ${res.status}`);
		console.log(`Post #${id}: "${res.data.title}".`);
		return res.data;
	} catch (error) {
		console.error(`Error featching post: ${error}`);
		throw error;
	}
};

const updatePostTitle = async (postId: number, newTitle: string): Promise<void> => {
	try {
		const post = await getPostById(postId);
		const res = await axios.put<Post>(`https://jsonplaceholder.typicode.com/posts/${post.id}`, {
			...post,
			title: newTitle,
		});
		console.log(`Response status - ${res.status}`);
		console.log(res.data);
	} catch (error) {
		console.error(`Error updating post: ${error}`);
		throw error;
	}
};

try {
	await updatePostTitle(2, 'Hello');
} catch (error) {
	console.error(error);
}

/*
Response status - 200
Post #2: "qui est esse".
Response status - 200
{
  userId: 1,
  id: 2,
  title: 'Hello',
  body: 'est rerum tempore vitae\n' +
    'sequi sint nihil reprehenderit dolor beatae ea dolores neque\n' +
    'fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\n' +
    'qui aperiam non debitis possimus qui neque nisi nulla'
}
    */
