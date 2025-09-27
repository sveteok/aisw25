/*
Create a function getPostComments(id) that prints all the comments under a given post.

Note: Use query parameters!
*/

import axios from 'axios';

interface Post {
	id: number;
	title: string;
	body: string;
	userId: number;
}

const getPostComments = async (id: number): Promise<void> => {
	try {
		const res = await axios.get<Post>(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
		console.log(res.data);
	} catch (error) {
		console.error(`Error featching post: ${error}`);
		throw error;
	}
};

getPostComments(1);

/*
[
  {
    postId: 1,
    id: 1,
    name: 'id labore ex et quam laborum',
    email: 'Eliseo@gardner.biz',
    body: 'laudantium enim quasi est quidem magnam voluptate ipsam eos\n' +
      'tempora quo necessitatibus\n' +
      'dolor quam autem quasi\n' +
      'reiciendis et nam sapiente accusantium'
  },
  {
    postId: 1,
    id: 2,
    name: 'quo vero reiciendis velit similique earum',
    email: 'Jayne_Kuhic@sydney.com',
    body: 'est natus enim nihil est dolore omnis voluptatem numquam\n' +
      'et omnis occaecati quod ullam at\n' +
      'voluptatem error expedita pariatur\n' +
      'nihil sint nostrum voluptatem reiciendis et'
  },
  {
    postId: 1,
    id: 3,
    name: 'odio adipisci rerum aut animi',
    email: 'Nikita@garfield.biz',
    body: 'quia molestiae reprehenderit quasi aspernatur\n' +
      'aut expedita occaecati aliquam eveniet laudantium\n' +
      'omnis quibusdam delectus saepe quia accusamus maiores nam est\n' +
      'cum et ducimus et vero voluptates excepturi deleniti ratione'
  },
  {
    postId: 1,
    id: 4,
    name: 'alias odio sit',
    email: 'Lew@alysha.tv',
    body: 'non et atque\n' +
      'occaecati deserunt quas accusantium unde odit nobis qui voluptatem\n' +
      'quia voluptas consequuntur itaque dolor\n' +
      'et qui rerum deleniti ut occaecati'
  },
  {
    postId: 1,
    id: 5,
    name: 'vero eaque aliquid doloribus et culpa',
    email: 'Hayden@althea.biz',
    body: 'harum non quasi et ratione\n' +
      'tempore iure ex voluptates in ratione\n' +
      'harum architecto fugit inventore cupiditate\n' +
      'voluptates magni quo et'
  }
]
  */
