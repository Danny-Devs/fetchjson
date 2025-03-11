import axios, { AxiosResponse } from 'axios';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const url = 'https://jsonplaceholder.typicode.com/posts';

axios
  .get<Post[]>(url)
  .then((response: AxiosResponse<Post[]>) => {
    const posts: Post[] = response.data;
    console.log(posts);
  })
  .catch((error: Error) => {
    console.error(error);
  });
