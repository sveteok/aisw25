/*
Create a function getPostById(id) that acquires the post item from the jsonplaceholder API by its id. 
Print into console (variables in square brackets):

Post #[id]: "[Title]".
Based on the acquired post item's userId, acquire the data of the user who posted it (under /users/{userId}), 
and modify the print:

Post #[number] by [user name]: [Title]
EXTRA: Use Async & Await instead of .then()!
*/

import axios from 'axios';

interface Post {
	id: number;
	title: string;
	body: string;
	userId: number;
}

const getPostById = (id: number): void => {
	const res = axios.get<Post>(`https://jsonplaceholder.typicode.com/posts/${id}`);
	res.then((res) => console.log(`Post #${id}: "${res.data.title}".`)).catch((error) => {
		console.error(`Error featching post: ${error}`);
		throw error;
	});
};
await getPostById(1);
//Post #1: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit".

const getPostByIdExtra = async (id: number): Promise<void> => {
	try {
		const res = await axios.get<Post>(`https://jsonplaceholder.typicode.com/posts/${id}`);
		console.log(`Post #${id}: "${res.data.title}".`);
	} catch (error) {
		console.error(`Error featching post: ${error}`);
		throw error;
	}
};
await getPostByIdExtra(1);
//Post #1: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit".
